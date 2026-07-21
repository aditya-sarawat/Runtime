const Header = ({ theme, toggleTheme, onBrandClick, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-rich-black/80 backdrop-blur-md border-b border-charcoal transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between py-3 select-none">
        
        {/* Brand Logo */}
        <div 
          onClick={onBrandClick}
          className="flex items-center gap-1.5 cursor-pointer group"
        >
          <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-off-white uppercase">
            RUNTIME<span className="text-neon-green font-black">.</span>
          </span>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-sans tracking-wide">
          <button 
            onClick={() => onNavigate('about')} 
            className="text-muted-gray hover:text-off-white transition-colors duration-200 cursor-pointer font-medium"
          >
            About
          </button>
          <button 
            onClick={() => onNavigate('solutions')} 
            className="text-muted-gray hover:text-off-white transition-colors duration-200 cursor-pointer font-medium"
          >
            Extensions
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-muted-gray hover:text-off-white transition-colors duration-200 cursor-pointer flex items-center gap-1 font-medium px-1.5 sm:px-2 py-1 rounded-md hover:bg-muted-gray/10"
            title="Toggle theme mode"
          >
            <span className="hidden xs:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            <span className="text-sm sm:text-base font-semibold">{theme === 'dark' ? '☼' : '☾'}</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => onNavigate('feedback')}
            className="px-2.5 sm:px-3.5 py-1.5 bg-off-white text-rich-black hover:bg-neon-green hover:text-black transition-all duration-200 text-xs sm:text-sm font-semibold rounded-md cursor-pointer whitespace-nowrap"
          >
            Feedback →
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;

