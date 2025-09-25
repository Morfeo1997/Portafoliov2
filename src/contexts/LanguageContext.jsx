// src/contexts/LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Recuperar idioma del localStorage o usar español por defecto
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage || 'es';
  });

  // Guardar en localStorage cuando cambie el idioma
  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const translations = {
    es: {
      // Navbar
      nav: {
        about: 'Sobre mí',
        skills: 'Skills',
        projects: 'Proyectos',
        certificates: 'Certificados',
        contact: 'Contacto'
      },
      // Aquí puedes agregar más secciones según tus componentes
      about: {
        title: 'Sobre mí',
        // ... más textos del componente About
      },
      skills: {
        title: 'Habilidades',
        // ... más textos
      },
      projects: {
        title: 'Proyectos',
        // ... más textos
      },
      certificates: {
        title: 'Certificados',
        // ... más textos
      },
      contact: {
        title: 'Contacto',
        // ... más textos
      },
      footer: {
        // ... textos del footer
      }
    },
    en: {
      // Navbar
      nav: {
        about: 'About me',
        skills: 'Skills',
        projects: 'Projects',
        certificates: 'Certificates',
        contact: 'Contact'
      },
      // Aquí las traducciones en inglés
      about: {
        title: 'About me',
        // ... más textos del componente About
      },
      skills: {
        title: 'Skills',
        // ... más textos
      },
      projects: {
        title: 'Projects',
        // ... más textos
      },
      certificates: {
        title: 'Certificates',
        // ... más textos
      },
      contact: {
        title: 'Contact',
        // ... más textos
      },
      footer: {
        // ... textos del footer en inglés
      }
    }
  };

  // Función para obtener traducciones usando notación de puntos
  const t = (key) => {
    const keys = key.split('.');
    let result = translations[language];
    
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key; // Devolver la clave si no se encuentra traducción
      }
    }
    
    return result;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    isSpanish: language === 'es',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
