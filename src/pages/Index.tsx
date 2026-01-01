import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const portfolioItems = [
    {
      title: "Карьерная трансформация",
      description: "История смены профессии с нуля до руководителя",
      image: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/a4553f73-67ba-49d0-be40-d8c23809f5f0.jpg",
      result: "Рост дохода на 300%"
    },
    {
      title: "Баланс жизни и карьеры",
      description: "Путь к гармонии между семьей и бизнесом",
      image: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/ff51155b-661c-4567-855b-531899242f4b.jpg",
      result: "Счастливая семья + успешный проект"
    },
    {
      title: "Лидерство нового уровня",
      description: "От сотрудника до CEO за 2 года",
      image: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/e35db85c-2e3a-442f-8eb9-c313393109b7.jpg",
      result: "Команда из 50 человек"
    }
  ];

  const services = [
    {
      icon: "Sparkles",
      title: "Индивидуальный коучинг",
      description: "Персональные сессии один-на-один для глубокой трансформации",
      duration: "60 минут",
      price: "от 5 000 ₽"
    },
    {
      icon: "Users",
      title: "Групповые программы",
      description: "Обучение в кругу единомышленниц для взаимной поддержки",
      duration: "8 недель",
      price: "от 25 000 ₽"
    },
    {
      icon: "Lightbulb",
      title: "Корпоративные тренинги",
      description: "Развитие женского лидерства в вашей компании",
      duration: "1-2 дня",
      price: "по запросу"
    },
    {
      icon: "Heart",
      title: "Консультация психолога",
      description: "Профессиональная психологическая поддержка",
      duration: "50 минут",
      price: "от 4 000 ₽"
    }
  ];

  const blogPosts = [
    {
      title: "5 шагов к уверенности в себе",
      category: "Саморазвитие",
      date: "15 декабря 2024",
      excerpt: "Практические техники для укрепления внутренней силы и веры в себя"
    },
    {
      title: "Как найти своё предназначение",
      category: "Карьера",
      date: "10 декабря 2024",
      excerpt: "Методика поиска дела, которое приносит радость и доход"
    },
    {
      title: "Преодоление страха перед изменениями",
      category: "Психология",
      date: "5 декабря 2024",
      excerpt: "Почему мы боимся перемен и как с этим работать"
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Женский Коучинг</h1>
            <div className="hidden md:flex gap-6">
              {["home", "portfolio", "blog", "services", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  {section === "home" && "Главная"}
                  {section === "portfolio" && "Портфолио"}
                  {section === "blog" && "Блог"}
                  {section === "services" && "Услуги"}
                  {section === "about" && "О проекте"}
                  {section === "contact" && "Контакты"}
                </button>
              ))}
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Раскройте свой 
                <span className="text-primary block">потенциал</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Платформа для женщин, которые стремятся к личностному росту, 
                карьерным достижениям и гармонии в жизни
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection("contact")}>
                  Начать путь
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("services")}>
                  Услуги
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <img
                src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/ff51155b-661c-4567-855b-531899242f4b.jpg"
                alt="Вдохновение"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">500+</p>
                <p className="text-sm">довольных клиенток</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Истории успеха</h2>
            <p className="text-muted-foreground text-lg">Реальные результаты наших клиенток</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in group">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {item.result}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог</h2>
            <p className="text-muted-foreground text-lg">Полезные материалы для вашего роста</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 text-primary">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Выберите формат, который подходит именно вам</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <Icon name="DollarSign" size={16} />
                      <span>{service.price}</span>
                    </div>
                  </div>
                  <Button className="w-full">Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/e35db85c-2e3a-442f-8eb9-c313393109b7.jpg"
                alt="О проекте"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">О нашем проекте</h2>
              <p className="text-lg text-muted-foreground">
                Мы создали платформу, где каждая женщина может найти поддержку, 
                вдохновение и профессиональное сопровождение на пути к своим целям.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Наша миссия</h3>
                    <p className="text-muted-foreground text-sm">
                      Помогать женщинам раскрывать свой потенциал и достигать целей
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Наш опыт</h3>
                    <p className="text-muted-foreground text-sm">
                      Более 5 лет работы и 500+ успешных историй трансформации
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Наш подход</h3>
                    <p className="text-muted-foreground text-sm">
                      Индивидуальный подход с заботой и профессионализмом
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg">
              Готовы начать свой путь к переменам? Напишите нам!
            </p>
          </div>
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Сообщение</label>
                  <Textarea placeholder="Расскажите о своих целях и ожиданиях..." rows={5} />
                </div>
                <Button size="lg" className="w-full">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-6 justify-center text-sm">
                  <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="Phone" size={16} />
                    +7 (999) 123-45-67
                  </a>
                  <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="Mail" size={16} />
                    hello@coaching.ru
                  </a>
                  <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="Instagram" size={16} />
                    @coaching
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 Женский Коучинг. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
