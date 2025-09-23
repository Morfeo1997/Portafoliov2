import { useState } from 'react';
import ProfileImage from './ProfileImage';

const AboutMe = () => {
  // Placeholder data - to be replaced later
  const basicInfo = {
    welcome: "Bienvenido!",
    I: 'Soy',
    name: "Gastón Federico Nahuel Gómez",
    role: "Desarrollador Front-End",
    description: "Soy un programador de nivel junior con experiencia laboral y especializado en el area Front-End",
  };

  const basicInfoEn = {
    welcome: 'Welcome!',
    I: 'I am',
    name: "Gastón Federico Nahuel Gómez",
    role: "Front-end Developer",
    description: " I am a junior programmer with work experience specializing in front-end development.",
  };

  // Placeholder FAQs - to be filled later
  const faqs = [
    {
      question: "Hace cuanto tiempo estudias?",
      answer: "Empece a comienzo de 2021, tuve uno que otro paron por buscar empleo en otras areas, pero siempre permaneci estudiando."
    },
    {
      question: "¿Que metas tienes?",
      answer: "Planeo dedicarme durante varios años al desarrollo web, es un area que realmente he llegado a disfrutar y que poder seguir haciendo proyectos me hace sentir bien."
    },
    {
      question: "¿Que nivel de Ingles manejas?",
      answer: "Actualmente poseo un nivel de C2 (71/100) en ingles según el certificado de EFSET"
    },
    {
      question: "¿Tienes problemas trabajando con otros?",
      answer: "He estado en varias simulaciones, gracias a la empresa de No Country y en una hackaton, en todas me ha tocado trabajar en equipo, Nunca he tenido problemas con nadie, de hecho me gusta bastante, porque gracias a eso he podido aprender de otros trabajadores y mejorar."
    },
    {
      question: "¿Donde aprendiste a programar?",
      answer: "Comence con una aplicacion (ya extinta) de google llamada Grasshooper que daba teoria y problemas en Javascript, por otro lado consegui mi principal conocimiento vino de FreeCodeCamp, Sololearn y Codewars. Hoy por hoy aprendo mas leyendo documentación y codigo de otros compañeros."
    }
  ];

  const faqsEn = [
      {
      question: "How long have you been studying",
      answer: "I started at the beginning of 2021. I took a few breaks to look for work in other areas, but I always kept studying."
    },
    {
      question: "¿Which are your goals?",
      answer: "I plan to devote myself to web development for several years. It's an area that I've really come to enjoy, and being able to continue working on projects makes me feel good."
    },
    {
      question: "¿What's your english level?",
      answer: "I currently have a C2 level (71/100) in English according to the EFSET certificate."
    },
    {
      question: "¿Do you have any problem working with others?",
      answer: "I have participated in several simulations, thanks to the No Country company and in a hackathon, and in all of them I have had to work in a team. I have never had any problems with anyone; in fact, I quite like it, because thanks to that I have been able to learn from other workers and improve."
    },
    {
      question: "Where did you learn to coding?",
      answer: "I started with a (now defunct) Google app called Grasshopper that provided theory and problems in JavaScript. On the other hand, I gained most of my knowledge from FreeCodeCamp, Sololearn, and Codewars. Today, I learn more by reading documentation and code from other colleagues."
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Welcome & Basic Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                {basicInfo.welcome} <br />
                {basicInfo.I} {basicInfo.name}
              </h2>
              <h3 className="text-2xl text-gray-600 dark:text-gray-300">
                {basicInfo.role}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {basicInfo.description}
              </p>
            </div>

            {/* FAQs Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Preguntas Frecuentes
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border-b border-gray-200 dark:border-gray-700 pb-4"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex justify-between items-center cursor-pointer"
                    >
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {faq.question}
                      </h4>
                      <span className="transform transition-transform duration-200 text-gray-500 dark:text-gray-400">
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === index && (
                      <p className="mt-2 text-gray-600 dark:text-gray-400 transition-all duration-200">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="flex justify-center">
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;