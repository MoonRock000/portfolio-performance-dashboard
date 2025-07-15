
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Holding } from '@/data/mockData';

interface SectorAllocationProps {
  holdings: Holding[];
}

export const SectorAllocation = ({ holdings }: SectorAllocationProps) => {
  const sectorData = holdings.reduce((acc, holding) => {
    const existing = acc.find(item => item.sector === holding.sector);
    if (existing) {
      existing.value += holding.weight;
      existing.amount += holding.currentValue;
    } else {
      acc.push({
        sector: holding.sector,
        value: holding.weight,
        amount: holding.currentValue
      });
    }
    return acc;
  }, [] as Array<{ sector: string; value: number; amount: number }>);

  // Using semantic colors from design system
  const COLORS = [
    'hsl(var(--chart-1))', // Primary blue
    'hsl(var(--chart-2))', // Success green
    'hsl(var(--chart-3))', // Warning amber
    'hsl(var(--chart-4))', // Purple
    'hsl(var(--chart-5))', // Destructive red
    'hsl(var(--chart-6))', // Teal
    'hsl(var(--primary))',  // Additional primary
    'hsl(var(--success))',  // Additional success
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
          <p className="font-medium text-foreground mb-2">{data.sector}</p>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              Weight: <span className="font-medium text-primary">{data.value.toFixed(1)}%</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Value: <span className="font-medium text-success">${data.amount.toLocaleString()}</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sectorData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={30}
              dataKey="value"
              stroke="hsl(var(--background))"
              strokeWidth={2}
            >
              {sectorData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="space-y-3">
        {sectorData
          .sort((a, b) => b.value - a.value)
          .map((sector, index) => (
          <div key={sector.sector} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
            <div className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full flex-shrink-0" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground truncate">{sector.sector}</p>
                <p className="text-sm text-muted-foreground">${sector.amount.toLocaleString()}</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="font-bold text-foreground">{sector.value.toFixed(1)}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
