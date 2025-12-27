import React, { useState, useEffect, useCallback, memo } from 'react';
import { CollegeLogoIcon } from './icons/CollegeLogoIcon';
import { HomeIcon } from './icons/HomeIcon';
import { ProjectsIcon } from './icons/ProjectsIcon';
import { ActivitiesIcon } from './icons/ActivitiesIcon';
import { ScholarshipsIcon } from './icons/ScholarshipsIcon';
import { ProfessorsIcon } from './icons/ProfessorsIcon';
import { EmailGuideIcon } from './icons/EmailGuideIcon';
import { BlogIcon } from './icons/BlogIcon';
import { EssayEditorIcon } from './icons/EssayEditorIcon';
import { CloseIcon } from './icons/CloseIcon';

interface NavItem {
  name: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: 'Home', icon: HomeIcon },
  { name: 'Projects', icon: ProjectsIcon },
  { name: 'Activities', icon: ActivitiesIcon },
  { name: 'Scholarships', icon: ScholarshipsIcon },
  { name: 'Professors', icon: ProfessorsIcon },
  { name: 'Email', icon: EmailGuideIcon },
  { name: 'Essay', icon: EssayEditorIcon },
  { name: 'Blog', icon: BlogIcon },
];

const NavLink = memo(
  ({
    item,
    isActive,
    onClick,
    isMobile = false,
  }: {
    item: NavItem;
    isActive: boolean;
    onClick: (e: React.MouseEvent) => void;
    isMobile?: boolean;
  }) => (
    <li className={isMobile ? "w-full" : "flex-shrink-0"}>
      <a
        href="#"
        onClick={onClick}
        className={`relative flex items-center gap-3 px-4 py-3 text-[11px] font-black tracking-widest uppercase transition-all duration-200 ${
          isActive ? 'text-white' : 'text-gray-400/70 hover:text-white'
        } ${!isMobile ? 'py-2 px-4 text-[10px]' : ''}`}
      >
        {isActive && (
          <>
            <div className="absolute inset-0 bg-purple-500/5 rounded-lg border border-purple-500/50 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.3)] animate-pulse-slow" />
            <div className={`absolute left-2 right-2 h-0.5 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] ${isMobile ? 'bottom-1' : '-bottom-1.5'}`} />
          </>
        )}
        <div className="relative z-10 flex items-center gap-2">
          <item.icon
            className={`h-4 w-4 ${
              isActive ? 'text-purple-400 drop-shadow-[0_0_3px_rgba(168,85,247,0.6)]' : 'text-current'
            } ${!isMobile ? 'h-3.5 w-3.5' : ''}`}
          />
          <span>{item.name}</span>
        </div>
      </a>
    </li>
  )
);

const Header: React.FC<{ activePage: string; onNavigate: (p: string) => void }> = ({
  activePage,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = useCallback(
    (page: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      const target = page === 'Email' ? 'Email Guide' : page === 'Essay' ? 'Essay Editor' : page;
      onNavigate(target);
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [onNavigate]
  );

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0a1128]/98 backdrop-blur-2xl border-white/10 py-1 shadow-2xl'
          : 'bg-[#0a1128]/90 xl:bg-[#0a1128]/40 backdrop-blur-xl xl:backdrop-blur-md border-white/5 py-3'
      }`}
      style={{ fontFamily: "'Calibri',sans-serif" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 gap-4">
          {/* Logo */}
          <div onClick={() => onNavigate('Home')} className="flex items-center gap-2 cursor-pointer flex-shrink-0 group">
            <div className="p-1.5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-lg group-hover:scale-105 transition-transform">
              <CollegeLogoIcon className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-base font-black tracking-tighter text-white">COLLEGEXCEL</h1>
          </div>

          {/* Desktop Nav - only xl+ */}
          <nav className="hidden xl:block flex-grow">
            <ul className="flex items-center justify-end space-x-1">
              {navItems.map((i) => (
                <NavLink
                  key={i.name}
                  item={i}
                  isActive={
                    activePage ===
                    (i.name === 'Email' ? 'Email Guide' : i.name === 'Essay' ? 'Essay Editor' : i.name)
                  }
                  onClick={handleNav(i.name)}
                />
              ))}
            </ul>
          </nav>

          {/* Mobile Toggle Button - below xl */}
          <div className="xl:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white/70 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <div className="flex flex-col gap-1 items-center justify-center w-6 h-6">
                  <div className="w-1 h-1 bg-current rounded-full" />
                  <div className="w-1 h-1 bg-current rounded-full" />
                  <div className="w-1 h-1 bg-current rounded-full" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="bg-[#0a1128]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl p-4">
            <nav>
              <ul className="flex flex-col gap-1">
                {navItems.map((i) => (
                  <NavLink
                    key={i.name}
                    item={i}
                    isMobile={true}
                    isActive={
                      activePage ===
                      (i.name === 'Email' ? 'Email Guide' : i.name === 'Essay' ? 'Essay Editor' : i.name)
                    }
                    onClick={handleNav(i.name)}
                  />
                ))}
              </ul>
            </nav>
          </div>
          {/* Backdrop Blur closer for contrast */}
          <div 
            className="fixed inset-0 top-[100%] h-screen bg-black/40 backdrop-blur-sm -z-10"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}

      <style>
        {`
          @keyframes pulse-slow { 0%,100%{opacity:1}50%{opacity:0.7} }
          .animate-pulse-slow { animation: pulse-slow 3s cubic-bezier(0.4,0,0.6,1) infinite; }
        `}
      </style>
    </header>
  );
};

export default memo(Header);
