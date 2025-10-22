import React, { useState } from 'react';

const Header = () => {
    const  [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
            ? "bg-white shadow-md py-4"
            : "bg-transparent py-6"
        }`}
      >
            <div className="">
                <div>
                    {/* Logo or Brand Name can go here */}
                    <a href="">Portfolio</a>

                    {/* Navigation Links */}
                    <nav></nav>

                    {/* Language Switcher or Theme Toggle can go here */}
                    <div></div>

                    {/* Mobile Menu Icon can go here */}

                    {/* Mobile Navigation Menu can go here */}
                    <div>
                        <nav>
                            <button></button>
                            <div></div>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;