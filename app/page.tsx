import { Suspense } from "react";
import { getStockRecommendations, FilterOptions } from "@/lib/stock-service";
import { StockCard } from "@/components/stock-card";
import { StockCardSkeleton } from "@/components/stock-card-skeleton";
import { StockFilter } from "@/components/stock-filter";
import { TrendingUp, Target, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SearchParams {
  sector?: string;
  watchlist?: string;
}

async function StockRecommendations({ filter }: { filter?: FilterOptions }) {
  const recommendations = await getStockRecommendations(40, filter);

  if (recommendations.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Recommendations Found</CardTitle>
          <CardDescription>
            {filter?.sector || filter?.watchlistGroup
              ? `No stocks meet the criteria for the selected filter. Try a different filter or check back later.`
              : `Currently, no stocks meet the criteria. Please check back later.`
            }
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recommendations.map((recommendation) => (
        <StockCard key={recommendation.stock.symbol} recommendation={recommendation} />
      ))}
    </div>
  );
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  
  const filter: FilterOptions | undefined = params.sector || params.watchlist
    ? {
        sector: params.sector,
        watchlistGroup: params.watchlist,
      }
    : undefined;

  // Generate a key for Suspense to force re-render on filter change
  const filterKey = params.sector || params.watchlist || 'all';
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <TrendingUp className="w-10 h-10 text-blue-600" />
            Indonesian Stock Analyst
          </h1>
          <p className="text-lg text-muted-foreground">
            Smart recommendations based on foreign accumulation and technical analysis
          </p>
        </div>

        {/* Strategy Info */}
        <Card className="mb-8 border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Investment Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-1">🎯 Target</p>
                <p className="text-muted-foreground">Hold for 1 month with 20%+ expected return</p>
              </div>
              <div>
                <p className="font-semibold mb-1">📊 Key Indicator</p>
                <p className="text-muted-foreground">Foreign accumulation for 7+ consecutive days</p>
              </div>
              <div>
                <p className="font-semibold mb-1">🔍 Analysis</p>
                <p className="text-muted-foreground">Volume trends, RSI, momentum, and price patterns</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="w-5 h-5" />
              About This Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>
              This app analyzes Indonesian stocks (IDX) using real-time data from Yahoo Finance. 
              The recommendations are based on:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li><strong>Foreign Accumulation:</strong> Detecting patterns where foreign investors accumulate stocks over multiple days</li>
              <li><strong>Volume Analysis:</strong> Identifying stocks with increasing volume trends</li>
              <li><strong>Technical Indicators:</strong> RSI (Relative Strength Index) for momentum analysis</li>
              <li><strong>Price Patterns:</strong> Uptrend detection and 52-week range positioning</li>
              <li><strong>Expected Returns:</strong> Calculated based on historical volatility and momentum</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">
              💡 Data is cached for 1 hour to ensure reliability when Yahoo Finance API is unavailable.
            </p>
          </CardContent>
        </Card>

        {/* Filter */}
        <Suspense fallback={<div className="h-16 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse mb-6" />}>
          <StockFilter />
        </Suspense>

        {/* Recommendations */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {params.sector
              ? `${params.sector} Recommendations`
              : params.watchlist
              ? `⭐ ${params.watchlist} Watchlist`
              : 'Top Recommendations'}
          </h2>
          <Suspense
            key={filterKey}
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <StockCardSkeleton key={i} />
                ))}
              </div>
            }
          >
            <StockRecommendations filter={filter} />
          </Suspense>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground mt-12 pb-8">
          <p>Data powered by Yahoo Finance | Updated every hour</p>
          <p className="mt-2">
            ⚠️ <strong>Disclaimer:</strong> This is for educational purposes only. 
            Always do your own research before investing.
          </p>
        </div>
      </div>
    </div>
  );
}

