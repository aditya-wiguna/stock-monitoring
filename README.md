# Indonesian Stock Analyst & Recommendation App

A Next.js application that provides intelligent stock recommendations for Indonesian stocks (IDX) using Yahoo Finance data and technical analysis.

## Features

- **Foreign Accumulation Detection**: Identifies stocks with consistent foreign investor accumulation patterns (7+ days)
- **Technical Analysis**: Uses RSI, volume trends, and price momentum indicators
- **Smart Caching**: Server-side caching (1 hour TTL) ensures reliability when Yahoo Finance API is unavailable
- **Beautiful UI**: Built with shadcn/ui components and Tailwind CSS
- **Real-time Data**: Fetches live stock data from Yahoo Finance
- **Investment Strategy**: Targets 20%+ returns over 1-month holding period

## Strategy

The app analyzes Indonesian stocks based on several criteria:

### Primary Indicators
1. **Foreign Accumulation** (30 points)
   - Detects 7+ consecutive days of above-average volume
   - Indicates institutional interest

2. **Volume Trend** (20 points)
   - Recent 7-day average > 15% higher than previous 7 days
   - Shows increasing market interest

3. **Price Uptrend** (20 points)
   - Recent 10-day average > 2% higher than previous 10 days
   - Confirms positive momentum

4. **Healthy RSI** (15 points)
   - RSI between 30-70
   - Avoids overbought/oversold conditions

5. **Expected Return** (15 points)
   - Calculated from historical volatility and momentum
   - Targets >20% monthly return

6. **52-Week Position** (10 points)
   - Price positioned between 30%-70% of 52-week range
   - Indicates good entry point

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI**: shadcn/ui + Tailwind CSS
- **Data Source**: Yahoo Finance API (yahoo-finance2)
- **Caching**: node-cache
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. The app automatically analyzes 40 Indonesian stocks
2. View recommendations sorted by score
3. Each stock card shows:
   - Current price and daily change
   - Expected return percentage
   - Foreign accumulation days
   - RSI value
   - Volume and market cap
   - 52-week range visualization
   - Analysis reasons

## Stock List

The app analyzes 40 major Indonesian stocks including:
- Banking: BBCA.JK, BBRI.JK, BMRI.JK, BBNI.JK
- Telecommunications: TLKM.JK, EXCL.JK, ISAT.JK
- Consumer Goods: UNVR.JK, HMSP.JK, ICBP.JK, INDF.JK
- Mining & Energy: ADRO.JK, PTBA.JK, INCO.JK, ANTM.JK
- Automotive: ASII.JK, UNTR.JK
- And many more...

## Configuration

### Adjust Minimum Score
In `app/page.tsx`, modify the minimum score threshold:
```typescript
const recommendations = await getStockRecommendations(40); // Change 40 to desired minimum score
```

### Modify Stock List
Edit `lib/indonesian-stocks.ts` to add or remove stocks.

### Cache Settings
Adjust cache TTL in `lib/cache.ts`:
```typescript
const cache = new NodeCache({ 
  stdTTL: 3600, // Time to live in seconds
  checkperiod: 600 // Cleanup interval
});
```

## API & Caching

- **Stock Data Cache**: 1 hour (3600 seconds)
- **Recommendations Cache**: 30 minutes (1800 seconds)
- **Automatic Cleanup**: Every 10 minutes

Caching ensures the app remains functional during Yahoo Finance API outages.

## Disclaimer

⚠️ **Important**: This application is for educational and informational purposes only. It does not constitute financial advice. Always conduct your own research and consult with a qualified financial advisor before making investment decisions.

The recommendations are based on technical analysis and historical data, which do not guarantee future performance.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

