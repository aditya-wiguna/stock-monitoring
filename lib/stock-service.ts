import YahooFinance from 'yahoo-finance2';
import cache from './cache';
import { INDONESIAN_STOCKS, WATCHLIST_STOCKS } from './indonesian-stocks';

// Initialize Yahoo Finance v3 with options to suppress notices
const yahooFinance = new YahooFinance({ 
  suppressNotices: ['yahooSurvey', 'ripHistorical'] 
});

export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  averageVolume: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  previousClose: number;
  regularMarketOpen: number;
}

export interface StockHistory {
  date: Date;
  close: number;
  volume: number;
  open: number;
  high: number;
  low: number;
}

export interface StockRecommendation {
  stock: StockData;
  score: number;
  reasons: string[];
  expectedReturn: number;
  foreignAccumulationDays: number;
  volumeIncreaseTrend: boolean;
  priceUptrend: boolean;
  rsi?: number;
}

/**
 * Fetch real-time stock data with caching
 */
export async function getStockData(symbol: string): Promise<StockData | null> {
  const cacheKey = `stock_${symbol}`;
  const cached = cache.get<StockData>(cacheKey);
  
  if (cached) {
    return cached;
  }

  try {
    const quote = await yahooFinance.quote(symbol, {}, { validateResult: false });
    
    if (!quote) return null;

    const stockData: StockData = {
      symbol: quote.symbol,
      name: INDONESIAN_STOCKS.find(s => s.symbol === symbol)?.name || quote.shortName || quote.longName || symbol,
      price: quote.regularMarketPrice || 0,
      change: quote.regularMarketChange || 0,
      changePercent: quote.regularMarketChangePercent || 0,
      volume: quote.regularMarketVolume || 0,
      marketCap: quote.marketCap || 0,
      averageVolume: quote.averageDailyVolume3Month || 0,
      fiftyTwoWeekHigh: quote.fiftyTwoWeekHigh || 0,
      fiftyTwoWeekLow: quote.fiftyTwoWeekLow || 0,
      previousClose: quote.regularMarketPreviousClose || 0,
      regularMarketOpen: quote.regularMarketOpen || 0,
    };

    cache.set(cacheKey, stockData);
    return stockData;
  } catch (error) {
    console.error(`Error fetching stock data for ${symbol}:`, error);
    return null;
  }
}

/**
 * Fetch historical data with caching
 */
export async function getStockHistory(symbol: string, days: number = 30): Promise<StockHistory[]> {
  const cacheKey = `history_${symbol}_${days}`;
  const cached = cache.get<StockHistory[]>(cacheKey);
  
  if (cached) {
    return cached;
  }

  try {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const history = await yahooFinance.historical(
      symbol,
      {
        period1: startDate,
        period2: endDate,
        interval: '1d',
      },
      { validateResult: false }
    );

    const stockHistory: StockHistory[] = history.map((h: StockHistory) => ({
      date: h.date,
      close: h.close,
      volume: h.volume,
      open: h.open,
      high: h.high,
      low: h.low,
    }));

    cache.set(cacheKey, stockHistory);
    return stockHistory;
  } catch (error) {
    console.error(`Error fetching history for ${symbol}:`, error);
    return [];
  }
}

/**
 * Calculate RSI (Relative Strength Index)
 */
function calculateRSI(prices: number[], period: number = 14): number {
  if (prices.length < period + 1) return 50;

  let gains = 0;
  let losses = 0;

  for (let i = 1; i <= period; i++) {
    const change = prices[i] - prices[i - 1];
    if (change > 0) gains += change;
    else losses -= change;
  }

  const avgGain = gains / period;
  const avgLoss = losses / period;

  if (avgLoss === 0) return 100;
  const rs = avgGain / avgLoss;
  const rsi = 100 - (100 / (1 + rs));

  return rsi;
}

