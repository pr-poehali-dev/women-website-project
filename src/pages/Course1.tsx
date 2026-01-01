import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Course1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

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

              <Button 
                size="lg" 
                className="w-full"
                onClick={() => {
                  document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
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
            <section className="bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 p-8 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6 text-center">Узнайте секреты, о которых мужчины молчат</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Lock" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Что на самом деле заводит мужчину</h3>
                        <p className="text-muted-foreground">Секретные желания, о которых он никогда не расскажет первым, но которые полностью изменят ваши отношения</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Flame" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Как создать атмосферу страсти</h3>
                        <p className="text-muted-foreground">От подготовки пространства до правильных слов — всё, что превратит обычный вечер в незабываемую ночь</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Sparkles" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Техники, проверенные временем</h3>
                        <p className="text-muted-foreground">Практические методы от сексолога с 15-летним опытом, которые работают в 99% случаев</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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

            <section id="registration-form" className="bg-secondary/30 p-8 rounded-3xl">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">Начните прямо сейчас</h2>
                <p className="text-lg text-muted-foreground">
                  Получите мгновенный доступ ко всем материалам курса
                </p>
                {isSubmitted ? (
                  <div className="bg-primary/10 p-6 rounded-xl">
                    <Icon name="CheckCircle" size={48} className="text-primary mx-auto mb-3" />
                    <p className="text-lg font-semibold">Спасибо за регистрацию!</p>
                    <p className="text-muted-foreground mt-2">Мы отправили вам письмо с доступом к курсу</p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    <Button type="submit" size="lg" className="w-full">
                      Получить курс бесплатно
                    </Button>
                  </form>
                )}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-center">Этот курс для вас, если:</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: "HeartCrack",
                    title: "Страсть остыла",
                    description: "В отношениях нет былой романтики, интимная жизнь стала рутиной"
                  },
                  {
                    icon: "UserX",
                    title: "Нет внимания",
                    description: "Муж перестал уделять вам время, замечать и ценить"
                  },
                  {
                    icon: "AlertCircle",
                    title: "Страх потерять",
                    description: "Боитесь, что он найдёт кого-то другого или уходит"
                  }
                ].map((item, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow bg-gradient-to-br from-primary/5 to-secondary/10">
                    <CardContent className="p-6 space-y-3 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Icon name={item.icon} size={32} className="text-primary" />
                      </div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Отзывы</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Елена, 35 лет",
                    city: "Москва",
                    text: "После 10 лет брака казалось, что всё потеряно. Курс помог вернуть не только страсть, но и уважение друг к другу!"
                  },
                  {
                    name: "Анна, 28 лет",
                    city: "Санкт-Петербург",
                    text: "Я была очень зажатой и комплексовала. Теперь чувствую себя женщиной, а муж буквально счастлив!"
                  },
                  {
                    name: "Мария, 42 года",
                    city: "Краснодар",
                    text: "Думала, в моём возрасте уже поздно что-то менять. Ошибалась! Мы с мужем как будто заново влюбились."
                  }
                ].map((review, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">"{review.text}"</p>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.city}</p>
                      </div>
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