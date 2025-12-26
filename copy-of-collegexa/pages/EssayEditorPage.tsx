
import React from 'react';
import { ToolboxIcon } from '../components/icons/ToolboxIcon';

const EssayEditorPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24 sm:py-32 flex flex-col items-center justify-center text-center min-h-[60vh]">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 flex items-center justify-center mb-8 border border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
        <ToolboxIcon className="w-12 h-12 text-purple-300" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Essay Editor
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
        Under Construction
      </h2>
      <p className="text-purple-200/60 max-w-lg mx-auto text-lg leading-relaxed">
        We're building something amazing to help you craft the perfect essay. 
        Check back soon for AI-powered writing assistance!
      </p>
    </div>
  );
};

export default EssayEditorPage;
