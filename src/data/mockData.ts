
export interface PerformanceData {
  date: string;
  portfolioValue: number;
  benchmarkSP500: number;
  benchmarkRussell2000: number;
  benchmarkMSCIWorld: number;
  cashFlow?: number;
  marketEvents?: string[];
}

export interface CorporateAction {
  type: "dividend" | "split" | "spinoff" | "merger";
  date: string;
  details: string;
  impactOnShares?: number;
  impactOnPrice?: number;
}

export interface Holding {
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
  lastUpdated: string;
  corporateActions?: CorporateAction[];
  riskMetrics: {
    volatility: number;
    sharpeRatio: number;
    maxDrawdown: number;
  };
}

export const performanceData: PerformanceData[] = [
  {
    date: "2023-06-22",
    portfolioValue: 1000000,
    benchmarkSP500: 1000000,
    benchmarkRussell2000: 1000000,
    benchmarkMSCIWorld: 1000000,
    cashFlow: 50000,
    marketEvents: ["portfolio_inception"]
  },
  {
    date: "2023-07-22",
    portfolioValue: 1020000,
    benchmarkSP500: 1015000,
    benchmarkRussell2000: 1008000,
    benchmarkMSCIWorld: 1012000
  },
  {
    date: "2023-08-22",
    portfolioValue: 985000,
    benchmarkSP500: 992000,
    benchmarkRussell2000: 988000,
    benchmarkMSCIWorld: 995000,
    marketEvents: ["market_correction"]
  },
  {
    date: "2023-09-22",
    portfolioValue: 1035000,
    benchmarkSP500: 1025000,
    benchmarkRussell2000: 1018000,
    benchmarkMSCIWorld: 1028000,
    marketEvents: ["quarterly_rebalance"]
  },
  {
    date: "2023-10-22",
    portfolioValue: 1058000,
    benchmarkSP500: 1042000,
    benchmarkRussell2000: 1035000,
    benchmarkMSCIWorld: 1045000
  },
  {
    date: "2023-11-22",
    portfolioValue: 1072000,
    benchmarkSP500: 1055000,
    benchmarkRussell2000: 1048000,
    benchmarkMSCIWorld: 1058000
  },
  {
    date: "2023-12-22",
    portfolioValue: 1089000,
    benchmarkSP500: 1068000,
    benchmarkRussell2000: 1056000,
    benchmarkMSCIWorld: 1072000,
    marketEvents: ["year_end_rebalance"]
  },
  {
    date: "2024-01-22",
    portfolioValue: 1095000,
    benchmarkSP500: 1075000,
    benchmarkRussell2000: 1062000,
    benchmarkMSCIWorld: 1078000
  },
  {
    date: "2024-02-22",
    portfolioValue: 1108000,
    benchmarkSP500: 1088000,
    benchmarkRussell2000: 1074000,
    benchmarkMSCIWorld: 1085000
  },
  {
    date: "2024-03-22",
    portfolioValue: 1125000,
    benchmarkSP500: 1105000,
    benchmarkRussell2000: 1089000,
    benchmarkMSCIWorld: 1098000,
    marketEvents: ["quarterly_rebalance"]
  },
  {
    date: "2024-04-22",
    portfolioValue: 1098000,
    benchmarkSP500: 1082000,
    benchmarkRussell2000: 1075000,
    benchmarkMSCIWorld: 1088000,
    marketEvents: ["market_volatility"]
  },
  {
    date: "2024-05-22",
    portfolioValue: 1142000,
    benchmarkSP500: 1118000,
    benchmarkRussell2000: 1102000,
    benchmarkMSCIWorld: 1115000
  },
  {
    date: "2024-06-21",
    portfolioValue: 1087234,
    benchmarkSP500: 1063421,
    benchmarkRussell2000: 1021876,
    benchmarkMSCIWorld: 1056789,
    marketEvents: ["quarterly_rebalance"]
  }
];

