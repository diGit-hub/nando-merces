interface HeaderProps {
  onCartClick: () => void;
  cartItemCount: number;
}

export function Header({  }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-12">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center">
            <img 
              src="/assinatura.png" 
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
      </div>
    </header>
  );
}