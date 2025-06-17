
import { useEffect, useState } from "react";
import { CalculatorResults, formatCurrency, formatPercentage } from "@/lib/calculatorUtils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ArrowDown, ArrowRight, ArrowUp, Calendar, DollarSign, Percent, TrendingUp } from "lucide-react";

interface ResultsProps {
  results: CalculatorResults | null;
}

export default function Results({ results }: ResultsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (results) {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [results]);

  if (!results) {
    return null;
  }
  
  const { 
    totalRevenue, 
    totalProfit, 
    roi, 
    paybackPeriod, 
    growthProjection,
    marketingEfficiency,
    operatingMargin
  } = results;
  
  const roiStatus = roi < 0 ? "negative" : roi < 100 ? "moderate" : "positive";
  
  const roiStatusConfig = {
    negative: {
      icon: <ArrowDown className="h-5 w-5" />,
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      message: "This investment may need reconsideration",
    },
    moderate: {
      icon: <ArrowRight className="h-5 w-5" />,
      color: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
      message: "This investment shows potential but could be optimized",
    },
    positive: {
      icon: <ArrowUp className="h-5 w-5" />,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      message: "This investment shows strong return potential",
    },
  };

  const { icon, color, bgColor, message } = roiStatusConfig[roiStatus];

  return (
    <div className={`space-y-8 transition-all duration-350 ease-expo-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              <DollarSign className="mr-1 h-5 w-5 text-muted-foreground" />
              {formatCurrency(totalRevenue)}
            </CardTitle>
          </CardHeader>
        </Card>
        
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardDescription>Total Profit</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              <DollarSign className="mr-1 h-5 w-5 text-muted-foreground" />
              {formatCurrency(totalProfit)}
            </CardTitle>
          </CardHeader>
        </Card>
        
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardDescription>ROI</CardDescription>
            <CardTitle className={`text-2xl flex items-center ${color}`}>
              <Percent className="mr-1 h-5 w-5" />
              {formatPercentage(roi)}
            </CardTitle>
          </CardHeader>
        </Card>
        
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardDescription>Payback Period</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              <Calendar className="mr-1 h-5 w-5 text-muted-foreground" />
              {paybackPeriod} {paybackPeriod === 1 ? 'month' : 'months'}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
      
      <Card className={`border-l-4 ${color}`}>
        <CardContent className="p-4 flex items-center">
          <div className={`p-2 rounded-full mr-4 ${bgColor} ${color}`}>
            {icon}
          </div>
          <div>
            <h4 className="font-medium">ROI Assessment</h4>
            <p className="text-muted-foreground">{message}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Growth Projection
          </CardTitle>
          <CardDescription>
            Estimated revenue and profit over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={growthProjection}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis 
                  dataKey="month" 
                  label={{ value: 'Month', position: 'insideBottomRight', offset: -10 }} 
                />
                <YAxis 
                  tickFormatter={(value) => formatCurrency(value).replace(',000', 'k')}
                  label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  formatter={(value) => formatCurrency(Number(value))}
                  labelFormatter={(label) => `Month ${label}`}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  name="Revenue"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                  animationDuration={2000}
                />
                <Line
                  type="monotone"
                  dataKey="profit"
                  name="Profit"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                  animationDuration={2000}
                  animationBegin={300}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Marketing Efficiency</CardTitle>
            <CardDescription>Revenue per marketing dollar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">
              {marketingEfficiency.toFixed(2)}x
            </div>
            <p className="text-muted-foreground mt-2">
              For every $1 spent on marketing, you generate ${marketingEfficiency.toFixed(2)} in revenue
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Operating Margin</CardTitle>
            <CardDescription>Profit as percentage of revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">
              {formatPercentage(operatingMargin)}
            </div>
            <p className="text-muted-foreground mt-2">
              {operatingMargin >= 20 
                ? "Healthy profit margin indicating efficient operations" 
                : "Consider optimizing costs to improve profit margin"}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
