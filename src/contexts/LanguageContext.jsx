import React, { createContext, useContext, useState } from "react";
import { translations  } from '../locales/translations';



// Crear el contexto
const LanguageContext = createContext();

// Componente proveedor del contexto
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Idioma predeterminado

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