import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';

export default function App() {
  return (
    <LanguageProvider>
      <Header />
    </LanguageProvider>
  );
}