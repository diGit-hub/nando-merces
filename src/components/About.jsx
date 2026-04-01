export default function About({ onOpenModal }) {
    return (
        <section class="py-32 md:py-48 bg-charcoal text-premium-white overflow-hidden" id="about">
            <div class="max-w-[1440px] mx-auto px-6 md:px-12">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div class="space-y-12">
                        <h2 class="text-4xl md:text-6xl font-serif leading-tight">
                            "Uma pintura é uma <span class="text-primary italic">conversa</span> que transcende o relógio."
                        </h2>
                        <div class="grid grid-cols-2 gap-8 border-t border-premium-white/10 pt-12">
                            <div>
                                <p class="text-3xl font-serif text-primary">20+</p>
                                <p class="text-[10px] uppercase tracking-[0.2em] opacity-50 mt-2">
                                    Anos de Maestria
                                </p>
                            </div>
                            <div>
                                <p class="text-3xl font-serif text-primary">São Paulo</p>
                                <p class="text-[10px] uppercase tracking-[0.2em] opacity-50 mt-2">
                                    Ateliê Principal
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-8 text-lg font-light leading-relaxed text-premium-white/70">
                        <p>
                            Nando Mercês é um realista contemporâneo brasileiro cujas obras residem em coleções
                            privadas de conhecedores globais. Sua abordagem está enraizada nas tradições
                            meticulosas dos Antigos Mestres, mas infundida com uma sensibilidade moderna que
                            fala ao desejo de permanência da era digital.
                        </p>
                        <p>
                            Cada peça é o resultado de meses de camadas, utilizando a luz como um meio físico
                            para evocar emoção e memória. Seu estúdio serve como um santuário onde o tempo
                            desacelera.
                        </p>
                        <button
                            class="inline-block border-b border-primary pb-1 text-primary text-sm font-medium hover:text-premium-white hover:border-premium-white transition-all uppercase tracking-widest"
                            onClick={onOpenModal}
                        >
                            Solicitar Biografia Completa
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}