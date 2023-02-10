import { useState, useEffect } from 'react';
import IconMoon from './icons/IconMoon';
import IconSun from './icons/IconSun';

const initialMode = localStorage.getItem('theme') === 'dark';

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark')
      return;
    }
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light')
  }, [darkMode]);

  const handleClickToggleTheme = () => {};

  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold uppercase tracking-[0.3em] text-white">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
