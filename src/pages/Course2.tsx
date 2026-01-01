import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Course2 = () => {
  const navigate = useNavigate();
  const [showStory, setShowStory] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      <nav className="py-4 px-4 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <button onClick={() => navigate("/")} className="text-xl font-bold text-primary">
            Female College
          </button>
          <div className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate("/webinar")}>Вебинар</Button>
            <Button onClick={() => navigate("/course-1")}>Курсы</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold">
              <Icon name="Zap" size={16} />
              Бесплатный онлайн-урок
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Как за 2 часа внести в ваши отношения дозу огня и страсти
            </h1>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Icon name="User" size={20} className="text-primary" />
                <span className="font-semibold">Ева Снежинская</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-2">
                <Icon name="Briefcase" size={20} className="text-primary" />
                <span>Love-коуч, сексолог</span>
              </div>
            </div>

            <div className="bg-accent/30 p-6 rounded-2xl max-w-2xl mx-auto">
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-4xl font-bold text-primary">БЕСПЛАТНО</span>
                <span className="text-xl text-muted-foreground line-through">3 000 ₽</span>
              </div>
              <p className="text-sm text-muted-foreground">Только для первых 200 участниц</p>
            </div>
          </div>

          {!showStory ? (
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/10">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Icon name="AlertCircle" size={32} className="text-primary flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Это для вас, если:</h2>
                      <ul className="space-y-3">
                        {[
                          "В отношениях нет былой страсти и романтики",
                          "Муж перестал уделять вам внимание",
                          "Интимная жизнь стала рутиной",
                          "Вы боитесь потерять любимого человека",
                          "Хотите стать единственной и неповторимой для него"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button
                  size="lg"
                  className="text-lg px-8"
                  onClick={() => setShowStory(true)}
                >
                  Узнать подробнее
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold">История Лены</h2>
                  
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-lg">
                      Лена проснулась в 6 утра от будильника мужа. Он быстро собрался и ушёл на работу, 
                      даже не поцеловав её на прощание...
                    </p>
                    
                    <p>
                      Уже несколько месяцев она чувствовала, что в их отношениях что-то не так. 
                      Романтика ушла, страсть остыла. Муж стал холоден и отстранён.
                    </p>

                    <div className="bg-destructive/10 p-6 rounded-xl my-6">
                      <p className="font-semibold text-lg text-center">
                        Нет секса. Нет внимания. Нет романтики. Нет общения.
                      </p>
                    </div>

                    <p>
                      Лена начала подозревать, что у мужа может быть кто-то другой. 
                      Она чувствовала себя ненужной и непривлекательной.
                    </p>

                    <p className="text-lg font-semibold text-primary">
                      Знакомо? Вы не одна. И решение есть!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold">На онлайн-уроке вы узнаете:</h2>
                  
                  <div className="space-y-4">
                    {[
                      {
                        icon: "Heart",
                        title: "3 секрета ярких интимных отношений",
                        description: "Проверенные техники для возвращения страсти"
                      },
                      {
                        icon: "Users",
                        title: "Что на самом деле хотят мужчины",
                        description: "То, о чём они никогда не попросят напрямую"
                      },
                      {
                        icon: "AlertTriangle",
                        title: "5 типичных женских ошибок",
                        description: "Которые разрушают даже крепкие браки"
                      },
                      {
                        icon: "Sparkles",
                        title: "Как стать идеальной любовницей",
                        description: "Путь к тому, чтобы стать единственной для него"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-background rounded-xl">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name={item.icon} size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Icon name="Gift" size={20} />
                    <span className="font-semibold">Бонус для участниц</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold">
                    5 фишек, чтобы всегда быть самой желанной
                  </h3>
                  
                  <p className="text-primary-foreground/90">
                    Эксклюзивная методичка в подарок при регистрации
                  </p>
                </CardContent>
              </Card>

              <div className="bg-secondary/30 p-8 rounded-3xl">
                <div className="max-w-2xl mx-auto space-y-6">
                  <h2 className="text-3xl font-bold text-center">Записаться на урок</h2>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Ваше имя</label>
                      <Input placeholder="Введите имя" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Телефон</label>
                      <Input type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <Button size="lg" className="w-full">
                      Принять участие
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground text-center">
                    Осталось мест: <strong>47 из 200</strong>
                  </p>
                </div>
              </div>
            </div>
          )}

          <section>
            <h2 className="text-3xl font-bold mb-6 text-center">Ваш эксперт</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-1">
                    <img
                      src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/a4553f73-67ba-49d0-be40-d8c23809f5f0.jpg"
                      alt="Ева Снежинская"
                      className="rounded-2xl w-full"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <h3 className="text-2xl font-bold">Ева Снежинская</h3>
                    <p className="text-primary font-semibold">Love-коуч, сексолог, основатель Private College</p>
                    <ul className="space-y-2">
                      {[
                        "Более 5 лет практики в сфере отношений",
                        "Помогла более 500 парам вернуть страсть",
                        "Автор методики «Анатомия любви»",
                        "Эксперт по женской сексуальности"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Course2;