/**
 * Detect foreign accumulation pattern
 * Foreign investors typically accumulate stocks with:
 * - Consistent volume increase
 * - Price stability or uptrend
 * - Multiple consecutive days of positive volume
 */
function detectForeignAccumulation(history: StockHistory[]): { days: number; volumeTrend: boolean } {
  if (history.length < 7) return { days: 0, volumeTrend: false };

  let consecutiveDays = 0;
  const avgVolume = history.slice(0, -7).reduce((sum, h) => sum + h.volume, 0) / (history.length - 7);
  
  // Check last 10 days for accumulation pattern
  const recentHistory = history.slice(-10);
  
  for (let i = recentHistory.length - 1; i >= 0; i--) {
    const dayData = recentHistory[i];
    
    // Volume should be above average and price should be stable or up
    if (dayData.volume > avgVolume * 1.1) {
      consecutiveDays++;
    } else if (consecutiveDays > 0) {
      break; // Stop counting if pattern breaks
    }
  }

  // Check if volume trend is increasing
  const recent7Days = history.slice(-7).reduce((sum, h) => sum + h.volume, 0) / 7;
  const previous7Days = history.slice(-14, -7).reduce((sum, h) => sum + h.volume, 0) / 7;
  const volumeTrend = recent7Days > previous7Days * 1.15; // 15% increase

  return { days: consecutiveDays, volumeTrend };
}

/**
 * Check if stock is in uptrend
 */
function isInUptrend(history: StockHistory[]): boolean {
  if (history.length < 10) return false;

  const recentPrices = history.slice(-10).map(h => h.close);
  const olderPrices = history.slice(-20, -10).map(h => h.close);

  const recentAvg = recentPrices.reduce((a, b) => a + b, 0) / recentPrices.length;
  const olderAvg = olderPrices.reduce((a, b) => a + b, 0) / olderPrices.length;

  return recentAvg > olderAvg * 1.02; // 2% higher
}

/**
 * Calculate expected return based on historical volatility and momentum
 */
function calculateExpectedReturn(history: StockHistory[]): number {
  if (history.length < 30) return 0;

  const prices = history.map(h => h.close);
  const currentPrice = prices[prices.length - 1];
  const monthAgoPrice = prices[0];

  // Calculate historical volatility (simplified)
  const returns = prices.slice(1).map((price, i) => (price - prices[i]) / prices[i]);
  const avgReturn = returns.reduce((a, b) => a + b, 0) / returns.length;
  const variance = returns.reduce((sum, ret) => sum + Math.pow(ret - avgReturn, 2), 0) / returns.length;
  const volatility = Math.sqrt(variance) * Math.sqrt(30); // Annualized monthly

  // Momentum-based projection
  const momentum = (currentPrice - monthAgoPrice) / monthAgoPrice;
  
  // Expected return is combination of momentum and volatility potential
  const expectedReturn = (momentum * 1.5 + volatility * 0.5) * 100;

  return expectedReturn;
}

/**
 * Analyze and score stock for recommendation
 */
