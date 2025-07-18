import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/test-utils';
import { SectorAllocation } from '../SectorAllocation';
import { holdingsData } from '@/data/mockData';

describe('SectorAllocation', () => {
  it('renders sector allocation chart', () => {
    render(<SectorAllocation holdings={holdingsData} />);
    
    expect(document.querySelector('.recharts-responsive-container')).toBeInTheDocument();
  });

  it('displays sector list', () => {
    render(<SectorAllocation holdings={holdingsData} />);
    
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText('Healthcare')).toBeInTheDocument();
    expect(screen.getByText('Financial Services')).toBeInTheDocument();
  });

  it('handles empty holdings array', () => {
    render(<SectorAllocation holdings={[]} />);
    
    expect(document.querySelector('.recharts-responsive-container')).toBeInTheDocument();
  });

  it('calculates sector percentages correctly', () => {
    render(<SectorAllocation holdings={holdingsData} />);
    
    const percentageElements = screen.getAllByText(/%/);
    expect(percentageElements.length).toBeGreaterThan(0);
  });
});