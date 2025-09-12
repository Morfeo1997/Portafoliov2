import SkillCard from './SkillCard';
import ReactIcon from '../../assets/icons/react.svg';
import JavascriptIcon from '../../assets/icons/javascript.svg'
import Html5Icon from '../../assets/icons/html5.svg'
import Css3Icon from '../../assets/icons/css.svg'
import TailwindIcon from '../../assets/icons/tailwindcss.png'
import PythonIcon from '../../assets/icons/python.png'
import GitIcon from '../../assets/icons/git.svg'
import GithubIcon from '../../assets/icons/github.svg'

const Skills = () => {
  // Skills data con nuevo sistema de niveles (1-5)
  const skills = [
    { 
      name: 'React', 
      level: 4, // Avanzado
      icon: ReactIcon,
      description: 'Llevo años desarrollando con React y estoy bastante familiarizado, es el framework que mas uso.',
      experience: '2+ años'
    },
    { 
      name: 'JavaScript', 
      level: 4, // Avanzado
      icon: JavascriptIcon,
      description: 'Es mi primer lenguaje de programación y aunque no utilizo a diario todas sus caracteristicas llevo mucho tiempo usandolo.',
      experience: '4+ años'
    },
    { 
      name: 'HTML5', 
      level: 5, // Experto
      icon: Html5Icon,
      description: 'Llevo mas de 4 años utilizandolo y aunque use principalmente react siempre resulta util para trabajar cuando es necesario.',
      experience: '4+ años'
    },
    { 
      name: 'CSS3', 
      level: 4, // Avanzado
      icon: Css3Icon,
      description: 'Lo uso desde que empece y me resulta comodo mezclandolo con tailwind o solo.',
      experience: '4+ años'
    },
    { 
      name: 'Tailwind', 
      level: 3, // Intermedio
      icon: TailwindIcon,
      description: 'Es el postprocesador de css que mas utilizo, es comodo rapido y versatil.',
      experience: '1+ año'
    },
    { 
      name: 'Python', 
      level: 3, // Intermedio
      icon: PythonIcon,
      description: 'Complete mas de un curso para aprenderlo y me parece un lenguaje muy comodo para trabajar.',
      experience: '1+ años'
    },
    { 
      name: 'Git', 
      level: 4, // Avanzado
      icon: GitIcon,
      description: 'Control de versiones, branching strategies y colaboración en equipos.',
      experience: '3+ años'
    },
    { 
      name: 'Github', 
      level: 3, // Intermedio
      icon: GithubIcon,
      description: 'Es la pagina principal que utilizo para guardar mi codigo y llevo años utilizandolo',
      experience: '2+ años'
    },
  ];

  const skillsEn = [
    { 
      name: 'React', 
      level: 4, // Avanzado
      icon: ReactIcon,
      description: 'I have been developing with React for years and am quite familiar with it; it is the framework I use the most.',
      experience: '2+ years'
    },
    { 
      name: 'JavaScript', 
      level: 4, // Avanzado
      icon: JavascriptIcon,
      description: "It's my first programming language, and although I don't use all its features on a daily basis, I've been using it for a long time.",
      experience: '4+ years'
    },
    { 
      name: 'HTML5', 
      level: 5, // Experto
      icon: Html5Icon,
      description: "I've been using it for over 4 years, and although I mainly use React, it's always useful to work with when necessary.",
      experience: '4+ years'
    },
    { 
      name: 'CSS3', 
      level: 4, // Avanzado
      icon: Css3Icon,
      description: "I've been using it since I started and find it convenient to mix it with Tailwind or on its own.",
      experience: '4+ years'
    },
    { 
      name: 'Tailwind', 
      level: 3, // Intermedio
      icon: TailwindIcon,
      description: "It's the CSS postprocessor I use most often; it's convenient, fast, and versatile.",
      experience: '1+ years'
    },
    { 
      name: 'Python', 
      level: 3, // Intermedio
      icon: PythonIcon,
      description: "I completed more than one course to learn it, and I find it a very comfortable language to work with.",
      experience: '1+ años'
    },
    { 
      name: 'Git', 
      level: 4, // Avanzado
      icon: GitIcon,
      description: "The version control system for everyone, I learned how to use it and have used it for personal and team projects.",
      experience: '3+ años'
    },
    { 
      name: 'Github', 
      level: 3, // Intermedio
      icon: GithubIcon,
      description: "It's the main page I use to store my code, and I've been using it for years.",
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
