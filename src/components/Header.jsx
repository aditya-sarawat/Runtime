import Crosshair from './Crosshair';

const Header = ({ theme, toggleTheme, onBrandClick, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-rich-black/90 backdrop-blur-md border-b border-charcoal transition-colors duration-300">
      <div className="grid grid-cols-2 md:grid-cols-3 w-full relative">
        
        {/* Brand */}
        <div 
          onClick={onBrandClick}
          className="flex items-center px-6 py-3.5 border-r border-charcoal select-none relative cursor-pointer"
        >
          <Crosshair position="bottom-right" />
          <span className="font-sans font-black text-base sm:text-lg tracking-tighter text-off-white uppercase">
            RUNTIME<span className="font-mono text-xs align-super text-muted-gray ml-0.5">®</span>
          </span>
        </div>

        {/* Directory & Theme Toggle (Hidden on Mobile) */}
        <div className="hidden md:flex items-center justify-center px-6 py-3.5 border-r border-charcoal select-none relative">
          <Crosshair position="bottom-right" />
          <div className="font-mono text-xs tracking-widest font-bold uppercase text-muted-gray flex items-center gap-3">
            <button 
              onClick={() => onNavigate('about')} 
              className="hover:text-neon-green transition-colors duration-200 cursor-pointer font-bold"
            >
              ABOUT US
            </button>
            <span className="text-charcoal select-none font-normal font-bold">//</span>
            <button 
              onClick={() => onNavigate('solutions')} 
              className="hover:text-neon-green transition-colors duration-200 cursor-pointer font-bold"
            >
              EXTENSIONS
            </button>
            <span className="text-charcoal select-none font-normal font-bold">//</span>
            <button
              onClick={toggleTheme}
              className="group hover:text-neon-green transition-colors duration-200 uppercase font-bold cursor-pointer text-neon-green flex items-center gap-1"
              title="Toggle visual style"
            >
              [ SYS_MODE: {theme === 'dark' ? 'DARK' : 'LIGHT'} // <span className="inline-block group-hover:rotate-180 transition-transform duration-300 font-bold">{theme === 'dark' ? '◑' : '◐'}</span> ]
            </button>
          </div>
        </div>

        {/* CTA & Mobile Theme Toggle Button */}
        <div className="flex items-stretch justify-end p-0 h-full relative">
          <button
            onClick={toggleTheme}
            className="group md:hidden flex items-center justify-center px-4 border-l border-charcoal text-xs text-neon-green font-mono cursor-pointer gap-1.5"
          >
            MODE: {theme === 'dark' ? 'DARK' : 'LIGHT'} <span className="inline-block group-hover:rotate-180 transition-transform duration-300 font-bold">{theme === 'dark' ? '◑' : '◐'}</span>
          </button>
          <button
            onClick={() => onNavigate('feedback')}
            className="w-full h-full flex items-center justify-end px-6 py-3.5 bg-transparent hover:bg-neon-green text-off-white hover:text-black transition-all duration-300 font-mono text-[10px] md:text-xs tracking-wider font-bold uppercase select-none border-l border-charcoal md:border-l-0 cursor-pointer"
          >
            FEEDBACK / FEATURE REQUEST →
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
