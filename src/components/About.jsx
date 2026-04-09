export default function About() {
    return (
        <section className="py-16 md:py-24 bg-charcoal text-premium-white overflow-hidden" id="about">
            <div className="max-w-[1440px] mx-auto px-6 md:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div className="space-y-12">
                        <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                            "Uma pintura é uma <span className="text-primary italic">conversa</span> que transcende o relógio."
                        </h2>
                        <div className="grid grid-cols-2 gap-8 border-t border-premium-white/10 pt-12">
                            <div>
                                <p className="text-3xl font-serif text-primary">20+</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 mt-2">
                                    Anos de Maestria
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-serif text-primary">São Paulo</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 mt-2">
                                    Ateliê Principal
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-8 text-lg font-light leading-relaxed text-premium-white/70">
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
                    </div>
                </div>
            </div>
        </section>
    )
}