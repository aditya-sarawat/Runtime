import { useState, useEffect } from 'react';
import Crosshair from './Crosshair';

const UserLocationClock = ({ minimal = false }) => {
  const [time, setTime] = useState('');
  const [location, setLocation] = useState(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) {
        const parts = tz.split('/');
        const city = parts[parts.length - 1].replace(/_/g, ' ');
        return city;
      }
    } catch {
      // Fallback
    }
    return '';
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch('https://get.geojs.io/v1/ip/geo.json');
        if (res.ok) {
          const data = await res.json();
          const region = data.region || data.city;
          const country = data.country_code || data.country;
          if (region && country) {
            setLocation(`${region}, ${country}`);
            return;
          }
        }
      } catch (e) {
        // Fallback to secondary endpoint
      }

      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          const region = data.region || data.city;
          const country = data.country_code || data.country_name;
          if (region && country) {
            setLocation(`${region}, ${country}`);
          }
        }
      } catch (e) {
        // Keep initial timezone fallback
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const userTimeStr = new Date().toLocaleTimeString([], {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTime(userTimeStr);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  if (minimal) {
    return (
      <div className="flex items-center gap-2 font-mono text-sm">
        {location && <span>{location}</span>}
        {location && <span>•</span>}
        <span className="font-mono font-bold text-neon-green tabular-nums">
          {time || '00:00:00'}
        </span>
      </div>
    );
  }

  return (
    <div className="border border-charcoal p-3 bg-panel-bg flex flex-col gap-1 text-left select-none relative transition-colors duration-300">
      <Crosshair position="top-left" />
      <Crosshair position="top-right" />
      <Crosshair position="bottom-left" />
      <Crosshair position="bottom-right" />
      <span className="text-[11px] text-muted-gray tracking-wide uppercase">// LOCAL ENVIRONMENT TIME</span>
      <span className="font-mono font-bold tabular-nums text-neon-green tracking-wider text-xs sm:text-sm">
        {location ? location.toUpperCase() : 'USER_SYS'} // {time || '00:00:00'}
      </span>
    </div>
  );
};

export default UserLocationClock;
