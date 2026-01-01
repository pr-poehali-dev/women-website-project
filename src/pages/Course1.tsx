import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Course1 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <nav className="py-4 px-4 border-b border-border bg-background sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <button onClick={() => navigate("/")} className="flex items-center gap-3">
            <img src="/logo.svg" alt="Private College" className="h-10" />
          </button>
          <Button onClick={() => navigate("/webinar")}>Вебинар</Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <Icon name="Video" size={16} />
                Видеокурс
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Как устраивать мужчине незабываемые ночи любви
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="text-muted-foreground">5.0 (8 отзывов)</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="User" size={20} className="text-primary" />
                  <span>Автор: <strong>Снежинская Ева</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Building" size={20} className="text-primary" />
                  <span>Школа: <strong>Private College</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>Формат: <strong>Видеоуроки в записи</strong></span>
                </div>
              </div>

              <div className="bg-accent/30 p-6 rounded-2xl">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-primary">БЕСПЛАТНО</span>
                  <span className="text-lg text-muted-foreground line-through">от 3 000 ₽</span>
                </div>
                <p className="text-sm text-muted-foreground">Ограниченное предложение</p>
              </div>

              <Button size="lg" className="w-full">
                Получить доступ
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/0b2c7ffa-c35f-4ceb-a5b3-9f34ef08ffdc.jpg"
                alt="Курс"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6">О курсе</h2>
              <Card>
                <CardContent className="p-8 space-y-4">
                  <p className="text-lg">
                    Этот курс создан специально для женщин, которые хотят наполнить свою интимную жизнь 
                    новыми красками и подарить своему партнеру незабываемые эмоции.
                  </p>
                  <p>
                    Вы узнаете секреты, которые помогут вам стать более раскрепощенной, уверенной в себе 
                    и желанной. Курс основан на многолетнем опыте работы с парами и включает практические 
                    техники, которые можно применять сразу же.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Что вы получите</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "Lightbulb",
                    title: "Секретные техники",
                    description: "Узнаете проверенные методы, которые работают безотказно"
                  },
                  {
                    icon: "Heart",
                    title: "Психология страсти",
                    description: "Поймете, что на самом деле возбуждает вашего мужчину"
                  },
                  {
                    icon: "Sparkles",
                    title: "Уверенность в себе",
                    description: "Избавитесь от комплексов и станете раскрепощенной"
                  },
                  {
                    icon: "Flame",
                    title: "Практические советы",
                    description: "Получите конкретные идеи для незабываемых ночей"
                  }
                ].map((item, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon name={item.icon} size={24} className="text-primary" />
                      </div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Программа курса</h2>
              <div className="space-y-4">
                {[
                  "Модуль 1: Психология мужского желания",
                  "Модуль 2: Создание правильной атмосферы",
                  "Модуль 3: Секреты обольщения",
                  "Модуль 4: Техники для незабываемых ночей",
                  "Модуль 5: Как сохранить страсть в долгих отношениях"
                ].map((module, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                          {index + 1}
                        </div>
                        <span className="font-semibold">{module}</span>
                      </div>
                      <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="bg-secondary/30 p-8 rounded-3xl">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">Начните прямо сейчас</h2>
                <p className="text-lg text-muted-foreground">
                  Получите мгновенный доступ ко всем материалам курса
                </p>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" size={50} />
                  <Input type="email" placeholder="Email" />
                  <Button size="lg" className="w-full">
                    Получить курс бесплатно
                  </Button>
                </form>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Отзывы</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Анна, 32 года",
                    text: "Этот курс буквально спас наш брак! Отношения вернулись на новый уровень."
                  },
                  {
                    name: "Мария, 28 лет",
                    text: "Очень практичные советы, которые действительно работают. Рекомендую!"
                  }
                ].map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">"{review.text}"</p>
                      <p className="font-semibold">{review.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course1;