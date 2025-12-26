import React, { useState, useEffect, useCallback, memo } from 'react';
import { CollegeLogoIcon } from './icons/CollegeLogoIcon';
import { HomeIcon } from './icons/HomeIcon';
import { ProjectsIcon } from './icons/ProjectsIcon';
import { ActivitiesIcon } from './icons/ActivitiesIcon';
import { ScholarshipsIcon } from './icons/ScholarshipsIcon';
import { ProfessorsIcon } from './icons/ProfessorsIcon';
import { EmailGuideIcon } from './icons/EmailGuideIcon';
import { BlogIcon } from './icons/BlogIcon';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';
import { EssayEditorIcon } from './icons/EssayEditorIcon';

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
  { name: 'Email Guide', icon: EmailGuideIcon },
  { name: 'Essay Editor', icon: EssayEditorIcon },
  { name: 'Blog', icon: BlogIcon },
];

const NavLink = memo(
  ({
    item,
    isActive,
    onClick,
  }: {
    item: NavItem;
    isActive: boolean;
    onClick: (e: React.MouseEvent) => void;
  }) => (
    <li className="flex justify-center">
      <a
        href="#"
        onClick={onClick}
        className={`relative group flex items-center gap-2 px-3 py-2 text-[10px] font-black tracking-widest uppercase transition-all duration-200 ${
          isActive ? 'text-white' : 'text-gray-400/80 hover:text-white'
        }`}
      >
        {isActive && (
          <div className="absolute inset-0 bg-white/5 rounded-lg border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.1)]" />
        )}
        <div className="relative z-10 flex items-center gap-1.5">
          <item.icon
            className={`h-3.5 w-3.5 ${
              isActive
                ? 'text-purple-400 drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]'
                : 'text-current group-hover:text-purple-300'
            }`}
          />
          <span>{item.name}</span>
        </div>
        {isActive && (
          <div className="absolute -bottom-0.5 left-3 right-3 h-[1.5px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
        )}
      </a>
    </li>
  )
);

const Header: React.FC<{ activePage: string; onNavigate: (p: string) => void }> = ({
  activePage,
  onNavigate,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 15;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNav = useCallback(
    (page: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      onNavigate(page);
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [onNavigate]
  );

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#030712]/95 backdrop-blur-2xl border-white/10 py-1.5 shadow-2xl'
          : 'bg-[#030712]/85 xl:bg-[#030712]/40 backdrop-blur-xl xl:backdrop-blur-md border-white/5 py-3'
      }`}
      style={{ fontFamily: "'Calibri',sans-serif" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10 gap-2">
          <div onClick={() => onNavigate('Home')} className="flex items-center gap-3 cursor-pointer group">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-lg group-hover:scale-105 transition-transform">
              <CollegeLogoIcon className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-black tracking-tighter text-white leading-none">COLLEGEXA</h1>
              <p className="text-[7px] text-purple-400 font-bold tracking-[0.3em] uppercase mt-0.5 opacity-80">
                EST. 2025
              </p>
            </div>
          </div>

          <nav className="hidden xl:block">
            <ul className="flex items-center space-x-0.5">
              {navItems.map((i) => (
                <NavLink
                  key={i.name}
                  item={i}
                  isActive={activePage === i.name}
                  onClick={handleNav(i.name)}
                />
              ))}
            </ul>
          </nav>

          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              aria-label="Menu"
            >
              {isMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden bg-[#030712]/98 backdrop-blur-3xl absolute top-full left-0 w-full border-b border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="p-6 space-y-3">
            {navItems.map((i) => (
              <NavLink
                key={i.name}
                item={i}
                isActive={activePage === i.name}
                onClick={handleNav(i.name)}
              />
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default memo(Header);
