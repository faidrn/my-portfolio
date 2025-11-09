import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Award, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
    const { t } = useLanguage();

    const stats = [
        { icon: Briefcase, value: "5+", label: t("about.years") },
        { icon: Award, value: "50+", label: t("about.projects") },
        { icon: Users, value: "30+", label: t("about.clients") },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-48">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl text-gray-900 mb-4">
                        {t("about.title")}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t("about.subtitle")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            width: '80%',
                        }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3"></div>
                            <img
                                src="/images/sections/img-about-section.webp"
                                alt="About"
                                className="relative rounded-lg shadow-xl w-full"
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            {t("about.description")}
                        </p>

                        {/* Stats */}
                        {/**
                         *  
                         <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="size-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <stat.icon className="size-8 text-blue-600" />
                                    </div>
                                    <p className="text-3xl text-gray-900 mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                         */}
                        
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;