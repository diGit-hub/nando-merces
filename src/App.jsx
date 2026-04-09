import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CommissionModal from './components/CommissionModal'

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
            <Header />
            <main className="flex flex-col min-h-dvh">
                <Hero onOpenModal={openModal} />
                <About />
                <Gallery />
                <CTA onOpenModal={openModal} />
            </main>
            <Footer />
            <CommissionModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default App