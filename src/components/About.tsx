import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">{t('about.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div><h3 className="font-bold mb-4">{t('about.reality')}</h3><p className="text-gray-600">{t('about.reality_text')}</p></div>
          <div><h3 className="font-bold mb-4">{t('about.proposal')}</h3><p className="text-gray-600">{t('about.proposal_text')}</p></div>
        </div>
        <div className="bg-white p-8 rounded border"><p className="italic mb-4">"{t('about.quote')}"</p><p className="text-gray-600">— {t('about.quote_author')}</p></div>
      </div>
    </section>
  );
};
