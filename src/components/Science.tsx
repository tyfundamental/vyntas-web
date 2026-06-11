import { useLanguage } from '../context/LanguageContext';

export const Science = () => {
  const { t } = useLanguage();
  const articles = [{title: 'NMN', authors: 'Yoshino et al.', doi: '10.1126/science.abe9985', url: 'https://doi.org/10.1126/science.abe9985'}, {title: 'Fisetin', authors: 'Yousefzadeh et al.', doi: '10.1016/j.ebiom.2018.09.015', url: 'https://doi.org/10.1016/j.ebiom.2018.09.015'}, {title: 'Berberine', authors: 'Kong et al.', doi: '10.1038/nm1135', url: 'https://doi.org/10.1038/nm1135'}];
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">{t('science.title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (<div key={a.doi} className="border p-6 rounded"><h3 className="font-bold mb-2">{a.title}</h3><p className="text-sm text-gray-500 mb-4">{a.authors}</p><div className="bg-green-50 p-2 rounded mb-4"><p className="text-xs text-green-700">{a.doi}</p></div><a href={a.url} target="_blank" rel="noopener noreferrer" className="text-green-600 text-sm">{t('science.official')} →</a></div>))}
        </div>
      </div>
    </section>
  );
};
