import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import heroImage1 from '../assets/lilo.jpg';
import heroImage2 from '../assets/casamento.jpg';
import heroImage3 from '../assets/encomenda.jpg';
import heroImage4 from '../assets/maria-e-jesus.png';

const slides = [
  {
    image: heroImage1,
    title: 'Mais que arte.\nUma experiência.',
    description: 'Obras de artes exclusivas e personalizadas (originais e réplicas).',
  },
  {
    image: heroImage2,
    title: 'Transforme momentos\nem eternidade.',
    description: 'Retratos realistas feitos à mão que capturam a essência de cada momento especial.',
  },
  {
    image: heroImage3,
    title: 'Arte que conecta\ncorações.',
    description: 'Ilustrações personalizadas que celebram amor, família e amizade.',
  },
  {
    image: heroImage4,
    title: 'Beleza em\ncada traço.',
    description: 'Retratos delicados com técnica apurada e atenção aos detalhes.',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 20000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-10 container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-white mb-6 whitespace-pre-line">
              {slides[currentSlide].title}
            </h1>
            <p className="text-white/90 text-lg mb-8">
              {slides[currentSlide].description}
            </p>
            <a 
              href="#destaques" 
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <ArrowDown className="w-5 h-5" />
              <span className="underline">Conheça nossos projetos</span>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores de navegação */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}