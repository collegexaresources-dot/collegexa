
import React from 'react';

// Import project-specific icons
import { PodcastIcon } from '../components/icons/PodcastIcon';
import { AiBrainIcon } from '../components/icons/AiBrainIcon';
import { DesignIcon } from '../components/icons/DesignIcon';
import { PantryIcon } from '../components/icons/PantryIcon';
import { FinancialIcon } from '../components/icons/FinancialIcon';

export interface Project {
  icon: React.ElementType;
  iconBg: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  time: 'Low' | 'Medium' | 'High';
  whyItMatters: string;
  gettingStarted: string[];
  requiredResources: string[];
  potentialMentors: string[];
  howToShowcase: string;
}

export const allProjects: Project[] = [
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-purple-500 to-fuchsia-400',
    title: 'Design a Smart Recycling Sorter',
    description: 'Train an AI model to identify recyclable items from photos.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Helps reduce waste and promotes sustainability.',
    gettingStarted: [
        'Gather or find image datasets of trash and recyclables.',
        'Train CNN using Teachable Machine or TensorFlow.',
        'Build a web demo to test uploads.',
        'Present at your school\'s eco club.',
    ],
    requiredResources: ['USB Microphone', 'Audacity (free)', 'Local Library Access', 'Anchor.fm'],
    potentialMentors: ['Science teacher', 'Software engineer', 'Environmental researcher'],
    howToShowcase: 'Upload demo and dataset documentation to GitHub.',
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-purple-500 to-fuchsia-400',
    title: 'Launch a Community History Podcast',
    description: 'Interview local elders and document untold stories from your community\'s past.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Preserves local culture, develops strong communication and audio production skills, and creates a valuable community resource.',
    gettingStarted: [
        'Identify a theme for your podcast (e.g., local businesses, historical events).',
        'Acquire a basic USB microphone and learn audio editing software like Audacity.',
        'Reach out to local historical societies or community centers to find interview subjects.',
        'Record, edit, and produce your first 3 episodes.',
        'Publish your podcast on platforms like Spotify or Apple Podcasts using a free host like Anchor.fm.'
    ],
    requiredResources: ['USB Microphone', 'Audacity (free)', 'Local Library Access', 'Anchor.fm'],
    potentialMentors: ['History teacher', 'Local journalist', 'Librarian'],
    howToShowcase: 'Create a simple website for your podcast, submit it to local news outlets, and share episodes on social media to build a listener base.',
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-sky-500 to-cyan-400',
    title: 'Build an AI-Powered Study Assistant',
    description: 'Create a personalized AI tutor that helps students master difficult subjects using machine learning.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Develops coding skills, AI/ML understanding, and addresses a real educational need. Shows initiative in emerging technology.',
    gettingStarted: [
        'Learn Python basics and machine learning fundamentals.',
        'Research existing AI tutoring systems.',
        'Build a simple chatbot using Gemini API.',
        'Test with classmates and iterate.',
        'Document your learning process.'
    ],
    requiredResources: ['Python', 'Gemini API (free tier)', 'GitHub', 'Basic HTML/CSS for interface'],
    potentialMentors: ['Computer Science teacher', 'Local software engineer', 'University CS professor'],
    howToShowcase: 'Create a GitHub repository with clear documentation, demo video, and write a blog post about your learning journey.',
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-sky-500 to-blue-400',
    title: 'Develop an AI Mood Journal App',
    description: 'Build a journal that tracks emotional tone using sentiment analysis.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Encourages self-awareness and mental health reflection.',
    gettingStarted: [
        'Collect and label sample journal entries.',
        'Use a Python NLP Model for mood scoring.',
        'Visualize weekly tends in a simple dashboard.',
        'Package into a web or mobile app.',
    ],
    requiredResources: ['Python', 'Gemini API (free tier)', 'GitHub', 'Basic HTML/CSS for interface','NLP'],
    potentialMentors: ['Computer Science teacher', 'Psychology teacher', 'AI researcher'],
    howToShowcase: 'Create a GitHub repository, record a walkthrough video, and publish a reflection blog.',
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-pink-500 to-rose-400',
    title: 'Design a Sustainable Fashion Line',
    description: 'Create eco-friendly clothing using upcycled materials and document the sustainable design process.',
    difficulty: 'Beginner',
    category: 'Arts',
    time: 'Medium',
    whyItMatters: 'Addresses the real-world environmental impact of the fashion industry and showcases creativity, resourcefulness, and design skills.',
    gettingStarted: [
        'Learn basic sewing and garment deconstruction techniques.',
        'Source materials from thrift stores or your own closet.',
        'Sketch a 5-piece cohesive collection.',
        'Create the garments and style a photoshoot.',
        'Build a digital lookbook or portfolio.'
    ],
    requiredResources: ['Sewing machine', 'Thrifted clothing', 'Sketchbook', 'Canva or Adobe Express'],
    potentialMentors: ['Art teacher', 'Local fashion designer', 'Textile artist'],
    howToShowcase: 'Create a stunning Instagram portfolio, submit your lookbook to fashion blogs, or enter a sustainable design competition.',
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-emerald-500 to-green-400',
    title: 'Build a Local Food Pantry Network App',
    description: 'Create a web app connecting food pantries with donors and those in need in real-time.',
    difficulty: 'Intermediate',
    category: 'Social Good',
    time: 'High',
    whyItMatters: 'Solves a critical community problem of food insecurity and logistics, demonstrating both technical skill and social consciousness.',
    gettingStarted: [
        'Interview staff at 2-3 local food pantries to understand their needs.',
        'Create user flow diagrams and wireframes for the app.',
        'Choose a tech stack (e.g., React for front-end, Firebase for back-end).',
        'Code a Minimum Viable Product (MVP) with core features like inventory tracking and donation scheduling.',
        'Launch a beta test with one pantry.'
    ],
    requiredResources: ['Figma or Sketch', 'React', 'Firebase', 'GitHub'],
    potentialMentors: ['CS teacher', 'Local nonprofit director', 'UX designer'],
    howToShowcase: 'Present a demo to a coalition of local nonprofits, create a compelling case study video, and write about your impact.',
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-400',
    title: 'Start a Financial Literacy Workshop for Peers',
    description: 'Teach fellow students essential money management skills through interactive workshops.',
    difficulty: 'Beginner',
    category: 'Business',
    time: 'Low',
    whyItMatters: 'Addresses a major knowledge gap for young people, developing leadership, public speaking, and curriculum design skills.',
    gettingStarted: [
        'Research and create a 4-part curriculum on budgeting, saving, investing, and credit.',
        'Design engaging presentations and activities.',
        'Partner with a school club or teacher to host the workshops.',
        'Promote the workshops through school announcements and social media.',
        'Gather feedback from attendees to improve your content.'
    ],
    requiredResources: ['Google Slides', 'Public library resources', 'School club sponsorship'],
    potentialMentors: ['Economics teacher', 'A parent in finance', 'Local bank manager'],
    howToShowcase: 'Record a workshop session, create a website with your curriculum resources, and gather testimonials from attendees.',
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-pink-400 to-red-500',
    title: 'Create a Personal Brand Website',
    description: 'Design a personal website showcasing your projects, achievements, and portfolio.',
    difficulty: 'Beginner',
    category: 'Arts',
    time: 'Medium',
    whyItMatters: 'Strengthens your online presence and helps impress college admissions or employers.',
    gettingStarted: [
      'Choose a website builder (Wix, Squarespace, or React).',
      'Design a homepage, projects page, and contact section.',
      'Add content from your school projects, volunteer work, and hobbies.',
      'Optimize for mobile viewing and user experience.',
      'Publish and share your site online.'
    ],
    requiredResources: ['Website Builder', 'Images and Project Content', 'Design Software like Canva'],
    potentialMentors: ['Computer Science teacher', 'Art teacher', 'Local web designer'],
    howToShowcase: 'Share your website link on social media, LinkedIn, and include it in college applications.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Organize a School Food Drive',
    description: 'Collect and distribute food donations to local shelters or food banks.',
    difficulty: 'Beginner',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Supports your community and develops organizational and leadership skills.',
    gettingStarted: [
      'Contact a local food bank or shelter to understand needs.',
      'Set a collection period and advertise at school.',
      'Organize volunteers to sort and pack donations.',
      'Deliver donations and document the process.',
      'Reflect and report impact to the school or community.'
    ],
    requiredResources: ['Volunteers', 'Marketing Materials', 'Access to School Facilities'],
    potentialMentors: ['Community Service Director', 'School Counselor', 'Local Nonprofit Leader'],
    howToShowcase: 'Post photos and a summary of the drive on your website or social media and include impact metrics.'
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
    title: 'Start a Teen Finance Newsletter',
    description: 'Write a weekly newsletter teaching financial literacy for high school students.',
    difficulty: 'Beginner',
    category: 'Business',
    time: 'Low',
    whyItMatters: 'Empowers peers with critical money management skills.',
    gettingStarted: [
      'Research easy-to-understand finance topics.',
      'Write short, engaging articles each week.',
      'Design layout using Canva or Substack.',
      'Promote to school and local community.',
      'Collect feedback and iterate content.'
    ],
    requiredResources: ['Writing Skills', 'Canva or Substack', 'Basic Finance Knowledge'],
    potentialMentors: ['Economics teacher', 'Local Banker', 'Financial Blogger'],
    howToShowcase: 'Publish newsletters online, track subscriber growth, and create highlights to post on social media.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    title: 'Build a Sign Language Recognition App',
    description: 'Create an app that translates basic ASL gestures into text.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Improves accessibility and strengthens coding and AI skills.',
    gettingStarted: [
      'Collect or find a dataset of ASL gestures.',
      'Train a machine learning model using Python and TensorFlow.',
      'Create a mobile/web interface to capture gestures.',
      'Test with users and improve recognition accuracy.',
      'Document progress and deploy a demo.'
    ],
    requiredResources: ['Python', 'TensorFlow', 'Web/Mobile Dev Platform', 'Gesture Dataset'],
    potentialMentors: ['CS teacher', 'Accessibility Specialist', 'ML Engineer'],
    howToShowcase: 'Create a GitHub repo with demo video and detailed documentation, share in tech or accessibility communities.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
    title: 'Produce a Mini Documentary on Local Issues',
    description: 'Film and edit a short documentary exploring a pressing issue in your community.',
    difficulty: 'Intermediate',
    category: 'Arts',
    time: 'High',
    whyItMatters: 'Raises awareness and develops storytelling, filming, and editing skills.',
    gettingStarted: [
      'Choose a local issue and research background information.',
      'Plan interviews, locations, and storyboarding.',
      'Film using a camera or smartphone.',
      'Edit footage using free software like DaVinci Resolve.',
      'Screen at school or upload online.'
    ],
    requiredResources: ['Camera/Phone', 'Editing Software', 'Microphone', 'Tripod'],
    potentialMentors: ['Film Teacher', 'Journalist', 'Community Organizer'],
    howToShowcase: 'Post the documentary online, host a virtual screening, and write a blog post reflecting on the process.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Design a Personal Productivity Tracker',
    description: 'Create a digital dashboard to log habits, goals, and progress over time.',
    difficulty: 'Beginner',
    category: 'STEM',
    time: 'Low',
    whyItMatters: 'Improves self-organization and teaches basic coding or spreadsheet skills.',
    gettingStarted: [
      'Identify metrics to track (e.g., study hours, workouts).',
      'Build a simple interface using Google Sheets or web tools.',
      'Add charts or visualizations for tracking progress.',
      'Test with your own habits and iterate.',
      'Encourage peers to use and give feedback.'
    ],
    requiredResources: ['Google Sheets', 'Optional: Basic Web Dev Skills', 'Charting Tools'],
    potentialMentors: ['Math Teacher', 'CS Teacher', 'Productivity Coach'],
    howToShowcase: 'Share screenshots, progress reports, and reflections on your website or social media.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    title: 'Create an AI-Powered Homework Helper',
    description: 'Develop a tool that gives hints and explanations for tough homework problems.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Supports peers in learning while strengthening coding and AI skills.',
    gettingStarted: [
      'Collect sample homework problems from textbooks or teachers.',
      'Use Python and basic ML libraries to generate hints.',
      'Create a simple interface for users to input questions.',
      'Test the tool with friends and collect feedback.',
      'Refine and document the application.'
    ],
    requiredResources: ['Python', 'ML Libraries', 'Basic Web Dev Skills'],
    potentialMentors: ['CS Teacher', 'AI Researcher', 'Math Teacher'],
    howToShowcase: 'Publish a GitHub repo with demo, record a tutorial video, and write a blog post about your process.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-pink-400 to-red-500',
    title: 'Start a Student Wellness Podcast',
    description: 'Share tips, interviews, and resources for mental health and wellness in high school.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Promotes awareness about mental health and builds communication skills.',
    gettingStarted: [
      'Brainstorm topics like stress management, sleep, or peer support.',
      'Record short episodes using a microphone or phone.',
      'Edit using free software like Audacity.',
      'Publish via Anchor.fm and promote at school.',
      'Encourage peers to give feedback and submit topics.'
    ],
    requiredResources: ['USB Microphone', 'Audacity', 'Anchor.fm'],
    potentialMentors: ['Psychology Teacher', 'School Counselor', 'Local Podcaster'],
    howToShowcase: 'Create a website for episodes, share on social media, and submit to podcast directories.'
  },
   {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Design an Eco-Friendly Product Line',
    description: 'Create prototypes of sustainable household products or school supplies.',
    difficulty: 'Intermediate',
    category: 'Arts',
    time: 'High',
    whyItMatters: 'Promotes sustainability awareness and hones design and problem-solving skills.',
    gettingStarted: [
      'Research materials that are eco-friendly.',
      'Sketch product ideas and select 2-3 prototypes.',
      'Create physical or digital models.',
      'Test usability with peers.',
      'Document process and impact for presentation.'
    ],
    requiredResources: ['Sketching/Design Tools', 'Sustainable Materials', '3D Printing Optional'],
    potentialMentors: ['Art Teacher', 'Industrial Designer', 'Environmental Scientist'],
    howToShowcase: 'Take photos of prototypes, write a case study, and post on your website or Instagram.'
  },
   {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
    title: 'Develop a Volunteer Matching App',
    description: 'Create a platform connecting students with local volunteer opportunities.',
    difficulty: 'Intermediate',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Encourages community service and improves coding/project management skills.',
    gettingStarted: [
      'Research local volunteer organizations and their needs.',
      'Design a simple database and interface to match volunteers with opportunities.',
      'Implement in a web or mobile app.',
      'Test with peers and collect feedback.',
      'Launch and document impact.'
    ],
    requiredResources: ['Python/JavaScript', 'Database Knowledge', 'UI/UX Design'],
    potentialMentors: ['CS Teacher', 'Community Organizer', 'Local Nonprofit Leader'],
    howToShowcase: 'Create a GitHub repo, demo the app, and share success stories on your website.'
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
    title: 'Build a Teen Budget Tracker',
    description: 'Develop an app or spreadsheet that helps students track spending and savings.',
    difficulty: 'Beginner',
    category: 'Business',
    time: 'Low',
    whyItMatters: 'Teaches financial literacy and organization for peers.',
    gettingStarted: [
      'Identify key budget categories.',
      'Create a simple spreadsheet or web app.',
      'Add features to visualize spending habits.',
      'Test with friends and refine.',
      'Document how to use and share broadly.'
    ],
    requiredResources: ['Excel/Sheets', 'Optional: Web Dev Skills', 'Basic Finance Knowledge'],
    potentialMentors: ['Economics Teacher', 'Local Banker', 'Math Teacher'],
    howToShowcase: 'Post screenshots or demo videos on your website or social media.'
  },
   {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    title: 'AI-Powered Flashcard Creator',
    description: 'Use AI to generate flashcards from textbooks or notes automatically.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Improves study efficiency and coding skills while helping peers.',
    gettingStarted: [
      'Select a subject and gather notes or textbooks.',
      'Train or use a prebuilt AI model to extract key facts.',
      'Generate flashcards in an app or printable format.',
      'Test with classmates and iterate.',
      'Document methodology and results.'
    ],
    requiredResources: ['Python', 'AI NLP Libraries', 'Optional Flashcard App Platform'],
    potentialMentors: ['CS Teacher', 'AI Researcher', 'Math/Science Teacher'],
    howToShowcase: 'Share a downloadable pack or app demo, with instructions and examples online.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
    title: 'Host a Student Debate Podcast',
    description: 'Record discussions and debates on current events and social issues with peers.',
    difficulty: 'Intermediate',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Builds research, speaking, and critical thinking skills.',
    gettingStarted: [
      'Choose topics relevant to high school students.',
      'Recruit peers to debate and record sessions.',
      'Edit audio for clarity.',
      'Publish episodes weekly or bi-weekly.',
      'Promote via school and social media.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm'],
    potentialMentors: ['Debate Coach', 'History Teacher', 'English Teacher'],
    howToShowcase: 'Post episodes on podcast platforms and your website, include transcripts and discussion highlights.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Create an Infographic Series on STEM Topics',
    description: 'Design visually appealing infographics to explain science or math concepts.',
    difficulty: 'Beginner',
    category: 'Arts',
    time: 'Low',
    whyItMatters: 'Helps peers learn complex concepts and hones design skills.',
    gettingStarted: [
      'Choose STEM topics you find interesting.',
      'Research accurate and concise content.',
      'Design infographics using Canva or Illustrator.',
      'Share with classmates for feedback.',
      'Post a series online or as printable handouts.'
    ],
    requiredResources: ['Canva or Illustrator', 'Research Sources', 'Basic Design Knowledge'],
    potentialMentors: ['Science Teacher', 'Art Teacher', 'Math Teacher'],
    howToShowcase: 'Publish on Instagram, your website, or as a downloadable PDF collection.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Organize a Peer Tutoring Program',
    description: 'Connect students with peers who can tutor in subjects they struggle with.',
    difficulty: 'Intermediate',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Improves academic performance, leadership, and community building.',
    gettingStarted: [
      'Survey students to find common subjects needing tutoring.',
      'Recruit capable tutors and schedule sessions.',
      'Set up a simple tracking system for attendance and progress.',
      'Match tutors with students and monitor sessions.',
      'Gather feedback and improve the program.'
    ],
    requiredResources: ['Spreadsheet for tracking', 'Volunteer Tutors', 'Meeting Space'],
    potentialMentors: ['School Counselor', 'Math/Science Teacher', 'Academic Coach'],
    howToShowcase: 'Document the program process, testimonials, and improvements on your website or social media.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-purple-500',
    title: 'Build a Smart Study Timer App',
    description: 'Create an app that schedules study sessions and breaks using AI suggestions.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Promotes productivity and time management while learning app development.',
    gettingStarted: [
      'Research effective study techniques and optimal break schedules.',
      'Design a basic timer app with Python or JavaScript.',
      'Incorporate AI suggestions based on user input or history.',
      'Test with classmates and gather feedback.',
      'Refine features and document the development process.'
    ],
    requiredResources: ['Python/JavaScript', 'AI Library Optional', 'Basic UX/UI Knowledge'],
    potentialMentors: ['CS Teacher', 'Time Management Coach', 'App Developer'],
    howToShowcase: 'Share a demo video, post screenshots online, and write a blog about your development journey.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
    title: 'Start a Teen Entrepreneurship Podcast',
    description: 'Interview young entrepreneurs and share insights about starting a business as a student.',
    difficulty: 'Beginner',
    category: 'Business',
    time: 'Medium',
    whyItMatters: 'Inspires peers and builds communication and research skills.',
    gettingStarted: [
      'Identify local or online teen entrepreneurs to interview.',
      'Plan episode format and questions.',
      'Record using a microphone or phone.',
      'Edit with free software and publish via Anchor.fm.',
      'Promote on social media and school networks.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm'],
    potentialMentors: ['Economics Teacher', 'Local Entrepreneur', 'Business Coach'],
    howToShowcase: 'Publish episodes online and include a transcript or show notes on your website.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Design a School Safety Poster Series',
    description: 'Create visually appealing posters promoting safety, awareness, and healthy habits.',
    difficulty: 'Beginner',
    category: 'Arts',
    time: 'Low',
    whyItMatters: 'Promotes safety awareness and hones design and communication skills.',
    gettingStarted: [
      'Identify key safety topics for your school.',
      'Sketch ideas and create digital designs.',
      'Use Canva or Illustrator to finalize posters.',
      'Display posters in classrooms or hallways.',
      'Gather feedback and iterate designs.'
    ],
    requiredResources: ['Design Software', 'Printer Optional', 'Research Materials'],
    potentialMentors: ['Art Teacher', 'Health Teacher', 'School Safety Officer'],
    howToShowcase: 'Post photos of posters online and explain the design and messaging process.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
    title: 'Coordinate a Clothing Drive for Teens',
    description: 'Collect gently used clothing for students in need or local shelters.',
    difficulty: 'Beginner',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Helps your community while building leadership and organizational skills.',
    gettingStarted: [
      'Partner with a local shelter or school to identify needs.',
      'Set a collection schedule and advertise via posters or social media.',
      'Organize volunteers to sort and pack donations.',
      'Deliver clothing and document impact.',
      'Reflect on results and report to your school community.'
    ],
    requiredResources: ['Volunteers', 'Marketing Materials', 'Storage Space'],
    potentialMentors: ['School Counselor', 'Community Organizer', 'Local Nonprofit Leader'],
    howToShowcase: 'Share photos, statistics, and testimonials on your website or social media.'
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
    title: 'Launch a Micro-Investing Club',
    description: 'Teach peers about investing with small amounts of money using simulations.',
    difficulty: 'Intermediate',
    category: 'Business',
    time: 'Medium',
    whyItMatters: 'Builds financial literacy and leadership experience.',
    gettingStarted: [
      'Learn the basics of investing and stock markets.',
      'Create a virtual investment game or club using simulations.',
      'Invite classmates to participate and track progress.',
      'Host weekly or monthly discussions.',
      'Document lessons learned and investment strategies.'
    ],
    requiredResources: ['Financial Knowledge', 'Spreadsheet or Simulation Tools', 'Presentation Skills'],
    potentialMentors: ['Economics Teacher', 'Local Banker', 'Investment Club Advisor'],
    howToShowcase: 'Share a report of club results and strategies online or at school presentations.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    title: 'Create an AI-Powered Language Tutor',
    description: 'Develop a tool to help peers practice a foreign language using AI prompts.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Supports language learning while honing AI and coding skills.',
    gettingStarted: [
      'Choose a language and gather practice materials.',
      'Train a simple NLP model to generate prompts and feedback.',
      'Build a web or mobile interface for users.',
      'Test with peers and gather feedback.',
      'Document and showcase progress.'
    ],
    requiredResources: ['Python', 'NLP Libraries', 'Web or App Dev Platform'],
    potentialMentors: ['CS Teacher', 'Language Teacher', 'AI Researcher'],
    howToShowcase: 'Publish a demo online, create a tutorial video, and document your process on GitHub.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
    title: 'Produce a College Application Tips Podcast',
    description: 'Share tips, strategies, and student experiences for applying to colleges.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Helps peers navigate college admissions while building podcasting skills.',
    gettingStarted: [
      'Plan episode topics such as essays, SAT/ACT prep, and extracurriculars.',
      'Invite peers or counselors as guests.',
      'Record episodes using a microphone or phone.',
      'Edit using free software like Audacity.',
      'Publish weekly and promote via social media.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm'],
    potentialMentors: ['Guidance Counselor', 'English Teacher', 'College Prep Coach'],
    howToShowcase: 'Create a website or blog for episodes and share on Instagram or LinkedIn.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Develop an Educational Board Game',
    description: 'Design a board game that teaches history, science, or math concepts.',
    difficulty: 'Intermediate',
    category: 'Arts',
    time: 'High',
    whyItMatters: 'Encourages creative learning and critical thinking.',
    gettingStarted: [
      'Choose a subject and outline learning objectives.',
      'Design rules, cards, and game board layout.',
      'Test with friends and adjust mechanics.',
      'Create a polished prototype.',
      'Document the design process and impact.'
    ],
    requiredResources: ['Art Supplies', 'Printing Tools', 'Game Design Knowledge'],
    potentialMentors: ['Math/Science Teacher', 'Art Teacher', 'Game Designer'],
    howToShowcase: 'Share photos, a playable PDF version, or demo video on your website or social media.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Organize a School Environmental Awareness Week',
    description: 'Plan activities, workshops, and campaigns promoting sustainability at school.',
    difficulty: 'Intermediate',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Educates peers on environmental issues and builds leadership experience.',
    gettingStarted: [
      'Plan themes and activities for each day.',
      'Coordinate with teachers and student council.',
      'Promote events via posters, announcements, and social media.',
      'Host workshops or competitions.',
      'Evaluate impact and gather participant feedback.'
    ],
    requiredResources: ['Event Planning Skills', 'Marketing Materials', 'Volunteer Support'],
    potentialMentors: ['Environmental Science Teacher', 'Student Council Advisor', 'Local Environmental Activist'],
    howToShowcase: 'Document events with photos/videos, post recaps online, and write a summary of impact.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    title: 'Build a Peer Tutoring Chatbot',
    description: 'Develop an AI chatbot that answers common homework questions for classmates.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Helps peers learn while improving coding and AI skills.',
    gettingStarted: [
      'Gather common questions and answers from classmates.',
      'Use Python and NLP libraries to create a chatbot.',
      'Test chatbot interactions and refine responses.',
      'Add a simple web interface for access.',
      'Document functionality and improvement plan.'
    ],
    requiredResources: ['Python', 'NLP Library', 'Web Dev Basics'],
    potentialMentors: ['CS Teacher', 'AI Researcher', 'Math Teacher'],
    howToShowcase: 'Post a demo online, record a walkthrough video, and share your code on GitHub.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-pink-400 to-red-500',
    title: 'Start a Teen Volunteer Stories Podcast',
    description: 'Highlight inspiring volunteer experiences of local teens.',
    difficulty: 'Beginner',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Promotes community service and communication skills.',
    gettingStarted: [
      'Identify teens with interesting volunteer experiences.',
      'Record interviews with a microphone or phone.',
      'Edit episodes for clarity and flow.',
      'Publish on Anchor.fm or other platforms.',
      'Promote via social media and school channels.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm'],
    potentialMentors: ['Community Service Director', 'School Counselor', 'Journalist'],
    howToShowcase: 'Post episodes online and include transcripts or highlights on your website.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Design a STEM Comic Book Series',
    description: 'Create a comic series that teaches science or math concepts through storytelling.',
    difficulty: 'Intermediate',
    category: 'Arts',
    time: 'High',
    whyItMatters: 'Combines creativity with educational impact and improves storytelling skills.',
    gettingStarted: [
      'Choose STEM concepts to feature.',
      'Write a story outline and character design.',
      'Draw or digitally illustrate comics.',
      'Test readability with peers.',
      'Publish as PDFs or print copies for school distribution.'
    ],
    requiredResources: ['Illustration Tools', 'Storyboarding Skills', 'Basic Graphic Design'],
    potentialMentors: ['Art Teacher', 'Science Teacher', 'Graphic Designer'],
    howToShowcase: 'Post online, create an Instagram page for the series, or host a virtual reading event.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
    title: 'Coordinate a School Supply Drive',
    description: 'Collect and distribute school supplies for students in need.',
    difficulty: 'Beginner',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Supports your community and develops organizational skills.',
    gettingStarted: [
      'Partner with local charities or school programs.',
      'Promote the drive via posters and social media.',
      'Organize volunteers for collection and sorting.',
      'Distribute supplies to recipients.',
      'Document impact and share success stories.'
    ],
    requiredResources: ['Volunteers', 'Marketing Materials', 'Storage Space'],
    potentialMentors: ['School Counselor', 'Community Organizer', 'Local Nonprofit Leader'],
    howToShowcase: 'Share photos and metrics online or on your website.'
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
    title: 'Create a Personal Investment Tracker',
    description: 'Develop a tool to track stocks, crypto, or other investments for learning purposes.',
    difficulty: 'Intermediate',
    category: 'Business',
    time: 'Medium',
    whyItMatters: 'Builds financial literacy and coding or spreadsheet skills.',
    gettingStarted: [
      'Research tracking methods and metrics.',
      'Build a spreadsheet or web app interface.',
      'Add graphs or charts for visualization.',
      'Test with sample data or peers.',
      'Document methodology and lessons learned.'
    ],
    requiredResources: ['Excel/Sheets', 'Optional: Web Dev', 'Financial Knowledge'],
    potentialMentors: ['Economics Teacher', 'Local Banker', 'Math Teacher'],
    howToShowcase: 'Share screenshots, video demos, or write a blog post online.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    title: 'Develop a Homework Difficulty Analyzer',
    description: 'Use AI to estimate the difficulty of homework questions for peers.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Helps peers prioritize tasks while enhancing AI skills.',
    gettingStarted: [
      'Collect past homework questions and solutions.',
      'Train a simple ML model to predict difficulty.',
      'Create a web interface for students to input questions.',
      'Test and refine predictions with peers.',
      'Document AI methodology and results.'
    ],
    requiredResources: ['Python', 'ML Libraries', 'Web Dev Platform'],
    potentialMentors: ['CS Teacher', 'AI Researcher', 'Math Teacher'],
    howToShowcase: 'Post a demo online, create a tutorial video, and share the GitHub repo.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
    title: 'Launch a Teen Art & Creativity Podcast',
    description: 'Discuss creative projects, techniques, and art education for high school students.',
    difficulty: 'Beginner',
    category: 'Arts',
    time: 'Medium',
    whyItMatters: 'Inspires creativity and builds communication and editing skills.',
    gettingStarted: [
      'Identify topics and guest artists.',
      'Record episodes using a microphone or phone.',
      'Edit and add music or sound effects.',
      'Publish via podcast platforms.',
      'Promote online and in school art clubs.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm'],
    potentialMentors: ['Art Teacher', 'Music Teacher', 'Local Artist'],
    howToShowcase: 'Create a podcast page, share episodes on social media, and include behind-the-scenes content.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Design a Virtual Science Fair',
    description: 'Create an online platform for students to showcase their science projects.',
    difficulty: 'Intermediate',
    category: 'Arts',
    time: 'High',
    whyItMatters: 'Promotes STEM learning and digital design skills.',
    gettingStarted: [
      'Plan categories and submission requirements.',
      'Build a simple website or platform for submissions.',
      'Invite participants and collect entries.',
      'Organize virtual judging and awards.',
      'Document the event and create highlights online.'
    ],
    requiredResources: ['Web Dev Skills', 'Design Tools', 'Event Planning Knowledge'],
    potentialMentors: ['Science Teacher', 'CS Teacher', 'Event Organizer'],
    howToShowcase: 'Post a recap online with photos, videos, and winning projects.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Host a Community Clean-Up Challenge',
    description: 'Organize events to clean up parks, streets, or local public spaces.',
    difficulty: 'Beginner',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Improves local environment and leadership skills.',
    gettingStarted: [
      'Choose a location and date.',
      'Recruit volunteers and advertise.',
      'Provide supplies like gloves and trash bags.',
      'Document the clean-up process.',
      'Reflect on impact and post results online.'
    ],
    requiredResources: ['Volunteers', 'Supplies', 'Marketing Materials'],
    potentialMentors: ['Environmental Science Teacher', 'Community Leader', 'Local Activist'],
    howToShowcase: 'Post before/after photos, volunteer stories, and statistics online.'
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
    title: 'Create a Peer Entrepreneurship Newsletter',
    description: 'Write and share tips for teen business projects and startups.',
    difficulty: 'Beginner',
    category: 'Business',
    time: 'Low',
    whyItMatters: 'Builds writing, leadership, and business awareness.',
    gettingStarted: [
      'Research topics like marketing, finance, and project ideas.',
      'Write short, engaging articles.',
      'Design layout in Canva or Substack.',
      'Send weekly or bi-weekly issues to classmates.',
      'Collect feedback and improve content.'
    ],
    requiredResources: ['Writing Skills', 'Canva or Substack', 'Basic Business Knowledge'],
    potentialMentors: ['Economics Teacher', 'Local Entrepreneur', 'Business Coach'],
    howToShowcase: 'Post newsletters online, track engagement, and share highlights on social media.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    title: 'Build an AI-Generated Study Guide Tool',
    description: 'Use AI to create study guides automatically from notes or textbooks.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Helps students study efficiently while learning AI and programming skills.',
    gettingStarted: [
      'Collect class notes and textbook content.',
      'Use Python with NLP libraries to summarize and organize key points.',
      'Design a simple interface for students to input material.',
      'Test and refine outputs with peers.',
      'Document your approach and results.'
    ],
    requiredResources: ['Python', 'NLP Libraries', 'Basic Web Dev Skills'],
    potentialMentors: ['CS Teacher', 'AI Researcher', 'Math Teacher'],
    howToShowcase: 'Publish a demo online, record a walkthrough video, and post the code on GitHub.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-pink-400 to-red-500',
    title: 'Start a Local Community News Podcast',
    description: 'Report on news, events, and student projects in your neighborhood or school.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Keeps your community informed and builds media production skills.',
    gettingStarted: [
      'Identify topics and potential interviewees.',
      'Record episodes using a microphone or phone.',
      'Edit with free software like Audacity.',
      'Publish on Anchor.fm or Spotify.',
      'Promote through social media and school newsletters.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm'],
    potentialMentors: ['Journalism Teacher', 'Local Reporter', 'School Newspaper Advisor'],
    howToShowcase: 'Post episodes online, share show notes, and highlight interviews on social media.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Design a Mobile App Prototype for Students',
    description: 'Create a prototype app to solve a common student problem, like homework tracking.',
    difficulty: 'Intermediate',
    category: 'Arts',
    time: 'Medium',
    whyItMatters: 'Builds UX/UI, problem-solving, and prototyping skills.',
    gettingStarted: [
      'Identify a problem students face.',
      'Sketch wireframes and interface design.',
      'Use tools like Figma or Adobe XD to build a clickable prototype.',
      'Test with peers and refine.',
      'Document design decisions and process.'
    ],
    requiredResources: ['Figma/Adobe XD', 'Basic Design Knowledge', 'Research Materials'],
    potentialMentors: ['Design Teacher', 'CS Teacher', 'App Developer'],
    howToShowcase: 'Share interactive prototypes online and post a case study on your website.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
    title: 'Organize a Virtual Tutoring Platform',
    description: 'Create a digital space for students to connect with tutors remotely.',
    difficulty: 'Intermediate',
    category: 'Social Good',
    time: 'High',
    whyItMatters: 'Expands access to education and strengthens project management skills.',
    gettingStarted: [
      'Determine subjects and target students.',
      'Build a simple web platform or use existing tools.',
      'Recruit volunteer tutors.',
      'Match students with tutors and monitor sessions.',
      'Document impact and gather testimonials.'
    ],
    requiredResources: ['Web Dev Skills', 'Volunteers', 'Spreadsheet for Tracking'],
    potentialMentors: ['CS Teacher', 'School Counselor', 'Community Organizer'],
    howToShowcase: 'Publish a demo, collect success stories, and write a blog post on your website.'
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
    title: 'Create a Student Budgeting Guidebook',
    description: 'Write a comprehensive guide to help peers manage personal finances.',
    difficulty: 'Beginner',
    category: 'Business',
    time: 'Low',
    whyItMatters: 'Develops writing skills and helps peers gain financial literacy.',
    gettingStarted: [
      'Research budgeting strategies and tools.',
      'Write easy-to-understand chapters or sections.',
      'Include practical exercises and examples.',
      'Design the guidebook layout.',
      'Publish as a PDF or blog series.'
    ],
    requiredResources: ['Writing Skills', 'Spreadsheet Knowledge', 'Basic Design Tools'],
    potentialMentors: ['Economics Teacher', 'Math Teacher', 'Financial Advisor'],
    howToShowcase: 'Post online as downloadable PDF, promote on Instagram, and distribute at school.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    title: 'Develop an AI Career Advisor Tool',
    description: 'Build a simple AI that suggests career paths based on student interests and skills.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Guides students while sharpening AI, ML, and web development skills.',
    gettingStarted: [
      'Collect data on career options and skills required.',
      'Train an AI model to suggest career matches.',
      'Build a simple interface for students to input interests.',
      'Test with peers and gather feedback.',
      'Document methodology and results.'
    ],
    requiredResources: ['Python', 'ML Libraries', 'Web Dev Platform'],
    potentialMentors: ['CS Teacher', 'Career Counselor', 'AI Researcher'],
    howToShowcase: 'Create a web demo, record a video walkthrough, and post the code on GitHub.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
    title: 'Start a Teen Book Review Podcast',
    description: 'Discuss favorite books, share reviews, and recommend reads to peers.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Promotes literacy and improves communication skills.',
    gettingStarted: [
      'Select books to review each episode.',
      'Plan discussion format and talking points.',
      'Record using a microphone or phone.',
      'Edit episodes and add music.',
      'Publish weekly or bi-weekly.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm'],
    potentialMentors: ['English Teacher', 'Librarian', 'Local Author'],
    howToShowcase: 'Share episodes online, include show notes, and promote on social media.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Design a Teen-Friendly Infographic App',
    description: 'Create an app that generates infographics from text input for learning or presentation purposes.',
    difficulty: 'Intermediate',
    category: 'Arts',
    time: 'Medium',
    whyItMatters: 'Enhances design and coding skills while helping peers visualize information.',
    gettingStarted: [
      'Sketch UI and app flow.',
      'Use Python or JavaScript libraries for graphics generation.',
      'Test with sample data.',
      'Refine interface and aesthetics.',
      'Document development process.'
    ],
    requiredResources: ['Python/JS', 'Design Tools', 'Basic UX/UI Knowledge'],
    potentialMentors: ['CS Teacher', 'Design Teacher', 'Graphic Designer'],
    howToShowcase: 'Share screenshots, demo videos, and a GitHub repository online.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Host a Peer Mentorship Program',
    description: 'Connect upperclassmen with underclassmen for guidance and support.',
    difficulty: 'Beginner',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Builds leadership and community skills.',
    gettingStarted: [
      'Recruit mentors and mentees.',
      'Schedule regular check-ins and activities.',
      'Track progress and collect feedback.',
      'Offer workshops or events.',
      'Document program outcomes.'
    ],
    requiredResources: ['Volunteers', 'Scheduling Tools', 'Communication Skills'],
    potentialMentors: ['School Counselor', 'Teacher Advisor', 'Student Council'],
    howToShowcase: 'Share testimonials, program summaries, and photos online.'
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
    title: 'Develop a Peer Entrepreneurship Simulation Game',
    description: 'Design a digital or board game simulating business decisions and management.',
    difficulty: 'Intermediate',
    category: 'Business',
    time: 'High',
    whyItMatters: 'Teaches entrepreneurship and decision-making while building design and coding skills.',
    gettingStarted: [
      'Outline game mechanics and goals.',
      'Design prototype digitally or physically.',
      'Test with classmates and iterate.',
      'Add scoring and reward systems.',
      'Document the game and provide instructions.'
    ],
    requiredResources: ['Game Design Tools', 'Coding Knowledge Optional', 'Art Supplies'],
    potentialMentors: ['Economics Teacher', 'Design Teacher', 'Local Entrepreneur'],
    howToShowcase: 'Share a demo, print versions, or digital simulations online or at school events.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    title: 'Create an AI Habit Tracker',
    description: 'Develop a tool that uses AI to suggest improvements for daily habits and routines.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Promotes self-improvement while strengthening coding and AI skills.',
    gettingStarted: [
      'Identify habits to track and data points.',
      'Use ML libraries to suggest personalized improvements.',
      'Build a web or app interface for users.',
      'Test and refine AI recommendations.',
      'Document methodology and results.'
    ],
    requiredResources: ['Python', 'ML Libraries', 'Web/App Dev Platform'],
    potentialMentors: ['CS Teacher', 'AI Researcher', 'Psychology Teacher'],
    howToShowcase: 'Share a demo online, record a tutorial, and post the project on GitHub.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-pink-400 to-red-500',
    title: 'Launch a Teen Science Exploration Podcast',
    description: 'Discuss new discoveries, experiments, and student science projects.',
    difficulty: 'Beginner',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Builds communication skills and promotes STEM education.',
    gettingStarted: [
      'Plan episodes around experiments or discoveries.',
      'Invite peers or teachers as guests.',
      'Record and edit episodes.',
      'Publish online via Anchor.fm.',
      'Promote through school clubs and social media.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm'],
    potentialMentors: ['Science Teacher', 'Lab Supervisor', 'Local Scientist'],
    howToShowcase: 'Post episodes and summaries online, highlight projects and experiments discussed.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Develop a Virtual Museum Exhibit',
    description: 'Create an online exhibit featuring local history, art, or science projects.',
    difficulty: 'Intermediate',
    category: 'Arts',
    time: 'High',
    whyItMatters: 'Combines research, design, and digital presentation skills.',
    gettingStarted: [
      'Select a theme and gather content.',
      'Design virtual exhibit layout and navigation.',
      'Add interactive elements like videos or quizzes.',
      'Test with peers and collect feedback.',
      'Publish and promote online.'
    ],
    requiredResources: ['Web Design Tools', 'Digital Media', 'Research Materials'],
    potentialMentors: ['History/Art Teacher', 'CS Teacher', 'Museum Curator'],
    howToShowcase: 'Post the virtual exhibit online, include interactive media, and share on social media.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Coordinate a School Garden Project',
    description: 'Create a garden for students to grow vegetables, flowers, or herbs.',
    difficulty: 'Beginner',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Encourages sustainability, community, and teamwork skills.',
    gettingStarted: [
      'Identify suitable outdoor or indoor space.',
      'Plan garden layout and select plants.',
      'Recruit student volunteers for planting and maintenance.',
      'Track growth and organize harvest activities.',
      'Document the project and impact.'
    ],
    requiredResources: ['Gardening Tools', 'Seeds/Plants', 'Volunteers'],
    potentialMentors: ['Biology Teacher', 'Environmental Club Advisor', 'Local Gardener'],
    howToShowcase: 'Share photos, growth progress, and harvest outcomes online.'
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
    title: 'Start a Student Crowdfunding Guide',
    description: 'Write a guide for peers on raising funds for school projects or startups.',
    difficulty: 'Beginner',
    category: 'Business',
    time: 'Low',
    whyItMatters: 'Teaches writing and entrepreneurial skills while supporting student initiatives.',
    gettingStarted: [
      'Research crowdfunding platforms and strategies.',
      'Write step-by-step guides with examples.',
      'Design layout using Canva or Google Docs.',
      'Share guide digitally or print copies.',
      'Gather feedback and improve content.'
    ],
    requiredResources: ['Writing Skills', 'Design Tools', 'Research Skills'],
    potentialMentors: ['Economics Teacher', 'Entrepreneur', 'School Club Advisor'],
    howToShowcase: 'Post online, share with peers, and include testimonials from students who use the guide.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    title: 'Develop an AI College Essay Coach',
    description: 'Build a tool that provides feedback and suggestions on college essays.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Helps peers improve writing while learning AI and NLP programming.',
    gettingStarted: [
      'Collect sample essays and feedback.',
      'Train an AI model to give constructive suggestions.',
      'Build a web interface for essay input.',
      'Test with peers and refine recommendations.',
      'Document methodology and results.'
    ],
    requiredResources: ['Python', 'NLP Libraries', 'Web Dev Platform'],
    potentialMentors: ['English Teacher', 'CS Teacher', 'College Counselor'],
    howToShowcase: 'Share an online demo, tutorial video, and GitHub repository.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
    title: 'Launch a Teen Fitness & Health Podcast',
    description: 'Discuss exercise, nutrition, and wellness tips for high school students.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Promotes health awareness and communication skills.',
    gettingStarted: [
      'Plan episode topics and invite guest speakers.',
      'Record and edit using a microphone and software.',
      'Publish weekly via podcast platforms.',
      'Promote via social media and school networks.',
      'Gather listener feedback and improve content.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm'],
    potentialMentors: ['PE Teacher', 'School Nurse', 'Local Fitness Coach'],
    howToShowcase: 'Post episodes online, highlight wellness tips, and share with school community.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Create an Educational YouTube Channel',
    description: 'Produce short videos teaching concepts in science, math, or humanities.',
    difficulty: 'Intermediate',
    category: 'Arts',
    time: 'High',
    whyItMatters: 'Builds video production skills and promotes learning for peers.',
    gettingStarted: [
      'Select topics and script videos.',
      'Record with a camera or smartphone.',
      'Edit using free software like DaVinci Resolve.',
      'Upload and optimize for YouTube.',
      'Promote through social media and school networks.'
    ],
    requiredResources: ['Camera/Smartphone', 'Video Editing Software', 'Scripting Skills'],
    potentialMentors: ['CS Teacher', 'Science/Math Teacher', 'Media Specialist'],
    howToShowcase: 'Share videos online, create playlists, and track engagement statistics.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Coordinate a Peer Book Exchange',
    description: 'Organize a system for students to trade books with each other.',
    difficulty: 'Beginner',
    category: 'Social Good',
    time: 'Low',
    whyItMatters: 'Encourages reading and builds community.',
    gettingStarted: [
      'Collect donated books or set up a collection system.',
      'Create an online or physical catalog.',
      'Organize exchange events.',
      'Track participation and gather feedback.',
      'Document and promote the initiative.'
    ],
    requiredResources: ['Volunteers', 'Book Storage', 'Catalog Tools'],
    potentialMentors: ['Librarian', 'English Teacher', 'Student Council Advisor'],
    howToShowcase: 'Share photos, book lists, and success stories online.'
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
    title: 'Develop a Virtual Stock Market Game',
    description: 'Create a simulation for students to learn investing and trading strategies.',
    difficulty: 'Intermediate',
    category: 'Business',
    time: 'Medium',
    whyItMatters: 'Teaches finance and strategy while improving coding or spreadsheet skills.',
    gettingStarted: [
      'Define rules and objectives for the game.',
      'Build a web or spreadsheet-based simulation.',
      'Invite peers to participate and track performance.',
      'Analyze results and refine gameplay.',
      'Document learning outcomes and tips.'
    ],
    requiredResources: ['Excel/Sheets or Web Dev Skills', 'Financial Knowledge', 'Coding Optional'],
    potentialMentors: ['Economics Teacher', 'Math Teacher', 'Local Investor'],
    howToShowcase: 'Post online, include leaderboards, and share tutorials for peers.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    title: 'Build an AI-Powered Mental Math Trainer',
    description: 'Create a program that helps students improve mental math skills using adaptive AI challenges.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Strengthens math skills while teaching AI and programming fundamentals.',
    gettingStarted: [
      'Define levels of difficulty and types of math problems.',
      'Use Python and ML libraries to generate adaptive problem sets.',
      'Design a simple interface for students to practice.',
      'Test with peers and refine difficulty algorithms.',
      'Document development process and results.'
    ],
    requiredResources: ['Python', 'ML Libraries', 'Basic UI Skills'],
    potentialMentors: ['Math Teacher', 'CS Teacher', 'AI Researcher'],
    howToShowcase: 'Post a demo online, share code on GitHub, and create a video walkthrough.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-pink-400 to-red-500',
    title: 'Host a Teen Mental Health Podcast',
    description: 'Discuss coping strategies, wellness tips, and interviews with mental health advocates.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Raises awareness on mental health issues and builds communication skills.',
    gettingStarted: [
      'Plan episodes and invite guests.',
      'Record with a microphone or phone.',
      'Edit audio using free software like Audacity.',
      'Publish weekly on platforms like Anchor.fm.',
      'Promote via social media and school networks.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm'],
    potentialMentors: ['School Counselor', 'Psychology Teacher', 'Local Therapist'],
    howToShowcase: 'Post episodes online, share show notes, and highlight stories on social media.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Create a Digital Art Showcase',
    description: 'Build a platform for students to share digital artwork, animations, and designs.',
    difficulty: 'Intermediate',
    category: 'Arts',
    time: 'Medium',
    whyItMatters: 'Encourages creativity and builds web design and portfolio skills.',
    gettingStarted: [
      'Design the website layout or use a website builder.',
      'Invite student artists to submit work.',
      'Organize galleries and categories.',
      'Promote online and gather user feedback.',
      'Document the curation process.'
    ],
    requiredResources: ['Web Design Skills', 'Graphic Design Tools', 'Volunteers'],
    potentialMentors: ['Art Teacher', 'Design Teacher', 'Local Digital Artist'],
    howToShowcase: 'Share the website, highlight featured artists, and promote on social media.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Coordinate a Local Skills Exchange',
    description: 'Organize a system where teens can trade skills like coding, music lessons, or languages.',
    difficulty: 'Beginner',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Fosters community learning and peer collaboration.',
    gettingStarted: [
      'Survey students to identify skills to share.',
      'Set up an online or physical exchange platform.',
      'Organize events or classes for skill trading.',
      'Track participation and gather feedback.',
      'Document successful exchanges.'
    ],
    requiredResources: ['Volunteers', 'Communication Tools', 'Scheduling Platform'],
    potentialMentors: ['School Counselor', 'Club Advisor', 'Community Organizer'],
    howToShowcase: 'Post success stories, participant testimonials, and event photos online.'
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
    title: 'Develop a Peer Scholarship Finder App',
    description: 'Create an app to help students discover scholarships matching their profile.',
    difficulty: 'Intermediate',
    category: 'Business',
    time: 'Medium',
    whyItMatters: 'Simplifies scholarship searches and improves programming and UX skills.',
    gettingStarted: [
      'Collect data on scholarships and eligibility criteria.',
      'Build a simple app with filters for student profiles.',
      'Test with peers and refine recommendations.',
      'Add notifications or reminders for deadlines.',
      'Document methodology and user feedback.'
    ],
    requiredResources: ['Python/JavaScript', 'Database Knowledge', 'UX/UI Design Skills'],
    potentialMentors: ['CS Teacher', 'Guidance Counselor', 'Local Tech Developer'],
    howToShowcase: 'Post app demo online, record walkthrough video, and share code on GitHub.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    title: 'Create an AI-Powered Language Pronunciation Coach',
    description: 'Build a tool that helps students improve pronunciation in foreign languages.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Supports language learning and strengthens AI and speech processing skills.',
    gettingStarted: [
      'Collect audio samples and pronunciation rules.',
      'Train a speech recognition model with Python libraries.',
      'Design a simple interface for input and feedback.',
      'Test and refine accuracy with peer users.',
      'Document methodology and results.'
    ],
    requiredResources: ['Python', 'Speech Recognition Libraries', 'Web/App Platform'],
    potentialMentors: ['Language Teacher', 'CS Teacher', 'AI Researcher'],
    howToShowcase: 'Share a demo online, record tutorial videos, and post project code on GitHub.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
    title: 'Host a Teen Tech Review Podcast',
    description: 'Discuss latest apps, gadgets, and tech trends relevant to students.',
    difficulty: 'Beginner',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Builds communication skills while keeping students informed about technology.',
    gettingStarted: [
      'Research trending apps and tech topics.',
      'Plan episodes and invite tech enthusiasts as guests.',
      'Record and edit episodes.',
      'Publish weekly on Anchor.fm or Spotify.',
      'Promote via social media.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm'],
    potentialMentors: ['CS Teacher', 'Tech Club Advisor', 'Local IT Professional'],
    howToShowcase: 'Post episodes online, highlight tech reviews, and create social media clips.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Design an Interactive STEM Quiz Platform',
    description: 'Create a web-based quiz game to test STEM knowledge for peers.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Promotes learning while improving coding and game design skills.',
    gettingStarted: [
      'Create question bank with multiple-choice and interactive content.',
      'Design web interface with HTML, CSS, and JS.',
      'Test quizzes with peers for difficulty and fun factor.',
      'Add scoring, feedback, and levels.',
      'Document development and learning outcomes.'
    ],
    requiredResources: ['HTML/CSS/JS', 'Design Skills', 'Question Bank'],
    potentialMentors: ['CS Teacher', 'Math/Science Teacher', 'Game Designer'],
    howToShowcase: 'Host online, share leaderboard, and record demo videos.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Coordinate a Teen Skills Workshop Series',
    description: 'Organize weekly workshops where students teach skills like coding, drawing, or public speaking.',
    difficulty: 'Beginner',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Fosters leadership, teaching skills, and community collaboration.',
    gettingStarted: [
      'Survey peers to identify skills and interests.',
      'Schedule weekly sessions and recruit instructors.',
      'Organize venue or online platform.',
      'Track attendance and gather feedback.',
      'Document sessions and create recaps.'
    ],
    requiredResources: ['Volunteers', 'Venue or Zoom', 'Planning Tools'],
    potentialMentors: ['Club Advisor', 'CS/Art Teacher', 'Local Expert'],
    howToShowcase: 'Post videos, session recaps, and testimonials online or in school newsletter.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    title: 'Develop a Teen Mindfulness Chatbot',
    description: 'Create a chatbot that helps teens practice mindfulness and stress relief exercises.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Supports mental health while developing AI and programming skills.',
    gettingStarted: [
      'Research mindfulness exercises suitable for teens.',
      'Learn chatbot development using Python and chatbot frameworks.',
      'Program conversational flows and responses.',
      'Test with friends and gather feedback.',
      'Iterate and improve based on user experience.'
    ],
    requiredResources: ['Python', 'Chatbot Frameworks', 'Mindfulness Resources'],
    potentialMentors: ['Psychology Teacher', 'CS Teacher', 'Local AI Developer'],
    howToShowcase: 'Share demo online, post code on GitHub, and create tutorial videos.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-pink-400 to-red-500',
    title: 'Launch a Teen Sustainability Podcast',
    description: 'Discuss environmental issues, sustainable habits, and student-led eco initiatives.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Raises awareness about sustainability and develops communication skills.',
    gettingStarted: [
      'Plan podcast episodes and topics.',
      'Record using a microphone or phone.',
      'Edit episodes with free software like Audacity.',
      'Publish weekly on Anchor.fm or Spotify.',
      'Promote episodes on social media.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm'],
    potentialMentors: ['Science Teacher', 'Environmental Club Advisor', 'Local Activist'],
    howToShowcase: 'Share episodes online, post show notes, and gather listener feedback.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Design a Student Wellness Infographic Series',
    description: 'Create visually engaging infographics with tips on mental and physical health for teens.',
    difficulty: 'Beginner',
    category: 'Arts',
    time: 'Low',
    whyItMatters: 'Promotes teen wellness and strengthens design and communication skills.',
    gettingStarted: [
      'Identify wellness topics like stress management or healthy habits.',
      'Use Canva or similar tools to design infographics.',
      'Share designs with peers for feedback.',
      'Publish online or in school newsletter.',
      'Track engagement and revise designs.'
    ],
    requiredResources: ['Canva or Photoshop', 'Design Skills', 'Research Materials'],
    potentialMentors: ['Health Teacher', 'Art Teacher', 'School Counselor'],
    howToShowcase: 'Post on Instagram, school website, or create a digital portfolio.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Organize a Teen Coding Bootcamp',
    description: 'Host workshops teaching coding basics for students new to programming.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Builds tech skills, leadership, and community impact.',
    gettingStarted: [
      'Plan curriculum and workshop schedule.',
      'Recruit volunteers or peer instructors.',
      'Host sessions in person or online.',
      'Gather feedback and refine curriculum.',
      'Document projects and student progress.'
    ],
    requiredResources: ['Computers', 'Coding Platforms', 'Volunteers'],
    potentialMentors: ['CS Teacher', 'Local Software Engineer', 'Tech Club Advisor'],
    howToShowcase: 'Post student projects online, create a summary report, and record demo videos.'
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
    title: 'Create a Teen Entrepreneurship Toolkit',
    description: 'Develop a guide for students to start small businesses or projects at school.',
    difficulty: 'Beginner',
    category: 'Business',
    time: 'Medium',
    whyItMatters: 'Empowers students with entrepreneurship skills and financial literacy.',
    gettingStarted: [
      'Research common teen business ideas.',
      'Compile resources on budgeting, marketing, and management.',
      'Design toolkit in PDF or website format.',
      'Share with peers for feedback.',
      'Update toolkit based on real-world testing.'
    ],
    requiredResources: ['Word/Design Tools', 'Research Materials', 'Peer Feedback'],
    potentialMentors: ['Business Teacher', 'Local Entrepreneur', 'School Club Advisor'],
    howToShowcase: 'Publish online, share toolkit with school clubs, and track student engagement.'
  },
   {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    title: 'Develop an AI-Powered Reading Companion',
    description: 'Create a tool that suggests reading material and quizzes based on student interests.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Encourages literacy and AI learning while personalizing reading experiences.',
    gettingStarted: [
      'Collect a dataset of books and articles for teens.',
      'Develop a recommendation algorithm using Python.',
      'Create a simple interface for users.',
      'Test with peers and collect feedback.',
      'Refine algorithm and improve user experience.'
    ],
    requiredResources: ['Python', 'Dataset of Books', 'Basic UI Skills'],
    potentialMentors: ['English Teacher', 'CS Teacher', 'Local AI Developer'],
    howToShowcase: 'Share a web demo, record a walkthrough, and post code on GitHub.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-pink-400 to-red-500',
    title: 'Host a Teen Science Mythbusters Podcast',
    description: 'Debunk common science myths and explain concepts in a fun way for teens.',
    difficulty: 'Beginner',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Promotes science literacy and critical thinking among peers.',
    gettingStarted: [
      'List popular science myths to explore.',
      'Research correct scientific explanations.',
      'Record episodes and edit audio.',
      'Publish weekly on Anchor.fm or Spotify.',
      'Promote on social media and school networks.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm', 'Research Materials'],
    potentialMentors: ['Science Teacher', 'Local Scientist', 'Podcasting Club Advisor'],
    howToShowcase: 'Post episodes online, share show notes, and create short clips for social media.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Create an Interactive Career Path Map',
    description: 'Design a web tool helping students explore different careers based on skills and interests.',
    difficulty: 'Intermediate',
    category: 'Business',
    time: 'Medium',
    whyItMatters: 'Guides teens in career exploration and strengthens coding and UX design skills.',
    gettingStarted: [
      'Research common career paths and skill requirements.',
      'Plan interactive website layout and flow.',
      'Develop the tool with HTML, CSS, JS.',
      'Test with peers and collect feedback.',
      'Publish online and update content regularly.'
    ],
    requiredResources: ['HTML/CSS/JS', 'Research Materials', 'Web Hosting'],
    potentialMentors: ['Guidance Counselor', 'CS Teacher', 'Career Coach'],
    howToShowcase: 'Share website with peers, record demo video, and post walkthrough online.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Organize a Peer Tutoring Swap',
    description: 'Set up a system where students can exchange tutoring services in subjects they excel at.',
    difficulty: 'Beginner',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Promotes peer learning and leadership skills while helping students succeed academically.',
    gettingStarted: [
      'Survey students to identify tutoring needs and strengths.',
      'Set up an online scheduling system.',
      'Pair students and track sessions.',
      'Collect feedback and improve the system.',
      'Document success stories and participation rates.'
    ],
    requiredResources: ['Online Scheduling Tool', 'Volunteers', 'Communication Platform'],
    potentialMentors: ['School Counselor', 'Teachers', 'Club Advisors'],
    howToShowcase: 'Post success stories online, share testimonials, and create a short presentation for school.'
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
    title: 'Develop a Teen Volunteer Impact Tracker',
    description: 'Create a web app where students log volunteer hours and track community impact.',
    difficulty: 'Intermediate',
    category: 'Business',
    time: 'Medium',
    whyItMatters: 'Encourages volunteering while teaching coding, data management, and civic engagement.',
    gettingStarted: [
      'Plan data fields and app structure.',
      'Build web interface using Python/JavaScript.',
      'Allow students to log activities and hours.',
      'Visualize community impact using charts or graphs.',
      'Test with peers and gather feedback.'
    ],
    requiredResources: ['Python/JS', 'Database Knowledge', 'Visualization Tools'],
    potentialMentors: ['CS Teacher', 'Volunteer Coordinator', 'Local Developer'],
    howToShowcase: 'Share app with students, create dashboard screenshots, and record walkthrough.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    title: 'Create an AI-Powered Study Flash Game',
    description: 'Design a game that quizzes students with AI-generated questions in a fun, interactive format.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Makes studying engaging and teaches AI, programming, and game design skills.',
    gettingStarted: [
      'Define subjects and topics for questions.',
      'Use Python/ML to generate adaptive questions.',
      'Develop game interface with scoring and levels.',
      'Test with peers and refine difficulty.',
      'Document design and AI methodology.'
    ],
    requiredResources: ['Python', 'ML Libraries', 'Game Design Tools'],
    potentialMentors: ['CS Teacher', 'Math Teacher', 'Local Game Developer'],
    howToShowcase: 'Share online demo, record gameplay videos, and post code on GitHub.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
    title: 'Host a Teen Creative Writing Podcast',
    description: 'Read and discuss original teen-written stories, poems, and scripts.',
    difficulty: 'Beginner',
    category: 'Arts',
    time: 'Medium',
    whyItMatters: 'Encourages writing, reading, and communication skills among teens.',
    gettingStarted: [
      'Collect submissions from peers.',
      'Plan episode themes and reading order.',
      'Record and edit episodes.',
      'Publish weekly on podcast platforms.',
      'Promote via social media and school networks.'
    ],
    requiredResources: ['Microphone', 'Audacity', 'Anchor.fm', 'Peer Submissions'],
    potentialMentors: ['English Teacher', 'Creative Writing Club Advisor', 'Local Author'],
    howToShowcase: 'Post episodes online, create blog posts, and highlight teen authors.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Design a School Event Planning Toolkit',
    description: 'Create a toolkit to help students plan events efficiently with templates and checklists.',
    difficulty: 'Intermediate',
    category: 'Business',
    time: 'Medium',
    whyItMatters: 'Teaches project management and organization skills while helping school clubs.',
    gettingStarted: [
      'List common tasks for school events.',
      'Design checklists, templates, and budget planners.',
      'Compile into a digital toolkit.',
      'Test with school clubs and collect feedback.',
      'Refine and distribute toolkit.'
    ],
    requiredResources: ['Design Tools', 'Word/Excel', 'Feedback from Students'],
    potentialMentors: ['Club Advisor', 'Business Teacher', 'Event Coordinator'],
    howToShowcase: 'Share toolkit online, collect user testimonials, and highlight successful events.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Coordinate a Teen Language Exchange Program',
    description: 'Pair students to practice different languages through weekly conversation sessions.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Improves language skills, cross-cultural communication, and peer collaboration.',
    gettingStarted: [
      'Survey students for languages spoken and learning interests.',
      'Pair participants based on goals.',
      'Organize weekly meetups or virtual sessions.',
      'Gather feedback and track progress.',
      'Document success stories and learning outcomes.'
    ],
    requiredResources: ['Scheduling Platform', 'Volunteers', 'Peer Participants'],
    potentialMentors: ['Language Teacher', 'Club Advisor', 'Local Polyglot'],
    howToShowcase: 'Share stories online, post session highlights, and create a summary report.'
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
    title: 'Build a Peer Eco-Challenge Tracker',
    description: 'Create a platform where students log eco-friendly actions and compete in sustainability challenges.',
    difficulty: 'Intermediate',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Encourages environmental responsibility while teaching coding and UX skills.',
    gettingStarted: [
      'Define challenges and eco-friendly actions.',
      'Design web interface to log actions and track progress.',
      'Add leaderboard and reward system.',
      'Test with peers and gather feedback.',
      'Document participation and outcomes.'
    ],
    requiredResources: ['Web Dev Tools', 'Database', 'Volunteers'],
    potentialMentors: ['Science Teacher', 'Environmental Club Advisor', 'CS Teacher'],
    howToShowcase: 'Share platform online, post leaderboards, and create social media updates.'
  }, 
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    title: 'Create a Comprehensive "Intro to" Guide',
    description: 'Develop a complete beginner\'s guide for a skill you have mastered to help peers learn quickly.',
    difficulty: 'Beginner',
    category: 'Education',
    time: 'Medium',
    whyItMatters: 'Teaches mastery, reinforces your knowledge, and helps others learn efficiently.',
    gettingStarted: [
      'Select a skill you are proficient in.',
      'Break it down into beginner-friendly lessons.',
      'Write clear instructions with examples and visuals.',
      'Share the guide with friends or online.',
      'Gather feedback and refine content.'
    ],
    requiredResources: ['Writing Tools', 'Graphics/Visual Aids', 'Research Materials'],
    potentialMentors: ['Teacher in Subject', 'Club Advisor', 'Peer Tutor'],
    howToShowcase: 'Post guide online, create a PDF download, and share via social media or school newsletter.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Start a Peer Learning Club',
    description: 'Launch a club teaching peers skills like coding, chess, or debate through workshops and practice sessions.',
    difficulty: 'Intermediate',
    category: 'Education',
    time: 'High',
    whyItMatters: 'Builds leadership skills while providing structured learning opportunities for peers.',
    gettingStarted: [
      'Identify a skill or topic for the club.',
      'Recruit members and plan sessions.',
      'Organize weekly workshops or practice events.',
      'Track member progress and adjust content.',
      'Host mini competitions or showcases to encourage participation.'
    ],
    requiredResources: ['Meeting Space', 'Materials for Skill', 'Sign-up Platform'],
    potentialMentors: ['Teacher', 'Club Advisor', 'Local Expert'],
    howToShowcase: 'Document club sessions, create highlight videos, and post on Instagram or school website.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Develop a Hands-On Science Demo Kit',
    description: 'Create an educational kit with interactive experiments for elementary students to explore science.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Makes science engaging, encourages early STEM learning, and strengthens project design skills.',
    gettingStarted: [
      'Select a few simple science experiments.',
      'Gather materials and design step-by-step instructions.',
      'Package into an accessible kit for students.',
      'Test with peers or younger students.',
      'Iterate based on feedback for clarity and safety.'
    ],
    requiredResources: ['Science Supplies', 'Instruction Design', 'Testing Volunteers'],
    potentialMentors: ['Science Teacher', 'Local Scientist', 'STEM Club Advisor'],
    howToShowcase: 'Create tutorial videos, share kits with schools, and post experiments online.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-pink-400 to-red-500',
    title: 'Record Video Tutorials',
    description: 'Create videos explaining difficult-to-understand concepts for peers.',
    difficulty: 'Beginner',
    category: 'Education',
    time: 'Medium',
    whyItMatters: 'Helps reinforce your own understanding and provides accessible resources for others.',
    gettingStarted: [
      'Choose a concept or subject area to explain.',
      'Plan video script and examples.',
      'Record tutorials using a camera or screen recording.',
      'Edit videos with software like iMovie or DaVinci Resolve.',
      'Share online via YouTube or school platforms.'
    ],
    requiredResources: ['Camera/Screen Recorder', 'Video Editing Software', 'Research Materials'],
    potentialMentors: ['Teacher', 'Media Club Advisor', 'Peer Tutor'],
    howToShowcase: 'Upload videos online, track views and engagement, and collect feedback for improvement.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    title: 'Create a Life Skills Workshop Series',
    description: 'Design workshops teaching practical life skills like cooking, sewing, or personal finance.',
    difficulty: 'Intermediate',
    category: 'Education',
    time: 'High',
    whyItMatters: 'Equips peers with essential skills for independence and builds your instructional design abilities.',
    gettingStarted: [
      'Identify life skills topics relevant for teens.',
      'Plan workshop structure and materials.',
      'Recruit participants and schedule sessions.',
      'Lead workshops and facilitate hands-on practice.',
      'Collect feedback and refine future workshops.'
    ],
    requiredResources: ['Workshop Space', 'Materials for Skills', 'Scheduling Tools'],
    potentialMentors: ['Home Ec Teacher', 'Club Advisor', 'Local Expert'],
    howToShowcase: 'Document sessions with photos/videos, create a toolkit online, and share testimonials.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    title: 'Build a Free Educational Resources Website',
    description: 'Create a platform collecting the best free educational tools and resources online.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Helps students access quality learning materials and strengthens web development skills.',
    gettingStarted: [
      'Research free online educational resources.',
      'Plan website layout and categories.',
      'Develop the website with HTML, CSS, and JS.',
      'Populate with curated resources and descriptions.',
      'Test usability and gather feedback.'
    ],
    requiredResources: ['Web Hosting', 'Web Development Skills', 'Research'],
    potentialMentors: ['CS Teacher', 'Librarian', 'Local Web Developer'],
    howToShowcase: 'Launch website, share on social media, and track user engagement.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Design an Educational Escape Room',
    description: 'Create an escape room with puzzles and challenges that teach academic concepts.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Makes learning interactive and fun, enhancing problem-solving and teamwork skills.',
    gettingStarted: [
      'Select a subject or topic for the escape room.',
      'Design puzzles aligned with learning objectives.',
      'Set up physical or digital escape room space.',
      'Test with small groups and refine clues.',
      'Host sessions and track participant learning outcomes.'
    ],
    requiredResources: ['Puzzle Materials', 'Space or Digital Platform', 'Planning Tools'],
    potentialMentors: ['Teacher', 'Club Advisor', 'STEM Specialist'],
    howToShowcase: 'Record participants solving puzzles, post walkthroughs online, and share participant feedback.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
    title: 'Create a History Through Music Presentation',
    description: 'Develop a lesson or presentation showing historical events and movements through music.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Combines history and arts to create engaging, memorable learning experiences.',
    gettingStarted: [
      'Research historical events and corresponding music.',
      'Select key songs or compositions.',
      'Design a multimedia presentation linking history and music.',
      'Practice delivery and gather feedback.',
      'Share with classmates or upload online.'
    ],
    requiredResources: ['Presentation Software', 'Music Library', 'Research Materials'],
    potentialMentors: ['History Teacher', 'Music Teacher', 'Club Advisor'],
    howToShowcase: 'Present in class, record session, or share slides/video online.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    title: 'Start a Math Circle or Physics Club',
    description: 'Organize collaborative problem-solving sessions for students interested in STEM.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Builds analytical thinking, teamwork, and leadership skills among peers.',
    gettingStarted: [
      'Recruit interested students.',
      'Plan weekly problem sets or challenges.',
      'Host sessions in person or online.',
      'Track participant progress and discuss solutions.',
      'Invite guest speakers or mentors for enrichment.'
    ],
    requiredResources: ['Meeting Space', 'Problem Sets', 'Scheduling Platform'],
    potentialMentors: ['Math/Physics Teacher', 'Local STEM Professional', 'Club Advisor'],
    howToShowcase: 'Document sessions online, post challenging problems for engagement, and track participation.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Create a Digital Map of Historical Landmarks',
    description: 'Develop an interactive map highlighting significant historical sites in your town or city.',
    difficulty: 'Intermediate',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Preserves local history while teaching mapping, digital design, and research skills.',
    gettingStarted: [
      'Research historical landmarks in your area.',
      'Gather images, descriptions, and coordinates.',
      'Use a mapping tool like Google My Maps to create the map.',
      'Test map with friends and collect feedback.',
      'Share the map online or with your local library.'
    ],
    requiredResources: ['Mapping Tool', 'Research Materials', 'Images'],
    potentialMentors: ['History Teacher', 'Local Historian', 'GIS Specialist'],
    howToShowcase: 'Embed the map on a website, create a walkthrough video, and share on social media.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    title: 'Research Your Family Genealogy',
    description: 'Trace your family history and create a detailed, interactive family tree.',
    difficulty: 'Intermediate',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Connects you to your roots while teaching research and data organization skills.',
    gettingStarted: [
      'Interview family members for names, dates, and stories.',
      'Search public records and genealogy databases.',
      'Organize information into a visual family tree.',
      'Add photos and interesting stories for context.',
      'Share the tree digitally or in print with relatives.'
    ],
    requiredResources: ['Genealogy Databases', 'Interview Skills', 'Graphics Software'],
    potentialMentors: ['History Teacher', 'Librarian', 'Family Historian'],
    howToShowcase: 'Publish an interactive tree online, create a presentation, and share stories with peers.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    title: 'Cook Through a Historical Period or Culture',
    description: 'Research historical recipes and prepare dishes from a specific time or culture.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Explores history and culture through food while building research and culinary skills.',
    gettingStarted: [
      'Select a historical period or culture.',
      'Research authentic recipes and ingredients.',
      'Cook dishes while documenting the process.',
      'Share dishes with family or classmates.',
      'Reflect on cultural and historical context.'
    ],
    requiredResources: ['Kitchen Tools', 'Recipe Books', 'Historical Research'],
    potentialMentors: ['History Teacher', 'Culinary Instructor', 'Cultural Expert'],
    howToShowcase: 'Create a photo/video series, write blog posts, and share recipes online.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    title: 'Recreate a Historical Artifact or Clothing Item',
    description: 'Use period-appropriate methods and materials to reconstruct a historical object or garment.',
    difficulty: 'Advanced',
    category: 'Humanities',
    time: 'High',
    whyItMatters: 'Deepens understanding of historical craftsmanship and culture while honing practical skills.',
    gettingStarted: [
      'Select an artifact or piece of clothing.',
      'Research materials, methods, and historical context.',
      'Source materials and tools.',
      'Recreate the item using authentic techniques.',
      'Document the process and final product.'
    ],
    requiredResources: ['Research Materials', 'Craft Tools', 'Reference Images'],
    potentialMentors: ['History Teacher', 'Artisan', 'Museum Curator'],
    howToShowcase: 'Exhibit item in school/museum, create a photo/video tutorial, and post documentation online.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-pink-400 to-red-500',
    title: 'Start a Blog on Historical Accuracy in Films',
    description: 'Analyze period films and write blog posts assessing their historical accuracy.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Develops critical thinking, research, and writing skills while engaging with pop culture.',
    gettingStarted: [
      'Select historical films to review.',
      'Research historical events and details in the films.',
      'Write analytical posts comparing film to historical facts.',
      'Publish on a blog platform like WordPress.',
      'Promote posts through social media.'
    ],
    requiredResources: ['Blog Platform', 'Research Materials', 'Writing Skills'],
    potentialMentors: ['History Teacher', 'English Teacher', 'Film Critic'],
    howToShowcase: 'Share posts online, link to related discussions, and compile top articles in a digital portfolio.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    title: 'Collect and Digitize Old Town Photographs',
    description: 'Scan and archive old photographs to create a digital record of your town\'s history.',
    difficulty: 'Intermediate',
    category: 'Humanities',
    time: 'High',
    whyItMatters: 'Preserves community history and teaches archival and digital organization skills.',
    gettingStarted: [
      'Collect photographs from families, libraries, or local archives.',
      'Scan and digitize images.',
      'Organize photos with metadata like dates and locations.',
      'Create a digital gallery or website.',
      'Share with local historical societies or the community.'
    ],
    requiredResources: ['Scanner', 'Digital Storage', 'Metadata Tools'],
    potentialMentors: ['Local Historian', 'Librarian', 'History Teacher'],
    howToShowcase: 'Publish an online gallery, create interactive slideshows, and share through local social media.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Research and Write a Biography of a Lesser-Known Figure',
    description: 'Uncover and document the life of a historical figure who is not widely known.',
    difficulty: 'Intermediate',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Expands historical knowledge and teaches research, writing, and storytelling skills.',
    gettingStarted: [
      'Select a lesser-known historical figure.',
      'Gather sources and research background.',
      'Write a detailed, engaging biography.',
      'Include illustrations or photos where possible.',
      'Share the biography online or as a publication.'
    ],
    requiredResources: ['Research Materials', 'Writing Tools', 'Archives Access'],
    potentialMentors: ['History Teacher', 'Local Historian', 'Librarian'],
    howToShowcase: 'Publish online, present at school, and share excerpts on social media.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
    title: 'Create a "Then and Now" Photo Series',
    description: 'Photograph current city locations and juxtapose them with historical images.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Visualizes historical change and fosters community awareness while practicing photography skills.',
    gettingStarted: [
      'Collect historical photos of local sites.',
      'Visit locations and take current photographs.',
      'Use software to align and compare images.',
      'Create a gallery or slideshow.',
      'Share with peers or community groups.'
    ],
    requiredResources: ['Camera', 'Photo Editing Software', 'Historical Images'],
    potentialMentors: ['History Teacher', 'Photography Teacher', 'Local Historian'],
    howToShowcase: 'Post online gallery, create slideshows, and share on social media or at school.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    title: 'Build a Timeline of a Technological or Artistic Movement',
    description: 'Create a visual or interactive timeline documenting a specific historical development in tech or art.',
    difficulty: 'Intermediate',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Organizes historical knowledge visually while strengthening research and presentation skills.',
    gettingStarted: [
      'Select a technological or artistic movement.',
      'Research key events, figures, and innovations.',
      'Design a timeline using digital tools.',
      'Include images, descriptions, and context.',
      'Share online or present to classmates.'
    ],
    requiredResources: ['Timeline Software', 'Research Materials', 'Visual Assets'],
    potentialMentors: ['History Teacher', 'Art/Tech Teacher', 'Local Historian'],
    howToShowcase: 'Publish timeline online, create interactive elements, and present in school exhibitions.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
    title: 'Learn a Traditional Folk Art or Craft',
    description: 'Study and practice a folk art or craft from your cultural heritage and document the process.',
    difficulty: 'Beginner',
    category: 'Arts',
    time: 'Medium',
    whyItMatters: 'Preserves cultural heritage while developing hands-on artistic skills.',
    gettingStarted: [
      'Research your cultural heritage and select a folk art.',
      'Gather materials and learn techniques.',
      'Practice and create completed pieces.',
      'Document your learning process and creations.',
      'Share with peers, family, or online community.'
    ],
    requiredResources: ['Art Supplies', 'Research Materials', 'Tutorials or Mentors'],
    potentialMentors: ['Art Teacher', 'Local Artisan', 'Cultural Expert'],
    howToShowcase: 'Create a photo/video series, share work online, or host a small exhibition.'
  },
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
  title: 'Write and Illustrate a Children\'s Book',
  description: 'Create and illustrate an original story aimed at young readers.',
  difficulty: 'Intermediate',
  category: 'Arts',
  time: 'High',
  whyItMatters: 'Builds storytelling, art, and communication skills while inspiring imagination in others.',
  gettingStarted: [
    'Brainstorm story ideas and themes for your audience.',
    'Write a simple manuscript with clear language.',
    'Sketch illustrations that match the tone and pacing.',
    'Combine text and art into a finished layout.',
    'Publish digitally or print small copies to share.'
  ],
  requiredResources: ['Drawing Tools', 'Writing Software', 'Illustration Supplies'],
  potentialMentors: ['Art Teacher', 'English Teacher', 'Children\'s Author'],
  howToShowcase: 'Share your book at school\'s fairs, libraries, or online reading events.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  title: 'Design and Silkscreen a Series of Original T-Shirts',
  description: 'Create your own wearable art through silkscreen printing.',
  difficulty: 'Intermediate',
  category: 'Design',
  time: 'Medium',
  whyItMatters: 'Combines creativity and entrepreneurship while building design skills.',
  gettingStarted: [
    'Sketch your T-shirt design ideas.',
    'Learn the basics of silkscreen printing or digital transfer.',
    'Test your designs on scrap fabric.',
    'Print your final designs on T-shirts.',
    'Showcase or sell your designs locally or online.'
  ],
  requiredResources: ['T-Shirts', 'Printing Materials', 'Design Software'],
  potentialMentors: ['Art Teacher', 'Local Designer', 'Screen Printing Expert'],
  howToShowcase: 'Host a mini pop-up or online launch for your shirt line.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-indigo-400 to-cyan-500',
  title: 'Create a Stop-Motion Animation Short Film',
  description: 'Use stop-motion techniques to tell a visual story through movement and creativity.',
  difficulty: 'Advanced',
  category: 'Arts',
  time: 'High',
  whyItMatters: 'Develops patience, storytelling, and editing skills through visual art.',
  gettingStarted: [
    'Write a simple story or storyboard.',
    'Build or sculpt small characters and props.',
    'Capture frame-by-frame photos for each scene.',
    'Edit the footage and add sound or voiceover.',
    'Publish the short film online or at school\'s film night.'
  ],
  requiredResources: ['Camera or Smartphone', 'Editing Software', 'Art Supplies'],
  potentialMentors: ['Art Teacher', 'Media Instructor', 'Animator'],
  howToShowcase: 'Submit to local film contests or display at school\'s art festival.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-blue-500',
  title: 'Build a Scale Model of a Famous Architectural Landmark',
  description: 'Create a miniature version of a landmark to explore architecture and design.',
  difficulty: 'Intermediate',
  category: 'Design',
  time: 'Medium',
  whyItMatters: 'Encourages precision, design understanding, and historical appreciation.',
  gettingStarted: [
    'Select a landmark and gather reference images.',
    'Sketch or plan the model\'s dimensions.',
    'Use cardboard, clay, or 3D printing to build it.',
    'Add realistic textures and details.',
    'Display it in class or at a local library.'
  ],
  requiredResources: ['Modeling Materials', 'Glue', 'Reference Photos'],
  potentialMentors: ['Architecture Teacher', 'Engineer', 'Art Instructor'],
  howToShowcase: 'Display at school\'s exhibition or local art showcase.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-rose-400 to-red-500',
  title: 'Start a Portfolio of Character Designs for a Video Game You Imagine',
  description: 'Design and illustrate characters for an imagined game world.',
  difficulty: 'Advanced',
  category: 'Design',
  time: 'High',
  whyItMatters: 'Strengthens design and world-building skills while exploring creativity in gaming.',
  gettingStarted: [
    'Brainstorm your game\'s concept and setting.',
    'Sketch different character types and personalities.',
    'Refine your best ideas digitally or by hand.',
    'Add color, poses, and small bios.',
    'Compile everything into a polished artbook or PDF.'
  ],
  requiredResources: ['Drawing Tools', 'Design Software', 'Inspiration Boards'],
  potentialMentors: ['Art Teacher', 'Game Designer', 'Illustrator'],
  howToShowcase: 'Post online, include in portfolios, or submit to art contests.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-600',
  title: 'Learn Bookbinding and Create Your Own Journals',
  description: 'Explore the traditional art of binding and make custom journals.',
  difficulty: 'Beginner',
  category: 'Arts',
  time: 'Medium',
  whyItMatters: 'Combines craftsmanship and creativity while producing practical art.',
  gettingStarted: [
    'Research simple bookbinding techniques.',
    'Gather paper, thread, and binding materials.',
    'Practice stitching or gluing methods.',
    'Design unique covers and binding styles.',
    'Gift or sell your journals at craft fairs.'
  ],
  requiredResources: ['Paper', 'Thread', 'Bookbinding Tools'],
  potentialMentors: ['Art Teacher', 'Craft Instructor', 'Local Artisan'],
  howToShowcase: 'Display in art shows or donate custom journals to school\'s library.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-orange-400 to-amber-600',
  title: 'Design and Build a Piece of Furniture',
  description: 'Create a custom chair, shelf, or small table that blends form and function.',
  difficulty: 'Advanced',
  category: 'Design',
  time: 'High',
  whyItMatters: 'Develops practical design thinking, patience, and craftsmanship.',
  gettingStarted: [
    'Sketch furniture concepts.',
    'Learn basic carpentry or 3D design tools.',
    'Measure and build prototypes.',
    'Sand, paint, or finish your final piece.',
    'Display it in your home or classroom.'
  ],
  requiredResources: ['Wood or Recycled Materials', 'Tools', 'Protective Gear'],
  potentialMentors: ['Shop Teacher', 'Carpenter', 'Industrial Designer'],
  howToShowcase: 'Feature at school\'s design fair or community art event.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-pink-400 to-red-400',
  title: 'Create a Large-Scale Mural for Your School or Community Center',
  description: 'Design and paint a mural that reflects a message or theme.',
  difficulty: 'Advanced',
  category: 'Arts',
  time: 'High',
  whyItMatters: 'Transforms public spaces and builds teamwork and artistic confidence.',
  gettingStarted: [
    'Get permission and measure your space.',
    'Create a rough sketch or digital draft.',
    'Gather a team and painting materials.',
    'Transfer the design and paint in layers.',
    'Seal the mural and host a reveal event.'
  ],
  requiredResources: ['Paint Supplies', 'Wall Space', 'Protective Coating'],
  potentialMentors: ['Art Teacher', 'Local Muralist', 'Community Leader'],
  howToShowcase: 'Unveil your mural during school\'s event or art night.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
  title: 'Start a Project to Upcycle Thrift Store Finds into New Fashion',
  description: 'Transform old clothing into trendy, wearable pieces.',
  difficulty: 'Intermediate',
  category: 'Design',
  time: 'Medium',
  whyItMatters: 'Encourages sustainability and creative reuse through fashion design.',
  gettingStarted: [
    'Gather thrifted clothes or fabric scraps.',
    'Plan design modifications or combinations.',
    'Sew, dye, or alter clothing pieces.',
    'Photograph before-and-after transformations.',
    'Host a mini upcycled fashion show.'
  ],
  requiredResources: ['Sewing Supplies', 'Fabric Paints', 'Thrifted Clothing'],
  potentialMentors: ['Fashion Teacher', 'Sewing Expert', 'Sustainability Coach'],
  howToShowcase: 'Display designs in a school\'s fashion show or online lookbook.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-600',
  title: 'Design a Full Deck of Custom Playing Cards',
  description: 'Illustrate and design a themed deck of playing cards.',
  difficulty: 'Intermediate',
  category: 'Design',
  time: 'Medium',
  whyItMatters: 'Enhances illustration and layout design skills.',
  gettingStarted: [
    'Choose a theme or aesthetic for your deck.',
    'Sketch card face designs and suits.',
    'Digitally edit and standardize card layout.',
    'Print and cut your own deck or use online services.',
    'Test your deck in a game with friends.'
  ],
  requiredResources: ['Drawing Software', 'Printer', 'Cardstock'],
  potentialMentors: ['Art Teacher', 'Graphic Designer', 'Illustrator'],
  howToShowcase: 'Sell or gift the deck, or submit to design contests.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-600',
  title: 'Build a Diorama of a Historical Scene',
  description: 'Craft a 3D scene that captures a key historical event or moment.',
  difficulty: 'Beginner',
  category: 'Arts',
  time: 'Low',
  whyItMatters: 'Combines art and history for hands-on learning.',
  gettingStarted: [
    'Choose a historical event or moment.',
    'Sketch or research the layout and figures.',
    'Build using cardboard, clay, or found materials.',
    'Paint and detail for realism.',
    'Add labels explaining the context.'
  ],
  requiredResources: ['Craft Materials', 'Paints', 'Reference Photos'],
  potentialMentors: ['History Teacher', 'Art Instructor', 'Museum Educator'],
  howToShowcase: 'Display during school\'s history week or local museum exhibit.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-lime-400 to-green-600',
  title: 'Create a Cosplay of Your Favorite Character from Scratch',
  description: 'Sew and craft a costume inspired by a favorite fictional character.',
  difficulty: 'Advanced',
  category: 'Design',
  time: 'High',
  whyItMatters: 'Blends creativity, engineering, and design through fashion and fandom.',
  gettingStarted: [
    'Select a character and collect reference photos.',
    'Sketch costume pieces and materials needed.',
    'Learn sewing or foam crafting basics.',
    'Assemble, test-fit, and paint details.',
    'Wear it to a con or host a photoshoot.'
  ],
  requiredResources: ['Fabric', 'Sewing Machine', 'Crafting Tools'],
  potentialMentors: ['Costume Designer', 'Art Teacher', 'Cosplayer'],
  howToShowcase: 'Display in cosplay events or school\'s art showcase.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-fuchsia-400 to-purple-600',
  title: 'Produce a Series of Short Horror Films',
  description: 'Write, direct, and film a set of creative short horror stories.',
  difficulty: 'Advanced',
  category: 'Arts',
  time: 'High',
  whyItMatters: 'Develops directing, storytelling, and collaboration skills.',
  gettingStarted: [
    'Write multiple short horror scripts.',
    'Recruit actors or friends for filming.',
    'Film using basic equipment or smartphones.',
    'Edit, add sound, and refine lighting effects.',
    'Upload your finished films to a video platform.'
  ],
  requiredResources: ['Camera', 'Editing Software', 'Props and Costumes'],
  potentialMentors: ['Media Teacher', 'Film Director', 'Cinematographer'],
  howToShowcase: 'Host a school\'s horror night or post online film series.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-violet-400 to-pink-600',
  title: 'Design the Sets and Costumes for a Fictional Play or Movie',
  description: 'Develop a full visual concept for a stage or film production.',
  difficulty: 'Intermediate',
  category: 'Design',
  time: 'Medium',
  whyItMatters: 'Teaches collaboration, aesthetic sense, and spatial creativity.',
  gettingStarted: [
    'Choose a story or genre to visualize.',
    'Sketch costume and set ideas.',
    'Create digital or physical mockups.',
    'Build a mood board with materials and fabrics.',
    'Present your final visual concept.'
  ],
  requiredResources: ['Design Tools', 'Fabric Samples', 'Art Supplies'],
  potentialMentors: ['Drama Teacher', 'Costume Designer', 'Set Builder'],
  howToShowcase: 'Present at school\'s play production or portfolio showcase.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-sky-400 to-indigo-500',
  title: 'Hand-Craft Pottery or Sculptures and Host a Small Gallery Show',
  description: 'Create clay art pieces and curate a small exhibit.',
  difficulty: 'Intermediate',
  category: 'Arts',
  time: 'High',
  whyItMatters: 'Develops fine motor skills and artistic expression through tactile media.',
  gettingStarted: [
    'Learn basic pottery or sculpting techniques.',
    'Plan and create themed art pieces.',
    'Fire and glaze your creations.',
    'Photograph or display in a gallery space.',
    'Host an opening event for friends or classmates.'
  ],
  requiredResources: ['Clay', 'Kiln Access', 'Art Tools'],
  potentialMentors: ['Art Teacher', 'Sculptor', 'Gallery Curator'],
  howToShowcase: 'Display at school\'s art show or submit to youth galleries.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-500',
 title: 'Build a Satellite Imagery Change Detection System',
 description: 'Create a system that analyzes satellite images over time to detect environmental changes like deforestation, urban expansion, or natural disasters.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Supports environmental monitoring, disaster response, and urban planning with real-time actionable data.',
 gettingStarted: [
   'Collect publicly available satellite imagery datasets.',
   'Preprocess images for alignment and clarity.',
   'Develop change detection algorithms using computer vision or machine learning.',
   'Visualize detected changes with maps or dashboards.',
   'Test system accuracy on historical events.'
 ],
 requiredResources: ['Satellite Imagery Datasets', 'AI/ML Frameworks', 'Data Visualization Tools'],
 potentialMentors: ['Remote Sensing Scientist', 'Data Analyst', 'Environmental Scientist'],
 howToShowcase: 'Present visual maps showing detected changes and accuracy analysis for selected regions.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
 title: 'Develop a CRISPR Gene Editing Simulation Platform',
 description: 'Build a digital platform that simulates CRISPR gene editing experiments, allowing users to model DNA changes and predict outcomes.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Provides a safe, educational environment for understanding gene editing without working in a lab, supporting STEM learning and bioethics education.',
 gettingStarted: [
   'Research CRISPR technology and gene editing principles.',
   'Design digital DNA sequences and editable regions.',
   'Implement simulation algorithms to model cutting and repair processes.',
   'Visualize predicted outcomes and off-target effects.',
   'Refine platform for usability and educational value.'
 ],
 requiredResources: ['Programming Tools', 'Biology Knowledge', 'Simulation Software'],
 potentialMentors: ['Molecular Biologist', 'Bioinformatics Specialist', 'STEM Educator'],
 howToShowcase: 'Host an interactive demo where users simulate CRISPR edits and explore outcomes.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-red-400 to-orange-500',
 title: 'Create an AI-Powered Wildfire Spread Prediction Model',
 description: 'Develop a machine learning model that predicts wildfire spread patterns using weather, topography, and vegetation data.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Helps firefighting teams and local authorities respond quickly and prevent damage to lives and property.',
 gettingStarted: [
   'Collect datasets on historical wildfires, terrain, and weather.',
   'Preprocess data for model training.',
   'Develop predictive models using machine learning algorithms.',
   'Validate predictions against historical wildfire events.',
   'Visualize predictions with maps and risk indicators.'
 ],
 requiredResources: ['Wildfire Data', 'AI/ML Frameworks', 'Geospatial Tools'],
 potentialMentors: ['Fire Scientist', 'Data Scientist', 'Environmental Engineer'],
 howToShowcase: 'Demonstrate predictive maps for wildfire scenarios and highlight potential intervention strategies.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
 title: 'Design a Low-Earth Orbit Satellite Tracker',
 description: 'Build a system to track satellites in real-time, predict passes, and visualize orbital paths over the Earth.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Supports space research, satellite communication planning, and STEM education on orbital mechanics.',
 gettingStarted: [
   'Learn orbital mechanics and satellite tracking principles.',
   'Access public satellite orbital data (e.g., TLEs).',
   'Develop algorithms to predict satellite positions.',
   'Visualize orbits using 3D or interactive mapping tools.',
   'Test tracker with live satellite data.'
 ],
 requiredResources: ['Satellite Data', 'Programming Tools', 'Visualization Software'],
 potentialMentors: ['Astronomer', 'Aerospace Engineer', 'Software Developer'],
 howToShowcase: 'Present an interactive map showing live satellite positions and predicted orbits.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
 title: 'Build a Carbon Capture Technology Prototype',
 description: 'Design and construct a small-scale system that captures carbon dioxide from air or exhaust streams.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Contributes to solutions for climate change and environmental sustainability.',
 gettingStarted: [
   'Research carbon capture methods and materials.',
   'Design a prototype system suitable for lab-scale testing.',
   'Build and assemble hardware components.',
   'Test CO2 capture efficiency under different conditions.',
   'Iterate design to improve performance and safety.'
 ],
 requiredResources: ['Chemical Materials', 'Hardware Components', 'Sensors', 'Testing Equipment'],
 potentialMentors: ['Chemical Engineer', 'Environmental Scientist', 'Materials Scientist'],
 howToShowcase: 'Demonstrate CO2 capture performance and discuss scalability and environmental impact.'
},
{
 icon: PantryIcon,
 iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
 title: 'Develop a Synthetic Biology Kit for Biofuel Production',
 description: 'Create a lab kit that allows users to explore synthetic biology concepts by producing biofuel in a safe and controlled way.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Educates students on renewable energy and biotechnology while demonstrating practical bioengineering applications.',
 gettingStarted: [
   'Design safe, educational biofuel experiments.',
   'Prepare materials and protocols for kit assembly.',
   'Develop step-by-step instructions and safety guidelines.',
   'Test the kit for reliability and learning outcomes.',
   'Package for classroom or at-home use.'
 ],
 requiredResources: ['Lab-safe Bioengineering Materials', 'Instructional Guides', 'Safety Equipment'],
 potentialMentors: ['Biotechnologist', 'STEM Educator', 'Chemical Engineer'],
 howToShowcase: 'Demonstrate the kit in a classroom or online tutorial while highlighting the science behind biofuel production.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
 title: 'Create a Blockchain-Based Carbon Credit Trading System',
 description: 'Build a platform that allows companies or individuals to trade carbon credits securely using blockchain technology.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Promotes sustainability through transparency and incentivizes reducing carbon emissions.',
 gettingStarted: [
   'Learn blockchain fundamentals and smart contracts.',
   'Design a simple credit trading protocol.',
   'Implement the system using blockchain frameworks.',
   'Simulate transactions and verify security.',
   'Iterate for usability and transparency.'
 ],
 requiredResources: ['Blockchain Frameworks', 'Programming Tools', 'Simulated Carbon Credits'],
 potentialMentors: ['Blockchain Developer', 'Environmental Economist', 'Software Engineer'],
 howToShowcase: 'Demonstrate trading carbon credits on a secure blockchain simulation.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-green-400 to-lime-500',
 title: 'Design an Autonomous Agricultural Drone for Crop Health',
 description: 'Develop a drone system that monitors crop health using sensors and AI to detect stress, pests, or nutrient deficiencies.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Improves precision agriculture, reduces pesticide use, and enhances crop yields.',
 gettingStarted: [
   'Research drone technology and crop monitoring techniques.',
   'Integrate cameras and multispectral sensors.',
   'Develop AI models to assess plant health.',
   'Test drone in simulated or real field environments.',
   'Refine flight paths and monitoring algorithms.'
 ],
 requiredResources: ['Drone Hardware', 'Sensors', 'AI/ML Frameworks', 'Programming Tools'],
 potentialMentors: ['Agricultural Engineer', 'AI Specialist', 'Drone Developer'],
 howToShowcase: 'Demonstrate autonomous crop monitoring with health assessment maps.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
 title: 'Build a Hydroponic System Controlled by Machine Learning',
 description: 'Design a hydroponic farming system where ML algorithms optimize nutrient delivery, lighting, and water for plant growth.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Combines sustainable agriculture, automation, and data-driven optimization to increase efficiency and yield.',
 gettingStarted: [
   'Research hydroponic systems and plant growth requirements.',
   'Build hardware for water, nutrients, and lighting control.',
   'Collect growth data and train ML models.',
   'Integrate ML system to control environmental conditions.',
   'Test and optimize plant growth outcomes.'
 ],
 requiredResources: ['Hydroponic Components', 'Sensors', 'ML Frameworks', 'Programming Tools'],
 potentialMentors: ['Agricultural Engineer', 'Data Scientist', 'Biologist'],
 howToShowcase: 'Demonstrate system controlling growth conditions and show improved plant outcomes compared to manual control.'
}

];
