import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StockRecommendation } from "@/lib/stock-service";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

interface StockCardProps {
  recommendation: StockRecommendation;
}

export function StockCard({ recommendation }: StockCardProps) {
  const { stock, score, reasons, expectedReturn, foreignAccumulationDays, rsi } = recommendation;
  const isPositive = stock.changePercent >= 0;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{stock.name}</CardTitle>
            <CardDescription>{stock.symbol}</CardDescription>
          </div>
          <Badge variant={score >= 70 ? "default" : "secondary"}>
            Score: {score}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Price Information */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold">
                Rp {stock.price.toLocaleString('id-ID')}
              </p>
              <p className={`text-sm flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Expected Return</p>
              <p className={`text-lg font-semibold ${expectedReturn >= 20 ? 'text-green-600' : 'text-yellow-600'}`}>
                {expectedReturn.toFixed(1)}%
              </p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-muted-foreground">Foreign Accumulation</p>
              <p className="font-medium">{foreignAccumulationDays} days</p>
            </div>
            <div>
              <p className="text-muted-foreground">RSI</p>
              <p className="font-medium flex items-center gap-1">
                <Activity className="w-4 h-4" />
                {rsi?.toFixed(1) || 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Volume</p>
              <p className="font-medium">{(stock.volume / 1000000).toFixed(2)}M</p>
            </div>
            <div>
              <p className="text-muted-foreground">Market Cap</p>
              <p className="font-medium">
                {stock.marketCap ? `Rp ${(stock.marketCap / 1000000000).toFixed(1)}B` : 'N/A'}
              </p>
            </div>
          </div>

          {/* Reasons */}
          <div>
            <p className="text-sm font-medium mb-2">Analysis:</p>
            <div className="space-y-1">
              {reasons.map((reason, index) => (
                <div key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 52 Week Range */}
          <div>
            <p className="text-sm text-muted-foreground mb-1">52 Week Range</p>
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute h-full bg-blue-500 rounded-full"
                style={{ 
                  width: `${((stock.price - stock.fiftyTwoWeekLow) / (stock.fiftyTwoWeekHigh - stock.fiftyTwoWeekLow)) * 100}%` 
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>{stock.fiftyTwoWeekLow.toLocaleString('id-ID')}</span>
              <span>{stock.fiftyTwoWeekHigh.toLocaleString('id-ID')}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
