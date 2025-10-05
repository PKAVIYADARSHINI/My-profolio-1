import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400" /> by P. Kaviya Darshini
        </p>
        <p className="text-gray-600 text-sm mt-2">
          {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
