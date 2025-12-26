
import { Project } from './projectsData';
import { DesignIcon } from '../components/icons/DesignIcon';
import { PantryIcon } from '../components/icons/PantryIcon';
import { AiBrainIcon } from '../components/icons/AiBrainIcon';
import { PodcastIcon } from '../components/icons/PodcastIcon';

export const moreProjects: Project[] = [
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-green-400 to-emerald-600',
    title: 'Urban Vertical Garden Initiative',
    description: 'Design a low-cost vertical gardening system for small urban spaces to promote local food growing.',
    difficulty: 'Intermediate',
    category: 'Social Good',
    time: 'High',
    whyItMatters: 'Addresses food deserts and promotes sustainable urban living.',
    gettingStarted: [
        'Research vertical gardening techniques (hydroponics vs soil).',
        'Design a prototype using recycled materials like pallets or bottles.',
        'Test with fast-growing herbs or leafy greens.',
        'Create a guide for others to build their own.'
    ],
    requiredResources: ['Recycled containers', 'Soil/Seeds', 'Basic tools'],
    potentialMentors: ['Biology Teacher', 'Local Gardener', 'Urban Planner'],
    howToShowcase: 'Document the growth progress with photos, create a DIY video guide, and host a community workshop.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-pink-500 to-orange-400',
    title: 'Local Artist Digital Showcase',
    description: 'Build a dedicated social media channel featuring interviews and work from teen artists in your area.',
    difficulty: 'Beginner',
    category: 'Arts',
    time: 'Medium',
    whyItMatters: 'Builds community among young artists and provides them exposure.',
    gettingStarted: [
        'Create a branded social media account.',
        'Reach out to artistic peers at school for features.',
        'Conduct short interviews about their process.',
        'Post consistently with high-quality images/videos of their art.'
    ],
    requiredResources: ['Smartphone', 'Social Media Account', 'Basic graphic design app'],
    potentialMentors: ['Art Teacher', 'Social Media Manager', 'Local Gallery Owner'],
    howToShowcase: 'Grow your follower count, organize a physical pop-up exhibit, and present engagement metrics.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    title: 'Analyze Local Traffic Patterns with AI',
    description: 'Use public traffic camera data (if available) or own recordings to analyze congestion patterns using computer vision.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Can provide valuable data to local city planning for improving traffic flow and safety.',
    gettingStarted: [
        'Identify a safe location to record traffic or find public data streams.',
        'Use an object detection model (like YOLO) to count cars/pedestrians.',
        'Analyze data for peak times and congestion points.',
        'Write a report with suggestions for improvement.'
    ],
    requiredResources: ['Camera/Public Data Access', 'Python', 'Computer Vision Library (OpenCV/TensorFlow)'],
    potentialMentors: ['CS Teacher', 'City Civil Engineer', 'Data Scientist'],
    howToShowcase: 'Present findings to your local city council or write an op-ed for the local newspaper with your data visualizations.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-green-400 to-emerald-600',
    title: 'Build a Working Model of a Renewable Energy Source',
    description: 'Create a small-scale solar or wind power model that demonstrates energy generation and efficiency.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Develops engineering and sustainability awareness while encouraging innovation in clean energy.',
    gettingStarted: [
        'Choose between solar, wind, or hydro as your energy type.',
        'Gather basic materials like motors, panels, or blades.',
        'Construct a small prototype that generates measurable power.',
        'Test performance under different conditions.',
        'Record and analyze energy output data.'
    ],
    requiredResources: ['Solar panels or motor', 'Multimeter', 'Basic construction tools'],
    potentialMentors: ['Physics Teacher', 'Environmental Engineer', 'Science Fair Advisor'],
    howToShowcase: 'Display your working model and data at your school\'s science fair or a renewable energy expo.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-cyan-600',
    title: 'Conduct a Long-Term Study on the Water Quality of a Local Stream',
    description: 'Perform consistent testing and data tracking to monitor the environmental health of a local waterway.',
    difficulty: 'Intermediate',
    category: 'Social Good',
    time: 'High',
    whyItMatters: 'Promotes community awareness about water pollution and teaches data analysis and scientific observation.',
    gettingStarted: [
        'Select a local stream or pond for testing.',
        'Collect water samples monthly for several months.',
        'Measure pH, turbidity, temperature, and contaminant levels.',
        'Record changes and analyze seasonal effects.',
        'Compile and visualize your findings in a final report.'
    ],
    requiredResources: ['Water testing kit', 'Notebook or spreadsheet', 'Protective gloves'],
    potentialMentors: ['Environmental Science Teacher', 'Biologist', 'Local Conservationist'],
    howToShowcase: 'Publish results in a digital dashboard or present findings to your community council.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-sky-500 to-indigo-700',
    title: 'Design and Build a Functional ROV (Remotely Operated Vehicle)',
    description: 'Engineer a small underwater robot that performs simple tasks like capturing video or collecting samples.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Combines robotics, engineering, and marine science to develop real-world technical skills.',
    gettingStarted: [
        'Research ROV design principles and components.',
        'Gather materials like waterproof motors and frame parts.',
        'Assemble control and video systems.',
        'Test underwater performance and maneuverability.',
        'Refine your design for stability and precision.'
    ],
    requiredResources: ['ROV kit or waterproof components', 'Microcontroller', 'Waterproof camera'],
    potentialMentors: ['Robotics Coach', 'Marine Engineer', 'Physics Teacher'],
    howToShowcase: 'Film your ROV in action and present a demo video at your school\'s STEM expo.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-purple-400 to-violet-600',
    title: 'Grow Crystals and Document the Process Under Different Conditions',
    description: 'Experiment with crystal growth under varied environmental conditions to study how temperature and concentration affect results.',
    difficulty: 'Beginner',
    category: 'Education',
    time: 'Medium',
    whyItMatters: 'Builds chemistry understanding through hands-on experimentation and observation.',
    gettingStarted: [
        'Select crystal types such as salt, sugar, or alum.',
        'Prepare identical solutions with slight environmental variations.',
        'Record growth progress daily with photos.',
        'Compare crystal size and clarity under each condition.',
        'Summarize findings in a short report or poster.'
    ],
    requiredResources: ['Jars or beakers', 'Chemicals like salt, sugar, or alum', 'Notebook or camera'],
    potentialMentors: ['Chemistry Teacher', 'Lab Technician', 'Science Fair Mentor'],
    howToShowcase: 'Display your crystals and data charts at your school\'s science showcase.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-600',
    title: 'Build a Weather Station That Logs Data to an Online Database',
    description: 'Construct a weather station that automatically collects and uploads environmental data for analysis.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Integrates coding, sensors, and environmental awareness into a practical data-driven project.',
    gettingStarted: [
        'Collect sensors for temperature, humidity, and pressure.',
        'Connect to a microcontroller like Arduino or Raspberry Pi.',
        'Write code to record and send readings online.',
        'Create a dashboard for live data visualization.',
        'Validate accuracy through comparison with local forecasts.'
    ],
    requiredResources: ['Microcontroller', 'Weather sensors', 'Internet connection'],
    potentialMentors: ['Engineering Teacher', 'Meteorologist', 'IoT Developer'],
    howToShowcase: 'Share your real-time weather dashboard on a public website or present it during your school\'s STEM week.'
  },
  {
    icon: PodcastIcon,
    iconBg: 'bg-gradient-to-br from-pink-400 to-rose-600',
    title: 'Study the Effects of Different Music Genres on Plant Growth',
    description: 'Explore how exposure to various music genres impacts plant development and growth rate.',
    difficulty: 'Beginner',
    category: 'Humanities',
    time: 'Medium',
    whyItMatters: 'Blends biology and psychology to explore how sound waves may affect living organisms.',
    gettingStarted: [
        'Select identical plants for each genre group.',
        'Expose them to specific music daily for a set period.',
        'Measure growth rates and record observations.',
        'Compare visual and quantitative results.',
        'Analyze whether certain genres promote healthier growth.'
    ],
    requiredResources: ['Plants', 'Speakers', 'Ruler or scale'],
    potentialMentors: ['Biology Teacher', 'Psychology Teacher', 'Botanist'],
    howToShowcase: 'Create a time-lapse video of growth and present a research poster summarizing results.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-lime-400 to-green-700',
    title: 'Design a More Efficient Composting System for Your Home',
    description: 'Engineer an improved composting system that accelerates decomposition and minimizes odor.',
    difficulty: 'Intermediate',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Encourages eco-friendly living while introducing practical environmental engineering skills.',
    gettingStarted: [
        'Research existing composting methods and limitations.',
        'Sketch a design that improves airflow and heat retention.',
        'Build using recycled or low-cost materials.',
        'Track compost breakdown rate and quality.',
        'Refine design for speed and efficiency.'
    ],
    requiredResources: ['Organic waste', 'Composting bin materials', 'Thermometer'],
    potentialMentors: ['Environmental Scientist', 'Biology Teacher', 'Sustainability Expert'],
    howToShowcase: 'Create a short video tutorial or infographic guide for others to replicate your design.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-gray-400 to-slate-700',
    title: 'Build a Model Bridge and Test Its Load-Bearing Capacity',
    description: 'Construct a scale model bridge and evaluate its ability to support weight using physics principles.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Introduces engineering design, structural analysis, and problem-solving through hands-on construction.',
    gettingStarted: [
        'Research different bridge types (truss, beam, arch).',
        'Design and sketch your model structure.',
        'Assemble using lightweight materials.',
        'Apply gradual loads to test weight capacity.',
        'Document and compare design efficiency.'
    ],
    requiredResources: ['Popsicle sticks or straws', 'Glue', 'Weights'],
    potentialMentors: ['Physics Teacher', 'Civil Engineer', 'STEM Club Advisor'],
    howToShowcase: 'Present a video demo of your load test and data charts at your school\'s engineering fair.'
  }, 
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-orange-400 to-amber-600',
    title: 'Local Geological Mapping Project',
    description: 'Create a detailed geological map of your local area by identifying and recording different rock and soil types.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Enhances understanding of earth science and helps identify local geological features and resources.',
    gettingStarted: [
        'Research common rock types and soil classifications.',
        'Collect and label samples from different local sites.',
        'Map locations using GPS and mark geological boundaries.',
        'Compile your data into a color-coded geological map.'
    ],
    requiredResources: ['Field notebook', 'Magnifying lens', 'GPS device', 'Rock ID guide'],
    potentialMentors: ['Geology Teacher', 'Earth Science Professor', 'Local Geologist'],
    howToShowcase: 'Display your geological map at your school\'s science fair or publish it online for local use.'
},
{
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-lime-400 to-green-600',
    title: 'Bioplastics from Kitchen Waste',
    description: 'Experiment with creating biodegradable plastic alternatives using food waste like potato peels or banana skins.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Encourages sustainable innovation and explores eco-friendly materials for future environmental impact.',
    gettingStarted: [
        'Research how starches and gelatin form bioplastics.',
        'Experiment with different ingredients and ratios.',
        'Document texture, flexibility, and breakdown rate.',
        'Compare results with commercial plastics.'
    ],
    requiredResources: ['Starch or gelatin', 'Heat source', 'Molds', 'Measuring tools'],
    potentialMentors: ['Chemistry Teacher', 'Environmental Scientist', 'Sustainability Expert'],
    howToShowcase: 'Present a demo at a science fair or create an infographic showing your bioplastic\'s performance.'
},
{
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-violet-600',
    title: 'DIY Spectroscope Build',
    description: 'Construct a simple spectroscope to analyze the light spectrum from different sources like bulbs or the sun.',
    difficulty: 'Beginner',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Introduces optics and spectroscopy while teaching observation and experimental accuracy.',
    gettingStarted: [
        'Learn about light diffraction and how spectroscopes work.',
        'Use a CD or diffraction grating as the main optical element.',
        'Assemble your device from a cardboard tube or box.',
        'Record and compare spectra from multiple light sources.'
    ],
    requiredResources: ['Cardboard', 'CD or diffraction grating', 'Tape', 'Notebook'],
    potentialMentors: ['Physics Teacher', 'Astronomy Club Advisor', 'Optics Researcher'],
    howToShowcase: 'Take clear photos of spectra and display them in your school\'s science exhibit or online portfolio.'
},
{
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-gray-400 to-slate-600',
    title: 'Vacuum Chamber Physics Project',
    description: 'Design a small-scale vacuum chamber for conducting basic physics experiments like sound travel or boiling points.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Explores gas laws, pressure systems, and experimental design in an engaging hands-on setup.',
    gettingStarted: [
        'Study how vacuum chambers work and what safety precautions are needed.',
        'Gather a clear container and a vacuum pump or syringe setup.',
        'Test safe, simple experiments such as the behavior of marshmallows in low pressure.',
        'Document pressure levels and results carefully.'
    ],
    requiredResources: ['Vacuum pump', 'Sealable container', 'Pressure gauge', 'Safety equipment'],
    potentialMentors: ['Physics Teacher', 'Mechanical Engineer', 'Science Lab Supervisor'],
    howToShowcase: 'Film safe experiments and share them with your physics class or in an online STEM showcase.'
},
{
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-sky-400 to-blue-600',
    title: 'Aerodynamics of Wing Shapes',
    description: 'Design and test various wing shapes to study their aerodynamic efficiency and lift-to-drag ratios.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Combines physics and engineering while encouraging experimental thinking in fluid dynamics.',
    gettingStarted: [
        'Research basic principles of lift and drag.',
        'Design small wing prototypes with different shapes.',
        'Test them in a homemade wind tunnel or using a fan setup.',
        'Measure flight distance, lift, or air resistance.'
    ],
    requiredResources: ['Foam or cardboard', 'Fan or wind tunnel', 'Scale', 'Notebook'],
    potentialMentors: ['Physics Teacher', 'Aerospace Engineer', 'Engineering Club Advisor'],
    howToShowcase: 'Compile your results into a data report and create a display comparing each wing\'s performance.'
},
{
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-amber-400 to-orange-600',
    title: 'Tesla Coil Construction Project',
    description: 'Build a small Tesla coil to explore electromagnetic induction and wireless electricity transfer.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Teaches advanced principles of electromagnetism and energy transfer while building engineering discipline.',
    gettingStarted: [
        'Learn how Tesla coils work and study circuit diagrams.',
        'Gather materials for the primary and secondary coils.',
        'Assemble the circuit with caution and ensure grounding.',
        'Observe safe, low-power sparks and record your observations.'
    ],
    requiredResources: ['Copper wire', 'Power supply', 'Insulating materials', 'Safety gear'],
    potentialMentors: ['Physics Teacher', 'Electrical Engineer', 'Robotics Mentor'],
    howToShowcase: 'Demonstrate your coil safely in a classroom or create a video explaining the science behind it.'
},
{
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-green-400 to-emerald-600',
    title: 'Backyard Biodiversity Phylogenetic Tree',
    description: 'Document local wildlife species and create a phylogenetic tree showing their evolutionary relationships.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Encourages observation, classification, and appreciation of biodiversity through bioinformatics and ecology.',
    gettingStarted: [
        'Observe and identify local species in your yard or park.',
        'Record traits and taxonomic data for each organism.',
        'Use online databases to map evolutionary relationships.',
        'Build a visual tree showing connections and ancestry.'
    ],
    requiredResources: ['Camera or notebook', 'Field guide', 'Computer with internet', 'Drawing tools or phylogeny software'],
    potentialMentors: ['Biology Teacher', 'Ecologist', 'Wildlife Researcher'],
    howToShowcase: 'Display your phylogenetic tree as a poster or interactive web graphic at your school\'s science fair.'
},
{
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-600',
    title: 'Retro Video Game Emulator Build',
    description: 'Develop a retro game emulator that can run classic titles using coding and software engineering skills.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Combines nostalgia and technical challenge while building a deeper understanding of computer architecture.',
    gettingStarted: [
        'Choose an old console system to emulate (NES, GameBoy, etc.).',
        'Learn how the original hardware processed inputs and graphics.',
        'Write an emulator in a language like C++ or Python.',
        'Test it with open-source ROMs and optimize performance.'
    ],
    requiredResources: ['Computer', 'Programming IDE', 'Technical documentation', 'Test ROMs'],
    potentialMentors: ['Computer Science Teacher', 'Software Developer', 'Game Engineer'],
    howToShowcase: 'Host a retro gaming demo or upload your emulator\'s source code to GitHub.'
}, 
{
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-700',
    title: 'Develop a Custom Mod for a Popular Game',
    description: 'Design and code a new gameplay mechanic, item, or environment mod for a game like Minecraft or Terraria.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Shows creativity and coding skill while engaging an active gaming community.',
    gettingStarted: [
        'Choose a game with open modding tools and community support.',
        'Install the required modding API (e.g., Fabric for Minecraft).',
        'Start small—add a new block, item, or function.',
        'Test and refine your mod, then share it on forums like CurseForge.'
    ],
    requiredResources: ['Computer', 'Game Modding API', 'Code Editor'],
    potentialMentors: ['CS Teacher', 'Game Developer', 'Online Modding Community'],
    howToShowcase: 'Upload your mod with documentation and demo videos; share on modding forums or at a coding fair.'
},
{
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-600',
    title: 'Create a GPS-Based Scavenger Hunt App',
    description: 'Design an interactive mobile app that guides users to real-world locations through GPS clues and challenges.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Blends coding, creativity, and community engagement to encourage exploration.',
    gettingStarted: [
        'Learn how to use GPS and mapping APIs (Google Maps, Mapbox).',
        'Design an intuitive user interface for navigation.',
        'Add features like hints, timers, or team play.',
        'Test your app around town and collect feedback.'
    ],
    requiredResources: ['Smartphone', 'Coding Platform (Adalo, React Native)', 'Map API Key'],
    potentialMentors: ['App Developer', 'CS Teacher', 'Local Business Owner'],
    howToShowcase: 'Host a live scavenger event and present your app’s analytics and design.'
},
{
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-600',
    title: 'Build a Website that Visualizes Public Data',
    description: 'Turn open datasets—like weather, population, or traffic—into interactive visualizations using charts and maps.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Transforms raw data into accessible, meaningful insights for your community.',
    gettingStarted: [
        'Find open data sources (data.gov, NOAA, local city portals).',
        'Use a visualization library like Chart.js or D3.js.',
        'Design a clean, responsive layout.',
        'Add filters and interactivity for users to explore data.'
    ],
    requiredResources: ['HTML/CSS/JS', 'Data Visualization Library', 'Web Hosting'],
    potentialMentors: ['Web Developer', 'Data Analyst', 'CS Teacher'],
    howToShowcase: 'Publish the site publicly and share with local organizations or teachers.'
},
{
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-600',
    title: 'Design and Program a Chess-Playing AI',
    description: 'Build an algorithm that can play chess at different difficulty levels using decision trees or machine learning.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Combines logic, algorithms, and strategy—hallmarks of computational thinking.',
    gettingStarted: [
        'Review chess rules and how moves can be represented in code.',
        'Implement a minimax algorithm with alpha-beta pruning.',
        'Add a simple GUI for human vs AI play.',
        'Test and tune based on game performance.'
    ],
    requiredResources: ['Python or JavaScript', 'Chess Engine Libraries', 'Computer'],
    potentialMentors: ['Math Teacher', 'CS Professor', 'AI Researcher'],
    howToShowcase: 'Demonstrate AI matches live or online with a difficulty slider.'
},
{
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-red-400 to-rose-600',
    title: 'Develop a Browser Extension to Block Distractions',
    description: 'Create a lightweight Chrome or Firefox extension that blocks specific websites during study hours.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Helps students stay focused and introduces you to real-world browser API development.',
    gettingStarted: [
        'Learn browser extension basics using MDN Docs.',
        'Write a manifest.json file defining permissions and features.',
        'Add logic to block listed URLs or trigger focus timers.',
        'Test across browsers and refine UX.'
    ],
    requiredResources: ['Computer', 'Code Editor', 'Browser Dev Tools'],
    potentialMentors: ['Web Developer', 'Productivity Coach', 'Teacher'],
    howToShowcase: 'Publish the extension on the Chrome Web Store with a walkthrough video.'
},
{
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-slate-400 to-gray-600',
    title: 'Create a Script that Organizes Your Desktop',
    description: 'Write a Python or PowerShell script that automatically sorts desktop files into folders by type or date.',
    difficulty: 'Beginner',
    category: 'STEM',
    time: 'Low',
    whyItMatters: 'Teaches practical automation while improving daily digital organization.',
    gettingStarted: [
        'Learn basic file handling in Python or shell scripting.',
        'Write logic to detect file extensions and move files accordingly.',
        'Add error handling and logs for safety.',
        'Schedule the script to run automatically.'
    ],
    requiredResources: ['Computer', 'Python or Shell Environment'],
    potentialMentors: ['IT Specialist', 'CS Teacher', 'Automation Engineer'],
    howToShowcase: 'Record a demo of your script in action and post on GitHub with setup instructions.'
},
{
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-600',
    title: 'Build a Simple Robot from a Kit or Scratch',
    description: 'Assemble a robot that performs basic tasks like following lines or avoiding obstacles.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Introduces mechanical design, sensors, and embedded programming in one project.',
    gettingStarted: [
        'Choose a robotics kit or design your own base chassis.',
        'Learn how to connect sensors and motors with a microcontroller.',
        'Program it to complete simple actions.',
        'Iterate with additional features like sound or light response.'
    ],
    requiredResources: ['Robot Kit or Arduino', 'Sensors', 'Basic Tools'],
    potentialMentors: ['Engineering Teacher', 'Robotics Coach', 'Mechanical Engineer'],
    howToShowcase: 'Film a demonstration and explain your build process during a school tech fair.'
},
{
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-purple-400 to-pink-600',
    title: 'Code a Program that Generates Abstract Digital Art',
    description: 'Create a code-based art generator using shapes, randomness, or algorithms like Perlin noise.',
    difficulty: 'Intermediate',
    category: 'Arts',
    time: 'Medium',
    whyItMatters: 'Explores creativity through programming, blending logic and visual expression.',
    gettingStarted: [
        'Use libraries like p5.js or Processing.',
        'Experiment with randomness and color palettes.',
        'Add interactivity—let users click to generate new art.',
        'Save and share the best outputs as prints or NFTs.'
    ],
    requiredResources: ['Computer', 'p5.js or Processing IDE'],
    potentialMentors: ['Art Teacher', 'Creative Coder', 'Graphic Designer'],
    howToShowcase: 'Host an online gallery or physical exhibit of your generative art pieces.'
},
{
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-emerald-600',
    title: 'Develop a Text-Based Adventure Game',
    description: 'Build an interactive storytelling experience where players make choices that shape the narrative.',
    difficulty: 'Beginner',
    category: 'Arts',
    time: 'Medium',
    whyItMatters: 'Encourages creative writing and logical structure while introducing programming logic.',
    gettingStarted: [
        'Write a branching story outline.',
        'Use Python or Twine to create the interactive flow.',
        'Add variables to track player choices and outcomes.',
        'Test and refine pacing, tone, and replayability.'
    ],
    requiredResources: ['Computer', 'Text Editor or Twine'],
    potentialMentors: ['English Teacher', 'Game Developer', 'Creative Writer'],
    howToShowcase: 'Publish your game online and collect player feedback to iterate.'
},
{
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-600',
    title: 'Build a Web App that Tracks Collectible Prices',
    description: 'Create a web app that tracks real-time prices of collectibles like trading cards, sneakers, or coins using public APIs or manual input.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Teaches full-stack fundamentals while connecting coding to personal interests.',
    gettingStarted: [
        'Choose a collectible niche with accessible price data.',
        'Design a simple front-end to display trends and graphs.',
        'Use a database (like Firebase) or API scraping for live updates.',
        'Add filters, sorting, or alerts for price changes.'
    ],
    requiredResources: ['Computer', 'HTML/CSS/JS', 'API Access or Database'],
    potentialMentors: ['Web Developer', 'CS Teacher', 'Economics Teacher'],
    howToShowcase: 'Publish the app online and present a demo showing live price tracking and visualization.'
},
{
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-600',
    title: 'Create a Program that Translates Text into Leetspeak or Ciphers',
    description: 'Write a fun program that encodes and decodes text into leetspeak or other substitution ciphers like Caesar or Atbash.',
    difficulty: 'Beginner',
    category: 'STEM',
    time: 'Low',
    whyItMatters: 'Introduces programming logic, string manipulation, and basic encryption concepts.',
    gettingStarted: [
        'Learn about basic cipher algorithms.',
        'Create a dictionary or function to map characters.',
        'Add an option for the user to choose cipher type.',
        'Implement decoding to reverse the message.'
    ],
    requiredResources: ['Computer', 'Python or JavaScript', 'Text Editor'],
    potentialMentors: ['CS Teacher', 'Cryptography Enthusiast', 'Math Tutor'],
    howToShowcase: 'Turn it into a fun online demo or add a simple GUI for interactive use.'
},
{
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-orange-400 to-pink-500',
    title: 'Design a Website for a Local Small Business or Club',
    description: 'Offer to build or redesign a website for a local business, student club, or community group as a service project.',
    difficulty: 'Intermediate',
    category: 'Social Good',
    time: 'High',
    whyItMatters: 'Gives real-world experience in client communication and web design while helping your community.',
    gettingStarted: [
        'Reach out to a small business or school club that lacks a website.',
        'Plan a layout and content with them.',
        'Use a platform like Wix, WordPress, or hand-code it.',
        'Ensure it’s mobile-friendly and easy to update.'
    ],
    requiredResources: ['Computer', 'Web Builder or HTML/CSS Skills', 'Domain Hosting'],
    potentialMentors: ['Web Designer', 'Marketing Teacher', 'Business Owner'],
    howToShowcase: 'Present before/after screenshots, analytics, and a testimonial from the client.'
},
{
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-sky-400 to-blue-600',
    title: 'Develop a Simple Physics Engine Simulator',
    description: 'Create a program that simulates motion, collisions, or gravity between objects using physics formulas.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Strengthens understanding of physics principles and computational modeling.',
    gettingStarted: [
        'Learn Newton’s laws and how to apply them in code.',
        'Start with basic 2D motion—position, velocity, acceleration.',
        'Add collision detection and energy conservation.',
        'Visualize motion using a simple graphics library.'
    ],
    requiredResources: ['Computer', 'Python (Pygame) or JavaScript (Canvas)', 'Math/Physics Notes'],
    potentialMentors: ['Physics Teacher', 'Game Developer', 'CS Professor'],
    howToShowcase: 'Record a demo video showing your simulator’s behavior and explain the math behind it.'
}, 
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-sky-400 to-blue-600',
  title: 'Organize a Makers Fair for Your Town',
  description: 'Plan and host a community event where creators display and demonstrate their inventions or crafts.',
  difficulty: 'Advanced',
  category: 'Social Good',
  time: 'High',
  whyItMatters: 'Brings together innovators, fosters creativity, and encourages collaboration among all ages.',
  gettingStarted: [
    'Find a suitable venue and date for the event.',
    'Reach out to local schools and inventors to participate.',
    'Create booths and workshop areas for participants.',
    'Promote the fair through flyers and social media.',
    'Gather volunteers to help run logistics and clean-up.'
  ],
  requiredResources: ['Venue', 'Tables and Booths', 'Volunteers', 'Marketing Materials'],
  potentialMentors: ['Event Coordinator', 'STEM Teacher', 'Community Organizer'],
  howToShowcase: 'Feature highlights and interviews from the fair on your school\'s website or local news.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-600',
  title: 'Start a Club Dedicated to a Specific Cause',
  description: 'Create a student club focused on a meaningful cause like ocean conservation or sustainability.',
  difficulty: 'Intermediate',
  category: 'Social Good',
  time: 'Medium',
  whyItMatters: 'Promotes awareness and activism while building leadership and teamwork skills.',
  gettingStarted: [
    'Choose a cause you care deeply about.',
    'Draft a proposal for your school\'s administration.',
    'Recruit passionate members and hold your first meeting.',
    'Plan monthly service or awareness projects.',
    'Collaborate with local organizations for larger impact.'
  ],
  requiredResources: ['Meeting Space', 'Promotional Materials', 'Permission from School'],
  potentialMentors: ['Environmental Science Teacher', 'Local Activist', 'Club Advisor'],
  howToShowcase: 'Create a photo blog or social media page documenting your club\'s activities.'
},
{
  icon: PantryIcon,
  iconBg: 'bg-gradient-to-br from-amber-400 to-orange-600',
  title: 'Coordinate a Test Prep Drive',
  description: 'Collect and distribute old textbooks, prep books, and study materials for underclassmen.',
  difficulty: 'Beginner',
  category: 'Education',
  time: 'Medium',
  whyItMatters: 'Supports academic success and promotes recycling of educational resources.',
  gettingStarted: [
    'Ask your school\'s administration for donation approval.',
    'Set up collection bins around campus.',
    'Advertise through flyers and morning announcements.',
    'Sort materials by subject and test type.',
    'Host a “Study Resource Giveaway Day.”'
  ],
  requiredResources: ['Collection Bins', 'Volunteers', 'Labeling Supplies'],
  potentialMentors: ['School Counselor', 'Teacher', 'Student Government Advisor'],
  howToShowcase: 'Share before-and-after photos of collected materials and distribute data on donations.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-rose-400 to-pink-600',
  title: 'Launch a Little Free Library Campaign',
  description: 'Install a neighborhood book-sharing box to encourage reading and community engagement.',
  difficulty: 'Intermediate',
  category: 'Social Good',
  time: 'Medium',
  whyItMatters: 'Promotes literacy, sustainability, and community connection.',
  gettingStarted: [
    'Build or purchase a weatherproof library box.',
    'Get permission to install it in a public space.',
    'Fill it with donated books for all ages.',
    'Create signage explaining how it works.',
    'Advertise it through local media or your school\'s newsletter.'
  ],
  requiredResources: ['Library Box', 'Books', 'Paint and Tools', 'Permission from Local Council'],
  potentialMentors: ['Librarian', 'English Teacher', 'Community Leader'],
  howToShowcase: 'Host a ribbon-cutting event and post updates on new books being added.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-600',
  title: 'Organize a Voter Registration Drive',
  description: 'Encourage civic engagement by helping students and teachers register to vote.',
  difficulty: 'Advanced',
  category: 'Social Good',
  time: 'High',
  whyItMatters: 'Empowers young voices and strengthens democracy through voter participation.',
  gettingStarted: [
    'Research local voting laws and requirements.',
    'Partner with a civic organization for materials.',
    'Advertise the drive at school and online.',
    'Set up registration booths during lunch or events.',
    'Follow up to ensure submissions are processed correctly.'
  ],
  requiredResources: ['Registration Forms', 'Tables', 'Promotional Materials'],
  potentialMentors: ['Civics Teacher', 'Local Election Official', 'Community Organizer'],
  howToShowcase: 'Publish data on how many new voters registered and highlight your impact.'
},
{
  icon: PodcastIcon,
  iconBg: 'bg-gradient-to-br from-yellow-400 to-lime-600',
  title: 'Start a Pen-Pal Program with Seniors',
  description: 'Connect students with seniors in local retirement homes through letters or emails.',
  difficulty: 'Beginner',
  category: 'Social Good',
  time: 'Medium',
  whyItMatters: 'Builds empathy, combats loneliness, and bridges generations through storytelling.',
  gettingStarted: [
    'Partner with a nearby retirement home.',
    'Pair students with willing senior participants.',
    'Establish writing guidelines for safety and respect.',
    'Host an optional meet-and-greet or online call.',
    'Share stories or lessons learned from the exchange.'
  ],
  requiredResources: ['Stationery', 'Postage', 'School Partnership Approval'],
  potentialMentors: ['Guidance Counselor', 'English Teacher', 'Community Outreach Coordinator'],
  howToShowcase: 'Display excerpts from letters in your school\'s newsletter or art hallway.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-cyan-400 to-green-600',
  title: 'Coordinate a Community Skillshare Day',
  description: 'Host an event where people teach mini-workshops on their hobbies or professional skills.',
  difficulty: 'Advanced',
  category: 'Social Good',
  time: 'High',
  whyItMatters: 'Encourages collaboration, knowledge sharing, and community building.',
  gettingStarted: [
    'Reserve a space for workshops.',
    'Invite local experts and volunteers to teach.',
    'Organize sessions by topic and time slots.',
    'Create a schedule and promote it widely.',
    'Collect feedback to improve future events.'
  ],
  requiredResources: ['Venue', 'Workshop Supplies', 'Volunteers', 'Flyers'],
  potentialMentors: ['Community Organizer', 'Event Planner', 'Teacher'],
  howToShowcase: 'Post video clips or testimonials from workshop participants online.'
},
{
  icon: PantryIcon,
  iconBg: 'bg-gradient-to-br from-red-400 to-rose-600',
  title: 'Partner with a Local Animal Shelter',
  description: 'Run a fundraising and awareness campaign for adoptable pets.',
  difficulty: 'Intermediate',
  category: 'Social Good',
  time: 'Medium',
  whyItMatters: 'Helps improve animal welfare while developing marketing and organizational skills.',
  gettingStarted: [
    'Reach out to local shelters to propose collaboration.',
    'Create posters and social media campaigns.',
    'Host donation drives for food and supplies.',
    'Organize an adoption day or awareness event.',
    'Share success stories of adopted animals.'
  ],
  requiredResources: ['Marketing Materials', 'Donation Boxes', 'Volunteers'],
  potentialMentors: ['Shelter Manager', 'Marketing Teacher', 'Nonprofit Leader'],
  howToShowcase: 'Highlight total funds raised and pets adopted in a school\'s assembly or website.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-blue-400 to-teal-600',
  title: 'Organize a Team for a Charity Run/Walk',
  description: 'Form a team to participate in a charitable athletic event and raise awareness for a cause.',
  difficulty: 'Intermediate',
  category: 'Social Good',
  time: 'Medium',
  whyItMatters: 'Promotes fitness, teamwork, and giving back to the community.',
  gettingStarted: [
    'Select a charity event to support.',
    'Recruit participants from your school or community.',
    'Set a fundraising goal and create an online page.',
    'Train together and promote your mission.',
    'Participate as a group and document the event.'
  ],
  requiredResources: ['Team Shirts', 'Fundraising Page', 'Transportation'],
  potentialMentors: ['Coach', 'Physical Education Teacher', 'Nonprofit Organizer'],
  howToShowcase: 'Share team photos and total funds raised on your school\'s social media.'
},
{
  icon: PodcastIcon,
  iconBg: 'bg-gradient-to-br from-violet-400 to-indigo-600',
  title: 'Start a New Student Welcoming Committee',
  description: 'Create a team that helps new students adjust to your school\'s environment.',
  difficulty: 'Beginner',
  category: 'Education',
  time: 'Low',
  whyItMatters: 'Fosters inclusion, leadership, and a positive school culture.',
  gettingStarted: [
    'Ask administration for permission to start the committee.',
    'Recruit friendly, outgoing student volunteers.',
    'Plan tours, lunch meetups, and check-in events.',
    'Distribute welcome packets with key school info.',
    'Collect feedback to make the process smoother each semester.'
  ],
  requiredResources: ['Printed Materials', 'Committee Members', 'Welcome Gifts'],
  potentialMentors: ['School Counselor', 'Principal', 'Student Council Advisor'],
  howToShowcase: 'Create a short video or digital brochure showing your committee’s impact.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-amber-400 to-orange-600',
  title: 'Start a Small Business Selling Handmade Crafts Online',
  description: 'Launch an online store to sell your own handmade art, jewelry, or decor.',
  difficulty: 'Intermediate',
  category: 'Business',
  time: 'High',
  whyItMatters: 'Teaches entrepreneurship, marketing, and digital sales skills.',
  gettingStarted: [
    'Choose your main craft or product focus.',
    'Set up a shop on platforms like Etsy or Shopify.',
    'Take high-quality photos and write engaging descriptions.',
    'Price products fairly and calculate shipping costs.',
    'Market through social media and word of mouth.'
  ],
  requiredResources: ['Craft Supplies', 'Camera', 'Online Store Account'],
  potentialMentors: ['Art Teacher', 'Local Business Owner', 'E-Commerce Consultant'],
  howToShowcase: 'Create a portfolio website and track sales growth over time.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-cyan-400 to-teal-600',
  title: 'Provide Tech-Support for Seniors',
  description: 'Offer basic technology help sessions for elderly residents in your area.',
  difficulty: 'Beginner',
  category: 'Social Good',
  time: 'Medium',
  whyItMatters: 'Bridges the digital divide and empowers older adults through tech literacy.',
  gettingStarted: [
    'Reach out to community centers or senior homes.',
    'Offer free weekly sessions or house calls.',
    'Teach basics like emailing, video calling, or online safety.',
    'Create easy-to-follow tech guides for them.',
    'Collect feedback to improve future lessons.'
  ],
  requiredResources: ['Laptop', 'Printed Guides', 'Flyers'],
  potentialMentors: ['IT Teacher', 'Community Volunteer Coordinator', 'Senior Center Staff'],
  howToShowcase: 'Compile testimonials and photos for your school\'s service portfolio.'
},
{
  icon: PantryIcon,
  iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-600',
  title: 'Launch a Car or Bike Washing Service',
  description: 'Start a small-scale neighborhood cleaning service for cars or bikes.',
  difficulty: 'Beginner',
  category: 'Business',
  time: 'Low',
  whyItMatters: 'Builds entrepreneurship and customer service experience.',
  gettingStarted: [
    'Gather supplies like soap, sponges, and buckets.',
    'Set affordable prices and choose a visible location.',
    'Advertise with flyers and local social media groups.',
    'Offer loyalty discounts for repeat customers.',
    'Track income and expenses to learn basic finance.'
  ],
  requiredResources: ['Cleaning Supplies', 'Buckets', 'Hose Access', 'Advertising Materials'],
  potentialMentors: ['Local Entrepreneur', 'Economics Teacher', 'Small Business Coach'],
  howToShowcase: 'Present a mini business report with photos and customer feedback.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-emerald-600',
  title: 'Create a Business Plan for a Dream Company',
  description: 'Design a detailed plan for a startup idea, including mission, marketing, and finances.',
  difficulty: 'Intermediate',
  category: 'Business',
  time: 'Medium',
  whyItMatters: 'Develops strategic thinking and real-world entrepreneurial insight.',
  gettingStarted: [
    'Brainstorm a company idea that excites you.',
    'Research your target audience and competitors.',
    'Write a mission statement and marketing strategy.',
    'Create a mock budget and funding plan.',
    'Design a pitch deck for potential investors or mentors.'
  ],
  requiredResources: ['Business Plan Template', 'Computer', 'Market Research Tools'],
  potentialMentors: ['Economics Teacher', 'Startup Founder', 'Business Professor'],
  howToShowcase: 'Submit your plan to a local business competition or online entrepreneurship fair.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-rose-400 to-pink-600',
  title: 'Start a Personalized Gift Basket Business',
  description: 'Create and sell themed gift baskets for holidays, birthdays, or events.',
  difficulty: 'Intermediate',
  category: 'Business',
  time: 'High',
  whyItMatters: 'Combines creativity with marketing and customer relationship skills.',
  gettingStarted: [
    'Choose basket themes (self-care, coffee lover, gamer, etc.).',
    'Find affordable items in bulk for filling.',
    'Package attractively and include personal notes.',
    'Promote via social media and local word of mouth.',
    'Offer custom orders for special occasions.'
  ],
  requiredResources: ['Baskets', 'Decorations', 'Packaging Supplies', 'Advertising Materials'],
  potentialMentors: ['Marketing Teacher', 'Event Planner', 'Local Retailer'],
  howToShowcase: 'Display your products at a school\'s holiday fair or community market.'
},
{
  icon: PodcastIcon,
  iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-600',
  title: 'Offer a Local Tour Guide Service',
  description: 'Lead tours of unique or historic places in your town for visitors or new residents.',
  difficulty: 'Intermediate',
  category: 'Business',
  time: 'Medium',
  whyItMatters: 'Develops communication, storytelling, and leadership abilities.',
  gettingStarted: [
    'Research your town\'s local history and landmarks.',
    'Map out walking routes and stops.',
    'Create fun facts or stories to share at each location.',
    'Advertise online or through your school.',
    'Offer private or group tours for donations.'
  ],
  requiredResources: ['Tour Script', 'Brochures', 'Walking Route Plan'],
  potentialMentors: ['History Teacher', 'Tourism Official', 'Local Historian'],
  howToShowcase: 'Create a short video or blog post highlighting your most popular tours.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-fuchsia-400 to-purple-600',
  title: 'Become a Reseller of Vintage Clothing or Collectibles',
  description: 'Curate and sell secondhand or vintage items online or at local pop-up markets.',
  difficulty: 'Advanced',
  category: 'Business',
  time: 'High',
  whyItMatters: 'Promotes sustainability while teaching e-commerce and fashion marketing.',
  gettingStarted: [
    'Source quality items from thrift stores or estate sales.',
    'Clean, photograph, and price items.',
    'List them on Depop, eBay, or a personal site.',
    'Use social media to build a brand identity.',
    'Track profit margins and popular product types.'
  ],
  requiredResources: ['Camera', 'Online Store Account', 'Shipping Supplies'],
  potentialMentors: ['Fashion Designer', 'Retail Manager', 'E-Commerce Seller'],
  howToShowcase: 'Build an online portfolio showing your best resold pieces and analytics.'
},
{
  icon: PantryIcon,
  iconBg: 'bg-gradient-to-br from-red-400 to-rose-600',
  title: 'Start a Pet-Sitting or Dog-Walking Service',
  description: 'Provide reliable care for pets when owners are busy or away.',
  difficulty: 'Beginner',
  category: 'Business',
  time: 'Medium',
  whyItMatters: 'Teaches responsibility, communication, and customer service skills.',
  gettingStarted: [
    'Advertise in your neighborhood or online groups.',
    'Meet clients and learn their pets’ routines.',
    'Schedule daily or weekly walks or visits.',
    'Keep detailed notes on care instructions.',
    'Ask for testimonials to grow your client base.'
  ],
  requiredResources: ['Leashes', 'Pet Supplies', 'Schedule Tracker'],
  potentialMentors: ['Veterinarian', 'Pet Groomer', 'Animal Shelter Worker'],
  howToShowcase: 'Create a website featuring pet photos, client feedback, and services offered.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-sky-400 to-blue-600',
  title: 'Create and Sell Custom Stickers or Pins',
  description: 'Design, produce, and market a line of creative stickers or enamel pins.',
  difficulty: 'Intermediate',
  category: 'Design',
  time: 'High',
  whyItMatters: 'Combines artistic design with business skills and brand development.',
  gettingStarted: [
    'Sketch unique designs or slogans.',
    'Use online print services to produce small batches.',
    'Set up an online storefront or local booth.',
    'Promote through social media and art fairs.',
    'Offer limited edition releases to boost demand.'
  ],
  requiredResources: ['Design Software', 'Printer or Manufacturer', 'Packaging Supplies'],
  potentialMentors: ['Graphic Designer', 'Art Teacher', 'Small Business Owner'],
  howToShowcase: 'Display your product line at a school\'s art fair or on your portfolio site.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-violet-400 to-indigo-600',
  title: 'Develop a Brand Identity for a Company',
  description: 'Design a cohesive brand system including logo, colors, and tone for a business idea.',
  difficulty: 'Advanced',
  category: 'Design',
  time: 'Medium',
  whyItMatters: 'Teaches branding, graphic design, and business strategy in one project.',
  gettingStarted: [
    'Pick a real or fictional company to brand.',
    'Create a mood board to define the brand personality.',
    'Design the logo, color palette, and typography.',
    'Develop social media templates and brand guidelines.',
    'Present your final branding in a digital mockup deck.'
  ],
  requiredResources: ['Design Software', 'Branding Templates', 'Presentation Tools'],
  potentialMentors: ['Graphic Designer', 'Marketing Director', 'Design Professor'],
  howToShowcase: 'Upload your brand package to a personal portfolio or Behance profile.'
}, 
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-600',
  title: 'Develop a Smart Inventory Tracker for Small Vendors',
  description: 'Create a lightweight digital system to help local shops manage stock using simple AI tools.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Teaches automation, business operations, and product development.',
  gettingStarted: [
    'Interview small business owners about their inventory pain points.',
    'Design a spreadsheet-based prototype first.',
    'Automate it using Python or Google Apps Script.',
    'Test with one or two local stores.',
    'Refine based on user feedback and data accuracy.'
  ],
  requiredResources: ['Laptop', 'Spreadsheet Software', 'Database Tools'],
  potentialMentors: ['Computer Science Teacher', 'Local Business Owner', 'Data Analyst'],
  howToShowcase: 'Demonstrate live tracking and analytics in a short pitch presentation.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-600',
  title: 'Design 3D-Printed Office Tools and Sell Them Online',
  description: 'Use CAD and 3D printing to design custom stationery, holders, or organizers for remote workers.',
  difficulty: 'Intermediate',
  category: 'Design',
  time: 'High',
  whyItMatters: 'Blends creativity, 3D design, and entrepreneurship into one project.',
  gettingStarted: [
    'Learn basic CAD software like Tinkercad or Fusion 360.',
    'Prototype small accessories like pen holders or phone stands.',
    'Print samples at a local makerspace.',
    'Create listings on Etsy or Gumroad.',
    'Gather reviews and improve product designs.'
  ],
  requiredResources: ['3D Printer Access', 'Design Software', 'Packaging Materials'],
  potentialMentors: ['Engineering Teacher', 'Product Designer', 'Local Maker'],
  howToShowcase: 'Display your products and 3D models at a school showcase or fair.'
},
{
  icon: PantryIcon,
  iconBg: 'bg-gradient-to-br from-sky-400 to-blue-600',
  title: 'Build a Smart Garden Kit for Apartments',
  description: 'Develop a compact indoor garden setup that tracks soil moisture and light levels.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Teaches IoT, coding, and environmental sustainability while solving a real urban issue.',
  gettingStarted: [
    'Assemble sensors for humidity, soil moisture, and light.',
    'Connect to a microcontroller like Arduino or Raspberry Pi.',
    'Design a companion dashboard for tracking data.',
    'Test with herbs or small plants indoors.',
    'Create instructions and sell kits locally or online.'
  ],
  requiredResources: ['Sensors', 'Microcontroller', 'Planters', 'Soil', 'LED Lights'],
  potentialMentors: ['Biology Teacher', 'Electrical Engineer', 'Urban Gardener'],
  howToShowcase: 'Display a live demo showing automated plant care.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-amber-400 to-orange-600',
  title: 'Create a Wearable Tech Accessory Line',
  description: 'Design simple wearable devices or jewelry that integrate LED patterns or motion sensors.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Combines engineering and fashion — great for tech-savvy creatives.',
  gettingStarted: [
    'Research small, lightweight electronic modules.',
    'Prototype using Arduino or micro:bit boards.',
    'Experiment with flexible fabrics or resin casting.',
    'Add interactive lighting effects or gestures.',
    'Sell your designs through local art fairs or online.'
  ],
  requiredResources: ['Microcontroller', 'Conductive Thread', 'LED Components', 'Fabric or Resin'],
  potentialMentors: ['Fashion Designer', 'STEM Instructor', 'Hardware Hacker'],
  howToShowcase: 'Host a mini fashion-tech runway at school or record a demo video.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-pink-400 to-rose-600',
  title: 'Develop a Drone Delivery Simulation for Local Businesses',
  description: 'Simulate how small drones could deliver products within your town safely and efficiently.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Encourages creative problem-solving in logistics and automation.',
  gettingStarted: [
    'Research FAA regulations and delivery range limits.',
    'Use simulation tools like Unity or Gazebo to model paths.',
    'Calculate optimal routes and delivery times.',
    'Include data visualization and cost analysis.',
    'Present findings to local shop owners or in competitions.'
  ],
  requiredResources: ['Simulation Software', 'Drone Model or 3D Prototype', 'Computer'],
  potentialMentors: ['Physics Teacher', 'Software Developer', 'Logistics Manager'],
  howToShowcase: 'Show your simulation results in a short animated presentation.'
},
{
  icon: PodcastIcon,
  iconBg: 'bg-gradient-to-br from-teal-400 to-green-600',
  title: 'Launch a Student Tech Consultancy',
  description: 'Create a small business offering website building, digital marketing, or automation help for local shops.',
  difficulty: 'Intermediate',
  category: 'Business',
  time: 'High',
  whyItMatters: 'Develops leadership, client management, and applied technical skills.',
  gettingStarted: [
    'Form a small team of students with complementary skills.',
    'Offer free consultations to gain testimonials.',
    'Design logos, websites, or automations for small clients.',
    'Build a professional online portfolio.',
    'Expand services as you gain experience.'
  ],
  requiredResources: ['Laptop', 'Design Tools', 'Project Management Software'],
  potentialMentors: ['IT Teacher', 'Startup Founder', 'Marketing Advisor'],
  howToShowcase: 'Publish a digital portfolio featuring before-and-after client transformations.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-violet-400 to-fuchsia-600',
  title: 'Develop Customizable Smart Desk Accessories',
  description: 'Invent a line of modular desk add-ons like smart lamps, pen stands, or cable organizers with sensors.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Blends creativity, prototyping, and tech entrepreneurship.',
  gettingStarted: [
    'Sketch designs that integrate sensors or Bluetooth features.',
    'Prototype with Arduino and laser-cut materials.',
    'Create modular pieces that fit together cleanly.',
    'Test usability and gather user feedback.',
    'Brand and market them under a unique name.'
  ],
  requiredResources: ['Microcontroller', 'Laser Cutter Access', '3D Modeling Software'],
  potentialMentors: ['Industrial Designer', 'Hardware Engineer', 'Entrepreneurship Coach'],
  howToShowcase: 'Set up an interactive booth where users test your prototypes live.'
},
{
  icon: PantryIcon,
  iconBg: 'bg-gradient-to-br from-lime-400 to-green-600',
  title: 'Build a Low-Cost Solar Charger Business',
  description: 'Design and sell small, affordable solar chargers for students or outdoor use.',
  difficulty: 'Intermediate',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Combines renewable energy design with practical entrepreneurship.',
  gettingStarted: [
    'Research simple solar circuit kits and power output.',
    'Assemble working prototypes safely.',
    'Test charging efficiency under different light conditions.',
    'Design lightweight, portable casings.',
    'Sell or donate units to schools and community members.'
  ],
  requiredResources: ['Solar Panels', 'Battery Components', 'Soldering Kit'],
  potentialMentors: ['Physics Teacher', 'Electrical Engineer', 'Sustainability Advocate'],
  howToShowcase: 'Host a demo charging common devices using your product.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-cyan-400 to-sky-600',
  title: 'Create a Data Dashboard for Local Environmental Impact',
  description: 'Collect and visualize open data (air quality, recycling rates, etc.) for your city.',
  difficulty: 'Intermediate',
  category: 'STEM',
  time: 'Medium',
  whyItMatters: 'Makes local data understandable and actionable for the community.',
  gettingStarted: [
    'Gather open datasets from government or research sources.',
    'Clean and process data using Python or Google Sheets.',
    'Design interactive charts or heatmaps.',
    'Publish insights through a simple website.',
    'Promote through local schools or organizations.'
  ],
  requiredResources: ['Computer', 'Data Visualization Software', 'Public Datasets'],
  potentialMentors: ['Data Scientist', 'Environmental Activist', 'Civics Teacher'],
  howToShowcase: 'Publish your dashboard with periodic updates and social media outreach.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-yellow-400 to-amber-600',
  title: 'Develop a Smart Recycling Bin Prototype',
  description: 'Create a bin that identifies recyclables using sensors and lights for proper sorting.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Encourages sustainable tech innovation through engineering and design.',
  gettingStarted: [
    'Use sensors to detect object type or weight.',
    'Code basic classification logic on a microcontroller.',
    'Build the frame from recycled materials.',
    'Add indicator lights for sorting feedback.',
    'Test in a school or park setting and record results.'
  ],
  requiredResources: ['Sensors', 'Microcontroller', 'Recycled Materials', 'LEDs'],
  potentialMentors: ['Engineering Teacher', 'Environmental Scientist', 'Hardware Developer'],
  howToShowcase: 'Film a working demo and display at an innovation fair.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-cyan-500 to-indigo-700',
 title: 'Develop a Brainwave Emotion Classifier',
 description: 'Use EEG data and machine learning to classify emotional states.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Explores the intersection of neuroscience and artificial intelligence, bridging mind and machine understanding.',
 gettingStarted: [
   'Research EEG signal processing and open-source EEG datasets.',
   'Use Python with TensorFlow or PyTorch for model training.',
   'Test your model on emotional recognition tasks.',
   'Visualize results through confusion matrices and graphs.',
   'Publish your findings online or at a student research fair.'
 ],
 requiredResources: ['EEG Headset', 'Python Libraries', 'Data Visualization Tools'],
 potentialMentors: ['Neuroscience Professor', 'AI Researcher', 'Biomedical Engineer'],
 howToShowcase: 'Create an interactive demo or publish a digital neuroscience showcase.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-600',
 title: 'Build a Neural Prosthetic Simulator',
 description: 'Design a virtual model that simulates how prosthetic limbs can be controlled via neural signals.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Simulates real-world biomedical engineering challenges and advances accessibility technology.',
 gettingStarted: [
   'Learn about brain-computer interface (BCI) fundamentals.',
   'Create a simulation using Python or Unity for motor control modeling.',
   'Incorporate user input mimicking neural signals.',
   'Test performance accuracy using feedback loops.',
   'Document the development process in a project log.'
 ],
 requiredResources: ['Coding Software', 'Simulation Environment', 'Neuroscience Research Papers'],
 potentialMentors: ['Biomedical Engineering Professor', 'BCI Researcher', 'Rehabilitation Scientist'],
 howToShowcase: 'Demo the simulation at a science expo or online innovation fair.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-fuchsia-500 to-pink-600',
 title: 'Create an AI Model that Predicts Sleep Stages',
 description: 'Train an AI to identify REM, deep, and light sleep using wearable data.',
 difficulty: 'Intermediate',
 category: 'STEM',
 time: 'Medium',
 whyItMatters: 'Improves understanding of sleep neuroscience and real-world biomedical applications.',
 gettingStarted: [
   'Collect anonymized data from wearable devices or open datasets.',
   'Preprocess and label data according to sleep stages.',
   'Train and test neural networks for pattern recognition.',
   'Visualize results using sleep graphs.',
   'Publish findings in a mini research report.'
 ],
 requiredResources: ['Wearable Data', 'Python ML Libraries', 'Graphing Tools'],
 potentialMentors: ['Sleep Researcher', 'Data Scientist', 'Health Tech Engineer'],
 howToShowcase: 'Upload an interactive dashboard showing sleep analytics.'
},
{
 icon: PodcastIcon,
 iconBg: 'bg-gradient-to-br from-orange-400 to-red-600',
 title: 'Launch a NeuroTech Deep Dive Podcast',
 description: 'Interview researchers working at the intersection of neuroscience, robotics, and AI.',
 difficulty: 'Intermediate',
 category: 'Education',
 time: 'Medium',
 whyItMatters: 'Promotes public understanding of complex neurotechnologies and innovation ethics.',
 gettingStarted: [
   'Research cutting-edge topics like brain implants and neuro-AI.',
   'Plan and record structured interviews with experts.',
   'Edit and publish episodes on Spotify or YouTube.',
   'Promote your show via school or science clubs.',
   'Summarize findings in short blog posts.'
 ],
 requiredResources: ['Microphone', 'Audio Editing Software', 'Interview Scripts'],
 potentialMentors: ['Neuroscience Communicator', 'Science Journalist', 'Podcast Producer'],
 howToShowcase: 'Host a live Q&A or feature your podcast in your school\’s newsletter.'
},
{
 icon: PantryIcon,
 iconBg: 'bg-gradient-to-br from-blue-500 to-sky-700',
 title: 'Build a Cognitive Reaction Time Analyzer',
 description: 'Develop a web app that tests and analyzes reaction time under different visual or auditory conditions.',
 difficulty: 'Beginner',
 category: 'STEM',
 time: 'Low',
 whyItMatters: 'Demonstrates cognitive neuroscience in action and introduces basic data science skills.',
 gettingStarted: [
   'Use HTML, CSS, and JavaScript to build a simple reaction game.',
   'Record user response times and store them in a database.',
   'Analyze differences between trial types.',
   'Display results in charts or graphs.',
   'Allow users to export or compare results.'
 ],
 requiredResources: ['Basic Coding Software', 'Data Storage Tool', 'Visualization Library'],
 potentialMentors: ['Psychology Teacher', 'Cognitive Scientist', 'Front-End Developer'],
 howToShowcase: 'Present at your school\’s science fair or post on GitHub.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-600',
 title: 'Design a Neural Network That Generates Art Based on Mood',
 description: 'Use AI to generate artwork that reflects human emotion input.',
 difficulty: 'Intermediate',
 category: 'Design',
 time: 'Medium',
 whyItMatters: 'Blends computer science with emotional expression, bridging creativity and code.',
 gettingStarted: [
   'Collect emotion-related datasets or crowdsource responses.',
   'Train an image generation model using GANs or diffusion methods.',
   'Visualize outputs for different mood categories.',
   'Add a simple user interface for mood selection.',
   'Curate a virtual gallery for generated art.'
 ],
 requiredResources: ['Python', 'Stable Diffusion Model', 'Graphics Tools'],
 potentialMentors: ['AI Artist', 'Machine Learning Professor', 'Digital Designer'],
 howToShowcase: 'Host an online exhibit or feature on a digital art platform.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-green-400 to-lime-600',
 title: 'Simulate a Neural Network that Mimics Human Vision',
 description: 'Recreate early visual processing stages inspired by the human retina and cortex.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Brings neuroscience and computer vision together to model biological intelligence.',
 gettingStarted: [
   'Study how convolutional networks relate to human vision.',
   'Build layered models replicating edge and color detection.',
   'Compare biological and artificial outputs.',
   'Write an analysis report on your results.',
   'Visualize filters to show neural activation maps.'
 ],
 requiredResources: ['Deep Learning Libraries', 'Computational Notebook', 'Visual Dataset'],
 potentialMentors: ['Cognitive Neuroscientist', 'Computer Vision Expert', 'ML Researcher'],
 howToShowcase: 'Publish a portfolio site demonstrating your model\’s architecture and visuals.'
},
{
 icon: PantryIcon,
 iconBg: 'bg-gradient-to-br from-rose-400 to-red-700',
 title: 'Create a Thought-Controlled Drone Prototype',
 description: 'Use EEG signals to send simple directional commands to a small drone.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Explores real-world BCI applications in robotics and human-machine integration.',
 gettingStarted: [
   'Use a low-cost EEG device like Muse or OpenBCI.',
   'Link EEG signal patterns to movement commands.',
   'Integrate with a drone SDK for flight control.',
   'Conduct tests for signal consistency and latency.',
   'Document technical results in a demo video.'
 ],
 requiredResources: ['Drone', 'EEG Device', 'Python or C++ Libraries'],
 potentialMentors: ['Robotics Engineer', 'BCI Developer', 'Neural Systems Researcher'],
 howToShowcase: 'Film a live demonstration or present it at a robotics showcase.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-600',
 title: 'Develop a 3D Neural Pathway Visualizer',
 description: 'Create a digital 3D map of human neural pathways using real MRI data.',
 difficulty: 'Advanced',
 category: 'Design',
 time: 'High',
 whyItMatters: 'Turns complex brain data into visually engaging educational tools.',
 gettingStarted: [
   'Learn basics of MRI data processing and diffusion tensor imaging (DTI).',
   'Use Blender or Unity for 3D visualization.',
   'Color-code neural tracts by function or location.',
   'Add interactive layers to show pathway details.',
   'Publish the model for educational use.'
 ],
 requiredResources: ['MRI Dataset', '3D Modeling Software', 'Neuroscience Texts'],
 potentialMentors: ['Neuroimaging Specialist', '3D Designer', 'Medical Visualization Expert'],
 howToShowcase: 'Feature in a science exhibition or educational app demo.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-indigo-400 to-blue-700',
 title: 'Build an AI That Predicts Neuronal Firing Patterns',
 description: 'Train a neural network to predict neuron spiking based on previous activity data.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Connects computational neuroscience with predictive AI modeling for deeper biological insights.',
 gettingStarted: [
   'Study neuroscience spike train datasets and encoding models.',
   'Preprocess data for machine learning input.',
   'Use RNNs or LSTMs to model neuron firing behavior.',
   'Evaluate performance using accuracy metrics.',
   'Interpret model behavior in biological context.'
 ],
 requiredResources: ['Neural Spike Data', 'Python ML Stack', 'Computational Notebook'],
 potentialMentors: ['Neural Network Researcher', 'Data Scientist', 'Neuroscience Professor'],
 howToShowcase: 'Write a mini research paper or interactive web visualization.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-rose-400 to-orange-500',
 title: 'Create a 3D-Printed, Customizable Pill Case for the Visually Impaired',
 description: 'Design and 3D print a pill organizer that uses tactile cues like braille and distinct shapes to help visually impaired users manage medication.',
 difficulty: 'Intermediate',
 category: 'Design',
 time: 'Medium',
 whyItMatters: 'Promotes accessibility and empathy-driven design through practical innovation.',
 gettingStarted: [
   'Research accessibility design standards and tactile user interfaces.',
   'Sketch several pill case layouts with unique textures or braille labels.',
   'Model your design using Tinkercad or Fusion 360.',
   'Print prototypes on a 3D printer and refine based on feedback.',
   'Test with users or simulate use to improve functionality.'
 ],
 requiredResources: ['3D Printer', 'PLA Filament', 'Tinkercad or Fusion 360', 'Measuring Tools'],
 potentialMentors: ['Industrial Designer', 'Accessibility Specialist', 'Occupational Therapist'],
 howToShowcase: 'Display the prototype at a school\’s STEM fair or upload your design to Thingiverse for others to download.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-600',
 title: 'Create an At-Home Ergonomics Assessment Tool using Computer Vision',
 description: 'Develop a Python program that analyzes posture through a webcam and gives real-time ergonomic feedback.',
 difficulty: 'Intermediate',
 category: 'STEM',
 time: 'Medium',
 whyItMatters: 'Applies computer vision to everyday health challenges, bridging tech and wellness.',
 gettingStarted: [
   'Learn OpenCV basics and posture detection methods.',
   'Capture webcam input and identify body keypoints using Mediapipe or OpenPose.',
   'Write logic to detect slouching or poor posture positions.',
   'Add real-time feedback like audio or text alerts.',
   'Test and fine-tune detection accuracy with multiple users.'
 ],
 requiredResources: ['Python', 'OpenCV Library', 'Webcam', 'Computer with IDE'],
 potentialMentors: ['Computer Vision Engineer', 'Physical Therapist', 'Human Factors Researcher'],
 howToShowcase: 'Demo the software live at a coding showcase or create a video presentation of it in action.'
},
{
 icon: PantryIcon,
 iconBg: 'bg-gradient-to-br from-lime-400 to-green-600',
 title: 'Build a Symptom Mapper for Local Health Trends',
 description: 'Build a web app where users can anonymously report mild symptoms to map potential local health trends.',
 difficulty: 'Advanced',
 category: 'Social Good',
 time: 'High',
 whyItMatters: 'Encourages data-driven health awareness while protecting community privacy.',
 gettingStarted: [
   'Design the user interface for anonymous symptom reporting.',
   'Develop a backend using Python Flask or Node.js to store data securely.',
   'Integrate a mapping API like Leaflet.js to visualize reports.',
   'Add filters for symptoms, time, and region.',
   'Emphasize transparency that it\’s not for diagnosis but awareness.'
 ],
 requiredResources: ['HTML/CSS/JS', 'Leaflet.js API', 'Python or Node.js', 'Database like SQLite'],
 potentialMentors: ['Public Health Researcher', 'Data Scientist', 'Web Developer'],
 howToShowcase: 'Launch the app within your community or present a data visualization report at a science fair.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-violet-400 to-purple-600',
 title: 'Design an App called “ARchitect”: Augmented Reality Room Planner',
 description: 'Develop an AR app that lets users visualize furniture or room layouts by placing virtual objects in real-world spaces.',
 difficulty: 'Advanced',
 category: 'Design',
 time: 'High',
 whyItMatters: 'Blends AR technology and design to transform how people plan and decorate spaces.',
 gettingStarted: [
   'Explore AR tools like Unity with Vuforia or Apple\’s ARKit.',
   'Model simple 3D furniture shapes and apply scale adjustments.',
   'Create an app interface for placing and moving AR objects.',
   'Test AR tracking stability and optimize for lighting variations.',
   'Collect feedback and iterate on design usability.'
 ],
 requiredResources: ['Unity or Unreal Engine', 'Vuforia or ARKit SDK', 'Mobile Device for Testing'],
 potentialMentors: ['AR Developer', 'Interior Designer', 'UX/UI Specialist'],
 howToShowcase: 'Host an interactive demo where users can redesign a classroom or living space in AR.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-sky-400 to-cyan-600',
 title: 'Design a AI-Powered “Green Space” Identifier',
 description: 'Use AI image recognition to analyze satellite images and calculate the percentage of green areas in different neighborhoods.',
 difficulty: 'Intermediate',
 category: 'STEM',
 time: 'Medium',
 whyItMatters: 'Applies AI to urban planning, highlighting environmental equity and sustainability.',
 gettingStarted: [
   'Learn to use Google Vision API or TensorFlow Hub models for image classification.',
   'Gather satellite images using Google Maps API.',
   'Write a Python script to detect and categorize green areas.',
   'Visualize the data with graphs or maps.',
   'Compare results between different communities or zip codes.'
 ],
 requiredResources: ['Python', 'TensorFlow Hub or Google Vision API', 'Satellite Image Dataset', 'Mapping Tools'],
 potentialMentors: ['Urban Planner', 'Environmental Scientist', 'Machine Learning Engineer'],
 howToShowcase: 'Publish your findings as an interactive data map or poster presentation at an environmental expo.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500',
 title: 'Build a Disaster-Resilient Structure Simulator',
 description: 'Simulate the stability of various building shapes under environmental stress using physics engines.',
 difficulty: 'Beginner',
 category: 'STEM',
 time: 'Low',
 whyItMatters: 'Makes engineering concepts hands-on and visual while promoting disaster awareness.',
 gettingStarted: [
   'Install and explore simulation tools like Algodoo or Unity Physics.',
   'Create simple 2D or 3D shapes to represent structures.',
   'Apply simulated forces like wind or earthquakes to test durability.',
   'Record and analyze results to identify the most stable designs.',
   'Present how structure design affects safety during disasters.'
 ],
 requiredResources: ['Algodoo or Unity', 'Computer with Physics Simulation Software', 'Design Notebook'],
 potentialMentors: ['Civil Engineer', 'Physics Teacher', 'Architecture Professor'],
 howToShowcase: 'Display structure simulations at a science exhibition or record a short explainer video.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-pink-400 to-red-600',
 title: 'Create Generative AI for Floor Plan Layouts',
 description: 'Use generative AI to create unique architectural floor plans from descriptive text prompts.',
 difficulty: 'Intermediate',
 category: 'Design',
 time: 'Medium',
 whyItMatters: 'Explores the creative frontier of AI-assisted architecture and design.',
 gettingStarted: [
   'Experiment with AI tools like Runway ML or Google Colab notebooks.',
   'Feed prompt descriptions such as “two-bedroom modern apartment with open kitchen.”',
   'Generate and compare multiple outputs for variation.',
   'Refine prompts for accuracy and creative diversity.',
   'Compile your results into a mini design portfolio.'
 ],
 requiredResources: ['Runway ML', 'Google Colab', 'Stable Diffusion Model or Similar', 'Prompt Guide Notes'],
 potentialMentors: ['AI Designer', 'Architect', 'Data Visualization Expert'],
 howToShowcase: 'Curate an online gallery of AI-generated floor plans with captions describing each prompt.'
},
{
 icon: PantryIcon,
 iconBg: 'bg-gradient-to-br from-emerald-500 to-green-700',
 title: 'Design a Blockchain-Based Supply Chain Tracker for Building Materials',
 description: 'Build a conceptual blockchain tracker that records each step of a building material’s lifecycle for transparency.',
 difficulty: 'Intermediate',
 category: 'Business',
 time: 'Medium',
 whyItMatters: 'Demonstrates blockchain\’s power for sustainable sourcing and ethical construction.',
 gettingStarted: [
   'Research how blockchain ensures data immutability and traceability.',
   'Simulate blockchain records using Python and text file logging.',
   'Create a visual flowchart of the supply chain journey.',
   'Add unique digital “blocks” for each supply stage.',
   'Explain how this tech can increase trust and sustainability.'
 ],
 requiredResources: ['Python', 'Basic Blockchain Script', 'Spreadsheet for Record Tracking', 'Visualization Tools'],
 potentialMentors: ['Blockchain Developer', 'Sustainability Expert', 'Construction Manager'],
 howToShowcase: 'Present the blockchain demo and supply chain model at a business innovation showcase.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-yellow-400 to-lime-500',
 title: 'Design a Procedurally Generated Historical City',
 description: 'Write a program that algorithmically creates random but historically inspired city layouts.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Blends computer science, history, and design into one creative, rule-based simulation.',
 gettingStarted: [
   'Research city structures from your chosen era (e.g., Medieval Europe, Ancient Rome).',
   'Define generation rules for roads, castles, markets, and housing areas.',
   'Code procedural logic using Python or JavaScript.',
   'Visualize results as interactive maps or grid systems.',
   'Analyze how design patterns evolved across historical eras.'
 ],
 requiredResources: ['Python or JavaScript', 'Algorithm Design Knowledge', 'Mapping Libraries', 'Historical References'],
 potentialMentors: ['Game Developer', 'Historian', 'Algorithm Engineer'],
 howToShowcase: 'Display generated maps as a digital art gallery or an interactive online simulation.'
},
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-rose-400 to-red-600',
    title: 'Develop a Surgical Robotics Simulation Platform',
    description: 'Create a virtual environment to simulate robotic-assisted surgical procedures for training and research.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Bridges robotics and medicine to improve surgeon training and patient safety.',
    gettingStarted: [
      'Research existing robotic surgery systems like da Vinci.',
      'Use Unity or Unreal Engine to build the simulation environment.',
      'Integrate haptic feedback hardware for realism.',
      'Simulate tissue behavior and instrument response.',
      'Test and refine with medical students or professionals.'
    ],
    requiredResources: ['VR/AR Equipment', 'Simulation Software', 'Medical Data Access'],
    potentialMentors: ['Biomedical Engineer', 'Surgeon', 'Robotics Researcher'],
    howToShowcase: 'Demo the simulation to a hospital training department or at a science fair.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-sky-400 to-indigo-600',
    title: 'Build a Predictive Maintenance System for Medical Imaging Devices',
    description: 'Develop an AI system that predicts when MRI or CT machines will require maintenance, reducing downtime.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Ensures critical medical devices remain reliable and safe for patient use.',
    gettingStarted: [
      'Gather anonymized device sensor or performance data.',
      'Train a machine learning model to predict failure patterns.',
      'Build a dashboard for real-time monitoring.',
      'Test predictive accuracy using historical maintenance records.'
    ],
    requiredResources: ['Python', 'Machine Learning Libraries', 'Data Samples'],
    potentialMentors: ['Data Scientist', 'Biomedical Technician', 'Hospital Engineer'],
    howToShowcase: 'Present predictive analytics visualizations in a research poster or web app.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-emerald-400 to-green-600',
    title: 'Create an AI-Powered Drug Interaction Checker',
    description: 'Develop an AI system that analyzes potential interactions between prescribed drugs using medical databases.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Helps prevent dangerous medication combinations and supports doctors\’ decision-making.',
    gettingStarted: [
      'Collect open drug interaction datasets (like DrugBank).',
      'Use NLP to parse drug labels and side effects.',
      'Train an AI model to identify risky combinations.',
      'Design a user-friendly web interface for queries.'
    ],
    requiredResources: ['Public Medical Datasets', 'Python', 'NLP Libraries'],
    potentialMentors: ['Pharmacologist', 'AI Researcher', 'Clinical Data Analyst'],
    howToShowcase: 'Publish a demo on GitHub or as a web-based tool for healthcare students.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-600',
    title: 'Design Smart Hospital Room Automation',
    description: 'Build an IoT system that adjusts lighting, temperature, and nurse alerts automatically based on patient needs.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Improves hospital efficiency and patient comfort through intelligent automation.',
    gettingStarted: [
      'Learn about IoT sensors and Raspberry Pi systems.',
      'Prototype with temperature and motion sensors.',
      'Develop automation scripts to control lights and alerts.',
      'Test system responses to simulated patient conditions.'
    ],
    requiredResources: ['IoT Hardware', 'Sensors', 'Microcontrollers'],
    potentialMentors: ['IoT Developer', 'Hospital Facilities Engineer', 'UX Designer'],
    howToShowcase: 'Present a live demo using a model room setup.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-600',
    title: 'Develop a 3D Bioprinting Tissue Model Project',
    description: 'Create 3D-printed biological tissue models using bioink simulations or accessible 3D printers.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Advances regenerative medicine and tissue engineering research.',
    gettingStarted: [
      'Study 3D bioprinting fundamentals and materials science.',
      'Design a tissue scaffold using CAD software.',
      'Use a modified 3D printer to print cell-safe materials.',
      'Collaborate with biology labs for feedback and safety checks.'
    ],
    requiredResources: ['3D Printer', 'Bioink Materials', 'CAD Software'],
    potentialMentors: ['Biomedical Engineer', 'Tissue Engineer', 'Biotech Researcher'],
    howToShowcase: 'Display tissue models and explain their potential uses in a STEM fair or research symposium.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-indigo-400 to-violet-600',
    title: 'Build a Neural Interface for Prosthetic Control',
    description: 'Develop a brain-computer interface that translates neural or muscle signals to control prosthetic limbs.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Empowers people with limb loss through more intuitive, responsive prosthetic control.',
    gettingStarted: [
      'Research EEG or EMG signal processing.',
      'Use Arduino or Raspberry Pi to read neural data.',
      'Train an AI model to map signals to movement patterns.',
      'Prototype a simple robotic limb to demonstrate control.'
    ],
    requiredResources: ['EEG/EMG Sensors', 'Microcontroller', 'Signal Processing Software'],
    potentialMentors: ['Neuroscientist', 'Robotics Engineer', 'Biomedical Researcher'],
    howToShowcase: 'Record a demonstration of the prosthetic responding to neural commands.'
  },
  {
    icon: PantryIcon,
    iconBg: 'bg-gradient-to-br from-pink-400 to-rose-600',
    title: 'Create a Medical Supply Drone Delivery Network',
    description: 'Design a drone system that delivers emergency medical supplies to remote or disaster-affected areas.',
    difficulty: 'Intermediate',
    category: 'Social Good',
    time: 'High',
    whyItMatters: 'Improves access to medicine and reduces emergency response times in critical situations.',
    gettingStarted: [
      'Research drone flight laws and payload limits.',
      'Design delivery routes and base stations.',
      'Use GPS modules to automate navigation.',
      'Test with non-medical payloads for safety.'
    ],
    requiredResources: ['Drone Kit', 'GPS Module', 'Mapping Software'],
    potentialMentors: ['Aerospace Engineer', 'Public Health Researcher', 'NGO Logistics Expert'],
    howToShowcase: 'Demonstrate prototype flights and delivery accuracy tests.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-teal-400 to-cyan-600',
    title: 'Develop AI-Based Radiology Image Analysis',
    description: 'Train an AI to detect patterns in X-rays, MRIs, or CT scans to assist radiologists in diagnosis.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Speeds up medical diagnosis and reduces human error in image interpretation.',
    gettingStarted: [
      'Access open-source radiology image datasets.',
      'Preprocess images for feature extraction.',
      'Train convolutional neural networks to identify abnormalities.',
      'Compare AI results with radiologist interpretations.'
    ],
    requiredResources: ['Python', 'GPU Access', 'Medical Image Datasets'],
    potentialMentors: ['Radiologist', 'AI Researcher', 'Medical Imaging Scientist'],
    howToShowcase: 'Create a visual dashboard comparing human vs AI diagnostic accuracy.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-lime-400 to-green-600',
    title: 'Build a Surgical Procedure Training Simulator',
    description: 'Create a simulation platform where students can practice surgical techniques safely and virtually.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Expands access to surgical education and minimizes real-world risk.',
    gettingStarted: [
      'Model surgical instruments in 3D.',
      'Simulate tissue resistance using physics engines.',
      'Incorporate feedback or scoring for technique accuracy.',
      'Collaborate with medical educators for realism.'
    ],
    requiredResources: ['Simulation Software', '3D Models', 'VR Equipment'],
    potentialMentors: ['Medical Educator', 'Simulation Designer', 'Biomedical Engineer'],
    howToShowcase: 'Host a live simulation event for students or teachers to try.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-amber-400 to-orange-600',
    title: 'Create a Smart Pill Compliance Monitoring System',
    description: 'Develop a sensor-based or AI-enabled system to track whether patients have taken their prescribed pills.',
    difficulty: 'Intermediate',
    category: 'STEM',
    time: 'Medium',
    whyItMatters: 'Addresses the global issue of medication non-adherence, improving treatment outcomes.',
    gettingStarted: [
      'Use RFID or weight sensors to track pill usage.',
      'Integrate data with a mobile app for reminders.',
      'Add cloud storage for remote monitoring.',
      'Test prototypes with dummy pills safely.'
    ],
    requiredResources: ['Sensors', 'Mobile App Development Tools', 'Microcontroller'],
    potentialMentors: ['Pharmacist', 'IoT Developer', 'Healthcare Data Specialist'],
    howToShowcase: 'Display live data on a dashboard showing real-time adherence tracking.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-slate-400 to-gray-600',
    title: 'Design Automated Construction Site Safety Monitoring',
    description: 'Build an AI or sensor system to detect unsafe conditions and alert workers in real time.',
    difficulty: 'Intermediate',
    category: 'Business',
    time: 'Medium',
    whyItMatters: 'Improves workplace safety and reduces accidents in high-risk environments.',
    gettingStarted: [
      'Install cameras or motion sensors on a model site.',
      'Train a computer vision model to detect unsafe behavior.',
      'Develop a notification system to alert supervisors.',
      'Simulate emergency response scenarios for testing.'
    ],
    requiredResources: ['Cameras', 'Sensors', 'AI Software'],
    potentialMentors: ['Civil Engineer', 'Safety Inspector', 'AI Developer'],
    howToShowcase: 'Show a working demo at a school\’s tech showcase or STEM fair.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-orange-400 to-red-600',
    title: 'Build a 3D-Printed Affordable Housing Prototype',
    description: 'Use 3D printing to design and build low-cost, sustainable housing models for developing areas.',
    difficulty: 'Advanced',
    category: 'Social Good',
    time: 'High',
    whyItMatters: 'Tackles housing shortages and promotes sustainable architecture innovation.',
    gettingStarted: [
      'Research 3D printing construction techniques.',
      'Design a scalable home model using CAD software.',
      'Experiment with eco-friendly printing materials.',
      'Create a miniature prototype for testing and display.'
    ],
    requiredResources: ['3D Printer', 'CAD Software', 'Sustainable Materials'],
    potentialMentors: ['Architect', 'Civil Engineer', 'Urban Planner'],
    howToShowcase: 'Display a scaled prototype at a sustainability or innovation fair.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-700',
    title: 'Develop Smart City Infrastructure Digital Twin',
    description: 'Create a digital replica of city systems (traffic, water, energy) to simulate improvements and test new tech.',
    difficulty: 'Advanced',
    category: 'Business',
    time: 'High',
    whyItMatters: 'Enhances city planning and sustainability through data-driven simulation.',
    gettingStarted: [
      'Gather open-source city infrastructure data.',
      'Model key systems in a simulation platform.',
      'Use AI to predict the effects of proposed improvements.',
      'Visualize data with interactive dashboards.'
    ],
    requiredResources: ['Simulation Software', 'Data Visualization Tools', 'GIS Data'],
    potentialMentors: ['Urban Data Scientist', 'Civil Engineer', 'City Planner'],
    howToShowcase: 'Host a presentation comparing real vs simulated improvements in a city system.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-green-400 to-teal-600',
    title: 'Create AI-Optimized Building Energy Management',
    description: 'Develop an AI system to analyze and optimize energy usage in buildings automatically.',
    difficulty: 'Intermediate',
    category: 'Business',
    time: 'Medium',
    whyItMatters: 'Supports sustainability and reduces carbon emissions through smarter energy consumption.',
    gettingStarted: [
      'Collect building energy usage data.',
      'Build an AI model to detect inefficiencies.',
      'Develop a dashboard showing optimization results.',
      'Simulate potential cost and energy savings.'
    ],
    requiredResources: ['Python', 'Energy Data', 'Visualization Software'],
    potentialMentors: ['Energy Analyst', 'Sustainability Engineer', 'Data Scientist'],
    howToShowcase: 'Present before-and-after visualizations showing AI-optimized efficiency gains.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-amber-400 to-red-500',
    title: 'Design Earthquake-Resistant Structure Monitoring',
    description: 'Develop a sensor-based monitoring system to track stress and vibration levels in buildings during earthquakes.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Helps engineers detect structural weaknesses early, saving lives and infrastructure.',
    gettingStarted: [
      'Research seismic sensor technologies and vibration data analysis.',
      'Use Arduino or Raspberry Pi to collect real-time building stress data.',
      'Develop an alert system that triggers during critical vibration thresholds.',
      'Simulate earthquake conditions using vibration platforms or models.'
    ],
    requiredResources: ['Sensors', 'Microcontroller', 'Simulation Software', 'Structural Models'],
    potentialMentors: ['Civil Engineer', 'Seismologist', 'IoT Developer'],
    howToShowcase: 'Present live vibration data readings in a model structure during a STEM fair.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-blue-400 to-teal-600',
    title: 'Build Automated Building Code Compliance Checker',
    description: 'Create an AI tool that reviews architectural plans and detects violations of local building codes automatically.',
    difficulty: 'Advanced',
    category: 'Business',
    time: 'High',
    whyItMatters: 'Speeds up construction approval processes and ensures public safety in urban projects.',
    gettingStarted: [
      'Collect publicly available building code datasets or regulations.',
      'Use NLP to analyze and interpret rule texts.',
      'Train an AI model to match building plans against compliance rules.',
      'Build a web interface for architects to upload and check plans.'
    ],
    requiredResources: ['Python', 'AI Libraries', 'Building Code Datasets', 'Web Framework'],
    potentialMentors: ['Architect', 'Urban Planner', 'AI Developer'],
    howToShowcase: 'Demonstrate the app detecting errors in a sample building blueprint.'
  },
  {
    icon: AiBrainIcon,
    iconBg: 'bg-gradient-to-br from-emerald-400 to-green-600',
    title: 'Develop Construction Waste Recycling AI System',
    description: 'Build an AI-powered platform to identify recyclable materials in construction debris using image recognition.',
    difficulty: 'Intermediate',
    category: 'Social Good',
    time: 'Medium',
    whyItMatters: 'Reduces landfill waste and supports sustainability in the construction industry.',
    gettingStarted: [
      'Collect images of various construction materials and debris.',
      'Label datasets for AI model training.',
      'Use computer vision to classify materials as recyclable or not.',
      'Develop a simple dashboard that tracks recycling efficiency.'
    ],
    requiredResources: ['Image Dataset', 'Python', 'AI Framework', 'Camera'],
    potentialMentors: ['Environmental Engineer', 'AI Researcher', 'Sustainability Expert'],
    howToShowcase: 'Display a demo where the AI identifies recyclable materials in real time.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-sky-400 to-indigo-500',
    title: 'Create Smart Concrete with Embedded Sensors',
    description: 'Develop a prototype of concrete embedded with micro-sensors that detect cracks, temperature, and stress changes.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Improves long-term infrastructure safety by enabling real-time structural health monitoring.',
    gettingStarted: [
      'Study sensor types suitable for concrete embedding.',
      'Integrate sensors into a small-scale concrete sample.',
      'Use microcontrollers to collect and analyze live data.',
      'Visualize readings on a custom dashboard or app.'
    ],
    requiredResources: ['Microcontroller', 'Sensors', 'Concrete Mix Materials', 'Data Logger'],
    potentialMentors: ['Materials Scientist', 'Civil Engineer', 'IoT Specialist'],
    howToShowcase: 'Display real-time data of your concrete prototype under different loads or temperatures.'
  },
  {
    icon: DesignIcon,
    iconBg: 'bg-gradient-to-br from-fuchsia-400 to-purple-600',
    title: 'Design Self-Healing Building Materials',
    description: 'Experiment with materials that can autonomously repair cracks or damage through chemical or biological reactions.',
    difficulty: 'Advanced',
    category: 'STEM',
    time: 'High',
    whyItMatters: 'Revolutionizes construction by creating longer-lasting, lower-maintenance structures.',
    gettingStarted: [
      'Research self-healing mechanisms like bacteria-based or polymer-based materials.',
      'Prepare small samples for controlled testing.',
      'Simulate cracks and observe the repair process.',
      'Document performance under various environmental conditions.'
    ],
    requiredResources: ['Lab Materials', 'Microscope', 'Chemical Supplies', 'Testing Chamber'],
    potentialMentors: ['Materials Engineer', 'Chemist', 'Structural Researcher'],
    howToShowcase: 'Film the healing process in real time and present the footage at a science showcase.'
  },
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-orange-400 to-rose-600',
  title: 'Build Robotic Construction Assembly System',
  description: 'Design a robotic arm or drone that can assist with automated building assembly tasks like stacking blocks or welding parts.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Automating construction improves safety, speed, and precision in large-scale projects.',
  gettingStarted: [
    'Research current robotics in construction and identify automation gaps.',
    'Design simple robotic movements using Arduino or Raspberry Pi.',
    'Build a prototype to assemble small structural models.',
    'Program sensors for object detection and task accuracy.'
  ],
  requiredResources: ['Microcontroller', 'Motors', 'Sensors', '3D Printer', 'Building Materials'],
  potentialMentors: ['Mechanical Engineer', 'Robotics Professor', 'Construction Technologist'],
  howToShowcase: 'Demo your robot assembling a mini structure or scaffold during a tech exhibition.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-cyan-400 to-indigo-600',
  title: 'Develop Quantum Computing Algorithm for Drug Discovery',
  description: 'Create and test a basic quantum algorithm that simulates molecular interactions for potential new drugs.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Quantum algorithms could revolutionize how we discover medicines by analyzing molecules exponentially faster.',
  gettingStarted: [
    'Learn the fundamentals of quantum gates and circuits using Qiskit or Cirq.',
    'Study molecular modeling techniques in chemistry.',
    'Build a simulation that compares molecular energy levels.',
    'Run your quantum script on IBM Quantum or Google Quantum Simulator.'
  ],
  requiredResources: ['Quantum SDK', 'Python', 'Chemistry Texts', 'Access to Quantum Simulator'],
  potentialMentors: ['Quantum Computing Researcher', 'Pharmaceutical Chemist', 'Computational Biologist'],
  howToShowcase: 'Present energy optimization visualizations or quantum workflow at a science fair or hackathon.'
},
{
  icon: DesignIcon,
  iconBg: 'bg-gradient-to-br from-green-400 to-lime-600',
  title: 'Create Blockchain-Based Medical Records System',
  description: 'Design a decentralized, secure medical data management system that allows patients and hospitals to share records transparently.',
  difficulty: 'Advanced',
  category: 'Social Good',
  time: 'High',
  whyItMatters: 'Protects privacy, prevents tampering, and gives patients control of their own medical history.',
  gettingStarted: [
    'Research blockchain architecture and smart contracts.',
    'Map how medical records are currently stored and accessed.',
    'Simulate a blockchain ledger using Python or Solidity.',
    'Develop a user interface for uploading and verifying records.'
  ],
  requiredResources: ['Python or Solidity', 'Blockchain Framework', 'Mock Patient Data', 'Web Interface Tools'],
  potentialMentors: ['Blockchain Developer', 'Healthcare IT Specialist', 'Data Security Analyst'],
  howToShowcase: 'Simulate secure record transfers between mock hospitals using your blockchain demo.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-violet-400 to-pink-600',
  title: 'Build AI-Powered Clinical Trial Matching Platform',
  description: 'Develop a machine learning model that matches patients to relevant clinical trials based on their health profiles.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Improves medical research efficiency and helps patients access cutting-edge treatments.',
  gettingStarted: [
    'Collect anonymized sample data of clinical trial requirements.',
    'Preprocess and analyze datasets to identify key matching factors.',
    'Train an AI model for patient-trial compatibility scoring.',
    'Design an interactive dashboard for users to view trial matches.'
  ],
  requiredResources: ['Python', 'ML Framework', 'Health Data Samples', 'Web Dashboard Tools'],
  potentialMentors: ['Data Scientist', 'Clinical Researcher', 'AI Engineer'],
  howToShowcase: 'Run mock patient profiles through your system and visualize their best clinical trial matches.'
},
{
  icon: AiBrainIcon,
  iconBg: 'bg-gradient-to-br from-red-400 to-yellow-500',
  title: 'Develop Surgical Computer Vision Assistance',
  description: 'Use computer vision models to detect surgical instruments and guide operations in real-time simulations.',
  difficulty: 'Advanced',
  category: 'STEM',
  time: 'High',
  whyItMatters: 'Enhances precision and safety in surgeries by augmenting human skill with AI-driven perception.',
  gettingStarted: [
    'Collect open-source surgical image datasets.',
    'Train a computer vision model using TensorFlow or PyTorch.',
    'Simulate detection accuracy in surgical video feeds.',
    'Build an interface that displays identified tools and annotations.'
  ],
  requiredResources: ['Python', 'Deep Learning Framework', 'Image Datasets', 'High-Performance GPU'],
  potentialMentors: ['Biomedical Engineer', 'AI Researcher', 'Surgical Simulation Specialist'],
  howToShowcase: 'Display real-time recognition results on surgical footage at a science showcase or tech expo.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-emerald-400 to-cyan-600',
 title: 'Create Personalized Medicine Recommendation Engine',
 description: 'Develop an AI engine that suggests individualized drug treatments based on genetic and health data.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Personalized medicine improves patient outcomes and reduces side effects by tailoring care to each individual.',
 gettingStarted: [
   'Study pharmacogenomics and machine learning fundamentals.',
   'Collect anonymized sample datasets from public medical sources.',
   'Train a recommendation model using genetic and drug response data.',
   'Build a user interface to visualize treatment suggestions.',
   'Validate accuracy with simulated or synthetic cases.'
 ],
 requiredResources: ['Python', 'Medical Datasets', 'Machine Learning Libraries'],
 potentialMentors: ['Biomedical Data Scientist', 'Pharmacologist', 'AI Researcher'],
 howToShowcase: 'Publish a demo and report showing prediction accuracy and personalized treatment results.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-rose-400 to-orange-500',
 title: 'Design Smart Operating Room Integration System',
 description: 'Develop a system that links surgical tools, sensors, and imaging data for real-time coordination in the OR.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Smart integration reduces surgical errors and enhances precision during complex procedures.',
 gettingStarted: [
   'Research how modern surgical technologies communicate.',
   'Design a dashboard for visualizing live surgical metrics.',
   'Integrate imaging and sensor APIs for real-time feedback.',
   'Prototype workflow automation for surgical teams.',
   'Simulate OR conditions to test system reliability.'
 ],
 requiredResources: ['Sensor APIs', 'Cloud Database', 'Prototyping Tools'],
 potentialMentors: ['Biomedical Engineer', 'Surgeon', 'Software Architect'],
 howToShowcase: 'Present a prototype dashboard simulating live surgical environment integration.'
},
{
 icon: PantryIcon,
 iconBg: 'bg-gradient-to-br from-indigo-400 to-violet-600',
 title: 'Build Remote Patient Monitoring Platform',
 description: 'Create an app or IoT system that tracks patient vitals and alerts clinicians to abnormal readings.',
 difficulty: 'Intermediate',
 category: 'STEM',
 time: 'Medium',
 whyItMatters: 'Remote monitoring helps doctors detect health problems early and improves chronic care management.',
 gettingStarted: [
   'Learn about IoT sensors and wireless data transmission.',
   'Design a database for real-time health data collection.',
   'Implement dashboards for doctors and patient alerts.',
   'Test device connectivity and alert accuracy.',
   'Ensure data privacy and encryption compliance.'
 ],
 requiredResources: ['IoT Devices', 'Cloud Hosting', 'Data Visualization Tools'],
 potentialMentors: ['Health Tech Engineer', 'Nurse Practitioner', 'IoT Developer'],
 howToShowcase: 'Demonstrate patient health tracking and alert triggers using simulated vitals.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-teal-400 to-green-500',
 title: 'Develop Medical Diagnosis AI Co-Pilot',
 description: 'Train an AI model to assist doctors by analyzing symptoms, imaging, and lab data to suggest diagnoses.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'AI co-pilots help reduce diagnostic errors and increase efficiency in healthcare systems.',
 gettingStarted: [
   'Gather open-source medical imaging and symptom datasets.',
   'Train a neural network for pattern recognition and prediction.',
   'Design an interface that displays diagnostic probabilities.',
   'Integrate NLP to interpret doctor notes or patient input.',
   'Validate AI accuracy with test datasets and case studies.'
 ],
 requiredResources: ['Medical Datasets', 'AI Frameworks', 'GPU Access'],
 potentialMentors: ['Radiologist', 'AI Developer', 'Data Scientist'],
 howToShowcase: 'Present an interactive model that walks through simulated patient diagnosis workflows.'
},
{
 icon: PodcastIcon,
 iconBg: 'bg-gradient-to-br from-sky-400 to-blue-600',
 title: 'Create Rehabilitation Progress Tracking System',
 description: 'Design a mobile or web platform that tracks recovery data and provides feedback for physical therapy patients.',
 difficulty: 'Intermediate',
 category: 'Health Tech',
 time: 'Medium',
 whyItMatters: 'Tracking rehabilitation progress motivates patients and helps therapists personalize treatment.',
 gettingStarted: [
   'Interview therapists to understand rehab data needs.',
   'Design a user-friendly app for inputting progress data.',
   'Incorporate charts, reminders, and milestone tracking.',
   'Develop analytics to detect improvement patterns.',
   'Test usability with volunteers or sample users.'
 ],
 requiredResources: ['App Builder', 'Database Tools', 'Analytics Framework'],
 potentialMentors: ['Physical Therapist', 'UX Designer', 'Health Informatics Expert'],
 howToShowcase: 'Demo app showing patient progress graphs and feedback algorithms.'
},
{
 icon: PantryIcon,
 iconBg: 'bg-gradient-to-br from-green-400 to-teal-600',
 title: 'Build Telemedicine Infrastructure for Rural Areas',
 description: 'Develop a system that connects patients in remote locations with doctors via secure video, data, and diagnostic tools.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Expands healthcare access to underserved populations and reduces travel and treatment delays.',
 gettingStarted: [
   'Research telemedicine platforms and rural healthcare needs.',
   'Plan network architecture for low-bandwidth areas.',
   'Integrate secure video and patient data management tools.',
   'Test connectivity and reliability in simulated rural settings.',
   'Ensure compliance with health privacy regulations.'
 ],
 requiredResources: ['Video Conferencing API', 'Cloud Hosting', 'Networking Tools'],
 potentialMentors: ['Healthcare IT Specialist', 'Network Engineer', 'Doctor'],
 howToShowcase: 'Demonstrate a working telemedicine prototype with simulated patient-doctor interactions.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
 title: 'Design Parametric Architecture Generation Software',
 description: 'Create software that generates flexible building designs based on parametric inputs like space, function, and environmental constraints.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Speeds up architectural design and allows exploration of innovative structures using computational methods.',
 gettingStarted: [
   'Learn parametric design principles and software tools (e.g., Grasshopper, Rhino).',
   'Define input parameters for building designs.',
   'Develop algorithms to generate layout variations.',
   'Visualize results in 3D models.',
   'Test and refine designs with simulated constraints.'
 ],
 requiredResources: ['Parametric Design Software', '3D Modeling Tools', 'Computer'],
 potentialMentors: ['Architect', 'Computational Designer', 'Software Engineer'],
 howToShowcase: 'Present generated building models and explain the parametric inputs and outcomes.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
 title: 'Develop Building Information Modeling AI Assistant',
 description: 'Build an AI assistant that helps architects and engineers detect conflicts, optimize materials, and automate BIM processes.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Improves efficiency and accuracy in construction planning, reducing costly errors and delays.',
 gettingStarted: [
   'Learn BIM software and workflow.',
   'Collect sample project data to train AI models.',
   'Implement AI to detect design conflicts and suggest optimizations.',
   'Integrate assistant into BIM interface.',
   'Test performance on sample building projects.'
 ],
 requiredResources: ['BIM Software', 'AI Frameworks', 'Sample Building Data'],
 potentialMentors: ['Civil Engineer', 'Architect', 'AI Specialist'],
 howToShowcase: 'Demonstrate AI detecting conflicts and suggesting improvements in a sample project.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-emerald-400 to-lime-500',
 title: 'Create Sustainable Urban Planning Simulation',
 description: 'Develop a simulation that models city growth, traffic, energy, and environmental impact to optimize sustainable planning.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Helps planners and policymakers visualize the environmental and social consequences of urban development.',
 gettingStarted: [
   'Research urban planning principles and sustainability metrics.',
   'Collect data on population, traffic, energy use, and green spaces.',
   'Develop a simulation engine to model city scenarios.',
   'Visualize results with charts and interactive maps.',
   'Refine scenarios for policy or educational use.'
 ],
 requiredResources: ['Simulation Software', 'GIS Data', 'Programming Tools'],
 potentialMentors: ['Urban Planner', 'Environmental Scientist', 'Data Analyst'],
 howToShowcase: 'Present an interactive simulation showing how design choices affect city sustainability.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
 title: 'Build Smart Window Energy Harvesting System',
 description: 'Design windows that harvest solar energy while providing adaptive shading and thermal control for buildings.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Combines renewable energy capture with building comfort, reducing energy costs and environmental footprint.',
 gettingStarted: [
   'Research photovoltaic materials and smart glass technologies.',
   'Design a prototype window system integrating energy capture and shading.',
   'Build sensors and controllers for adaptive behavior.',
   'Test energy output and shading efficiency.',
   'Iterate design for optimal performance and safety.'
 ],
 requiredResources: ['Solar Cells', 'Smart Glass', 'Electronics Components'],
 potentialMentors: ['Mechanical Engineer', 'Material Scientist', 'Energy Systems Engineer'],
 howToShowcase: 'Demonstrate energy capture and shading functionality in a small-scale prototype.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-orange-400 to-red-500',
 title: 'Design Autonomous Construction Site Vehicles',
 description: 'Develop self-driving or remotely operated vehicles for construction sites to transport materials or perform repetitive tasks.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Increases safety and efficiency on construction sites by reducing human risk and automating labor-intensive tasks.',
 gettingStarted: [
   'Research autonomous vehicle sensors and navigation algorithms.',
   'Prototype simple remote-controlled or automated vehicle.',
   'Integrate sensors and obstacle detection systems.',
   'Test vehicle in small-scale simulated construction scenarios.',
   'Refine control and safety features.'
 ],
 requiredResources: ['Microcontrollers', 'Motors and Wheels', 'Sensors (LIDAR, Ultrasonic)', 'Programming Tools'],
 potentialMentors: ['Mechanical Engineer', 'Robotics Specialist', 'Construction Manager'],
 howToShowcase: 'Demonstrate vehicles performing tasks in a model construction site or simulation environment.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-teal-400 to-blue-500',
 title: 'Develop Structural Health Monitoring AI',
 description: 'Create an AI system that monitors building integrity in real-time, predicting potential structural failures before they occur.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Improves public safety and reduces maintenance costs by detecting problems early in buildings and infrastructure.',
 gettingStarted: [
   'Learn about structural engineering principles and common failure modes.',
   'Collect sensor data on stress, vibration, and strain.',
   'Build AI models to detect anomalies or predict damage.',
   'Test on sample structures or simulated data.',
   'Refine algorithms for reliability and accuracy.'
 ],
 requiredResources: ['Sensors (Strain, Vibration, Accelerometers)', 'AI Frameworks', 'Sample Structural Data'],
 potentialMentors: ['Structural Engineer', 'Civil Engineer', 'Data Scientist'],
 howToShowcase: 'Present a demo where AI detects potential issues in a small model or simulation.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
 title: 'Create Modular Building System Design Platform',
 description: 'Design a software platform that helps architects and engineers plan modular building components that can be quickly assembled on-site.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Enables faster, cost-effective, and flexible construction through modular design principles.',
 gettingStarted: [
   'Research modular building standards and prefabrication techniques.',
   'Define component types and connection rules.',
   'Develop platform to design, visualize, and test modular assemblies.',
   'Incorporate constraints like load-bearing and material limits.',
   'Test virtual assemblies for feasibility.'
 ],
 requiredResources: ['3D Modeling Software', 'Programming Tools', 'Construction Standards'],
 potentialMentors: ['Architect', 'Structural Engineer', 'Software Developer'],
 howToShowcase: 'Demonstrate modular designs with 3D models and explain assembly process.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
 title: 'Build Acoustic Optimization AI for Spaces',
 description: 'Create an AI that analyzes and optimizes the acoustics of rooms or buildings, adjusting layout or materials virtually.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Improves sound quality in public spaces, theaters, classrooms, and offices without expensive physical alterations.',
 gettingStarted: [
   'Learn basic acoustics and sound propagation principles.',
   'Collect data from different room types.',
   'Develop AI algorithms to simulate and optimize acoustic performance.',
   'Test with virtual room models.',
   'Refine recommendations for material placement and room geometry.'
 ],
 requiredResources: ['Acoustic Simulation Software', 'AI Tools', 'Room Data'],
 potentialMentors: ['Acoustical Engineer', 'Architect', 'Data Scientist'],
 howToShowcase: 'Show optimized acoustic models for different spaces and compare before/after performance.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
 title: 'Design Climate-Responsive Building Facades',
 description: 'Develop building facades that automatically adapt to environmental conditions like sunlight, temperature, and wind.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Reduces energy consumption and improves occupant comfort through smart, sustainable building design.',
 gettingStarted: [
   'Study climate-responsive architecture and adaptive materials.',
   'Design prototype facade with movable or adaptive elements.',
   'Simulate environmental impacts and facade response.',
   'Integrate sensors and control logic for automated adaptation.',
   'Refine design for energy efficiency and practicality.'
 ],
 requiredResources: ['3D Modeling Tools', 'Sensors', 'Simulation Software', 'Materials for Prototyping'],
 potentialMentors: ['Architect', 'Mechanical Engineer', 'Material Scientist'],
 howToShowcase: 'Demonstrate adaptive facade model responding to environmental changes in a simulation or small-scale prototype.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
 title: 'Develop Construction Project Management AI',
 description: 'Build an AI system that assists in scheduling, resource allocation, and risk prediction for large construction projects.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Improves efficiency, reduces delays, and optimizes budgets for complex construction projects.',
 gettingStarted: [
   'Study construction project workflows and common challenges.',
   'Collect sample project data for training AI models.',
   'Develop algorithms to predict delays and optimize resources.',
   'Integrate AI with project management software.',
   'Test performance on simulated projects.'
 ],
 requiredResources: ['Project Management Data', 'AI Frameworks', 'Construction Knowledge'],
 potentialMentors: ['Civil Engineer', 'Project Manager', 'Data Scientist'],
 howToShowcase: 'Demonstrate AI predicting project risks and optimizing schedules on a sample construction scenario.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
 title: 'Create Federated Learning for Healthcare AI',
 description: 'Develop a federated learning system that trains AI models across multiple hospitals without sharing sensitive patient data.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Enables collaborative AI development in healthcare while preserving patient privacy.',
 gettingStarted: [
   'Learn federated learning concepts and privacy-preserving techniques.',
   'Simulate multiple datasets representing different hospitals.',
   'Train AI models collaboratively without centralizing data.',
   'Evaluate model performance and privacy compliance.',
   'Refine system for scalability and security.'
 ],
 requiredResources: ['AI Frameworks', 'Simulated Healthcare Data', 'Programming Tools'],
 potentialMentors: ['Data Scientist', 'Healthcare IT Specialist', 'AI Researcher'],
 howToShowcase: 'Demonstrate model training on multiple datasets without transferring sensitive data.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
 title: 'Build Medical Imaging Compression AI',
 description: 'Create an AI system that efficiently compresses large medical imaging files (like MRI or CT scans) without losing diagnostic quality.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Reduces storage costs and speeds up sharing of medical images, facilitating faster diagnosis.',
 gettingStarted: [
   'Study medical imaging formats and compression techniques.',
   'Collect sample imaging data for testing.',
   'Develop AI models for lossless or near-lossless compression.',
   'Test image quality and diagnostic fidelity.',
   'Refine algorithms for different imaging modalities.'
 ],
 requiredResources: ['Medical Imaging Data', 'AI Frameworks', 'Programming Tools'],
 potentialMentors: ['Radiologist', 'Data Scientist', 'Medical Imaging Specialist'],
 howToShowcase: 'Show compressed vs. original images and demonstrate maintained diagnostic accuracy.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
 title: 'Develop Robotic Pharmacy Dispensing System',
 description: 'Design a robotic system to automatically dispense medications accurately in a pharmacy setting.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Reduces human error, improves efficiency, and ensures accurate medication delivery.',
 gettingStarted: [
   'Study pharmacy workflows and medication dispensing requirements.',
   'Design robotic mechanism for pill selection and delivery.',
   'Integrate sensors and control systems for accuracy.',
   'Test dispensing accuracy and safety protocols.',
   'Refine system for real-world pharmacy constraints.'
 ],
 requiredResources: ['Robotics Components', 'Sensors', 'Programming Tools', 'Medication Samples (simulated)'],
 potentialMentors: ['Pharmacist', 'Robotics Engineer', 'Automation Specialist'],
 howToShowcase: 'Demonstrate accurate automated dispensing in a controlled lab or simulation.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
 title: 'Create Emergency Room Triage AI',
 description: 'Build an AI system that analyzes patient symptoms and prioritizes treatment order in emergency room settings.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Improves patient outcomes by ensuring critical cases receive immediate attention while streamlining ER workflow.',
 gettingStarted: [
   'Study ER triage protocols and patient prioritization criteria.',
   'Collect anonymized patient symptom and outcome data.',
   'Develop AI algorithms to predict urgency levels.',
   'Integrate AI suggestions with simulated ER workflow.',
   'Refine system to handle various scenarios accurately.'
 ],
 requiredResources: ['Anonymized Patient Data', 'AI Frameworks', 'Programming Tools'],
 potentialMentors: ['ER Doctor', 'Data Scientist', 'Healthcare IT Specialist'],
 howToShowcase: 'Demonstrate AI correctly prioritizing patient scenarios in a simulated ER environment.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
 title: 'Build Pandemic Spread Prediction Model',
 description: 'Develop a predictive model to forecast the spread of infectious diseases using epidemiological and mobility data.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Helps policymakers and healthcare providers prepare for outbreaks and allocate resources effectively.',
 gettingStarted: [
   'Collect historical epidemiological data and mobility patterns.',
   'Choose appropriate modeling techniques (e.g., SEIR, machine learning).',
   'Train the model and validate predictions on past outbreaks.',
   'Visualize spread predictions with maps or charts.',
   'Refine model for accuracy and real-time use.'
 ],
 requiredResources: ['Epidemiological Data', 'AI/ML Frameworks', 'Data Visualization Tools'],
 potentialMentors: ['Epidemiologist', 'Data Scientist', 'Public Health Expert'],
 howToShowcase: 'Present simulations predicting spread patterns and demonstrate intervention scenarios.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
 title: 'Design Smart Mask with Air Quality Sensors',
 description: 'Create a wearable mask equipped with sensors to monitor air quality, pollutants, and filter efficiency.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Enhances personal safety and health awareness in polluted or high-risk environments.',
 gettingStarted: [
   'Research mask designs and wearable sensor technologies.',
   'Select air quality sensors and microcontrollers.',
   'Design mask structure to integrate electronics safely.',
   'Test sensor accuracy and filter performance.',
   'Iterate design for comfort, usability, and data display.'
 ],
 requiredResources: ['Air Quality Sensors', 'Microcontroller', '3D Printing Materials', 'Electronic Components'],
 potentialMentors: ['Mechanical Engineer', 'Environmental Scientist', 'Wearable Tech Specialist'],
 howToShowcase: 'Demonstrate mask monitoring air quality in different environments with live data.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-blue-400 to-cyan-500',
 title: 'Develop Portable Diagnostic Lab-in-a-Box',
 description: 'Design a compact, portable system that can perform basic diagnostic tests for blood, saliva, or other samples.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Provides rapid testing capabilities in remote or emergency settings, improving healthcare access.',
 gettingStarted: [
   'Identify essential diagnostic tests for portability.',
   'Design modular hardware and microfluidic components.',
   'Develop software to control sensors and display results.',
   'Test accuracy and reliability with simulated samples.',
   'Refine design for usability and safety.'
 ],
 requiredResources: ['Microfluidic Kits', 'Sensors', 'Microcontroller', 'Diagnostic Reagents (simulated)'],
 potentialMentors: ['Biomedical Engineer', 'Lab Technician', 'Healthcare Specialist'],
 howToShowcase: 'Demonstrate running multiple tests on a compact setup and displaying results accurately.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
 title: 'Create AI-Powered Mental Health Assessment',
 description: 'Build an AI system that evaluates mental health symptoms via questionnaires, voice, or behavioral analysis.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Provides accessible early detection and guidance, supporting mental health care and awareness.',
 gettingStarted: [
   'Research mental health assessment methods and ethical considerations.',
   'Collect anonymized datasets for model training.',
   'Develop AI models to interpret questionnaire responses or behavioral signals.',
   'Test system for accuracy and sensitivity.',
   'Refine for privacy, ethical compliance, and usability.'
 ],
 requiredResources: ['Anonymized Mental Health Data', 'AI Frameworks', 'Programming Tools'],
 potentialMentors: ['Psychologist', 'Data Scientist', 'Mental Health Researcher'],
 howToShowcase: 'Demonstrate the system assessing simulated users and generating insights responsibly.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-orange-400 to-yellow-500',
 title: 'Build Surgical Instrument Tracking System',
 description: 'Create a system that monitors and tracks surgical instruments during procedures to ensure accountability and reduce errors.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Improves surgical safety, reduces lost instruments, and increases operational efficiency in hospitals.',
 gettingStarted: [
   'Research surgical workflows and instrument tracking methods.',
   'Design tracking system using RFID, sensors, or computer vision.',
   'Develop software for real-time monitoring and alerts.',
   'Test system in a simulated surgical environment.',
   'Refine for accuracy, reliability, and usability.'
 ],
 requiredResources: ['RFID Tags/Sensors', 'Computer Vision Tools', 'Software Development Tools'],
 potentialMentors: ['Surgeon', 'Biomedical Engineer', 'Hospital IT Specialist'],
 howToShowcase: 'Demonstrate tracking instruments in a simulated surgery scenario with real-time monitoring.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
 title: 'Develop Medical Training Virtual Reality Platform',
 description: 'Build a VR platform for immersive medical training, allowing students to practice procedures in a safe virtual environment.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Enhances hands-on learning without risk to patients, improving skills and confidence of medical trainees.',
 gettingStarted: [
   'Research VR development tools and medical training needs.',
   'Create realistic 3D models of anatomy and equipment.',
   'Develop interactive simulations for procedures.',
   'Test VR platform with users and gather feedback.',
   'Refine visuals, interactions, and educational outcomes.'
 ],
 requiredResources: ['VR Headset', '3D Modeling Software', 'Game Engine (Unity/Unreal)'],
 potentialMentors: ['Medical Educator', 'VR Developer', 'Biomedical Engineer'],
 howToShowcase: 'Host a demo for students or educators, allowing hands-on VR procedure practice.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
 title: 'Develop a Computational Model for Fusion Reactor Plasma',
 description: 'Build a simulation that models plasma behavior inside a fusion reactor to optimize containment and energy output.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Supports clean energy research and helps scientists understand and improve fusion reactor efficiency.',
 gettingStarted: [
   'Research plasma physics and fusion reactor principles.',
   'Design mathematical models representing plasma behavior.',
   'Implement simulations using programming tools like Python or MATLAB.',
   'Validate models against experimental or published data.',
   'Refine model parameters to improve accuracy.'
 ],
 requiredResources: ['Programming Tools', 'Simulation Software', 'Research Papers'],
 potentialMentors: ['Nuclear Physicist', 'Plasma Scientist', 'Energy Engineer'],
 howToShowcase: 'Present simulation results with visualizations showing plasma stability under various conditions.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
 title: 'Create a LiDAR-based Archaeological Site Mapper',
 description: 'Use LiDAR data to create detailed 3D maps of archaeological sites, revealing hidden structures or landscape features.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Enhances archaeological research and preservation by providing precise, non-invasive mapping techniques.',
 gettingStarted: [
   'Learn about LiDAR technology and data formats.',
   'Collect or access LiDAR datasets of target sites.',
   'Process and clean the data for mapping.',
   'Generate 3D visualizations and identify key features.',
   'Document findings and compare with historical records.'
 ],
 requiredResources: ['LiDAR Data', '3D Mapping Software', 'Computer'],
 potentialMentors: ['Archaeologist', 'Geospatial Analyst', 'Remote Sensing Specialist'],
 howToShowcase: 'Share 3D maps and highlight discoveries in reports or interactive presentations.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
 title: 'Design a Smart Grid Energy Distribution Simulator',
 description: 'Build a software tool that simulates energy flow in a smart grid, optimizing for efficiency, load balancing, and renewable integration.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Helps engineers and planners improve energy distribution and integrate renewable sources safely and efficiently.',
 gettingStarted: [
   'Research smart grid principles and energy management.',
   'Design a simulation model for grid components.',
   'Implement energy flow algorithms in a programming environment.',
   'Test scenarios with different load and renewable input patterns.',
   'Analyze results and optimize grid performance.'
 ],
 requiredResources: ['Programming Tools', 'Simulation Software', 'Energy Data'],
 potentialMentors: ['Electrical Engineer', 'Energy Analyst', 'Software Developer'],
 howToShowcase: 'Present simulation outputs showing optimized energy distribution under multiple scenarios.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
 title: 'Build an Assistive Robotic Arm for People with Disabilities',
 description: 'Design and prototype a robotic arm controlled by intuitive inputs (e.g., sensors, buttons, or neural signals) to assist people with limited mobility.',
 difficulty: 'Advanced',
 category: 'Health Tech',
 time: 'High',
 whyItMatters: 'Enhances quality of life and independence for people with disabilities by providing assistive technology.',
 gettingStarted: [
   'Research existing robotic assistive devices.',
   'Design mechanical and electronic components for the arm.',
   'Integrate control systems using sensors or microcontrollers.',
   'Test movement accuracy and safety with simulations or prototypes.',
   'Iterate design for comfort and usability.'
 ],
 requiredResources: ['Robotics Kit', 'Microcontrollers', 'Sensors', 'Mechanical Components'],
 potentialMentors: ['Rehabilitation Engineer', 'Robotics Specialist', 'Occupational Therapist'],
 howToShowcase: 'Demonstrate the robotic arm performing common tasks safely and reliably.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
 title: 'Develop a Predictive Model for Stock Market Flash Crashes',
 description: 'Create an AI system that analyzes historical market data to predict and alert users about potential sudden stock market crashes.',
 difficulty: 'Advanced',
 category: 'Business',
 time: 'High',
 whyItMatters: 'Provides insights into market risks, helping traders and analysts mitigate financial losses.',
 gettingStarted: [
   'Collect and preprocess historical stock market data.',
   'Select features indicative of flash crashes (e.g., trading volume, price volatility).',
   'Train predictive models using machine learning algorithms.',
   'Validate models against past events and adjust parameters.',
   'Integrate alerts and visualization tools for potential crashes.'
 ],
 requiredResources: ['Market Data', 'AI/ML Frameworks', 'Programming Tools'],
 potentialMentors: ['Quantitative Analyst', 'Financial Engineer', 'Data Scientist'],
 howToShowcase: 'Demonstrate model predictions with historical backtesting and live market simulations.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-500',
 title: 'Create a Digital Forensics Tool for Data Recovery',
 description: 'Develop software that can recover deleted or corrupted files from storage devices for investigative purposes.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Supports cybersecurity and investigative efforts by enabling data recovery in legal or security contexts.',
 gettingStarted: [
   'Learn file system structures and data storage principles.',
   'Identify common causes of data loss and corruption.',
   'Develop algorithms to scan and recover lost data.',
   'Test recovery on sample datasets.',
   'Document tool functionality and limitations.'
 ],
 requiredResources: ['Programming Environment', 'Test Storage Devices', 'Sample Data'],
 potentialMentors: ['Cybersecurity Expert', 'Forensics Analyst', 'Software Developer'],
 howToShowcase: 'Demonstrate data recovery on simulated deleted files and explain methods used.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
 title: 'Design a Quantum Cryptography Demonstration Kit',
 description: 'Create a hands-on kit that demonstrates the principles of quantum cryptography, including secure key exchange using quantum phenomena.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Introduces quantum security concepts and promotes education in cutting-edge cryptography technologies.',
 gettingStarted: [
   'Study quantum key distribution protocols.',
   'Design simple experiments or visualizations for key exchange.',
   'Build the kit using accessible optics and electronics components.',
   'Test demonstrations to ensure reproducibility.',
   'Prepare user instructions for educational purposes.'
 ],
 requiredResources: ['Optics Components', 'Laser Modules', 'Electronics', 'Quantum Protocol Reference'],
 potentialMentors: ['Quantum Physicist', 'Cryptography Researcher', 'Electronics Engineer'],
 howToShowcase: 'Demonstrate the kit to peers or at a STEM fair, explaining quantum key principles.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
 title: 'Build a Particle Physics Data Analysis Platform',
 description: 'Create a software platform to analyze experimental data from particle physics experiments and visualize patterns or anomalies.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Supports research in fundamental physics and helps make sense of complex experimental data.',
 gettingStarted: [
   'Acquire knowledge of particle physics experiments and data formats.',
   'Design algorithms for data cleaning and analysis.',
   'Implement visualization tools to detect patterns.',
   'Validate analysis using sample or historical datasets.',
   'Document workflows for reproducibility.'
 ],
 requiredResources: ['Programming Tools', 'Data Sets', 'Visualization Libraries'],
 potentialMentors: ['Particle Physicist', 'Data Scientist', 'Computational Physicist'],
 howToShowcase: 'Present analysis outputs and insights at science fairs or research presentations.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
 title: 'Develop a Genome Sequence Alignment Tool',
 description: 'Build software that aligns DNA or RNA sequences to detect similarities, mutations, or evolutionary relationships.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Advances bioinformatics research and supports genetics, medicine, and evolutionary studies.',
 gettingStarted: [
   'Study genome sequencing methods and alignment algorithms.',
   'Implement sequence comparison and alignment algorithms.',
   'Test with publicly available genomic data.',
   'Optimize for performance on large datasets.',
   'Document tool capabilities and limitations.'
 ],
 requiredResources: ['Programming Tools', 'Genome Databases', 'Bioinformatics Libraries'],
 potentialMentors: ['Bioinformatician', 'Geneticist', 'Computational Biologist'],
 howToShowcase: 'Demonstrate alignment results and insights with example genomic datasets.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
 title: 'Create a Haptic Feedback System for Virtual Reality',
 description: 'Design and prototype a system that provides tactile feedback in VR, allowing users to feel interactions in a virtual environment.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Enhances immersion and accessibility in virtual reality applications, improving user experience.',
 gettingStarted: [
   'Research haptic technology and VR systems.',
   'Design mechanical and electronic feedback mechanisms.',
   'Integrate system with a VR headset or simulation software.',
   'Test feedback with various interactions and refine response accuracy.',
   'Document system design and performance metrics.'
 ],
 requiredResources: ['VR Headset', 'Actuators/Sensors', 'Microcontrollers', 'Programming Tools'],
 potentialMentors: ['VR Developer', 'Mechanical Engineer', 'Human-Computer Interaction Specialist'],
 howToShowcase: 'Demonstrate VR interactions with realistic haptic responses for users.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
 title: 'Design a Counter-Drone Security System',
 description: 'Develop a system that detects, tracks, and neutralizes unauthorized drones using sensors and automated responses.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Supports safety and security in sensitive areas by mitigating drone-related threats.',
 gettingStarted: [
   'Research drone detection technologies and regulatory guidelines.',
   'Design detection algorithms using radar, cameras, or RF sensors.',
   'Integrate automated alert or neutralization mechanisms.',
   'Test system in controlled environments.',
   'Document detection accuracy and response protocols.'
 ],
 requiredResources: ['Sensors', 'Computing Hardware', 'Drones for Testing', 'Programming Tools'],
 potentialMentors: ['Security Engineer', 'Aerospace Engineer', 'Robotics Specialist'],
 howToShowcase: 'Demonstrate the system detecting and responding to test drones in a controlled setting.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
 title: 'Build an Underwater Acoustic Communication Modem',
 description: 'Design a modem capable of transmitting data underwater using acoustic signals for remote monitoring or research purposes.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Enables communication in underwater environments where radio waves are ineffective, aiding marine research and exploration.',
 gettingStarted: [
   'Research underwater acoustic signal transmission principles.',
   'Design circuitry for signal generation and reception.',
   'Develop algorithms for encoding and decoding data.',
   'Test in small water tanks and gradually larger environments.',
   'Document performance metrics and signal reliability.'
 ],
 requiredResources: ['Microcontrollers', 'Hydrophones', 'Signal Processing Tools', 'Water Tank/Test Pool'],
 potentialMentors: ['Marine Engineer', 'Acoustics Specialist', 'Electrical Engineer'],
 howToShowcase: 'Demonstrate successful data transmission in a controlled underwater setting.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
 title: 'Develop an AI-Based Legal Document Analyzer',
 description: 'Create software that uses AI to scan, summarize, and flag key information or potential risks in legal documents.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Increases efficiency and accuracy in legal work, helping lawyers and clients quickly interpret complex documents.',
 gettingStarted: [
   'Collect sample legal documents for analysis.',
   'Train AI models to identify clauses, risks, and summaries.',
   'Implement user-friendly interfaces for document upload and analysis.',
   'Test accuracy against expert-reviewed documents.',
   'Refine model and interface based on feedback.'
 ],
 requiredResources: ['Programming Environment', 'AI/ML Frameworks', 'Sample Legal Documents'],
 potentialMentors: ['Lawyer', 'AI Specialist', 'Data Scientist'],
 howToShowcase: 'Demonstrate AI analyzing a document and highlighting key clauses for review.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-green-400 to-teal-500',
 title: 'Create a 3D Bioprinted Cartilage for Joint Repair',
 description: 'Design and prototype cartilage tissue using 3D bioprinting techniques for research in regenerative medicine.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Advances tissue engineering and potential therapies for joint injuries or degenerative diseases.',
 gettingStarted: [
   'Study cartilage tissue structure and bioprinting techniques.',
   'Select bio-inks compatible with cell growth.',
   'Design 3D models for cartilage structures.',
   'Test print and assess tissue viability.',
   'Document methodology and results.'
 ],
 requiredResources: ['3D Bioprinter', 'Bio-inks', 'Lab Equipment', 'Cell Culture Materials'],
 potentialMentors: ['Biomedical Engineer', 'Tissue Engineer', 'Biologist'],
 howToShowcase: 'Show printed tissue samples and describe the potential medical applications.'
},
{
 icon: DesignIcon,
 iconBg: 'bg-gradient-to-br from-emerald-400 to-lime-500',
 title: 'Design a Portable Water Purification Device',
 description: 'Develop a compact device that removes contaminants from water to provide safe drinking water in remote or emergency situations.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Improves access to clean water, addressing health and survival needs in underserved or disaster-affected areas.',
 gettingStarted: [
   'Research common water contaminants and purification methods.',
   'Design filtration and sterilization system for portability.',
   'Prototype the device and test with safe water samples.',
   'Measure purification effectiveness.',
   'Iterate design for efficiency, durability, and ease of use.'
 ],
 requiredResources: ['Filters', 'UV/UV-C Sources', 'Pump Systems', 'Water Testing Kits'],
 potentialMentors: ['Environmental Engineer', 'Mechanical Engineer', 'Chemist'],
 howToShowcase: 'Demonstrate device purifying water samples and explain the process.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-red-400 to-pink-500',
 title: 'Build a Mars Rover Prototype for Regolith Analysis',
 description: 'Design and construct a small rover capable of navigating terrain and analyzing soil (regolith) samples to simulate Martian exploration.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Promotes understanding of space robotics, planetary science, and autonomous exploration technologies.',
 gettingStarted: [
   'Research Mars terrain and soil analysis techniques.',
   'Design rover chassis, locomotion, and sample collection mechanisms.',
   'Integrate sensors and autonomous navigation.',
   'Test in simulated terrain and refine mobility and data collection.',
   'Document results and rover capabilities.'
 ],
 requiredResources: ['Motors', 'Microcontrollers', 'Sensors', 'Testing Terrain Materials'],
 potentialMentors: ['Robotics Engineer', 'Planetary Scientist', 'Mechanical Engineer'],
 howToShowcase: 'Demonstrate rover navigating terrain and performing sample analysis.'
},
{
 icon: AiBrainIcon,
 iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
 title: 'Develop a Smart Contract Audit Platform',
 description: 'Create a tool that automatically checks smart contracts for security vulnerabilities and compliance before deployment.',
 difficulty: 'Advanced',
 category: 'STEM',
 time: 'High',
 whyItMatters: 'Enhances blockchain security and reduces risks of financial losses or exploitation due to faulty smart contracts.',
 gettingStarted: [
   'Study smart contract languages and common vulnerabilities.',
   'Develop static and dynamic analysis tools for auditing.',
   'Integrate reporting and user-friendly interface.',
   'Test against sample contracts with known issues.',
   'Refine algorithms to improve detection accuracy.'
 ],
 requiredResources: ['Programming Environment', 'Blockchain Frameworks', 'Test Smart Contracts'],
 potentialMentors: ['Blockchain Developer', 'Security Analyst', 'Software Engineer'],
 howToShowcase: 'Demonstrate audit on sample contracts and report vulnerabilities found.'
}

];
