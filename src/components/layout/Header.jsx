import { useState } from 'react';
// motion: Biblioteca de animaciones 
import { motion } from 'framer-motion'; 
import { useLanguage } from '../../contexts/LanguageContext';
// Iconos para el menú (Menu, X) 
import { Menu, X } from 'lucide-react'; 
import { LanguageToggle } from '../common/LanguageToggle';
import { useLocation, useNavigate } from 'react-router-dom';


const Header = () => {
    const  [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { key: 'about', href: "#about" },
        { key: 'services', href: "#services" },
        { key: 'resume', href: "#resume" },
        { key: 'portfolio', href: "#portfolio" }, 
        { key: 'blog', href: "#blog" },
        { key: 'contact', href: "#contact" },
    ];

    const handleNavClick = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (location.pathname !== "/"){
            // Si estas fuera 0del home, vuelve al home primero
            navigate("/");

            // Espera un poco para que el DOM se monte
            setTimeout(() => {
                section?.scrollIntoView({ behavior: "smooth" });
            }, 400);
        } /*else{
            // Si ya estás en el home, simplemente haz scroll
                section?.scrollIntoView({ behavior: "smooth" });
        }*/
    };


    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={"fixed top-0 left-0 right-0 z-50 bg-white/88 backdrop-blur-md border-b border-gray-200"}
        >
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo Section */}
                    <a 
                        href="#" 
                        className='text-blue-600 hover:text-blue-700 transition-colors'
                        onClick={() => handleNavClick("#")}
                    >
                        <span className='text-2xl'>
                            Portfolio
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex items-center gap-8'>
                        {navItems.map((item) => (
                            <a 
                                key={item.key}
                                href={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className='text-gray-700 hover:text-blue-600 transition-colors'
                            >
                                {t(`nav.${item.key}`)}
                            </a>
                        ))}
                    </nav>

                    { /* Language Toggle and Mobile Menu */ }
                    <div className='flex items-center gap-4'>
                        <LanguageToggle />

                        <button
                            className='md:hidden text-gray-700'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.nav 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }} 
                        className="md:hidden py-4 border-t border-gray-200"
                    >
                        {navItems.map((item) => (
                            <a 
                                key={item.key}
                                href={item.href}
                                className='block py-2 text-gray-700 hover:text-blue-600 transition-colors'
                            >
                                {t(`nav.${item.key}`)}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </div>
        </motion.header>
    );
}

export default Header;