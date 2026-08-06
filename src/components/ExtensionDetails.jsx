import BrowserMockup from './BrowserMockup';
import NodePipeline from './NodePipeline';
import { EXTENSION_LINKS } from '../constants/extensions';

const ExtensionDetails = ({ extensionId, onBack }) => {
  const isCF = extensionId === 'cf-power-tools';
  const title = isCF ? 'CF Power Tools' : 'CP Contest Tracker';
  const tagline = isCF 
    ? 'Injects a powerful analytics dashboard into any Codeforces profile page with efficiency meters, tag power radars, heatmaps, and personalized recommendations.'
    : 'Track upcoming competitive programming contests from Codeforces, CodeChef, LeetCode, AtCoder, HackerRank, HackerEarth, Toph, and GeeksforGeeks. Sync to Google Calendar.';

  const storeUrl = EXTENSION_LINKS[extensionId] || '#';

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
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 md:py-12 flex flex-col gap-8 w-full">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center pb-4 border-b border-charcoal">
          <button
            onClick={onBack}
            className="text-sm font-sans text-muted-gray hover:text-off-white transition-colors cursor-pointer flex items-center gap-2"
          >
            ← Back to Home
          </button>
          <span className="text-sm font-mono text-neon-green uppercase tracking-widest font-semibold">
            Active Extension
          </span>
        </div>

        {/* Product Details Header with Right-Aligned CTA */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 text-left pb-4 border-b border-charcoal">
          <div className="flex flex-col gap-3 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight text-off-white">
              {title}
            </h1>
            <p className="text-lg text-muted-gray font-sans leading-relaxed">
              {tagline}
            </p>
          </div>
          <div className="shrink-0 sm:pt-1">
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-off-white text-rich-black font-sans font-semibold text-sm rounded-lg hover:bg-neon-green hover:text-black transition-all cursor-pointer shadow-md whitespace-nowrap"
            >
              Add to Chrome
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start text-left pt-2">
          
          {/* Features Column */}
          <div className="flex flex-col gap-8">
            <h3 className="text-sm font-sans text-muted-gray uppercase tracking-widest font-semibold">
              Core Capabilities
            </h3>
            <ul className="space-y-6">
              {features.map((feature, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-neon-green font-semibold text-sm pt-0.5">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="font-sans font-semibold text-base text-off-white">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-gray leading-relaxed mt-1 font-sans">
                      {feature.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Preview & Specs */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-sm font-sans text-muted-gray uppercase tracking-widest font-semibold mb-4">
                Preview
              </h3>
              <div className="bg-card-bg border border-charcoal rounded-xl p-4">
                {isCF ? <BrowserMockup /> : <NodePipeline />}
              </div>
            </div>

            <div className="bg-card-bg border border-charcoal rounded-xl p-6 flex flex-col gap-4">
              <h3 className="text-sm font-sans text-muted-gray uppercase tracking-widest font-semibold">
                Extension Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm font-sans">
                <div>
                  <span className="text-muted-gray block mb-1">Manifest Version</span>
                  <span className="text-off-white font-medium">Manifest V3</span>
                </div>
                <div>
                  <span className="text-muted-gray block mb-1">Permissions</span>
                  <span className="text-off-white font-medium">
                    {isCF ? 'Storage, Host URLs' : 'Storage, Identity'}
                  </span>
                </div>
                <div>
                  <span className="text-muted-gray block mb-1">Core Architecture</span>
                  <span className="text-off-white font-medium">Event Background Service</span>
                </div>
                <div>
                  <span className="text-muted-gray block mb-1">Target Platform</span>
                  <span className="text-off-white font-medium">Chromium Browsers</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ExtensionDetails;
