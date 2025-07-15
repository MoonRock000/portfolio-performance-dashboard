import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Target, BarChart3, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricsGridProps {
  portfolioValue: number;
  totalReturn: number;
  totalReturnPercent: number;
  benchmarkPerformance: {
    sp500: number;
    russell2000: number;
    msciWorld: number;
  };
}

export const MetricsGrid = ({ 
  portfolioValue, 
  totalReturn, 
  totalReturnPercent, 
  benchmarkPerformance 
}: MetricsGridProps) => {
  const outperformance = totalReturnPercent - benchmarkPerformance.sp500;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Primary Metric - Portfolio Value */}
      <Card className="border-l-4 border-l-primary">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Portfolio Value
              </p>
              <p className="text-3xl font-bold text-foreground">
                ${portfolioValue.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Total Return */}
      <Card className={cn(
        "border-l-4",
        totalReturn >= 0 ? "border-l-success" : "border-l-destructive"
      )}>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Total Return
              </p>
              <p className={cn(
                "text-2xl font-bold flex items-center gap-1",
                totalReturn >= 0 ? "text-success" : "text-destructive"
              )}>
                {totalReturn >= 0 ? <ArrowUp className="h-5 w-5" /> : <ArrowDown className="h-5 w-5" />}
                {totalReturn >= 0 ? '+' : ''}${totalReturn.toLocaleString()}
              </p>
              <p className={cn(
                "text-sm font-medium",
                totalReturn >= 0 ? "text-success" : "text-destructive"
              )}>
                {totalReturnPercent >= 0 ? '+' : ''}{totalReturnPercent.toFixed(2)}%
              </p>
            </div>
            <div className={cn(
              "flex items-center justify-center w-12 h-12 rounded-lg",
              totalReturn >= 0 ? "bg-success/10" : "bg-destructive/10"
            )}>
              <TrendingUp className={cn(
                "h-6 w-6",
                totalReturn >= 0 ? "text-success" : "text-destructive"
              )} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benchmark Comparison */}
      <Card className="border-l-4 border-l-chart-1">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                vs S&P 500
              </p>
              <p className={cn(
                "text-2xl font-bold",
                benchmarkPerformance.sp500 >= 0 ? "text-success" : "text-destructive"
              )}>
                {benchmarkPerformance.sp500 >= 0 ? '+' : ''}{benchmarkPerformance.sp500.toFixed(2)}%
              </p>
              <p className="text-sm text-muted-foreground">Benchmark Return</p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-chart-1/10 rounded-lg">
              <Target className="h-6 w-6 text-chart-1" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Outperformance */}
      <Card className={cn(
        "border-l-4",
        outperformance >= 0 ? "border-l-success" : "border-l-warning"
      )}>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Outperformance
              </p>
              <p className={cn(
                "text-2xl font-bold flex items-center gap-1",
                outperformance >= 0 ? "text-success" : "text-warning"
              )}>
                {outperformance >= 0 ? <ArrowUp className="h-5 w-5" /> : <ArrowDown className="h-5 w-5" />}
                {outperformance >= 0 ? '+' : ''}{outperformance.toFixed(2)}%
              </p>
              <p className="text-sm text-muted-foreground">vs S&P 500</p>
            </div>
            <div className={cn(
              "flex items-center justify-center w-12 h-12 rounded-lg",
              outperformance >= 0 ? "bg-success/10" : "bg-warning/10"
            )}>
              <BarChart3 className={cn(
                "h-6 w-6",
                outperformance >= 0 ? "text-success" : "text-warning"
              )} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
