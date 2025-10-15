import { Button } from "./ui/button";

export function Header() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <span style={{ color: 'hsl(217 91% 60%)' }}>Libly</span>.Space
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('features')}
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('pricing')}
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            Pricing
                        </button>
                        <a
                            href="https://app.libly.space"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                style={{ backgroundColor: 'hsl(217 91% 60%)' }}
                                className="hover:opacity-90"
                            >
                                Get Started
                            </Button>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
