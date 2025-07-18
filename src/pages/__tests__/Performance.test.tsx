import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/test-utils';
import Performance from '../Performance';

describe('Performance Page', () => {
  it('renders performance page', () => {
    render(<Performance />);
    
    expect(screen.getByText('Portfolio Performance')).toBeInTheDocument();
  });

  it('displays performance chart', () => {
    render(<Performance />);
    
    expect(screen.getByText('Performance Analysis')).toBeInTheDocument();
  });

  it('displays metrics grid', () => {
    render(<Performance />);
    
    expect(screen.getByText('Portfolio Value')).toBeInTheDocument();
    expect(screen.getByText('Total Return')).toBeInTheDocument();
  });

  it('displays summary stats', () => {
    render(<Performance />);
    
    expect(screen.getByText('Best Month')).toBeInTheDocument();
    expect(screen.getByText('Worst Month')).toBeInTheDocument();
    expect(screen.getByText('Volatility')).toBeInTheDocument();
  });

  it('displays date range information', () => {
    render(<Performance />);
    
    // Check if date range is displayed (format: Jun 21, 2023)
    const dateText = screen.getByText(/\w{3} \d{1,2}, \d{4}/);
    expect(dateText).toBeInTheDocument();
  });
});