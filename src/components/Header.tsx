import { Menu, Phone, Scale } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-brand-gold shadow-[0_18px_35px_-20px_rgba(30,58,138,0.7)]">
              <Scale className="h-6 w-6" />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
                Центр правовой поддержки
              </span>
              <div className="mt-1.5 flex items-end gap-2">
                <span className="text-[30px] font-extrabold tracking-[-0.05em] text-brand-blue sm:text-[34px]">
                  Ваш юрист
                </span>
                <span className="font-serif text-[32px] italic text-brand-gold sm:text-[36px]">АФК</span>
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-12 lg:flex">
            <a href="#about" className="text-lg font-medium text-slate-600 transition-colors hover:text-brand-blue">
              О нас
            </a>
            <a href="#services" className="text-lg font-medium text-slate-600 transition-colors hover:text-brand-blue">
              Услуги
            </a>
            <a href="#contacts" className="text-lg font-medium text-slate-600 transition-colors hover:text-brand-blue">
              Контакты
            </a>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:+79990000000" className="text-right leading-tight">
              <span className="block text-xs text-slate-400">Связаться с юристом</span>
              <span className="text-[28px] font-semibold tracking-[-0.03em] text-slate-900">8 (800) 302-69-01</span>
            </a>

            <a
              href="tel:+79990000000"
              className="inline-flex items-center gap-3 rounded-xl bg-brand-gold px-6 py-3.5 text-base font-bold text-slate-950 shadow-[0_16px_32px_-20px_rgba(212,175,55,0.8)] transition-all hover:-translate-y-0.5 hover:bg-[#e3be4e]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/55">
                <Phone className="h-5 w-5" />
              </span>
              Заказать звонок
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Открыть меню"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
