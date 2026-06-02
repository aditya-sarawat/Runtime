import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SolutionsGrid from './components/SolutionsGrid';
import ExtensionDetails from './components/ExtensionDetails';
import InstallModal from './components/InstallModal';
import LoadingScreen from './components/LoadingScreen';
import FeedbackForm from './components/FeedbackForm';
import About from './components/About';
import TermsOfService from './components/TermsOfService';
import ThemeTransition from './components/ThemeTransition';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      const media = window.matchMedia('(prefers-color-scheme: light)');
      if (media.matches) return 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const [themeTransition, setThemeTransition] = useState(null);

  const toggleTheme = () => {
    if (themeTransition) return; // Prevent double-triggering

    const target = theme === 'dark' ? 'light' : 'dark';
    
    // 1. Trigger cover block transition
    setThemeTransition({ target, stage: 'covering' });

    // 2. Swap theme halfway (at 350ms) and trigger uncover transition
    setTimeout(() => {
      setTheme(target);
      setThemeTransition({ target, stage: 'uncovering' });
    }, 350);

    // 3. Clear transition (at 750ms) to clean up DOM
    setTimeout(() => {
      setThemeTransition(null);
    }, 750);
  };

  return (
    <Router>
      {themeTransition && (
        <ThemeTransition 
          stage={themeTransition.stage} 
          targetTheme={themeTransition.target} 
        />
      )}
      <AppContent theme={theme} toggleTheme={toggleTheme} />
    </Router>
  );
}

function AppContent({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalExtension, setModalExtension] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Automatically scroll to the top of the page on route/path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleDownload = (extId) => {
    setModalExtension(extId);
    setModalOpen(true);
  };

  const handleNavigate = (sectionId) => {
    if (sectionId === 'feedback') {
      navigate('/feedback');
      return;
    }
    if (sectionId === 'about') {
      navigate('/about');
      return;
    }
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className="min-h-screen bg-rich-black text-off-white flex flex-col relative transition-colors duration-300">
      
      {/* Background CAD-grid Overlay pattern */}
      <div className="absolute inset-0 cad-grid pointer-events-none opacity-50 z-0"></div>

      {/* 1. UTILITY NAVIGATION BAR */}
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onBrandClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        onNavigate={handleNavigate}
      />

      {/* Main Structural Layout Wrapper */}
      <main className="flex-grow z-10 w-full flex flex-col">
        <Routes>
          <Route path="/" element={
            <>
              {/* 2. HERO ENGINE SECTION */}
              <Hero />

              {/* 3. SOLUTIONS & TOOLS GRID */}
              <SolutionsGrid 
                onDownload={handleDownload} 
                onMoreInfo={(extId) => navigate(`/${extId}`)} 
              />
            </>
          } />

          <Route path="/cf-power-tools" element={
            <ExtensionDetails 
              extensionId="cf-power-tools" 
              onBack={() => navigate('/')} 
              onDownload={handleDownload} 
            />
          } />

          <Route path="/cp-contest-tracker" element={
            <ExtensionDetails 
              extensionId="cp-contest-tracker" 
              onBack={() => navigate('/')} 
              onDownload={handleDownload} 
            />
          } />

          <Route path="/feedback" element={
            <FeedbackForm onBack={() => navigate('/')} />
          } />

          <Route path="/about" element={
            <About onBack={() => navigate('/')} />
          } />

          <Route path="/terms" element={
            <TermsOfService onBack={() => navigate('/')} />
          } />
        </Routes>
      </main>

      {/* Spacer Grid Divider to separate Body and Footer */}
      <div className="h-12 md:h-20 border-b border-charcoal relative bg-panel-header/10 flex items-center px-6 md:px-12 select-none pointer-events-none transition-colors duration-300">
        <span className="font-mono text-[11px] text-muted-gray/50 uppercase tracking-widest">// TERMINAL_END // ROUTE_TO_FOOTER_INTERFACE</span>
      </div>

      {/* 4. SYSTEMATIC FOOTER */}
      <Footer />

      {/* 5. INSTALLATION GUIDE MODAL */}
      <InstallModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        extensionName={modalExtension} 
      />

    </div>
    </>
  );
}

export default App;
