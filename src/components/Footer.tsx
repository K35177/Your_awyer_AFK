import { Mail, MapPin, Phone, Scale } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contacts" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/10 p-2 rounded-lg">
                <Scale className="w-6 h-6 text-brand-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-[-4px]">
                  Центр правовой поддержки
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-sans font-bold text-white tracking-tight">
                    Ваш юрист
                  </span>
                  <span className="text-2xl font-serif font-bold text-brand-gold italic tracking-wide">
                    АФК
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Профессиональная защита ваших прав и законных интересов. Надежность, конфиденциальность и индивидуальный подход к каждому делу.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white">Навигация</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">Главная</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-gold transition-colors">О компании</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-gold transition-colors">Услуги</a></li>
              <li><a href="#contacts" className="text-gray-400 hover:text-brand-gold transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold mb-6 text-white">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-gray-400">г. Москва, ул. Правовая, д. 1, офис 101</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="tel:+79990000000" className="text-gray-400 hover:text-white transition-colors">+7 (999) 000-00-00</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="mailto:info@afk-law.ru" className="text-gray-400 hover:text-white transition-colors">info@afk-law.ru</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Центр правовой поддержки «Ваш юрист АФК». Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
