import SkillCard from './SkillCard';
import ReactIcon from '../../assets/icons/react.svg';
import JavascriptIcon from '../../assets/icons/javascript.svg'
import Html5Icon from '../../assets/icons/html5.svg'
import Css3Icon from '../../assets/icons/css.svg'
import TailwindIcon from '../../assets/icons/tailwindcss.svg'
import PythonIcon from '../../assets/icons/python.svg'
import GitIcon from '../../assets/icons/git.svg'
import GithubIcon from '../../assets/icons/github.svg'

const Skills = () => {
  // Placeholder skills data - to be replaced later
  const skills = [
    { name: 'React', level: 90, icon: ReactIcon },
    { name: 'JavaScript', level: 85, icon: JavascriptIcon },
    { name: 'HTML5', level: 95, icon: Html5Icon },
    { name: 'CSS3', level: 88, icon: Css3Icon },
    { name: 'Tailwind', level: 80, icon: TailwindIcon },
    { name: 'Python', level: 70, icon: PythonIcon },
    { name: 'Git', level: 85, icon: GitIcon },
    { name: 'Github', level: 70, icon: GithubIcon },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Mis Habilidades
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;