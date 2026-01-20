import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/9e7eb3ba4c056e06ca439ae0070e2ab33280a4c8.png';

interface HeaderProps {
  onCartClick: () => void;
  cartItemCount: number;
}

export function Header({ onCartClick, cartItemCount }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center">
            <img 
              src={logo} 
              alt="Nando Mercês" 
              className="h-10 w-auto brightness-0"
            />
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-700 hover:text-gray-900 transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-gray-900 transition-colors">
              Serviços
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">
              Portfolio
            </a>
          </nav>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={onCartClick}
        >
          <ShoppingCart className="w-5 h-5" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}