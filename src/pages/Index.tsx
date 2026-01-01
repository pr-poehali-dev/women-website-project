import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowPopup(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsSubmitted(false);
    }, 3000);
  };

  const benefits = [
    { 
      id: 1, 
      title: "3 навыка необходимых для яркой интимной жизни и крепких отношений",
      image: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/0b2c7ffa-c35f-4ceb-a5b3-9f34ef08ffdc.jpg"
    },
    { 
      id: 2, 
      title: "Разбор женских ошибок, которые рушат отношения в 90% случаев",
      image: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/9153978a-d7bb-4d55-95ae-3c8615c0da1c.jpg"
    },
    { 
      id: 3, 
      title: "Что ждет ваш мужчина, но никогда об этом не попросит",
      image: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/ff51155b-661c-4567-855b-531899242f4b.jpg"
    },
    { 
      id: 4, 
      title: "Как дать мужчине всё, о чем он мечтает, не забывая о себе",
      image: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/0252ea52-23a8-4c6f-b265-122c5253e92d.jpg"
    },
    { 
      id: 5, 
      title: "Как стать единственной и самой желанной в его глазах",
      image: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/e35db85c-2e3a-442f-8eb9-c313393109b7.jpg"
    },
    { 
      id: 6, 
      title: "Путь идеальной любовницы, который приведет вас к вершинам любовного мастерства",
      image: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/a4553f73-67ba-49d0-be40-d8c23809f5f0.jpg"
    }
  ];

  const checkItems = [
    "Вам не хватает мужского внимания и заботы",
    "Хотите разнообразить свою интимную и личную жизнь",
    "Вы хотите почувствовать себя настоящей женщиной",
    "Чувствуете холод в отношениях, банальность в постели"
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/0252ea52-23a8-4c6f-b265-122c5253e92d.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(100px)'
        }}
      />

      <div className="relative z-10">
        <nav className="py-6 px-4 border-b">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="border-2 border-[#C30000] px-4 py-2 rounded">
                <span className="font-bold text-sm" style={{ fontFamily: 'Georgia, serif' }}>PRIVATE COLLEGE</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#FF8080] rounded-full"></div>
                <span className="text-sm text-gray-600">ПРЯМОЙ ЭФИР</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={20} className="text-[#C30000]" />
                <span className="font-semibold">2.01.26</span>
              </div>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <button onClick={() => navigate('/course-1')} className="text-sm hover:text-[#C30000] transition-colors">
                Незабываемые ночи
              </button>
              <button onClick={() => navigate('/course-2')} className="text-sm hover:text-[#C30000] transition-colors">
                Огонь и страсть
              </button>
              <button onClick={() => navigate('/webinar')} className="text-sm hover:text-[#C30000] transition-colors">
                Вебинар
              </button>
            </div>
          </div>
        </nav>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="space-y-8">
                <h1 className="text-6xl md:text-7xl leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  <span className="text-[#C30000] italic font-bold">3 секрета</span> <span className="italic">от LOVE-коуча</span>
                </h1>

                <p className="text-4xl font-semibold" style={{ fontFamily: 'Cormorant, serif' }}>
                  <span className="text-[#C30000]">О ЯРКИХ</span> ЛЮБОВНЫХ ОТНОШЕНИЯХ
                </p>

                <div className="flex items-center gap-3">
                  <Icon name="Heart" size={40} className="text-[#C30000]" />
                  <Icon name="Heart" size={40} className="text-[#C30000]" />
                </div>

                <p className="text-xl leading-relaxed" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Как стать единственной для своего мужчины, укрепить отношения, разжечь искру и пробудить страсть, которая не будет угасать десятилетиями
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-lg" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                      Цена участия <span className="line-through text-gray-400">3000руб</span>:
                    </span>
                    <span className="text-2xl font-bold text-[#C30000]">БЕСПЛАТНО</span>
                  </div>

                  <div className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full">
                    <Icon name="Flame" size={24} className="text-yellow-400" />
                    <div className="text-center">
                      <div className="flex gap-2 text-2xl font-bold">
                        <span>0</span>
                        <span>:</span>
                        <span>0</span>
                      </div>
                      <div className="text-xs flex gap-2">
                        <span>часа(ов)</span>
                        <span>секунд(ы)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => handleTimeSelect("12:00")}
                    className="w-full h-16 text-2xl bg-gradient-to-r from-[#C30000] to-[#E62424] hover:from-[#901010] hover:to-[#901010] text-white font-semibold transition-all duration-300 group relative"
                    style={{ borderRadius: '90px', fontFamily: 'Cormorant, serif' }}
                  >
                    <span>12:00 МСК</span>
                    <Icon name="ArrowRight" size={24} className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </button>

                  <button
                    onClick={() => handleTimeSelect("17:00")}
                    className="w-full h-16 text-2xl bg-gradient-to-r from-[#C30000] to-[#E62424] hover:from-[#901010] hover:to-[#901010] text-white font-semibold transition-all duration-300 group relative"
                    style={{ borderRadius: '90px', fontFamily: 'Cormorant, serif' }}
                  >
                    <span>17:00 МСК</span>
                    <Icon name="ArrowRight" size={24} className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </button>
                </div>

                <p className="text-center text-sm italic" style={{ fontFamily: 'Georgia, serif' }}>
                  Выберите удобное время и получите подарок
                </p>
              </div>

              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/5a3fd0ed-7f01-4e05-99a8-43ea855fdb67.jpg"
                  alt="Eva"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-xl max-w-xs">
                  <img
                    src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/8e029e53-faf9-4df9-8a1d-728903ba71b5.jpg"
                    alt="Bonus"
                    className="rounded-xl mb-3"
                  />
                  <p className="font-bold text-lg mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    5 фишек
                  </p>
                  <p className="text-sm">чтобы всегда быть самой желанной</p>
                  <p className="text-xs text-gray-500 mt-2 italic">Успейте получить бонус</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl text-center mb-16" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Всего <span className="text-[#C30000]">за 2 часа</span> вы получите
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="relative group">
                  <div className="overflow-hidden rounded-3xl mb-4 h-64">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C30000] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                      {benefit.id}
                    </div>
                    <p className="text-lg leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                      {benefit.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-4xl leading-relaxed" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Этот эфир станет <span className="text-[#C30000]">нашим маленьким секретом</span>. А хранить его буду я
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-5xl" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Ева Снежинская
                </h2>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#C30000] rounded-full"></div>
                    <span className="text-lg">Сертифицированный love-коуч</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#C30000] rounded-full"></div>
                    <span className="text-lg">Сексолог</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#C30000] rounded-full"></div>
                    <span className="text-lg">Автор топовых курсов для взрослых</span>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  <span className="text-[#C30000] font-semibold">В 35 лет полностью изменила свою жизнь</span>, образа и встретила любимого мужчину. С тех пор их пара переживает непрекращающийся медовый месяц
                </p>

                <p className="text-xl text-[#C30000] italic" style={{ fontFamily: 'Georgia, serif' }}>
                  Хотите, чтобы ваша история была не менее яркой — выбирайте удобное время и жмите на кнопку ниже
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleTimeSelect("12:00")}
                    className="flex-1 h-14 text-xl bg-gradient-to-r from-[#C30000] to-[#E62424] hover:from-[#901010] hover:to-[#901010] text-white font-semibold transition-all"
                    style={{ borderRadius: '90px', fontFamily: 'Cormorant, serif' }}
                  >
                    12:00 МСК
                  </button>
                  <button
                    onClick={() => handleTimeSelect("17:00")}
                    className="flex-1 h-14 text-xl bg-gradient-to-r from-[#C30000] to-[#E62424] hover:from-[#901010] hover:to-[#901010] text-white font-semibold transition-all"
                    style={{ borderRadius: '90px', fontFamily: 'Cormorant, serif' }}
                  >
                    17:00 МСК
                  </button>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/a4553f73-67ba-49d0-be40-d8c23809f5f0.jpg"
                  alt="Ева Снежинская"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-5xl text-center mb-8" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Эфир будет полезным, если из следующих пунктов у вас хотя бы одно <span className="text-[#C30000]">ДА</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                {checkItems.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 bg-[#C30000] rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={24} className="text-white" />
                    </div>
                    <p className="text-lg pt-2">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/8e029e53-faf9-4df9-8a1d-728903ba71b5.jpg"
                  alt="Couple"
                  className="rounded-3xl shadow-xl max-w-sm"
                />
              </div>

              <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                {checkItems.slice(2).map((item, index) => (
                  <div key={index + 2} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 bg-[#C30000] rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={24} className="text-white" />
                    </div>
                    <p className="text-lg pt-2">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center space-y-6">
              <p className="text-3xl" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Этот эфир уже посмотрели более 2.000.000 учениц из 84 стран. <span className="text-[#C30000]">Мои программы изменили жизнь более 60.000 женщин</span>
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-100">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-5xl" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Посмотрите их отзывы, совсем скоро вы можете пополнить эту статистику
            </h2>

            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <p className="text-lg leading-relaxed mb-4">
                После того как стала использовать ваши техники, наши отношения изменились! Дома почти всегда цветы, приятные мелочи, а я просто купаюсь в комплиментах 🥰
              </p>
              <p className="text-sm text-gray-600">
                Ева, спасибо вам! С нетерпением жду каждый ваш вебинар!
              </p>
            </div>

            <div className="flex justify-center gap-2">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#C30000]' : 'bg-gray-300'}`}></div>
              ))}
            </div>

            <p className="text-2xl mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Выбирайте удобное время и присоединяйтесь к нам
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleTimeSelect("12:00")}
                className="px-12 h-14 text-xl bg-gradient-to-r from-[#C30000] to-[#E62424] hover:from-[#901010] hover:to-[#901010] text-white font-semibold transition-all"
                style={{ borderRadius: '90px', fontFamily: 'Cormorant, serif' }}
              >
                12:00 МСК
              </button>
              <button
                onClick={() => handleTimeSelect("17:00")}
                className="px-12 h-14 text-xl bg-gradient-to-r from-[#C30000] to-[#E62424] hover:from-[#901010] hover:to-[#901010] text-white font-semibold transition-all"
                style={{ borderRadius: '90px', fontFamily: 'Cormorant, serif' }}
              >
                17:00 МСК
              </button>
            </div>
          </div>
        </section>

        <footer className="py-12 px-4 bg-[#1a2332] text-white">
          <div className="container mx-auto max-w-4xl text-center space-y-4">
            <p className="text-sm">ИП Минятюк Алёна Геннадьевна</p>
            <p className="text-sm">ОГРН 321435000047548</p>
            <p className="text-sm">Лицензия № Л035-01282-43/01583516 от 03.12.2024</p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
              <a href="#" className="hover:text-white">Согласие на обработку персональных данных</a>
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Согласие на получение рекламных рассылок</a>
            </div>
          </div>
        </footer>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowPopup(false)}>
          <Card className="max-w-lg w-full animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center space-y-6">
                  <Icon name="CheckCircle" size={64} className="text-[#C30000] mx-auto" />
                  <h3 className="text-3xl font-bold" style={{ fontFamily: 'Cormorant, serif' }}>
                    Вы зарегистрированы!
                  </h3>
                  <p className="text-lg text-gray-600">
                    Мы отправили вам письмо со ссылкой на вебинар
                  </p>
                  <p className="text-xl text-[#C30000] font-semibold" style={{ fontFamily: 'Cormorant, serif' }}>
                    Время: {selectedTime} МСК
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <button 
                    onClick={() => setShowPopup(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  >
                    <Icon name="X" size={24} />
                  </button>
                  
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                      Регистрация на вебинар
                    </h3>
                    <p className="text-xl text-[#C30000] font-semibold" style={{ fontFamily: 'Cormorant, serif' }}>
                      {selectedTime} МСК
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Ваше имя</label>
                      <Input 
                        placeholder="Введите имя" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="h-12 text-lg"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Телефон</label>
                      <Input 
                        type="tel"
                        placeholder="+7 (___) ___-__-__" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="h-12 text-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Email</label>
                      <Input 
                        type="email"
                        placeholder="your@email.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="h-12 text-lg"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-14 text-xl bg-gradient-to-r from-[#C30000] to-[#E62424] hover:from-[#901010] hover:to-[#901010] text-white font-semibold transition-all duration-300"
                      style={{ borderRadius: '90px', fontFamily: 'Cormorant, serif' }}
                    >
                      Зарегистрироваться
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;
