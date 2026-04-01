import { useState, useEffect } from 'react'

export default function CommissionModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        peopleCount: '1',
        backgroundType: 'desfocado',
        includePets: 'não',
        dimensions: '',
        message: '',
    })

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open')
        } else {
            document.body.classList.remove('modal-open')
        }
        return () => {
            document.body.classList.remove('modal-open')
        }
    }, [isOpen])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        onClose()
    }

    if (!isOpen) return null

    return (
        <div class="fixed inset-0 z-[100] bg-premium-white/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500 overflow-y-auto">
            <div class="w-full max-w-5xl bg-premium-white border border-charcoal/5 shadow-2xl rounded-sm relative flex">
                <button
                    class="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-charcoal/40 hover:text-primary transition-colors z-10"
                    onClick={onClose}
                >
                    <span class="material-symbols-outlined text-3xl">close</span>
                </button>
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 h-full items-stretch">
                    <div class="lg:col-span-4 bg-charcoal p-8 md:p-12 text-premium-white flex flex-col justify-between min-h-[400px] min-w-[320px]">
                        <div class="space-y-8">
                            <span class="text-primary font-semibold tracking-[0.3em] uppercase text-[10px]">
                                Inquiry
                            </span>
                            <h2 class="text-4xl md:text-5xl font-serif leading-tight">
                                Sua visão em <span class="italic text-primary">óleo</span>.
                            </h2>
                            <p class="text-premium-white/60 font-light leading-relaxed text-sm">
                                Cada retrato é uma jornada compartilhada entre o artista e o colecionador. Por
                                favor, preencha os detalhes abaixo para iniciarmos este diálogo.
                            </p>
                        </div>
                        <div class="signature-logo text-3xl opacity-20 select-none pt-12">Nando Mercês</div>
                    </div>
                    <div class="lg:col-span-8 p-6 md:p-12 h-full flex flex-col">
                        <form class="space-y-8" onSubmit={handleSubmit}>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                <div class="space-y-2">
                                    <label class="form-label">Nome Completo</label>
                                    <input
                                        class="form-input"
                                        name="name"
                                        placeholder="Como deseja ser chamado"
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="space-y-2">
                                    <label class="form-label">E-mail de Contato</label>
                                    <input
                                        class="form-input"
                                        name="email"
                                        placeholder="exemplo@email.com"
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="space-y-2">
                                    <label class="form-label">Número de pessoas na pintura</label>
                                    <div class="relative">
                                        <select
                                            class="form-input"
                                            name="peopleCount"
                                            value={formData.peopleCount}
                                            onChange={handleChange}
                                        >
                                            <option value="1">Apenas uma pessoa</option>
                                            <option value="2">Duas pessoas</option>
                                            <option value="3">Três pessoas ou mais</option>
                                        </select>
                                        <span class="material-symbols-outlined absolute right-0 bottom-3 text-charcoal/20 pointer-events-none">
                                            expand_more
                                        </span>
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <label class="form-label">Tipo de fundo</label>
                                    <div class="relative">
                                        <select
                                            class="form-input"
                                            name="backgroundType"
                                            value={formData.backgroundType}
                                            onChange={handleChange}
                                        >
                                            <option value="desfocado">Desfocado (Estilo Bokeh)</option>
                                            <option value="detalhado">Detalhado (Cenário completo)</option>
                                            <option value="estudio">Fundo Neutro de Estúdio</option>
                                        </select>
                                        <span class="material-symbols-outlined absolute right-0 bottom-3 text-charcoal/20 pointer-events-none">
                                            expand_more
                                        </span>
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <label class="form-label">Inclusão de animais</label>
                                    <div class="relative">
                                        <select
                                            class="form-input"
                                            name="includePets"
                                            value={formData.includePets}
                                            onChange={handleChange}
                                        >
                                            <option value="não">Não incluir animais</option>
                                            <option value="sim">Sim, incluir animal de estimação</option>
                                        </select>
                                        <span class="material-symbols-outlined absolute right-0 bottom-3 text-charcoal/20 pointer-events-none">
                                            expand_more
                                        </span>
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <label class="form-label">Dimensões Sugeridas</label>
                                    <input
                                        class="form-input"
                                        name="dimensions"
                                        placeholder="Ex: 100x120cm ou sob consulta"
                                        type="text"
                                        value={formData.dimensions}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div class="space-y-2">
                                <label class="form-label">Mensagem ou História por trás da obra</label>
                                <textarea
                                    class="form-input resize-none min-h-[100px]"
                                    name="message"
                                    placeholder="Conte-me sobre quem será retratado ou a essência que busca capturar..."
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div class="pt-6">
                                <button
                                    class="w-full bg-charcoal text-premium-white hover:bg-primary py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 rounded-sm shadow-xl"
                                    type="submit"
                                >
                                    Enviar Solicitação de Orçamento
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}