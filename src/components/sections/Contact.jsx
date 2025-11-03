import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSending, setIsSending] = useState(false);

    // ✅ Validación estricta de email
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Validar email antes de enviar
        if (!validateEmail(formData.email)) {
            toast.error(t('contact.email.errorTypingEmail'));
            return;
        }
        
        setIsSending(true);

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            .then(() => {
                toast.success(t('contact.email.success'));
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                toast.error(t('contact.email.error'));
            })
            .finally(() => setIsSending(false));
    };

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            content: 'fredyizquierdo.dev@gmail.com',
            link: 'mailto:fredyizquierdo.dev@gmail.com',
        },
        {
            icon: FaWhatsapp,
            title: t('contact.personal.whatsapp'),
            content: t('contact.send'),
            link: `https://wa.me/421950248025?text=${t('contact.whatsapp.message')}`,
        },
        {
            icon: MapPin,
            title: t('contact.personal.location'),
            content: 'San Francisco, CA',
            link: '#',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl text-gray-900 mb-4">
                        {t('contact.title')}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/**Contact Info Cards */}
                    <div className="space-y-6">
                        <h3 className="text-2xl text-gray-900 mb-6">
                            {t('contact.info')}
                        </h3>
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                                <info.icon className="size-6 text-blue-600" />
                                            </div>
                                            
                                            <div>
                                                <h4 className="text-gray-900 mb-1">
                                                    {info.title}
                                                </h4>
                                                <a 
                                                    href={info.link}
                                                    className="text-gray-600 hover:text-blue-600 transition-colors"
                                                >
                                                    {info.content}
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/**Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <Card className="shadow-xl border-gray-300">
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 mb-2">
                                            {t('contact.name')}
                                        </label>
                                        <Input 
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required 
                                            className="w-full bg-gray-200 placeholder:text-gray-500 border-gray-300"
                                            placeholder={t('contact.name')}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 mb-2">
                                            {t('contact.email')}
                                        </label>
                                        <Input 
                                            id="email"
                                            name="email"
                                            type="text"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required 
                                            className="w-full bg-gray-200 placeholder:text-gray-500 border-gray-300"
                                            placeholder={t('contact.email')}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-gray-700 mb-2">
                                            {t('contact.message')}
                                        </label>
                                        <Textarea 
                                            id="message"
                                            name="message"
                                            type="text"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required 
                                            className="w-full bg-gray-200 placeholder:text-gray-500 border-gray-300 min-h-40"
                                            placeholder={t('contact.message')}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
                                    >
                                        <Send className="mr-2 w-5 h-5" />
                                        {t('contact.send')}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;