function Header({ onOpenModal }) {
    return (
        <header class="fixed top-0 w-full z-40 bg-premium-white/80 backdrop-blur-xl border-b border-charcoal/5">
            <nav class="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                <a class="signature-logo text-2xl font-bold tracking-tighter" href="#">
                    Nando Mercês
                </a>
                <div class="hidden md:flex items-center gap-12 text-[13px] font-medium uppercase tracking-[0.15em]">
                    <a class="hover:text-primary transition-colors" href="#about">
                        Sobre
                    </a>
                    <a class="hover:text-primary transition-colors" href="#gallery">
                        Galeria
                    </a>
                    <button
                        class="hover:text-primary transition-colors uppercase text-primary font-bold"
                        onClick={onOpenModal}
                    >
                        Encomendar
                    </button>
                </div>
                <button class="md:hidden">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </nav>
        </header>
    )
}

export default Header