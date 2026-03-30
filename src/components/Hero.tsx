import { ArrowRight, ShieldCheck, TrendingUp, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-blue blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-brand-green blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              Надежная защита ваших интересов
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Профессиональная <br/>
              <span className="text-brand-blue">юридическая помощь</span> <br/>
              для бизнеса и граждан
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Команда опытных адвокатов и юристов <strong className="font-serif text-brand-gold text-xl font-bold italic">АФК</strong> обеспечит комплексное сопровождение ваших дел, минимизирует риски и защитит ваши права в любой инстанции.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-brand-gold hover:bg-yellow-500 text-white px-8 py-3.5 rounded-md font-semibold transition-colors shadow-lg shadow-yellow-500/20">
                Получить консультацию
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border-2 border-brand-gray text-brand-gray hover:border-brand-blue hover:text-brand-blue px-8 py-3.5 rounded-md font-semibold transition-colors">
                Наши услуги
              </button>
            </div>
          </div>

          {/* Visual/Stats Content */}
          <div className="relative">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">15+</h3>
                  <p className="text-sm text-gray-500 font-medium">Лет успешной практики</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                    <ShieldCheck className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">98%</h3>
                  <p className="text-sm text-gray-500 font-medium">Выигранных дел</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-brand-gold" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">500+</h3>
                  <p className="text-sm text-gray-500 font-medium">Довольных клиентов</p>
                </div>

                <div className="flex flex-col justify-center p-4 bg-brand-blue rounded-xl text-white">
                  <p className="text-sm font-medium mb-1 opacity-80">Ваш надежный партнер</p>
                  <div className="font-serif text-2xl font-bold text-brand-gold italic">АФК</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
