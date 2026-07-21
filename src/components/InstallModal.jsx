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
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-panel-bg border border-charcoal rounded-2xl w-full max-w-lg font-sans text-left relative flex flex-col justify-between overflow-hidden shadow-2xl transition-colors duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-charcoal px-6 py-4">
          <span className="text-sm font-bold text-off-white">
            Installation Guide — {displayName}
          </span>
          <button 
            onClick={onClose} 
            className="text-muted-gray hover:text-off-white font-medium text-xs cursor-pointer p-1 rounded-md"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-xs text-muted-gray leading-relaxed overflow-y-auto max-h-[75vh]">
          
          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-off-white font-semibold text-sm">Step 1: Download Extension</span>
            </div>
            <p className="text-xs text-muted-gray">
              Download the extension source archive. Unzipping this file will produce the folder to load into Chrome.
            </p>

            <button
              onClick={triggerDownload}
              className="mt-2 px-4 py-2.5 bg-off-white text-rich-black font-semibold text-xs rounded-lg hover:bg-neon-green hover:text-black transition-all cursor-pointer"
            >
              Download {zipName}
            </button>
          </div>

          <div className="border-t border-charcoal"></div>

          {/* Step 2 */}
          <div className="space-y-3">
            <span className="text-off-white font-semibold text-sm">Step 2: Extract Files</span>
            <p className="text-xs text-muted-gray">
              Extract the downloaded zip file to a directory of your choice. Keep this directory saved on your system.
            </p>
          </div>

          <div className="border-t border-charcoal"></div>

          {/* Step 3 */}
          <div className="space-y-3">
            <span className="text-off-white font-semibold text-sm">Step 3: Load into Chrome</span>
            <ol className="list-decimal list-inside space-y-2 text-xs text-muted-gray">
              <li>Open Chrome and navigate to <code className="bg-card-bg px-1.5 py-0.5 rounded border border-charcoal text-neon-green font-mono">chrome://extensions</code></li>
              <li>Toggle <strong className="text-off-white">Developer mode</strong> in the top-right corner.</li>
              <li>Click <strong className="text-off-white">Load unpacked</strong> in the top-left menu.</li>
              <li>Select the unzipped folder containing <code className="bg-card-bg px-1.5 py-0.5 rounded border border-charcoal font-mono">manifest.json</code>.</li>
            </ol>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-charcoal bg-panel-header/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-card-bg border border-charcoal text-off-white hover:border-muted-gray rounded-lg text-xs font-semibold cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};

export default InstallModal;

