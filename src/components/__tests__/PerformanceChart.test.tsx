import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/test-utils';
import { PerformanceChart } from '../PerformanceChart';
import { performanceData } from '@/data/mockData';

describe('PerformanceChart', () => {
  it('renders performance chart', () => {
    render(<PerformanceChart data={performanceData} />);
    
    expect(document.querySelector('.recharts-responsive-container')).toBeInTheDocument();
  });

  it('displays chart with data', () => {
    render(<PerformanceChart data={performanceData} />);
    
    const chartContainer = document.querySelector('.recharts-responsive-container');
    expect(chartContainer).toBeInTheDocument();
  });

  it('handles empty data array', () => {
    render(<PerformanceChart data={[]} />);
    
    expect(document.querySelector('.recharts-responsive-container')).toBeInTheDocument();
  });

  it('displays chart elements', () => {
    render(<PerformanceChart data={performanceData} />);
    
    expect(document.querySelector('.recharts-surface')).toBeInTheDocument();
  });
});