const Certifications = () => {
 
    const certifications = [
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
    ];

    const certificationsEn = [
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
    ];
  
    return (
      <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Certificaciones
          </h2>
          <div className="grid gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between group"
              >
                <span className="text-gray-900 dark:text-white font-medium group-hover:text-blue-500 transition-colors duration-300">
                  {cert.name}
                </span>
                <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver certificado →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Certifications;