import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    const handleDownloadCV = () => {
        // Buat link download CV
        const link = document.createElement("a");
        link.href = "/CV-Syahrial-Hardi-Akbar.pdf"; 
        link.download = "CV-Syahrial-Hardi-Akbar.pdf";
        link.click();
    };

    return (
        <nav className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h2 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer">
                            MyPortfolio
                        </h2>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-700"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-700"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-700"
                        >
                            Projects
                        </button>
                        <button
                            onClick={handleDownloadCV}
                            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Download CV
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-800 border-t border-slate-700">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-gray-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-slate-700"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-gray-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-slate-700"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="text-gray-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-slate-700"
                        >
                            Projects
                        </button>
                        <button
                            onClick={handleDownloadCV}
                            className="bg-blue-600 hover:bg-blue-700 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors mt-2"
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
