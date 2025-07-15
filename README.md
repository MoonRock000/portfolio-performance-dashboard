
## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

### Building for Production

```bash
npm run build
```

The built application will be available in the `dist` directory.



# Portfolio Performance Dashboard

A comprehensive financial portfolio tracking application built with React, TypeScript, and modern data visualization libraries. This project demonstrates professional-grade financial data presentation following Edward Tufte's principles of data visualization excellence.

## 🚀 Features

### Performance Dashboard
- **Historical Performance Tracking**: Interactive line charts comparing portfolio performance against multiple benchmarks (S&P 500, Russell 2000, MSCI World)
- **Key Metrics Display**: Portfolio value, total returns, outperformance metrics with gradient card designs
- **Market Events Timeline**: Chronological display of significant portfolio events and rebalancing activities
- **Statistical Analysis**: Sharpe ratio, volatility, best/worst month performance

### Holdings Analysis
- **Detailed Holdings Table**: Complete position information including shares, current prices, daily changes, and total returns
- **Advanced Filtering**: Search by company name/symbol and filter by sector
- **Sector Allocation Visualization**: Interactive pie chart showing portfolio diversification
- **Risk Metrics**: Beta analysis, volatility measurements, and Sharpe ratios per holding
- **Corporate Actions Tracking**: Visual indicators for stock splits, dividends, and other corporate events

### Design Excellence
- **Dark Theme**: Professional financial interface optimized for extended viewing
- **Responsive Design**: Fully functional across desktop, tablet, and mobile devices
- **Data Hierarchy**: Clear visual emphasis on most critical metrics
- **Progressive Disclosure**: Summary metrics upfront with detailed analysis on demand
- **Interactive Elements**: Hover states, tooltips, and smooth transitions

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom color schemes
- **UI Components**: Shadcn/ui component library
- **Data Visualization**: Recharts for interactive charts and graphs
- **Routing**: React Router for multi-page navigation
- **Icons**: Lucide React for consistent iconography
- **State Management**: React Query for data fetching and caching

## 🎨 Design Heuristics Applied

### Edward Tufte Principles
1. **Maximize Data-Ink Ratio**: Eliminated unnecessary chart elements, focusing on essential data
2. **Avoid Chart Junk**: Clean, minimalist design without decorative elements
3. **Show Data Comparisons**: Multiple benchmark comparisons in single visualization
4. **Integrate Text and Graphics**: Contextual information embedded within charts

### UX Design Laws
1. **Fitts's Law**: Large, easily accessible navigation buttons and interactive elements
2. **Miller's Rule**: Information grouped in digestible chunks (max 7±2 items per section)
3. **Progressive Disclosure**: Primary metrics visible immediately, detailed analysis available on demand
4. **Consistency Principle**: Uniform color coding (green for gains, red for losses) throughout

### Financial Interface Best Practices
1. **Color Psychology**: Red/green for losses/gains, blue for neutral information
2. **Information Hierarchy**: Most critical data (portfolio value, returns) prominently displayed
3. **Data Density**: Efficient use of screen space while maintaining readability
4. **Real-time Feel**: Timestamp displays and "last updated" indicators

## 📊 Sample Data Structure

The application uses realistic financial data structures:

```typescript
interface PerformanceData {
  date: string;
  portfolioValue: number;
  benchmarkSP500: number;
  benchmarkRussell2000: number;
  benchmarkMSCIWorld: number;
  cashFlow?: number;
  marketEvents?: string[];
}

interface Holding {
  symbol: string;
  name: string;
  sector: string;
  subSector: string;
  currentValue: number;
  shares: number;
  avgCostBasis: number;
  currentPrice: number;
  dayChange: number;
  dayChangePercent: number;
  totalReturn: number;
  totalReturnPercent: number;
  weight: number;
  beta: number;
  dividendYield?: number;
  peRatio?: number;
  marketCap: number;
  riskMetrics: {
    volatility: number;
    sharpeRatio: number;
    maxDrawdown: number;
  };
}
```

## 🧪 Testing

The project includes comprehensive unit tests covering:

- Component rendering and functionality
- Data processing and calculations
- User interaction handling
- Responsive design behavior

Run tests with:
```bash
npm run test
```

## 📈 Next Steps & Future Enhancements

### Phase 1: Enhanced Analytics
1. **Advanced Risk Metrics**
   - Value at Risk (VaR) calculations
   - Maximum drawdown analysis
   - Correlation matrices between holdings

2. **Comparative Analysis**
   - Peer portfolio benchmarking
   - Sector performance comparisons
   - Risk-adjusted return analysis

3. **Performance Attribution**
   - Sector allocation vs. stock selection impact
   - Currency hedging effects
   - Asset allocation optimization suggestions

### Phase 2: Real-time Data Integration
1. **Live Market Data**
   - WebSocket connections for real-time price updates
   - Intraday performance tracking
   - Market news integration

2. **Backend API Development**
   - RESTful API for portfolio data management
   - User authentication and authorization
   - Data persistence with PostgreSQL

3. **Advanced Visualizations**
   - Candlestick charts for individual holdings
   - Monte Carlo simulation results
   - Scenario analysis dashboards

### Phase 3: Portfolio Management Tools
1. **Trading Interface**
   - Buy/sell order placement
   - Position sizing recommendations
   - Rebalancing suggestions

2. **Goal-based Planning**
   - Retirement planning calculators
   - Tax optimization strategies
   - ESG scoring and sustainable investing metrics

3. **Reporting & Export**
   - PDF report generation
   - Tax reporting compliance
   - Performance attribution reports
