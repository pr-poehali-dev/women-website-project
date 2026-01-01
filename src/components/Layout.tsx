import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen">
      <nav className="py-4 px-4 border-b border-border bg-background sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <button onClick={() => navigate("/")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="font-bold text-lg" style={{ fontFamily: 'Georgia, serif' }}>PRIVATE COLLEGE</div>
            </button>

            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => navigate("/")}
                className={`text-sm transition-colors ${isActive('/') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => navigate("/course-1")}
                className={`text-sm transition-colors ${isActive('/course-1') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
              >
                Незабываемые ночи
              </button>
              <button 
                onClick={() => navigate("/course-2")}
                className={`text-sm transition-colors ${isActive('/course-2') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
              >
                Огонь и страсть
              </button>
              <button 
                onClick={() => navigate("/webinar")}
                className={`text-sm transition-colors ${isActive('/webinar') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
              >
                Вебинар
              </button>
              <Button size="sm" onClick={() => {
                const form = document.getElementById('registration-form');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }}>
                Консультация
              </Button>
            </div>

            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {children}

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-lg mb-4" style={{ fontFamily: 'Georgia, serif' }}>PRIVATE COLLEGE</div>
              <p className="text-sm text-gray-400">Школа любовного мастерства для женщин</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Курсы</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => navigate("/course-1")} className="hover:text-white transition-colors">Незабываемые ночи</button></li>
                <li><button onClick={() => navigate("/course-2")} className="hover:text-white transition-colors">Огонь и страсть</button></li>
                <li><button onClick={() => navigate("/webinar")} className="hover:text-white transition-colors">Вебинар</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => navigate("/")} className="hover:text-white transition-colors">Главная</button></li>
                <li><a href="#about" className="hover:text-white transition-colors">О школе</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@privatecollege.ru</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Private College. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
