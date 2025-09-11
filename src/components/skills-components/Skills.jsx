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
  // Skills data con nuevo sistema de niveles (1-5)
  const skills = [
    { 
      name: 'React', 
      level: 4, // Avanzado
      icon: ReactIcon,
      description: 'Desarrollo de aplicaciones web modernas con componentes reutilizables y gestión de estado.',
      experience: '2+ años'
    },
    { 
      name: 'JavaScript', 
      level: 4, // Avanzado
      icon: JavascriptIcon,
      description: 'Lenguaje de programación versátil para desarrollo frontend y backend.',
      experience: '3+ años'
    },
    { 
      name: 'HTML5', 
      level: 5, // Experto
      icon: Html5Icon,
      description: 'Estructuración semántica de contenido web con las últimas especificaciones.',
      experience: '4+ años'
    },
    { 
      name: 'CSS3', 
      level: 4, // Avanzado
      icon: Css3Icon,
      description: 'Estilos avanzados, animaciones, flexbox, grid y diseño responsivo.',
      experience: '3+ años'
    },
    { 
      name: 'Tailwind', 
      level: 3, // Intermedio
      icon: TailwindIcon,
      description: 'Framework CSS utility-first para desarrollo rápido y consistente.',
      experience: '1+ año'
    },
    { 
      name: 'Python', 
      level: 3, // Intermedio
      icon: PythonIcon,
      description: 'Programación backend, automatización, análisis de datos y machine learning.',
      experience: '2+ años'
    },
    { 
      name: 'Git', 
      level: 4, // Avanzado
      icon: GitIcon,
      description: 'Control de versiones, branching strategies y colaboración en equipos.',
      experience: '2+ años'
    },
    { 
      name: 'Github', 
      level: 3, // Intermedio
      icon: GithubIcon,
      description: 'Gestión de repositorios, CI/CD, issues, pull requests y colaboración.',
      experience: '2+ años'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Mis Habilidades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
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
