import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);

  // Body Scroll Lock
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  // Fast smooth minimalist progress ticker
  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      const inc = Math.floor(Math.random() * 15) + 15;
      currentProgress = Math.min(100, currentProgress + inc);
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);
        const timer = setTimeout(() => {
          setIsRevealing(true);
        }, 150);
        return () => clearTimeout(timer);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // Animation end cleanup
  useEffect(() => {
    if (isRevealing) {
      const timer = setTimeout(() => {
        onComplete();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isRevealing, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-rich-black transition-all duration-500 select-none ${
        isRevealing ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6 max-w-xs w-full px-6">
        {/* Brand */}
        <span className="font-sans font-bold text-xl tracking-tight text-off-white uppercase">
          RUNTIME<span className="text-neon-green">.</span>
        </span>

        {/* Minimal Progress Bar */}
        <div className="w-full h-[2px] bg-charcoal rounded-full overflow-hidden relative">
          <div
            className="h-full bg-neon-green transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress % */}
        <span className="text-[11px] font-mono text-muted-gray tracking-wider">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;

