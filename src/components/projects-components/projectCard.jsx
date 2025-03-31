const ProjectCard = ({ title, image, tools, link }) => {
    return (
      <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Imagen del proyecto */}
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
  
        {/* Informacion del proyecto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-white mb-3">
            {title}
          </h3>
  
          {/* Herramientas usadas (HTML,JS,Python, etc) */}
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
  
          {/* Links del proyecto */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;