import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const benefits = [
    {
      icon: "Heart",
      title: "Секреты страсти",
      description: "Узнаете проверенные техники для ярких отношений"
    },
    {
      icon: "Users",
      title: "Психология мужчин",
      description: "Поймете, что на самом деле хотят мужчины"
    },
    {
      icon: "AlertTriangle",
      title: "Типичные ошибки",
      description: "Узнаете 5 ошибок, которые разрушают отношения"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <nav className="py-4 px-4 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Private College" className="h-10" />
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => navigate('/course-1')} className="text-sm hover:text-primary transition-colors">
              Незабываемые ночи
            </button>
            <button onClick={() => navigate('/course-2')} className="text-sm hover:text-primary transition-colors">
              Огонь и страсть
            </button>
            <button onClick={() => navigate('/webinar')} className="text-sm hover:text-primary transition-colors">
              Вебинар
            </button>
          </div>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full animate-pulse">
            <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">ПРЯМОЙ ЭФИР</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            3 секрета от LOVE-коуча
          </h1>

          <p className="text-3xl md:text-4xl text-primary font-semibold uppercase">
            О ярких любовных отношениях
          </p>

          <div className="bg-accent/40 p-8 rounded-3xl max-w-2xl mx-auto">
            <p className="text-xl text-foreground font-medium">
              Как стать единственной для своего мужчины, укрепить отношения, разжечь искру и пробудить страсть, которая не будет угасать десятилетиями
            </p>
          </div>

          <div className="relative py-8">
            <img
              src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/9153978a-d7bb-4d55-95ae-3c8615c0da1c.jpg"
              alt="Романтика"
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl"
            />
          </div>

          {!showForm ? (
            <div className="space-y-8">
              <p className="text-2xl font-semibold">Выберите удобное время и получите подарок</p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Button
                  size="lg"
                  className="h-20 text-xl bg-gradient-to-r from-[#C30000] to-[#E62424] hover:from-[#A00000] hover:to-[#C30000] text-white font-bold"
                  onClick={() => handleTimeSelect("12:00")}
                >
                  <Icon name="Clock" size={28} className="mr-3" />
                  12:00 МСК
                </Button>
                <Button
                  size="lg"
                  className="h-20 text-xl bg-gradient-to-r from-[#C30000] to-[#E62424] hover:from-[#A00000] hover:to-[#C30000] text-white font-bold"
                  onClick={() => handleTimeSelect("17:00")}
                >
                  <Icon name="Clock" size={28} className="mr-3" />
                  17:00 МСК
                </Button>
              </div>

              <div className="bg-primary/10 p-8 rounded-3xl max-w-2xl mx-auto">
                <div className="flex items-center gap-4 justify-center mb-4">
                  <Icon name="Gift" size={40} className="text-primary" />
                  <p className="text-2xl font-bold">Успейте получить бонус</p>
                </div>
                <p className="text-lg text-muted-foreground">
                  «5 фишек, чтобы всегда быть самой желанной»
                </p>
              </div>
            </div>
          ) : (
            <Card id="registration" className="max-w-lg mx-auto animate-fade-in">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-3">Регистрация</h3>
                    <p className="text-xl text-primary font-semibold">Время: {selectedTime} МСК</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg">Оставьте свои контакты, и мы пришлем вам ссылку на вебинар + бонус!</p>
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-[#C30000] to-[#E62424] hover:from-[#A00000] hover:to-[#C30000] text-white font-bold text-lg h-14"
                      onClick={() => alert('Функция отправки формы будет добавлена позже')}
                    >
                      Зарегистрироваться
                      <Icon name="ArrowRight" size={24} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="pt-16 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Что вы узнаете на вебинаре</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((item, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-4 text-left">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon name={item.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-2xl">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="pt-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Другие программы</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card 
                className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => navigate('/course-1')}
              >
                <div className="relative overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/0b2c7ffa-c35f-4ceb-a5b3-9f34ef08ffdc.jpg"
                    alt="Незабываемые ночи любви"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Незабываемые ночи любви</h3>
                  <p className="text-muted-foreground mb-4">Видеокурс о секретах создания страсти в отношениях</p>
                  <Button variant="link" className="p-0 text-primary">
                    Узнать подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card 
                className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => navigate('/course-2')}
              >
                <div className="relative overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/9153978a-d7bb-4d55-95ae-3c8615c0da1c.jpg"
                    alt="Огонь и страсть за 2 часа"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Огонь и страсть за 2 часа</h3>
                  <p className="text-muted-foreground mb-4">Бесплатный онлайн-урок о ярких отношениях</p>
                  <Button variant="link" className="p-0 text-primary">
                    Узнать подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;