export async function analyzeStock(symbol: string): Promise<StockRecommendation | null> {
  const stockData = await getStockData(symbol);
  if (!stockData) return null;

  const history = await getStockHistory(symbol, 30);
  if (history.length < 20) return null;

  const prices = history.map(h => h.close);
  const rsi = calculateRSI(prices);
  const { days: foreignAccDays, volumeTrend } = detectForeignAccumulation(history);
  const priceUptrend = isInUptrend(history);
  const expectedReturn = calculateExpectedReturn(history);

  const reasons: string[] = [];
  let score = 0;

  // Scoring criteria
  if (foreignAccDays >= 7) {
    score += 30;
    reasons.push(`Foreign accumulation detected (${foreignAccDays} days)`);
  } else if (foreignAccDays >= 5) {
    score += 15;
    reasons.push(`Possible foreign accumulation (${foreignAccDays} days)`);
  }

  if (volumeTrend) {
    score += 20;
    reasons.push('Volume increasing trend');
  }

  if (priceUptrend) {
    score += 20;
    reasons.push('Price in uptrend');
  }

  if (rsi < 70 && rsi > 30) {
    score += 15;
    reasons.push(`Healthy RSI (${rsi.toFixed(1)})`);
  }

  if (expectedReturn > 20) {
    score += 15;
    reasons.push(`High return potential (${expectedReturn.toFixed(1)}%)`);
  }

  // Distance from 52-week high/low
  const currentPrice = stockData.price;
  const fiftyTwoWeekRange = stockData.fiftyTwoWeekHigh - stockData.fiftyTwoWeekLow;
  const pricePosition = (currentPrice - stockData.fiftyTwoWeekLow) / fiftyTwoWeekRange;
  
  if (pricePosition > 0.3 && pricePosition < 0.7) {
    score += 10;
    reasons.push('Good price position in 52-week range');
  }

  return {
    stock: stockData,
    score,
    reasons,
    expectedReturn,
    foreignAccumulationDays: foreignAccDays,
    volumeIncreaseTrend: volumeTrend,
    priceUptrend,
    rsi,
  };
}

export interface FilterOptions {
  sector?: string;
  watchlistGroup?: string;
}

/**
 * Get filtered stock list based on sector or watchlist
 */
function getFilteredStocks(filter?: FilterOptions) {
  // If watchlist group is selected, return from WATCHLIST_STOCKS
  if (filter?.watchlistGroup && filter.watchlistGroup !== 'All Watchlist') {
    return WATCHLIST_STOCKS.filter(s => s.group === filter.watchlistGroup);
  }

  // If any watchlist is selected (All Watchlist), return all watchlist stocks
  if (filter?.watchlistGroup === 'All Watchlist' || filter?.watchlistGroup === '') {
    // Return all stocks (no filter)
  }

  // If sector is selected
  if (filter?.sector && filter.sector !== 'All Sectors') {
    return INDONESIAN_STOCKS.filter(s => s.sector === filter.sector);
  }

  // Default: return all Indonesian stocks
  return INDONESIAN_STOCKS;
}

/**
 * Get top stock recommendations
 */
export async function getStockRecommendations(
  minScore: number = 50,
  filter?: FilterOptions
): Promise<StockRecommendation[]> {
  const filterKey = filter?.sector || filter?.watchlistGroup || 'all';
  const cacheKey = `recommendations_${minScore}_${filterKey}`;
  const cached = cache.get<StockRecommendation[]>(cacheKey);
  
  if (cached) {
    return cached;
  }

  const recommendations: StockRecommendation[] = [];
  
  // Get filtered stocks based on filter options
  let stocksToAnalyze = getFilteredStocks(filter);

  // If watchlist "All Watchlist" is selected, analyze watchlist stocks
  if (filter?.watchlistGroup === 'All Watchlist') {
    stocksToAnalyze = WATCHLIST_STOCKS;
  }

  // Analyze stocks in batches to avoid rate limiting
  for (const stock of stocksToAnalyze) {
    try {
      const analysis = await analyzeStock(stock.symbol);
      if (analysis && analysis.score >= minScore) {
        // Add sector/group info to the recommendation
        const stockInfo = INDONESIAN_STOCKS.find(s => s.symbol === stock.symbol);
        const watchlistInfo = WATCHLIST_STOCKS.find(s => s.symbol === stock.symbol);
        recommendations.push({
          ...analysis,
          stock: {
            ...analysis.stock,
            name: analysis.stock.name,
          },
        });
      }
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (error) {
      console.error(`Error analyzing ${stock.symbol}:`, error);
    }
  }

  // Sort by score
  recommendations.sort((a, b) => b.score - a.score);

  // Cache for 30 minutes (recommendations should be refreshed more frequently)
  cache.set(cacheKey, recommendations, 1800);

  return recommendations;
}
