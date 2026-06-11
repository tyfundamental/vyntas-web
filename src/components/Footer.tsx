import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm">
        <p>{t('footer.copyright')}</p>
        <p>{t('footer.contact')} <a href="mailto:info@vyntas.com" className="text-green-600">info@vyntas.com</a></p>
      </div>
    </footer>
  );
};
