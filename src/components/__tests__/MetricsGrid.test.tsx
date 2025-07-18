import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/test-utils';
import { MetricsGrid } from '../MetricsGrid';

describe('MetricsGrid', () => {
  const mockProps = {
    portfolioValue: 125000,
    totalReturn: 25000,
    totalReturnPercent: 20,
    benchmarkPerformance: {
      sp500: 15.5,
      russell2000: 12.3,
      msciWorld: 14.2,
    },
  };

  it('renders all metric cards', () => {
    render(<MetricsGrid {...mockProps} />);
    
    expect(screen.getByText('Portfolio Value')).toBeInTheDocument();
    expect(screen.getByText('Total Return')).toBeInTheDocument();
    expect(screen.getAllByText('vs S&P 500')[0]).toBeInTheDocument();
    expect(screen.getByText('Outperformance')).toBeInTheDocument();
  });

  it('displays portfolio value correctly', () => {
    render(<MetricsGrid {...mockProps} />);
    
    // Look for the container that has both $ and 125,000
    const portfolioValueElement = screen.getByText('Portfolio Value').closest('.space-y-1');
    expect(portfolioValueElement).toHaveTextContent('$125,000');
  });

  it('displays total return correctly', () => {
    render(<MetricsGrid {...mockProps} />);
    const totalReturnElement = screen.getByText('Total Return').closest('.space-y-1');
    expect(totalReturnElement).toHaveTextContent('$25,000');
  });

  it('displays return percentage correctly', () => {
    render(<MetricsGrid {...mockProps} />);
    
    const totalReturnElement = screen.getByText('Total Return').closest('.space-y-1');
    expect(totalReturnElement).toHaveTextContent('20.00%');
  });

  it('displays benchmark comparisons', () => {
    render(<MetricsGrid {...mockProps} />);
    
    const benchmarkElement = screen.getAllByText('vs S&P 500')[0].closest('.space-y-1');
    expect(benchmarkElement).toHaveTextContent('15.50%');
  });

  it('handles zero values', () => {
    const zeroProps = {
      portfolioValue: 0,
      totalReturn: 0,
      totalReturnPercent: 0,
      benchmarkPerformance: {
        sp500: 0,
        russell2000: 0,
        msciWorld: 0,
      },
    };

    render(<MetricsGrid {...zeroProps} />);
    
    const portfolioValueElement = screen.getByText('Portfolio Value').closest('.space-y-1');
    expect(portfolioValueElement).toHaveTextContent('$0');
    
    const totalReturnElement = screen.getByText('Total Return').closest('.space-y-1');
    expect(totalReturnElement).toHaveTextContent('0.00%');
  });
});