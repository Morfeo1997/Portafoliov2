import { useState } from 'react';

const ProjectCard = ({ title, image, tools, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardInteraction = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-full h-64 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-full flip-card-container">
        <div 
          className={`relative w-full h-full cursor-pointer flip-card ${isFlipped ? 'flipped' : ''}`}
          onTouchStart={handleCardInteraction}
          onClick={handleCardInteraction}
        >
          {/* Cara frontal */}
          <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden flip-card-front">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            
            {/* Indicador de interacción */}
            <div className="absolute top-4 right-4 bg-black/60 rounded-full p-2 animate-pulse">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Texto indicativo */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                <h3 className="text-lg font-bold text-white truncate">{title}</h3>
                <p className="text-sm text-gray-300">Click para ver más</p>
              </div>
            </div>
          </div>

          {/* Cara trasera */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-lg flex flex-col justify-center p-6 flip-card-back">
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
                onTouchStart={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
              >
                Ver Proyecto
              </a>
              
              <button
                onTouchStart={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="bg-gray-600 cursor-pointer text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300"
              >
                ← Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;