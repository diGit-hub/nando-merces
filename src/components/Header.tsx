import { useState } from "react";
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

interface HeaderProps {
    onCartClick: () => void;
    cartItemCount: number;
}

export function Header({ }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-12">
            <div className="container mx-auto py-4">
                <div className="flex w-full items-center gap-12">
                    <a href="#" className="flex items-center">
                        <img
                            src="/assinatura.png"
                            alt="Nando Mercês"
                            className="h-10 w-auto brightness-0"
                        />
                    </a>

                    <nav className="hidden sm:flex items-center gap-8">
                        <a href="#sobre" className="text-gray-700 hover:text-gray-900 transition-colors">
                            Sobre
                        </a>
                        <a href="#servicos" className="text-gray-700 hover:text-gray-900 transition-colors">
                            Serviços
                        </a>
                        <a href="#portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">
                            Portfolio
                        </a>
                    </nav>

                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <button
                                className="flex justify-end ml-auto sm:hidden"
                                type="button"
                                aria-label="Navigation Menu Button"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </SheetTrigger>

                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle className="text-left">Menu</SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-6 mt-8">
                                <a
                                    href="#sobre"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-gray-700 hover:text-black transition-colors"
                                >
                                    Sobre
                                </a>
                                <a
                                    href="#servicos"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-gray-700 hover:text-black transition-colors"
                                >
                                    Serviços
                                </a>
                                <a
                                    href="#portfolio"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-gray-700 hover:text-black transition-colors"
                                >
                                    Portfolio
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}