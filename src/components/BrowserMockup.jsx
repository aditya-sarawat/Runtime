import Crosshair from './Crosshair';

const BrowserMockup = () => {
  return (
    <div className="w-full h-44 bg-panel-bg border border-charcoal font-mono text-xs flex flex-col overflow-hidden select-none relative transition-colors duration-300">
      <Crosshair position="top-left" />
      <Crosshair position="top-right" />
      <Crosshair position="bottom-left" />
      <Crosshair position="bottom-right" />
      {/* Browser Bar */}
      <div className="flex items-center px-3 py-1.5 border-b border-charcoal bg-panel-header gap-2 transition-colors duration-300">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-charcoal"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-charcoal"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-charcoal"></div>
        </div>
        <div className="flex-grow bg-panel-input border border-charcoal px-2 py-0.5 text-center text-muted-gray truncate text-[11px] transition-colors duration-300">
          https://codeforces.com/profile/tourist
        </div>
      </div>
      {/* Extension Body */}
      <div className="p-3.5 flex-grow grid grid-cols-3 gap-2 bg-panel-inner transition-colors duration-300">
        <div className="col-span-2 border border-charcoal p-2 flex flex-col justify-between">
          <div className="text-muted-gray text-[11px]">// CF_ANALYTICS_OVERLAY</div>
          <div className="text-off-white text-xs font-bold tracking-tight">EFFICIENCY_METER</div>
          <div className="w-full bg-panel-input h-1.5 border border-charcoal transition-colors duration-300">
            <div className="bg-neon-green h-full w-[94%] animate-pulse"></div>
          </div>
        </div>
        <div className="border border-charcoal p-2 flex flex-col justify-between items-center text-center">
          <span className="text-muted-gray text-[11px]">SOLVES</span>
          <span className="text-neon-green font-bold text-xs">2.4K</span>
          <span className="text-[10px] text-muted-gray">RANK: LGM</span>
        </div>
      </div>
    </div>
  );
};

export default BrowserMockup;
