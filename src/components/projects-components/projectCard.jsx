import { useState } from 'react';

const ProjectCard = ({ title, image, tools, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    // Solo activar el flip en dispositivos táctiles
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Contenedor para el efecto flip */}
      <div className={`relative w-full h-64 transition-transform duration-500 transform-gpu ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Cara frontal - Imagen */}
        <div className="absolute inset-0 backface-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay para hover en desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:flex">
            <h3 className="text-xl font-bold text-white mb-3">
              {title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              Ver Proyecto
            </a>
          </div>

          {/* Indicador de tap para móviles */}
          <div className="md:hidden absolute top-4 right-4 bg-black/60 rounded-full p-2">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Cara trasera - Información del proyecto (solo para móviles) */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-gray-900 to-black flex flex-col justify-center p-6 md:hidden`}>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              Ver Proyecto
            </a>
            
            <button
              onClick={() => setIsFlipped(false)}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;