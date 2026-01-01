import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import Layout from "@/components/Layout";

const Webinar = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-background to-secondary/20">

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full animate-pulse">
            <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">ПРЯМОЙ ЭФИР</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            3 секрета от LOVE-коуча
          </h1>

          <p className="text-2xl md:text-3xl text-primary font-semibold">
            О ЯРКИХ ЛЮБОВНЫХ ОТНОШЕНИЯХ
          </p>

          <div className="bg-accent/30 p-6 rounded-2xl">
            <p className="text-lg text-foreground">
              Как стать единственной для своего мужчины, укрепить отношения и сохранить страсть
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
            <div className="space-y-6">
              <p className="text-xl font-semibold">Выберите удобное время и получите подарок</p>
              
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Button
                  size="lg"
                  className="h-16 text-lg bg-gradient-to-r from-destructive to-destructive/80 hover:from-destructive/90 hover:to-destructive/70"
                  onClick={() => handleTimeSelect("12:00")}
                >
                  <Icon name="Clock" size={24} className="mr-2" />
                  12:00 МСК
                </Button>
                <Button
                  size="lg"
                  className="h-16 text-lg bg-gradient-to-r from-destructive to-destructive/80 hover:from-destructive/90 hover:to-destructive/70"
                  onClick={() => handleTimeSelect("17:00")}
                >
                  <Icon name="Clock" size={24} className="mr-2" />
                  17:00 МСК
                </Button>
              </div>

              <div className="bg-primary/10 p-6 rounded-2xl max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Gift" size={32} className="text-primary" />
                  <p className="text-lg font-bold">Успейте получить бонус</p>
                </div>
                <p className="text-muted-foreground">
                  «5 фишек, чтобы всегда быть самой желанной»
                </p>
              </div>
            </div>
          ) : (
            <Card className="max-w-md mx-auto animate-fade-in">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Регистрация на вебинар</h3>
                    <p className="text-muted-foreground">Время: {selectedTime} МСК</p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center space-y-4">
                      <Icon name="CheckCircle" size={64} className="text-primary mx-auto" />
                      <h4 className="text-xl font-bold">Вы зарегистрированы!</h4>
                      <p className="text-muted-foreground">
                        Мы отправили вам письмо с ссылкой на вебинар
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Время: {selectedTime} МСК
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold">Ваше имя</label>
                        <Input 
                          placeholder="Введите имя" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold">Email</label>
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold">Телефон</label>
                        <Input 
                          type="tel" 
                          placeholder="+7 (___) ___-__-__" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Зарегистрироваться
                        <Icon name="ArrowRight" size={20} className="ml-2" />
                      </Button>
                    </form>
                  )}

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="pt-12 space-y-6">
            <h2 className="text-3xl font-bold">Что вы узнаете на вебинаре</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-left hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Секреты страсти</h3>
                  <p className="text-muted-foreground text-sm">
                    Как вернуть огонь в отношения и стать незабываемой
                  </p>
                </CardContent>
              </Card>

              <Card className="text-left hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Психология мужчин</h3>
                  <p className="text-muted-foreground text-sm">
                    Что на самом деле хотят мужчины, но не говорят об этом
                  </p>
                </CardContent>
              </Card>

              <Card className="text-left hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Sparkles" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Типичные ошибки</h3>
                  <p className="text-muted-foreground text-sm">
                    Разбор распространенных женских ошибок в отношениях
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Webinar;