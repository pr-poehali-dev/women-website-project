import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "3 секрета от LOVE-коуча",
      subtitle: "О ЯРКИХ ЛЮБОВНЫХ ОТНОШЕНИЯХ",
      description: "Как стать единственной для своего мужчины, укрепить отношения, разжечь искру и пробудить страсть",
      badge: "ПРЯМОЙ ЭФИР",
      times: ["12:00 МСК", "17:00 МСК"],
      bonus: "«5 фишек, чтобы всегда быть самой желанной»",
      link: "https://femalecollege.site/vlm/eva/anatomia/land1?gcpc=fe762&utm_source=salid&utm_medium=offer15658&utm_campaign=wm182581&utm_term=156581825811767277090&utm_content=salid&erid=2VtzqvCsfD4",
      color: "bg-red-600"
    },
    {
      id: 2,
      title: "Как за 2 часа зарядить⚡ свои отношения",
      subtitle: "ЯРКОСТЬЮ И СТРАСТЬЮ🔥😍",
      description: "С помощью моих секретных техник «Огненной любви» без страха облажаться, без манипуляций",
      badge: "БЕСПЛАТНЫЙ УРОК",
      price: "БЕСПЛАТНО",
      oldPrice: "3 000 ₽",
      bonus: "«5 фишек, чтобы всегда быть самой желанной»",
      link: "https://femalecollege.site/vlm/eva/anatomia/longreed2?gcpc=fe762&utm_source=salid&utm_medium=offer15658&utm_campaign=wm182581&utm_term=156581825811767277103&utm_content=salid&erid=2VtzqvSDYkA",
      color: "bg-gradient-to-r from-red-700 to-red-600"
    },
    {
      id: 3,
      title: "Как стать единственной для него",
      subtitle: "3 СЕКРЕТА ОТ LOVE-КОУЧА",
      description: "Узнайте, чего на самом деле ждут мужчины, какие ошибки разрушают брак",
      badge: "ВЕБИНАР 2 ЧАСА",
      price: "БЕСПЛАТНО",
      oldPrice: "3 000 ₽",
      bonus: "«5 фишек, чтобы всегда быть самой желанной»",
      link: "https://femalecollege.site/vlm/eva/anatomia/longreed1?gcpc=fe762&utm_source=salid&utm_medium=offer15658&utm_campaign=wm182581&utm_term=156581825811767277094&utm_content=salid&erid=2VtzqvHKd46",
      color: "bg-gradient-to-r from-red-700 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/20 to-white">
      <nav className="bg-white border-b sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xl">PC</div>
              <div>
                <div className="font-bold text-lg">PRIVATE COLLEGE</div>
                <div className="text-xs text-gray-600">Школа любовного мастерства</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#courses" className="text-sm hover:text-red-600 transition-colors">Курсы</a>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">Консультация</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-16 px-4 bg-gradient-to-br from-red-50/50 via-pink-50/30 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="Heart" size={16} />
            Онлайн-школа для женщин
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Курсы любовного мастерства</h1>
          <p className="text-xl text-gray-700 mb-8">Станьте единственной и самой желанной для своего мужчины</p>
        </div>
      </section>

      <section id="courses" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Выберите свой курс</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-2xl transition-all cursor-pointer" onClick={() => window.open(course.link, '_blank')}>
                <div className="relative h-64 bg-gradient-to-br from-red-100 via-pink-100 to-red-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Heart" size={80} className="text-red-200 opacity-50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className={`inline-flex items-center gap-2 ${course.color} text-white px-3 py-1 rounded-full text-xs font-semibold ${course.badge === "ПРЯМОЙ ЭФИР" ? "animate-pulse" : ""}`}>
                      {course.badge === "ПРЯМОЙ ЭФИР" && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                      {course.badge}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{course.title}</h3>
                    <p className="text-sm text-red-600 font-semibold mb-2">{course.subtitle}</p>
                    <p className="text-gray-600 text-sm line-clamp-3">{course.description}</p>
                  </div>
                  {course.times && (
                    <div className="flex gap-2">
                      {course.times.map((time, idx) => (
                        <div key={idx} className="flex-1 bg-red-50 px-3 py-2 rounded-lg text-center">
                          <Icon name="Clock" size={16} className="inline mr-1 text-red-600" />
                          <span className="text-sm font-semibold">{time}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {course.price && (
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-red-600">{course.price}</span>
                      <span className="text-lg text-gray-400 line-through">{course.oldPrice}</span>
                    </div>
                  )}
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Icon name="Gift" size={20} className="text-red-600 mt-0.5" />
                      <div className="text-xs text-gray-700">
                        <span className="font-semibold">Бонус: </span>{course.bonus}
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(course.link, '_blank');
                    }}
                  >
                    Записаться <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="font-bold text-lg mb-2">PRIVATE COLLEGE</div>
          <p className="text-sm text-gray-400">Школа любовного мастерства для женщин</p>
          <p className="text-sm text-gray-400 mt-4">ИП Минятюк Алёна Геннадьевна • ОГРН 321435000047548</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;