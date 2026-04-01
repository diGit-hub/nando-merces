const artworks = [
    {
        id: 1,
        title: "Shadows of Paulista",
        year: "2023",
        medium: "Óleo sobre Linho",
        dimensions: "120x150cm",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyMrsGRwdv52xrj0Pggsi8vS2Evx9m7l5WdMaO1082UL1capW2uiyNi6raXjjLlYoja-tfiqJrO4YR0Xqbwpg8Wvw5uMBA2yVtD56DrYaESKlLnX-qJzUL9nEhozTwddrn8n62glWL4Cm8pnmURZH4oDzm9fZjo_Z67Ipb9KsVDFZ8x0IAYQS8b_LxfB304zPRoc0z7ISEDT4vrUHW8ItbxMImuxXvuIrEOsHr7-sFj8iY_3Ryz85pPvbyqHgNc-TYcFBdCeJ9BOA",
    },
    {
        id: 2,
        title: "The Morning Glaze",
        year: "2022",
        medium: "Óleo sobre Madeira",
        dimensions: "80x100cm",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYAo3ztwHsRIM3FHd7yq-8e5YMQu5T1klx-SX5tE7heSepwrsrAkKGyHImmQ6Ox8_cHSVlykKpbMUOVbdcEVuIefrTIejsx5FBbVEQuham9LtYBnmG7M7lKscTnOWLDrZClF80jkb0uufOdEVeBiNFxNszMYFXx07QLCq2xcDbVDG-2sNxA8_BALOfOmd35r76rI8z30F3aUQ8o5938t_kj5waNlWs0UuaTLU-3OKooDUsOL9ssqGnojuZPb8o19lh0hzmLEUbSok",
        offset: true,
    },
    {
        id: 3,
        title: "Eternal Still",
        year: "2024",
        medium: "Técnica Mista",
        dimensions: "100x100cm",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4jOOX_E0_cCxD5-yzIPpgtN5Yd2FJqof1kYe7tA997_dFTL5utzwEHA5vX7hEaE2DPy5i7sRem5tIeNQRh5Iy0TiCR9z1QYbo5W1SDNh8Cf3wN0AvjlC3AjHWRqlv7XZvqzQDiQJxTMYEg8etMGKaW5vbyvlklGn0vxhgVKk9s0xGyLRUBiQSGWAgzEMU_jNiV2K-YgS9AAm7SQB0Qcziq93tS3Ef_898EZZOui5beSp1rfW-34oeDieosRCCgOelia74nz3U3Z4",
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