const Hero = () => {
  return (
    <section className="w-full border-b border-charcoal py-20 md:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24">
        
        {/* Main Headline */}
        <div className="max-w-5xl">
          <p className="text-xs font-mono text-neon-green uppercase tracking-widest mb-6 font-semibold">
            Bespoke Engineering
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tight leading-[0.95] text-off-white text-left">
            High-performance software infrastructure & automated digital tools.
          </h1>
        </div>

        {/* 2-Column Minimalist Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pt-8 border-t border-charcoal">
          
          {/* Purpose */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-sans text-muted-gray uppercase tracking-widest mb-4 font-semibold">
                Purpose
              </h3>
              <p className="text-base md:text-lg text-muted-gray font-sans leading-relaxed text-left max-w-md">
                Architecting lightweight browser extensions and runtime utilities built for maximum browser performance and developer productivity.
              </p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-sans text-muted-gray uppercase tracking-widest mb-4 font-semibold">
                Capabilities
              </h3>
              <ul className="space-y-3 font-sans text-sm text-left">
                <li className="flex items-center gap-3 text-off-white font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green inline-block"></span>
                  <span>Chromium Core Extensions</span>
                </li>
                <li className="flex items-center gap-3 text-muted-gray">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-gray/40 inline-block"></span>
                  <span>Enterprise SaaS Data Pipelines</span>
                </li>
                <li className="flex items-center gap-3 text-muted-gray">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-gray/40 inline-block"></span>
                  <span>Automated Developer CLI Utilities</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

