import { useLanguage } from '../contexts/LanguageContext';
import { FiGlobe } from 'react-icons/fi';

const LanguageSelector = () => {
  const { language, setLanguage, isSpanish } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      title={isSpanish ? 'Cambiar a inglés' : 'Switch to Spanish'}
    >
      <FiGlobe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {language.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageSelector;
