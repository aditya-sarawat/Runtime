import Crosshair from './Crosshair';

const NodePipeline = () => {
  return (
    <div className="w-full h-44 bg-panel-bg border border-charcoal p-4 font-mono text-xs flex flex-col justify-between overflow-hidden relative select-none transition-colors duration-300">
      <Crosshair position="top-left" />
      <Crosshair position="top-right" />
      <Crosshair position="bottom-left" />
      <Crosshair position="bottom-right" />
      <div className="flex justify-between border-b border-charcoal pb-1.5 text-muted-gray mb-2">
        <span>CONTEST_SYNC_DAEMON</span>
        <span className="text-neon-green animate-pulse flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-green"></span> ACTIVE
        </span>
      </div>
      
      {/* Node Graph Overlay */}
      <div className="flex-grow flex items-center justify-between px-2 relative">
        <div className="border border-charcoal px-2 py-1 bg-panel-bg z-10 text-off-white text-[11px] transition-colors duration-300">
          $ tracker --sync
        </div>
        
        <div className="flex-grow h-[1px] bg-charcoal relative mx-2">
          {/* Animated pulsing dot */}
          <div className="absolute top-[-2px] w-1.5 h-1.5 rounded-full bg-neon-green animate-ping"></div>
          <div className="absolute top-[-2px] w-1.5 h-1.5 rounded-full bg-neon-green animate-[slide_2.5s_linear_infinite]"></div>
        </div>

        <div className="flex flex-col gap-1.5 z-10">
          <div className="border border-charcoal px-2 py-0.5 bg-panel-bg text-muted-gray hover:text-off-white transition-colors text-[11px] duration-300">
            CF_CONTESTS
          </div>
          <div className="border border-charcoal px-2 py-0.5 bg-panel-bg text-muted-gray hover:text-off-white transition-colors text-[11px] duration-300">
            LC_CONTESTS
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>

      <div className="border-t border-charcoal pt-1.5 mt-2 text-muted-gray text-left flex justify-between text-[11px]">
        <span>TARGET: GOOGLE_CALENDAR</span>
        <span className="text-neon-green font-bold">SYNC_OK</span>
      </div>
    </div>
  );
};

export default NodePipeline;
