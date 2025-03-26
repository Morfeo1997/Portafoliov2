const SkillCard = ({ name, level, icon }) => {
    return (
      <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Skill Icon */}
        <div className="flex flex-col items-center">
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-2/4 h-2/4 mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center">
            {name}
          </h3>
        </div>
  
        {/* Progress Bar (visible on hover) */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="h-full bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${level}%` }}
          />
        </div>
  
        {/* Percentage Label (visible on hover) */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {level}%
        </div>
      </div>
    );
  };
  
  export default SkillCard;