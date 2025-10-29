import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "../ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

const Blog = () => {
    const { t } = useLanguage();

    const posts = [
        {
            id: 1,
            title: 'Getting Started with React and TypeScript',
            excerpt: 'Learn how to set up a modern React project with TypeScript and best practices for type safety.',
            date: '2025-10-15',
            readTime: 8,
            category: 'Development',
            image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjExMTExNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            id: 2,
            title: 'Building Responsive Layouts with TailwindCSS',
            excerpt: 'Discover the power of utility-first CSS and how to create beautiful, responsive designs quickly.',
            date: '2025-10-10',
            readTime: 6,
            category: 'Design',
            image: 'https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MTA1OTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            id: 3,
            title: 'Node.js Best Practices for 2025',
            excerpt: 'Essential tips and patterns for building scalable and maintainable Node.js applications.',
            date: '2025-10-05',
            readTime: 10,
            category: 'Backend',
            image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMDI2OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        },
    ];

    return (
        <section id="blog" className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl text-gray-900 mb-4">
                        {t('blog.title')}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t('blog.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                           initial={{ opacity: 0, y:20 }} 
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group border-gray-300">
                                {/**Image */}
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={post.image}
                                        alt={post.title}
                                        className="size-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                <CardHeader>
                                    <div className="flex items-center justify-between mb-3">
                                        <Badge className="bg-blue-100 text-blue-700 pointer-events-none">
                                            {post.category}
                                        </Badge>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="size-4" />
                                                {new Date(post.date).toLocaleDateString()}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="size-4" />
                                                {post.readTime} {t('blog.minutes')}
                                            </div>
                                        </div>
                                    </div>

                                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <CardDescription className="text-base">
                                        {post.excerpt}
                                    </CardDescription>
                                </CardContent>

                                <CardFooter>
                                    <Button
                                        variant="link"
                                        className="text-blue-600 p-0 group-hover:gap-2 transition-all"
                                    >
                                        {t('blog.readmore')}
                                        <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;