import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "../ui/Button";
import { Badge } from "../ui/badge";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";


const Portfolio = () => {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = ['all', 'web', 'mobile', 'design'];

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'web',
            description: 'Full-featured online store with payment integration',
            image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjExMTExNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
            tags: ['React', 'Node.js', 'Stripe'],
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 2,
            title: 'Fitness Mobile App',
            category: 'mobile',
            description: 'Track workouts and nutrition on the go',
            image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxMTA3NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
            tags: ['React Native', 'Firebase'],
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 3,
            title: 'SaaS Dashboard',
            category: 'web',
            description: 'Analytics dashboard for business insights',
            image: 'https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MTA1OTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
            tags: ['Next.js', 'TypeScript', 'Recharts'],
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 4,
            title: 'Brand Identity Design',
            category: 'design',
            description: 'Complete brand redesign for tech startup',
            image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMDI2OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
            tags: ['Figma', 'Branding'],
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 5,
            title: 'Task Management App',
            category: 'web',
            description: 'Collaborative project management tool',
            image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjExMTExNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
            tags: ['Vue.js', 'MongoDB'],
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 6,
            title: 'Social Media App',
            category: 'mobile',
            description: 'Connect with friends and share moments',
            image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxMTA3NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
            tags: ['Flutter', 'AWS'],
            demoLink: '#',
            codeLink: '#',
        },
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section
            id="portfolio"
            className="py-20 bg-gray-50"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl text-gray-900 mb-4">
                        {t('portfolio.title')}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        {t('portfolio.subtitle')}
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {filters.map((filter) => (
                            <Button
                                key={filter}
                                variant={activeFilter === filter ? 'default' : 'outline'}
                                onClick={() => setActiveFilter(filter)}
                                className={
                                    activeFilter === filter
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                        : 'border-gray-300'
                                }
                            >
                                {t(`portfolio.filter.${filter}`)}
                            </Button>
                        ))}
                    </div>
                </motion.div>

                {/** Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y:0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/**Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={project.image}
                                    alt={project.title} 
                                    className="size-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center gap-4"
                                >
                                    <a 
                                        href={project.demoLink}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 size-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white"
                                    >
                                        <FiExternalLink className="size-6" />
                                    </a>
                                    <a 
                                        href={project.codeLink}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 size-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white"
                                    >
                                        <FiGithub className="size-6" />
                                    </a>
                                </div>
                            </div>

                            {/**Content */}
                            <div className="p-6">
                                <h3 className="text-xl text-gray-900 mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <Badge
                                            key={idx}
                                            variant="secondary"
                                            className="bg-blue-100 text-blue-700"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;