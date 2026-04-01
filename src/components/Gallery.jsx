const artworks = [
    {
        id: 1,
        title: "Maria e Jesus",
        year: "2023",
        medium: "Óleo sobre Tela",
        dimensions: "100x80cm",
        image: "/src/assets/maria-e-jesus.png",
    },
    {
        id: 2,
        title: "Lilo",
        year: "2022",
        medium: "Óleo sobre Tela",
        dimensions: "60x50cm",
        image: "/src/assets/lilo.jpg",
        offset: true,
    },
    {
        id: 3,
        title: "Casamento",
        year: "2024",
        medium: "Óleo sobre Tela",
        dimensions: "120x90cm",
        image: "/src/assets/casamento.jpg",
    },
]

export default function Gallery() {
    return (
        <section class="py-32 md:py-48" id="gallery">
            <div class="max-w-[1440px] mx-auto px-6 md:px-12">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div class="space-y-4">
                        <span class="text-primary font-semibold tracking-[0.3em] uppercase text-xs">
                            Obras Curadas
                        </span>
                        <h2 class="text-5xl md:text-7xl font-serif font-bold">Séries Selecionadas</h2>
                    </div>
                    <p class="max-w-xs text-charcoal/50 text-sm leading-relaxed">
                        Um vislumbre da coleção permanente. Cada obra é uma criação única em óleo sobre linho
                        ou técnica mista.
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {artworks.map((artwork) => (
                        <div
                            key={artwork.id}
                            class={`group cursor-pointer ${artwork.offset ? "lg:mt-24" : ""}`}
                        >
                            <div class="aspect-[4/5] overflow-hidden bg-neutral-200 mb-6 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                                <img
                                    alt={artwork.title}
                                    class="w-full h-full object-cover"
                                    src={artwork.image}
                                />
                            </div>
                            <div class="flex justify-between items-baseline border-b border-charcoal/10 pb-4">
                                <h3 class="font-serif text-2xl">{artwork.title}</h3>
                                <span class="text-[10px] uppercase tracking-widest opacity-40 italic">
                                    {artwork.year}
                                </span>
                            </div>
                            <p class="text-[10px] uppercase tracking-widest mt-4 opacity-60">
                                {artwork.medium} • {artwork.dimensions}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}