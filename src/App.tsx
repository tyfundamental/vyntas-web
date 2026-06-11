import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Science } from './components/Science';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Science />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
