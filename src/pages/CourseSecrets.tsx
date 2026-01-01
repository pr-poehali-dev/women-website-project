import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const CourseSecrets = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
              <Button onClick={() => navigate("/webinar")}>Вебинар</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
              <Icon name="Video" size={16} />
              БЕСПЛАТНЫЙ ВЕБИНАР • 2 ЧАСА
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Как внести в ваши отношения
              <br />
              <span className="text-red-600">дозу огня и страсти</span>
            </h1>

            <p className="text-2xl text-gray-700 font-semibold">
              3 секрета от LOVE-коуча о том, как стать единственной для него
            </p>

            <div className="flex items-baseline justify-center gap-3">
              <span className="text-4xl font-bold text-red-600">БЕСПЛАТНО</span>
              <span className="text-2xl text-gray-400 line-through">3 000 ₽</span>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-bold text-center">Знакомая ситуация?</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
              <p className="text-lg">
                Рутина затянула... Секс стал редким и скучным. Муж перестал проявлять внимание, 
                романтика исчезла из отношений.
              </p>
              <div className="bg-white p-6 rounded-2xl border-l-4 border-red-600">
                <p className="text-gray-800 italic">
                  «900 разводов на 1000 браков в России (2024 год)»
                </p>
              </div>
              <p className="text-lg">
                Многие женщины не знают, как говорить с мужчиной о сексе и своих желаниях. 
                Боятся осуждения, стесняются, не понимают, чего хочет партнер.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">На вебинаре вы узнаете</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Чего ждут мужчины</h3>
                      <p className="text-gray-600 text-sm">
                        Что на самом деле хотят мужчины, но никогда не просят напрямую
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Типичные ошибки</h3>
                      <p className="text-gray-600 text-sm">
                        Какие женские ошибки разрушают брак и как их избежать
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Авторские секреты</h3>
                      <p className="text-gray-600 text-sm">
                        3 авторских секрета для страстных и гармоничных отношений
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Путь к идеалу</h3>
                      <p className="text-gray-600 text-sm">
                        Как стать идеальной любовницей для своего мужчины
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Ваш преподаватель</h2>
                <div className="space-y-4">
                  <p className="text-2xl font-semibold">Ева Снежинская</p>
                  <p className="text-lg text-gray-700">Love-коуч • Сексолог • Терапевт</p>
                  <p className="text-gray-600">
                    5 лет опыта помощи женщинам в создании счастливых отношений. 
                    Более 500 выпускниц, 95% из которых улучшили свою личную жизнь.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600/10 rounded-full flex items-center justify-center">
                      <Icon name="Award" size={20} className="text-red-600" />
                    </div>
                    <span>Сертифицированный специалист</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600/10 rounded-full flex items-center justify-center">
                      <Icon name="Users" size={20} className="text-red-600" />
                    </div>
                    <span>500+ благодарных учениц</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600/10 rounded-full flex items-center justify-center">
                      <Icon name="Star" size={20} className="text-red-600" />
                    </div>
                    <span>Рейтинг 5.0 из 5.0</span>
                  </div>
                </div>
              </div>
              <div className="w-full aspect-square bg-gradient-to-br from-red-200 to-pink-200 rounded-3xl flex items-center justify-center">
                <Icon name="Heart" size={120} className="text-red-300" />
              </div>
            </div>
          </div>

          <div className="bg-red-600/5 p-8 rounded-3xl space-y-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Gift" size={40} className="text-red-600" />
                <h2 className="text-2xl font-bold">Бонус для участников</h2>
              </div>
              <p className="text-xl text-gray-700">
                «5 фишек, чтобы всегда быть самой желанной»
              </p>
              <p className="text-sm text-gray-600">
                Получите ценный материал при регистрации с корректными данными
              </p>
            </div>
          </div>

          <Card className="max-w-md mx-auto shadow-2xl">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center space-y-4">
                  <Icon name="CheckCircle" size={64} className="text-red-600 mx-auto" />
                  <h3 className="text-2xl font-bold">Вы записаны на вебинар!</h3>
                  <p className="text-gray-600">
                    Ссылка на вебинар отправлена на ваш email
                  </p>
                  <p className="text-sm text-gray-500">
                    Проверьте папку «Спам», если не видите письмо
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Записаться на вебинар</h3>
                    <p className="text-gray-600">Бесплатный доступ для всех участников</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Ваше имя</label>
                      <Input 
                        placeholder="Введите имя" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Телефон</label>
                      <Input 
                        type="tel" 
                        placeholder="+7 (___) ___-__-__" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 h-14 text-lg">
                    Принять участие за 3 000 ₽ БЕСПЛАТНО
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="py-8 px-4 bg-gray-900 text-white mt-16">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">© 2024 Private College. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default CourseSecrets;
