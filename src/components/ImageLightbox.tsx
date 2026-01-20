import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import type { Product } from './ProductCard';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  initialIndex: number;
}

export function ImageLightbox({ isOpen, onClose, products, initialIndex }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoomLevel(1);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    setZoomLevel(1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  if (!isOpen) return null;

  const currentProduct = products[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
        aria-label="Fechar"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Zoom Controls */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <button
          onClick={handleZoomOut}
          disabled={zoomLevel <= 1}
          className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Diminuir zoom"
        >
          <ZoomOut className="w-6 h-6" />
        </button>
        <button
          onClick={handleZoomIn}
          disabled={zoomLevel >= 3}
          className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Aumentar zoom"
        >
          <ZoomIn className="w-6 h-6" />
        </button>
        <div className="flex items-center px-3 bg-black bg-opacity-50 rounded-full text-white text-sm">
          {Math.round(zoomLevel * 100)}%
        </div>
      </div>

      {/* Navigation Arrows */}
      {products.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}

      {/* Image Container */}
      <div className="w-full h-full flex items-center justify-center p-16 overflow-auto">
        <div className="relative">
          <img
            src={currentProduct.image}
            alt={currentProduct.title}
            className="max-w-full max-h-full object-contain transition-transform duration-300"
            style={{ transform: `scale(${zoomLevel})` }}
          />

          {/* Status Badge for Sold Items */}
          {currentProduct.status === 'vendido' && (
            <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
              VENDIDO
            </div>
          )}
        </div>
      </div>

      {/* Image Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 text-white">
        <div className="container mx-auto">
          <h3 className="text-2xl mb-2 text-white">{currentProduct.title}</h3>
          <p className="text-gray-300 mb-1">{currentProduct.artist}</p>
          <p className="text-gray-400 text-sm mb-2">{currentProduct.category}</p>
          <p className="text-xl text-white">
            R$ {currentProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
          {products.length > 1 && (
            <p className="text-gray-400 text-sm mt-2">
              {currentIndex + 1} / {products.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
