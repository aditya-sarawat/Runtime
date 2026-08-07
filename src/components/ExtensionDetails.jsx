import BrowserMockup from './BrowserMockup';
import NodePipeline from './NodePipeline';
import { EXTENSION_LINKS } from '../constants/extensions';

const ExtensionDetails = ({ extensionId, onBack }) => {
  const isCF = extensionId === 'cf-power-tools';
  const title = isCF ? 'CF Power Tools' : 'CP Contest Tracker';
  const version = 'v1.0.1';
  const tagline = isCF 
    ? 'Injects an analytics dashboard into Codeforces profiles with efficiency meters, tag power radars, heatmaps, and recommendations.'
    : 'Track upcoming competitive programming contests from Codeforces, CodeChef, LeetCode, AtCoder & more. Sync with Google Calendar.';

  const storeUrl = EXTENSION_LINKS[extensionId] || '#';

  const features = isCF ? [
    {
      title: 'Profile Dashboard Overlay',
      desc: 'Injects real-time analytics widgets, problem distribution heatmaps, and rating progress metrics directly into Codeforces profile pages.'
    },
    {
      title: 'Tag Power Radar & Topic Breakdown',
      desc: 'Visualizes your strength profile across key programming topics (DP, Math, Graphs, Data Structures, Greedy, Strings) using interactive radar charts.'
    },
    {
      title: 'Shadow Mode Rival Tracking',
      desc: 'Enables head-to-head tracking against any rival handle with rating differential bars, win/loss stats, and gap analysis.'
    },
    {
      title: 'AI Problem Recommendations',
      desc: 'Recommends targeted practice problems using OpenAI & Google Gemini API integrations based on active tag performance gaps.'
    },
    {
      title: 'AC Stopwatch & Zen Mode',
      desc: 'Inbuilt timer that tracks solve duration per problem with auto-stop on AC, plus Zen Mode spoiler blockers for tags and ratings during practice.'
    },
    {
      title: 'MathJax & LaTeX Rendering',
      desc: 'Integrated MathJax helper scripts for rendering math formulas and LaTeX equations seamlessly across Codeforces problem statements.'
    }
  ] : [
    {
      title: 'Google Calendar Auto-Sync',
      desc: 'Seamless OAuth 2.0 Google Calendar integration that automatically syncs upcoming contest schedules with customizable event reminders.'
    },
    {
      title: '8 Multi-Platform Aggregation',
      desc: 'Consolidated contest feeds across 8 platforms: Codeforces, CodeChef, LeetCode, AtCoder, HackerRank, HackerEarth, Toph, and GeeksforGeeks.'
    },
    {
      title: 'Desktop Notification Alerts',
      desc: 'Native Chrome browser desktop notifications powered by background timers with customizable alert offsets before contests start.'
    },
    {
      title: 'Background Alarm Refresh Engine',
      desc: 'Chrome Alarm service worker that periodically polls Contest Hive and CLIST APIs to refresh and cache upcoming events silently.'
    },
    {
      title: 'Customizable Cockpit & Filters',
      desc: 'Multi-slide setup panel allowing users to toggle specific platforms, adjust refresh intervals (15m to 6h), and tune reminder timing.'
    },
    {
      title: 'Offline Event Caching',
      desc: 'Caches fetched contest schedules in Chrome local storage for instant loading and uninterrupted offline access.'
    }
  ];

  const specifications = isCF ? [
    { label: 'Version', value: version },
    { label: 'Manifest Version', value: 'Manifest V3' },
    { label: 'Core Permissions', value: 'storage' },
    { label: 'Host Permissions', value: 'codeforces.com, api.openai.com, generativelanguage.googleapis.com' },
    { label: 'Core Architecture', value: 'Content Script Injector & Service Worker' },
    { label: 'Target Platform', value: 'Chromium Browsers (Chrome, Edge, Brave)' }
  ] : [
    { label: 'Version', value: version },
    { label: 'Manifest Version', value: 'Manifest V3' },
    { label: 'Core Permissions', value: 'storage, identity, alarms, notifications' },
    { label: 'Host Permissions', value: 'contest-hive.vercel.app, clist.by, googleapis.com' },
    { label: 'OAuth 2.0 Scopes', value: 'calendar.events, userinfo.email' },
    { label: 'Target Platform', value: 'Chromium Browsers (Chrome, Edge, Brave)' }
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
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-gray px-2 py-0.5 rounded border border-charcoal bg-card-bg">
              {version}
            </span>
            <span className="text-sm font-mono text-neon-green uppercase tracking-widest font-semibold">
              Active Extension
            </span>
          </div>
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
              Core Capabilities & Features
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
                Interactive Preview
              </h3>
              <div className="bg-card-bg border border-charcoal rounded-xl p-4">
                {isCF ? <BrowserMockup /> : <NodePipeline />}
              </div>
            </div>

            <div className="bg-card-bg border border-charcoal rounded-xl p-6 flex flex-col gap-4">
              <h3 className="text-sm font-sans text-muted-gray uppercase tracking-widest font-semibold">
                Extension Specifications (Manifest V3)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans">
                {specifications.map((spec, idx) => (
                  <div key={idx} className={spec.value.length > 30 ? 'sm:col-span-2' : ''}>
                    <span className="text-muted-gray block mb-1">{spec.label}</span>
                    <span className="text-off-white font-medium font-mono text-xs break-all sm:break-normal">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ExtensionDetails;

