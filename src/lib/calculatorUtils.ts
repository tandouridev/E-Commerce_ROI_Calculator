
export interface CalculatorInputs {
  monthlySales: number;
  averageOrderValue: number;
  profitMargin: number;
  marketingBudget: number;
  operatingCosts: number;
  projectedGrowthRate: number;
  timeframeMonths: number;
  callCenterConfirmationRate?: number;
  callCenterConfirmationCost?: number;
  shippingDeliverability?: number;
  shippingCost?: number;
}

export interface CalculatorResults {
  totalRevenue: number;
  totalProfit: number;
  roi: number;
  paybackPeriod: number;
  growthProjection: { month: number; revenue: number; profit: number }[];
  marketingEfficiency: number;
  operatingMargin: number;
}

export const calculateROI = (inputs: CalculatorInputs): CalculatorResults => {
  const {
    monthlySales,
    averageOrderValue,
    profitMargin,
    marketingBudget,
    operatingCosts,
    projectedGrowthRate,
    timeframeMonths,
    callCenterConfirmationRate = 100,
    callCenterConfirmationCost = 0,
    shippingDeliverability = 100,
    shippingCost = 0,
  } = inputs;

  const businessType = localStorage.getItem('businessType') || 'e-commerce';
  const isCOD = businessType === 'cod';

  // Initial calculations
  let effectiveMonthlySales = monthlySales;
  let effectiveCosts = operatingCosts;
  
  // Apply COD-specific adjustments if applicable
  if (isCOD) {
    // Apply call center confirmation rate
    effectiveMonthlySales = monthlySales * (callCenterConfirmationRate / 100);
    
    // Apply shipping deliverability rate
    effectiveMonthlySales = effectiveMonthlySales * (shippingDeliverability / 100);
    
    // Add call center costs
    const callCenterCosts = monthlySales * callCenterConfirmationCost;
    
    // Add shipping costs for confirmed orders
    const shippingCosts = effectiveMonthlySales * shippingCost;
    
    // Add to operating costs
    effectiveCosts += callCenterCosts + shippingCosts;
  }
  
  const monthlyRevenue = effectiveMonthlySales * averageOrderValue;
  const monthlyProfit = monthlyRevenue * (profitMargin / 100) - (effectiveCosts / timeframeMonths);
  const totalInvestment = marketingBudget + effectiveCosts;
  
  // Growth projection calculations
  const growthProjection = Array.from({ length: timeframeMonths }, (_, i) => {
    const growthFactor = Math.pow(1 + projectedGrowthRate / 100, i);
    const monthRevenue = monthlyRevenue * growthFactor;
    const monthProfit = monthRevenue * (profitMargin / 100) - (effectiveCosts / timeframeMonths) - (marketingBudget / timeframeMonths);
    
    return {
      month: i + 1,
      revenue: parseFloat(monthRevenue.toFixed(2)),
      profit: parseFloat(monthProfit.toFixed(2)),
    };
  });
  
  // Calculate cumulative values
  const totalRevenue = growthProjection.reduce((sum, month) => sum + month.revenue, 0);
  const totalProfit = growthProjection.reduce((sum, month) => sum + month.profit, 0);
  
  // Calculate ROI
  const roi = totalInvestment > 0 ? ((totalProfit / totalInvestment) * 100) : 0;
  
  // Calculate payback period (in months)
  let cumulativeProfit = 0;
  let paybackPeriod = timeframeMonths;
  
  for (let i = 0; i < growthProjection.length; i++) {
    cumulativeProfit += growthProjection[i].profit;
    if (cumulativeProfit >= totalInvestment && paybackPeriod === timeframeMonths) {
      paybackPeriod = i + 1;
      break;
    }
  }
  
  // Marketing efficiency (Revenue per marketing dollar spent)
  const marketingEfficiency = marketingBudget > 0 ? totalRevenue / marketingBudget : 0;
  
  // Operating margin
  const operatingMargin = totalRevenue > 0 ? ((totalProfit / totalRevenue) * 100) : 0;
  
  return {
    totalRevenue,
    totalProfit,
    roi,
    paybackPeriod,
    growthProjection,
    marketingEfficiency,
    operatingMargin,
  };
};

export const formatCurrency = (value: number): string => {
  const currency = localStorage.getItem('currency') || 'usd';
  
  const currencyMap: { [key: string]: string } = {
    'usd': 'USD',
    'eur': 'EUR',
    'gbp': 'GBP',
    'cad': 'CAD',
    'aed': 'AED'
  };
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyMap[currency] || 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value / 100);
};

// Function to export calculator inputs and results to CSV
export const exportToCSV = (inputs: CalculatorInputs, results: CalculatorResults | null): void => {
  if (!results) return;
  
  const businessType = localStorage.getItem('businessType') || 'e-commerce';
  const isCOD = businessType === 'cod';
  
  // Create CSV header row
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Parameter,Value\n";
  
  // Add input parameters
  csvContent += `Monthly Sales,${inputs.monthlySales}\n`;
  csvContent += `Average Order Value,${inputs.averageOrderValue}\n`;
  csvContent += `Profit Margin,${inputs.profitMargin}%\n`;
  csvContent += `Marketing Budget,${inputs.marketingBudget}\n`;
  csvContent += `Operating Costs,${inputs.operatingCosts}\n`;
  csvContent += `Projected Growth Rate,${inputs.projectedGrowthRate}%\n`;
  csvContent += `Timeframe (Months),${inputs.timeframeMonths}\n`;
  
  // Add COD-specific inputs if applicable
  if (isCOD) {
    csvContent += `Call Center Confirmation Rate,${inputs.callCenterConfirmationRate}%\n`;
    csvContent += `Call Center Confirmation Cost,${inputs.callCenterConfirmationCost}\n`;
    csvContent += `Shipping Deliverability,${inputs.shippingDeliverability}%\n`;
    csvContent += `Shipping Cost,${inputs.shippingCost}\n`;
  }
  
  // Add a separator
  csvContent += "\nResults\n";
  
  // Add results
  csvContent += `Total Revenue,${results.totalRevenue.toFixed(2)}\n`;
  csvContent += `Total Profit,${results.totalProfit.toFixed(2)}\n`;
  csvContent += `ROI,${results.roi.toFixed(2)}%\n`;
  csvContent += `Payback Period,${results.paybackPeriod} months\n`;
  csvContent += `Marketing Efficiency,${results.marketingEfficiency.toFixed(2)}\n`;
  csvContent += `Operating Margin,${results.operatingMargin.toFixed(2)}%\n`;
  
  // Add growth projection table
  csvContent += "\nMonthly Growth Projection\n";
  csvContent += "Month,Revenue,Profit\n";
  
  results.growthProjection.forEach(month => {
    csvContent += `${month.month},${month.revenue.toFixed(2)},${month.profit.toFixed(2)}\n`;
  });
  
  // Create a download link
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "roi_calculator_results.csv");
  document.body.appendChild(link);
  
  // Trigger download
  link.click();
  
  // Clean up
  document.body.removeChild(link);
};
