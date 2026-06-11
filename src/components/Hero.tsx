import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-gray-500 mb-4">{t('hero.tagline')}</p>
        <h1 className="text-5xl font-bold mb-4">{t('hero.title')}<br/><span className="text-yellow-500">{t('hero.subtitle')}</span></h1>
        <p className="text-lg text-gray-600">{t('hero.description')}</p>
      </div>
    </section>
  );
};
