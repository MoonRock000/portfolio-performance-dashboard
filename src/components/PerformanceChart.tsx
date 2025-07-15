
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PerformanceData } from '@/data/mockData';
import { format } from 'date-fns';

interface PerformanceChartProps {
  data: PerformanceData[];
}

export const PerformanceChart = ({ data }: PerformanceChartProps) => {
  const chartData = data.map(item => ({
    ...item,
    date: format(new Date(item.date), 'MMM yyyy'),
    portfolioPercent: ((item.portfolioValue - data[0].portfolioValue) / data[0].portfolioValue) * 100,
    sp500Percent: ((item.benchmarkSP500 - data[0].benchmarkSP500) / data[0].benchmarkSP500) * 100,
    russell2000Percent: ((item.benchmarkRussell2000 - data[0].benchmarkRussell2000) / data[0].benchmarkRussell2000) * 100,
    msciWorldPercent: ((item.benchmarkMSCIWorld - data[0].benchmarkMSCIWorld) / data[0].benchmarkMSCIWorld) * 100,
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
          <p className="font-medium text-foreground mb-2">{label}</p>
          <div className="space-y-1">
            {payload.map((entry: any, index: number) => (
              <div key={index} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm text-muted-foreground">{entry.name}</span>
                </div>
                <span className="text-sm font-mono font-medium" style={{ color: entry.color }}>
                  {entry.value >= 0 ? '+' : ''}{entry.value.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: any) => {
    return (
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm font-medium text-muted-foreground">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="hsl(var(--border))"
            strokeOpacity={0.5}
          />
          <XAxis 
            dataKey="date" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickFormatter={(value) => `${value.toFixed(0)}%`}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
          <Line 
            type="monotone" 
            dataKey="portfolioPercent" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            name="Portfolio"
            dot={{ fill: 'hsl(var(--primary))', strokeWidth: 0, r: 3 }}
            activeDot={{ r: 5, stroke: 'hsl(var(--primary))', strokeWidth: 2, fill: 'hsl(var(--background))' }}
          />
          <Line 
            type="monotone" 
            dataKey="sp500Percent" 
            stroke="hsl(var(--chart-2))" 
            strokeWidth={2}
            name="S&P 500"
            strokeDasharray="4 4"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="russell2000Percent" 
            stroke="hsl(var(--chart-3))" 
            strokeWidth={2}
            name="Russell 2000"
            strokeDasharray="4 4"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="msciWorldPercent" 
            stroke="hsl(var(--chart-4))" 
            strokeWidth={2}
            name="MSCI World"
            strokeDasharray="4 4"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
