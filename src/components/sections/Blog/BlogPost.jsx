import React, { useEffect, useState, useContext } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate  } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../ui/Button";


const BlogPost = () => {
    const { language } = useLanguage();
    const { id } = useParams(); // Capturamos el ide desde la URL
    const [post, setPost] = useState(null);
    const [blogTitles, setBlogTitles] = useState([]);
    const navigate = useNavigate();

    const handleBackToBlog = () => {
        navigate("/", { replace: false });

        // Esperamos un pequeño delay para que el DOM se monte
        setTimeout(() => {
        const section = document.getElementById("blog");
        section?.scrollIntoView({ behavior: "smooth" });
        }, 300);
    };

    useEffect(() => {
            // Cargar los metadatos según idioma
            import(`../../../locales/${language}.json`)
            .then((data) => setBlogTitles(data.default))
            .catch(() => setBlogTitles([]));
        }, [language]);

    useEffect(() => {
        // Cargar los metadatos según idioma
        import(`../../../content/blog/posts.${language}.json`)
        .then((data) => {
            const found = data.default.find((item) => item.id === Number(id));
            setPost(found);
        })
        .catch(() => {
            toast.error(t('contact.email.error'));
        });
    }, [language, id]);

    if (!post)
        return (
        <div className="min-h-screen flex items-center justify-center text-gray-500">
            Loading post...
        </div>
        );

    return (
        <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto py-16 px-4"
        >
            <Button
                variant="ghost"
                onClick={handleBackToBlog}
                className="mb-6 flex items-center gap-2"
            >
                <ArrowLeft className="size-4" /> {blogTitles.blogPost.backToBlog}
            </Button>

            <motion.img
                src={post.image}
                alt={post.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-64 object-cover rounded-2xl shadow-md mb-6"
            />
                <h1 className="text-3xl font-bold mb-4">
                    {post.title}
                </h1>
                <p className="text-gray-500 text-sm mb-6">
                    {post.date} • {post.readTime} {blogTitles.blog.minutes}
                </p>

                <div 
                    className="prose prose-lg max-w-none"
                >
                    {Array.isArray(post.content)
                        ? post.content.map((block, index) => {
                            switch (block.type){
                                case "paragraph": 
                                    return <p key={index}>{block.text}</p>;
                                case "code": 
                                    return (
                                        <pre key={index}>
                                            <code>{block.text}</code>
                                        </pre>
                                    );
                                case "image":
                                    return (
                                        <img
                                            key={index}
                                            src={block.src}
                                            alt={block.alt || "blog image"}                                        
                                        />
                                    );
                                case "title":
                                    return <h2 key={index}>{block.text}</h2>
                                default:
                                    return null;
                            }
                        })
                        : <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    }
                    
                </div>
        </motion.article>
    );
};

export default BlogPost;