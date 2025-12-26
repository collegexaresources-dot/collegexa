
import React, { useState } from 'react';
import { EmailGuideIcon } from '../components/icons/EmailGuideIcon';
import { GoodExampleIcon } from '../components/icons/GoodExampleIcon';
import { BadExampleIcon } from '../components/icons/BadExampleIcon';
import { CopyIcon } from '../components/icons/CopyIcon';
import { InsiderTipIcon } from '../components/icons/InsiderTipIcon';
import { DoCheckIcon } from '../components/icons/DoCheckIcon';
import { DontXIcon } from '../components/icons/DontXIcon';
import { CheckListIcon } from '../components/icons/CheckListIcon';
import { XListIcon } from '../components/icons/XListIcon';
import { StarIcon } from '../components/icons/StarIcon';

const EmailGuidePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Complete Guide');
    const [copyText, setCopyText] = useState('Copy Template');
    const [selectedTemplateKey, setSelectedTemplateKey] = useState<'initial' | 'followup'>('initial');

    const tabs = ['Complete Guide', 'Email Templates', 'Do\'s & Don\'ts'];
    
    const templates = {
        initial: {
            title: "Professor Contact Template",
            subject: "High School Student Inquiry: Your Research on [Specific Topic]",
            body: `Dear Professor [Last Name],

My name is [Your Name], and I am a [grade] student at [Your High School]. I recently came across your research on [specific topic/paper title], and I was fascinated by [specific detail that interested you].

I am particularly interested in [research area] and have been working on [brief description of your relevant project/experience]. Your work on [specific aspect] aligns perfectly with my interests and goals.

I would be honored to have the opportunity to discuss your research further and explore if there might be any possibility for me to contribute to your lab, even in a small capacity. I understand you have a busy schedule, but I would greatly appreciate 15-20 minutes of your time for a brief conversation.

I have attached my resume and a brief description of my background. Thank you very much for considering my request, and I look forward to hearing from you.

Best regards,
[Your Full Name]
[Your Email]
[Your Phone Number]`
        },
        followup: {
            title: "Follow-Up Email Template",
            subject: "Following Up: Research Opportunity Inquiry",
            body: `Dear Professor [Last Name],

I hope this email finds you well. I wanted to briefly follow up on my previous email regarding my interest in your research on [Specific Topic].

I know this is a busy time of year, but I remain very enthusiastic about the possibility of [contributing to your lab/discussing your work] and would truly appreciate any opportunity to connect.

I have re-attached my resume for your convenience. Thank you again for your time and consideration.

Best regards,
[Your Full Name]
[Your Email]
[Your Phone Number]`
        }
    };

    const currentTemplate = templates[selectedTemplateKey];

    const handleCopy = () => {
        const fullText = `Subject: ${currentTemplate.subject}\n\nBody:\n${currentTemplate.body}`;
        navigator.clipboard.writeText(fullText);
        setCopyText('Copied!');
        setTimeout(() => setCopyText('Copy Template'), 2000);
    };


    return (
        <div className="container mx-auto px-4 py-12 sm:py-16">
            {/* Page Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-red-500 to-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.5)]">
                    <EmailGuideIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                        Email{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,38,211,0.5)]">
                            Mastery
                        </span>
                    </h1>
                    <p className="text-purple-200/70">The complete guide to professional cold-emailing</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="mb-10">
                <div className="border border-purple-500/20 rounded-lg p-1 inline-flex items-center space-x-1 bg-[#13111C]/60 backdrop-blur-md">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                                activeTab === tab
                                    ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md'
                                    : 'text-gray-300 hover:bg-white/5'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            {activeTab === 'Complete Guide' && (
                 <div className="bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">The Art of Cold-Emailing</h2>
                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]">1</div>
                                <h3 className="text-lg font-bold text-white">Research First</h3>
                            </div>
                            <p className="text-purple-200/70 pl-12">
                                Before sending any email, spend 30 minutes researching the professor. Read their recent papers, check their lab website, and understand their current research. This shows genuine interest and helps you write a personalized email.
                            </p>
                        </div>

                         {/* Step 2 */}
                         <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center font-bold text-white shadow-[0_0_10px_rgba(236,72,153,0.5)]">2</div>
                                <h3 className="text-lg font-bold text-white">Craft a Compelling Subject Line</h3>
                            </div>
                            <p className="text-purple-200/70 pl-12 mb-4">
                                Your subject line determines if your email gets opened. Make it specific and professional.
                            </p>
                            <div className="pl-12 space-y-4">
                                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 shadow-inner">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-green-300 mb-1">
                                        <GoodExampleIcon className="w-5 h-5"/>
                                        Good Example
                                    </div>
                                    <p className="text-green-200/80 font-mono text-sm">"High School Student Inquiry: Your Research on Neural Networks"</p>
                                </div>
                                 <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 shadow-inner">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-red-300 mb-1">
                                        <BadExampleIcon className="w-5 h-5"/>
                                        Bad Example
                                    </div>
                                    <p className="text-red-200/80 font-mono text-sm">"Research Opportunity"</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Step 3 */}
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white shadow-[0_0_10px_rgba(249,115,22,0.5)]">3</div>
                                <h3 className="text-lg font-bold text-white">Structure Your Email</h3>
                            </div>
                            <div className="pl-12 space-y-3">
                                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                                    <h4 className="font-semibold text-cyan-400 text-sm">Opening (1-2 sentences)</h4>
                                    <p className="text-purple-200/70 text-sm">Introduce yourself and mention how you found their work</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                                    <h4 className="font-semibold text-cyan-400 text-sm">Specific Compliment (2-3 sentences)</h4>
                                    <p className="text-purple-200/70 text-sm">Reference specific research and explain what interests you</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                                    <h4 className="font-semibold text-cyan-400 text-sm">Your Background (2-3 sentences)</h4>
                                    <p className="text-purple-200/70 text-sm">Briefly highlight relevant experience or projects</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                                    <h4 className="font-semibold text-cyan-400 text-sm">Clear Ask (1-2 sentences)</h4>
                                    <p className="text-purple-200/70 text-sm">Request a specific, reasonable action (15-min call, guidance, etc.)</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                                    <h4 className="font-semibold text-cyan-400 text-sm">Closing (1 sentence)</h4>
                                    <p className="text-purple-200/70 text-sm">Thank them and express enthusiasm</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-white shadow-[0_0_10px_rgba(34,197,94,0.5)]">4</div>
                                <h3 className="text-lg font-bold text-white">Attach Relevant Documents</h3>
                            </div>
                            <p className="text-purple-200/70 pl-12">
                                Include your resume and, if relevant, a brief project abstract or portfolio link. Keep attachments professional and concise.
                            </p>
                        </div>

                        {/* Step 5 */}
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-white shadow-[0_0_10px_rgba(239,68,68,0.5)]">5</div>
                                <h3 className="text-lg font-bold text-white">Follow Up Strategically</h3>
                            </div>
                            <p className="text-purple-200/70 pl-12">
                                Wait 7-10 days before sending a polite follow-up. If no response after two emails, move on to other professors. Persistence shows interest, but excessive emails are annoying.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            
            {activeTab === 'Email Templates' && (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div 
                            onClick={() => setSelectedTemplateKey('initial')}
                            className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                                selectedTemplateKey === 'initial' 
                                ? 'bg-purple-900/30 border-2 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]' 
                                : 'bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className={`text-lg font-bold ${selectedTemplateKey === 'initial' ? 'text-white' : 'text-gray-200'}`}>Initial Professor Contact</h3>
                                {selectedTemplateKey === 'initial' && <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></div>}
                            </div>
                            <p className="text-sm text-purple-200/70 font-mono line-clamp-3">Subject: High School Student Inquiry: Your Research on [Specific Topic] Dear Professor [Last Name], My name is [Your Name], and I am a [grade] student at [Your High School]...</p>
                        </div>
                         <div 
                            onClick={() => setSelectedTemplateKey('followup')}
                            className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                                selectedTemplateKey === 'followup' 
                                ? 'bg-purple-900/30 border-2 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]' 
                                : 'bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className={`text-lg font-bold ${selectedTemplateKey === 'followup' ? 'text-white' : 'text-gray-200'}`}>Follow-Up Email</h3>
                                {selectedTemplateKey === 'followup' && <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></div>}
                            </div>
                            <p className="text-sm text-purple-200/70 font-mono line-clamp-3">Subject: Following Up: Research Opportunity Inquiry Dear Professor [Last Name], I hope this email finds you well. I wanted to follow up on my previous ...</p>
                        </div>
                    </div>
                    
                    <div className="bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-4 sm:mb-0">{currentTemplate.title}</h2>
                            <button onClick={handleCopy} className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-300 ${copyText === 'Copied!' ? 'bg-green-600' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
                                <CopyIcon className="w-4 h-4" />
                                {copyText}
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-black/20 border border-white/10 rounded-lg p-4">
                                <p className="text-cyan-400 font-semibold text-sm mb-1">Subject:</p>
                                <p className="text-purple-200/80 text-sm font-mono">{currentTemplate.subject}</p>
                            </div>
                            <div className="bg-black/20 border border-white/10 rounded-lg p-4">
                                <p className="text-cyan-400 font-semibold text-sm mb-1">Body:</p>
                                <div className="text-purple-200/80 text-sm font-mono whitespace-pre-line space-y-4">
                                    {currentTemplate.body}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-yellow-900/20 border border-yellow-500/20 rounded-lg p-3 text-xs shadow-inner">
                            <div className="flex items-center gap-2 font-semibold text-yellow-300 mb-1 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
                                <InsiderTipIcon className="w-4 h-4"/>
                                Pro Tip
                            </div>
                            <p className="text-yellow-200/70">Replace all [bracketed items] with your specific information. Personalization is key to getting responses.</p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'Do\'s & Don\'ts' && (
                <div className="space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* DO's */}
                        <div className="bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <DoCheckIcon />
                                <h2 className="text-2xl font-bold text-white">DO's</h2>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    'Research the professor\'s recent work thoroughly', 
                                    'Use a professional email address', 
                                    'Keep your email concise (under 250 words)', 
                                    'Proofread for grammar and spelling', 
                                    'Include specific details about their research', 
                                    'Attach your resume as a PDF', 
                                    'Be respectful of their time', 
                                    'Follow up after 7-10 days if no response', 
                                    'Express genuine enthusiasm', 
                                    'Make a specific, reasonable ask'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-purple-200/80">
                                        <CheckListIcon className="flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* DON'Ts */}
                        <div className="bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <DontXIcon />
                                <h2 className="text-2xl font-bold text-white">DON'Ts</h2>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    'Send generic, mass emails',
                                    'Use informal language or emojis',
                                    'Write a novel (keep it brief!)',
                                    'Make demands or sound entitled',
                                    'Forget to proofread',
                                    'Send from an unprofessional email',
                                    'Attach large files without asking',
                                    'Follow up multiple times per week',
                                    'Copy-paste the same email to everyone',
                                    'Get discouraged by no response'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-purple-200/80">
                                        <XListIcon className="flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Success Strategies */}
                    <div className="bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-400 rounded-lg shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                                <StarIcon className="w-6 h-6 text-white"/>
                            </div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Success Strategies</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-black/20 border border-white/10 rounded-lg p-4">
                                <h4 className="font-semibold text-cyan-400 text-sm mb-1">Timing Matters</h4>
                                <p className="text-purple-200/70 text-sm">Send emails Tuesday-Thursday, between 9am-11am or 2pm-4pm. Avoid Mondays (too busy), Fridays (weekend mode), and evenings/weekends.</p>
                            </div>
                            <div className="bg-black/20 border border-white/10 rounded-lg p-4">
                                <h4 className="font-semibold text-cyan-400 text-sm mb-1">Quality Over Quantity</h4>
                                <p className="text-purple-200/70 text-sm">Send 5 highly personalized emails rather than 50 generic ones. A 20% response rate on personalized emails beats 1% on mass emails.</p>
                            </div>
                            <div className="bg-black/20 border border-white/10 rounded-lg p-4">
                                <h4 className="font-semibold text-cyan-400 text-sm mb-1">Build a Portfolio First</h4>
                                <p className="text-purple-200/70 text-sm">Have something to show before reaching out. A small project, research paper, or relevant coursework makes your email much stronger.</p>
                            </div>
                            <div className="bg-black/20 border border-white/10 rounded-lg p-4">
                                <h4 className="font-semibold text-cyan-400 text-sm mb-1">Handle Rejection Gracefully</h4>
                                <p className="text-purple-200/70 text-sm">Most emails won’t get responses - that’s normal. Stay positive, learn from each email, and keep improving your approach.</p>
                            </div>
                        </div>
                    </div>
                </div>
             )}
        </div>
    );
};

export default EmailGuidePage;
