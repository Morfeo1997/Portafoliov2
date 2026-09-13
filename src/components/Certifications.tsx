import { useLanguage } from '../contexts/LanguageContext';

const Certifications = () => {

  const { t } = useLanguage();

  const certifications = t('certificates.certifications');
 

  
    return (
      <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('certificates.title')}
          </h2>
          <div className="grid gap-6 max-w-3xl mx-auto">
            {certifications && certifications.map((cert, index) => (
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
                  {t('certificates.goto')} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Certifications;