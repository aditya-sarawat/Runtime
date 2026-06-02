import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [dims, setDims] = useState({ cols: 0, rows: 0, total: 0 });
  const [delays, setDelays] = useState([]);
  const [progress, setProgress] = useState(0);
  const [statusLogs, setStatusLogs] = useState([]);
  const [isRevealing, setIsRevealing] = useState(false);

  // 1. Calculate Grid Blocks on Mount / Resize
  useEffect(() => {
    const calcGrid = () => {
      const size = 50; // Size of each grid block in pixels
      const cols = Math.ceil(window.innerWidth / size);
      const rows = Math.ceil(window.innerHeight / size);
      const total = cols * rows;

      // Generate a random delay (0 to 800ms) for each block
      const newDelays = Array.from({ length: total }, () => Math.random() * 800);

      setDims({ cols, rows, total });
      setDelays(newDelays);
    };

    calcGrid();
    window.addEventListener('resize', calcGrid);
    return () => window.removeEventListener('resize', calcGrid);
  }, []);

  // 2. Lock / Unlock Body Scroll
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  // 3. Progress Ticker & Logs
  useEffect(() => {
    if (dims.total === 0) return;

    const logs = [
      { threshold: 0, text: 'BOOT: RUNTIME ENGINE v1.0.4' },
      { threshold: 12, text: 'SYS: INITIALIZING VIRTUAL CORES...' },
      { threshold: 28, text: 'NET: SYNCING DATABASE CLUSTER...' },
      { threshold: 42, text: 'CAD: MOUNTING GRID OVERLAY...' },
      { threshold: 60, text: 'SYS: PARSING PIPELINE SCHEMAS...' },
      { threshold: 78, text: 'SEC: VALIDATING SHA256 INTEGRITY...' },
      { threshold: 92, text: 'SYS: ALLOCATING RUNTIME BUFFERS...' },
      { threshold: 100, text: 'BOOT SUCCESSFUL.' },
    ];

    let currentProgress = 0;
    const interval = setInterval(() => {
      const inc = Math.floor(Math.random() * 6) + 4; // Increment by 4 to 9
      currentProgress = Math.min(100, currentProgress + inc);
      setProgress(currentProgress);

      const activeLogs = logs.filter((log) => currentProgress >= log.threshold);
      setStatusLogs(activeLogs);

      if (currentProgress === 100) {
        clearInterval(interval);
        // Wait a short moment after 100%, then trigger the reveal animation
        const timer = setTimeout(() => {
          setIsRevealing(true);
        }, 400);
        return () => clearTimeout(timer);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [dims.total]);

  // 4. Handle Cleanup after Animation Ends
  useEffect(() => {
    if (isRevealing) {
      // Max delay is 800ms, animation duration is 500ms -> total ~1300ms
      const timer = setTimeout(() => {
        onComplete();
      }, 1350);
      return () => clearTimeout(timer);
    }
  }, [isRevealing, onComplete]);

  // Construct progress bar string: e.g. [██████░░░░░]
  const totalBars = 16;
  const filledBars = Math.round((progress / 100) * totalBars);
  const emptyBars = totalBars - filledBars;
  const barString = '█'.repeat(filledBars) + '░'.repeat(emptyBars);

  return (
    <>
      {/* Background blocks overlay */}
      {dims.total > 0 && (
        <div
          className={`fixed inset-0 z-50 grid overflow-hidden select-none pointer-events-none transition-colors duration-500 ${
            isRevealing ? 'bg-transparent' : 'bg-rich-black'
          }`}
          style={{
            gridTemplateColumns: `repeat(${dims.cols}, 1fr)`,
            gridTemplateRows: `repeat(${dims.rows}, 1fr)`,
          }}
        >
          {Array.from({ length: dims.total }).map((_, index) => (
            <div
              key={index}
              className="bg-neon-green transition-all"
              style={{
                transitionProperty: 'transform, opacity',
                transitionDuration: '500ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${delays[index] || 0}ms`,
                transform: isRevealing ? 'scale(0)' : 'scale(1)',
                opacity: isRevealing ? 0 : 1,
                outline: '1px solid var(--accent-color)',
              }}
            />
          ))}
        </div>
      )}

      {/* Central Terminal Dashboard */}
      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center p-4 select-none pointer-events-none transition-all duration-300 ${
          isRevealing ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <div className="bg-panel-bg border border-neon-green p-6 font-mono text-xs w-full max-w-sm shadow-2xl relative pointer-events-auto transition-colors duration-300">
          
          {/* Corner Crosshairs */}
          <span className="absolute -top-[6px] -left-[3.5px] font-mono text-[9px] text-neon-green select-none pointer-events-none">+</span>
          <span className="absolute -top-[6px] -right-[3.5px] font-mono text-[9px] text-neon-green select-none pointer-events-none">+</span>
          <span className="absolute -bottom-[7px] -left-[3.5px] font-mono text-[9px] text-neon-green select-none pointer-events-none">+</span>
          <span className="absolute -bottom-[7px] -right-[3.5px] font-mono text-[9px] text-neon-green select-none pointer-events-none">+</span>

          {/* Header */}
          <div className="flex justify-between border-b border-charcoal pb-2 text-[10px] text-muted-gray uppercase tracking-wider mb-4">
            <span>SYS_BOOT_SEQUENCE</span>
            <span className="text-neon-green animate-pulse flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-green"></span>
              {progress < 100 ? 'LOADING' : 'READY'}
            </span>
          </div>

          {/* Progress Display */}
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] text-off-white">
              <span>PROGRESS</span>
              <span className="text-neon-green font-bold">{progress}%</span>
            </div>
            <div className="text-neon-green text-[13px] tracking-tight whitespace-pre select-none">
              [{barString}]
            </div>
          </div>

          {/* Console Output Log */}
          <div className="bg-panel-inner border border-charcoal p-3 my-4 h-32 overflow-hidden flex flex-col justify-end text-muted-gray text-[10px] leading-relaxed transition-colors duration-300">
            <div className="space-y-1">
              {statusLogs.map((log, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-neon-green">✓</span>
                  <span>{log.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="flex justify-between items-center text-[10px] text-muted-gray mt-2 pt-2 border-t border-charcoal">
            <span>SYS_LOC: [0x5F3759DF]</span>
            <button
              onClick={() => setIsRevealing(true)}
              className="border border-neon-green px-2 py-0.5 hover:bg-neon-green hover:text-black transition-colors text-[9px] font-bold uppercase cursor-pointer"
            >
              SKIP_BOOT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
