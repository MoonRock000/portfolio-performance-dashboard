import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/test-utils';
import { HoldingsTable } from '../HoldingsTable';
import { holdingsData } from '@/data/mockData';

describe('HoldingsTable', () => {
  it('renders holdings table with correct data', () => {
    render(<HoldingsTable holdings={holdingsData} />);

    expect(screen.getByText('Symbol')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Shares')).toBeInTheDocument();
    expect(screen.getByText('Current Price')).toBeInTheDocument();
    expect(screen.getByText('Market Value')).toBeInTheDocument();
    expect(screen.getByText('Total Return')).toBeInTheDocument();
  });

  it('displays holding data correctly', () => {
    render(<HoldingsTable holdings={holdingsData} />);
    
    expect(screen.getByText('AAPL')).toBeInTheDocument();
    expect(screen.getByText('Apple Inc.')).toBeInTheDocument();
    expect(screen.getByText('1,230')).toBeInTheDocument(); // Actual shares value
  });

  it('handles empty holdings array', () => {
    render(<HoldingsTable holdings={[]} />);
    
    expect(screen.getByText('Symbol')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    
    expect(document.querySelector('tbody')).toBeInTheDocument();
  });

  it('displays correct number of holdings', () => {
    render(<HoldingsTable holdings={holdingsData} />);
    
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(holdingsData.length + 1);
  });
});