
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { holdingsData } from "@/data/mockData";
import { HoldingsTable } from "@/components/HoldingsTable";
import { SectorAllocation } from "@/components/SectorAllocation";
import { Search, PieChart, TrendingUp, Shield, Star, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Holdings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sectorFilter, setSectorFilter] = useState("all");
  
  const totalValue = holdingsData.reduce((sum, holding) => sum + holding.currentValue, 0);
  const totalGainLoss = holdingsData.reduce((sum, holding) => sum + holding.totalReturn, 0);
  const totalGainLossPercent = (totalGainLoss / (totalValue - totalGainLoss)) * 100;
  
  const filteredHoldings = holdingsData.filter(holding => {
    const matchesSearch = holding.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         holding.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = sectorFilter === "all" || holding.sector === sectorFilter;
    return matchesSearch && matchesSector;
  });
  
  const sectors = [...new Set(holdingsData.map(h => h.sector))];
  const avgBeta = holdingsData.reduce((sum, h) => sum + h.beta * (h.weight / 100), 0);
  const avgDividendYield = holdingsData.filter(h => h.dividendYield).reduce((sum, h) => sum + (h.dividendYield || 0) * (h.weight / 100), 0);

  return (
    <div className="flex flex-col space-y-8 p-6 w-full">
      {/* Header Section - Clear hierarchy */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-foreground">Portfolio Holdings</h1>
          <p className="text-muted-foreground">
            Detailed view of your {holdingsData.length} portfolio positions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="flex items-center gap-2">
            <PieChart className="h-4 w-4" />
            {holdingsData.length} Positions
          </Badge>
        </div>
      </div>

      {/* Key Metrics - Visual hierarchy */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Total Value
                </p>
                <p className="text-3xl font-bold text-foreground">
                  ${totalValue.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={cn(
          "border-l-4",
          totalGainLoss >= 0 ? "border-l-success" : "border-l-destructive"
        )}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Total Gain/Loss
                </p>
                <p className={cn(
                  "text-2xl font-bold flex items-center gap-1",
                  totalGainLoss >= 0 ? "text-success" : "text-destructive"
                )}>
                  {totalGainLoss >= 0 ? <ArrowUp className="h-5 w-5" /> : <ArrowDown className="h-5 w-5" />}
                  {totalGainLoss >= 0 ? '+' : ''}${totalGainLoss.toLocaleString()}
                </p>
                <p className={cn(
                  "text-sm font-medium",
                  totalGainLoss >= 0 ? "text-success" : "text-destructive"
                )}>
                  {totalGainLossPercent >= 0 ? '+' : ''}{totalGainLossPercent.toFixed(2)}%
                </p>
              </div>
              <div className={cn(
                "flex items-center justify-center w-12 h-12 rounded-lg",
                totalGainLoss >= 0 ? "bg-success/10" : "bg-destructive/10"
              )}>
                <TrendingUp className={cn(
                  "h-6 w-6",
                  totalGainLoss >= 0 ? "text-success" : "text-destructive"
                )} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-chart-4">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Portfolio Beta
                </p>
                <p className="text-3xl font-bold text-foreground">{avgBeta.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">vs S&P 500</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-chart-4/10 rounded-lg">
                <Shield className="h-6 w-6 text-chart-4" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-success">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Avg. Dividend Yield
                </p>
                <p className="text-3xl font-bold text-foreground">{avgDividendYield.toFixed(2)}%</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg">
                <PieChart className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Full Width Holdings Table */}
      <Card className="w-full">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-xl">Holdings Analysis</CardTitle>
              <CardDescription>
                Detailed breakdown of portfolio positions
              </CardDescription>
            </div>
          </div>
          
          {/* Progressive disclosure - filters */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by symbol or company name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sectorFilter} onValueChange={setSectorFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sectors</SelectItem>
                {sectors.map(sector => (
                  <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <HoldingsTable holdings={filteredHoldings} />
        </CardContent>
      </Card>

      {/* Supporting analysis below - flex layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-8 bg-primary rounded-full" />
              Sector Allocation
            </CardTitle>
            <CardDescription>
              Portfolio diversification breakdown
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SectorAllocation holdings={holdingsData} />
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-chart-3" />
              Top Performers
            </CardTitle>
            <CardDescription>Best performing positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {holdingsData
                .sort((a, b) => b.totalReturnPercent - a.totalReturnPercent)
                .slice(0, 5)
                .map((holding, index) => (
                  <div key={holding.symbol} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-sm font-mono font-bold text-primary">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{holding.symbol}</p>
                        <p className="text-sm text-muted-foreground truncate max-w-32">{holding.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-success flex items-center gap-1">
                        <ArrowUp className="h-4 w-4" />
                        +{holding.totalReturnPercent.toFixed(1)}%
                      </p>
                      <p className="text-sm text-muted-foreground font-mono">
                        ${holding.totalReturn.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Holdings;
