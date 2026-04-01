export default function Hero({ onOpenModal }) {
    return (
        <section class="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden" id="hero">
            <div class="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div class="lg:col-span-7 z-10 space-y-8">
                    <div class="space-y-4">
                        <span class="inline-block text-primary font-semibold tracking-[0.3em] uppercase text-xs">
                            Realismo Contemporâneo
                        </span>
                        <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] font-serif tracking-tight">
                            A Arte da <br />
                            <span class="italic font-normal">Quietude.</span>
                        </h1>
                    </div>
                    <p class="max-w-md text-lg md:text-xl text-charcoal/70 font-light leading-relaxed">
                        Capturando a intersecção silenciosa entre luz e legado através de técnicas clássicas de pintura a óleo.
                    </p>
                    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
                        <button
                            class="bg-charcoal text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg"
                            onClick={onOpenModal}
                        >
                            Solicitar Orçamento
                        </button>
                        <a class="inline-flex items-center gap-4 group" href="#gallery">
                            <span class="h-px w-12 bg-charcoal group-hover:w-20 transition-all duration-500"></span>
                            <span class="uppercase tracking-widest text-xs font-bold">Explorar Coleção</span>
                        </a>
                    </div>
                </div>
                <div class="lg:col-span-5 relative">
                    <div class="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                        <img
                            alt="Nando Mercês pintando"
                            class="w-full h-full object-cover"
                            src="/src/assets/pintando.jpg"
                        />
                    </div>
                    <div class="absolute -bottom-6 -left-6 bg-premium-white p-8 hidden md:block border border-charcoal/5 shadow-xl">
                        <p class="font-serif italic text-2xl text-primary">Nando Mercês</p>
                        <p class="text-[10px] uppercase tracking-widest mt-1 opacity-50 text-charcoal">
                            Portrait by Studio São Paulo
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}