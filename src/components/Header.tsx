
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Stockfish Capital</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-900 transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-blue-900 transition-colors">Services</a>
            <a href="#criteria" className="text-gray-600 hover:text-blue-900 transition-colors">Investment Criteria</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-900 transition-colors">Contact</a>
          </nav>
          <Button className="bg-blue-900 hover:bg-blue-800 text-white">
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
