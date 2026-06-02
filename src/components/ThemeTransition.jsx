import { useState, useEffect } from 'react';

const ThemeTransition = ({ stage, targetTheme }) => {
  const [dims, setDims] = useState({ cols: 0, rows: 0, total: 0 });
  const [delays, setDelays] = useState([]);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const calcGrid = () => {
      const size = 60; // Size of each block in pixels
      const cols = Math.ceil(window.innerWidth / size);
      const rows = Math.ceil(window.innerHeight / size);
      const total = cols * rows;

      // Fast random delay (0 to 200ms) for snappy response
      const newDelays = Array.from({ length: total }, () => Math.random() * 200);

      setDims({ cols, rows, total });
      setDelays(newDelays);
    };

    calcGrid();
    
    // Trigger scale-up on next frame
    const timer = setTimeout(() => {
      setIsRendered(true);
    }, 25);

    return () => clearTimeout(timer);
  }, []);

  const styles = targetTheme === 'light'
    ? { bg: '#F8F8F8', border: '#C0C0C0' }
    : { bg: '#0A0A0A', border: '#2D2D2D' };

  if (dims.total === 0) return null;

  // Blocks show if covering and rendered has been triggered
  const showBlocks = stage === 'covering' && isRendered;

  return (
    <div
      className="fixed inset-0 z-[100] grid overflow-hidden select-none pointer-events-none bg-transparent"
      style={{
        gridTemplateColumns: `repeat(${dims.cols}, 1fr)`,
        gridTemplateRows: `repeat(${dims.rows}, 1fr)`,
      }}
    >
      {Array.from({ length: dims.total }).map((_, index) => (
        <div
          key={index}
          className="transition-all"
          style={{
            backgroundColor: styles.bg,
            outline: `1px solid ${styles.border}`,
            transitionProperty: 'transform, opacity',
            transitionDuration: '200ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: `${delays[index] || 0}ms`,
            transform: showBlocks ? 'scale(1)' : 'scale(0)',
            opacity: showBlocks ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default ThemeTransition;
