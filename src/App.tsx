import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard, type Product } from './components/ProductCard';
import { ShoppingCartDrawer, type CartItem } from './components/ShoppingCartDrawer';
import { BudgetCalculator } from './components/BudgetCalculator';
import { ImageLightbox } from './components/ImageLightbox';

const products: Product[] = [
  {
    id: 1,
    title: 'Retrato Contemporâneo',
    artist: 'Nando Mercês',
    price: 2500.00,
    image: 'https://images.unsplash.com/photo-1701958213864-2307a737e853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBhaW50aW5nJTIwYXJ0fGVufDF8fHx8MTc2NjIyOTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pintura Original',
    status: 'disponivel',
  },
  {
    id: 2,
    title: 'Abstração Moderna',
    artist: 'Nando Mercês',
    price: 3200.00,
    image: 'https://images.unsplash.com/photo-1711883747226-fa2e60c302c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1vZGVybiUyMGFydHxlbnwxfHx8fDE3NjYyMzUwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pintura Original',
    status: 'disponivel',
  },
  {
    id: 3,
    title: 'Paisagem Natural',
    artist: 'Nando Mercês',
    price: 2800.00,
    image: 'https://images.unsplash.com/photo-1688588426729-dc4f7bdb8fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwYWludGluZ3xlbnwxfHx8fDE3NjYxODY0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pintura Original',
    status: 'vendido',
  },
  {
    id: 4,
    title: 'Escultura Clássica',
    artist: 'Nando Mercês',
    price: 4500.00,
    image: 'https://images.unsplash.com/photo-1720303429758-92e2123800cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3VscHR1cmUlMjBhcnR8ZW58MXx8fHwxNzY2MjQ4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Escultura',
    status: 'disponivel',
  },
  {
    id: 5,
    title: 'Arte Vibrante',
    artist: 'Nando Mercês',
    price: 1900.00,
    image: 'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFydHdvcmt8ZW58MXx8fHwxNzY2MjQ4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pintura Original',
    status: 'vendido',
  },
  {
    id: 6,
    title: 'Galeria Contemporânea',
    artist: 'Nando Mercês',
    price: 3500.00,
    image: 'https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc2NjIzMjEyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Coleção Exclusiva',
    status: 'disponivel',
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [portfolioTab, setPortfolioTab] = useState<'disponivel' | 'vendido'>('disponivel');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const availableProducts = products.filter(p => p.status === 'disponivel');
  const soldProducts = products.filter(p => p.status === 'vendido');
  const displayedProducts = portfolioTab === 'disponivel' ? availableProducts : soldProducts;

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header onCartClick={() => setIsCartOpen(true)} cartItemCount={cartItemCount} />

      <Hero />

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Sobre Nando Mercês</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Com mais de 15 anos de experiência, Nando Mercês transforma momentos em arte.
              Especializados em retratos personalizados, pinturas originais e réplicas de obras
              clássicas com qualidade museológica.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cada obra é cuidadosamente criada à mão, garantindo exclusividade e atenção aos
              detalhes que fazem toda a diferença.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mb-3">Pinturas ao Vivo em Casamentos</h3>
              <p className="text-gray-600">
                Eternize seu momento especial com uma pintura ao vivo durante a cerimônia. Uma recordação única e emocionante do seu grande dia.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="mb-3">Pinturas Originais e Personalizadas</h3>
              <p className="text-gray-600">
                Criações exclusivas desenvolvidas especialmente para você, do conceito à execução, refletindo sua visão e personalidade.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="mb-3">Desenhos Realistas</h3>
              <p className="text-gray-600">
                Retratos e desenhos com técnicas apuradas que capturam cada detalhe com precisão fotográfica e sensibilidade artística.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3">Arte Digital</h3>
              <p className="text-gray-600">
                Ilustrações digitais versáteis incluindo arte realista, cartoon estilizado e desenhos para colorir personalizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BudgetCalculator />

      {/* Destaques Section */}
      <section id="destaques" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-3 text-white">DESTAQUES</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore nossa seleção de obras exclusivas, criadas com paixão e técnica apurada
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-8">Portfolio</h2>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setPortfolioTab('disponivel')}
                className={`px-6 py-3 rounded-lg transition-colors ${portfolioTab === 'disponivel'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Obras Disponíveis ({availableProducts.length})
              </button>
              <button
                onClick={() => setPortfolioTab('vendido')}
                className={`px-6 py-3 rounded-lg transition-colors ${portfolioTab === 'vendido'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Vendidos ({soldProducts.length})
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onImageClick={() => handleOpenLightbox(index)}
              />
            ))}
          </div>

          {displayedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {portfolioTab === 'disponivel'
                  ? 'Nenhuma obra disponível no momento.'
                  : 'Nenhuma obra vendida ainda.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-4 text-white">Nando Mercês</h3>
              <p className="text-gray-400">
                Transformando momentos em arte desde 2008.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-white">Contato</h4>
              <p className="text-gray-400">contato@nandomerces.com.br</p>
              <p className="text-gray-400">(11) 98765-4321</p>
            </div>
            <div>
              <h4 className="mb-4 text-white">Horário</h4>
              <p className="text-gray-400">Segunda a Sexta: 9h - 18h</p>
              <p className="text-gray-400">Sábado: 10h - 14h</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Nando Mercês. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <ShoppingCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        products={displayedProducts}
        initialIndex={lightboxIndex}
      />
    </div>
  );
}