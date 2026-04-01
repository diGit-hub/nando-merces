export default function CTA({ onOpenModal }) {
    return (
        <section class="py-32 md:py-48 bg-white/40" id="cta-section">
            <div class="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                <div class="max-w-4xl mx-auto space-y-12">
                    <span class="text-primary font-semibold tracking-[0.3em] uppercase text-xs">
                        Exclusividade
                    </span>
                    <h2 class="text-5xl md:text-8xl font-serif leading-tight">
                        Encomende uma peça de <span class="italic">legado</span>.
                    </h2>
                    <p class="text-xl text-charcoal/60 font-light leading-relaxed max-w-2xl mx-auto">
                        Para verificar a disponibilidade de obras existentes ou discutir uma encomenda
                        privada, entre em contato com o estúdio.
                    </p>
                    <div class="pt-8 flex flex-col items-center gap-10">
                        <button
                            class="bg-charcoal text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300 shadow-xl"
                            onClick={onOpenModal}
                        >
                            Solicitar Orçamento
                        </button>
                        <a
                            class="text-2xl md:text-3xl border-b border-charcoal/20 pb-2 hover:border-primary transition-colors font-serif italic"
                            href="mailto:studio@nandomerces.com"
                        >
                            studio@nandomerces.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}