import ProjectCard from './projectCard';
import SimpleImage1 from '../../assets/images/project-images/simple-projects/project-1.jpg'
import SimpleImage2 from '../../assets/images/project-images/simple-projects/project-2.jpg'
import SimpleImage3 from '../../assets/images/project-images/simple-projects/project-3.jpg'

import IntermediumImage1 from '../../assets/images/project-images/intermedium-projects/project-1.jpg'
import IntermediumImage2 from '../../assets/images/project-images/intermedium-projects/project-2.jpg'
import IntermediumImage3 from '../../assets/images/project-images/intermedium-projects/project-3.jpg' 





const Projects = () => {
  
  const simpleProjects = [
    {
      title: "Calculadora",
      image: SimpleImage1,
      tools: ["HTML", "CSS", "JavaScript"],
      link: "https://morfeo1997-calculator.netlify.app/"
    },
    {
      title: "Maquina de Aforismos",
      image: SimpleImage2,
      tools: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://el-metodo-pascal-morfeo1997.netlify.app/"
    },
    {
      title: "Landing Page",
      image: SimpleImage3,
      tools: ["HTML", "CSS"],
      link: "https://huddle-landing-page-morfeo1997.netlify.app/"
    }
  ];

  const intermediateProjects = [
    {
      title: "E-commerce",
      image: IntermediumImage1,
      tools: ["HTML", "CSS", "Javascript"],
      link: "https://morfeo1997-e-commerce.netlify.app/"
    },
    {
      title: "Wallex (app tipo fintech)",
      image: IntermediumImage2,
      tools: ["React", "Tailwind", "Springboot"],
      link: "https://github.com/No-Country-simulation/s21-02-ft-webapp"
    },
    {
      title: "Playclass",
      image: IntermediumImage3,
      tools: ["React", "Tailwind"],
      link: "https://github.com/No-Country-simulation/s19-13-ft-webapp/tree/dev"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Mis Proyectos
        </h2>

        {/* Simple Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
            Proyectos Simples
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {simpleProjects.map((project, index) => (
              <ProjectCard key={`simple-${index}`} {...project} />
            ))}
          </div>
        </div>

        {/* Intermediate Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
            Proyectos Intermedios
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {intermediateProjects.map((project, index) => (
              <ProjectCard key={`intermediate-${index}`} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;