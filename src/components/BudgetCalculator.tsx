import { useState } from 'react';
import { ChevronRight, Calculator, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import jsPDF from 'jspdf';

type ArtType = 
  | 'casamento' 
  | 'oleo' 
  | 'desenho-colorido' 
  | 'desenho-pb' 
  | 'digital-realista' 
  | 'digital-cartoon' 
  | 'desenho-colorir';

interface Size {
  label: string;
  width: number; // em cm
  height: number; // em cm
}

const CASAMENTO_SIZES: Size[] = [
  { label: '30 × 40 cm', width: 30, height: 40 },
  { label: '30 × 50 cm', width: 30, height: 50 },
  { label: '40 × 40 cm', width: 40, height: 40 },
  { label: '40 × 50 cm', width: 40, height: 50 },
  { label: '50 × 50 cm', width: 50, height: 50 },
  { label: '50 × 70 cm', width: 50, height: 70 },
  { label: '60 × 80 cm', width: 60, height: 80 },
  { label: '70 × 100 cm', width: 70, height: 100 },
  { label: '80 × 120 cm', width: 80, height: 120 },
  { label: '100 × 150 cm', width: 100, height: 150 },
  { label: '120 × 180 cm', width: 120, height: 180 },
  { label: '150 × 200 cm', width: 150, height: 200 },
  { label: '200 × 200 cm', width: 200, height: 200 },
];

const OLEO_SIZES: Size[] = [
  { label: '10 × 10 cm', width: 10, height: 10 },
  { label: '13 × 18 cm', width: 13, height: 18 },
  { label: '15 × 15 cm', width: 15, height: 15 },
  { label: '18 × 24 cm', width: 18, height: 24 },
  { label: '20 × 20 cm', width: 20, height: 20 },
  { label: '20 × 30 cm', width: 20, height: 30 },
  { label: '24 × 30 cm', width: 24, height: 30 },
  { label: '30 × 40 cm', width: 30, height: 40 },
  { label: '30 × 50 cm', width: 30, height: 50 },
  { label: '40 × 40 cm', width: 40, height: 40 },
  { label: '40 × 50 cm', width: 40, height: 50 },
  { label: '50 × 50 cm', width: 50, height: 50 },
  { label: '50 × 70 cm', width: 50, height: 70 },
  { label: '60 × 80 cm', width: 60, height: 80 },
  { label: '70 × 100 cm', width: 70, height: 100 },
  { label: '80 × 120 cm', width: 80, height: 120 },
  { label: '100 × 150 cm', width: 100, height: 150 },
  { label: '120 × 180 cm', width: 120, height: 180 },
  { label: '150 × 200 cm', width: 150, height: 200 },
  { label: '200 × 200 cm', width: 200, height: 200 },
];

const PAPER_SIZES: Size[] = [
  { label: 'A5', width: 14.8, height: 21 },
  { label: 'A4', width: 21, height: 29.7 },
  { label: 'A3', width: 29.7, height: 42 },
  { label: 'A2', width: 42, height: 59.4 },
  { label: 'A1', width: 59.4, height: 84.1 },
  { label: 'A0', width: 84.1, height: 118.9 },
];

const getArtTypeName = (type: ArtType): string => {
  const names: Record<ArtType, string> = {
    'casamento': 'Pintura a Óleo ao Vivo em Casamentos',
    'oleo': 'Pintura a Óleo',
    'desenho-colorido': 'Desenho Colorido',
    'desenho-pb': 'Desenho Preto e Branco',
    'digital-realista': 'Arte Digital Realista',
    'digital-cartoon': 'Arte Digital Cartoonizada',
    'desenho-colorir': 'Desenhos para Colorir Personalizados'
  };
  return names[type];
};

const getBackgroundName = (bg: string): string => {
  const names: Record<string, string> = {
    'simples': 'Fundo Simples',
    'complexo': 'Fundo Complexo',
    'cenario': 'Somente Cenário'
  };
  return names[bg] || bg;
};

export function BudgetCalculator() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [step, setStep] = useState(1);
  const [artType, setArtType] = useState<ArtType | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [peopleCount, setPeopleCount] = useState(1);
  const [backgroundType, setBackgroundType] = useState<'simples' | 'complexo' | 'cenario'>('simples');
  const [drawingCount, setDrawingCount] = useState(1);

  const calculatePrice = (): number => {
    if (!artType) return 0;

    if (artType === 'casamento' && selectedSize) {
      const areaM2 = (selectedSize.width * selectedSize.height) / 10000;
      return areaM2 * 8000;
    }

    if (artType === 'oleo' && selectedSize) {
      const areaM2 = (selectedSize.width * selectedSize.height) / 10000;
      let basePrice = areaM2 * 6000;
      
      if (backgroundType === 'cenario') {
        return basePrice;
      }
      
      basePrice += basePrice * 0.20 * (peopleCount - 1);
      
      if (backgroundType === 'complexo') {
        basePrice += basePrice * 0.25;
      }
      
      return basePrice;
    }

    if (artType === 'desenho-colorido' && selectedSize) {
      const areaM2 = (selectedSize.width * selectedSize.height) / 10000;
      let basePrice = areaM2 * 12000;
      
      if (backgroundType === 'cenario') {
        return basePrice;
      }
      
      basePrice += basePrice * 0.20 * (peopleCount - 1);
      
      if (backgroundType === 'complexo') {
        basePrice += basePrice * 0.25;
      }
      
      return basePrice;
    }

    if (artType === 'desenho-pb' && selectedSize) {
      const areaM2 = (selectedSize.width * selectedSize.height) / 10000;
      let basePrice = areaM2 * 11000;
      
      if (backgroundType === 'cenario') {
        return basePrice;
      }
      
      basePrice += basePrice * 0.20 * (peopleCount - 1);
      
      if (backgroundType === 'complexo') {
        basePrice += basePrice * 0.25;
      }
      
      return basePrice;
    }

    if (artType === 'digital-realista') {
      if (backgroundType === 'cenario') {
        return backgroundType === 'complexo' ? 1200 : 1000;
      }
      const basePrice = backgroundType === 'complexo' ? 1200 : 1000;
      return basePrice + (peopleCount - 1) * 200;
    }

    if (artType === 'digital-cartoon') {
      if (backgroundType === 'cenario') {
        return backgroundType === 'complexo' ? 800 : 600;
      }
      const basePrice = backgroundType === 'complexo' ? 800 : 600;
      return basePrice + (peopleCount - 1) * 100;
    }

    if (artType === 'desenho-colorir') {
      return drawingCount * 15 - drawingCount + 1;
    }

    return 0;
  };

  const generatePDF = () => {
    const pdf = new jsPDF();
    const totalPrice = calculatePrice();
    
    // Título
    pdf.setFontSize(20);
    pdf.text('Orçamento - Nando Mercês', 20, 20);
    
    // Data
    pdf.setFontSize(10);
    const date = new Date().toLocaleDateString('pt-BR');
    pdf.text(`Data: ${date}`, 20, 30);
    
    // Detalhes do orçamento
    pdf.setFontSize(12);
    let yPos = 45;
    
    if (artType) {
      pdf.text(`Tipo de Arte: ${getArtTypeName(artType)}`, 20, yPos);
      yPos += 10;
    }
    
    if (selectedSize) {
      pdf.text(`Tamanho: ${selectedSize.label}`, 20, yPos);
      yPos += 10;
    }
    
    if (artType && !['desenho-colorir', 'digital-realista', 'digital-cartoon', 'casamento'].includes(artType)) {
      pdf.text(`Tipo de Composição: ${getBackgroundName(backgroundType)}`, 20, yPos);
      yPos += 10;
      
      if (backgroundType !== 'cenario') {
        pdf.text(`Quantidade de Pessoas/Animais: ${peopleCount}`, 20, yPos);
        yPos += 10;
      }
    }
    
    if (artType === 'casamento') {
      pdf.setFontSize(10);
      pdf.text('* Todas as características estão inclusas no valor', 20, yPos);
      yPos += 7;
      pdf.text('** Transporte fora de Vitória da Conquista - BA por conta do contratante', 20, yPos);
      yPos += 13;
    }
    
    if (['digital-realista', 'digital-cartoon'].includes(artType || '')) {
      pdf.text(`Tipo de Fundo: ${getBackgroundName(backgroundType)}`, 20, yPos);
      yPos += 10;
      
      if (backgroundType !== 'cenario') {
        pdf.text(`Quantidade de Pessoas/Animais: ${peopleCount}`, 20, yPos);
        yPos += 10;
      }
    }
    
    if (artType === 'desenho-colorir') {
      pdf.text(`Quantidade de Desenhos: ${drawingCount}`, 20, yPos);
      yPos += 10;
    }
    
    // Linha separadora
    yPos += 5;
    pdf.line(20, yPos, 190, yPos);
    yPos += 10;
    
    // Valor total
    pdf.setFontSize(16);
    pdf.text(`VALOR TOTAL: R$ ${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 20, yPos);
    
    yPos += 15;
    pdf.setFontSize(9);
    pdf.text('* Valores aproximados. Entre em contato para orçamento final.', 20, yPos);
    
    // Rodapé
    yPos = 270;
    pdf.setFontSize(10);
    pdf.text('Nando Mercês - Arte Personalizada', 20, yPos);
    pdf.text('Contato: +55 77 98131-1364', 20, yPos + 7);
    
    // Salvar PDF
    pdf.save('orcamento-nando-merces.pdf');
  };

  const sendToWhatsApp = () => {
    // Primeiro gera o PDF
    generatePDF();
    
    // Aguarda um momento para o PDF ser gerado
    setTimeout(() => {
      const totalPrice = calculatePrice();
      let message = `Olá! Gostaria de encomendar uma obra de arte:\n\n`;
      message += `📋 *Detalhes do Orçamento*\n`;
      message += `━━━━━━━━━━━━━━━━━\n\n`;
      
      if (artType) {
        message += `🎨 Tipo: ${getArtTypeName(artType)}\n`;
      }
      
      if (selectedSize) {
        message += `📐 Tamanho: ${selectedSize.label}\n`;
      }
      
      if (artType && !['desenho-colorir', 'digital-realista', 'digital-cartoon', 'casamento'].includes(artType)) {
        message += `🖼️ Composição: ${getBackgroundName(backgroundType)}\n`;
        
        if (backgroundType !== 'cenario') {
          message += `👥 Pessoas/Animais: ${peopleCount}\n`;
        }
      }
      
      if (['digital-realista', 'digital-cartoon'].includes(artType || '')) {
        message += `🖼️ Fundo: ${getBackgroundName(backgroundType)}\n`;
        
        if (backgroundType !== 'cenario') {
          message += `👥 Pessoas/Animais: ${peopleCount}\n`;
        }
      }
      
      if (artType === 'desenho-colorir') {
        message += `🎨 Quantidade: ${drawingCount} desenhos\n`;
      }
      
      message += `\n💰 *Valor Calculado: R$ ${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}*\n\n`;
      message += `📄 O PDF com os detalhes do orçamento foi gerado. Por favor, anexe o arquivo "orcamento-nando-merces.pdf" que foi baixado.\n\n`;
      message += `Aguardo retorno para mais detalhes!`;
      
      window.open(`https://wa.me/5577981311364?text=${encodeURIComponent(message)}`, '_blank');
    }, 500);
  };

  const handleArtTypeSelect = (type: ArtType) => {
    setArtType(type);
    setStep(2);
    setSelectedSize(null);
    setPeopleCount(1);
    setBackgroundType('simples');
  };

  const handleSizeSelect = (size: Size) => {
    setSelectedSize(size);
    if (artType === 'casamento') {
      setStep(3);
    } else {
      setStep(3);
    }
  };

  const handleReset = () => {
    setStep(1);
    setArtType(null);
    setSelectedSize(null);
    setPeopleCount(1);
    setBackgroundType('simples');
    setDrawingCount(1);
  };

  const totalPrice = calculatePrice();

  return (
    <section id="orcamento" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-4">Faça seu Orçamento</h2>
            <p className="text-lg text-gray-600 mb-6">
              Configure sua obra de arte e veja o valor em tempo real
            </p>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 bg-gray-900 text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-5 h-5" />
                  Ocultar Orçamento
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5" />
                  Calcular Orçamento
                </>
              )}
            </button>
          </div>

          {isExpanded && (
            <div className="bg-white rounded-lg shadow-lg p-8 mt-6">
              {/* Progress Steps */}
              <div className="flex items-center justify-center mb-8">
                <div className={`flex items-center ${step >= 1 ? 'text-gray-900' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}>
                    1
                  </div>
                  <span className="ml-2 hidden sm:inline">Tipo</span>
                </div>
                <ChevronRight className="mx-2 text-gray-400" />
                <div className={`flex items-center ${step >= 2 ? 'text-gray-900' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}>
                    2
                  </div>
                  <span className="ml-2 hidden sm:inline">Tamanho</span>
                </div>
                <ChevronRight className="mx-2 text-gray-400" />
                <div className={`flex items-center ${step >= 3 ? 'text-gray-900' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}>
                    3
                  </div>
                  <span className="ml-2 hidden sm:inline">Detalhes</span>
                </div>
              </div>

              {/* Step 1: Art Type */}
              {step === 1 && (
                <div className="space-y-3">
                  <h3 className="mb-6 text-center">Escolha o tipo de arte</h3>
                  <button
                    onClick={() => handleArtTypeSelect('casamento')}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all text-left"
                  >
                    <div className="font-semibold">Pintura a Óleo ao Vivo em Casamentos</div>
                    <div className="text-sm text-gray-600 mt-1">R$ 8.000/m² - Todas características inclusas</div>
                  </button>
                  <button
                    onClick={() => handleArtTypeSelect('oleo')}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all text-left"
                  >
                    <div className="font-semibold">Pintura a Óleo</div>
                    <div className="text-sm text-gray-600 mt-1">R$ 6.000/m² - Personalizável</div>
                  </button>
                  <button
                    onClick={() => handleArtTypeSelect('desenho-colorido')}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all text-left"
                  >
                    <div className="font-semibold">Desenho Colorido</div>
                    <div className="text-sm text-gray-600 mt-1">R$ 12.000/m² - Alta qualidade</div>
                  </button>
                  <button
                    onClick={() => handleArtTypeSelect('desenho-pb')}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all text-left"
                  >
                    <div className="font-semibold">Desenho Preto e Branco</div>
                    <div className="text-sm text-gray-600 mt-1">R$ 11.000/m² - Clássico e elegante</div>
                  </button>
                  <button
                    onClick={() => handleArtTypeSelect('digital-realista')}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all text-left"
                  >
                    <div className="font-semibold">Arte Digital Realista</div>
                    <div className="text-sm text-gray-600 mt-1">A partir de R$ 1.000</div>
                  </button>
                  <button
                    onClick={() => handleArtTypeSelect('digital-cartoon')}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all text-left"
                  >
                    <div className="font-semibold">Arte Digital Cartoonizada</div>
                    <div className="text-sm text-gray-600 mt-1">A partir de R$ 600</div>
                  </button>
                  <button
                    onClick={() => handleArtTypeSelect('desenho-colorir')}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all text-left"
                  >
                    <div className="font-semibold">Desenhos para Colorir Personalizados</div>
                    <div className="text-sm text-gray-600 mt-1">Digital para impressão - A partir de R$ 15</div>
                  </button>
                </div>
              )}

              {/* Step 2: Size Selection */}
              {step === 2 && artType && artType !== 'digital-realista' && artType !== 'digital-cartoon' && artType !== 'desenho-colorir' && (
                <div>
                  <h3 className="mb-6 text-center">Escolha o tamanho</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-96 overflow-y-auto">
                    {(artType === 'casamento' ? CASAMENTO_SIZES : 
                      artType === 'oleo' ? OLEO_SIZES : 
                      PAPER_SIZES).map((size) => (
                      <button
                        key={size.label}
                        onClick={() => handleSizeSelect(size)}
                        className={`p-4 border-2 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all ${
                          selectedSize?.label === size.label ? 'border-gray-900 bg-gray-50' : 'border-gray-200'
                        }`}
                      >
                        <div className="font-semibold text-sm">{size.label}</div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="mt-6 text-gray-600 hover:text-gray-900"
                  >
                    ← Voltar
                  </button>
                </div>
              )}

              {/* Step 2 for Digital Art (goes directly to step 3) */}
              {step === 2 && (artType === 'digital-realista' || artType === 'digital-cartoon') && (() => {
                setStep(3);
                return null;
              })()}

              {/* Step 2 for Desenho Colorir */}
              {step === 2 && artType === 'desenho-colorir' && (() => {
                setStep(3);
                return null;
              })()}

              {/* Step 3: Details */}
              {step === 3 && artType && (
                <div>
                  <h3 className="mb-6 text-center">Configure os detalhes</h3>
                  
                  {artType === 'casamento' && selectedSize && (
                    <div className="text-center space-y-4">
                      <div className="p-6 bg-gray-50 rounded-lg">
                        <p className="text-gray-700 mb-2">Tamanho selecionado: <span className="font-semibold">{selectedSize.label}</span></p>
                        <p className="text-sm text-gray-600">
                          * Todas as características estão inclusas no valor
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          ** Transporte fora de Vitória da Conquista - BA por conta do contratante
                        </p>
                      </div>
                    </div>
                  )}

                  {(artType === 'oleo' || artType === 'desenho-colorido' || artType === 'desenho-pb') && selectedSize && (
                    <div className="space-y-6">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700">Tamanho: <span className="font-semibold">{selectedSize.label}</span></p>
                      </div>

                      <div>
                        <label className="block mb-3 font-semibold">Tipo de composição:</label>
                        <div className="space-y-2">
                          <button
                            onClick={() => setBackgroundType('simples')}
                            className={`w-full p-3 border-2 rounded-lg text-left transition-all ${
                              backgroundType === 'simples' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-400'
                            }`}
                          >
                            <div className="font-semibold">Fundo Simples</div>
                            <div className="text-sm text-gray-600">Sem acréscimo no valor</div>
                          </button>
                          <button
                            onClick={() => setBackgroundType('complexo')}
                            className={`w-full p-3 border-2 rounded-lg text-left transition-all ${
                              backgroundType === 'complexo' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-400'
                            }`}
                          >
                            <div className="font-semibold">Fundo Complexo</div>
                            <div className="text-sm text-gray-600">+25% no valor</div>
                          </button>
                          <button
                            onClick={() => setBackgroundType('cenario')}
                            className={`w-full p-3 border-2 rounded-lg text-left transition-all ${
                              backgroundType === 'cenario' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-400'
                            }`}
                          >
                            <div className="font-semibold">Somente Cenário</div>
                            <div className="text-sm text-gray-600">Sem pessoas ou animais</div>
                          </button>
                        </div>
                      </div>

                      {backgroundType !== 'cenario' && (
                        <div>
                          <label className="block mb-3 font-semibold">
                            Quantidade de pessoas ou animais:
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="20"
                            value={peopleCount}
                            onChange={(e) => setPeopleCount(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none"
                          />
                          <p className="text-sm text-gray-600 mt-2">
                            +20% por pessoa/animal adicional
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {(artType === 'digital-realista' || artType === 'digital-cartoon') && (
                    <div className="space-y-6">
                      <div>
                        <label className="block mb-3 font-semibold">Tipo de fundo:</label>
                        <div className="space-y-2">
                          <button
                            onClick={() => setBackgroundType('simples')}
                            className={`w-full p-3 border-2 rounded-lg text-left transition-all ${
                              backgroundType === 'simples' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-400'
                            }`}
                          >
                            <div className="font-semibold">Sem Fundo Complexo</div>
                            <div className="text-sm text-gray-600">
                              {artType === 'digital-realista' ? 'R$ 1.000 base' : 'R$ 600 base'}
                            </div>
                          </button>
                          <button
                            onClick={() => setBackgroundType('complexo')}
                            className={`w-full p-3 border-2 rounded-lg text-left transition-all ${
                              backgroundType === 'complexo' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-400'
                            }`}
                          >
                            <div className="font-semibold">Fundo Complexo</div>
                            <div className="text-sm text-gray-600">
                              {artType === 'digital-realista' ? 'R$ 1.200 base' : 'R$ 800 base'}
                            </div>
                          </button>
                          <button
                            onClick={() => setBackgroundType('cenario')}
                            className={`w-full p-3 border-2 rounded-lg text-left transition-all ${
                              backgroundType === 'cenario' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-400'
                            }`}
                          >
                            <div className="font-semibold">Somente Cenário</div>
                            <div className="text-sm text-gray-600">Sem pessoas ou animais</div>
                          </button>
                        </div>
                      </div>

                      {backgroundType !== 'cenario' && (
                        <div>
                          <label className="block mb-3 font-semibold">
                            Quantidade de pessoas ou animais:
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="20"
                            value={peopleCount}
                            onChange={(e) => setPeopleCount(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none"
                          />
                          <p className="text-sm text-gray-600 mt-2">
                            +R$ {artType === 'digital-realista' ? '200' : '100'} por pessoa/animal adicional
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {artType === 'desenho-colorir' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-3 font-semibold">
                          Quantidade de desenhos:
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={drawingCount}
                          onChange={(e) => setDrawingCount(Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none"
                        />
                        <p className="text-sm text-gray-600 mt-2">
                          Fórmula de preço: (quantidade × R$ 15) - quantidade + 1
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => artType === 'casamento' ? setStep(2) : setStep(artType === 'digital-realista' || artType === 'digital-cartoon' || artType === 'desenho-colorir' ? 1 : 2)}
                    className="mt-6 text-gray-600 hover:text-gray-900"
                  >
                    ← Voltar
                  </button>
                </div>
              )}

              {/* Price Display */}
              {totalPrice > 0 && (
                <div className="mt-8 pt-8 border-t-2 border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calculator className="w-6 h-6 text-gray-900" />
                      <span className="text-xl font-semibold">Valor Total:</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">
                      R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <button
                      onClick={handleReset}
                      className="flex-1 bg-gray-200 text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors min-w-[200px]"
                    >
                      Refazer Orçamento
                    </button>
                    <button
                      onClick={generatePDF}
                      className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 min-w-[200px]"
                    >
                      <FileText className="w-5 h-5" />
                      Gerar PDF
                    </button>
                    <button
                      onClick={sendToWhatsApp}
                      className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors min-w-[200px]"
                    >
                      Enviar WhatsApp
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    * Valores aproximados. Entre em contato para orçamento final
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}