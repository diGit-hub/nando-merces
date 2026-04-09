export default function Footer() {
    return (
        <footer className="py-16 border-t border-charcoal/5 bg-premium-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-24">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 pb-12">
                    <div className="signature-logo text-3xl font-bold">Nando Mercês</div>
                    <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em]">
                        <a className="hover:text-primary transition-colors" href="#">Instagram</a>
                        <a className="hover:text-primary transition-colors" href="#">Artsy</a>
                        <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest opacity-40 pt-12 border-t border-charcoal/5">
                    <p>© 2024 Nando Mercês. Todos os direitos reservados.</p>
                    <p>São Paulo • Londres • Nova York</p>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">palette</span>
                        <span>Fine Art Studio</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}