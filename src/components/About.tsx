
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-8 h-8 text-blue-900" />,
      title: "Proven Track Record",
      description: "Years of experience in private M&A transactions"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-900" />,
      title: "SME Focused",
      description: "Specialized expertise in small and medium enterprise deals"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-900" />,
      title: "Strategic Approach",
      description: "Tailored solutions for each unique business situation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Stockfish Capital</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Stockfish Capital is a specialized private equity firm focused on acquiring small and medium enterprises 
              with stable cashflow and strong fundamentals. We understand that every business has a unique story, 
              and we pride ourselves on providing personalized attention to each transaction.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our focus on deals below $50 million allows us to move quickly and provide competitive terms while 
              maintaining the personal touch that larger firms often cannot offer. We work closely with business 
              owners to structure deals that work for all parties involved.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-3 p-3 bg-blue-50 rounded-lg w-fit">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  "We believe in building lasting partnerships with business owners and management teams. 
                  Our success is measured not just in financial returns, but in the continued growth and 
                  success of the companies we acquire."
                </p>
                <div className="border-t border-blue-400 pt-4">
                  <p className="text-sm text-blue-200">Partnership-driven approach to M&A</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
