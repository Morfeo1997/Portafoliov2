import { useState } from 'react';

const SkillCard = ({ name, level, icon, description, experience }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardInteraction = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  // Función para convertir el nivel numérico a texto
  const getLevelText = (level) => {
    const levels = {
      1: 'Básico',
      2: 'Competente', 
      3: 'Intermedio',
      4: 'Avanzado',
      5: 'Experto'
    };
    return levels[level] || 'Sin definir';
  };

  // Función para obtener el color según el nivel
  const getLevelColor = (level) => {
    const colors = {
      1: 'bg-red-500',
      2: 'bg-orange-500',
      3: 'bg-yellow-500',
      4: 'bg-green-500',
      5: 'bg-blue-500'
    };
    return colors[level] || 'bg-gray-500';
  };

  return (
    <div className="relative w-full skill-flip-card-container">
      <div 
        className={`relative w-full h-full cursor-pointer skill-flip-card ${isFlipped ? 'flipped' : ''}`}
        onTouchStart={handleCardInteraction}
        onClick={handleCardInteraction}
      >
        {/* Cara frontal */}
        <div className="absolute inset-0 w-full h-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 skill-flip-card-front">
          <div className="flex flex-col items-center h-full justify-center">
            <img
              src={icon}
              alt={`${name} icon`}
              className="w-16 h-16 mb-4 transition-transform duration-300"
            />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-3">
              {name}
            </h3>
            
            {/* Badge de nivel */}
            <div className={`${getLevelColor(level)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
              {getLevelText(level)}
            </div>

            {/* Indicador de interacción */}
            <div className="absolute top-2 right-2 opacity-60">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Cara trasera */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-lg shadow-md flex flex-col justify-between skill-flip-card-back">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-white">
                {name}
              </h3>
              <span className="bg-white/20 text-white px-2 py-1 rounded text-sm font-medium">
                {getLevelText(level)}
              </span>
            </div>
            
            {description && (
              <p className="text-white/90 text-sm mb-3 leading-relaxed">
                {description}
              </p>
            )}
            
            {experience && (
              <div className="mb-3">
                <span className="text-white/80 text-xs uppercase tracking-wide">Experiencia</span>
                <p className="text-white font-medium text-sm">{experience}</p>
              </div>
            )}
            
            
          </div>
          
          <button
            onTouchStart={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 backdrop-blur-sm"
          >
            ← Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
