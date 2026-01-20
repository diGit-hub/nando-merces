import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import heroImage1 from 'figma:asset/6b82895a9c742e27af5bcaea1fcd195c4ef9a400.png';
import heroImage2 from 'figma:asset/2ca0f9be7b39738c75167c2dce95f9f6bdb70ce6.png';
import heroImage3 from 'figma:asset/f3ac8b4d66358d1e87d2763a13e649afb8751d26.png';
import heroImage4 from 'figma:asset/774565681b28d58f4acb05a856b31ba731d36c1a.png';

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