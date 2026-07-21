import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';
import DelhiClock from './DelhiClock';

const Footer = () => {
  return (
    <footer className="border-t border-charcoal bg-rich-black mt-auto relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 sm:py-10 lg:py-12 flex flex-col gap-8 sm:gap-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Column 1: Products */}
          <div className="flex flex-col gap-3 text-left">
            <h4 className="text-sm font-sans font-semibold text-off-white uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 font-sans text-sm text-muted-gray">
              <li><a href="#solutions" className="hover:text-neon-green transition-colors duration-200">Chrome Extensions</a></li>
              <li><Link to="/cf-power-tools" className="hover:text-neon-green transition-colors duration-200">CF Power Tools</Link></li>
              <li><Link to="/cp-contest-tracker" className="hover:text-neon-green transition-colors duration-200">CP Contest Tracker</Link></li>
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-3 text-left">
            <h4 className="text-sm font-sans font-semibold text-off-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 font-sans text-sm text-muted-gray">
              <li><Link to="/about" className="hover:text-neon-green transition-colors duration-200">About Us</Link></li>
              <li><Link to="/terms" className="hover:text-neon-green transition-colors duration-200">Terms of Service</Link></li>
              <li><Link to="/feedback" className="hover:text-neon-green transition-colors duration-200">Feedback & Requests</Link></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div id="newsletter" className="flex flex-col gap-3 text-left">
            <h4 className="text-sm font-sans font-semibold text-off-white uppercase tracking-wider">
              Stay Updated
            </h4>
            <NewsletterForm />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-5 border-t border-charcoal flex flex-col sm:flex-row justify-between items-center gap-3 text-sm font-sans text-muted-gray select-none">
          <p>© 2026 RUNTIME. All rights reserved.</p>
          <div className="flex items-center gap-2 font-mono text-sm">
            <span>Delhi, IN</span>
            <span>•</span>
            <DelhiClock minimal={true} />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

