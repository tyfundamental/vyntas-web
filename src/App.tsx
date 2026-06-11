--
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ScienceSection } from './components/ScienceSection';
import { ProtocolSection } from './components/ProtocolSection';
import { SettleNewsletterBanner } from './components/SettleNewsletterBanner';
import { Footer } from './components/Footer';
 
function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutSection />
      <ScienceSection />
      <ProtocolSection />
      <SettleNewsletterBanner />
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