import { ArrowRight, BriefcaseBusiness, FileText, Landmark, Scale, ShieldUser, Users } from 'lucide-react';

const serviceCategories = [
  'Для бизнеса',
  'Для граждан',
  'Судебные споры',
  'Договоры',
  'Недвижимость',
  'Налоговые вопросы'
];

const services = [
  {
    title: 'Юридические консультации',
    description: 'Разбираем ситуацию, оцениваем риски и предлагаем понятный порядок действий без перегруженных формулировок.',
    icon: Scale,
    items: ['Первичный правовой анализ', 'Письменные рекомендации', 'План дальнейших шагов']
  },
  {
    title: 'Сопровождение бизнеса',
    description: 'Поддерживаем компании и предпринимателей в текущей деятельности, переговорах, внутренних документах и спорных ситуациях.',
    icon: BriefcaseBusiness,
    items: ['Правовая поддержка компании', 'Сопровождение переговоров', 'Снижение договорных рисков']
  },
  {
    title: 'Договорная работа',
    description: 'Готовим, проверяем и дорабатываем договоры так, чтобы условия были понятными, исполнимыми и выгодными для клиента.',
    icon: FileText,
    items: ['Подготовка договоров', 'Правовая экспертиза', 'Согласование условий']
  },
  {
    title: 'Судебное представительство',
    description: 'Формируем правовую позицию, готовим документы и представляем интересы доверителя в суде.',
    icon: Landmark,
    items: ['Подготовка процессуальных документов', 'Представление в суде', 'Сопровождение споров']
  },
  {
    title: 'Споры с государственными органами',
    description: 'Помогаем выстраивать взаимодействие с контролирующими органами, обжаловать решения и защищать законные интересы.',
    icon: ShieldUser,
    items: ['Жалобы и обращения', 'Оспаривание решений', 'Защита интересов клиента']
  },
  {
    title: 'Помощь гражданам',
    description: 'Сопровождаем имущественные, семейные, наследственные и иные частные юридические вопросы.',
    icon: Users,
    items: ['Семейные и имущественные вопросы', 'Наследственные споры', 'Персональное сопровождение']
  }
];

export function Services() {
  return (
    <section id="services" className="bg-[#f6f8fc] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-brand-gold/25 bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue shadow-sm">
              Наши услуги
            </span>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Структурированная юридическая помощь
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Блок оформлен ближе к вашим референсам: больше воздуха, четкая структура и понятное деление услуг без перегруженных карточек.
            </p>
          </div>

          <a
            href="tel:+79990000000"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-brand-blue/15 bg-white px-5 py-3 text-sm font-bold text-brand-blue shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-blue/40"
          >
            Записаться на консультацию
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Разделы</h3>
            <div className="mt-6 space-y-2">
              {serviceCategories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-semibold transition-all ${
                    index === 0
                      ? 'bg-brand-blue text-white shadow-[0_14px_24px_-18px_rgba(30,58,138,0.8)]'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-xs ${index === 0 ? 'text-white/70' : 'text-slate-400'}`}>0{index + 1}</span>
                </button>
              ))}
            </div>
          </aside>

          <div className="grid gap-6">
            {services.map(({ title, description, icon: Icon, items }) => (
              <article
                key={title}
                className="service-showcase grid overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_24px_60px_-38px_rgba(15,23,42,0.35)] lg:grid-cols-[minmax(0,1.2fr)_240px]"
              >
                <div className="p-8 sm:p-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-3xl font-bold tracking-[-0.03em] text-slate-950">{title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{description}</p>

                  <div className="mt-7">
                    <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Что входит</div>
                    <div className="mt-4 space-y-3">
                      {items.map((item) => (
                        <div key={item} className="service-line flex items-center gap-3 text-base text-slate-700">
                          <span className="h-2.5 w-2.5 rounded-full bg-brand-gold"></span>
                          <span className="whitespace-nowrap">{item}</span>
                          <span className="service-dots h-px flex-1"></span>
                          <a href="tel:+79990000000" className="font-medium text-brand-blue transition-colors hover:text-brand-gold">
                            Записаться
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden border-t border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] lg:min-h-full lg:border-l lg:border-t-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_38%)]"></div>
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-brand-gold/30 bg-white/70 text-brand-gold shadow-[0_24px_50px_-26px_rgba(212,175,55,0.7)] backdrop-blur">
                    <Icon className="h-16 w-16" strokeWidth={1.75} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
