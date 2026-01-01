import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все курсы");

  const courses = [
    {
      id: 1,
      title: "Незабываемые ночи любви",
      subtitle: "Как устраивать мужчине незабываемые ночи любви",
      description: "Секретные техники от love-коуча для яркой интимной жизни",
      image: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/0b2c7ffa-c35f-4ceb-a5b3-9f34ef08ffdc.jpg",
      price: "БЕСПЛАТНО",
      oldPrice: "3 000 ₽",
      rating: 5.0,
      reviews: 8,
      category: "Курсы",
      duration: "5 модулей",
      format: "Видеоуроки",
      link: "/course-1"
    },
    {
      id: 2,
      title: "Огонь и страсть",
      subtitle: "Как за 2 часа внести в отношения огонь и страсть",
      description: "Онлайн-урок от сексолога о возвращении страсти в отношения",
      image: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/9153978a-d7bb-4d55-95ae-3c8615c0da1c.jpg",
      price: "БЕСПЛАТНО",
      oldPrice: "3 000 ₽",
      rating: 5.0,
      reviews: 12,
      category: "Онлайн-уроки",
      duration: "2 часа",
      format: "Прямой эфир",
      link: "/course-2"
    },
    {
      id: 3,
      title: "3 секрета от LOVE-коуча",
      subtitle: "О ярких любовных отношениях",
      description: "Как стать единственной для своего мужчины и укрепить отношения",
      image: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/ff51155b-661c-4567-855b-531899242f4b.jpg",
      price: "БЕСПЛАТНО",
      oldPrice: "3 000 ₽",
      rating: 5.0,
      reviews: 15,
      category: "Вебинары",
      duration: "2 часа",
      format: "Прямой эфир",
      link: "/webinar"
    },
    {
      id: 4,
      title: "Анатомия любви",
      subtitle: "Полный курс любовного мастерства",
      description: "Станьте экспертом в искусстве любви и соблазнения",
      image: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/0252ea52-23a8-4c6f-b265-122c5253e92d.jpg",
      price: "БЕСПЛАТНО",
      oldPrice: "5 000 ₽",
      rating: 5.0,
      reviews: 24,
      category: "Курсы",
      duration: "8 модулей",
      format: "Видео + практика",
      link: "/course-1"
    }
  ];

  const categories = ["Все курсы", "Курсы", "Вебинары", "Онлайн-уроки"];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Все курсы" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      <nav className="bg-white border-b sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Private College" className="h-10" />
              <div>
                <div className="font-bold text-lg" style={{ fontFamily: 'Georgia, serif' }}>PRIVATE COLLEGE</div>
                <div className="text-xs text-gray-600">Школа любовного мастерства</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#courses" className="text-sm hover:text-primary transition-colors">Курсы</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">О школе</a>
              <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
              <Button size="sm">Консультация</Button>
            </div>

            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/10 to-pink-50/50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="Sparkles" size={16} />
            Онлайн-образование для женщин
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Курсы любовного мастерства для женщин
          </h1>

          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Станьте единственной и самой желанной для своего мужчины. Верните страсть в отношения и откройте секреты яркой интимной жизни
          </p>

          <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={24} className="text-primary" />
              <span className="font-semibold">500+ выпускниц</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Star" size={24} className="text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">Рейтинг 5.0</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={24} className="text-primary" />
              <span className="font-semibold">Сертификаты</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Найти курс по названию или теме..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 pl-12 pr-4 text-lg"
            />
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      <section id="courses" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-6 text-gray-600">
            Найдено курсов: <span className="font-semibold text-black">{filteredCourses.length}</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => navigate(course.link)}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {course.category}
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Video" size={16} />
                      <span>{course.format}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{course.rating} ({course.reviews} отзывов)</span>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                      <span className="text-lg text-gray-400 line-through">{course.oldPrice}</span>
                    </div>
                    <Button className="w-full group-hover:shadow-lg transition-all">
                      Записаться
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-gradient-to-br from-primary/5 to-pink-50/50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                О Private College
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Мы — онлайн-школа, которая помогает женщинам открыть секреты яркой интимной жизни 
                и стать незабываемой для своего мужчины.
              </p>
              <div className="space-y-4">
                {[
                  "Курсы от сертифицированных специалистов",
                  "Практические техники и упражнения",
                  "Конфиденциальность и поддержка 24/7",
                  "Доступ к материалам навсегда"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/a4553f73-67ba-49d0-be40-d8c23809f5f0.jpg"
                alt="Ева Снежинская"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="font-bold text-2xl text-primary mb-1">Ева Снежинская</p>
                <p className="text-sm text-gray-600">Основатель школы, love-коуч, сексолог</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            Отзывы наших учениц
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Елена, 35 лет",
                city: "Москва",
                text: "После 10 лет брака казалось, что всё потеряно. Курсы помогли вернуть не только страсть, но и уважение друг к другу!",
                rating: 5
              },
              {
                name: "Анна, 28 лет",
                city: "Санкт-Петербург",
                text: "Я была очень зажатой и комплексовала. Теперь чувствую себя настоящей женщиной, а муж буквально счастлив!",
                rating: 5
              },
              {
                name: "Мария, 42 года",
                city: "Краснодар",
                text: "Думала, в моём возрасте уже поздно что-то менять. Ошибалась! Мы с мужем как будто заново влюбились.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-lg">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.city}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-4xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            Готовы изменить свою жизнь?
          </h2>
          <p className="text-xl text-white/90">
            Запишитесь на бесплатную консультацию и получите подарок
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Ваш email"
              className="h-12 bg-white"
            />
            <Button size="lg" variant="secondary" className="whitespace-nowrap">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-4" style={{ fontFamily: 'Georgia, serif' }}>PRIVATE COLLEGE</div>
              <p className="text-sm text-gray-400">Школа любовного мастерства для женщин</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Курсы</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Незабываемые ночи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Огонь и страсть</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вебинары</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">О нас</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О школе</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@privatecollege.ru</li>
                <li>Telegram: @privatecollege</li>
                <li>WhatsApp: +7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center space-y-4">
            <p className="text-sm text-gray-400">ИП Минятюк Алёна Геннадьевна</p>
            <p className="text-sm text-gray-400">ОГРН 321435000047548</p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-300">Политика конфиденциальности</a>
              <a href="#" className="hover:text-gray-300">Согласие на обработку данных</a>
              <a href="#" className="hover:text-gray-300">Публичная оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
