import { Briefcase, Scale, FileText, Building2, Users, Landmark } from 'lucide-react';

const services = [
  {
    title: 'Корпоративное право',
    description: 'Регистрация бизнеса, сопровождение сделок M&A, разрешение корпоративных конфликтов и защита активов.',
    icon: Building2,
    color: 'blue'
  },
  {
    title: 'Арбитражные споры',
    description: 'Представление интересов в арбитражных судах всех инстанций по экономическим и коммерческим спорам.',
    icon: Scale,
    color: 'gold'
  },
  {
    title: 'Договорная работа',
    description: 'Разработка, правовая экспертиза и согласование договоров любой сложности для минимизации рисков.',
    icon: FileText,
    color: 'green'
  },
  {
    title: 'Гражданские дела',
    description: 'Помощь физическим лицам в разрешении имущественных, семейных, наследственных и жилищных споров.',
    icon: Users,
    color: 'blue'
  },
  {
    title: 'Налоговый консалтинг',
    description: 'Оптимизация налогообложения, сопровождение налоговых проверок и оспаривание решений ФНС.',
    icon: Landmark,
    color: 'gray'
  },
  {
    title: 'Трудовые споры',
    description: 'Защита прав работодателей и работников, кадровый аудит и разработка локальных нормативных актов.',
    icon: Briefcase,
    color: 'green'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Направления нашей работы
          </h2>
          <p className="text-lg text-gray-600">
            Мы предоставляем квалифицированную юридическую помощь, опираясь на глубокие знания законодательства и богатый практический опыт.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            // Determine icon background and text color based on the assigned color theme
            let colorClasses = "";
            if (service.color === 'blue') colorClasses = "bg-blue-100 text-brand-blue";
            else if (service.color === 'green') colorClasses = "bg-green-100 text-brand-green";
            else if (service.color === 'gold') colorClasses = "bg-yellow-100 text-brand-gold";
            else colorClasses = "bg-gray-200 text-brand-gray";

            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${colorClasses}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
