
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-400 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <span className="text-xl font-bold">Stockfish Capital</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Stockfish Capital. All rights reserved. | Private M&A Specialists
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
