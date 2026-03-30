import { Scale, Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="bg-brand-blue p-2 rounded-lg">
              <Scale className="w-6 h-6 text-brand-gold" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-brand-gray uppercase tracking-wider font-semibold mb-[-4px]">
                Центр правовой поддержки
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-sans font-bold text-brand-blue tracking-tight">
                  Ваш юрист
                </span>
                <span className="text-2xl font-serif font-bold text-brand-gold italic tracking-wide">
                  АФК
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-brand-gray hover:text-brand-blue font-medium transition-colors">О нас</a>
            <a href="#services" className="text-brand-gray hover:text-brand-blue font-medium transition-colors">Услуги</a>
            <a href="#contacts" className="text-brand-gray hover:text-brand-blue font-medium transition-colors">Контакты</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+79990000000" 
              className="flex items-center gap-2 bg-brand-blue hover:bg-blue-900 text-white px-5 py-2.5 rounded-md font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Связаться</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
