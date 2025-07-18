import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/test-utils';
import Holdings from '../Holdings';

describe('Holdings Page', () => {
  it('renders holdings page', () => {
    render(<Holdings />);
    
    expect(screen.getByText('Portfolio Holdings')).toBeInTheDocument();
  });

  it('displays holdings table', () => {
    render(<Holdings />);
    
    expect(screen.getByText('Symbol')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Shares')).toBeInTheDocument();
  });

  it('displays metrics grid', () => {
    render(<Holdings />);
    
    expect(screen.getByText('Total Value')).toBeInTheDocument();
    expect(screen.getByText('Total Gain/Loss')).toBeInTheDocument();
  });

  it('displays sector allocation', () => {
    render(<Holdings />);
    
    expect(document.querySelector('.recharts-responsive-container')).toBeInTheDocument();
  });

  it('displays holdings data', () => {
    render(<Holdings />);
    
    const aaplElements = screen.getAllByText('AAPL');
    expect(aaplElements.length).toBeGreaterThan(0);
    
    const appleElements = screen.getAllByText('Apple Inc.');
    expect(appleElements.length).toBeGreaterThan(0);
  });
});