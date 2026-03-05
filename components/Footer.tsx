
import React from 'react';

interface FooterProps {
  onNavigate: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050505] px-6 md:px-12 py-16 text-white text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Section */}
        <div className="mb-12 md:mb-0">
          <h2 
            className="text-2xl font-black tracking-tighter mb-6 cursor-pointer hover:text-blue-500 transition-colors"
            onClick={() => onNavigate('home')}
          >
            IPARTNERS
          </h2>
          <div className="text-gray-500 space-y-1 leading-relaxed">
            <p>서울특별시 강남구 학동로 3길 10 (논현동) 아이타워</p>
            <p>T. 02-515-3134</p>
            <p>E. contact@ipartners.co.kr</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-gray-400 font-bold tracking-widest uppercase">
          <button onClick={() => onNavigate('about')} className="text-left hover:text-white transition-colors">ABOUT</button>
          <a href="#" className="text-left hover:text-white transition-colors">Facebook</a>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-left hover:text-white transition-colors">CONTACT</button>
          <a href="#" className="text-left hover:text-white transition-colors">Instagram</a>
          <div></div>
          <a href="#" className="text-left hover:text-white transition-colors">YouTube</a>
          <div></div>
          <a href="#" className="text-left hover:text-white transition-colors">Blog</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-6 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-600 font-bold tracking-widest uppercase">
        <p>© 2026 IPARTNERS ALL RIGHTS RESERVED.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-white transition-colors">이메일무단수집거부</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
