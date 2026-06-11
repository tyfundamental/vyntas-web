import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-sm font-medium transition ${
          language === 'en'
            ? 'text-black border-b-2 border-black'
            : 'text-gray-400 hover:text-black'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`px-2 py-1 text-sm font-medium transition ${
          language === 'es'
            ? 'text-black border-b-2 border-black'
            : 'text-gray-400 hover:text-black'
        }`}
      >
        ES
      </button>
    </div>
  );
};
