
import React, { useState, useEffect } from 'react';
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

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink: React.FC<{ item: NavItem }> = ({ item }) => {
    const isActive = activePage === item.name;
    return (
      <li className="flex justify-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.name);
            setIsMenuOpen(false);
          }}
          className={`relative group flex items-center gap-2 px-4 py-2.5 text-[10px] font-black tracking-[0.15em] uppercase transition-all duration-300 ${
            isActive ? 'text-white' : 'text-gray-400/80 hover:text-white'
          }`}
        >
          {isActive && (
            <div className="absolute inset-0 bg-white/5 rounded-lg border border-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.15)]"></div>
          )}
          {!isActive && (
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-all duration-300"></div>
          )}
          <div className="relative z-10 flex items-center gap-2">
            <item.icon className={`h-3.5 w-3.5 transition-all duration-300 ${isActive ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]' : 'text-current group-hover:text-purple-300'}`} />
            <span>{item.name}</span>
          </div>
          {isActive && (
            <div className="absolute -bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.9)]"></div>
          )}
        </a>
      </li>
    );
  };

  return (
    <header 
      style={{ fontFamily: "'Calibri', 'Candara', 'Segoe UI', 'Optima', 'Arial', sans-serif" }}
      className={`sticky top-0 z-[100] w-full transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-[#030712]/90 backdrop-blur-2xl border-white/10 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.6)]' 
          : 'bg-[#030712]/50 backdrop-blur-xl border-white/5 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 gap-4">
          {/* Logo Section */}
          <div 
            onClick={() => onNavigate('Home')} 
            className="flex items-center gap-4 flex-shrink-0 cursor-pointer group"
          >
            <div className="p-2.5 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-xl shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-[0_0_35px_rgba(124,58,237,0.7)]">
              <CollegeLogoIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-200 leading-none transition-all duration-500 group-hover:tracking-normal">
                COLLEGEXA
              </h1>
              <p className="text-[8px] text-purple-400 font-black tracking-[0.4em] uppercase leading-tight mt-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                EXCELLENCE EST. 2025
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:block">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </ul>
          </nav>

          {/* Right Section / Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="xl:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 text-gray-400 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 active:scale-90"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <CloseIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-[#030712]/98 backdrop-blur-3xl absolute top-full left-0 w-full border-b border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-500 overflow-hidden">
          <div className="max-h-[80vh] overflow-y-auto">
            <ul className="flex flex-col p-8 space-y-4">
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
              <li className="pt-6 border-t border-white/5">
                <button 
                  onClick={() => {onNavigate('Projects'); setIsMenuOpen(false);}}
                  className="w-full py-4 text-center text-xs font-black uppercase tracking-widest bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white shadow-xl hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  Explore Platform
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
