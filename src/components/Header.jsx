function Header() {
    return (
        <header className="fixed top-0 w-full z-40 bg-premium-white/80 backdrop-blur-xl border-b border-charcoal/5">
            <nav className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                <a className="signature-logo text-2xl font-bold tracking-tighter" href="#">
                    Nando Mercês
                </a>
                <div className="hidden md:flex items-center gap-12 text-[13px] font-medium uppercase tracking-[0.15em]">
                    <a className="hover:text-primary transition-colors" href="#about">
                        Sobre
                    </a>
                    <a className="hover:text-primary transition-colors" href="#gallery">
                        Galeria
                    </a>
                    <a
                        className="hover:text-primary transition-colors uppercase text-primary font-bold"
                        href="#cta-section"
                    >
                        Encomendar
                    </a>
                </div>
                <button className="md:hidden">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </nav>
        </header>
    )
}

export default Header