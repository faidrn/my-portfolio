import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Code, Smartphone, Palette, Lightbulb } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { color, motion } from "framer-motion";

const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            icon: Code,
            title: t("services.web.title"),
            description: t("services.web.description"),
            color: "bg-blue-100 text-blue-600",
        },
        {
            icon: Smartphone,
            title: t("services.mobile.title"),
            description: t("services.mobile.description"),
            color: "bg-green-100 text-green-600",
        },
        {
            icon: Palette,
            title: t("services.ui.title"),
            description: t("services.ui.description"),
            color: "bg-purple-100 text-purple-600",
        },
        {
            icon: Lightbulb,
            title: t("services.consulting.title"),
            description: t("services.consulting.description"),
            color: "bg-yellow-100 text-yellow-600",
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl text-gray-900 mb-4">
                        {t("services.title")}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t("services.subtitle")}
                    </p>
                </motion.div>

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-600">
                                <CardHeader>
                                    <div className={`size-16 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                                        <service.icon className="size-8" />
                                    </div>
                                    <CardTitle>
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;