import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('appearance');

    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (saved === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      // Fallback to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
      setIsDark(prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('appearance', newDark ? 'dark' : 'light');
    setIsDark(newDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded transition"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
