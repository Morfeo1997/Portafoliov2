// src/contexts/LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';

import ReactIcon from '../assets/icons/react.svg';
import JavascriptIcon from '../assets/icons/javascript.svg'
import Html5Icon from '../assets/icons/html5.svg'
import Css3Icon from '../assets/icons/css.svg'
import TailwindIcon from '../assets/icons/tailwindcss.png'
import PythonIcon from '../assets/icons/python.png'
import GitIcon from '../assets/icons/git.svg'
import GithubIcon from '../assets/icons/github.svg'

import SimpleImage1 from '../assets/images/project-images/simple-projects/project-1.jpg'
import SimpleImage2 from '../assets/images/project-images/simple-projects/project-2.jpg'
import SimpleImage3 from '../assets/images/project-images/simple-projects/project-3.jpg'
import SimpleImage4 from '../assets/images/project-images/simple-projects/project-4.jpg'
import SimpleImage5 from '../assets/images/project-images/simple-projects/project-5.jpg'
import IntermediumImage1 from '../assets/images/project-images/intermedium-projects/project-1.jpg'
import IntermediumImage2 from '../assets/images/project-images/intermedium-projects/project-2.jpg'
import IntermediumImage3 from '../assets/images/project-images/intermedium-projects/project-3.jpg' 
import IntermediumImage4 from '../assets/images/project-images/intermedium-projects/project-4.jpg' 
import IntermediumImage5 from '../assets/images/project-images/intermedium-projects/project-5.jpg' 


