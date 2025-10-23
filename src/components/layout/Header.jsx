import { useState } from 'react';
import { motion } from 'motion/react'; {/* Biblioteca de animaciones */}
import { useLanguage } from '../../contexts/LanguageContext';
import { Menu, X } from 'lucide-react'; {/* Iconos para el menú */}


const Header = () => {
    const  [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();

    const navItems = [
        { key: 'about', href: "#about" },
        { key: 'services', href: "#services" },
        { key: 'resume', href: "#resume" },
        { key: 'portfolio', href: "#portfolio" }, 
        { key: 'blog', href: "#blog" },
        { key: 'contact', href: "#contact" },
    ];

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
                    <a href="#" className='text-blue-600 hover:text-blue-700 transition-colors'>
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
                                className='text-gray-700 hover:text-blue-600 transition-colors'
                            >
                                {t(`nav.${item.key}`)}
                            </a>
                        ))}
                    </nav>

                    { /* Language Toggle and Mobile Menu */ }
                    <div className='flex items-center gap-4'>
                        <LanguaToggle />

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