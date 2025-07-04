
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Private M&A Specialists</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Partnering with 
            <span className="text-blue-900"> SME Owners</span> for 
            <span className="text-blue-900"> Strategic Exits</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stockfish Capital specializes in acquiring small and medium enterprises with stable cashflow. 
            We focus on transactions below $50 million, providing personalized attention and competitive terms 
            for business owners ready for their next chapter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
              Discuss Your Business
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3">
              View Deal Criteria
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
