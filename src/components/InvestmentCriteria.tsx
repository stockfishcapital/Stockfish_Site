
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, BarChart3, Calendar } from "lucide-react";

const InvestmentCriteria = () => {
  const criteria = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      title: "Deal Size",
      description: "Transaction values below $50 million",
      details: "We focus on smaller deals to provide personalized attention and competitive terms"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: "Financial Performance",
      description: "Stable and predictable cashflow",
      details: "EBITDA positive with consistent revenue streams and healthy margins"
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      title: "Business Maturity",
      description: "Established operations with track record",
      details: "Minimum 3-5 years of operating history with proven business model"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-600" />,
      title: "Market Position",
      description: "Strong competitive position",
      details: "Defensible market position with loyal customer base and growth opportunities"
    }
  ];

  return (
    <section id="criteria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Criteria</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We seek to partner with profitable SMEs that meet our specific acquisition criteria
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {criteria.map((item, index) => (
            <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{item.title}</CardTitle>
                </div>
                <p className="text-blue-900 font-medium">{item.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentCriteria;
