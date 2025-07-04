
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Search, FileText, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-blue-900" />,
      title: "Business Acquisition",
      description: "We identify and acquire profitable SMEs with stable cashflow and growth potential, focusing on deals under $50 million."
    },
    {
      icon: <Handshake className="w-8 h-8 text-blue-900" />,
      title: "Strategic Partnerships",
      description: "Building long-term relationships with business owners, management teams, and industry partners for mutual success."
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-900" />,
      title: "Deal Structuring",
      description: "Flexible deal structures tailored to each situation, including earnouts, seller financing, and management equity."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-900" />,
      title: "Post-Acquisition Support",
      description: "Hands-on operational support to drive growth while preserving company culture and key relationships."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive M&A services focused on small and medium enterprise transactions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-lg w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
