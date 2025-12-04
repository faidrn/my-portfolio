import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "../ui/Button";
import { Badge } from "../ui/badge";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { projects } from '../../content/portfolio/projects';


const Portfolio = () => {
    const { t, language  } = useLanguage();     // Extraer el lenguaje para cambiar de idioma, ya que t es la función traductora
    const [activeFilter, setActiveFilter] = useState('all');

    // Pagination variables
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    //const filters = ['all', 'web', 'mobile', 'design', 'python'];
    const filters = ['all', 'web', 'python'];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    
    // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Reset to page 1 when filter changes
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to portfolio section smoothly
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


    return (
        <section
            id="portfolio"
            className="py-20 bg-gray-50"
        >
            <div className="container mx-auto px-4 lg:w-6xl">
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
                                onClick={() => handleFilterChange(filter)}
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
                    {currentProjects.map((project, index) => (
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
                                    alt={project[language ]?.title} 
                                    className="size-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div
                                    className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center gap-4"
                                >
                                    <a 
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 size-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white"
                                    >
                                        <FiExternalLink className="size-6" />
                                    </a>
                                    <a 
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 size-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white"
                                    >
                                        <FiGithub className="size-6" />
                                    </a>
                                </div>
                            </div>

                            {/**Content */}
                            <div className="p-6">
                                <h3 className="text-xl text-gray-900 mb-4">
                                    {project[language ]?.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project[language ]?.description}
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

                {/* Pagination Controls */}
                {totalPages > 1 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center items-center gap-2 mt-12"
                >
                    {/* Previous Button */}
                    <Button
                        variant="outline"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="disabled:opacity-60 disabled:cursor-not-allowed border-gray-300"
                    >
                        <FiChevronLeft className={`w-4 h-4 ${currentPage === 1 ? 'text-gray-400' : ''}`} />
                    </Button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <Button
                            key={pageNumber}
                            variant={currentPage === pageNumber ? 'default' : 'outline'}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`min-w-10] ${
                            currentPage === pageNumber ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-gray-300'
                            }`}
                        >
                            {pageNumber}
                        </Button>
                    ))}

                    {/* Next Button */}
                    <Button
                        variant="outline"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="disabled:opacity-60 disabled:cursor-not-allowed border-gray-300"
                    >
                        <FiChevronRight className={`w-4 h-4 ${currentPage === totalPages ? 'text-gray-400' : ''}`} />
                    </Button>
                </motion.div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;