const TermsOfService = ({ onBack }) => {
  return (
    <div className="w-full flex-grow flex flex-col bg-rich-black transition-colors duration-300">
      
      {/* Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-8 md:py-12 flex flex-col gap-6 w-full text-left">
        
        {/* Top Nav */}
        <div className="flex justify-between items-center pb-4 border-b border-charcoal">
          <button
            onClick={onBack}
            className="text-sm font-sans text-muted-gray hover:text-off-white transition-colors cursor-pointer flex items-center gap-2"
          >
            ← Back to Home
          </button>
          <span className="text-sm font-mono text-neon-green uppercase tracking-widest font-semibold">
            Terms of Service
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-off-white mb-4">
              Terms of Service
            </h1>
            <p className="text-base text-muted-gray font-sans leading-relaxed">
              Last updated: June 2026. Please read these operational terms carefully before using Runtime products and extensions.
            </p>
          </div>

          <div className="flex flex-col gap-8 text-base font-sans text-muted-gray leading-relaxed divide-y divide-charcoal">
            
            <div className="flex flex-col gap-3 pt-6 first:pt-0">
              <h2 className="text-lg font-semibold text-off-white">1. Operational Licensing</h2>
              <p>
                Runtime Studio grants you a revocable, non-exclusive, non-transferable license to download, install, and execute compiled runtime packages (including CF Power Tools and CP Contest Tracker) for personal, non-commercial use.
              </p>
              <p>
                All executions must occur within sandboxed browser client instances. Any unauthorized execution targeting remote bridges or database structures outside standard API interfaces is strictly prohibited.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-6">
              <h2 className="text-lg font-semibold text-off-white">2. Usage Guidelines & Limitations</h2>
              <p>
                You shall not decompile, reverse engineer, decrypt, disassemble, or extract source code from compiled browser extensions except to the extent permitted by applicable open-source software licenses.
              </p>
              <p>
                Automated scraping or query spamming targeting sync databases beyond standard background synchronization parameters may result in client access restrictions.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-6">
              <h2 className="text-lg font-semibold text-off-white">3. Disclaimers & Limitations of Liability</h2>
              <p className="bg-card-bg p-4 border border-charcoal rounded-lg text-sm text-muted-gray">
                All compiled runtimes and packages are provided "as is" without warranties of any kind. Runtime Studio makes no representation concerning repository uptime, data persistence, or third-party service availability (e.g. Google Calendar sync).
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default TermsOfService;

