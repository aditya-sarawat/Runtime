import Crosshair from './Crosshair';

const TermsOfService = ({ onBack }) => {
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
          SYS_LEGAL // TERMS_OF_SERVICE
        </span>
      </div>

      {/* Main Grid Body */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full border-b border-charcoal flex-grow">
        
        {/* Left Column: Scope & Usage */}
        <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-charcoal flex flex-col justify-between relative bg-card-bg text-left">
          <Crosshair position="bottom-right" />
          
          <div className="space-y-8">
            <div>
              <span className="font-mono text-[11px] text-neon-green font-bold block mb-4 uppercase tracking-widest">// PROTOCOL_01</span>
              <h2 className="font-sans font-black text-4xl text-off-white uppercase tracking-tighter leading-none mb-6">
                OPERATIONAL LICENSING
              </h2>
              <p className="text-xs sm:text-sm text-muted-gray font-mono leading-relaxed space-y-4">
                <span className="block font-bold text-off-white">// 1.1 LICENSED EXECUTION</span>
                <span>
                  Runtime® Studio grants you a revocable, non-exclusive, non-transferable license to download, install, and execute compiled runtime packages (including CF Power Tools and CP Contest Tracker) for personal, non-commercial software evaluation.
                </span>
                <span className="block font-bold text-off-white mt-4">// 1.2 SANDBOX INTEGRITY</span>
                <span>
                  All executions must occur within sandboxed browser client instances. Any execution targeting database structures or remote synchronization bridges outside standard API interfaces is strictly prohibited.
                </span>
              </p>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-[11px] text-muted-gray block uppercase tracking-widest">// PROTOCOL_02: COMPILATION LIMITS</span>
              <div className="space-y-4 font-mono text-xs text-muted-gray leading-relaxed">
                <p>
                  <strong className="text-off-white">2.1 NO REVERSE COMPILATION:</strong> 
                  You shall not decompile, reverse engineer, decrypt, disassemble, or extract source code from compiled browser extensions, runtime binaries, or system daemons except to the extent permitted by open-source licensing targets.
                </p>
                <p>
                  <strong className="text-off-white">2.2 NO SCRIPT ABUSE:</strong> 
                  Automated scraping or query spamming targeting the Contest Sync Daemon databases beyond standard background synchronization parameters will result in immediate client token revocation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 font-mono text-[11px] text-charcoal select-none">
            LEGAL_SEC: STABLE // KEY_VERIFIED
          </div>
        </div>

        {/* Right Column: Warranties & Liabilities */}
        <div className="p-8 lg:p-12 flex flex-col justify-between relative text-left">
          <Crosshair position="bottom-right" />
          
          <div className="space-y-8">
            <div>
              <span className="font-mono text-[11px] text-muted-gray block mb-6 tracking-widest uppercase select-none">// PROTOCOL_03</span>
              <h2 className="font-sans font-black text-4xl text-off-white uppercase tracking-tighter leading-none mb-6">
                DISCLAIMERS & LIABILITY
              </h2>
              <div className="space-y-4">
                <span className="font-mono text-[11px] text-muted-gray block uppercase tracking-widest">// 3.1 WARRANTY OVERRIDE</span>
                <p className="font-mono text-xs text-muted-gray leading-relaxed bg-panel-inner p-4 border border-charcoal transition-colors duration-300">
                  ALL COMPILED RUNTIMES AND AUTOMATED PACKAGES ARE DELIVERED "AS IS". RUNTIME® MAKES NO REPRESENTATION CONCERNING REPOSITORY UPTIME, DATA PERSISTENCE, SYSTEM INTEGRITY, OR GOOGLE CALENDAR SYNCHRONIZATION UPTIME METRICS. YOU ASSUME ALL RISK ASSOCIATED WITH BROWSER ENGINE CRASHES OR PORT CONFLICTS.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-[11px] text-muted-gray block uppercase tracking-widest">// PROTOCOL_04: LIABILITY THRESHOLDS</span>
              <p className="font-mono text-xs text-muted-gray leading-relaxed">
                IN NO EVENT SHALL RUNTIME® STUDIO OR ITS AFFILIATES BE LIABLE FOR SYSTEM INOPERABILITY, API THROTTLING (BY TARGET PLATFORMS), SCHEDULE SYNCHRONIZATION LOSS, CORRUPTION OF BROWSER STORAGE VALUES, OR ACCESS PENALTIES IMPOSED BY COMPETITIVE CODING GATEWAYS.
              </p>
            </div>
          </div>

          <div className="mt-12 font-mono text-[11px] text-charcoal select-none">
            LEGAL_HASH: SHA256_E4B9C2 // ENFORCED
          </div>
        </div>

      </div>
    </div>
  );
};

export default TermsOfService;
