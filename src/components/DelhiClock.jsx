import { useState, useEffect } from 'react';
import Crosshair from './Crosshair';

const DelhiClock = ({ minimal = false }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const delhiTimeStr = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTime(delhiTimeStr);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  if (minimal) {
    return (
      <span className="font-mono font-bold text-neon-green tabular-nums">
        {time || '16:24:00'}
      </span>
    );
  }

  return (
    <div className="border border-charcoal p-3 bg-panel-bg flex flex-col gap-1 text-left select-none relative transition-colors duration-300">
      <Crosshair position="top-left" />
      <Crosshair position="top-right" />
      <Crosshair position="bottom-left" />
      <Crosshair position="bottom-right" />
      <span className="text-[11px] text-muted-gray tracking-wide uppercase">// ENVIRONMENT TIME (IST)</span>
      <span className="font-mono font-bold tabular-nums text-neon-green tracking-wider text-xs sm:text-sm">
        DELHI_SYS // {time || '16:24:00'}
      </span>
    </div>
  );
};

export default DelhiClock;
