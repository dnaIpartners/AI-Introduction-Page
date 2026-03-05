
import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  onNavigate: (page: any) => void;
  isDark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, isDark = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ABOUTS', page: 'about' }
  ];

  const handleMobileNavigate = (page: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page);
  };

  const handleDesktopNavigate = (page: string) => {
    onNavigate(page);
  };

  const isInverse = isDark && !isMobileMenuOpen;
  const textColor = isInverse ? 'text-white' : 'text-black';
  const textColorMuted = isInverse ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black';
  const bgColor = isInverse ? 'bg-white' : 'bg-black';
  const btnClass = isInverse ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800';
  
  const navBg = isScrolled
    ? (isDark ? 'bg-black/50 backdrop-blur-md border-b border-white/10 shadow-sm py-4' : 'bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm py-4')
    : 'bg-transparent py-6 md:py-8';

  return (
    <>
      <nav ref={navRef} className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${navBg}`}>
        <div className="px-6 md:px-12 flex justify-between items-center relative z-[101]">
          {/* Brand Logo Area */}
          <div className="flex items-center gap-2.5 cursor-pointer select-none" onClick={() => handleDesktopNavigate('about')}>
            <div className={`w-3.5 h-3.5 rounded-full ${bgColor} transition-colors duration-500`}></div>
            <span className={`text-[20px] font-medium tracking-tight ${textColor} transition-colors duration-500`}>
              IPARTNERS i-PIE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleDesktopNavigate(item.page)}
                className={`text-[15px] font-medium transition-colors duration-500 flex items-center gap-1 ${textColorMuted}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden md:block">
            <button 
              onClick={() => window.open('https://www.ipartners.co.kr', '_blank')}
              className={`px-6 py-2.5 text-[15px] font-medium rounded-full transition-all duration-500 ${btnClass}`}
            >
              IPARTNERS Co.
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${textColor} transition-colors duration-500`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[90] transition-all duration-500 flex flex-col justify-center px-8 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col gap-6">
          {navItems.map((item, idx) => (
            <div key={item.name} className="flex flex-col">
              <button
                onClick={() => handleMobileNavigate(item.page)}
                className={`text-4xl font-semibold tracking-tight text-left text-black hover:text-blue-600 transition-all duration-300 transform flex items-center gap-2 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item.name}
              </button>
            </div>
          ))}
          <div 
            className={`w-full h-px bg-black/10 my-6 transform ${isMobileMenuOpen ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-500 delay-300 origin-left`} 
          />
          <button 
            onClick={() => window.open('https://www.ipartners.co.kr', '_blank')}
            className={`text-lg font-medium text-black text-left transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-500 delay-500`}
          >
            IPARTNERS Co.
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
