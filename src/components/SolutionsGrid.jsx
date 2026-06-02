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

        {/* Block B: CP Contest Tracker - Active Core */}
        <div className="group border-b lg:border-b-0 lg:border-r border-charcoal p-8 lg:p-12 flex flex-col justify-between relative bg-card-bg">
          <Crosshair position="bottom-right" />
          <div>
            <div className="flex justify-between items-center mb-6 select-none">
              <span className="font-mono text-[11px] text-muted-gray">02 / BROWSER RUNTIMES // ACTIVE CORE</span>
              <span className="font-mono text-[11px] text-neon-green font-bold">[STATUS: ACTIVE_CORE]</span>
            </div>
            
            <h3 className="font-sans font-black text-2xl text-off-white uppercase tracking-tight mb-6">
              CP CONTEST TRACKER
            </h3>

            {/* Contest sync daemon visualizer */}
            <div className="my-6">
              <NodePipeline />
            </div>
          </div>

          <div className="mt-8 flex gap-4 border-t border-charcoal pt-4 select-none">
            <button
              onClick={(e) => { e.stopPropagation(); onDownload('cp-contest-tracker'); }}
              className="flex-1 py-2.5 bg-off-white text-rich-black font-mono font-bold text-xs uppercase hover:bg-neon-green hover:text-black transition-all duration-300 cursor-pointer"
            >
              DOWNLOAD
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onMoreInfo('cp-contest-tracker'); }}
              className="flex-1 py-2.5 border border-charcoal text-off-white font-mono font-bold text-xs uppercase hover:border-muted-gray hover:text-neon-green transition-all duration-300 cursor-pointer"
            >
              MORE INFO
            </button>
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
