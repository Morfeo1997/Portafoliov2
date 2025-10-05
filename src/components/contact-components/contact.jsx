import { useState } from 'react';
import Notification from './Notification';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);

  const { t } = useLanguage();



  const handleSubmit = (e) => {
    {/* Manejo del envio de notificaciones */}
    setShowNotification(true);
  };



  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Contact Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('contact.headline')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('contact.head1')}<br />
              {t('contact.head2')}
            </p>
          </div>

          {/* Formulario de contacto */}
          <form 
            action="https://formsubmit.co/gastongomez2014@hotmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Casilla de nombre */}
            <div>
              <label 
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.name')}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={t('contact.name')}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
            </div>

            {/* Casilla de Email */}
            <div>
              <label 
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.email')}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t('contact.email')}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
            </div>

            {/* Casilla de asunto */}
            <div>
              <label 
                htmlFor="issue"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.issue')}
              </label>
              <input
                type="text"
                name="issue"
                id="issue"
                placeholder={t('contact.issue')}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
            </div>

            {/* Casilla de Mensaje */}
            <div>
              <label 
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.message')}
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
              ></textarea>
            </div>

            {/* Boton de Submit */}
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg cursor-pointer bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
              >
                {t('contact.send')}
              </button>
            </div>

            {/* inputs ocultos */}
            <input type="hidden" name="_next" value="https://gaston-gomez1997.netlify.app/" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>

      <Notification
        message={t('contact.notification')}
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </section>
  );
};

export default Contact;