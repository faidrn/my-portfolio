import React, { createContext, useContext, useState } from "react";


const translations = {
    en: {
        // Header
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.resume': 'Resume',
        'nav.portfolio': 'Portfolio',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': "Hi, I'm", 
        'hero.title': 'Frontend Developer',
        'hero.subtitle': 'I design and develop web solutions that bring ideas to life',
        'hero.cta': 'View My Work',
        'hero.contact': 'Get in Touch',

        // About
        'about.title': 'About Me',
        'about.subtitle': 'Get to know me better',
        'about.description': "I'm a passionate frontend developer with 12 years of experience building web applications. I specialize in React, Node.js, Tailwindcss and modern web technologies. My focus is on creating clean, efficient, and user-friendly solutions.",
        'about.years': 'Years of Experience',
        'about.projects': 'Completed Projects',
        'about.clients': 'Happy Clients',

        // Services
        'services.title': 'Services',
        'services.subtitle': 'What I can do for you',
        'services.web.title': 'Web Development',
        'services.web.description': 'Custom web applications built with modern frameworks and best practices',
        'services.mobile.title': 'Mobile Development',
        'services.mobile.description': 'Responsive and mobile-friendly designs for all devices',
        'services.ui.title': 'UI/UX Design',
        'services.ui.description': 'Beautiful and intuitive user interfaces that enhance user experience',
        'services.consulting.title': 'Consulting',
        'services.consulting.description': 'Technical guidance and architecture planning for your projects',

        // Resume
        'resume.title': 'Resume',
        'resume.subtitle': 'My professional journey',
        'resume.experience': 'Experience',
        'resume.education': 'Education',
        'resume.skills': 'Skills',
        'resume.download': 'Download CV',

        // Portfolio
        'portfolio.title': 'Portfolio',
        'portfolio.subtitle': 'My lastest work',
        'portfolio.filter.all': 'All',
        'portfolio.filter.web': 'Web', 
        'portfolio.filter.mobile': 'Mobile',
        'portfolio.filter.design': 'Design',
        'portfolio.view': 'View Project',

        // Blog
        'blog.title': 'Blog',
        'blog.subtitle': 'Latest articles and tutorials',
        'blog.readmore': 'Read More',
        'blog.minutes': 'min read',

        // Contact
        'contact.title': 'Get in Touch',
        'contact.subtitle': 'Let\'s work together',
        'contact.name': 'Your Name',
        'contact.email': 'Your Email',
        'contact.message': 'Your Message',
        'contact.send': 'Send Message',
        'contact.info': 'Contact Information',
        'contact.personal.phone': 'Phone',
        'contact.personal.location': 'Location',

        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.made': 'Made with',
    }, 
    es: {
        'nav.about': 'Acerca de',
        'nav.services': 'Servicios',
        'nav.resume': 'Currículum',
        'nav.portfolio': 'Portafolio',
        'nav.blog': 'Blog',
        'nav.contact': 'Contacto',

        // Hero
        'hero.greeting': "Hola, soy", 
        'hero.title': 'Desarrollador Frontend',
        'hero.subtitle': 'Diseño y desarrollo soluciones web que dan vida a las ideas',
        'hero.cta': 'Ver Mi Trabajo',
        'hero.contact': 'Contáctame',

        // About
        'about.title': 'Acerca de Mí',
        'about.subtitle': 'Conóceme mejor',
        'about.description': "Soy un desarrollador apasionado con 12 años de experiencia creando aplicaciones web. Me especializo en React, Node.js, Tailwindcss y tecnologías web modernas. Mi enfoque esta en crear soluciones limpias, eficientes, y amigables para el usuario.",
        'about.years': 'Años de Experiencia',
        'about.projects': 'Proyectos Completados',
        'about.clients': 'Clientes Satisfechos',

        // Services
        'services.title': 'Servicios',
        'services.subtitle': 'Lo que puedo hacer por ti',
        'services.web.title': 'Desarrollo Web',
        'services.web.description': 'Aplicaciones web personalizadas construidas con frameworks modernos y mejores prácticas',
        'services.mobile.title': 'Desarrollo Móvil',
        'services.mobile.description': 'Diseños responsivos y compatibles con dispositivos móviles para todos los dispositivos.',
        'services.ui.title': 'Diseño UI/UX',
        'services.ui.description': 'Interfaces hermosas e intuitivas que mejoran la experiencia del usuario',
        'services.consulting.title': 'Consultoría',
        'services.consulting.description': 'Orientación técnica y planificación de arquitectura para tus proyectos',

        // Resume
        'resume.title': 'Currículum',
        'resume.subtitle': 'Mi trayectoria profesional',
        'resume.experience': 'Experiencia',
        'resume.education': 'Educación',
        'resume.skills': 'Habilidades',
        'resume.download': 'Descargar CV',

        // Portfolio
        'portfolio.title': 'Portafolio',
        'portfolio.subtitle': 'Mis últimos trabajos',
        'portfolio.filter.all': 'Todos',
        'portfolio.filter.web': 'Web', 
        'portfolio.filter.mobile': 'Móvil',
        'portfolio.filter.design': 'Diseño',
        'portfolio.view': 'Ver Proyecto',

        // Blog
        'blog.title': 'Blog',
        'blog.subtitle': 'Últimos artículos y tutoriales',
        'blog.readmore': 'Leer Más',
        'blog.minutes': 'min de lectura',

        // Contact
        'contact.title': 'Contáctame',
        'contact.subtitle': 'Trabajemos juntos',
        'contact.name': 'Tu Nombre',
        'contact.email': 'Tu Email',
        'contact.message': 'Tu Mensaje',
        'contact.send': 'Enviar Mensaje',
        'contact.info': 'Información de Contacto',
        'contact.personal.phone': 'Teléfono',
        'contact.personal.location': 'Ubicación',

        // Footer
        'footer.rights': 'Todos los derechos reservados.',
        'footer.made': 'Hecho con',
    },
};

// Crear el contexto
const LanguageContext = createContext();

// Componente proveedor del contexto
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    // Función para obtener la traducción
    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Hook personalizado para usar el contexto
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};