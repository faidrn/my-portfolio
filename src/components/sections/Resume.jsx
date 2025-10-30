import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Download } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

const Resume = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = React.useState("experience");

  const experience = [
    { title: "Fronted Developer", company: "Caja De Compensación Familiar Del Casanare – Comfacasanare", location: "Casanare, Colombia", period: "2010 - 2022", description: "As a frontend developer, I contributed to the design, development, and implementation of internal management and automation systems focused on quality and operational efficiency. I developed functional and optimized web interfaces for the Quality Management System (QMS) and other internal portals, ensuring an intuitive user experience and compliance with technical and regulatory standards. Additionally, I provided technical support and performed software testing." },
  ];

  {/*const experience = {
    en: {
      
    },
    es: {
      'title': "Desarrollador Fronted", 
      'company': "Caja De Compensación Familiar Del Casanare – Comfacasanare", 
      'location': "Casanare, Colombia", 
      'period': "2010 - 2022", 
      'description': "Como desarrollador frontend, participé en el diseño, desarrollo e implementación de sistemas internos de gestión y automatización enfocados en la calidad y la eficiencia operativa. Desarrollé interfaces web funcionales y optimizadas para el Sistema de Gestión de Calidad (SGC) y otros portales internos, asegurando una experiencia de usuario intuitiva y el cumplimiento de los estándares técnicos y normativos. Además, brindé soporte técnico y realicé pruebas de software"
    },
  };*/}

  const education = [
    { degree: "Master of Computer Science", school: "University of Technology", location: "Boston, MA", period: "2016 - 2018", description: "Specialized in Software Engineering and Web Development." },
    { degree: "Bachelor of Computer Science", school: "State University", location: "Austin, TX", period: "2012 - 2016", description: "Focus on programming fundamentals and computer systems." },
  ];

  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Frammer Motion"],
    backend: ["Node.js", "Python"],
    tools: ["Git", "GitHub", "AWS", "Figma", "VSCode", "NPM", "Vite"],
    learning: ["PostgreSQL", "MongoDB"]
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y botón de descarga */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-gray-900 mb-4 text-4xl">{t("resume.title")}</h2>
          <p className="text-blue-600 mb-8 text-xl">{t("resume.subtitle")}</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Download className="mr-2 size-5" />
            {t("resume.download")}
          </Button>
        </motion.div>

        {/* Tabs */}
        <Tabs className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-200 h-11">
            <TabsTrigger isActive={activeTab === "experience"} onClick={() => setActiveTab("experience")}>
              {t("resume.experience")}
            </TabsTrigger>
            <TabsTrigger isActive={activeTab === "education"} onClick={() => setActiveTab("education")}>
              {t("resume.education")}
            </TabsTrigger>
            <TabsTrigger isActive={activeTab === "skills"} onClick={() => setActiveTab("skills")}>
              {t("resume.skills")}
            </TabsTrigger>
          </TabsList>

          {/* Contenido de experiencia */}
          {activeTab === "experience" && (
            <TabsContent>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="relative pl-8 pb-8 border-l-2 border-blue-200 last:pb-0">
                    <div className="absolute left-0 top-0 size-4 bg-blue-600 rounded-full -translate-x-[9px]"></div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-gray-900 mb-1">{job.title}</h3>
                          <p className="text-blue-600 mb-1">{job.company}</p>
                          <p className="text-gray-600">{job.location}</p>
                        </div>
                        <Badge variant="secondary">{job.period}</Badge>
                      </div>
                      <p className="text-gray-600 mt-3">{t(job.description)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          )}

          {/* Contenido de educación */}
          {activeTab === "education" && (
            <TabsContent>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="relative pl-8 pb-8 border-l-2 border-blue-200 last:pb-0">
                    <div className="absolute left-0 top-0 size-4 bg-blue-600 rounded-full -translate-x-[9px]"></div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-gray-900 mb-1">{edu.degree}</h3>
                          <p className="text-blue-600">{edu.school} — {edu.location}</p>
                        </div>
                        <Badge variant="secondary">{edu.period}</Badge>
                      </div>
                      <p className="text-gray-600 mt-3">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          )}

          {/* Contenido de skills */}
          {activeTab === "skills" && (
            <TabsContent>
              <div className="space-y-6">
                {["frontend", "backend", "tools", "learning"].map((category) => (
                  <motion.div key={category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-gray-900 mb-4">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills[category].map((skill) => (
                        <Badge key={skill} variant="outline" className="border-blue-600 text-blue-600">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
