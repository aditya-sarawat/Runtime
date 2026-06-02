import Crosshair from './Crosshair';

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-between border-b border-charcoal relative">
      <Crosshair position="bottom-left" />
      <Crosshair position="bottom-right" />
      
      {/* Top Headline Block */}
      <div className="w-full border-b border-charcoal px-6 md:px-12 py-16 md:py-24 lg:py-28 flex flex-col justify-center bg-panel-inner/20 transition-colors duration-300 relative">
        <Crosshair position="bottom-right" />
        <h1 className="text-[10vw] sm:text-[8vw] lg:text-[7vw] font-black font-sans uppercase tracking-tighter leading-[0.85] text-left select-none">
          WE BUILD HIGH-PERFORMANCE<br />
          SOFTWARE INFRASTRUCTURE &<br />
          AUTOMATED DIGITAL TOOLS.
        </h1>
      </div>

      {/* Bottom Block: 2-column Technical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full relative">
        
        {/* Sub-Col 1: The Purpose */}
        <div className="border-b md:border-b-0 md:border-r border-charcoal p-8 lg:p-12 flex flex-col justify-between relative">
          <Crosshair position="bottom-right" />
          <div>
            <span className="font-mono text-[11px] text-muted-gray block mb-6 tracking-widest uppercase select-none">// THE PURPOSE</span>
            <p className="text-sm md:text-base text-muted-gray font-sans leading-relaxed text-left max-w-sm">
              Architecting bespoke browser extensions and custom runtime utilities engineered for hyper-scale browser automation, with SaaS data pipelines and developer CLI tools scheduled in future rollouts.
            </p>
          </div>
          <div className="mt-8 font-mono text-[11px] text-muted-gray/70 select-none">
            SYS_LOC: [0x7FFF5FBFF68C]
          </div>
        </div>

        {/* Sub-Col 2: Capabilities */}
        <div className="p-8 lg:p-12 flex flex-col justify-between relative">
          <Crosshair position="bottom-right" />
          <div>
            <span className="font-mono text-[11px] text-muted-gray block mb-6 tracking-widest uppercase select-none">// CAPABILITIES</span>
            <ul className="space-y-4 font-mono text-xs text-off-white text-left">
              <li className="flex items-center gap-3">
                <span className="text-neon-green font-bold select-none">[01]</span>
                <span className="tracking-wide">CHROMIUM CORE EXTENSIONS</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted-gray font-bold select-none">[02]</span>
                <span className="tracking-wide text-muted-gray">ENTERPRISE SAAS PIPELINES (V3.0)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted-gray font-bold select-none">[03]</span>
                <span className="tracking-wide text-muted-gray">AUTOMATED DEV TOOLS (V3.0)</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 font-mono text-[11px] text-muted-gray/70 select-none">
            COMPILER: GO_RUST_TS
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