export const holdingsData: Holding[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    sector: "Technology",
    subSector: "Consumer Electronics",
    currentValue: 245760,
    shares: 1230,
    avgCostBasis: 165.40,
    currentPrice: 199.80,
    dayChange: 4.20,
    dayChangePercent: 2.14,
    totalReturn: 42294,
    totalReturnPercent: 20.78,
    weight: 24.58,
    beta: 1.26,
    dividendYield: 0.52,
    peRatio: 28.7,
    marketCap: 3120000000000,
    lastUpdated: "2024-06-22T16:00:00Z",
    corporateActions: [
      {
        type: "split",
        date: "2024-02-15",
        details: "4:1 stock split",
        impactOnShares: 4,
        impactOnPrice: 0.25
      }
    ],
    riskMetrics: {
      volatility: 0.28,
      sharpeRatio: 1.34,
      maxDrawdown: -0.15
    }
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    sector: "Technology",
    subSector: "Software",
    currentValue: 198450,
    shares: 485,
    avgCostBasis: 358.20,
    currentPrice: 409.20,
    dayChange: -2.15,
    dayChangePercent: -0.52,
    totalReturn: 24735,
    totalReturnPercent: 14.24,
    weight: 19.85,
    beta: 0.98,
    dividendYield: 0.72,
    peRatio: 34.2,
    marketCap: 3040000000000,
    lastUpdated: "2024-06-22T16:00:00Z",
    corporateActions: [
      {
        type: "dividend",
        date: "2024-05-15",
        details: "Quarterly dividend $0.75",
        impactOnPrice: -0.75
      }
    ],
    riskMetrics: {
      volatility: 0.25,
      sharpeRatio: 1.52,
      maxDrawdown: -0.12
    }
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    sector: "Technology",
    subSector: "Internet Services",
    currentValue: 156780,
    shares: 925,
    avgCostBasis: 142.50,
    currentPrice: 169.50,
    dayChange: 1.85,
    dayChangePercent: 1.10,
    totalReturn: 24975,
    totalReturnPercent: 18.95,
    weight: 15.68,
    beta: 1.12,
    peRatio: 24.8,
    marketCap: 2100000000000,
    lastUpdated: "2024-06-22T16:00:00Z",
    riskMetrics: {
      volatility: 0.32,
      sharpeRatio: 1.18,
      maxDrawdown: -0.18
    }
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    sector: "Consumer Discretionary",
    subSector: "E-commerce",
    currentValue: 128900,
    shares: 745,
    avgCostBasis: 145.80,
    currentPrice: 173.00,
    dayChange: -1.25,
    dayChangePercent: -0.72,
    totalReturn: 20269,
    totalReturnPercent: 18.67,
    weight: 12.89,
    beta: 1.33,
    peRatio: 52.1,
    marketCap: 1800000000000,
    lastUpdated: "2024-06-22T16:00:00Z",
    riskMetrics: {
      volatility: 0.38,
      sharpeRatio: 0.94,
      maxDrawdown: -0.22
    }
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    sector: "Technology",
    subSector: "Semiconductors",
    currentValue: 89650,
    shares: 125,
    avgCostBasis: 485.20,
    currentPrice: 717.20,
    dayChange: 12.45,
    dayChangePercent: 1.77,
    totalReturn: 29000,
    totalReturnPercent: 47.82,
    weight: 8.97,
    beta: 1.68,
    peRatio: 68.4,
    marketCap: 1750000000000,
    lastUpdated: "2024-06-22T16:00:00Z",
    riskMetrics: {
      volatility: 0.55,
      sharpeRatio: 1.85,
      maxDrawdown: -0.35
    }
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    sector: "Consumer Discretionary",
    subSector: "Electric Vehicles",
    currentValue: 67890,
    shares: 325,
    avgCostBasis: 185.50,
    currentPrice: 208.90,
    dayChange: -3.20,
    dayChangePercent: -1.51,
    totalReturn: 7612.5,
    totalReturnPercent: 12.62,
    weight: 6.79,
    beta: 2.05,
    peRatio: 59.3,
    marketCap: 665000000000,
    lastUpdated: "2024-06-22T16:00:00Z",
    riskMetrics: {
      volatility: 0.72,
      sharpeRatio: 0.68,
      maxDrawdown: -0.45
    }
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",
    sector: "Financial Services",
    subSector: "Banking",
    currentValue: 52340,
    shares: 285,
    avgCostBasis: 168.90,
    currentPrice: 183.65,
    dayChange: 0.95,
    dayChangePercent: 0.52,
    totalReturn: 4204.25,
    totalReturnPercent: 8.73,
    weight: 5.23,
    beta: 1.15,
    dividendYield: 2.35,
    peRatio: 12.8,
    marketCap: 537000000000,
    lastUpdated: "2024-06-22T16:00:00Z",
    riskMetrics: {
      volatility: 0.28,
      sharpeRatio: 0.92,
      maxDrawdown: -0.18
    }
  },
  {
    symbol: "JNJ",
    name: "Johnson & Johnson",
    sector: "Healthcare",
    subSector: "Pharmaceuticals",
    currentValue: 41250,
    shares: 265,
    avgCostBasis: 148.50,
    currentPrice: 155.66,
    dayChange: -0.35,
    dayChangePercent: -0.22,
    totalReturn: 1898.24,
    totalReturnPercent: 4.82,
    weight: 4.13,
    beta: 0.68,
    dividendYield: 3.12,
    peRatio: 15.2,
    marketCap: 388000000000,
    lastUpdated: "2024-06-22T16:00:00Z",
    corporateActions: [
      {
        type: "spinoff",
        date: "2024-04-01",
        details: "Kenvue spinoff",
        impactOnShares: 0.0952
      }
    ],
    riskMetrics: {
      volatility: 0.18,
      sharpeRatio: 0.65,
      maxDrawdown: -0.08
    }
  }
];
