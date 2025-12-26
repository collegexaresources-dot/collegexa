import React, { useState, memo, useCallback } from 'react';
import { CollegeLogoIcon } from './icons/CollegeLogoIcon';

const FORMSPREE_ID = "xjgvkvqj";

const Footer: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleNav = useCallback((p: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(p);
  }, [onNavigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_ID) return;
    setStatus('submitting');
    try {
      const r = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message: msg }),
      });
      if (r.ok) {
        setStatus('success');
        setEmail(''); setMsg('');
        setTimeout(() => setStatus('idle'), 5000);
      } else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <footer className="bg-[#030712]/60 backdrop-blur-xl border-t border-purple-500/20 mt-auto shadow-[0_-5px_25px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-lg">
                  <CollegeLogoIcon className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-base font-black tracking-widest text-white">COLLEGEXA</h1>
              </div>
            <p className="text-sm text-purple-200/60 leading-relaxed">Empowering the next generation of leaders through innovative tools and connections.</p>
          </div>
          <div>
            <h3 className="text-xs font-black tracking-widest text-white uppercase mb-6 opacity-80">Quick Access</h3>
            <ul className="space-y-3">
              {['Projects', 'Activities', 'Scholarships', 'Blog'].map(p => (
                <li key={p}><button onClick={handleNav(p)} className="text-sm text-purple-200/50 hover:text-white transition-all">{p === 'Blog' ? 'Resource Hub' : p}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-black tracking-widest text-white uppercase mb-6 opacity-80">Impact Stats</h3>
            <ul className="space-y-4">
              <li className="flex flex-col"><span className="text-lg font-bold text-cyan-400">300+</span><span className="text-[10px] uppercase tracking-widest text-purple-200/40">Roadmaps</span></li>
              <li className="flex flex-col"><span className="text-lg font-bold text-purple-400">100+</span><span className="text-[10px] uppercase tracking-widest text-purple-200/40">Scholarships</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-black tracking-widest text-white uppercase mb-6 opacity-80">Feedback</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500/40 transition-all"/>
              <textarea required placeholder="Improvement ideas?" rows={2} value={msg} onChange={e => setMsg(e.target.value)} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500/40 transition-all resize-none"/>
              <button type="submit" disabled={status==='submitting'} className={`w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${status==='success'?'bg-green-500/20 text-green-400':'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:brightness-110'}`}>
                {status==='idle'?'Send':status==='submitting'?'...':status==='success'?'Success!':'Error'}
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5"><p className="text-[10px] font-bold uppercase tracking-widest text-purple-200/30">&copy; 2025 CollegeXa — The Student Success Standard.</p></div>
      </div>
    </footer>
  );
};
export default memo(Footer);
