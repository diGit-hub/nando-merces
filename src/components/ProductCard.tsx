import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  image: string;
  category: string;
  status: 'disponivel' | 'vendido';
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onImageClick?: () => void;
}

export function ProductCard({ product, onAddToCart, onImageClick }: ProductCardProps) {
  const isAvailable = product.status === 'disponivel';
  
  return (
    <Card className="group overflow-hidden border-gray-200 hover:shadow-lg transition-shadow">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative cursor-pointer" onClick={onImageClick}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!isAvailable && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center pointer-events-none">
            <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
              VENDIDO
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="mb-3">
          <h3 className="mb-1">{product.title}</h3>
          <p className="text-sm text-gray-600">{product.artist}</p>
          <p className="text-xs text-gray-500 mt-1">{product.category}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg">
            R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
          {isAvailable && (
            <Button
              size="sm"
              onClick={() => onAddToCart(product)}
              className="gap-1"
            >
              <Plus className="w-4 h-4" />
              Adicionar
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}