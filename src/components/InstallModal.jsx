import Crosshair from './Crosshair';

const InstallModal = ({ isOpen, onClose, extensionName }) => {
  if (!isOpen) return null;

  const displayName = extensionName === 'cf-power-tools' ? 'CF Power Tools' : 'CP Contest Tracker';
  const zipName = extensionName === 'cf-power-tools' ? 'cf_power_tools.zip' : 'cp-contest-tracker.zip';

  const triggerDownload = () => {
    if (extensionName === 'cf-power-tools') {
      const element = document.createElement("a");
      element.href = '/cf_power_tools.zip';
      element.download = 'cf_power_tools.zip';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } else {
      // Generate a dummy download for the zip to make it feel real/interactive
      const element = document.createElement("a");
      const file = new Blob(["mock zip content"], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = zipName;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-panel-bg border border-charcoal w-full max-w-lg font-mono text-left relative flex flex-col justify-between transition-colors duration-300">
        <Crosshair position="top-left" />
        <Crosshair position="top-right" />
        <Crosshair position="bottom-left" />
        <Crosshair position="bottom-right" />

        {/* Terminal Header */}
        <div className="flex justify-between items-center border-b border-charcoal px-4 py-3 bg-panel-header">
          <span className="text-xs text-muted-gray uppercase font-bold tracking-wider">
            INSTALL_GUIDE.SH // {displayName.toUpperCase()}
          </span>
          <button 
            onClick={onClose} 
            className="text-muted-gray hover:text-neon-green font-bold text-xs uppercase cursor-pointer"
          >
            [CLOSE X]
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-6 space-y-6 text-xs text-muted-gray leading-relaxed overflow-y-auto max-h-[75vh]">
          
          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-neon-green font-bold">[01] DOWNLOAD EXTENSION BUNDLE</span>
              <span className="text-charcoal">// STEP_ONE</span>
            </div>
            <p className="text-off-white">
              Download the extension source archive. unzipping this file will produce the directory to load.
            </p>
            
            {/* Visual: Download bar */}
            <div className="bg-panel-input p-3 border border-charcoal/50 font-mono text-[10px] space-y-1">
              <div className="flex justify-between text-muted-gray">
                <span>GET // {zipName}</span>
                <span className="text-neon-green">100% COMPLETE</span>
              </div>
              <div className="w-full bg-charcoal h-1">
                <div className="bg-neon-green h-full w-full"></div>
              </div>
              <div className="text-[9px] text-muted-gray/50 flex justify-between">
                <span>52.1 KB / 52.1 KB</span>
                <span>STATUS: TRANSFER_OK</span>
              </div>
            </div>

            <button
              onClick={triggerDownload}
              className="mt-2 px-3 py-1.5 bg-off-white text-rich-black font-bold uppercase hover:bg-neon-green hover:text-black transition-all cursor-pointer"
            >
              DOWNLOAD {zipName.toUpperCase()}
            </button>
          </div>

          <div className="border-t border-charcoal/40 my-3"></div>

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-neon-green font-bold">[02] EXTRACT THE FILES</span>
              <span className="text-charcoal">// STEP_TWO</span>
            </div>
            <p className="text-off-white">
              Extract the downloaded zip file to a folder of your choice (e.g., <code className="bg-panel-input px-1 py-0.5 border border-charcoal">Documents/{displayName}</code>). Do not delete this folder after installing.
            </p>

            {/* Visual: Folder tree */}
            <div className="bg-panel-input p-3 border border-charcoal/50 font-mono text-[10px] space-y-1 text-muted-gray select-none">
              <div>$ unzip {zipName} -d ./Documents</div>
              <div className="text-off-white/40">
                {"  └── "}
                <span className="text-off-white font-bold">{displayName}/</span>
              </div>
              <div className="text-off-white/40">
                {"      ├── "}
                <span className="text-muted-gray">manifest.json</span>
              </div>
              <div className="text-off-white/40">
                {"      ├── "}
                <span className="text-muted-gray">background.js</span>
              </div>
              <div className="text-off-white/40">
                {"      └── "}
                <span className="text-muted-gray">popup.html</span>
              </div>
            </div>
          </div>

          <div className="border-t border-charcoal/40 my-3"></div>

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-neon-green font-bold">[03] LOAD UNPACKED IN CHROMIUM</span>
              <span className="text-charcoal">// STEP_THREE</span>
            </div>
            <ul className="list-decimal list-inside space-y-1.5 text-off-white mb-2">
              <li>Open your Chrome browser and navigate to <code className="bg-panel-input px-1 py-0.5 border border-charcoal text-neon-green">chrome://extensions</code></li>
              <li>Toggle the <span className="font-bold text-neon-green">"Developer mode"</span> switch in the top-right corner.</li>
              <li>Click the <span className="font-bold text-neon-green">"Load unpacked"</span> button in the top-left menu.</li>
              <li>Select the unzipped folder containing the <code className="bg-panel-input px-1 py-0.5 border border-charcoal">manifest.json</code> file.</li>
            </ul>

            {/* Visual: Browser extensions mockup */}
            <div className="bg-panel-input border border-charcoal/50 rounded-none overflow-hidden font-mono text-[10px] flex flex-col">
              {/* Mini address bar */}
              <div className="flex items-center justify-between bg-panel-header px-2 py-1 border-b border-charcoal/50">
                <div className="flex items-center gap-1.5 flex-grow">
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal"></div>
                  <div className="bg-panel-bg border border-charcoal/50 flex-grow py-0.5 px-2 text-charcoal truncate text-[9px]">
                    chrome://extensions
                  </div>
                </div>
                {/* Developer Mode toggle */}
                <div className="flex items-center gap-1.5 ml-3">
                  <span className="text-[8px] text-muted-gray uppercase">DEV_MODE</span>
                  <span className="text-neon-green font-bold animate-pulse">[ON]</span>
                </div>
              </div>
              
              {/* Mini Extensions Workspace */}
              <div className="p-3 bg-panel-inner/80 flex flex-col gap-2 min-h-[50px]">
                <div className="flex gap-2">
                  {/* Load Unpacked button highlight */}
                  <div className="border border-neon-green bg-neon-green/10 text-neon-green px-2 py-1 font-bold text-[9px] animate-pulse">
                    [ Load unpacked ]
                  </div>
                  <div className="border border-charcoal/50 text-muted-gray/40 px-2 py-1 text-[9px] select-none">
                    Pack extension
                  </div>
                </div>
                
                <div className="border border-dashed border-charcoal p-2 text-center text-[9px] text-muted-gray/70">
                  Select unzipped "{displayName}" folder
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-charcoal/40 my-3"></div>

          {/* Success Ticker */}
          <div className="bg-panel-input p-3 border border-charcoal flex items-center justify-between select-none">
            <span className="text-neon-green font-bold">DAEMON_LISTEN: READY</span>
            <span className="text-charcoal">EXIT_CODE: 0x00</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default InstallModal;
