import Crosshair from './Crosshair';
import BrowserMockup from './BrowserMockup';
import NodePipeline from './NodePipeline';

const ExtensionDetails = ({ extensionId, onBack, onDownload }) => {
  const isCF = extensionId === 'cf-power-tools';
  const title = isCF ? 'CF POWER TOOLS' : 'CP CONTEST TRACKER';
  const tagline = isCF 
    ? 'Injects a powerful analytics dashboard into any Codeforces profile page with efficiency meters, tag power radars, heatmaps, and personalized recommendations.'
    : 'Track upcoming competitive programming contests from Codeforces, CodeChef, LeetCode, AtCoder, HackerRank, HackerEarth, Toph, and GeeksforGeeks. Sync to Google Calendar.';

  const features = isCF ? [
    {
      title: 'Profile Dashboard Overlay',
      desc: 'Injects analytics directly into Codeforces profiles with real-time feedback meters.'
    },
    {
      title: 'Tag Power Radar',
      desc: 'Visualizes your strength profile across key programming topics (DP, Math, Graphs, etc.) using interactive radar charts.'
    },
    {
      title: 'Shadow Mode Rival Tracking',
      desc: 'Enables head-to-head tracking against any rival user with performance offset bars.'
    },
    {
      title: 'AI Recommendations',
      desc: 'Recommends target problems using localized algorithms based on active tag performance gaps.'
    },
    {
      title: 'AC Stopwatch & Zen Mode',
      desc: 'Provides spoiler blockers and timers to facilitate focused problem solving.'
    }
  ] : [
    {
      title: 'Google Calendar Sync',
      desc: 'Silently synchronizes upcoming competitive events directly into your calendar. Restores deleted entries.'
    },
    {
      title: '8 Supported Platforms',
      desc: 'Supports Codeforces, CodeChef, LeetCode, AtCoder, HackerRank, HackerEarth, Toph, and GeeksforGeeks.'
    },
    {
      title: 'Desktop Notification Alerts',
      desc: 'Sets up custom timers and shows browser alerts before contest gates open.'
    },
    {
      title: 'Background Refresh Service',
      desc: 'Uses background chrome alarms to update schedules and cache new events silently.'
    },
    {
      title: 'Customizable Intervals',
      desc: 'Fine-tune sync intervals and filter platforms to build your customized dashboard cockpit.'
    }
  ];

  return (
    <div className="w-full flex-grow flex flex-col bg-rich-black transition-colors duration-300">
      
      {/* Detail Header / Nav bar */}
      <div className="border-b border-charcoal px-6 md:px-12 py-6 bg-panel-header/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative">
        <Crosshair position="bottom-right" />
        <button
          onClick={onBack}
          className="font-mono text-xs font-bold text-muted-gray hover:text-neon-green transition-colors cursor-pointer"
        >
          ← BACK TO SUITE
        </button>
        <span className="font-mono text-[11px] text-muted-gray uppercase">
          EXTENSION DETAILS // {title}
        </span>
      </div>

      {/* Detail Body */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full border-b border-charcoal">
        
        {/* Left Column: Title & Features */}
        <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-charcoal flex flex-col justify-between relative bg-card-bg">
          <Crosshair position="bottom-right" />
          <div className="space-y-8">
            <div>
              <span className="font-mono text-[11px] text-neon-green font-bold block mb-4 uppercase tracking-widest">
                {isCF ? '// ACTIVE EXTENSION' : '// COMING SOON'}
              </span>
              <h2 className={`font-sans font-black text-4xl sm:text-5xl uppercase tracking-tighter leading-none mb-6 ${isCF ? 'text-off-white' : 'text-muted-gray'}`}>
                {title}
              </h2>
              <p className="text-sm sm:text-base text-muted-gray font-sans leading-relaxed text-left max-w-lg">
                {tagline}
              </p>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-[11px] text-muted-gray block uppercase tracking-widest">// CORE CAPABILITIES</span>
              <ul className="space-y-4 text-left">
                {features.map((feature, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-neon-green font-bold select-none text-xs">[{String(i + 1).padStart(2, '0')}]</span>
                    <div>
                      <h4 className="font-mono font-bold text-xs text-off-white uppercase">{feature.title}</h4>
                      <p className="text-xs text-muted-gray leading-relaxed mt-1">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex gap-4 pt-6 border-t border-charcoal">
            {isCF ? (
              <button
                onClick={() => onDownload(extensionId)}
                className="px-6 py-3 bg-off-white text-rich-black font-mono font-bold text-xs uppercase hover:bg-neon-green hover:text-black transition-all cursor-pointer"
              >
                DOWNLOAD EXTENSION
              </button>
            ) : (
              <button
                disabled
                className="px-6 py-3 bg-charcoal text-muted-gray font-mono font-bold text-xs uppercase cursor-not-allowed"
              >
                ROLLOUT PENDING / COMING SOON
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Visual Mockups & Specs */}
        <div className="p-8 lg:p-12 flex flex-col justify-between relative">
          <div className="space-y-8">
            <div>
              <span className="font-mono text-[11px] text-muted-gray block mb-6 tracking-widest uppercase select-none">// RUNTIME PREVIEW</span>
              <div className={`bg-panel-inner/40 p-4 border border-charcoal relative ${!isCF ? 'opacity-40' : ''}`}>
                <Crosshair position="bottom-right" />
                {isCF ? <BrowserMockup /> : <NodePipeline />}
              </div>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-[11px] text-muted-gray block uppercase tracking-widest">// ARCHITECTURE DETAILS</span>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-panel-input p-4 border border-charcoal space-y-1">
                  <span className="font-mono text-[10px] text-muted-gray uppercase">MANIFEST VERSION</span>
                  <p className="font-mono text-xs text-off-white font-bold">V3 (LATEST)</p>
                </div>
                <div className="bg-panel-input p-4 border border-charcoal space-y-1">
                  <span className="font-mono text-[10px] text-muted-gray uppercase">PRIMARY PERMISSIONS</span>
                  <p className="font-mono text-xs text-off-white font-bold truncate">
                    {isCF ? 'Storage, Host URLs' : 'Storage, Identity, Alarms'}
                  </p>
                </div>
                <div className="bg-panel-input p-4 border border-charcoal space-y-1">
                  <span className="font-mono text-[10px] text-muted-gray uppercase">CORE SCRIPTS</span>
                  <p className="font-mono text-xs text-off-white font-bold">
                    {isCF ? 'content.js, background.js' : 'background.js, popup.js'}
                  </p>
                </div>
                <div className="bg-panel-input p-4 border border-charcoal space-y-1">
                  <span className="font-mono text-[10px] text-muted-gray uppercase">COMPATIBILITY</span>
                  <p className="font-mono text-xs text-off-white font-bold">CHROMIUM / CHROME</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 font-mono text-[11px] text-charcoal select-none">
            SPEC_VER: {isCF ? '1.0.0_BUILD_CF' : '1.0.0_BUILD_CP'}
          </div>
        </div>

      </div>

    </div>
  );
};

export default ExtensionDetails;
