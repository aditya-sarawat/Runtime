const About = ({ onBack }) => {
  return (
    <div className="w-full flex-grow flex flex-col bg-rich-black transition-colors duration-300">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col gap-12 w-full">
        
        {/* Navigation / Header */}
        <div className="flex justify-between items-center pb-6 border-b border-charcoal">
          <button
            onClick={onBack}
            className="text-sm font-sans text-muted-gray hover:text-off-white transition-colors cursor-pointer flex items-center gap-2"
          >
            ← Back to Home
          </button>
          <span className="text-sm font-mono text-neon-green uppercase tracking-widest font-semibold">
            About Us
          </span>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start text-left">
          
          {/* Left Column: Mission & Story */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-off-white mb-6">
                Runtime Studio
              </h1>
              <p className="text-lg text-muted-gray font-sans leading-relaxed">
                Runtime is a workspace dedicated to building high-performance software tools and lightweight browser extensions. We eliminate bloat, prioritize extreme system optimization, and develop tools designed for demanding developer workloads.
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-6 border-t border-charcoal">
              <h3 className="text-sm font-sans text-muted-gray uppercase tracking-widest font-semibold">
                Design & Engineering Philosophy
              </h3>
              <div className="space-y-4 text-base text-muted-gray leading-relaxed font-sans">
                <p>
                  <strong className="text-off-white font-semibold">01 / Efficiency Above All:</strong> Every line of code must justify its bytes. We build extensions with lightweight backgrounds, utilizing event-based APIs rather than polling daemons.
                </p>
                <p>
                  <strong className="text-off-white font-semibold">02 / Minimalist Design:</strong> Clean, intentional layouts with negative space, high contrast typography, and absolute focus on essential usability.
                </p>
                <p>
                  <strong className="text-off-white font-semibold">03 / Privacy First:</strong> Your data stays local. Our tools execute inside sandboxed runtime layers, respecting user privacy.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Status & Stack */}
          <div className="bg-card-bg border border-charcoal rounded-xl p-8 flex flex-col gap-6">
            <h3 className="text-sm font-sans text-muted-gray uppercase tracking-widest font-semibold">
              Project Repositories & Status
            </h3>
            
            <div className="divide-y divide-charcoal text-sm font-sans">
              <div className="py-3.5 flex justify-between items-center">
                <span className="text-off-white font-medium">Runtime Core Engine</span>
                <span className="text-neon-green font-mono">v1.0.4 • Active</span>
              </div>
              <div className="py-3.5 flex justify-between items-center">
                <span className="text-off-white font-medium">CF Power Tools</span>
                <span className="text-neon-green font-mono">v1.0.0 • Active</span>
              </div>
              <div className="py-3.5 flex justify-between items-center">
                <span className="text-off-white font-medium">CP Contest Tracker</span>
                <span className="text-neon-green font-mono">v1.0.0 • Testing</span>
              </div>
              <div className="py-3.5 flex justify-between items-center text-muted-gray">
                <span>SaaS Data Pipelines</span>
                <span className="font-mono">v3.0.0 • In Pipeline</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;

