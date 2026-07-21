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
    
    // 1. Trigger cover fade
    setThemeTransition({ target, stage: 'covering' });

    // 2. Swap theme halfway (at 250ms) and trigger uncover fade
    setTimeout(() => {
      setTheme(target);
      setThemeTransition({ target, stage: 'uncovering' });
    }, 250);

    // 3. Clear transition (at 550ms)
    setTimeout(() => {
      setThemeTransition(null);
    }, 550);
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

      {/* 1. NAVIGATION BAR */}
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
              {/* 2. HERO SECTION */}
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

      {/* 4. FOOTER */}
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
