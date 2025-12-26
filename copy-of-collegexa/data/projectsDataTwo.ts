import { Project } from './projectsData';
import { AiBrainIcon } from '../components/icons/AiBrainIcon';
import { PodcastIcon } from '../components/icons/PodcastIcon';
import { DesignIcon } from '../components/icons/DesignIcon';
import { PantryIcon } from '../components/icons/PantryIcon';
import { FinancialIcon } from '../components/icons/FinancialIcon';

export const projectsDataTwo: Project[] = [
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    title: "Analyze Social Media Sentiment on a Social Issue",
    description: "Use NLP to analyze sentiment from social media posts about a topic you care about.",
    difficulty: 'Intermediate',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: "Develops data analysis skills and provides insights into public opinion on important issues.",
    gettingStarted: ["Choose a social issue and relevant hashtags.", "Use an API (like Twitter's) to collect posts.", "Apply a sentiment analysis library (like NLTK in Python).", "Visualize the results (e.g., pie charts of positive/negative sentiment)."],
    requiredResources: ["Python", "NLTK or similar library", "Social Media API access", "Data visualization tool"],
    potentialMentors: ["Data Scientist", "Sociology Teacher", "CS Teacher"],
    howToShowcase: "Create a report or blog post with your findings and visualizations, and share it with relevant advocacy groups."
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-orange-400 to-yellow-500',
    title: "Create 'Day in the Life' College Major Videos",
    description: "Interview college students to create a video series showcasing different academic majors.",
    difficulty: 'Beginner',
    category: 'Education',
    time: 'Medium',
    whyItMatters: "Helps high school students make informed decisions about their college path and builds your communication skills.",
    gettingStarted: ["Reach out to college students through friends or online forums.", "Prepare a set of interview questions.", "Record and edit short, engaging videos for each major.", "Publish the series on YouTube or a dedicated blog."],
    requiredResources: ["Camera/Smartphone", "Video Editing Software", "Microphone", "Interview subjects"],
    potentialMentors: ["School Counselor", "Media Teacher", "College Admissions Officer"],
    howToShowcase: "Share the video series with your school's counseling department and on college forums."
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-500',
    title: "Design an Augmented Reality Campus Tour",
    description: "Build a simple AR app that overlays information on campus buildings when viewed through a phone.",
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: "Combines cutting-edge technology with practical application, showcasing advanced technical and creative skills.",
    gettingStarted: ["Choose a local college campus to feature.", "Learn an AR development platform like Unity with AR Foundation or Adobe Aero.", "Create 3D text or simple models for key buildings.", "Link AR markers (like QR codes or images) to your content.", "Test the experience on-site."],
    requiredResources: ["Smartphone", "AR Development Software", "3D modeling software (optional)"],
    potentialMentors: ["CS Teacher", "AR/VR Developer", "College Admissions Tour Guide"],
    howToShowcase: "Record a walkthrough video of the AR tour in action and share it with the college's admissions office."
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-green-500 to-teal-500',
    title: "Start a Tutoring Service for Middle Schoolers",
    description: "Organize and run a tutoring program for local middle school students in subjects you excel at.",
    difficulty: 'Beginner',
    category: 'Business',
    time: 'Medium',
    whyItMatters: "Demonstrates leadership, responsibility, and mastery of academic subjects while making a community impact.",
    gettingStarted: ["Identify subjects you can teach.", "Contact local middle schools or community centers to offer your services.", "Create simple lesson plans and practice materials.", "Schedule regular tutoring sessions.", "Track student progress and gather testimonials."],
    requiredResources: ["Study materials", "A quiet place to meet", "Scheduling tool"],
    potentialMentors: ["Favorite Teacher", "School Counselor", "Local Librarian"],
    howToShowcase: "Create a small portfolio with student testimonials and examples of improved grades or understanding."
  },
  {
    icon: FinancialIcon,
    iconBg: 'bg-gradient-to-br from-red-500 to-rose-500',
    title: "Create an Interactive Historical Timeline Website",
    description: "Build a website that visualizes a historical period with an interactive, scrollable timeline.",
    difficulty: 'Intermediate',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: "Makes history engaging and accessible, while developing web development and research skills.",
    gettingStarted: ["Choose a historical era or event.", "Research key dates, figures, and milestones.", "Use a JavaScript library like Timeline.js or build your own with HTML/CSS/JS.", "Add images, videos, and links to your timeline events.", "Publish the website."],
    requiredResources: ["HTML/CSS/JavaScript", "Timeline.js or similar library", "Web hosting"],
    potentialMentors: ["History Teacher", "Web Developer", "Librarian"],
    howToShowcase: "Share the live website with your history class and on educational forums."
  },
  {
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-blue-400 to-cyan-600',
  title: 'Create a Deepfake Detection Algorithm',
  description: 'Develop a machine learning model to detect manipulated videos and images.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Promotes digital literacy and helps combat misinformation online.',
  gettingStarted: [
    'Learn about deep learning and neural networks.',
    'Collect datasets of real and fake media.',
    'Train and test your detection model using Python frameworks like TensorFlow or PyTorch.',
    'Evaluate accuracy and fine-tune the algorithm.'
  ],
  requiredResources: ['Python', 'GPU', 'Datasets of Deepfakes'],
  potentialMentors: ['Computer Science Teacher', 'AI Researcher', 'Data Scientist'],
  howToShowcase: 'Publish a demo web app or present results in a tech showcase.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-orange-400 to-red-600',
  title: 'Design a Exoskeleton for Enhanced Human Strength',
  description: 'Create a wearable exoskeleton to assist in lifting heavy objects or rehabilitation.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Advances human augmentation and physical rehabilitation technologies.',
  gettingStarted: [
    'Study human biomechanics and exoskeleton designs.',
    'Design CAD models and simulate movements.',
    'Select actuators, sensors, and control systems.',
    'Prototype using 3D printing and electronics.',
    'Test and iterate for safety and functionality.'
  ],
  requiredResources: ['CAD Software', '3D Printer', 'Microcontrollers', 'Sensors'],
  potentialMentors: ['Mechanical Engineer', 'Biomedical Engineer', 'Robotics Professor'],
  howToShowcase: 'Demonstrate prototype at a science fair or robotics competition.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-teal-600',
  title: 'Build a Microbial Fuel Cell',
  description: 'Construct a device that generates electricity from microbial metabolism.',
  difficulty: 'Intermediate',
  category: 'STEM',
  time: 'Medium',
  whyItMatters: 'Explores renewable energy solutions and microbial biotechnology.',
  gettingStarted: [
    'Learn the basics of microbial fuel cells.',
    'Design a simple fuel cell using electrodes and bacterial cultures.',
    'Measure voltage and optimize conditions for energy output.'
  ],
  requiredResources: ['Bacteria Cultures', 'Electrodes', 'Beakers', 'Multimeter'],
  potentialMentors: ['Biology Teacher', 'Microbiologist', 'Environmental Engineer'],
  howToShowcase: 'Present results with graphs showing energy output in a lab report or science fair.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-600',
  title: 'Develop a Seismic Data Interpreter for Oil & Gas',
  description: 'Analyze seismic survey data to identify potential drilling sites.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Teaches geophysics applications in energy exploration and data analysis.',
  gettingStarted: [
    'Study geophysics and seismic wave principles.',
    'Acquire open-source seismic datasets.',
    'Write software to interpret patterns using Python or MATLAB.',
    'Validate interpretations with geological knowledge.'
  ],
  requiredResources: ['Seismic Data', 'Python or MATLAB', 'Geology References'],
  potentialMentors: ['Geophysicist', 'Data Scientist', 'Petroleum Engineer'],
  howToShowcase: 'Create an interactive dashboard to visualize seismic interpretations.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-gray-400 to-slate-600',
  title: 'Create a Graphene Synthesis Lab Experiment',
  description: 'Develop a safe lab procedure to synthesize and study graphene properties.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Explores cutting-edge materials science with applications in electronics and energy.',
  gettingStarted: [
    'Research graphene synthesis methods.',
    'Gather lab-safe chemicals and equipment.',
    'Conduct experiments and measure properties like conductivity and strength.',
    'Document results in a lab report.'
  ],
  requiredResources: ['Lab Equipment', 'Chemicals', 'Microscope', 'Conductivity Tester'],
  potentialMentors: ['Chemistry Teacher', 'Materials Scientist', 'Physics Professor'],
  howToShowcase: 'Demonstrate sample properties in a science lab expo or poster presentation.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  title: 'Design a Cognitive Load Measurement Tool using Eye-Tracking',
  description: 'Build a system to quantify mental workload through eye movement and pupil dilation.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Supports human-computer interaction research and ergonomics studies.',
  gettingStarted: [
    'Study cognitive load theory and eye-tracking metrics.',
    'Set up an eye-tracking device or software.',
    'Develop algorithms to interpret eye movement data.',
    'Test with participants and analyze results.'
  ],
  requiredResources: ['Eye-Tracking Device', 'Python or MATLAB', 'Participants'],
  potentialMentors: ['Cognitive Scientist', 'UX Researcher', 'Psychology Professor'],
  howToShowcase: 'Create a research poster or a web dashboard showing metrics.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-red-400 to-pink-600',
  title: 'Build a Dark Web Monitoring Scanner',
  description: 'Develop a tool to track threats or illicit activity on hidden online networks.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Enhances cybersecurity skills and ethical hacking awareness.',
  gettingStarted: [
    'Learn about Tor network and web scraping ethics.',
    'Set up a secure and legal testing environment.',
    'Develop scripts to scan and flag suspicious activity.',
    'Analyze data trends and generate reports.'
  ],
  requiredResources: ['Secure Computer', 'Python', 'Virtual Machines', 'Tor Access'],
  potentialMentors: ['Cybersecurity Expert', 'Computer Science Teacher', 'Ethical Hacker'],
  howToShowcase: 'Publish a report or demo in a cybersecurity club or online platform.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
  title: 'Develop a Speech Synthesis Model for Rare Languages',
  description: 'Create AI-generated voices for languages with limited digital resources.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Preserves endangered languages and promotes accessibility.',
  gettingStarted: [
    'Collect speech datasets in target languages.',
    'Train a text-to-speech model using deep learning frameworks.',
    'Test pronunciation and intonation.',
    'Iterate to improve naturalness.'
  ],
  requiredResources: ['Python', 'Deep Learning Libraries', 'Audio Datasets'],
  potentialMentors: ['Computational Linguist', 'AI Researcher', 'Speech Scientist'],
  howToShowcase: 'Present sample audio clips or a web demo of synthesized voices.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-600',
  title: 'Create a Nanomaterial Properties Simulation',
  description: 'Simulate the behavior and properties of nanomaterials under different conditions.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Supports research in nanotechnology and material science.',
  gettingStarted: [
    'Study basic nanomaterial physics and chemistry.',
    'Set up simulation software or write custom code.',
    'Model material behavior under various scenarios.',
    'Analyze and visualize results.'
  ],
  requiredResources: ['Simulation Software', 'Python or MATLAB', 'Research Papers'],
  potentialMentors: ['Materials Scientist', 'Nanotechnologist', 'Physics Professor'],
  howToShowcase: 'Publish results as a digital poster or interactive simulation.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-lime-500',
  title: 'Design a Robot Swarm Coordination Algorithm',
  description: 'Create algorithms to coordinate multiple robots for collective tasks.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Develops robotics, AI, and multi-agent system skills.',
  gettingStarted: [
    'Study swarm robotics and multi-agent systems.',
    'Simulate swarm behavior in software.',
    'Develop algorithms for coordination and task allocation.',
    'Test with small robot units or virtual simulations.'
  ],
  requiredResources: ['Robotics Kits', 'Python or C++', 'Simulation Software'],
  potentialMentors: ['Robotics Professor', 'AI Researcher', 'Computer Science Teacher'],
  howToShowcase: 'Demonstrate swarm coordination in a lab or at a robotics competition.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-yellow-400 to-amber-600',
  title: 'Build a Personal Air Quality Monitor with Predictive Alerts',
  description: 'Construct a device to track air pollution and predict exposure risks.',
  difficulty: 'Intermediate',
  category: 'STEM',
  time: 'Medium',
  whyItMatters: 'Raises awareness of environmental health and empowers personal action.',
  gettingStarted: [
    'Learn about air pollutants and sensors.',
    'Assemble sensors and microcontroller components.',
    'Program data collection and predictive algorithms.',
    'Test outdoors and refine alert thresholds.'
  ],
  requiredResources: ['Air Quality Sensors', 'Microcontroller', 'Battery Pack', 'Python or Arduino IDE'],
  potentialMentors: ['Environmental Engineer', 'Computer Science Teacher', 'Physics Teacher'],
  howToShowcase: 'Share real-time data online or present a demo at a science fair.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-indigo-400 to-blue-600',
  title: 'Develop a Computational Fluid Dynamics Model for Car Design',
  description: 'Simulate airflow around vehicles to optimize aerodynamics and performance.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Enhances automotive design and efficiency while reducing real-world testing costs.',
  gettingStarted: [
    'Learn CFD fundamentals and software like ANSYS or OpenFOAM.',
    'Model a car’s shape in CAD software.',
    'Run airflow simulations and analyze drag and lift coefficients.',
    'Iterate designs for improved aerodynamics.'
  ],
  requiredResources: ['CFD Software', 'CAD Software', 'Computer with High Processing Power'],
  potentialMentors: ['Mechanical Engineer', 'Aerospace Professor', 'Automotive Designer'],
  howToShowcase: 'Present simulations and design improvements in a project report or demo video.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-pink-400 to-purple-600',
  title: 'Create a AI-Powered Fashion Trend Forecasting Tool',
  description: 'Use AI to predict upcoming fashion trends based on social media, sales, and search data.',
  difficulty: 'Advanced',
  category: 'Design',
  time: 'High',
  whyItMatters: 'Helps designers make data-driven decisions and stay ahead in the fashion industry.',
  gettingStarted: [
    'Collect fashion-related datasets from social media and sales platforms.',
    'Explore trend analysis algorithms and natural language processing.',
    'Train a predictive model and validate accuracy.',
    'Create a simple interface to visualize predictions.'
  ],
  requiredResources: ['Python', 'Data Sources', 'Machine Learning Libraries'],
  potentialMentors: ['Fashion Designer', 'Data Scientist', 'AI Researcher'],
  howToShowcase: 'Build a web demo showing trend predictions for different categories.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-teal-600',
  title: 'Design a Smart Insulin Delivery Patch',
  description: 'Develop a wearable device to automatically monitor glucose and release insulin.',
  difficulty: 'Advanced',
  category: 'Health Tech',
  time: 'High',
  whyItMatters: 'Improves diabetes management and patient quality of life.',
  gettingStarted: [
    'Study continuous glucose monitoring and insulin delivery methods.',
    'Design the wearable patch and circuitry.',
    'Prototype with microcontrollers and sensors.',
    'Test glucose measurement accuracy and insulin dosing control (simulation or safe testing methods).'
  ],
  requiredResources: ['Sensors', 'Microcontroller', '3D Printer', 'Medical References'],
  potentialMentors: ['Biomedical Engineer', 'Medical Researcher', 'Diabetes Specialist'],
  howToShowcase: 'Demonstrate functionality with a safe prototype and a detailed report.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-600',
  title: 'Build a Quantum Machine Learning Model for Drug Discovery',
  description: 'Use quantum computing techniques to accelerate drug discovery predictions.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Combines cutting-edge quantum computing with healthcare innovation.',
  gettingStarted: [
    'Learn basic quantum computing concepts and frameworks like Qiskit.',
    'Collect molecular and drug datasets.',
    'Develop quantum algorithms to predict molecular interactions.',
    'Analyze model outputs and compare with classical methods.'
  ],
  requiredResources: ['Quantum Computing Simulator', 'Python', 'Molecular Datasets'],
  potentialMentors: ['Quantum Computing Researcher', 'Chemist', 'Computational Biologist'],
  howToShowcase: 'Present results with simulations or interactive demos at a STEM showcase.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-red-400 to-pink-600',
  title: 'Develop a Ransomware Behavior Analyzer',
  description: 'Analyze ransomware samples in a controlled environment to detect and predict attacks.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Strengthens cybersecurity defenses and malware understanding.',
  gettingStarted: [
    'Set up a secure virtual lab environment.',
    'Study ransomware types and behaviors.',
    'Analyze sample behaviors using monitoring tools.',
    'Develop detection rules or predictive algorithms.'
  ],
  requiredResources: ['Secure Virtual Machines', 'Monitoring Software', 'Python', 'Malware Samples'],
  potentialMentors: ['Cybersecurity Expert', 'Computer Science Teacher', 'Ethical Hacker'],
  howToShowcase: 'Demonstrate detection and analysis in a controlled simulation or report findings.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
  title: 'Create a Lab-on-a-Chip for Disease Diagnostics',
  description: 'Develop a miniaturized device to run rapid diagnostic tests for diseases.',
  difficulty: 'Advanced',
  category: 'Health Tech',
  time: 'High',
  whyItMatters: 'Enables faster, cheaper, and portable diagnostic testing, improving global health.',
  gettingStarted: [
    'Research microfluidics and lab-on-a-chip technology.',
    'Design the microfluidic pathways and detection zones.',
    'Prototype with PDMS or 3D printing techniques.',
    'Test with simulated biological samples.'
  ],
  requiredResources: ['Microfluidics Materials', '3D Printer', 'Lab Equipment', 'Simulation Tools'],
  potentialMentors: ['Biomedical Engineer', 'Microfluidics Researcher', 'Medical Scientist'],
  howToShowcase: 'Present a working prototype or simulation with data readouts at a science expo.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-600',
  title: 'Design a Space Debris Tracking and Collision Avoidance System',
  description: 'Develop a system to monitor orbital debris and predict collision risks for satellites.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Protects satellites and spacecraft, contributing to sustainable space operations.',
  gettingStarted: [
    'Research space debris and orbital mechanics.',
    'Collect satellite and debris tracking data.',
    'Develop algorithms to predict collisions and optimal avoidance maneuvers.',
    'Simulate system performance using software like MATLAB or Python.'
  ],
  requiredResources: ['Orbital Data', 'Python or MATLAB', 'Simulation Software'],
  potentialMentors: ['Aerospace Engineer', 'Astrophysicist', 'Data Scientist'],
  howToShowcase: 'Present simulated collision predictions and avoidance strategies in a project report or demo.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
  title: 'Build a Wave Energy Converter Prototype',
  description: 'Construct a device that converts ocean wave energy into electricity.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Promotes renewable energy innovation and environmental sustainability.',
  gettingStarted: [
    'Study wave energy principles and existing converter designs.',
    'Design a simple prototype using buoyant materials and mechanical components.',
    'Connect to a generator and measure energy output.',
    'Iterate to optimize efficiency.'
  ],
  requiredResources: ['Mechanical Materials', 'Generator', 'Wires', 'Tools for Prototyping'],
  potentialMentors: ['Mechanical Engineer', 'Renewable Energy Expert', 'Physics Teacher'],
  howToShowcase: 'Demonstrate energy generation in a wave tank or simulated environment.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
  title: 'Develop a AI-Driven Protein Folding Predictor',
  description: 'Use AI to predict protein structures from amino acid sequences.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Advances drug discovery and biomedical research.',
  gettingStarted: [
    'Learn about protein structure and bioinformatics.',
    'Collect protein sequence datasets.',
    'Train machine learning or deep learning models to predict folding.',
    'Validate predictions against known protein structures.'
  ],
  requiredResources: ['Python', 'Bioinformatics Libraries', 'Protein Datasets', 'GPU for Training'],
  potentialMentors: ['Computational Biologist', 'AI Researcher', 'Biochemistry Professor'],
  howToShowcase: 'Present predicted protein structures and accuracy comparisons in a poster or online demo.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-gray-400 to-slate-600',
  title: 'Create a Blockchain-Based Digital Identity System',
  description: 'Design a secure and decentralized system for managing personal digital identities.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Strengthens cybersecurity, privacy, and digital identity management.',
  gettingStarted: [
    'Learn blockchain fundamentals and smart contract development.',
    'Design the identity structure and security protocols.',
    'Implement on a blockchain platform like Ethereum.',
    'Test for usability, security, and reliability.'
  ],
  requiredResources: ['Blockchain Platform', 'Programming Skills', 'Security Protocol References'],
  potentialMentors: ['Blockchain Developer', 'Cybersecurity Expert', 'Computer Science Teacher'],
  howToShowcase: 'Create a demo interface and showcase secure identity verification scenarios.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-pink-400 to-red-500',
  title: 'Design Smart Fabrics with Embedded Sensors',
  description: 'Develop fabrics that monitor conditions like temperature, movement, or health metrics.',
  difficulty: 'Advanced',
  category: 'Design',
  time: 'High',
  whyItMatters: 'Integrates wearable technology and material innovation for health, sports, and fashion.',
  gettingStarted: [
    'Research textile electronics and sensor integration.',
    'Select appropriate sensors for the fabric.',
    'Prototype small fabric patches with embedded electronics.',
    'Test sensor accuracy and durability.'
  ],
  requiredResources: ['Sensors', 'Conductive Thread', 'Fabric Samples', 'Microcontrollers'],
  potentialMentors: ['Textile Engineer', 'Wearable Tech Designer', 'Electrical Engineer'],
  howToShowcase: 'Show functional smart fabric patches in a presentation or interactive demo.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
  title: 'Build an Autonomous Underwater Vehicle for Coral Reef Mapping',
  description: 'Construct a robot capable of underwater navigation to map and monitor coral reefs.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Supports marine conservation and environmental monitoring.',
  gettingStarted: [
    'Study underwater robotics and navigation techniques.',
    'Design the AUV frame, propulsion, and sensors.',
    'Program autonomous navigation and data collection.',
    'Test in controlled water environments before field deployment.'
  ],
  requiredResources: ['Waterproof Motors', 'Sensors', 'Microcontroller', 'Battery Pack', '3D Printer'],
  potentialMentors: ['Marine Biologist', 'Robotics Engineer', 'Environmental Scientist'],
  howToShowcase: 'Present maps and sensor data from the AUV in a project report or demo video.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-600',
  title: 'Develop a Post-Quantum Cryptography Library',
  description: 'Create a secure cryptography library resistant to attacks from quantum computers.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Prepares for the next generation of cybersecurity challenges.',
  gettingStarted: [
    'Study classical and post-quantum cryptography algorithms.',
    'Implement algorithms in a programming language like Python or C++.',
    'Test security against simulated attacks.',
    'Document and package your library for others to use.'
  ],
  requiredResources: ['Python or C++', 'Cryptography References', 'Test Environment'],
  potentialMentors: ['Cybersecurity Researcher', 'Computer Science Professor', 'Cryptography Expert'],
  howToShowcase: 'Publish your library on GitHub with documentation and example use cases.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-teal-600',
  title: 'Create a Organ-on-a-Chip for Drug Testing',
  description: 'Develop a microfluidic chip that mimics organ functions for testing drugs.',
  difficulty: 'Advanced',
  category: 'Health Tech',
  time: 'High',
  whyItMatters: 'Reduces animal testing and accelerates biomedical research.',
  gettingStarted: [
    'Study organ-on-a-chip principles and microfluidics.',
    'Design channels and chambers in CAD software.',
    'Prototype with PDMS or 3D printing.',
    'Test with safe chemical or biological simulations.'
  ],
  requiredResources: ['Microfluidic Materials', '3D Printer', 'Lab Equipment', 'Simulation Tools'],
  potentialMentors: ['Biomedical Engineer', 'Microfluidics Researcher', 'Medical Scientist'],
  howToShowcase: 'Present a working prototype or simulation with measurement readouts.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-gray-400 to-slate-600',
  title: 'Design a Neuromorphic Computing Chip Simulator',
  description: 'Simulate a chip that mimics neural architectures for brain-inspired computing.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Advances AI hardware research and low-power computing technologies.',
  gettingStarted: [
    'Study neuromorphic computing principles.',
    'Develop software simulation for neuron and synapse behavior.',
    'Test computational tasks and benchmark performance.',
    'Iterate designs for efficiency and scalability.'
  ],
  requiredResources: ['Python or MATLAB', 'Simulation Software', 'Research Papers'],
  potentialMentors: ['Electrical Engineer', 'AI Researcher', 'Computer Architecture Professor'],
  howToShowcase: 'Show simulations and task performance in a demo or project report.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  title: 'Build a Industrial Robot Arm Programming Interface',
  description: 'Create software to control and optimize industrial robot arm movements.',
  difficulty: 'Intermediate',
  category: 'STEM',
  time: 'Medium',
  whyItMatters: 'Improves manufacturing efficiency and robotics programming skills.',
  gettingStarted: [
    'Study robot kinematics and control principles.',
    'Set up a robot arm simulator or physical arm.',
    'Develop a user interface to control motion sequences.',
    'Test and refine movements for accuracy.'
  ],
  requiredResources: ['Robot Arm or Simulator', 'Programming Language', 'Computer'],
  potentialMentors: ['Robotics Engineer', 'Computer Science Teacher', 'Mechanical Engineer'],
  howToShowcase: 'Demonstrate tasks performed by the robot via your interface in a lab or video.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-lime-500',
  title: 'Develop a Predictive Maintenance System for Wind Turbines',
  description: 'Create a system that predicts failures in wind turbines to reduce downtime.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Supports sustainable energy by increasing reliability and efficiency.',
  gettingStarted: [
    'Study wind turbine mechanics and sensor data.',
    'Collect historical failure and operational datasets.',
    'Build predictive models using machine learning.',
    'Validate predictions and refine accuracy.'
  ],
  requiredResources: ['Sensor Data', 'Python or MATLAB', 'Machine Learning Libraries'],
  potentialMentors: ['Mechanical Engineer', 'Data Scientist', 'Renewable Energy Expert'],
  howToShowcase: 'Present predictive results and visual dashboards at a STEM fair or conference.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
  title: 'Create a AI-Generated Music Composition Engine',
  description: 'Develop an AI system that generates original music compositions.',
  difficulty: 'Intermediate',
  category: 'Arts',
  time: 'Medium',
  whyItMatters: 'Combines creativity and AI, opening new avenues for music production.',
  gettingStarted: [
    'Learn about music theory and AI models for composition.',
    'Collect or generate MIDI datasets for training.',
    'Train a neural network to produce melodies or harmonies.',
    'Refine outputs and integrate into a user-friendly interface.'
  ],
  requiredResources: ['Python', 'Music Datasets', 'Deep Learning Libraries', 'Audio Software'],
  potentialMentors: ['Music Teacher', 'AI Researcher', 'Composer'],
  howToShowcase: 'Share compositions online, or host a digital concert demo.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-gray-400 to-indigo-500',
  title: 'Design a Zero-Knowledge Proof Application for Voting',
  description: 'Implement a secure voting system that preserves voter privacy using zero-knowledge proofs.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Enhances cybersecurity and trust in digital voting systems.',
  gettingStarted: [
    'Learn about blockchain and zero-knowledge proof protocols.',
    'Design the voting application architecture.',
    'Implement proof verification and privacy-preserving mechanisms.',
    'Test for security, scalability, and usability.'
  ],
  requiredResources: ['Blockchain Platform', 'Programming Languages', 'Security Protocol References'],
  potentialMentors: ['Cryptography Expert', 'Computer Science Teacher', 'Blockchain Developer'],
  howToShowcase: 'Demonstrate secure voting flow in a controlled environment or simulation.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
  title: 'Build a Portable DNA Sequencer Data Analyzer',
  description: 'Develop software to process and interpret DNA sequencing data from portable devices.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Accelerates genetic research and field diagnostics for healthcare and biology.',
  gettingStarted: [
    'Study DNA sequencing techniques and bioinformatics pipelines.',
    'Collect sample sequencing datasets.',
    'Develop software to analyze sequences, identify mutations, and visualize data.',
    'Optimize for speed and usability.'
  ],
  requiredResources: ['DNA Sequencing Data', 'Python or R', 'Bioinformatics Libraries', 'Laptop'],
  potentialMentors: ['Bioinformatician', 'Geneticist', 'Computer Science Teacher'],
  howToShowcase: 'Present analysis results in a web dashboard or project report.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-blue-400 to-teal-500',
  title: 'Develop a Satellite-Based Maritime Traffic Monitor',
  description: 'Build a system to track shipping traffic using satellite data for safety and logistics.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Supports maritime safety, navigation, and logistics optimization.',
  gettingStarted: [
    'Study AIS (Automatic Identification System) data and satellite imaging.',
    'Develop algorithms to track vessels and detect anomalies.',
    'Visualize maritime traffic on maps or dashboards.',
    'Test system with historical datasets.'
  ],
  requiredResources: ['Satellite/AIS Data', 'Python or GIS Software', 'Computer'],
  potentialMentors: ['Data Scientist', 'Maritime Engineer', 'Geospatial Analyst'],
  howToShowcase: 'Present maps, traffic patterns, and analysis in a demo or report.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-lime-500',
  title: 'Create a Smart Contact Lens Prototype for Glaucoma',
  description: 'Design a wearable lens that monitors eye pressure for glaucoma patients.',
  difficulty: 'Advanced',
  category: 'Health Tech',
  time: 'High',
  whyItMatters: 'Improves eye health monitoring and early detection of glaucoma.',
  gettingStarted: [
    'Research intraocular pressure sensors and wearable eye devices.',
    'Design a safe contact lens prototype with embedded sensors.',
    'Integrate data collection and wireless transmission systems.',
    'Test with simulations or lab-safe prototypes.'
  ],
  requiredResources: ['Micro-sensors', 'Microcontroller', 'Lens Materials', 'Simulation Tools'],
  potentialMentors: ['Biomedical Engineer', 'Ophthalmologist', 'Health Tech Researcher'],
  howToShowcase: 'Present functional prototype and data visualizations in a project demo.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-indigo-400 to-blue-600',
  title: 'Design a Cyber-Physical System for Smart Manufacturing',
  description: 'Develop a connected system that integrates physical machinery with digital control for efficient production.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Optimizes manufacturing processes and prepares students for Industry 4.0 applications.',
  gettingStarted: [
    'Study cyber-physical systems and industrial automation.',
    'Map out physical components and sensors for a smart factory.',
    'Design control algorithms and integration protocols.',
    'Simulate operations and optimize workflow efficiency.'
  ],
  requiredResources: ['Sensors', 'Microcontrollers', 'Simulation Software', 'Programming Tools'],
  potentialMentors: ['Industrial Engineer', 'Robotics Professor', 'Computer Science Teacher'],
  howToShowcase: 'Present simulation dashboards or a small-scale prototype at a tech fair.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
  title: 'Build a Forensic Audio Enhancement Tool',
  description: 'Create software that improves audio clarity and isolates key sounds for forensic analysis.',
  difficulty: 'Intermediate',
  category: 'STEM',
  time: 'Medium',
  whyItMatters: 'Supports criminal investigations and digital forensic skills.',
  gettingStarted: [
    'Learn about audio processing techniques.',
    'Collect audio samples with background noise.',
    'Develop filters and enhancement algorithms.',
    'Test and refine performance for clarity and accuracy.'
  ],
  requiredResources: ['Python or MATLAB', 'Audio Datasets', 'Signal Processing Libraries'],
  potentialMentors: ['Audio Engineer', 'Computer Science Teacher', 'Forensic Scientist'],
  howToShowcase: 'Demonstrate audio improvements on sample recordings in a presentation.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
  title: 'Develop a Geothermal Energy Potential Mapping Tool',
  description: 'Build software to analyze geological and environmental data to identify geothermal energy potential.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Promotes renewable energy planning and sustainable energy solutions.',
  gettingStarted: [
    'Study geothermal principles and GIS mapping.',
    'Collect geological and temperature datasets.',
    'Develop algorithms to map potential sites.',
    'Validate and visualize results with interactive maps.'
  ],
  requiredResources: ['GIS Software', 'Python or MATLAB', 'Geological Data'],
  potentialMentors: ['Environmental Engineer', 'Geologist', 'Renewable Energy Expert'],
  howToShowcase: 'Present maps and site recommendations in a report or interactive dashboard.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  title: 'Create a Multi-Agent Reinforcement Learning for Traffic Control',
  description: 'Develop a system where multiple AI agents optimize traffic lights to reduce congestion.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Improves urban traffic flow and reduces environmental impact.',
  gettingStarted: [
    'Study reinforcement learning and multi-agent systems.',
    'Simulate traffic environments with software like SUMO.',
    'Implement agent policies to optimize traffic light timing.',
    'Analyze traffic flow improvements and refine algorithms.'
  ],
  requiredResources: ['Python', 'RL Libraries', 'Traffic Simulation Software'],
  potentialMentors: ['AI Researcher', 'Transportation Engineer', 'Computer Science Teacher'],
  howToShowcase: 'Present simulations showing traffic improvements and agent behaviors.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
  title: 'Design a Brain-Computer Interface for Communication',
  description: 'Develop a system that translates neural activity into commands for communication.',
  difficulty: 'Advanced',
  category: 'Health Tech',
  time: 'High',
  whyItMatters: 'Supports people with disabilities and advances neurotechnology.',
  gettingStarted: [
    'Study EEG signals and brain-computer interface methods.',
    'Collect sample neural activity data.',
    'Develop signal processing algorithms to detect intent.',
    'Create an interface for translating signals into messages.'
  ],
  requiredResources: ['EEG Device', 'Python or MATLAB', 'Neuroscience References', 'Microcontrollers'],
  potentialMentors: ['Neuroscientist', 'Biomedical Engineer', 'AI Researcher'],
  howToShowcase: 'Demonstrate interface functionality through simulated or lab tests.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-lime-500',
  title: 'Build a Soil Health Sensor Network with Data Analytics',
  description: 'Create a network of sensors to monitor soil conditions and analyze data for agriculture.',
  difficulty: 'Intermediate',
  category: 'STEM',
  time: 'Medium',
  whyItMatters: 'Enhances precision agriculture and sustainable farming practices.',
  gettingStarted: [
    'Learn about soil properties and sensing technologies.',
    'Deploy a small network of soil sensors.',
    'Collect and analyze data using statistical or machine learning methods.',
    'Generate actionable insights for soil health and crop management.'
  ],
  requiredResources: ['Soil Sensors', 'Microcontrollers', 'Python or MATLAB', 'Laptop'],
  potentialMentors: ['Agricultural Engineer', 'Environmental Scientist', 'Data Analyst'],
  howToShowcase: 'Present maps, analytics dashboards, and recommendations at a science fair or agriculture expo.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-indigo-400 to-blue-600',
  title: 'Develop an Automated Theorem Proving Assistant',
  description: 'Create a tool that assists in proving mathematical theorems automatically.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Enhances problem-solving, logical reasoning, and AI applications in mathematics.',
  gettingStarted: [
    'Study logic, formal proofs, and theorem proving techniques.',
    'Learn relevant programming languages and AI libraries.',
    'Implement algorithms for automated proof generation.',
    'Test the assistant with sample theorems and iteratively improve.'
  ],
  requiredResources: ['Python', 'Logic Libraries', 'Mathematics References', 'Computer'],
  potentialMentors: ['Mathematics Professor', 'AI Researcher', 'Computer Science Teacher'],
  howToShowcase: 'Demonstrate the assistant solving a set of theorems or share a web demo.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
  title: 'Create a Microplastics Detection and Analysis System',
  description: 'Develop a system to detect and analyze microplastics in water samples.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Supports environmental research and pollution reduction efforts.',
  gettingStarted: [
    'Research microplastics and detection methods.',
    'Design a sample collection and analysis system.',
    'Develop detection algorithms or imaging analysis.',
    'Validate results with controlled samples.'
  ],
  requiredResources: ['Microscope or Sensor', 'Computer', 'Python or MATLAB', 'Water Samples'],
  potentialMentors: ['Environmental Scientist', 'Chemistry Teacher', 'Data Scientist'],
  howToShowcase: 'Present findings with visualizations and analysis in a report or demo.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  title: 'Design a Smart Battery Management System for EVs',
  description: 'Develop a system to monitor and optimize the performance and safety of electric vehicle batteries.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Improves EV efficiency, longevity, and safety.',
  gettingStarted: [
    'Study battery chemistry and management systems.',
    'Design monitoring and control circuits.',
    'Simulate battery performance under different conditions.',
    'Implement optimization algorithms for charging and discharging.'
  ],
  requiredResources: ['Battery Modules', 'Microcontroller', 'Simulation Software', 'Computer'],
  potentialMentors: ['Electrical Engineer', 'Automotive Engineer', 'Computer Science Teacher'],
  howToShowcase: 'Demonstrate monitoring and optimization via simulation or prototype.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
  title: 'Build a Computational Journalism Tool for Data Scraping',
  description: 'Create software to collect, clean, and visualize data for journalism purposes.',
  difficulty: 'Intermediate',
  category: 'STEM',
  time: 'Medium',
  whyItMatters: 'Supports investigative journalism with data-driven insights.',
  gettingStarted: [
    'Learn web scraping techniques and APIs.',
    'Collect public datasets or news sources.',
    'Develop scripts to clean and analyze data.',
    'Create visualizations to communicate findings.'
  ],
  requiredResources: ['Python', 'Web Scraping Libraries', 'Dataset Access', 'Computer'],
  potentialMentors: ['Journalism Teacher', 'Data Scientist', 'Computer Science Teacher'],
  howToShowcase: 'Publish visualized reports or interactive dashboards online.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
  title: 'Develop an AI-Based Code Vulnerability Scanner',
  description: 'Build a system that automatically detects security vulnerabilities in code.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Improves software security and teaches cybersecurity best practices.',
  gettingStarted: [
    'Study common security vulnerabilities in software.',
    'Collect example codebases with known issues.',
    'Train AI models to detect patterns indicative of vulnerabilities.',
    'Test and refine scanning accuracy.'
  ],
  requiredResources: ['Python', 'Machine Learning Libraries', 'Test Codebases', 'Computer'],
  potentialMentors: ['Cybersecurity Expert', 'Computer Science Teacher', 'Software Engineer'],
  howToShowcase: 'Demonstrate detection results on example projects or publish a prototype tool.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
  title: 'Create a Portable Mass Spectrometer Interface',
  description: 'Design software to interface with portable mass spectrometers for real-time analysis.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Enables field-based chemical analysis and faster scientific research.',
  gettingStarted: [
    'Study mass spectrometry principles.',
    'Learn how to interface with devices via software.',
    'Develop data collection, processing, and visualization tools.',
    'Test with sample chemicals and validate results.'
  ],
  requiredResources: ['Portable Mass Spectrometer', 'Computer', 'Programming Tools', 'Chemical Samples'],
  potentialMentors: ['Chemist', 'Instrument Engineer', 'Computer Science Teacher'],
  howToShowcase: 'Present real-time analysis of samples in a demonstration or video.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-600',
  title: 'Design a Photonic Computing Prototype',
  description: 'Create a prototype that uses light instead of electricity for computation.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Explores cutting-edge hardware for faster and more efficient computing.',
  gettingStarted: [
    'Study photonic computing concepts and optical circuits.',
    'Design a basic optical logic system.',
    'Simulate light-based computation operations.',
    'Iterate designs and test outputs.'
  ],
  requiredResources: ['Optical Components', 'Simulation Software', 'Computer', 'Laser/Light Sources'],
  potentialMentors: ['Electrical Engineer', 'Physics Professor', 'Computer Science Teacher'],
  howToShowcase: 'Demonstrate optical computation with a small-scale prototype or simulation.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
  title: 'Build an Animal Biologging Data Analysis Platform',
  description: 'Develop software to analyze tracking and sensor data from wildlife biologging devices.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Supports wildlife research and conservation through data-driven insights.',
  gettingStarted: [
    'Study biologging devices and types of animal tracking data.',
    'Collect sample datasets from public repositories.',
    'Develop analysis pipelines for behavior and movement patterns.',
    'Visualize insights with interactive charts or maps.'
  ],
  requiredResources: ['Python or R', 'Biologging Datasets', 'Data Visualization Libraries', 'Computer'],
  potentialMentors: ['Ecologist', 'Data Scientist', 'Biologist'],
  howToShowcase: 'Present findings with visualizations in a report, poster, or interactive dashboard.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  title: 'Develop a Supply Chain Disruption Predictor',
  description: 'Create a predictive model to forecast potential disruptions in supply chains.',
  difficulty: 'Advanced',
  category: 'Business',
  time: 'High',
  whyItMatters: 'Helps businesses plan for risk and optimize logistics.',
  gettingStarted: [
    'Study supply chain principles and disruption scenarios.',
    'Collect historical supply chain and operational datasets.',
    'Train predictive models using machine learning techniques.',
    'Validate predictions and optimize for real-world applicability.'
  ],
  requiredResources: ['Python', 'ML Libraries', 'Supply Chain Data', 'Computer'],
  potentialMentors: ['Operations Researcher', 'Data Scientist', 'Business Analytics Professor'],
  howToShowcase: 'Present predictive results with visual dashboards or case studies.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
  title: 'Create a Holographic Display Technology Prototype',
  description: 'Design a small-scale prototype for displaying 3D holograms.',
  difficulty: 'Advanced',
  category: 'Design',
  time: 'High',
  whyItMatters: 'Explores emerging visualization technologies for education, art, and entertainment.',
  gettingStarted: [
    'Study holographic display principles and optical setups.',
    'Design a basic display system using available hardware.',
    'Experiment with light sources and projection angles.',
    'Iterate to improve clarity and dimensionality.'
  ],
  requiredResources: ['Laser or LED Light Sources', 'Optical Materials', 'Computer', 'Projection Hardware'],
  potentialMentors: ['Optical Engineer', 'Physics Professor', 'Design Technologist'],
  howToShowcase: 'Demonstrate holograms in a classroom, lab, or video presentation.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
  title: 'Design a Fetal Heart Rate Monitoring AI',
  description: 'Develop an AI system to monitor and analyze fetal heart rate data for early detection of complications.',
  difficulty: 'Advanced',
  category: 'Health Tech',
  time: 'High',
  whyItMatters: 'Supports prenatal health monitoring and early medical interventions.',
  gettingStarted: [
    'Study fetal monitoring and relevant medical datasets.',
    'Develop AI models to detect abnormal heart rate patterns.',
    'Validate with sample or simulated datasets.',
    'Iterate to improve accuracy and reliability.'
  ],
  requiredResources: ['Medical Data', 'Python or MATLAB', 'Machine Learning Libraries', 'Computer'],
  potentialMentors: ['Biomedical Engineer', 'Obstetrician', 'AI Researcher'],
  howToShowcase: 'Present results with visual dashboards or simulated monitoring scenarios.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
  title: 'Build a Radio Telescope for Pulsar Detection',
  description: 'Construct a radio telescope and develop software to detect pulsar signals.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Contributes to astronomy research and understanding of neutron stars.',
  gettingStarted: [
    'Study radio astronomy and pulsar characteristics.',
    'Design and build a radio telescope antenna and receiver.',
    'Develop signal processing software to identify pulsar signals.',
    'Test and refine detection sensitivity.'
  ],
  requiredResources: ['Radio Antenna', 'Receiver Equipment', 'Computer', 'Signal Processing Software'],
  potentialMentors: ['Astronomer', 'Physics Professor', 'Electrical Engineer'],
  howToShowcase: 'Demonstrate detected signals and processed data in a presentation or report.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-lime-500',
  title: 'Develop a Materials Informatics Platform for Alloy Discovery',
  description: 'Create a platform that predicts new alloy compositions with desired properties using AI.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Accelerates materials science research and discovery of advanced alloys.',
  gettingStarted: [
    'Study materials science and alloy properties.',
    'Collect dataset of known alloys and properties.',
    'Develop machine learning models to predict new compositions.',
    'Validate predictions with simulations or lab data.'
  ],
  requiredResources: ['Python', 'Materials Datasets', 'ML Libraries', 'Computer'],
  potentialMentors: ['Materials Scientist', 'Data Scientist', 'Mechanical Engineer'],
  howToShowcase: 'Present predicted alloys and simulated properties in a report or dashboard.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-gray-400 to-slate-600',
  title: 'Create a Privacy-Preserving Data Analytics Framework',
  description: 'Develop a framework that allows data analysis without exposing sensitive information.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Enables secure analytics in healthcare, finance, and other sensitive domains.',
  gettingStarted: [
    'Study privacy-preserving computation techniques (e.g., differential privacy, federated learning).',
    'Develop APIs and algorithms that anonymize or protect data.',
    'Test analytics tasks on sample datasets.',
    'Iterate for usability, scalability, and security.'
  ],
  requiredResources: ['Python', 'Data Privacy Libraries', 'Sample Datasets', 'Computer'],
  potentialMentors: ['Data Privacy Expert', 'Computer Science Professor', 'Security Engineer'],
  howToShowcase: 'Demonstrate analytics workflows while maintaining data confidentiality.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-pink-400 to-red-500',
  title: 'Design a Smart Cane for the Visually Impaired with Object Detection',
  description: 'Develop a cane equipped with sensors and AI to detect obstacles and assist navigation.',
  difficulty: 'Advanced',
  category: 'Design',
  time: 'High',
  whyItMatters: 'Improves mobility and independence for visually impaired individuals.',
  gettingStarted: [
    'Study assistive devices and sensor technologies.',
    'Integrate cameras or LiDAR for object detection.',
    'Develop AI algorithms to detect obstacles and provide feedback.',
    'Prototype and test with simulated environments.'
  ],
  requiredResources: ['Sensors', 'Microcontroller', 'Python or C++', 'Cane Prototype'],
  potentialMentors: ['Assistive Technology Engineer', 'AI Researcher', 'Occupational Therapist'],
  howToShowcase: 'Demonstrate obstacle detection and navigation in a demo or video.'
}

];
