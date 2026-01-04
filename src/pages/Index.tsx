import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "3 секрета от LOVE-коуча",
      subtitle: "ДЛЯ ТЕХ, КТО ХОЧЕТ БЫТЬ В ЦЕНТРЕ ВНИМАНИЯ",
      description: "Вам не хватает внимания и страсти? Узнайте, как стать желанной каждый день, чтобы он думал только о вас",
      pain: "Чувствую себя незаметной",
      badge: "ПРЯМОЙ ЭФИР",
      times: ["12:00 МСК", "17:00 МСК"],
      bonus: "«5 фишек, чтобы всегда быть самой желанной»",
      link: "https://femalecollege.site/vlm/eva/anatomia/land1?gcpc=fe762&utm_source=salid&utm_medium=offer15658&utm_campaign=wm182581&utm_term=156581825811767277090&utm_content=salid&erid=2VtzqvCsfD4",
      color: "bg-red-600",
      image: "https://cdn.poehali.dev/files/yurii2190_add_more_passion_--ar_34_--sref_httpss.mj.runcwlcl7_daa21c91-7f86-4f29-8f91-5a88044ff303_3.png"
    },
    {
      id: 2,
      title: "Как за 2 часа зарядить⚡ свои отношения",
      subtitle: "КОГДА ЧУВСТВУЕТЕ, ЧТО ОГОНЬ УГАСАЕТ",
      description: "Отношения стали скучными и предсказуемыми? Верните яркость и страсть без манипуляций и игр",
      pain: "Боюсь потерять то, что есть",
      badge: "БЕСПЛАТНЫЙ УРОК",
      price: "БЕСПЛАТНО",
      oldPrice: "3 000 ₽",
      bonus: "«5 фишек, чтобы всегда быть самой желанной»",
      link: "https://femalecollege.site/vlm/eva/anatomia/longreed2?gcpc=fe762&utm_source=salid&utm_medium=offer15658&utm_campaign=wm182581&utm_term=156581825811767277103&utm_content=salid&erid=2VtzqvSDYkA",
      color: "bg-gradient-to-r from-red-700 to-red-600",
      image: "https://cdn.poehali.dev/files/yurii2190_Create_an_image_of_a_beautiful_woman_35-40_years_old__8c99a742-e1a5-4cb9-b11e-8a5ef6df813c.png"
    },
    {
      id: 3,
      title: "Как стать единственной для него",
      subtitle: "ЧТОБЫ ОН НИКОГДА НЕ СМОТРЕЛ НА ДРУГИХ",
      description: "Переживаете, что можете быть не той самой? Узнайте секреты, как стать незаменимой и особенной",
      pain: "Боюсь, что меня заменят",
      badge: "ВЕБИНАР 2 ЧАСА",
      price: "БЕСПЛАТНО",
      oldPrice: "3 000 ₽",
      bonus: "«5 фишек, чтобы всегда быть самой желанной»",
      link: "https://femalecollege.site/vlm/eva/anatomia/longreed1?gcpc=fe762&utm_source=salid&utm_medium=offer15658&utm_campaign=wm182581&utm_term=156581825811767277094&utm_content=salid&erid=2VtzqvHKd46",
      color: "bg-gradient-to-r from-red-700 to-red-600",
      image: "https://cdn.poehali.dev/files/yurii2190_they_should_look_at_each_other_with_admiration_e1e08ffd-7672-4b1b-b6dc-fee389dc3f37_3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/20 to-white">
      <nav className="bg-white border-b sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xl">PC</div>
              <div>
                <div className="font-bold text-lg">PRIVATE COLLEGE</div>
                <div className="text-xs text-gray-600">Школа любовного мастерства</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#courses" className="text-sm hover:text-red-600 transition-colors">Курсы</a>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">Консультация</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative px-4 overflow-hidden min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/1faa0806-7736-4885-8dbf-683a43b029a4.jpg" 
            alt="Романтика на закате"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/50"></div>
        </div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Icon name="Heart" size={16} />
            Онлайн-школа для женщин
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-2xl">Курсы любовного мастерства</h1>
          <p className="text-xl mb-8 font-medium drop-shadow-lg text-red-500">Станьте единственной и самой желанной для своего мужчины</p>
        </div>
      </section>

      <section id="courses" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Выберите свой курс</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-2xl transition-all cursor-pointer overflow-hidden" onClick={() => window.open(course.link, '_blank')}>
                <div className="relative h-64 bg-gradient-to-br from-red-100 via-pink-100 to-red-50">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-white/20"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`inline-flex items-center gap-2 ${course.color} text-white px-3 py-1 rounded-full text-xs font-semibold ${course.badge === "ПРЯМОЙ ЭФИР" ? "animate-pulse" : ""}`}>
                      {course.badge === "ПРЯМОЙ ЭФИР" && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                      {course.badge}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{course.title}</h3>
                    <p className="text-sm text-red-600 font-semibold mb-2">{course.subtitle}</p>
                    <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                    {course.pain && (
                      <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs">
                        <Icon name="Heart" size={12} />
                        {course.pain}
                      </div>
                    )}
                  </div>
                  {course.times && (
                    <div className="flex gap-2">
                      {course.times.map((time, idx) => (
                        <div key={idx} className="flex-1 bg-red-50 px-3 py-2 rounded-lg text-center">
                          <Icon name="Clock" size={16} className="inline mr-1 text-red-600" />
                          <span className="text-sm font-semibold">{time}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {course.price && (
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-red-600">{course.price}</span>
                      <span className="text-lg text-gray-400 line-through">{course.oldPrice}</span>
                    </div>
                  )}
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Icon name="Gift" size={20} className="text-red-600 mt-0.5" />
                      <div className="text-xs text-gray-700">
                        <span className="font-semibold">Бонус: </span>{course.bonus}
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(course.link, '_blank');
                    }}
                  >
                    Ознакомиться <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-white to-red-50/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы наших учениц</h2>
          <p className="text-center text-gray-600 mb-12">Истории женщин, которые изменили свои отношения</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Анна, 32 года",
                text: "После курса я поняла, как важно быть собой. Муж снова дарит цветы и говорит комплименты, как в начале отношений. Спасибо за эти знания!",
                rating: 5,
                photo: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/ed3266a7-4367-458e-a7b3-7ca38eb79c8a.jpg"
              },
              {
                name: "Мария, 28 лет",
                text: "Мы были на грани расставания. Курс помог мне увидеть свои ошибки и научил правильно выстраивать общение. Сейчас мы счастливы как никогда!",
                rating: 5,
                photo: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/ee96f22a-3295-4812-9ec2-e2667d825139.jpg"
              },
              {
                name: "Елена, 35 лет",
                text: "Думала, что страсть уходит со временем. Оказалось, можно всё вернуть! Теперь я чувствую себя желанной каждый день. Рекомендую всем!",
                rating: 5,
                photo: "https://cdn.poehali.dev/projects/e47ea841-df61-4199-aa19-4928f91f098a/files/b56e58e2-02a4-4187-9013-687dcb1c7ac5.jpg"
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={review.photo} 
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-base mb-1">{review.name}</div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Частые вопросы</h2>
          <p className="text-center text-gray-600 mb-12">Ответы на вопросы, которые вас волнуют</p>
          <div className="space-y-4">
            {[
              {
                question: "Это только для тех, у кого проблемы в отношениях?",
                answer: "Нет, наши курсы подходят всем женщинам — и тем, кто хочет улучшить уже хорошие отношения, и тем, кто столкнулся с трудностями. Знания помогут вам стать увереннее и счастливее в любой ситуации."
              },
              {
                question: "Сколько времени нужно уделять курсу?",
                answer: "Минимум времени — максимум результата. Эфиры и вебинары длятся 1-2 часа, а знания вы сможете применять сразу. Всё построено так, чтобы вписаться в ваш график."
              },
              {
                question: "Гарантируете ли вы результат?",
                answer: "Мы даем проверенные инструменты и техники, которые работают у тысяч женщин. Результат зависит от вашего желания применять знания. Если вы готовы меняться — результат будет обязательно."
              },
              {
                question: "Это точно бесплатно?",
                answer: "Да, вводные эфиры и вебинары полностью бесплатные. Это наш подарок вам, чтобы вы могли познакомиться с подходом школы и получить первые результаты."
              },
              {
                question: "Муж не узнает, что я прохожу курс?",
                answer: "Всё полностью конфиденциально. Вы занимаетесь онлайн в удобное время, никто не узнает. А результаты он точно заметит — в лучшую сторону!"
              }
            ].map((faq, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <Icon name="HelpCircle" size={20} className="text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="font-bold text-lg mb-2">PRIVATE COLLEGE</div>
          <p className="text-sm text-gray-400">Школа любовного мастерства для женщин</p>
          <p className="text-sm text-gray-400 mt-4">ИП Микитюк Алёна Геннадьевна • ОГРН 321435000047548</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;