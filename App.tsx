
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutView from './components/views/AboutView';
import { Project } from './types';

type PageType = 'about';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('about');
  const [previousPage, setPreviousPage] = useState<PageType>('about');
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (page: PageType, data?: Project) => {
    setIsTransitioning(true);
    
    // Capture the page we are leaving to use as 'previousPage' if navigating to a detail view
    const sourcePage = currentPage;

    setTimeout(() => {
      // If going to a detail page, remember where we came from.
      // Otherwise, keep the previousPage as is (or logic could be adjusted if needed).
      if (['project-detail'].includes(page)) {
        setPreviousPage(sourcePage);
      }

      setCurrentPage(page);
      
      // Handle data passing based on page type
      if (page === 'project-detail' && data) {
        setSelectedProject(data as Project);
      }

      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 600);
  };

  // Determine if the current page has a dark background to adjust Navbar color
  const isDarkPage = currentPage === 'about';

  // Helper to generate back button label based on previous page
  const getBackLabel = (page: PageType) => {
    switch(page) {
        case 'about': return 'BACK TO TEAM';
        default: return 'BACK';
    }
  };

  const backLabel = getBackLabel(previousPage);

  return (
    <div className="relative min-h-screen selection:bg-black selection:text-white">
      {/* Page Transition Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-[100] transition-transform duration-700 ease-in-out ${isTransitioning ? 'translate-y-0' : 'translate-y-full'}`}
      />

      {/* Background grain effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999]">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100" height="100" filter="url(#noise)" />
        </svg>
      </div>

      <Navbar onNavigate={navigateTo} isDark={isDarkPage} />
      
      <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {currentPage === 'about' && (
          <AboutView />
        )}
      </div>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
