import { useState, useEffect } from 'react';
import Crosshair from './Crosshair';

const PipelineVisualizer = () => {
  const [logs, setLogs] = useState([
    'SYS // INITIALIZING RUNTIME CORE V2.6...',
    'NET // TUNNEL ROUTING CONFIGURED [OK]',
    'MEM // SHM SYNCED: 0.003ms LATENCY'
  ]);

  useEffect(() => {
    const events = [
      'SYS // REPLICA POOL VERIFIED [OK]',
      'NET // PKT_RECV: 256 bytes -> ROUTER',
      'SEC // SYSTEM TRUST VERIFIED',
      'DB  // VACUUM EXECUTED: 12 ROWS INJECTED',
      'SYS // PIPELINE_LOAD_BALANCER: 100%',
      'NET // WEBSOCKET_TUNNEL_ESTABLISHED',
      'SYS // DEPLOYMENT_ACTIVE -> INSTANCE_0B',
      'MEM // GARBAGE COLLECTION INITIATED',
      'SYS // TELEMETRY STREAM TRANSMITTED'
    ];
    const interval = setInterval(() => {
      setLogs((prev) => {
        const next = [...prev, events[Math.floor(Math.random() * events.length)]];
        if (next.length > 5) next.shift();
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-44 bg-panel-bg border border-charcoal p-4 font-mono text-xs text-left overflow-hidden flex flex-col justify-between select-none relative transition-colors duration-300">
      <Crosshair position="top-left" />
      <Crosshair position="top-right" />
      <Crosshair position="bottom-left" />
      <Crosshair position="bottom-right" />
      <div className="flex justify-between border-b border-charcoal pb-1.5 text-muted-gray mb-2">
        <span>CORE_DAEMON_MONITOR</span>
        <span className="text-neon-green animate-pulse flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-green"></span> LIVE
        </span>
      </div>
      <div className="flex-grow space-y-1">
        {logs.map((log, i) => (
          <div key={i} className={i === logs.length - 1 ? 'text-neon-green font-medium' : 'text-muted-gray'}>
            {log}
          </div>
        ))}
      </div>
      <div className="border-t border-charcoal pt-1.5 mt-2 flex justify-between text-[11px] text-muted-gray">
        <span>BUFFER: 100%</span>
        <span>QUEUE_LATENCY: 0.09ms</span>
      </div>
    </div>
  );
};

export default PipelineVisualizer;
