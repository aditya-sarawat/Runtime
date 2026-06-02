import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';
import Crosshair from './Crosshair';
import DelhiClock from './DelhiClock';

const Footer = () => {
  return (
    <footer className="border-t border-charcoal bg-rich-black mt-auto relative z-10 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative">
        
        {/* Column 1: Products */}
        <div className="border-b lg:border-b-0 md:border-r border-charcoal p-8 lg:p-12 flex flex-col justify-between relative">
          <Crosshair position="bottom-right" />
          <div>
            <span className="font-mono text-[11px] text-muted-gray uppercase tracking-widest block mb-6 select-none">// PRODUCTS</span>
            <ul className="space-y-3 font-mono text-xs">
              <li><a href="#solutions" className="text-muted-gray hover:text-neon-green transition-colors duration-200">CHROME EXTENSIONS</a></li>
            </ul>
          </div>
          <div className="mt-12 font-mono text-[11px] text-muted-gray/70 select-none">
            DEPD: STACK_OK
          </div>
        </div>

        {/* Column 2: Corporate */}
        <div className="border-b lg:border-b-0 lg:border-r border-charcoal p-8 lg:p-12 flex flex-col justify-between relative">
          <Crosshair position="bottom-right" />
          <div>
            <span className="font-mono text-[11px] text-muted-gray uppercase tracking-widest block mb-6 select-none">// CORPORATE</span>
            <ul className="space-y-3 font-mono text-xs">
              <li><Link to="/about" className="text-muted-gray hover:text-neon-green transition-colors duration-200">ABOUT US</Link></li>
              <li><Link to="/terms" className="text-muted-gray hover:text-neon-green transition-colors duration-200">TERMS OF SERVICE</Link></li>
              <li><a href="#privacy" className="text-muted-gray hover:text-neon-green transition-colors duration-200">PRIVACY PROTOCOL</a></li>
              <li><a href="#architecture" className="text-muted-gray hover:text-neon-green transition-colors duration-200">ARCHITECTURE LOG</a></li>
              <li><a href="#ssh" className="text-muted-gray hover:text-neon-green transition-colors duration-200">SECURITY/SSH KEY</a></li>
            </ul>
          </div>
          <div className="mt-12 font-mono text-[11px] text-muted-gray/70 select-none">
            COMP: FEDRAMP_NIST
          </div>
        </div>

        {/* Column 3: Identity/Time & Newsletter Form */}
        <div id="newsletter" className="p-8 lg:p-12 flex flex-col justify-between relative">
          <div>
            <span className="font-mono text-[11px] text-muted-gray uppercase tracking-widest block mb-4 select-none">// JOIN THE ARCHIVE</span>
            <NewsletterForm />
          </div>
          <div className="mt-12 font-mono text-[11px] text-muted-gray/70 select-none">
            DELHI, IN // LOC: 28.6139° N, 77.2090° E
          </div>
        </div>

      </div>

      {/* Absolute Bottom full-width footer statement */}
      <div className="border-t border-charcoal py-6 px-8 lg:px-12 bg-panel-inner/40 transition-colors duration-300 relative flex flex-col sm:flex-row justify-between items-center gap-4 select-none">
        <Crosshair position="top-left" />
        <Crosshair position="top-right" />
        <p className="text-[10px] sm:text-xs tracking-[0.25em] font-mono text-muted-gray uppercase text-center sm:text-left">
          © 2026 RUNTIME®. SIMPLICITY THROUGH RADICAL ENGINEERING.
        </p>
        <div className="text-[10px] sm:text-xs font-mono text-muted-gray uppercase flex items-center gap-1.5">
          <span>DELHI_SYS //</span>
          <DelhiClock minimal={true} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
