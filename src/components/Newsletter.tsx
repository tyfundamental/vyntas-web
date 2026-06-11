import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export const Newsletter = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{t('newsletter.title')}</h2>
        <p className="text-gray-300 mb-8">{t('newsletter.subtitle')}</p>
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input type="email" placeholder="tu@email.com" required className="flex-1 px-4 py-3 bg-gray-900 text-white rounded" />
          <button type="submit" className="px-6 py-3 bg-green-600 rounded">{t('newsletter.subscribe')}</button>
        </form>
        {submitted && <div className="bg-green-900 p-4 rounded mb-6"><p>{t('newsletter.success')}</p></div>}
        <p className="text-gray-400">{t('newsletter.or')} <a href="mailto:info@vyntas.com" className="text-green-400">info@vyntas.com</a></p>
      </div>
    </section>
  );
};
