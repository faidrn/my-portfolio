import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate  } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../ui/Button";
import ResponsiveImage from '../../ui/ResponsiveImage';
import { cn } from '../../ui/utils';
import CodeBlock from "../../ui/CodeBlock";


const BlogPost = () => {
    const { language } = useLanguage();
    const { id } = useParams(); // Capturamos el id desde la URL
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
        .catch((error) => {
            console.error(error);
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

            
            <h1 className="text-4xl font-bold mb-4 w-full text-center">
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
                                return (
                                        <p key={index} className="mb-4">{block.text}</p>
                                );
                            case "code": 
                                return (
                                    <pre key={index}>
                                        <CodeBlock 
                                            key={`code-${id}-${language}-${index}`} // fuerza remonte al cambiar idioma o post
                                            code={block.text}
                                            language={block.language || "plaintext"}
                                        />
                                    </pre>
                                );
                            case "image":
                                return block.src ? (
                                    <ResponsiveImage
                                        key={index}
                                        src={block.src}
                                        alt={block.alt}
                                    />
                                ) : false;
                            case "title":
                                return (
                                    <h2 
                                        key={index}
                                        className="text-3xl font-bold mb-4 w-full text-center"
                                    >
                                        {block.text}
                                    </h2>
                                );
                            case "heading":
                                return (
                                    <h3 
                                        key={index}
                                        className="text-2xl font-bold mb-4 w-full"
                                    >
                                        {block.text}
                                    </h3>

                                );
                            case "table":
                                return (
                                    <div
                                        key={index}
                                        className="overflow-x-auto mb-8 rounded-xl shadow-sm border border-gray-200"
                                    >
                                        <table className="min-w-full text-left border-collapse">
                                            <thead className="bg-gray-100 text-gray-800">
                                                <tr>
                                                    {block.headers.map((header, hIndex) => (
                                                    <th
                                                        key={`header-${hIndex}`}
                                                        className="px-4 py-2 font-semibold border-b border-gray-200"
                                                    >
                                                        {header}
                                                    </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {block.rows.map((row, rIndex) => (
                                                    <tr
                                                        key={`row-${rIndex}`}
                                                        className="hover:bg-gray-50 transition-colors"
                                                    >
                                                        {row.map((cell, cIndex) => (
                                                            <td
                                                                key={`cell-${rIndex}-${cIndex}`}
                                                                className="px-4 py-2 border-b border-gray-100 text-gray-700"
                                                            >
                                                                {cell}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                );
                            case "link":
                                return (
                                    <a
                                        key={index}
                                        href={block.href}
                                        className="text-blue-600 hover:text-blue-700 hover:underline underline-offset-2 text-[18px]"
                                    >
                                        {block.text}
                                    </a>
                                );
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