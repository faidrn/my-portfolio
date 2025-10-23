import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Languages } from 'lucide-react';
import { Button } from '../ui/Button';

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-gray-600" />

            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 text-sm transition-all 
                        ${language === 'en' 
                            ? 'bg-white shadow-sm text-gray-900' 
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                >
                    EN
                </Button>
                <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage('es')}
                    className={`px-3 py-1 text-sm transition-all 
                        ${language === 'es' 
                            ? 'bg-white shadow-sm text-gray-900' 
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                >
                    ES
                </Button>
            </div>

        </div>
    );
};

export { LanguageToggle };