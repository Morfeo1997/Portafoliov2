import { useState } from 'react';
import ProfileImage from './ProfileImage';

const AboutMe = () => {
  // Placeholder data - to be replaced later
  const basicInfo = {
    name: "Gastón Federico Nahuel Gómez",
    role: "Desarrollador Front-End",
    description: "Soy un programador de nivel junior con experiencia laboral y especializado en el area Front-End",
  };

  // Placeholder FAQs - to be filled later
  const faqs = [
    {
      question: "Hace cuanto tiempo estudias?",
      answer: "Empece a comienzo de 2021, tuve uno que otro paron por buscar empleo en otras areas, pero siempre permaneci estudiando."
    },
    {
      question: "¿Que metas tienes?",
      answer: "Planeo dedicarme durante varios años al desarrollo web para mejorar mis habilidades en la programacion y asi en un futuro poder realizar proyectos propios y vivir de esto."
    },
    {
      question: "¿Que nivel de Ingles manejas?",
      answer: "Actualmente poseo un nivel de C2 (71/100) en ingles según el certificado de EFSET"
    },
    {
      question: "¿Tienes problemas trabajando con otros?",
      answer: "He estado en 3 simulaciones, gracias a la empresa de No Country y en todas me ha tocado trabajar en equipo, Nunca he tenido problemas con nadie, de hecho me gusta bastante, porque gracias a eso he podido aprender de otros trabajadores y mejorar."
    },
    {
      question: "¿Donde aprendiste a programar?",
      answer: "Comence con una aplicacion (ya extinta) de google llamada Grasshooper que daba teoria y problemas en Javascript, por otro lado consegui mi principal conocimiento vino de FreeCodeCamp, Sololearn y Codewars. Hoy por hoy aprendo mas leyendo documentación y codigo de otros compañeros."
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
                ¡Hola! Soy {basicInfo.name}
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