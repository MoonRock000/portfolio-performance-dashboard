
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Holding } from "@/data/mockData";
import { TrendingUp, TrendingDown, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface HoldingsTableProps {
  holdings: Holding[];
}

export const HoldingsTable = ({ holdings }: HoldingsTableProps) => {
  return (
    <TooltipProvider>
      <div className="overflow-x-auto bg-white rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-muted/30">
              <TableHead className="text-foreground font-semibold">Symbol</TableHead>
              <TableHead className="text-foreground font-semibold">Company</TableHead>
              <TableHead className="text-foreground font-semibold">Sector</TableHead>
              <TableHead className="text-foreground font-semibold text-right">Shares</TableHead>
              <TableHead className="text-foreground font-semibold text-right">Current Price</TableHead>
              <TableHead className="text-foreground font-semibold text-right">Market Value</TableHead>
              <TableHead className="text-foreground font-semibold text-right">Day Change</TableHead>
              <TableHead className="text-foreground font-semibold text-right">Total Return</TableHead>
              <TableHead className="text-foreground font-semibold text-right">Weight</TableHead>
              <TableHead className="text-foreground font-semibold text-center">Risk</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {holdings.map((holding) => (
              <TableRow key={holding.symbol} className="border-b border-border hover:bg-muted/20 transition-colors">
                <TableCell className="font-medium text-foreground">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono font-bold">{holding.symbol}</span>
                    {holding.corporateActions && holding.corporateActions.length > 0 && (
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-primary" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-card border-border">
                          <p className="text-sm">
                            Recent: {holding.corporateActions[0].details}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-foreground">
                  <div>
                    <div className="font-medium">{holding.name}</div>
                    <div className="text-xs text-muted-foreground">{holding.subSector}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs">
                    {holding.sector}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-foreground font-mono">
                  {holding.shares.toLocaleString()}
                </TableCell>
                <TableCell className="text-right text-foreground font-medium font-mono">
                  ${holding.currentPrice.toFixed(2)}
                </TableCell>
                <TableCell className="text-right text-foreground font-semibold font-mono">
                  ${holding.currentValue.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className={`flex items-center justify-end space-x-1 ${
                    holding.dayChange >= 0 ? 'text-success' : 'text-destructive'
                  }`}>
                    {holding.dayChange >= 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <div className="font-mono">
                      <div className="font-medium">
                        {holding.dayChange >= 0 ? '+' : ''}${holding.dayChange.toFixed(2)}
                      </div>
                      <div className="text-xs">
                        {holding.dayChangePercent >= 0 ? '+' : ''}{holding.dayChangePercent.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className={`font-mono ${
                    holding.totalReturn >= 0 ? 'text-success' : 'text-destructive'
                  }`}>
                    <div className="font-medium">
                      {holding.totalReturn >= 0 ? '+' : ''}${holding.totalReturn.toLocaleString()}
                    </div>
                    <div className="text-xs">
                      {holding.totalReturnPercent >= 0 ? '+' : ''}{holding.totalReturnPercent.toFixed(2)}%
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right text-foreground font-medium font-mono">
                  {holding.weight.toFixed(1)}%
                </TableCell>
                <TableCell className="text-center">
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge 
                        variant={holding.beta > 1.5 ? "destructive" : holding.beta > 1.0 ? "default" : "secondary"}
                        className="text-xs font-mono"
                      >
                        β {holding.beta.toFixed(2)}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent className="bg-card border-border">
                      <div className="text-sm space-y-1">
                        <p>Beta: {holding.beta.toFixed(2)}</p>
                        <p>Volatility: {(holding.riskMetrics.volatility * 100).toFixed(1)}%</p>
                        <p>Sharpe Ratio: {holding.riskMetrics.sharpeRatio.toFixed(2)}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  );
};
