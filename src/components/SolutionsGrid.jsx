import Crosshair from './Crosshair';
import BrowserMockup from './BrowserMockup';
import NodePipeline from './NodePipeline';
import PipelineVisualizer from './PipelineVisualizer';

const SolutionsGrid = ({ onDownload, onMoreInfo }) => {
  return (
    <section id="solutions" className="border-b border-charcoal flex flex-col relative">
      <Crosshair position="bottom-left" />
      <Crosshair position="bottom-right" />
      
      {/* Header Row */}
      <div className="border-b border-charcoal px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-panel-header/30 select-none transition-colors duration-300 relative">
        <Crosshair position="bottom-right" />
        <span className="font-mono text-[11px] text-muted-gray uppercase tracking-widest">// SOLUTIONS ENGINE // ACTIVE: EXTENSIONS</span>
        <span className="font-mono text-[11px] text-muted-gray mt-1.5 sm:mt-0 uppercase">SUITE_BUILD: 2026.06.02.26</span>
      </div>

      {/* Notice Banner */}
      <div className="border-b border-charcoal px-6 md:px-12 py-4 bg-neon-green/5 flex flex-col md:flex-row items-start md:items-center gap-4 relative transition-colors duration-300">
        <Crosshair position="bottom-right" />
        <div className="flex items-center gap-2 select-none shrink-0">
          <span className="inline-block w-2 h-2 bg-neon-green animate-pulse rounded-none"></span>
          <span className="font-mono text-[10px] text-neon-green font-black uppercase tracking-wider border border-neon-green/30 px-2 py-0.5 bg-neon-green/10">
            SYS_NOTICE // BETA_TESTING
          </span>
        </div>
        <p className="font-mono text-[11px] text-muted-gray leading-relaxed text-left">
          We are currently testing our extensions. They will be available directly on the Chrome Web Store soon. Additional browser engine support is planned for future rollouts once the current testing phase concludes.
        </p>
      </div>

      {/* Matrix Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 relative">
        
        {/* Block A: CF Power Tools - Active Core */}
        <div className="group border-b lg:border-b-0 lg:border-r border-charcoal p-8 lg:p-12 flex flex-col justify-between relative bg-card-bg">
          <Crosshair position="bottom-right" />
          <div>
            <div className="flex justify-between items-center mb-6 select-none">
              <span className="font-mono text-[11px] text-muted-gray">01 / BROWSER RUNTIMES // ACTIVE CORE</span>
              <span className="font-mono text-[11px] text-neon-green font-bold">[STATUS: ACTIVE_CORE]</span>
            </div>
            
            <h3 className="font-sans font-black text-2xl text-off-white uppercase tracking-tight mb-6">
              CF POWER TOOLS
            </h3>

            {/* CF Analytics dashboard mockup */}
            <div className="my-6">
              <BrowserMockup />
            </div>
          </div>

          <div className="mt-8 flex gap-4 border-t border-charcoal pt-4 select-none">
            <button
              onClick={(e) => { e.stopPropagation(); onDownload('cf-power-tools'); }}
              className="flex-1 py-2.5 bg-off-white text-rich-black font-mono font-bold text-xs uppercase hover:bg-neon-green hover:text-black transition-all duration-300 cursor-pointer"
            >
              DOWNLOAD
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onMoreInfo('cf-power-tools'); }}
              className="flex-1 py-2.5 border border-charcoal text-off-white font-mono font-bold text-xs uppercase hover:border-muted-gray hover:text-neon-green transition-all duration-300 cursor-pointer"
            >
              MORE INFO
            </button>
          </div>
        </div>

        {/* Block B: CP Contest Tracker - Coming soon */}
        <div className="group border-b lg:border-b-0 lg:border-r border-charcoal p-8 lg:p-12 flex flex-col justify-between cursor-not-allowed relative bg-card-bg">
          <Crosshair position="bottom-right" />
          <div>
            <div className="flex justify-between items-center mb-6 select-none">
              <span className="font-mono text-[11px] text-muted-gray">02 / BROWSER RUNTIMES // PIPELINE</span>
              <span className="font-mono text-[11px] text-muted-gray/70 font-semibold">[STATUS: COMING SOON]</span>
            </div>
            
            <h3 className="font-sans font-black text-2xl text-muted-gray uppercase tracking-tight mb-6 flex items-center gap-2">
              CP CONTEST TRACKER <span className="font-mono text-[10px] border border-muted-gray/30 px-1.5 py-0.5 text-muted-gray/70">COMING SOON</span>
            </h3>

            {/* Contest sync daemon visualizer (Faded) */}
            <div className="my-6 opacity-40">
              <NodePipeline />
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center border-t border-charcoal pt-4 select-none">
            <span className="font-mono text-xs uppercase font-bold text-charcoal">
              ROLLOUT PENDING
            </span>
            <span className="font-mono text-charcoal text-lg" title="Locked - Coming soon">
              ⊘
            </span>
          </div>
        </div>

        {/* Block C: Runtime Core Engine - Upcoming Expansion */}
        <div className="group p-8 lg:p-12 flex flex-col justify-between hover:bg-muted-gray/5 transition-colors duration-300 cursor-not-allowed relative bg-card-bg">
          <Crosshair position="bottom-right" />
          <div>
            <div className="flex justify-between items-center mb-6 select-none">
              <span className="font-mono text-[11px] text-muted-gray">03 / CLOUD PIPELINES // EXPANSION</span>
              <span className="font-mono text-[11px] text-muted-gray/70 font-semibold">[STATUS: IN PIPELINE]</span>
            </div>
            
            <h3 className="font-sans font-black text-2xl text-muted-gray uppercase tracking-tight mb-6 flex items-center gap-2">
                  RUNTIME CORE ENGINE <span className="font-mono text-[10px] border border-muted-gray/30 px-1.5 py-0.5 text-muted-gray/70">PHASE 2</span>
            </h3>

            {/* Live SaaS visualizer (Faded) */}
            <div className="my-6 opacity-40">
              <PipelineVisualizer />
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center border-t border-charcoal pt-4 select-none">
            <span className="font-mono text-xs uppercase font-bold text-charcoal">
              EXPANSION WORKFLOW
            </span>
            <span className="font-mono text-charcoal text-lg" title="Locked - Coming in future rollout">
              ⊘
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsGrid;
