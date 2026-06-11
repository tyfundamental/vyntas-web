import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'nav.ciencia', href: '#ciencia' },
    { key: 'nav.protocolos', href: '#protocolos' },
    { key: 'nav.revista', href: '#revista' },
    { key: 'nav.nosotros', href: '#nosotros' },
    { key: 'nav.newsletter', href: '#newsletter' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-tight">VYNTAS</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-black transition"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              
                key={item.key}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};