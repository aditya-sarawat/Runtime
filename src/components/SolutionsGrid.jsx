import BrowserMockup from './BrowserMockup';
import NodePipeline from './NodePipeline';
import PipelineVisualizer from './PipelineVisualizer';

const SolutionsGrid = ({ onDownload, onMoreInfo }) => {
  return (
    <section id="solutions" className="w-full border-b border-charcoal py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-charcoal">
          <div>
            <span className="text-sm font-mono text-neon-green uppercase tracking-widest block mb-1 font-semibold">
              Product Suite
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-off-white">
              Extensions & Tools
            </h2>
          </div>
          <p className="text-base text-muted-gray max-w-md text-left">
            We are currently testing our core extensions. Chrome Web Store listings and expanded browser engine support are rolling out soon.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: CF Power Tools - Active Core */}
          <div className="bg-card-bg border border-charcoal rounded-xl p-6 flex flex-col justify-between hover:border-muted-gray/40 transition-all duration-300 shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-mono text-muted-gray">01</span>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/20">
                  Active
                </span>
              </div>
              
              <h3 className="font-sans font-bold text-xl text-off-white mb-2">
                CF Power Tools
              </h3>
              <p className="text-sm text-muted-gray font-sans leading-relaxed mb-4">
                Analytics dashboard for Codeforces profile pages with efficiency meters, tag power radars, and recommendations.
              </p>

              {/* Analytics dashboard mockup */}
              <div className="my-3">
                <BrowserMockup />
              </div>
            </div>

            <div className="mt-5 flex gap-3 pt-3.5 border-t border-charcoal select-none">
              <button
                onClick={(e) => { e.stopPropagation(); onDownload('cf-power-tools'); }}
                className="flex-1 py-2 bg-off-white text-rich-black font-sans font-semibold text-sm rounded-md hover:bg-neon-green hover:text-black transition-all duration-200 cursor-pointer"
              >
                Download
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onMoreInfo('cf-power-tools'); }}
                className="flex-1 py-2 border border-charcoal text-off-white font-sans font-semibold text-sm rounded-md hover:border-muted-gray hover:text-neon-green transition-all duration-200 cursor-pointer"
              >
                More Info
              </button>
            </div>
          </div>

          {/* Card 2: CP Contest Tracker - Coming soon */}
          <div className="bg-card-bg border border-charcoal rounded-xl p-6 flex flex-col justify-between opacity-85 transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-mono text-muted-gray">02</span>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-muted-gray/10 text-muted-gray border border-muted-gray/20">
                  Coming Soon
                </span>
              </div>
              
              <h3 className="font-sans font-bold text-xl text-off-white mb-2">
                CP Contest Tracker
              </h3>
              <p className="text-sm text-muted-gray font-sans leading-relaxed mb-4">
                Track upcoming competitive programming contests across 8+ platforms with automatic calendar synchronization.
              </p>

              {/* Visualizer (Faded) */}
              <div className="my-3 opacity-50">
                <NodePipeline />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between pt-3.5 border-t border-charcoal select-none">
              <span className="text-sm font-sans text-muted-gray">
                Rollout Pending
              </span>
              <span className="text-sm font-mono text-muted-gray" title="Coming soon">
                In Development
              </span>
            </div>
          </div>

          {/* Card 3: Runtime Core Engine - Upcoming Expansion */}
          <div className="bg-card-bg border border-charcoal rounded-xl p-6 flex flex-col justify-between opacity-85 transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-mono text-muted-gray">03</span>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-muted-gray/10 text-muted-gray border border-muted-gray/20">
                  Phase 2
                </span>
              </div>
              
              <h3 className="font-sans font-bold text-xl text-off-white mb-2">
                Runtime Core Engine
              </h3>
              <p className="text-sm text-muted-gray font-sans leading-relaxed mb-4">
                Cloud data pipeline and automated workflow engine scheduled for upcoming releases.
              </p>

              {/* Live SaaS visualizer (Faded) */}
              <div className="my-3 opacity-50">
                <PipelineVisualizer />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between pt-3.5 border-t border-charcoal select-none">
              <span className="text-sm font-sans text-muted-gray">
                Expansion Workflow
              </span>
              <span className="text-sm font-mono text-muted-gray">
                Planned
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SolutionsGrid;

