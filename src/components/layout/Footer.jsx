import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaRegEnvelope, FaTiktok, FaInstagram, FaYoutube, FaXTwitter  } from 'react-icons/fa6'; 


const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/faidrn', label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/fredy-izquierdo-897740344', label: 'LinkedIn' },
        { icon: FaRegEnvelope, url: 'mailto:fredyizquierdo.dev@gmail.com', label: 'Email' },
        { icon: FaTiktok, url: 'https://www.tiktok.com/@devenaccion', label: 'TikTok' },
        { icon: FaInstagram, url: 'https://www.instagram.com/devenaccion/', label: 'Instagram' },
        { icon: FaYoutube, url: 'https://www.youtube.com/@DevEnAccion', label: 'YouTube' },
        { icon: FaXTwitter, url: 'https://x.com/DevEnAccion', label: 'X (Twitter)' },
    ];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl mb-4">Portfolio</h3>
                        <p className="text-gray-400">
                            {t('hero.subtitle')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl mb-4">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            {['about', 'services', 'portfolio', 'contact'].map((item) => (
                                <a 
                                    key={item}
                                    href={`#${item}`}
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    {t(`nav.${item}`)}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl mb-4">Connect</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="size-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Portfolio. {t('footer.rights')}
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                        {t('footer.made')} <Heart className="w-4 h-4 text-red-500 fill-current" /> by Fredy Izquierdo
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;