const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Recuperar idioma del localStorage o usar español por defecto
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage || 'es';
  });

  // Guardar en localStorage cuando cambie el idioma
  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const translations = {
    es: {
      // Navbar
      nav: {
        about: 'Sobre mí',
        skills: 'Skills',
        projects: 'Proyectos',
        certificates: 'Certificados',
        contact: 'Contacto'
      },
      // About Me Section
      about: {
        welcome: 'Bienvenido!',
        iam: 'Soy',
        name: 'Gastón Federico Nahuel Gómez',
        role: 'Desarrollador Front-End',
        description: 'Soy un programador de nivel junior con experiencia laboral y especializado en el area Front-End',
        faqTitle: 'Preguntas Frecuentes',
        faqs: [
          {
            question: 'Hace cuanto tiempo estudias?',
            answer: 'Empece a comienzo de 2021, tuve uno que otro paron por buscar empleo en otras areas, pero siempre permaneci estudiando.'
          },
          {
            question: '¿Que metas tienes?',
            answer: 'Planeo dedicarme durante varios años al desarrollo web, es un area que realmente he llegado a disfrutar y que poder seguir haciendo proyectos me hace sentir bien.'
          },
          {
            question: '¿Que nivel de Ingles manejas?',
            answer: 'Actualmente poseo un nivel de C2 (71/100) en ingles según el certificado de EFSET'
          },
          {
            question: '¿Tienes problemas trabajando con otros?',
            answer: 'He estado en varias simulaciones, gracias a la empresa de No Country y en una hackaton, en todas me ha tocado trabajar en equipo, Nunca he tenido problemas con nadie, de hecho me gusta bastante, porque gracias a eso he podido aprender de otros trabajadores y mejorar.'
          },
          {
            question: '¿Donde aprendiste a programar?',
            answer: 'Comence con una aplicacion (ya extinta) de google llamada Grasshooper que daba teoria y problemas en Javascript, por otro lado consegui mi principal conocimiento vino de FreeCodeCamp, Sololearn y Codewars. Hoy por hoy aprendo mas leyendo documentación y codigo de otros compañeros.'
          }
        ]
      },
      skills: {
        skills: [
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
            }
          ]
        // ... más textos
      },
      projects: {
        simpleProjects : [
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
            },
                {
              title: "TODO App (with dark mode)",
              image: SimpleImage4,
              tools: ["HTML", "Javascript", "React", "Tailwindcss"],
              link: "https://f-e-m-todo-app.netlify.app/"
            },
                    {
              title: "Rock Paper Scissors (with 2 difficults) app",
              image: SimpleImage5,
              tools: ["HTML", "Javascript", "React", "Tailwindcss"],
              link: "https://rock-paper-scissor-morfeo1997.netlify.app/"
            }
          ],
        intermediateProjects : [
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
            },
                {
              title: "REST-API-Countries",
              image: IntermediumImage4,
              tools: ["React", "Tailwind"],
              link: "https://fm-rest-country.netlify.app/"
            },
            {
              title: "10 Preguntas",
              image: IntermediumImage5,
              tools: ["React", "Tailwind"],
              link: "https://10-preguntas.netlify.app/"
            }
          ]
      },
      certificates: {
        certifications : [
      {
        name: "Certificado de Ingles, de EFSET",
        link: "https://cert.efset.org/zJSnSy"
      },
      {
        name: "Diseño web Responsivo, de Freecodecamp",
        link: "https://freecodecamp.org/espanol/certification/ElMorfeo97/responsive-web-design"
      },
      {
        name: "Javascript y estructura de datos, de Freecodecamp",
        link: "https://freecodecamp.org/espanol/certification/ElMorfeo97/javascript-algorithms-and-data-structures-v8"
      }
    ]
        // ... más textos
      },
      contact: {
        headline: 'Contacto',
        head1: 'Si tienes interés en contactarme para ayudarte en un proyecto',
        head2: 'puedes llenar el formulario y yo te responderé lo más rápido que pueda.',
        name: 'Nombre',
        email: 'Email',
        issue: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        notification: '¡Tu mensaje se ha enviado con éxito!'
      },
      footer: {
        // ... textos del footer
      }
    },
    en: {
      // Navbar
      nav: {
        about: 'About me',
        skills: 'Skills',
        projects: 'Projects',
        certificates: 'Certificates',
        contact: 'Contact'
      },
      // About Me Section
      about: {
        welcome: 'Welcome!',
        iam: 'I am',
        name: 'Gastón Federico Nahuel Gómez',
        role: 'Front-end Developer',
        description: 'I am a junior programmer with work experience specializing in front-end development.',
        faqTitle: 'Frequently Asked Questions',
        faqs: [
          {
            question: 'How long have you been studying?',
            answer: 'I started at the beginning of 2021. I took a few breaks to look for work in other areas, but I always kept studying.'
          },
          {
            question: 'What are your goals?',
            answer: 'I plan to devote myself to web development for several years. It\'s an area that I\'ve really come to enjoy, and being able to continue working on projects makes me feel good.'
          },
          {
            question: 'What\'s your english level?',
            answer: 'I currently have a C2 level (71/100) in English according to the EFSET certificate.'
          },
          {
            question: 'Do you have any problem working with others?',
            answer: 'I have participated in several simulations, thanks to the No Country company and in a hackathon, and in all of them I have had to work in a team. I have never had any problems with anyone; in fact, I quite like it, because thanks to that I have been able to learn from other workers and improve.'
          },
          {
            question: 'Where did you learn to code?',
            answer: 'I started with a (now defunct) Google app called Grasshopper that provided theory and problems in JavaScript. On the other hand, I gained most of my knowledge from FreeCodeCamp, Sololearn, and Codewars. Today, I learn more by reading documentation and code from other colleagues.'
          }
        ]
      },
      skills: {
        skills: [
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
            }
          ]
      },
      projects: {
        simpleProjects : [
            {
              title: "Calculator",
              image: SimpleImage1,
              tools: ["HTML", "CSS", "JavaScript"],
              link: "https://morfeo1997-calculator.netlify.app/"
            },
            {
              title: "Aforism Machine",
              image: SimpleImage2,
              tools: ["HTML", "CSS", "JavaScript", "React"],
              link: "https://el-metodo-pascal-morfeo1997.netlify.app/"
            },
            {
              title: "Landing Page",
              image: SimpleImage3,
              tools: ["HTML", "CSS"],
              link: "https://huddle-landing-page-morfeo1997.netlify.app/"
            },
                {
              title: "TODO App (with dark mode)",
              image: SimpleImage4,
              tools: ["HTML", "Javascript", "React", "Tailwindcss"],
              link: "https://f-e-m-todo-app.netlify.app/"
            },
                    {
              title: "Rock Paper Scissors (with 2 difficults) app",
              image: SimpleImage5,
              tools: ["HTML", "Javascript", "React", "Tailwindcss"],
              link: "https://rock-paper-scissor-morfeo1997.netlify.app/"
            }
          ],
        intermediateProjects : [
            {
              title: "E-commerce",
              image: IntermediumImage1,
              tools: ["HTML", "CSS", "Javascript"],
              link: "https://morfeo1997-e-commerce.netlify.app/"
            },
            {
              title: "Wallex (Fintech app)",
              image: IntermediumImage2,
              tools: ["React", "Tailwind", "Springboot"],
              link: "https://github.com/No-Country-simulation/s21-02-ft-webapp"
            },
            {
              title: "Playclass",
              image: IntermediumImage3,
              tools: ["React", "Tailwind"],
              link: "https://github.com/No-Country-simulation/s19-13-ft-webapp/tree/dev"
            },
                {
              title: "REST-API-Countries",
              image: IntermediumImage4,
              tools: ["React", "Tailwind"],
              link: "https://fm-rest-country.netlify.app/"
            },
            {
              title: "10 Preguntas",
              image: IntermediumImage5,
              tools: ["React", "Tailwind"],
              link: "https://10-preguntas.netlify.app/"
            }
          ]
      },
      certificates: {
        certificationsEn : [
      {
        name: "EFSET, English Certification",
        link: "https://cert.efset.org/zJSnSy"
      },
      {
        name: "Freecodecamp, Responsive web design",
        link: "https://freecodecamp.org/espanol/certification/ElMorfeo97/responsive-web-design"
      },
      {
        name: "Freecodecamp, Javascript and data structure",
        link: "https://freecodecamp.org/espanol/certification/ElMorfeo97/javascript-algorithms-and-data-structures-v8"
      }
    ]
      },
      contact: {
        headline: 'Contact',
        head1: 'If you are interested in contacting me to help you with a project',
        head2: "you can fill the form and I'll answer you as fast as I can.",
        name: 'Name',
        email: 'Email',
        issue: 'Issue',
        message: 'Message',
        send: 'Send Message',
        notification: '¡Your message has been sent succesfully!'
      },
      footer: {
        // ... textos del footer en inglés
      }
    }
  };

  // Función para obtener traducciones usando notación de puntos
  const t = (key) => {
    const keys = key.split('.');
    let result = translations[language];
    
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key; // Devolver la clave si no se encuentra traducción
      }
    }
    
    return result;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    isSpanish: language === 'es',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};