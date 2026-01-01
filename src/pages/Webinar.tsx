import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Webinar = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate("/")} className="flex items-center gap-3 hover:opacity-80">
              <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xl">PC</div>
              <div className="font-bold text-lg">PRIVATE COLLEGE</div>
            </button>
            <div className="flex gap-4">
              <Button variant="ghost" onClick={() => navigate("/")}>Главная</Button>
              <Button onClick={() => navigate("/course-passion")}>Другие курсы</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-600 px-4 py-2 rounded-full animate-pulse">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">ПРЯМОЙ ЭФИР</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <Icon name="Calendar" size={16} />
            <span className="text-sm font-semibold">2.01.26</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-red-600">3 секрета</span> от LOVE-коуча
          </h1>

          <p className="text-2xl text-gray-700 font-semibold">
            О ЯРКИХ ЛЮБОВНЫХ ОТНОШЕНИЯХ
          </p>

          <div className="bg-red-50 p-6 rounded-2xl">
            <p className="text-lg text-gray-800">
              Как стать единственной для своего мужчины, укрепить отношения, разжечь искру и пробудить страсть, которая не будет угасать десятилетиями
            </p>
          </div>

          <div className="relative py-8">
            <div className="w-full aspect-video bg-gradient-to-br from-red-100 via-pink-100 to-red-50 rounded-3xl shadow-2xl flex items-center justify-center">
              <Icon name="Heart" size={120} className="text-red-300 opacity-50" />
            </div>
          </div>

          {!showForm ? (
            <div className="space-y-6">
              <p className="text-2xl font-bold">Выберите удобное время и получите подарок</p>
              
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Button
                  size="lg"
                  className="h-20 text-xl bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700"
                  onClick={() => handleTimeSelect("12:00")}
                >
                  <Icon name="Clock" size={28} className="mr-3" />
                  12:00 МСК
                </Button>
                <Button
                  size="lg"
                  className="h-20 text-xl bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700"
                  onClick={() => handleTimeSelect("17:00")}
                >
                  <Icon name="Clock" size={28} className="mr-3" />
                  17:00 МСК
                </Button>
              </div>

              <div className="bg-red-600/10 p-8 rounded-2xl max-w-2xl mx-auto">
                <div className="flex items-center gap-4 mb-4 justify-center">
                  <Icon name="Gift" size={40} className="text-red-600" />
                  <p className="text-2xl font-bold">Успейте получить бонус</p>
                </div>
                <p className="text-lg text-gray-700">
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
                    <p className="text-gray-600">Время: {selectedTime} МСК</p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center space-y-4">
                      <Icon name="CheckCircle" size={64} className="text-red-600 mx-auto" />
                      <h4 className="text-xl font-bold">Вы зарегистрированы!</h4>
                      <p className="text-gray-600">
                        Мы отправили вам письмо с ссылкой на вебинар
                      </p>
                      <p className="text-sm text-gray-500">
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

                      <Button type="submit" className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700" size="lg">
                        Зарегистрироваться
                        <Icon name="ArrowRight" size={20} className="ml-2" />
                      </Button>
                    </form>
                  )}

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="pt-16 space-y-8">
            <h2 className="text-3xl font-bold">Что вы узнаете на вебинаре</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-left hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center">
                    <Icon name="Heart" size={28} className="text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg">Секреты страсти</h3>
                  <p className="text-gray-600 text-sm">
                    Как вернуть огонь в отношения и стать незабываемой
                  </p>
                </CardContent>
              </Card>

              <Card className="text-left hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center">
                    <Icon name="Users" size={28} className="text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg">Психология мужчин</h3>
                  <p className="text-gray-600 text-sm">
                    Что на самом деле хотят мужчины, но не говорят об этом
                  </p>
                </CardContent>
              </Card>

              <Card className="text-left hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center">
                    <Icon name="Sparkles" size={28} className="text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg">Типичные ошибки</h3>
                  <p className="text-gray-600 text-sm">
                    Разбор распространенных женских ошибок в отношениях
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">© 2024 Private College. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Webinar;
