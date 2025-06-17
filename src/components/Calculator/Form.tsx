import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalculatorInputs } from "@/lib/calculatorUtils";
import { Calculator, Download } from "lucide-react";
import { toast } from "sonner";

interface FormProps {
  onCalculate: (inputs: CalculatorInputs) => void;
  onExportCSV: (inputs: CalculatorInputs) => void;
  isCalculating?: boolean;
  businessType: string;
}

export default function Form({ onCalculate, onExportCSV, isCalculating = false, businessType }: FormProps) {
  const [showCodFields, setShowCodFields] = useState<boolean>(false);

  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlySales: 1000,
    averageOrderValue: 50,
    profitMargin: 30,
    marketingBudget: 5000,
    operatingCosts: 3000,
    projectedGrowthRate: 5,
    timeframeMonths: 12,
    callCenterConfirmationRate: 80,
    callCenterConfirmationCost: 2,
    shippingDeliverability: 90,
    shippingCost: 10,
  });

  useEffect(() => {
    setShowCodFields(businessType === 'cod');
  }, [businessType]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(inputs);
  };

  const handleExportCSV = () => {
    onExportCSV(inputs);
    toast.success("Data exported to CSV successfully!");
  };

  return (
    <Card className="w-full shadow-subtle">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="monthlySales">Monthly Sales Volume</Label>
                <Input
                  id="monthlySales"
                  type="number"
                  min="1"
                  value={inputs.monthlySales}
                  onChange={(e) => handleInputChange("monthlySales", parseInt(e.target.value))}
                  className="focus-ring"
                  disabled={isCalculating}
                />
                <p className="text-sm text-muted-foreground">
                  Number of orders per month
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="averageOrderValue">Average Order Value ($)</Label>
                <Input
                  id="averageOrderValue"
                  type="number"
                  min="1"
                  value={inputs.averageOrderValue}
                  onChange={(e) => handleInputChange("averageOrderValue", parseInt(e.target.value))}
                  className="focus-ring"
                  disabled={isCalculating}
                />
                <p className="text-sm text-muted-foreground">
                  Average dollar value per order
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profitMargin">Profit Margin (%)</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    id="profitMargin"
                    min={1}
                    max={100}
                    step={1}
                    value={[inputs.profitMargin]}
                    onValueChange={(value) => handleInputChange("profitMargin", value[0])}
                    className="flex-1"
                    disabled={isCalculating}
                  />
                  <span className="w-12 text-center">{inputs.profitMargin}%</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Net profit percentage per sale
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectedGrowthRate">Monthly Growth Rate (%)</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    id="projectedGrowthRate"
                    min={0}
                    max={20}
                    step={0.5}
                    value={[inputs.projectedGrowthRate]}
                    onValueChange={(value) => handleInputChange("projectedGrowthRate", value[0])}
                    className="flex-1"
                    disabled={isCalculating}
                  />
                  <span className="w-12 text-center">{inputs.projectedGrowthRate}%</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Expected monthly revenue growth
                </p>
              </div>
              
              {showCodFields && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="callCenterConfirmationRate">Call Center Confirmation Rate (%)</Label>
                    <div className="flex items-center space-x-4">
                      <Slider
                        id="callCenterConfirmationRate"
                        min={0}
                        max={100}
                        step={1}
                        value={[inputs.callCenterConfirmationRate || 80]}
                        onValueChange={(value) => handleInputChange("callCenterConfirmationRate", value[0])}
                        className="flex-1"
                      />
                      <span className="w-12 text-center">{inputs.callCenterConfirmationRate || 80}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Percentage of orders confirmed by call center
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="callCenterConfirmationCost">Call Center Confirmation Cost ($)</Label>
                    <Input
                      id="callCenterConfirmationCost"
                      type="number"
                      min="0"
                      step="0.1"
                      value={inputs.callCenterConfirmationCost || 2}
                      onChange={(e) => handleInputChange("callCenterConfirmationCost", parseFloat(e.target.value))}
                      className="focus-ring"
                    />
                    <p className="text-sm text-muted-foreground">
                      Cost per call to confirm an order
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="marketingBudget">Marketing Budget ($)</Label>
                <Input
                  id="marketingBudget"
                  type="number"
                  min="0"
                  value={inputs.marketingBudget}
                  onChange={(e) => handleInputChange("marketingBudget", parseInt(e.target.value))}
                  className="focus-ring"
                  disabled={isCalculating}
                />
                <p className="text-sm text-muted-foreground">
                  Total marketing investment
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="operatingCosts">Operating Costs ($)</Label>
                <Input
                  id="operatingCosts"
                  type="number"
                  min="0"
                  value={inputs.operatingCosts}
                  onChange={(e) => handleInputChange("operatingCosts", parseInt(e.target.value))}
                  className="focus-ring"
                  disabled={isCalculating}
                />
                <p className="text-sm text-muted-foreground">
                  Monthly operating expenses
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeframeMonths">Timeframe (Months)</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    id="timeframeMonths"
                    min={1}
                    max={36}
                    step={1}
                    value={[inputs.timeframeMonths]}
                    onValueChange={(value) => handleInputChange("timeframeMonths", value[0])}
                    className="flex-1"
                    disabled={isCalculating}
                  />
                  <span className="w-12 text-center">{inputs.timeframeMonths}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Projection period in months
                </p>
              </div>

              {showCodFields && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="shippingDeliverability">Shipping Deliverability (%)</Label>
                    <div className="flex items-center space-x-4">
                      <Slider
                        id="shippingDeliverability"
                        min={0}
                        max={100}
                        step={1}
                        value={[inputs.shippingDeliverability || 90]}
                        onValueChange={(value) => handleInputChange("shippingDeliverability", value[0])}
                        className="flex-1"
                      />
                      <span className="w-12 text-center">{inputs.shippingDeliverability || 90}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Percentage of packages successfully delivered
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shippingCost">Shipping Cost ($)</Label>
                    <Input
                      id="shippingCost"
                      type="number"
                      min="0"
                      step="0.1"
                      value={inputs.shippingCost || 10}
                      onChange={(e) => handleInputChange("shippingCost", parseFloat(e.target.value))}
                      className="focus-ring"
                    />
                    <p className="text-sm text-muted-foreground">
                      Cost per shipment
                    </p>
                  </div>
                </>
              )}

              <div className="pt-6 flex space-x-4">
                <Button 
                  type="submit" 
                  className="flex-1 justify-center items-center flex space-x-2 transition-all duration-250 ease-expo-out hover:translate-y-[-2px] active:translate-y-[1px]"
                  size="lg"
                  disabled={isCalculating}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  {isCalculating ? "Calculating..." : "Calculate ROI"}
                </Button>
                
                <Button 
                  type="button"
                  variant="outline"
                  onClick={handleExportCSV}
                  className="justify-center items-center flex space-x-2"
                  disabled={isCalculating}
                >
                  <Download className="h-5 w-5" />
                  Export
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
