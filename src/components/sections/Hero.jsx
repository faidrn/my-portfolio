import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "../ui/Button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
    const { t } = useLanguage();

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }  
    };

    return (
        <section className="min-h-screen flex justify-center items-center bg-linear-to-br from-gray-50 to-gray-100 pt-20">
            <div className="container-[96rem] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-blue-600 mb-4">
                            {t("hero.greeting")}
                        </p>
                        <h1 className="text-5xl lg:text-6xl text-gray-900 mb-4">
                            Fredy Izquierdo
                        </h1>
                        <h2 className="text-3xl lg:text-4xl text-gray-700 mb-6">
                            {t("hero.title")}
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg">
                            {t("hero.subtitle")}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button 
                                onClick={() => scrollToSection("#portfolio")}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
                            >
                                {t("hero.cta")}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>

                            <Button
                                variant="outline"
                                onClick={() => scrollToSection("#contact")}
                                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6"
                            >
                                {t("hero.contact")}
                            </Button>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20">
                            </div>
                            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMDI2OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Developer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;