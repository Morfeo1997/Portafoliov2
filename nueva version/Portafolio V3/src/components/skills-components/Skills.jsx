import SkillCard from './SkillCard';
import { useLanguage } from '../../contexts/LanguageContext';

const Skills = () => {

  const { t } = useLanguage();

  const skills = t('skills.skills');
  // Skills data con nuevo sistema de niveles (1-5)
  

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('nav.skills')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills && skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
              description={skill.description}
              experience={skill.experience}
              
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
