import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Briefcase, GraduationCap, Download, School } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { title } from "framer-motion/client";
import { motion } from "framer-motion";


const Resume = () => {
    const { t } = useLanguage();

    const experience = [
        {
            title: 'Fronted Developer', 
            company: 'Tech Company Inc', 
            location: 'San Francisco, CA',
            period: '2022 - Present', 
            description: 'Leading Development of enterprise web applications using React, Node.js, and AWS.'
        },
        {
            title: 'Senior Frontend Developer',
            company: 'Acme Corp',
            location: 'Remote',
            period: '2019 - 2022',
            description: 'Built scalable component libraries and improved performance across multiple customer-facing web apps using React and TypeScript.'
        },
        {
            title: 'Full Stack Developer',
            company: 'Startup Labs',
            location: 'Austin, TX',
            period: '2017 - 2019',
            description: 'Designed and implemented end-to-end features with Node.js, Express, PostgreSQL and React; owned deployment pipelines and monitoring.'
        },
        {
            title: 'UI/UX Engineer',
            company: 'Design Studio',
            location: 'Barcelona, Spain',
            period: '2014 - 2017',
            description: 'Worked closely with designers to deliver pixel-perfect interfaces, prototyping interactions and improving accessibility across projects.'
        },
    ];

    const education = [
        {
            degree: 'Master of Computer Science',
            school: 'University of Technology',
            location: 'Boston, MA',
            period: '2016 - 2018',
            description: 'Specialized in Software Engineering and Web Development.',
        },
        {
            degree: 'Bachelor of Computer Science',
            school: 'State University',
            location: 'Austin, TX',
            period: '2012 - 2016',
            description: 'Focus on programming fundamentals and computer systems.',
        },
    ];

    const skills = {
        frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
        backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
        tools: ['Git', 'Docker', 'AWS', 'Figma'],
    };

    return (
        <section id="resume" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2  className="text-gray-900 mb-4">
                        {t('resume.title')}
                    </h2>
                    <p className="text-blue-600 mb-8">
                        {t('resume.subtitle')}
                    </p>
                </motion.div>
                <Button
                    className="bg-blue-600 hover:bg-blue-700"
                >
                    <Download 
                        size={18}
                        className="mr-2"
                    />
                    {t('resume.download')}
                </Button>

                <Tabs 
                    defaultValue="experience"
                    className="max-w-4xl mx-auto"
                >
                    <TabsList
                        className="grid w-full grid-cols-3 mb-8"
                    >
                        <TabsTrigger
                            value="experience"
                        >
                            {t('resume.experience')}
                        </TabsTrigger>
                        <TabsTrigger value="education">
                            {t('resume.education')}
                        </TabsTrigger>

                        <TabsTrigger value="skills">
                            {t('resume.skills')}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent
                        value="experience"
                    >
                        <div className="space-y-6">
                            {experience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="relative pl-8 pb-8 border-l-2 border-blue-200 last:pb-0"
                                >
                                    <div className="absolute left-0 top-0 size-4 bg-blue-600 rounded-full -translate-x-[9px]"></div>
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="text-gray-900 mb-1">
                                                    {job.title}
                                                </h3>
                                                <p className="text-blue-600">
                                                    {job.company}
                                                </p>
                                            </div>
                                            <Badge
                                                variant={"secondary"}
                                            >
                                                {job.period}
                                            </Badge>
                                        </div>
                                        <p className="text-gray-600 mt-3">
                                            {job.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="education">
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    className="relative pl-8 pb-8 border-l-2 border-blue-200 last:pb-0"
                                >
                                    <div className="absolute left-0 top-0 size-4 bg-blue-600 rounded-full -translate-x-[9px]"></div>
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="text-gray-900 mb-1">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-blue-600">
                                                    {edu.school} — {edu.location}
                                                </p>
                                            </div>
                                            <Badge variant="secondary">
                                                {edu.period}
                                            </Badge>
                                        </div>
                                        <p className="text-gray-600 mt-3">
                                            {edu.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="skills">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 rounded-lg p-6"
                            >
                                <h3 className="text-gray-900 mb-4">
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.frontend.map((skill) => (
                                        <Badge 
                                            key={skill}
                                            variant={"outline"} 
                                            className="border-blue-600 text-blue-600">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-gray-50 rounded-lg p-6"
                            >
                                <h3 className="text-gray-900 mb-4">
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.backend.map((skill) => (
                                        <Badge 
                                            key={skill}
                                            variant={"outline"} 
                                            className="border-blue-600 text-blue-600">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-gray-50 rounded-lg p-6"
                            >
                                <h3 className="text-gray-900 mb-4">
                                    Tools & Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tools.map((skill) => (
                                        <Badge 
                                            key={skill}
                                            variant={"outline"} 
                                            className="border-blue-600 text-blue-600">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
        
};

export default Resume;