import ProjectCard from './projectCard';
import { useLanguage } from '../../contexts/LanguageContext';



const Projects = () => {

  const { t } = useLanguage();
  
  const simpleProjects = t('projects.simpleProjects');
  const intermediateProjects = t('projects.intermediateProjects');

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          {t('projects.title')}
        </h2>

        {/* Simple Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
            {t('projects.headline1')}
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
            {t('projects.headline2')}
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