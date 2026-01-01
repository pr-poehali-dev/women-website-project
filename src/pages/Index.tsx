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



  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/0252ea52-23a8-4c6f-b265-122c5253e92d.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(80px)'
        }}
      />

      <div className="relative z-10">
        <nav className="py-6 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Private College" className="h-12" />
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
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-3 h-3 bg-[#C30000] rounded-full animate-pulse"></div>
              <div className="w-px h-8 bg-[#C30000]"></div>
              <span className="text-sm font-semibold text-[#C30000] uppercase tracking-wide">ПРЯМОЙ ЭФИР</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="text-[#C30000]">3 секрета</span> от LOVE-коуча
            </h1>

            <p className="text-4xl md:text-5xl font-semibold mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
              <span className="text-[#C30000]">О ЯРКИХ</span> ЛЮБОВНЫХ ОТНОШЕНИЯХ
            </p>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-2xl md:text-3xl leading-relaxed" style={{ fontFamily: 'Georgia, serif', color: '#050B10' }}>
                Как стать единственной для своего мужчины, укрепить отношения, разжечь искру и пробудить страсть, которая не будет угасать десятилетиями
              </p>
            </div>

            <div className="relative mb-16">
              <img
                src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/9153978a-d7bb-4d55-95ae-3c8615c0da1c.jpg"
                alt="Романтика"
                className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl"
              />
            </div>

            <div className="space-y-10">
              <p className="text-2xl md:text-3xl" style={{ fontFamily: 'Cormorant, serif' }}>
                Выберите удобное время и <strong>получите подарок</strong>
              </p>
              
              <div className="flex flex-col gap-5 max-w-md mx-auto">
                <button
                  onClick={() => handleTimeSelect("12:00")}
                  className="h-16 text-2xl bg-gradient-to-r from-[#C30000] to-[#E62424] hover:from-[#901010] hover:to-[#901010] text-white font-semibold transition-all duration-300 group relative overflow-hidden"
                  style={{ 
                    borderRadius: '90px',
                    fontFamily: 'Cormorant, serif'
                  }}
                >
                  <span className="relative z-10">12:00 МСК</span>
                  <Icon name="ArrowRight" size={24} className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                </button>
                
                <button
                  onClick={() => handleTimeSelect("17:00")}
                  className="h-16 text-2xl bg-gradient-to-r from-[#C30000] to-[#E62424] hover:from-[#901010] hover:to-[#901010] text-white font-semibold transition-all duration-300 group relative overflow-hidden"
                  style={{ 
                    borderRadius: '90px',
                    fontFamily: 'Cormorant, serif'
                  }}
                >
                  <span className="relative z-10">17:00 МСК</span>
                  <Icon name="ArrowRight" size={24} className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                </button>
              </div>

              <div className="bg-gradient-to-b from-pink-50 to-white p-10 rounded-3xl max-w-2xl mx-auto border border-pink-100">
                <div className="flex items-center gap-4 justify-center mb-4">
                  <Icon name="Gift" size={40} className="text-[#C30000]" />
                  <p className="text-2xl font-bold" style={{ fontFamily: 'Cormorant, serif' }}>
                    Успейте получить бонус
                  </p>
                </div>
                <p className="text-xl" style={{ fontFamily: 'Georgia, serif', color: '#2B2B2B' }}>
                  «5 фишек, чтобы всегда быть самой желанной»
                </p>
              </div>
            </div>

          </div>
        </div>
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
                      style={{ 
                        borderRadius: '90px',
                        fontFamily: 'Cormorant, serif'
                      }}
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