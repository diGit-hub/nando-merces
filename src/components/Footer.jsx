export default function Footer() {
    return (
        <footer class="py-16 border-t border-charcoal/5 bg-premium-white">
            <div class="max-w-[1440px] mx-auto px-6 md:px-12">
                <div class="flex flex-col md:flex-row justify-between items-center gap-12 pb-12">
                    <div class="signature-logo text-3xl font-bold">Nando Mercês</div>
                    <div class="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em]">
                        <a class="hover:text-primary transition-colors" href="#">Instagram</a>
                        <a class="hover:text-primary transition-colors" href="#">Artsy</a>
                        <a class="hover:text-primary transition-colors" href="#">LinkedIn</a>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest opacity-40 pt-12 border-t border-charcoal/5">
                    <p>© 2024 Nando Mercês. Todos os direitos reservados.</p>
                    <p>São Paulo • Londres • Nova York</p>
                    <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-sm">palette</span>
                        <span>Fine Art Studio</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}