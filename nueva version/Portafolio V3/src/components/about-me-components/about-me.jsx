// src/components/about-me/About-me.jsx
import { useState } from 'react';
import ProfileImage from './ProfileImage';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutMe = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Obtenemos las FAQs del contexto de idiomas
  const faqs = t('about.faqs');

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Welcome & Basic Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                {t('about.welcome')} <br />
                {t('about.iam')} {t('about.name')}
              </h2>
              <h3 className="text-2xl text-gray-600 dark:text-gray-300">
                {t('about.role')}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {t('about.description')}
              </p>
            </div>

            {/* FAQs Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('about.faqTitle')}
              </h3>
              <div className="space-y-4">
                {faqs && faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border-b border-gray-200 dark:border-gray-700 pb-4"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex justify-between items-center cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {faq.question}
                      </h4>
                      <span className="transform transition-transform duration-200 text-gray-500 dark:text-gray-400">
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="mt-3 text-gray-600 dark:text-gray-400 transition-all duration-300 ease-in-out">
                        <p className="leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
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