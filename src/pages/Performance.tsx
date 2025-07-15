
import { PerformanceChart } from "@/components/PerformanceChart";
import { MetricsGrid } from "@/components/MetricsGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { performanceData, holdingsData } from "@/data/mockData";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp } from "lucide-react";

const Performance = () => {
  const latestData = performanceData[performanceData.length - 1];
  const initialValue = performanceData[0].portfolioValue;
  
  const totalReturn = latestData.portfolioValue - initialValue;
  const totalReturnPercent = ((latestData.portfolioValue - initialValue) / initialValue) * 100;
  
  const benchmarkPerformance = {
    sp500: ((latestData.benchmarkSP500 - performanceData[0].benchmarkSP500) / performanceData[0].benchmarkSP500) * 100,
    russell2000: ((latestData.benchmarkRussell2000 - performanceData[0].benchmarkRussell2000) / performanceData[0].benchmarkRussell2000) * 100,
    msciWorld: ((latestData.benchmarkMSCIWorld - performanceData[0].benchmarkMSCIWorld) / performanceData[0].benchmarkMSCIWorld) * 100,
  };

  const timeSeriesLength = performanceData.length;
  const startDate = format(new Date(performanceData[0].date), 'MMM d, yyyy');
  const endDate = format(new Date(latestData.date), 'MMM d, yyyy');

  return (
    <div className="space-y-8 p-6">
      {/* Header with clear hierarchy - Tufte principle of clear communication */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-foreground">Portfolio Performance</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{startDate} - {endDate}</span>
            </div>
            <Badge variant="outline" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              {timeSeriesLength} data points
            </Badge>
          </div>
        </div>
      </div>

      {/* Key Metrics - High data-ink ratio */}
      <MetricsGrid
        portfolioValue={latestData.portfolioValue}
        totalReturn={totalReturn}
        totalReturnPercent={totalReturnPercent}
        benchmarkPerformance={benchmarkPerformance}
      />

      {/* Performance Chart - Focus on data */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Performance Analysis</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Cumulative returns vs. benchmark indices
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <PerformanceChart data={performanceData} />
          
          {/* Summary insights - Progressive disclosure */}
          <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <p className="text-sm text-muted-foreground">Best Month</p>
              <p className="text-lg font-bold text-success">+12.4%</p>
              <p className="text-xs text-muted-foreground">March 2024</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <p className="text-sm text-muted-foreground">Worst Month</p>
              <p className="text-lg font-bold text-destructive">-8.2%</p>
              <p className="text-xs text-muted-foreground">October 2023</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <p className="text-sm text-muted-foreground">Volatility</p>
              <p className="text-lg font-bold text-foreground">14.2%</p>
              <p className="text-xs text-muted-foreground">Annualized</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Performance;
