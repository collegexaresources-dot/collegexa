
import React, { useState, memo, useCallback } from 'react';
import { CollegeLogoIcon } from './icons/CollegeLogoIcon';

const FORMSPREE_ID = "xjgvkvqj";

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleNavigate = useCallback((page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
  }, [onNavigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_ID) return;

    setStatus('submitting');
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      if (response.ok) {
        setStatus('success');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-[#030712]/60 backdrop-blur-xl border-t border-purple-500/20 mt-auto shadow-[0_-5px_25px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                  <CollegeLogoIcon className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-base font-black tracking-widest text-white">COLLEGEXA</h1>
              </div>
            <p className="text-sm text-purple-200/60 max-w-sm leading-relaxed">
              Empowering the next generation of leaders through innovative tools and connections.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-black tracking-[0.2em] text-white uppercase mb-6 opacity-80">Quick Access</h3>
            <ul className="space-y-3">
              {['Projects', 'Activities', 'Scholarships', 'Blog'].map(page => (
                <li key={page}>
                  <button onClick={handleNavigate(page === 'Blog' ? 'Blog' : page)} className="text-sm text-purple-200/50 hover:text-white transition-all duration-300">
                    {page === 'Blog' ? 'Resource Hub' : page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black tracking-[0.2em] text-white uppercase mb-6 opacity-80">Impact Stats</h3>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-lg font-bold text-cyan-400">300+</span> 
                <span className="text-[10px] uppercase tracking-widest text-purple-200/40">Project Roadmaps</span>
              </li>
              <li className="flex flex-col">
                <span className="text-lg font-bold text-purple-400">100+</span> 
                <span className="text-[10px] uppercase tracking-widest text-purple-200/40">Active Scholarships</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black tracking-[0.2em] text-white uppercase mb-6 opacity-80">Share Feedback</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email" required placeholder="Email Address" value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500/40 transition-all"
              />
              <textarea
                required placeholder="How can we improve?" rows={3} value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500/40 transition-all resize-none"
              />
              <button
                type="submit" disabled={status === 'submitting'}
                className={`w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                  status === 'success' 
                  ? 'bg-green-500/20 border border-green-500/40 text-green-400' 
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:brightness-110 active:scale-95'
                }`}
              >
                {status === 'idle' && 'Send Feedback'}
                {status === 'submitting' && 'Sending...'}
                {status === 'success' && 'Success!'}
                {status === 'error' && 'Error Occurred'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-purple-200/30 text-center sm:text-left">
            &copy; 2025 CollegeXa — The Student Success Standard.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
