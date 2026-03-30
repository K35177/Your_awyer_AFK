import { ArrowRight, Phone, Scale, ShieldCheck, Users } from 'lucide-react';

const metrics = [
  {
    value: '10+',
    label: 'лет юридической практики',
    icon: Scale,
    tone: 'blue'
  },
  {
    value: '500+',
    label: 'клиентов получили сопровождение',
    icon: Users,
    tone: 'gold'
  },
  {
    value: '24/7',
    label: 'внимание к делу и обратная связь',
    icon: ShieldCheck,
    tone: 'green'
  }
];

const advantages = [
  'Юридические услуги для бизнеса и частных клиентов',
  'Спокойная коммуникация и понятная стратегия решения',
  'Сопровождение документов, переговоров и судебных споров'
];

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,58,138,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.10),transparent_22%)]"></div>
      <div className="absolute left-1/2 top-0 hidden h-full w-[860px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(15,23,42,0.04)_0,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[length:36px_36px] opacity-40 lg:block"></div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/10 bg-brand-blue/5 px-4 py-2 text-sm font-semibold text-brand-blue shadow-sm shadow-brand-blue/5">
              <ShieldCheck className="h-4 w-4 text-brand-green" />
              Надежная защита ваших интересов
            </div>

            <h1 className="mt-8 text-5xl font-extrabold leading-[0.94] tracking-[-0.04em] text-slate-950 sm:text-6xl xl:text-[88px]">
              Профессиональная
              <span className="mt-2 block text-brand-blue">юридическая</span>
              <span className="mt-2 block">помощь</span>
              <span className="mt-2 block">для бизнеса и</span>
              <span className="mt-2 block">граждан</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
              Центр правовой поддержки <span className="font-semibold text-slate-900">«Ваш юрист»</span> с фирменным акцентом
              <span className="font-serif text-[1.1em] italic text-brand-gold"> АФК</span>. Помогаем в переговорах, документах и судебных спорах — спокойно, структурированно и по существу.
            </p>

            <div className="mt-8 grid max-w-2xl gap-3">
              {advantages.map((item) => (
                <div key={item} className="flex items-center gap-3 text-base leading-7 text-slate-700">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brand-green/20 bg-brand-green/10 text-brand-green">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+79990000000"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-brand-gold px-8 py-4 text-base font-bold text-slate-950 shadow-[0_16px_30px_-18px_rgba(212,175,55,0.8)] transition-all hover:-translate-y-0.5 hover:bg-[#e1bc4a]"
              >
                Получить консультацию
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue"
              >
                Посмотреть услуги
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="hero-panel relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.35)] sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_30%),linear-gradient(180deg,rgba(248,250,252,0.95),rgba(255,255,255,1))]"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-5">
                  {metrics.map(({ value, label, icon: Icon, tone }) => (
                    <div
                      key={value}
                      className={`metric-card metric-${tone} rounded-[24px] border p-6 ${value === '24/7' ? 'col-span-2 sm:col-span-1' : ''}`}
                    >
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="text-5xl font-extrabold tracking-[-0.05em] text-slate-950">{value}</div>
                      <p className="mt-3 max-w-[220px] text-base leading-7 text-slate-500">{label}</p>
                    </div>
                  ))}

                  <div className="col-span-2 rounded-[28px] bg-brand-blue p-8 text-white shadow-[0_20px_40px_-20px_rgba(30,58,138,0.9)]">
                    <p className="text-sm font-medium text-white/75">Ваш надежный партнер</p>
                    <div className="mt-3 flex items-end justify-between gap-4">
                      <div>
                        <div className="font-serif text-5xl italic text-brand-gold sm:text-6xl">АФК</div>
                        <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
                          Юридическая помощь с понятной подачей, аккуратной структурой и вниманием к деталям.
                        </p>
                      </div>
                      <a
                        href="tel:+79990000000"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-brand-gold transition-colors hover:bg-white/20"
                        aria-label="Связаться"
                      >
                        <Phone className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
