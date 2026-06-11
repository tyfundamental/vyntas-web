import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex gap-2">
      <button onClick={() => setLanguage('en')} className={`px-3 py-1 text-sm ${language === 'en' ? 'border-b-2 border-black' : 'text-gray-400'}`}>EN</button>
      <button onClick={() => setLanguage('es')} className={`px-3 py-1 text-sm ${language === 'es' ? 'border-b-2 border-black' : 'text-gray-400'}`}>ES</button>
    </div>
  );
};
