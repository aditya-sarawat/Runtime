import Crosshair from './Crosshair';

const About = ({ onBack }) => {
  return (
    <div className="w-full flex-grow flex flex-col bg-rich-black transition-colors duration-300">
      
      {/* Header bar */}
      <div className="border-b border-charcoal px-6 md:px-12 py-6 bg-panel-header/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative">
        <Crosshair position="bottom-right" />
        <button
          onClick={onBack}
          className="font-mono text-xs font-bold text-muted-gray hover:text-neon-green transition-colors cursor-pointer"
        >
          ← BACK TO SUITE
        </button>
        <span className="font-mono text-[11px] text-muted-gray uppercase">
          SYS_INFO // ABOUT_US
        </span>
      </div>

      {/* Main Grid Body */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full border-b border-charcoal flex-grow">
        
        {/* Left Column: Mission & Story */}
        <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-charcoal flex flex-col justify-between relative bg-card-bg text-left">
          <Crosshair position="bottom-right" />
          
          <div className="space-y-8">
            <div>
              <span className="font-mono text-[11px] text-neon-green font-bold block mb-4 uppercase tracking-widest">// CORE IDENTITY</span>
              <h2 className="font-sans font-black text-4xl sm:text-5xl text-off-white uppercase tracking-tighter leading-none mb-6">
                RUNTIME® STUDIO
              </h2>
              <p className="text-sm sm:text-base text-muted-gray font-sans leading-relaxed">
                Runtime® is a developer workspace dedicated to building high-performance, radical software infrastructure and automated digital tools. We eliminate bloat, prioritize extreme system optimization, and develop highly focused extensions and runtimes designed for demanding developer workloads.
              </p>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-[11px] text-muted-gray block uppercase tracking-widest">// RADICAL PHILOSOPHY</span>
              <div className="space-y-4 font-sans text-xs sm:text-sm text-muted-gray leading-relaxed">
                <p>
                  <strong>01 / Efficiency Above All:</strong> Every line of code must justify its bytes. We build extensions with lightweight backgrounds, utilizing event-based APIs rather than polling daemons.
                </p>
                <p>
                  <strong>02 / Brutalist Aesthetics:</strong> Information density and usability are our core design values. We employ bold margins, solid typography, high contrast, and dynamic micro-animations to create clean, expressive user terminals.
                </p>
                <p>
                  <strong>03 / Absolute Integrity:</strong> Your data stays local. Our tools (such as the Contest Tracker or CF Power Tools) run entirely inside sandboxed runtime layers, respecting privacy guidelines.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 font-mono text-[11px] text-charcoal select-none">
            ENGINE_LOG: OK // [INIT_2026]
          </div>
        </div>

        {/* Right Column: Architecture & Core Stack */}
        <div className="p-8 lg:p-12 flex flex-col justify-between relative text-left">
          <Crosshair position="bottom-right" />
          
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-[11px] text-muted-gray block uppercase tracking-widest">// ACTIVE PROJECT REPOSITORIES</span>
              <div className="border border-charcoal p-4 font-mono text-[11px] text-muted-gray space-y-2 bg-panel-inner transition-colors duration-300">
                <div className="flex justify-between">
                  <span className="text-off-white font-bold">✓ RUNTIME_CORE</span>
                  <span className="text-neon-green">ACTIVE [v1.0.4]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-off-white font-bold">✓ CF_POWER_TOOLS</span>
                  <span className="text-neon-green">ACTIVE [v1.0.0]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-off-white font-bold">✓ CP_CONTEST_TRACKER</span>
                  <span className="text-neon-green">ACTIVE [v1.0.0]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-gray">✕ PIPELINES_SAAS</span>
                  <span className="text-charcoal">QUEUED [v3.0.0]</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 font-mono text-[11px] text-charcoal select-none">
            SPEC_STABILITY: HIGH // SYS_OK
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
