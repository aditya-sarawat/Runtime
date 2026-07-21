import { useState, useEffect } from 'react';

const ThemeTransition = ({ stage, targetTheme }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setActive(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const bgColor = targetTheme === 'light' ? '#fafafa' : '#09090b';

  return (
    <div
      className={`fixed inset-0 z-[100] pointer-events-none transition-opacity duration-250 ease-in-out ${
        stage === 'covering' && active ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: bgColor }}
    />
  );
};

export default ThemeTransition;


