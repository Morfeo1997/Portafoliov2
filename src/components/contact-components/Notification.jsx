import { useEffect } from 'react';

const Notification = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center space-x-3 animate-fade-in z-50">
      <span className="text-green-500 text-2xl">✓</span>
      <p className="text-gray-800 dark:text-white">{message}</p>
    </div>
  );
};

export default Notification;
