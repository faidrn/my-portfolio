import React, { useState, useEffect } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Button } from "../../ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from "../../ui/badge";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const BlogList = () => {
    const { t, language } = useLanguage();

    const [posts, setPosts] = useState([]);
    const [blogTitles, setBlogTitles] = useState([]);

    useEffect(() => {
        // Cargar los metadatos según idioma
        import(`../../../locales/${language}.json`)
        .then((data) => setBlogTitles(data.default))
        .catch(() => setBlogTitles([]));
    }, [language]);


    useEffect(() => {
        // Cargar los metadatos según idioma
        import(`../../../content/blog/posts.${language}.json`)
        .then((data) => setPosts(data.default))
        .catch(() => setPosts([]));
    }, [language]);

    

    // 🔒 Previene error si el JSON aún no se ha cargado
  if (!blogTitles.blog) return <p>Loading...</p>;

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
                        {blogTitles.blog.title}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {blogTitles.blog.subtitle}
                    </p>
                </motion.div>

                {posts.length > 0 ? (
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
                                                    {post.readTime} {blogTitles.blog.minutes}
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
                                        <Link to={`/blog/${post.id}`}>
                                            <Button
                                                variant="link"
                                                className="text-blue-600 p-0 group-hover:gap-2 transition-all"
                                            >
                                                {blogTitles.blog.readmore}
                                                <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">
                        {blogTitles.blog.emptyMessage}
                    </p>
                )}
                
            </div>
        </section>
    );
};

export default BlogList;