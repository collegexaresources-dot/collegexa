
import type { ProfessorCardProps } from '../components/ProfessorCard';

export const allProfessors: ProfessorCardProps[] = [
  {
    avatarBg: 'bg-gradient-to-br from-purple-500 to-fuchsia-500',
    name: 'Dr. Lacramioara Bintu',
    university: 'Stanford University',
    field: 'Bioengineering',
    researchBullets: [
      'Gene regulation in mammalian cells',
      'High-throughput methods for measuring chromatin',
      'Manipulation of transcription factors and RNA',
      'Computational modeling of epigenetic dynamics'
    ],
    bestForStudents: [
      'Strong interest in cell biology and epigenetics',
      'Comfortable with high-level biological modeling'
    ],
    keywords: ['Bioengineering', 'Cells', 'Chromatin', 'RNA'],
  },
  {
  avatarBg: 'bg-gradient-to-br from-cyan-400 to-blue-600',
  name: 'Dr. Hawa Racine Thiam',
  university: 'Stanford University',
  field: 'Bioengineering',
  researchBullets: [
    'Mechanobiology of innate immune cells',
    'Physical forces in immune cell function',
    'Cellular mechanics and force generation',
    'Regulation of immune responses through biophysics'
  ],
  bestForStudents: [
    'Interest in immunology and cell mechanics',
    'Comfortable with physics-informed biology research'
  ],
  keywords: ['Bioengineering', 'Cells', 'Forces', 'Function'],
},

{
  avatarBg: 'bg-gradient-to-br from-fuchsia-500 to-cyan-400',
  name: 'Dr. Jenn Brophy',
  university: 'Stanford University',
  field: 'Bioengineering',
  researchBullets: [
    'Engineering plants for stress resilience',
    'Microbial genetic tool development',
    'Synthetic biology for sustainable agriculture',
    'Biotechnology solutions for environmental challenges'
  ],
  bestForStudents: [
    'Interest in synthetic biology or agriculture tech',
    'Enjoys applied bioengineering with real-world impact'
  ],
  keywords: ['Plants', 'Microbes', 'Stress Resilience', 'Agriculture'],
},

{
  avatarBg: 'bg-gradient-to-br from-indigo-700 to-purple-900',
  name: 'Dr. Polly Fordyce',
  university: 'Stanford University',
  field: 'Bioengineering',
  researchBullets: [
    'Microfluidic technologies for single-cell analysis',
    'Biophysics and biochemistry at cellular resolution',
    'High-throughput genomic measurements',
    'Quantitative analysis of molecular interactions'
  ],
  bestForStudents: [
    'Strong interest in microfluidics or biophysics',
    'Comfortable working at the intersection of wet lab and quantitative analysis'
  ],
  keywords: ['Microfluidics', 'Biophysics', 'Biochemistry', 'Single-Cell Genomics'],
},

{
  avatarBg: 'bg-gradient-to-br from-teal-200 to-emerald-300',
  name: 'Dr. Jin Hyung Lee',
  university: 'Stanford University',
  field: 'Neurology',
  researchBullets: [
    'Engineering-based investigation of brain circuits',
    'Neural connectivity and functional mapping',
    'Technologies for studying neurological diseases',
    'Translational approaches to brain disorders'
  ],
  bestForStudents: [
    'Interest in neuroscience and neuroengineering',
    'Comfortable with interdisciplinary bio + engineering research'
  ],
  keywords: ['Brain Circuits', 'Connectivity', 'Neurological Diseases', 'Engineering'],
},

{
  avatarBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  name: 'Dr. Tatiana Segura',
  university: 'Duke University',
  field: 'Biomedical Engineering',
  researchBullets: [
    'Design of regenerative biomaterials',
    'Polymer-based systems for wound healing',
    'Delivery of therapeutic factors',
    'Tissue regeneration across skin, brain, and bone'
  ],
  bestForStudents: [
    'Interest in biomaterials or tissue engineering',
    'Motivated by translational and medical applications'
  ],
  keywords: ['Biomaterials', 'Regeneration', 'Polymers', 'Wound Healing'],
},

{
  avatarBg: 'bg-gradient-to-br from-lime-200 to-yellow-200',
  name: 'Dr. Jill Mateo',
  university: 'University of Chicago',
  field: 'Behavioral Ecology',
  researchBullets: [
    'Adaptive behavior across animal development',
    'Interaction between biology and environment',
    'Behavioral responses to ecological pressures',
    'Evolutionary perspectives on development'
  ],
  bestForStudents: [
    'Interest in animal behavior or evolutionary biology',
    'Enjoys observational and experimental research'
  ],
  keywords: ['Behavior', 'Development', 'Environment', 'Biology'],
},
{
  avatarBg: 'bg-gradient-to-br from-slate-500 to-blue-700',
  name: 'Dr. Ed Boyden',
  university: 'MIT',
  field: 'Neurology',
  researchBullets: [
    'Neurotechnology for mapping brain circuits',
    'Recording neural activity at nanoscale precision',
    'Controlling brain circuits to study function',
    'Therapeutic applications for neurological and psychiatric disorders'
  ],
  bestForStudents: [
    'Strong interest in neurotechnology and brain circuits',
    'Comfortable with highly technical, cutting-edge research'
  ],
  keywords: ['Neurotechnology', 'Brain Mapping', 'Neural Dynamics'],
},

{
  avatarBg: 'bg-gradient-to-r from-indigo-500 to-purple-600',
  name: 'Dr. Brittany Jordan-Arthur',
  university: 'Tufts University',
  field: 'Psychology',
  researchBullets: [
    'Developmental psychopathology in youth',
    'Psychosocial care access and quality',
    'Evidence-based interventions for anxiety and mood disorders',
    'Care for complex behavioral and medical needs'
  ],
  bestForStudents: [
    'Interest in clinical or developmental psychology',
    'Motivated by applied mental health research'
  ],
  keywords: ['Developmental', 'Psychopathology', 'Neural Dynamics'],
},

{
  avatarBg: 'bg-gradient-to-bl from-emerald-400 to-teal-600',
  name: 'Dr. Michelle Rucci',
  university: 'University of Rochester',
  field: 'Opthamology',
  researchBullets: [
    'Neural processing of visual information',
    'Vision-guided perception and motor behavior',
    'Brain mechanisms underlying visual perception',
    'Applications to visual aids and machine vision'
  ],
  bestForStudents: [
    'Interest in vision science or neuroscience',
    'Comfortable bridging biology and computational systems'
  ],
  keywords: ['Visual Perception', 'Neuroscience', 'Motor Behavior', 'Machine Vision'],
},

{
  avatarBg: 'bg-gradient-to-tr from-pink-500 to-rose-600',
  name: 'Dr. Rosie Bsheer',
  university: 'Harvard University',
  field: 'History',
  researchBullets: [
    'Modern Middle Eastern history',
    'Arab intellectual and social movements',
    'Petro-capitalism and state formation',
    'Historical memory and historiography'
  ],
  bestForStudents: [
    'Interest in Middle Eastern studies or history',
    'Enjoys archival and critical historical analysis'
  ],
  keywords: ['Middle East History', 'Arab Intellectual Movements', 'Petro-Capitalism', 'State Formation', 'Historiography', 'Historical Memory'],
},

{
  avatarBg: 'bg-gradient-to-b from-sky-400 to-indigo-700',
  name: 'Dr. Damon Scott Tweedy',
  university: 'Duke University',
  field: 'Psychology',
  researchBullets: [
    'Systemic and racial influences on mental health',
    'Health disparities in psychiatric care',
    'Doctor-patient relationships in medicine',
    'Culturally informed medical education'
  ],
  bestForStudents: [
    'Interest in psychiatry, ethics, or health equity',
    'Motivated by policy-informed or social-impact research'
  ],
  keywords: ['Mental health', 'Psychiatry', 'Race and medicine', 'Health disparities', 'Doctor-patient relationship', 'Veterans health care', 'Behavioral health education'],
},

{
  avatarBg: 'bg-gradient-to-r from-amber-400 to-orange-600',
  name: 'Dr. Alvan- Emeka Ukachukwu',
  university: 'Duke University',
  field: 'Neurology',
  researchBullets: [
    'Global disparities in neurosurgical access',
    'Neurosurgical workforce development',
    'Health systems strengthening',
    'Evidence-based neurosurgical policy'
  ],
  bestForStudents: [
    'Interest in global health or neurosurgery',
    'Motivated by systems-level healthcare research'
  ],
  keywords: ['Global neurosurgery', 'Health disparities', 'Workforce development', 'Capacity building', 'Neurosurgical policy', 'Health systems'],
},

{
  avatarBg: 'bg-gradient-to-br from-violet-500 to-fuchsia-700',
  name: 'Dr. Angel Zeininger',
  university: 'Duke University',
  field: 'Behavioral Ecology',
  researchBullets: [
    'Locomotor forces and bone microarchitecture',
    'Trabecular bone imaging and analysis',
    'Functional morphology in humans',
    'Movement reconstruction in fossil hominins'
  ],
  bestForStudents: [
    'Interest in evolution or biomechanics',
    'Comfortable with imaging-based anatomical research'
  ],
  keywords: ['Locomotion', 'Trabecular bone', 'Functional morphology', 'Evolution', 'Imaging techniques', 'Fossil hominins'],
},

{
  avatarBg: 'bg-gradient-to-l from-cyan-400 to-blue-600',
  name: 'Dr. Jeannette Bohg',
  university: 'Stanford University',
  field: 'Computer Science',
  researchBullets: [
    'Robotic perception and learning',
    'Autonomous manipulation and grasping',
    'Multi-modal robotic systems',
    'Real-time goal-directed robotics'
  ],
  bestForStudents: [
    'Interest in robotics and machine learning',
    'Comfortable with perception-driven systems'
  ],
  keywords: ['Robotics', 'Autonomous manipulation', 'Perception', 'Machine learning', 'Multi-modal systems', 'Robotic grasping'],
},

{
  avatarBg: 'bg-gradient-to-tr from-green-400 to-emerald-700',
  name: 'Dr. Emily Fox',
  university: 'Stanford University',
  field: 'Computer Science',
  researchBullets: [
    'Complex time series modeling',
    'Machine learning for health applications',
    'Wearable data analysis',
    'Neuroimaging-based predictive modeling'
  ],
  bestForStudents: [
    'Strong interest in ML and statistics',
    'Comfortable working with real-world health data'
  ],
  keywords: ['Machine learning', 'Time series', 'Health analytics', 'Wearables', 'Neuroimaging', 'Predictive modeling'],
},
{
  avatarBg: 'bg-gradient-to-b from-red-400 to-pink-600',
  name: 'Dr. Paola Cappellaro',
  university: 'MIT',
  field: 'Physics',
  researchBullets: [
    'Design and control of quantum devices',
    'Scalable quantum simulations',
    'Quantum computation techniques',
    'High-precision quantum sensing'
  ],
  bestForStudents: [
    'Interest in quantum physics and experimental control',
    'Motivated by cutting-edge quantum technology research'
  ],
  keywords: ['Quantum devices', 'Spin qubits', 'Quantum sensing', 'Quantum computation', 'Quantum simulations', 'Experimental control'],
},

{
  avatarBg: 'bg-gradient-to-br from-slate-600 to-indigo-800',
  name: 'Dr. Krishna Rajagopal',
  university: 'MIT',
  field: 'Physics',
  researchBullets: [
    'Properties of strongly interacting quark-gluon matter',
    'Heavy ion collisions and high-energy nuclear systems',
    'Astrophysical phenomena in nuclear matter',
    'Microscopic dynamics of high-energy systems'
  ],
  bestForStudents: [
    'Interest in nuclear physics or astrophysics',
    'Comfortable with theoretical and experimental high-energy research'
  ],
  keywords: ['Quark-gluon plasma', 'High-energy nuclear physics', 'Heavy ion collisions', 'Strongly coupled matter', 'QCD phase diagram', 'Astrophysical constraints'],
},

{
  avatarBg: 'bg-gradient-to-r from-blue-500 to-cyan-600',
  name: 'Dr. Colin Orians',
  university: 'Tufts University',
  field: 'Biology',
  researchBullets: [
    'Climate change effects on ecosystems',
    'Species interactions in agriculture and nature',
    'Ecosystem adaptation and resilience',
    'Sustainability strategies for ecosystems'
  ],
  bestForStudents: [
    'Interest in ecology or environmental biology',
    'Motivated by climate and sustainability research'
  ],
  keywords: ['Agroecology', 'Climate change', 'Plant-herbivore interactions', 'Invasive species', 'Sustainability', 'Ecosystem adaptation'],
},

{
  avatarBg: 'bg-gradient-to-br from-slate-500 to-blue-700',
  name: 'Dr. Ying Chen',
  university: 'Tufts University',
  field: 'Biomedical Engineering',
  researchBullets: [
    'Tissue engineering of human intestine',
    '3D in vitro intestinal models',
    'Disease modeling and drug delivery',
    'Regenerative therapy development'
  ],
  bestForStudents: [
    'Interest in tissue engineering or regenerative medicine',
    'Comfortable with lab-based biomedical research'
  ],
  keywords: ['Tissue engineering', 'Regenerative medicine', 'Organoids', '3D scaffolds', 'Intestinal models', 'Disease modeling'],
},

{
  avatarBg: 'bg-gradient-to-bl from-purple-500 to-indigo-700',
  name: 'Dr. Srivalleesha Mallidi',
  university: 'Tufts University',
  field: 'Biomedical Engineering',
  researchBullets: [
    'Non-invasive acoustic and optical imaging',
    'Image-guided surgery techniques',
    'Cancer diagnostics via imaging',
    'Targeted nanotherapeutics'
  ],
  bestForStudents: [
    'Interest in biomedical imaging or nanomedicine',
    'Motivated by translational research in cancer therapy'
  ],
  keywords: ['Ultrasound imaging', 'Photoacoustic imaging', 'Multi-modality imaging', 'Image-guided therapy', 'Nanomedicine', 'Cancer diagnostics'],
},

{
  avatarBg: 'bg-gradient-to-tr from-teal-400 to-cyan-700',
  name: 'Dr. Nichole Broderick',
  university: 'Johns Hopkins University',
  field: 'Biology',
  researchBullets: [
    'Host-microbiome interactions in animals',
    'Impact on development and physiology',
    'Mechanisms promoting health and resilience',
    'Genomics-based investigation of microbiomes'
  ],
  bestForStudents: [
    'Interest in microbiology or animal biology',
    'Comfortable with host-microbiome research and genomics'
  ],
  keywords: ['Microbiome', 'Host-microbe interactions', 'Animal biology', 'Development', 'Physiology', 'Genomics'],
},

{
  avatarBg: 'bg-gradient-to-b from-orange-400 to-red-600',
  name: 'Dr. Jocelyne DiRuggiero',
  university: 'Johns Hopkins University',
  field: 'Biology',
  researchBullets: [
    'Microorganism adaptation to extreme environments',
    'Molecular biology of extremophiles',
    'Microbial ecology and survival mechanisms',
    'Astrobiology applications'
  ],
  bestForStudents: [
    'Interest in microbiology or astrobiology',
    'Motivated by environmental and extremophile research'
  ],
  keywords: ['Microbial adaptation', 'Extreme environments', 'Archaea', 'Molecular biology', 'Microbial ecology', 'Astrobiology'],
},

{
  avatarBg: 'bg-gradient-to-r from-fuchsia-500 to-pink-600',
  name: 'Dr. Andrew Gordus',
  university: 'Johns Hopkins University',
  field: 'Neurology',
  researchBullets: [
    'Cellular and genetic bases of behavior',
    'Environmental modulation of organismal behavior',
    'Behavioral encoding mechanisms',
    'Complex behavior adaptation in organisms'
  ],
  bestForStudents: [
    'Interest in behavioral genetics or neurobiology',
    'Comfortable analyzing cellular and environmental interactions'
  ],
  keywords: ['Behavioral genetics', 'Neuronal networks', 'C. elegans', 'Spiders', 'Environmental adaptation', 'Behavioral encoding'],
},

{
  avatarBg: 'bg-gradient-to-br from-gray-700 to-slate-900',
  name: 'Dr. Patricia A. Brennan',
  university: 'Emory University',
  field: 'Psychology',
  researchBullets: [
    'Maternal stress and perinatal factors',
    'Early brain development in offspring',
    'Intergenerational biological transmission',
    'Reducing maternal–child health disparities'
  ],
  bestForStudents: [
    'Interest in developmental psychology or neurobiology',
    'Motivated by health disparities and maternal-child research'
  ],
  keywords: ['Maternal stress', 'Neurodevelopment', 'Epigenetics', 'Perinatal health', 'Intergenerational biology', 'Health disparities'],
},

{
  avatarBg: 'bg-gradient-to-l from-lime-400 to-green-600',
  name: 'Dr. Aubrey Kelly',
  university: 'Emory University',
  field: 'Neurology',
  researchBullets: [
    'Neural and biological foundations of social behavior',
    'Social brain development and plasticity',
    'Comparative neuroscience across species',
    'Evolution of sociality'
  ],
  bestForStudents: [
    'Interest in social neuroscience or behavioral ecology',
    'Comfortable with cross-species neurobiological research'
  ],
  keywords: ['Social behavior', 'Neural circuits', 'Neuroplasticity', 'Comparative neuroscience', 'Behavioral ecology', 'Evolution of sociality'],
},
{
  avatarBg: 'bg-gradient-to-tr from-sky-500 to-blue-800',
  name: 'Dr. Elizabeth Gerber',
  university: 'Northwestern University',
  field: 'Engineering',
  researchBullets: [
    'Technology-enabled networks for idea generation',
    'Collective problem solving and innovation',
    'Design of scalable systems for societal challenges',
    'Human-centered and sociotechnical design research'
  ],
  bestForStudents: [
    'Interested in innovation, design, and human-centered technology',
    'Motivated by research connecting technology and society'
  ],
  keywords: ['Collective innovation', 'Human-centered design', 'Sociotechnical systems', 'Innovation networks', 'Design research', 'Technology and society'],
},

{
  avatarBg: 'bg-gradient-to-r from-indigo-500 to-purple-600',
  name: 'Dr. Jason D. Hartline',
  university: 'Northwestern University',
  field: 'Computer Science',
  researchBullets: [
    'Computational methods for economic system design',
    'Approximation-based approaches to auctions',
    'Strategic decision-making and mechanism design',
    'Algorithmic theory applied to economics'
  ],
  bestForStudents: [
    'Interest in algorithmic economics or computational theory',
    'Motivated by practical applications in economic systems'
  ],
  keywords: ['Algorithmic economics', 'Mechanism design', 'Auction theory', 'Approximation methods', 'Computational theory', 'Economic systems'],
},

{
  avatarBg: 'bg-gradient-to-br from-violet-500 to-fuchsia-700',
  name: 'Dr. Han Liu',
  university: 'Northwestern University',
  field: 'Machine Learning',
  researchBullets: [
    'Integration of AI with large-scale computer systems',
    'Probabilistic modeling and foundation-model approaches',
    'Generative AI for scientific and engineering applications',
    'Transforming business and computational statistics workflows'
  ],
  bestForStudents: [
    'Interest in AI, machine learning, and foundation models',
    'Comfortable with systems-level and probabilistic research'
  ],
  keywords: ['Artificial intelligence', 'Foundation models', 'Generative AI', 'Probabilistic modeling', 'Machine learning systems', 'Computational statistics'],
},

{
  avatarBg: 'bg-gradient-to-l from-cyan-400 to-blue-600',
  name: 'Dr. Seth Herzon',
  university: 'Yale University',
  field: 'Chemistry',
  researchBullets: [
    'Complex molecular interactions and emergent functions',
    'Chemical design for biological applications',
    'Natural products and synthetic chemistry',
    'Bioactive molecule development'
  ],
  bestForStudents: [
    'Interest in chemical biology or synthetic chemistry',
    'Motivated by molecular design and health applications'
  ],
  keywords: ['Chemical emergence', 'Natural products', 'Molecular interactions', 'Chemical biology', 'Synthetic chemistry', 'Bioactive molecules'],
},

{
  avatarBg: 'bg-gradient-to-tr from-green-400 to-emerald-700',
  name: 'Dr. Stacy Malaker',
  university: 'Yale University',
  field: 'Chemistry',
  researchBullets: [
    'Advanced mass spectrometry for complex glycoproteins',
    'Role of mucins in human disease',
    'Glycoproteomics and chemical biology',
    'Glycobiology approaches to disease mechanisms'
  ],
  bestForStudents: [
    'Interest in chemical biology, glycoproteomics, or disease mechanisms',
    'Comfortable with experimental and analytical chemistry research'
  ],
  keywords: ['Mass spectrometry', 'Glycoproteomics', 'Mucins', 'Chemical biology', 'Glycobiology', 'Disease mechanisms'],
},
{
  avatarBg: 'bg-gradient-to-b from-red-400 to-pink-600',
  name: 'Dr. Kenneth Wiberg',
  university: 'Yale University',
  field: 'Chemistry',
  researchBullets: [
    'Influence of molecular structure on chiral optical behavior',
    'Experimental and computational analysis of stereochemistry',
    'Chiroptical method development',
    'Understanding stereochemical properties'
  ],
  bestForStudents: [
    'Interest in stereochemistry and molecular structure',
    'Comfortable with experimental and computational chemistry'
  ],
  keywords: ['Chirality', 'Optical rotation', 'Molecular structure', 'Stereochemistry', 'Chiroptical methods', 'Computational chemistry'],
},

{
  avatarBg: 'bg-gradient-to-tr from-pink-400 to-purple-600',
  name: 'Dr. Caitlin Davis',
  university: 'Yale University',
  field: 'Chemistry',
  researchBullets: [
    'Biological dynamics across scales via spectroscopic imaging',
    'Linking molecular function to cellular behavior',
    'Quantitative biology and chemical biology methods',
    'Systems biology approaches to molecular processes'
  ],
  bestForStudents: [
    'Interest in biophysics, chemical biology, or systems biology',
    'Comfortable with imaging and quantitative analysis'
  ],
  keywords: ['Spectroscopic imaging', 'Biophysics', 'Cell dynamics', 'Quantitative biology', 'Chemical biology', 'Systems biology'],
},

{
  avatarBg: 'bg-gradient-to-b from-slate-400 to-slate-700',
  name: 'Dr. Jeanne Altmann',
  university: 'Princeton University',
  field: 'Behavioral Ecology',
  researchBullets: [
    'Primate life histories and social behavior',
    'Longitudinal and integrative approaches',
    'Parental care and developmental variability',
    'Population dynamics studies'
  ],
  bestForStudents: [
    'Interest in primate behavior and population ecology',
    'Comfortable with longitudinal and integrative research methods'
  ],
  keywords: ['Behavioral ecology', 'Primate life history', 'Social behavior', 'Longitudinal studies', 'Population dynamics', 'Parental care'],
},

{
  avatarBg: 'bg-gradient-to-br from-teal-500 to-emerald-700',
  name: 'Dr. Mary(Cassie) Stoddard',
  university: 'Princeton University',
  field: 'Behavioral Ecology',
  researchBullets: [
    'Influence of visual signals and phenotypic traits on avian behavior',
    'Communication, mimicry, and sensory ecology studies',
    'Multidisciplinary methods in behavioral research',
    'Evolutionary analysis of bird behavior'
  ],
  bestForStudents: [
    'Interest in avian behavior and sensory ecology',
    'Motivated by multidisciplinary approaches to evolutionary biology'
  ],
  keywords: ['Avian behavior', 'Visual communication', 'Sensory ecology', 'Phenotypic traits', 'Evolution', 'Comparative genomics'],
},

{
  avatarBg: 'bg-gradient-to-tr from-purple-600 to-pink-800',
  name: 'Dr. Daniel Rubenstein',
  university: 'Princeton University',
  field: 'Behavioral Ecology',
  researchBullets: [
    'Ecological and social influences on animal decision-making',
    'Mathematical and observational methods',
    'Movement and social behavior analysis',
    'Population dynamics studies'
  ],
  bestForStudents: [
    'Interest in animal behavior and ecology',
    'Comfortable with quantitative and observational research methods'
  ],
  keywords: ['Animal behavior', 'Decision-making', 'Social dynamics', 'Ecology', 'Movement ecology', 'Conservation biology'],
},

{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-blue-900',
  name: 'Dr. Mary K. Hudson',
  university: 'Dartmouth College',
  field: 'Astronomy',
  researchBullets: [
    'Solar activity and geomagnetic interactions',
    'Radiation belt and space weather modeling',
    'Satellite electron flux predictions',
    'Impacts on communications and heliophysics studies'
  ],
  bestForStudents: [
    'Interest in space physics and heliophysics',
    'Comfortable with modeling and satellite data analysis'
  ],
  keywords: ['Space weather', 'Radiation belts', 'Solar wind', 'Geomagnetism', 'Satellite impacts', 'Heliophysics'],
},

{
  avatarBg: 'bg-gradient-to-r from-rose-500 to-fuchsia-700',
  name: 'Dr. James Daniel Whitfield',
  university: 'Dartmouth College',
  field: 'Astronomy',
  researchBullets: [
    'Classical and quantum computing for physical simulations',
    'Studying fermionic and condensed matter problems',
    'Computational and quantum methods',
    'Applications to complex physical systems'
  ],
  bestForStudents: [
    'Interest in quantum computing or computational physics',
    'Comfortable with complex system simulation methods'
  ],
  keywords: ['Quantum computing', 'Physical simulation', 'Condensed matter', 'Fermionic systems', 'Computational physics', 'Quantum information'],
},

{
  avatarBg: 'bg-gradient-to-l from-orange-500 to-amber-700',
  name: 'Dr. Saptarshi Chaudhuri',
  university: 'Princeton University',
  field: 'Physics',
  researchBullets: [
    'Quantum sensor-based experimental methods',
    'Detection of axions and dark matter candidates',
    'Intersection of particle physics, cosmology, and astrophysics',
    'Development of advanced measurement techniques'
  ],
  bestForStudents: [
    'Interest in quantum physics and dark matter research',
    'Comfortable with experimental and theoretical physics methods'
  ],
  keywords: ['Dark matter detection', 'Axions', 'Quantum sensors', 'Superconducting detectors', 'Particle physics', 'Cosmology', 'Astrophysics'],
},

{
  avatarBg: 'bg-gradient-to-tr from-pink-400 to-purple-600',
  name: 'Dr. Edward Groth',
  university: 'Princeton University',
  field: 'Physics',
  researchBullets: [
    'Deep-space observations via Hubble Space Telescope',
    'Analysis of faint galaxies and clusters',
    'Galaxy formation and large-scale cosmic structure',
    'Intermediate redshift cosmology studies'
  ],
  bestForStudents: [
    'Interest in observational cosmology and astrophysics',
    'Comfortable with data analysis from space telescopes'
  ],
  keywords: ['Hubble Space Telescope', 'Observational cosmology', 'Galaxy formation', 'Deep-field surveys', 'Large-scale structure', 'Gravitational lensing'],
},

{
  avatarBg: 'bg-gradient-to-b from-cyan-300 to-sky-600',
  name: 'Dr. Nate Cira',
  university: 'Cornell University',
  field: 'Biomedical Engineering',
  researchBullets: [
    'High-throughput microfluidic and bioengineering platforms',
    'Emergent behaviors in cells, genes, and microbial communities',
    'Experimental probing of complex biological interactions',
    'Systems and synthetic biology applications'
  ],
  bestForStudents: [
    'Interest in bioengineering or microfluidics',
    'Motivated by experimental and systems biology research'
  ],
  keywords: ['Microfluidics', 'High-throughput experimentation', 'Systems biology', 'Synthetic biology', 'Bioengineering', 'Biomedical instrumentation', 'Soft matter'],
},

{
  avatarBg: 'bg-gradient-to-b from-slate-400 to-slate-700',
  name: 'Dr. Luca Carlone',
  university: 'MIT',
  field: 'Engineering',
  researchBullets: [
    'Robust perception and 3D scene understanding algorithms',
    'Safety-critical autonomy in mobile robotic systems',
    'Real-time operations in dynamic environments',
    'Certifiable algorithm development for autonomous systems'
  ],
  bestForStudents: [
    'Interest in robotics and autonomous systems',
    'Comfortable with algorithm development and real-time AI applications'
  ],
  keywords: ['Autonomous systems', 'Certifiable algorithms', 'Perception', '3D scene understanding', 'Mobile robotics', 'Real-time systems', 'Safety-critical AI'],
},

{
  avatarBg: 'bg-gradient-to-br from-slate-500 to-blue-700',
  name: 'Dr. Bonassar',
  university: 'Cornell University',
  field: 'Biomedical Engineering',
  researchBullets: [
    'Engineering musculoskeletal tissues via biomaterials and biomechanics',
    'Cell-biomaterial interaction studies',
    'Design of functional implants and tissue repair strategies',
    'Mechanobiology applications in regenerative medicine'
  ],
  bestForStudents: [
    'Interest in tissue engineering and biomechanics',
    'Motivated by translational biomedical engineering research'
  ],
  keywords: ['Tissue engineering', 'Musculoskeletal regeneration', 'Biomechanics', 'Biomaterials', 'Cell-biomaterial interactions', 'Mechanobiology', 'Biomedical engineering', 'Tissue repair'],
},

{
  avatarBg: 'bg-gradient-to-br from-green-400 to-teal-600',
  name: 'Dr. Shivaun Archer',
  university: 'Cornell University',
  field: 'Biomedical Engineering',
  researchBullets: [
    'Hands-on biomedical engineering lab design',
    'Integration of nanobiotechnology, microfluidics, and tissue engineering',
    'Undergraduate education and research exposure',
    'Development of biosensors and drug delivery labs'
  ],
  bestForStudents: [
    'Interest in biomedical engineering education and lab-based research',
    'Motivated by applied research in nanobiotechnology and tissue engineering'
  ],
  keywords: ['Biomedical engineering', 'Nanobiotechnology', 'Tissue engineering', 'Microfluidics', 'Biosensors', 'Drug delivery', 'Undergraduate education', 'Hands-on labs'],
},

{
  avatarBg: 'bg-gradient-to-br from-indigo-500 to-purple-700',
  name: 'Dr. Arup K. Chakraborty',
  university: 'MIT',
  field: 'Chemistry',
  researchBullets: [
    'Theoretical and computational approaches to T cell dynamics',
    'Adaptive immunity and viral response modeling',
    'Vaccine and therapy design guidance',
    'Biophysical and computational immunology studies'
  ],
  bestForStudents: [
    'Interest in immunology, computational biology, or vaccine design',
    'Comfortable with theory-driven and computational research'
  ],
  keywords: ['Immunology', 'Adaptive immune system', 'T cell signaling', 'Vaccine design', 'Statistical physics', 'Virology', 'Cell membrane biophysics', 'Computational biology'],
},

{
  avatarBg: 'bg-gradient-to-br from-teal-400 to-green-600',
  name: 'Dr. Elizabeth Marie Nolan',
  university: 'MIT',
  field: 'Chemistry',
  researchBullets: [
    'Peptides, proteins, and metal ions in innate immunity',
    'Microbial behavior and host-pathogen interactions',
    'Investigation of infectious disease mechanisms',
    'Resistance mechanisms and microbial modulation'
  ],
  bestForStudents: [
    'Interest in microbiology, immunology, or chemical biology',
    'Comfortable with experimental research in host-pathogen interactions'
  ],
  keywords: ['Innate immunity', 'Host-pathogen interactions', 'Metal ions', 'Small molecules', 'Peptides', 'Proteins', 'Microbiology', 'Antibiotic resistance'],
},

{
  avatarBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
  name: 'Dr. Bradley L. Pentelute',
  university: 'MIT',
  field: 'Chemistry',
  researchBullets: [
    'Protein and peptide engineering for therapeutics',
    'Automated chemical synthesis and modification',
    'Drug delivery and bioconjugates',
    'Applications to cancer treatment and personalized medicine'
  ],
  bestForStudents: [
    'Interest in protein engineering, chemical biology, or therapeutics',
    'Motivated by experimental and automated synthesis research'
  ],
  keywords: ['Protein engineering', 'Peptide synthesis', 'Bioconjugates', 'Drug delivery', 'Chemical biology', 'Automated flow chemistry', 'Cell-penetrating peptides', 'Affinity selection-mass spectrometry'],
},
{
  avatarBg: 'bg-gradient-to-br from-sky-400 to-indigo-600',
  name: 'Dr. Alexander Fleischmann',
  university: 'Brown University',
  field: 'Neurology',
  researchBullets: [
    'Olfactory neural circuits in mouse brain',
    'Sensory information processing and behavior',
    'Molecular genetics, imaging, and computational approaches',
    'Electrophysiology and in vivo neural studies'
  ],
  bestForStudents: [
    'Interest in neuroscience and neural circuit analysis',
    'Comfortable with imaging, genetics, and computational methods'
  ],
  keywords: ['Neuroscience', 'Olfactory cortex', 'Neural circuits', 'Sensory perception', 'Behavioral neuroscience', 'In vivo imaging', 'Electrophysiology', 'Computational modeling'],
},

{
  avatarBg: 'bg-gradient-to-br from-purple-400 to-pink-600',
  name: 'Dr. Stephanie R. Jones',
  university: 'Brown University',
  field: 'Neurology',
  researchBullets: [
    'Human brain imaging to study neural circuit dynamics',
    'Computational modeling for health and disease analysis',
    'MEG, EEG, and brain stimulation techniques',
    'Informing therapeutic interventions'
  ],
  bestForStudents: [
    'Interest in computational neuroscience and neuroimaging',
    'Comfortable with brain imaging data and modeling approaches'
  ],
  keywords: ['Neuroscience', 'Computational modeling', 'Brain imaging', 'Neural circuits', 'MEG', 'EEG', 'Neurodynamics', 'Neuropathology', 'Brain stimulation'],
},

{
  avatarBg: 'bg-gradient-to-br from-indigo-400 to-purple-700',
  name: "Dr. Kate O'Connor-Giles",
  university: 'Brown University',
  field: 'Neurology',
  researchBullets: [
    'Synapse formation and neural plasticity',
    'Behavioral support via synaptic adaptation',
    'Genetics, electrophysiology, and imaging techniques',
    'Genome engineering tools for neuroscience'
  ],
  bestForStudents: [
    'Interest in neural development and synaptic plasticity',
    'Comfortable with experimental genetics and electrophysiology'
  ],
  keywords: ['Neuroscience', 'Synapse formation', 'Neural plasticity', 'Electrophysiology', 'Genetics', 'In vivo imaging', 'Genome engineering', 'Behavioral neuroscience'],
},

{
  avatarBg: 'bg-gradient-to-br from-cyan-400 to-blue-600',
  name: 'Dr. Arjun (Raj) Manrai',
  university: 'Harvard Medical School',
  field: 'Biomedical Engineering',
  researchBullets: [
    'Machine learning and statistical models in medicine',
    'Integrating genomic, biomarker, and clinical data',
    'Enhancing medical decision-making',
    'Addressing AI safety and reproducibility in healthcare'
  ],
  bestForStudents: [
    'Interest in biomedical informatics or AI in medicine',
    'Comfortable with statistical modeling and clinical data integration'
  ],
  keywords: ['Biomedical informatics', 'Machine learning', 'Clinical decision-making', 'Genomics', 'Biomarkers', 'AI in medicine', 'Population health', 'Reproducibility'],
},

{
  avatarBg: 'bg-gradient-to-br from-green-400 to-emerald-600',
  name: 'Dr. Chirag Patel',
  university: 'Harvard Medical School',
  field: 'Biomedical Engineering',
  researchBullets: [
    'Computational and bioinformatics analysis of high-throughput data',
    'Understanding human health variation and disease risk',
    'Integrating genomic, molecular, and environmental datasets',
    'Artificial intelligence methods for population health'
  ],
  bestForStudents: [
    'Interest in computational biology or biomedical informatics',
    'Comfortable with large-scale data analysis and genomics'
  ],
  keywords: ['Biomedical informatics', 'Computational biology', 'High-throughput data', 'Human phenomics', 'Genomics', 'Exposome', 'Clinical data integration', 'Artificial intelligence'],
},

{
  avatarBg: 'bg-gradient-to-br from-blue-400 to-indigo-600',
  name: 'Dr. Brandt F. Eichman',
  university: 'Vanderbilt University',
  field: 'Biology',
  researchBullets: [
    'Structure and function of DNA repair and replication enzymes',
    'Protein-DNA interaction studies',
    'Cryo-EM and X-ray crystallography techniques',
    'Genomic stability and biochemical mechanisms'
  ],
  bestForStudents: [
    'Interest in DNA repair, replication, or enzymology',
    'Comfortable with structural biology and biochemical methods'
  ],
  keywords: ['DNA repair', 'DNA replication', 'Protein-DNA interactions', 'Nucleic acid enzymes', 'Cryo-EM', 'X-ray crystallography', 'Genomic stability', 'Biochemistry'],
},

{
  avatarBg: 'bg-gradient-to-br from-green-400 to-lime-600',
  name: 'Dr. Daniel J. Funk',
  university: 'Vanderbilt University',
  field: 'Evolution',
  researchBullets: [
    'Ecological adaptation and speciation in herbivorous insects',
    'Population differentiation analysis',
    'Genetics, phylogenetics, and evolutionary biology methods',
    'Experimental field studies on ecological specialization'
  ],
  bestForStudents: [
    'Interest in evolutionary biology and ecology',
    'Comfortable with genetics, phylogenetics, and field research'
  ],
  keywords: ['Ecology', 'Speciation', 'Population differentiation', 'Herbivorous insects', 'Phylogenetics', 'Evolutionary biology', 'Ecological specialization', 'Experimental biology'],
},

{
  avatarBg: 'bg-gradient-to-br from-orange-400 to-red-600',
  name: 'Dr. Julián F. Hillyer',
  university: 'Vanderbilt University',
  field: 'Biology',
  researchBullets: [
    'Immune and circulatory systems of mosquitoes',
    'Responses to infection and disease transmission',
    'Molecular, cellular, and organismal approaches',
    'Influence of physiology on vector-borne disease'
  ],
  bestForStudents: [
    'Interest in immunology, entomology, or parasitology',
    'Comfortable with molecular and organismal experimental research'
  ],
  keywords: ['Immunology', 'Mosquito physiology', 'Circulatory biology', 'Entomology', 'Parasitology', 'Life history traits', 'Disease transmission', 'Experimental biology'],
},
{
  avatarBg: 'bg-gradient-to-br from-purple-400 to-indigo-700',
  name: 'Dr. Elias Bareinboim',
  university: 'Columbia University',
  field: 'Machine Learning',
  researchBullets: [
    'Causal inference in AI and data science',
    'Decision-making and fairness under bias',
    'Robust predictions and counterfactual reasoning',
    'Applications in machine learning and data-driven systems'
  ],
  bestForStudents: [
    'Interest in AI, causal inference, and data science',
    'Comfortable with mathematical reasoning and computational modeling'
  ],
  keywords: ['Causal inference', 'Artificial intelligence', 'Machine learning', 'Data science', 'Decision-making', 'Fairness', 'Robustness', 'Counterfactual reasoning'],
},

{
  avatarBg: 'bg-gradient-to-br from-teal-400 to-cyan-600',
  name: 'Dr. Soha Hassoun',
  university: 'Tufts University',
  field: 'Bioengineering',
  researchBullets: [
    'Machine learning for complex biological systems',
    'Systems biology and metabolic engineering integration',
    'Computational design of biological networks',
    'Synthetic biology and bioengineering applications'
  ],
  bestForStudents: [
    'Interest in bioengineering, computational biology, or synthetic biology',
    'Comfortable with ML modeling and systems-level analysis'
  ],
  keywords: ['Machine learning', 'Systems biology', 'Metabolic engineering', 'Computational biology', 'Design automation', 'Synthetic biology', 'Bioengineering', 'AI for biology'],
},

{
  avatarBg: 'bg-gradient-to-br from-indigo-400 to-purple-700',
  name: 'Dr. Robert Jacob',
  university: 'Tufts University',
  field: 'Computer Science',
  researchBullets: [
    'Human-computer interaction techniques',
    'Implicit brain-computer interface development',
    'Software and user interface design',
    'Innovative interaction modes and neurotechnology'
  ],
  bestForStudents: [
    'Interest in HCI or neurotechnology',
    'Comfortable with interface design and experimental interaction research'
  ],
  keywords: ['Human-computer interaction', 'Brain-computer interfaces', 'User interface software', 'Interaction techniques', 'HCI', 'Neurotechnology', 'User experience', 'Interface design'],
},

{
  avatarBg: 'bg-gradient-to-br from-emerald-500 to-teal-700',
  name: 'Dr. Russell Tedrake',
  university: 'MIT',
  field: 'Robotics',
  researchBullets: [
    'Control strategies for complex robotic systems',
    'Combining dynamics, optimization, and machine learning',
    'Robust manipulation and movement in real-world environments',
    'Mathematically grounded robotic design'
  ],
  bestForStudents: [
    'Interest in robotics, control systems, or applied machine learning',
    'Comfortable with optimization, dynamics, and systems modeling'
  ],
  keywords: ['Robotics', 'Control systems', 'Machine learning', 'Dynamical systems', 'Optimization', 'Robotic manipulation', 'Systems theory', 'Autonomous systems'],
},

{
  avatarBg: 'bg-gradient-to-br from-indigo-500 to-purple-700',
  name: 'Dr. Alireza Soltani',
  university: 'Dartmouth College',
  field: 'Neurology',
  researchBullets: [
    'Flexible decision-making and learning in the brain',
    'Neural process modeling across synaptic, cellular, and network levels',
    'Linking neural dynamics to human behavior',
    'Computational and behavioral neuroscience integration'
  ],
  bestForStudents: [
    'Interest in computational or cognitive neuroscience',
    'Comfortable with neural modeling and behavioral analysis'
  ],
  keywords: ['Computational neuroscience', 'Cognitive neuroscience', 'Decision-making', 'Learning', 'Neural modeling', 'Behavioral modeling', 'Psychophysics', 'Adaptive behavior'],
},

{
  avatarBg: 'bg-gradient-to-br from-rose-500 to-red-700',
  name: 'Dr. Bing He',
  university: 'Dartmouth College',
  field: 'Biology',
  researchBullets: [
    'Tissue and organ morphogenesis',
    'Cell-level shape changes and mechanical forces',
    'Developmental structure coordination',
    'Quantitative biology and live imaging approaches'
  ],
  bestForStudents: [
    'Interest in developmental or cell biology',
    'Comfortable with genetics, biophysics, and imaging experiments'
  ],
  keywords: ['Cell biology', 'Developmental biology', 'Tissue morphogenesis', 'Biophysics', 'Genetics', 'Mechanical forces', 'Quantitative biology', 'Live imaging'],
},

{
  avatarBg: 'bg-gradient-to-br from-indigo-500 to-purple-700',
  name: 'Dr. Elizabeth F. Smith',
  university: 'Dartmouth College',
  field: 'Biology',
  researchBullets: [
    'Cell and developmental biology',
    'Genetics underlying cellular processes',
    'Tissue development and disease mechanisms',
    'Mechanistic studies of development and biomedical applications'
  ],
  bestForStudents: [
    'Interest in cell biology or developmental genetics',
    'Comfortable with experimental biology and tissue research'
  ],
  keywords: ['Cell biology', 'Developmental biology', 'Genetics', 'Molecular biology', 'Tissue development', 'Biomedical research', 'Cancer biology', 'Developmental genetics'],
},

{
  avatarBg: 'bg-gradient-to-br from-red-500 to-pink-700',
  name: 'Dr. Haiyan Gao',
  university: 'Duke University',
  field: 'Physics',
  researchBullets: [
    'Internal nucleon structure and QCD dynamics',
    'Polarized scattering and precision measurements',
    'Proton spin and charge radii investigations',
    'Exploring physics beyond the Standard Model'
  ],
  bestForStudents: [
    'Interest in nuclear or particle physics',
    'Comfortable with experimental physics and advanced measurement techniques'
  ],
  keywords: ['Quantum Chromodynamics', 'Nucleon structure', 'Proton spin', 'Transverse momentum distributions', 'Polarized scattering', 'Experimental nuclear physics', 'New physics searches', 'Particle tomography'],
},

{
  avatarBg: 'bg-gradient-to-br from-indigo-500 to-purple-700',
  name: 'Dr. Steven Malcolmson',
  university: 'Duke University',
  field: 'Chemistry',
  researchBullets: [
    'Novel catalytic methods for small molecule synthesis',
    'Selective and efficient organic chemistry strategies',
    'Designing catalysts for bond formation',
    'Synthesis of biologically active compounds'
  ],
  bestForStudents: [
    'Interest in synthetic or catalytic chemistry',
    'Comfortable with lab-based organic synthesis research'
  ],
  keywords: ['Catalysis', 'Synthetic chemistry', 'Small molecule synthesis', 'Enantioselectivity', 'Site-selectivity', 'Chemical bond formation', 'Organic chemistry', 'Biologically active molecules'],
},

{
  avatarBg: 'bg-gradient-to-br from-rose-500 to-pink-700',
  name: 'Dr. Ivan A. Moreno-Hernandez',
  university: 'Duke University',
  field: 'Chemistry',
  researchBullets: [
    'Structural dynamics of electrochemical materials',
    'Liquid cell TEM and nanoscale characterization',
    'Renewable energy applications',
    'Materials synthesis and property analysis at nanoscale'
  ],
  bestForStudents: [
    'Interest in materials science, electrochemistry, or nanotechnology',
    'Comfortable with microscopy and nanoscale experimental work'
  ],
  keywords: ['Electrochemistry', 'Materials science', 'Liquid cell TEM', 'Nanostructures', 'Renewable energy', 'Materials synthesis', 'Nanoscale characterization', 'Sustainable technologies'],
},

{
  avatarBg: 'bg-gradient-to-br from-indigo-500 to-purple-700',
  name: 'Dr. Michael J. Therien',
  university: 'Duke University',
  field: 'Chemistry',
  researchBullets: [
    'Molecules, supramolecular assemblies, and nanoscale materials',
    'Electronic and photophysical properties analysis',
    'Spectroscopy and electrochemical techniques',
    'Energy conversion, spintronics, and imaging applications'
  ],
  bestForStudents: [
    'Interest in physical, inorganic, or nanochemistry',
    'Comfortable with spectroscopy and electrochemical methods'
  ],
  keywords: ['Physical chemistry', 'Inorganic chemistry', 'Organic chemistry', 'Spectroscopy', 'Photophysics', 'Spintronics', 'Nanoscale materials', 'Energy conversion'],
},

{
  avatarBg: 'bg-gradient-to-br from-pink-500 to-red-700',
  name: 'Dr. Shruti Agashe',
  university: 'Duke University',
  field: 'Neurology',
  researchBullets: [
    'Neuromodulation approaches in epilepsy',
    'Deep brain and responsive neurostimulation',
    'Machine learning analysis of EEG data',
    'Biomarker identification and therapeutic device development'
  ],
  bestForStudents: [
    'Interest in neurology or neuroengineering',
    'Comfortable with EEG data and computational neuroscience tools'
  ],
  keywords: ['Neurology', 'Epilepsy', 'Neuromodulation', 'Deep brain stimulation', 'Responsive neurostimulation', 'Machine learning', 'Biomarkers', 'EEG analysis'],
},

{
  avatarBg: 'bg-gradient-to-br from-purple-500 to-indigo-700',
  name: 'Dr. Gaurav Arya',
  university: 'Duke University',
  field: 'Biology',
  researchBullets: [
    'Physics-based molecular modeling of biological systems',
    'Genome organization and polymer-nanoparticle composites',
    'Viral DNA packaging and DNA nanotechnology',
    'Integration of machine learning and statistical mechanics'
  ],
  bestForStudents: [
    'Interest in computational biology, biophysics, or DNA nanotechnology',
    'Comfortable with modeling and simulation approaches'
  ],
  keywords: ['Molecular modeling', 'Statistical mechanics', 'Machine learning', 'Polymer physics', 'Colloidal physics', 'DNA nanotechnology', 'Viral DNA packaging', 'Single-molecule biophysics'],
},

{
  avatarBg: 'bg-gradient-to-br from-pink-500 to-rose-700',
  name: 'Dr. Alexandra Badea',
  university: 'Duke University',
  field: 'Neurology',
  researchBullets: [
    'Advanced MRI and computational imaging for brain structure',
    'Connectivity and multivariate biomarkers in neurological conditions',
    'Integration of imaging, genetics, and behavioral data',
    'Phenotyping in Alzheimer’s and related diseases'
  ],
  bestForStudents: [
    'Interest in biomedical imaging or neurological research',
    'Comfortable with MRI, computational analysis, and data integration'
  ],
  keywords: ['Biomedical imaging', 'MRI', 'Diffusion tensor imaging', 'Brain connectivity', 'Neurological conditions', 'Alzheimer’s disease', 'Image analysis', 'Multivariate biomarkers'],
},

{
  avatarBg: 'bg-gradient-to-br from-orange-400 to-red-600',
  name: 'Dr. Arash Adel',
  university: 'Princeton University',
  field: 'Robotics',
  researchBullets: [
    'Human-robot collaboration in architecture and construction',
    'Computational design and additive manufacturing integration',
    'Robotic assembly for sustainable and resilient buildings',
    'Innovative construction and STEM applications'
  ],
  bestForStudents: [
    'Interest in robotics, human-robot interaction, or computational design',
    'Comfortable with applied engineering and automation research'
  ],
  keywords: ['Human-robot collaboration', 'Construction robotics', 'Computational design', 'Additive manufacturing', 'Automated building assembly', 'Timber structures', 'Extended reality', 'STEM education'],
},

{
  avatarBg: 'bg-gradient-to-br from-blue-500 to-indigo-700',
  name: 'Dr. Amir Ali Ahmadi',
  university: 'Princeton University',
  field: 'Engineering',
  researchBullets: [
    'Optimization and quantitative decision-making methods',
    'Operations research in engineering and finance',
    'Machine learning and computational systems applications',
    'Mathematical modeling for high-impact problems'
  ],
  bestForStudents: [
    'Interest in optimization, applied math, or operations research',
    'Comfortable with quantitative modeling and computational problem-solving'
  ],
  keywords: ['Optimization', 'Quantitative decision science', 'Operations research', 'Machine learning', 'Financial engineering', 'Computational systems', 'Mathematical modeling', 'Applied algorithms'],
},

{
  avatarBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
  name: 'Dr. Danqi Chen',
  university: 'Princeton University',
  field: 'Computer Science',
  researchBullets: [
    'Deep learning for natural language processing',
    'Knowledge representation and reasoning systems',
    'Applications in question answering and information extraction',
    'Conversational AI systems development'
  ],
  bestForStudents: [
    'Interest in NLP, deep learning, or AI systems',
    'Comfortable with ML models and computational linguistics'
  ],
  keywords: ['Machine learning', 'Natural language processing', 'Deep learning', 'Knowledge representation', 'Reasoning', 'Question answering', 'Information extraction', 'Conversational AI'],
},

{
  avatarBg: 'bg-gradient-to-br from-indigo-500 to-purple-700',
  name: 'Dr. Jaime Fernández Fisac',
  university: 'Princeton University',
  field: 'Robotics',
  researchBullets: [
    'Safe and trustworthy robotic and AI systems',
    'Control theory and reinforcement learning integration',
    'Human-robot interaction with theoretical guarantees',
    'Game-theoretic reasoning for autonomous systems'
  ],
  bestForStudents: [
    'Interest in robotics, AI safety, or control systems',
    'Comfortable with theoretical modeling and reinforcement learning'
  ],
  keywords: ['Robotics', 'AI safety', 'Control systems', 'Safe reinforcement learning', 'Human-robot interaction', 'Game theory', 'Autonomous systems', 'Safety-critical AI'],
},

{
  avatarBg: 'bg-gradient-to-br from-green-500 to-lime-700',
  name: 'Dr. Gill Bejerano',
  university: 'Stanford University',
  field: 'Computer Science',
  researchBullets: [
    'Computational and experimental genomics integration',
    'Patient genome analysis and healthcare decision-making',
    'Machine learning for genomics and bioinformatics',
    'Cryptogenomics and patient risk management applications'
  ],
  bestForStudents: [
    'Interest in computational genomics or bioinformatics',
    'Comfortable with ML models and patient genomic data analysis'
  ],
  keywords: ['Genomics', 'Computational biology', 'Machine learning', 'Cryptogenomics', 'Healthcare analytics', 'Patient risk management', 'Bioinformatics', 'Medical data analysis'],
},
{
  avatarBg: 'bg-gradient-to-br from-blue-500 to-indigo-700',
  name: 'Dr. Moses Charikar',
  university: 'Stanford University',
  field: 'Computer Science',
  researchBullets: [
    'Efficient algorithms and approximation techniques',
    'High-dimensional data processing and combinatorial optimization',
    'Machine learning applications with provable guarantees',
    'Data search, embeddings, and convex/non-convex optimization'
  ],
  bestForStudents: [
    'Interest in algorithms, optimization, or high-dimensional ML',
    'Comfortable with theoretical computer science and computational reasoning'
  ],
  keywords: ['Algorithms', 'High-dimensional data', 'Approximation algorithms', 'Optimization', 'Machine learning', 'Metric embeddings', 'Convex optimization', 'Discrete optimization']
},
{
  avatarBg: 'bg-gradient-to-br from-green-500 to-emerald-700',
  name: 'Dr. Stefano Ermon',
  university: 'Stanford University',
  field: 'Machine Learning',
  researchBullets: [
    'Scalable algorithms for inference and statistical modeling',
    'Combinatorial optimization and robust decision-making under uncertainty',
    'Applications in computational sustainability',
    'Large-scale data-driven systems'
  ],
  bestForStudents: [
    'Interest in ML, AI, or computational optimization',
    'Comfortable with probabilistic modeling and large-scale data'
  ],
  keywords: ['Artificial intelligence', 'Graphical models', 'Statistical modeling', 'Combinatorial optimization', 'Decision-making under uncertainty', 'Computational sustainability', 'Scalable algorithms', 'Machine learning']
},
{
  avatarBg: 'bg-gradient-to-br from-amber-500 to-lime-700',
  name: 'Dr. Rodolfo Dirzo',
  university: 'Stanford University',
  field: 'Evolution',
  researchBullets: [
    'Animal population impacts on tropical ecosystems',
    'Species interactions and biodiversity loss',
    'Ecosystem functioning and conservation',
    'Environmental justice and human well-being'
  ],
  bestForStudents: [
    'Interest in ecology, conservation biology, or environmental science',
    'Comfortable with field studies and biodiversity research'
  ],
  keywords: ['Ecology', 'Tropical ecosystems', 'Biodiversity loss', 'Species interactions', 'Defaunation', 'Conservation biology', 'Ecosystem services', 'Environmental justice']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
  name: 'Dr. Monther Abu-Remaileh',
  university: 'Stanford University',
  field: 'Engineering',
  researchBullets: [
    'Cellular adaptation to metabolic stress',
    'Lysosomal signaling pathways in health and disease',
    'Mechanisms driving cancer, neurodegeneration, and metabolic syndrome',
    'Engineering novel therapeutic strategies'
  ],
  bestForStudents: [
    'Interest in cell biology, metabolic engineering, or bioengineering',
    'Comfortable with molecular biology and translational research'
  ],
  keywords: ['Lysosome biology', 'Metabolic stress', 'Cellular adaptation', 'Cancer biology', 'Neurodegeneration', 'Metabolomics', 'Proteomics', 'Functional genomics', 'Therapeutic engineering']
},
{
  avatarBg: 'bg-gradient-to-br from-sky-600 to-blue-900',
  name: 'Dr. Juan Alonso',
  university: 'Stanford University',
  field: 'Astronomy',
  researchBullets: [
    'High-fidelity computational aerospace design',
    'Multidisciplinary optimization methodologies',
    'Aircraft, spacecraft, and unmanned systems design',
    'Transonic, supersonic, and hypersonic applications'
  ],
  bestForStudents: [
    'Interest in aerospace engineering or computational design',
    'Comfortable with numerical methods and optimization modeling'
  ],
  keywords: ['Computational aerospace design', 'Multidisciplinary optimization', 'High-performance computing', 'Numerical methods', 'Aircraft and spacecraft design', 'Hypersonics', 'Sustainable aviation', 'Unmanned aerial systems']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-purple-900',
  name: 'Dr. Russ B. Altman',
  university: 'Stanford University',
  field: 'Machine Learning',
  researchBullets: [
    'AI and data science for drug action and response modeling',
    'Pharmacogenomics and precision medicine',
    'Biomedical informatics across molecular to population scales',
    'Drug safety and computational biology applications'
  ],
  bestForStudents: [
    'Interest in computational biology, AI in medicine, or biomedical data science',
    'Comfortable with modeling and analysis of biological and clinical data'
  ],
  keywords: ['Artificial intelligence in medicine', 'Biomedical data science', 'Pharmacogenomics', 'Drug response modeling', 'Clinical informatics', 'Precision medicine', 'Computational biology', 'Regulatory science']
},
{
  avatarBg: 'bg-gradient-to-br from-emerald-600 to-teal-900',
  name: 'Dr. Eric A. Appel',
  university: 'Stanford University',
  field: 'Bioengineering',
  researchBullets: [
    'Designing biomimetic and stimuli-responsive polymeric materials',
    'Applications in drug delivery, tissue engineering, and immunoengineering',
    'Probing biological systems using advanced materials',
    'Next-generation therapeutic technologies'
  ],
  bestForStudents: [
    'Interest in biomaterials, polymer science, or bioengineering',
    'Comfortable with lab-based materials and translational research'
  ],
  keywords: ['Biomaterials', 'Polymer science', 'Supramolecular chemistry', 'Stimuli-responsive materials', 'Drug delivery systems', 'Tissue engineering', 'Immunoengineering', 'Translational healthcare materials']
},
{
  avatarBg: 'bg-gradient-to-br from-rose-600 to-orange-900',
  name: 'Dr. Zhenan Bao',
  university: 'Stanford University',
  field: 'Engineering',
  researchBullets: [
    'Molecular design and soft electronic materials',
    'Skin-inspired, flexible, and self-healing electronics',
    'Wearable and implantable devices for health monitoring',
    'Soft robotics and neuromorphic interfaces'
  ],
  bestForStudents: [
    'Interest in soft robotics, bioelectronics, or materials engineering',
    'Comfortable with device design and applied materials research'
  ],
  keywords: ['Soft electronics', 'Skin-inspired electronics', 'Conjugated polymers', 'Flexible and wearable devices', 'Neuromorphic interfaces', 'Implantable bioelectronics', 'Soft robotics', 'Precision health technologies']
},
{
  avatarBg: 'bg-gradient-to-br from-sky-600 to-indigo-900',
  name: 'Dr. Stacey F. Bent',
  university: 'Stanford University',
  field: 'Engineering',
  researchBullets: [
    'Surface and interface chemistry at molecular scale',
    'Controlled material growth and functionality',
    'Applications in semiconductor fabrication and nanoelectronics',
    'Renewable energy technologies such as photovoltaics and catalysis'
  ],
  bestForStudents: [
    'Interest in surface chemistry, nanoengineering, or energy materials',
    'Comfortable with experimental and materials science research'
  ],
  keywords: ['Surface chemistry', 'Interfacial engineering', 'Atomic layer deposition', 'Molecular layer deposition', 'Semiconductor processing', 'Nanoelectronics', 'Photovoltaic interfaces', 'Electrocatalysis']
},
{
  avatarBg: 'bg-gradient-to-br from-amber-600 to-fuchsia-900',
  name: 'Dr. Joanna Aizenberg',
  university: 'Harvard University',
  field: 'Bioengineering',
  researchBullets: [
    'Bio-inspired materials and adaptive structures',
    'Nanofabrication and self-assembly strategies',
    'Translating biological efficiency into engineered systems',
    'Applications across medicine, energy, architecture, and devices'
  ],
  bestForStudents: [
    'Interest in bio-inspired engineering, materials science, or nanotechnology',
    'Comfortable with experimental design and translational research'
  ],
  keywords: ['Bio-inspired materials', 'Adaptive materials', 'Biomineralization', 'Self-assembly', 'Bio-inspired optics', 'Nanofabrication', 'Surface science', 'Bio-nano interfaces']
},
{
  avatarBg: 'bg-gradient-to-br from-green-600 to-teal-900',
  name: 'Dr. Walter J. Atwood',
  university: 'Brown University',
  field: 'Biology',
  researchBullets: [
    'Studies human polyomaviruses like JCPyV and BKPyV',
    'Mechanisms of viral persistence and reactivation',
    'Tissue targeting and early disease biomarkers',
    'Developing therapies for virus-induced conditions like PML and transplant nephropathy'
  ],
  bestForStudents: [
    'Interest in virology, molecular biology, or infectious diseases',
    'Comfortable with cell biology and translational research'
  ],
  keywords: ['Human polyomaviruses', 'Viral persistence', 'Virus reactivation', 'Disease biomarkers', 'Neurological infections', 'Kidney transplant virology', 'Virus-host interactions', 'Therapeutic strategies']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-indigo-900',
  name: 'Dr. Sergej Djuranovic',
  university: 'Brown University',
  field: 'Biology',
  researchBullets: [
    'mRNA sequence motifs and RNA-binding proteins in gene expression',
    'Ribonucleoprotein complex regulation of translation',
    'Mechanisms of mRNA decay and RNA metabolism',
    'Applications in RNA-targeted therapeutics and experimental tools'
  ],
  bestForStudents: [
    'Interest in RNA biology, molecular biology, or translational research',
    'Comfortable with biochemistry, biophysics, and high-throughput genomics'
  ],
  keywords: ['mRNA regulation', 'RNA-binding proteins', 'Translational efficiency', 'Ribonucleoprotein complexes', 'miRNA-mediated gene regulation', 'CryoEM of translation complexes', 'mRNA surveillance', 'RNA-targeted therapeutics']
},
{
  avatarBg: 'bg-gradient-to-br from-red-600 to-pink-900',
  name: 'Dr. Richard N. Freiman',
  university: 'Boston University',
  field: 'Biology',
  researchBullets: [
    'Molecular mechanisms controlling tissue- and cell-specific gene expression',
    'Transcriptional regulators and chromatin remodeling complexes',
    'Applications in reproductive biology and infertility',
    'Research on ovarian cancer pathways'
  ],
  bestForStudents: [
    'Interest in molecular biology, developmental biology, or genetics',
    'Comfortable with transcriptional regulation and chromatin biology research'
  ],
  keywords: ['Transcriptional regulation', 'TFIID complex', 'Chromatin remodeling', 'Tissue-specific gene expression', 'Mouse developmental models', 'Reproductive biology', 'Infertility mechanisms', 'Ovarian cancer pathways']
},
{
  avatarBg: 'bg-gradient-to-br from-teal-600 to-cyan-900',
  name: 'Dr. Amit Basu',
  university: 'Brown University',
  field: 'Chemistry',
  researchBullets: [
    'Molecular recognition mediated by carbohydrates on cell surfaces',
    'Integration of chemistry, biology, and materials science',
    'Development of synthetic polymers and nanomaterials',
    'Designing sensors and diagnostic tools with biomedical applications'
  ],
  bestForStudents: [
    'Interest in glycobiology, chemical biology, or materials science',
    'Comfortable with interdisciplinary lab-based research'
  ],
  keywords: ['Glycobiology', 'Molecular recognition', 'Carbohydrate chemistry', 'Polymers', 'Nanomaterials', 'Synthetic organic chemistry', 'Interfacial recognition', 'Biophysical chemistry']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-purple-900',
  name: 'Dr. Vincent Mor',
  university: 'Brown University',
  field: 'Biology',
  researchBullets: [
    'Organizational and policy impacts on health services',
    'Healthcare outcomes for frail and chronically ill populations',
    'Large-scale data analyses and embedded clinical trials',
    'Improving nursing home care, hospitalization, and long-term care quality'
  ],
  bestForStudents: [
    'Interest in public health, health policy, or healthcare research',
    'Comfortable with clinical data analysis and applied healthcare studies'
  ],
  keywords: ['Health services research', 'Long-term care quality', 'Nursing home outcomes', 'Healthcare policy analysis', 'Hospitalization determinants', 'Medicare and aging policies', 'Program evaluation', 'Embedded clinical trials']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-600 to-purple-900',
  name: 'Dr. Matthew Coley-O\'Rourke',
  university: 'Brown University',
  field: 'Chemistry',
  researchBullets: [
    'Theoretical and computational methods for entangled quantum systems',
    'Prediction of behavior in materials and molecular assemblies',
    'Applications in quantum computing and quantum materials design',
    'Optimization of coherence and phase transitions in nanoscale systems'
  ],
  bestForStudents: [
    'Interest in quantum chemistry, condensed matter, or computational chemistry',
    'Comfortable with theoretical modeling and simulation techniques'
  ],
  keywords: ['Quantum materials', 'Quantum entanglement', 'Electronic structure theory', 'Ab initio simulation', 'Tensor networks', 'Stochastic methods', 'Quantum computing', 'Condensed matter theory']
},
{
  avatarBg: 'bg-gradient-to-br from-pink-600 to-rose-900',
  name: 'Dr. Amy S. Nunn',
  university: 'Brown University',
  field: 'Biology',
  researchBullets: [
    'Applied public health research and programs for health equity',
    'Focus on HIV/AIDS, LGBTQ+ health, and nutrition policy',
    'Community-based interventions to improve health outcomes',
    'Innovative partnerships and advocacy in public health'
  ],
  bestForStudents: [
    'Interest in public health, epidemiology, or social sciences',
    'Comfortable with community research and health equity studies'
  ],
  keywords: ['Public health', 'Health equity', 'HIV/AIDS prevention', 'Community-based interventions', 'LGBTQ+ health', 'Nutrition policy', 'Health advocacy', 'Global health policy']
},
{
  avatarBg: 'bg-gradient-to-br from-emerald-600 to-green-900',
  name: 'Dr. Pradeep R. Guduru',
  university: 'Brown University',
  field: 'Engineering',
  researchBullets: [
    'Mechanics of soft, heterogeneous, and small-scale materials',
    'Adhesion, friction, and coupled chemistry-mechanics phenomena',
    'Applications in batteries, fuel cells, and energetic materials',
    'Combining experimental techniques with analytical modeling'
  ],
  bestForStudents: [
    'Interest in materials science, mechanical engineering, or energy materials',
    'Comfortable with lab experiments and mechanics modeling'
  ],
  keywords: ['Mechanics of materials', 'Adhesion and friction', 'Coupled chemistry-mechanics', 'Electrochemical energy storage', 'Fuel cell catalysis', 'Heterogeneous materials', 'Experimental instrumentation', 'Meso-scale materials design']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-blue-900',
  name: 'Dr. Lai-Sheng Wang',
  university: 'Brown University',
  field: 'Chemistry',
  researchBullets: [
    'Atomic and molecular nanoclusters research',
    'Size- and shape-dependent structural and electronic properties',
    'Techniques: photoelectron spectroscopy, cryogenic ion trapping, computational methods',
    'Applications in catalysis, nanomaterials design, and novel molecular structures'
  ],
  bestForStudents: [
    'Interest in physical chemistry, nanomaterials, or spectroscopy',
    'Comfortable with experimental and computational chemistry methods'
  ],
  keywords: ['Nanoclusters', 'Experimental physical chemistry', 'Photoelectron spectroscopy', 'Cryogenic ion traps', 'Electrospray ionization', 'Boron and metal clusters', 'Multiply-charged anions', 'Nanomaterials synthesis']
},
{
  avatarBg: 'bg-gradient-to-br from-yellow-600 to-orange-900',
  name: 'Dr. Ming Xian',
  university: 'Brown University',
  field: 'Chemistry',
  researchBullets: [
    'Reactive sulfur-based signaling molecules in biology',
    'Chemical tools, sensors, and synthetic methodologies',
    'Probing physiological and pathological processes',
    'Training students in organic synthesis and bioorganic chemistry techniques'
  ],
  bestForStudents: [
    'Interest in chemical biology, organic synthesis, or molecular biology',
    'Comfortable with lab work and experimental design'
  ],
  keywords: ['Chemical biology', 'Sulfur signaling molecules', 'Hydrogen sulfide', 'Persulfides', 'S-nitrosothiols', 'Bio-orthogonal chemistry', 'Fluorescent sensors', 'Synthetic methodology']
},
{
  avatarBg: 'bg-gradient-to-br from-green-600 to-teal-900',
  name: 'Dr. Walter J. Atwood',
  university: 'Brown University',
  field: 'Biology',
  researchBullets: [
    'Studies human polyomaviruses like JCPyV and BKPyV',
    'Mechanisms of viral persistence and reactivation',
    'Tissue targeting and early disease biomarkers',
    'Developing therapies for virus-induced conditions like PML and transplant nephropathy'
  ],
  bestForStudents: [
    'Interest in virology, molecular biology, or infectious diseases',
    'Comfortable with cell biology and translational research'
  ],
  keywords: ['Human polyomaviruses', 'Viral persistence', 'Virus reactivation', 'Disease biomarkers', 'Neurological infections', 'Kidney transplant virology', 'Virus-host interactions', 'Therapeutic strategies']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-indigo-900',
  name: 'Dr. Sergej Djuranovic',
  university: 'Brown University',
  field: 'Biology',
  researchBullets: [
    'mRNA sequence motifs and RNA-binding proteins in gene expression',
    'Ribonucleoprotein complex regulation of translation',
    'Mechanisms of mRNA decay and RNA metabolism',
    'Applications in RNA-targeted therapeutics and experimental tools'
  ],
  bestForStudents: [
    'Interest in RNA biology, molecular biology, or translational research',
    'Comfortable with biochemistry, biophysics, and high-throughput genomics'
  ],
  keywords: ['mRNA regulation', 'RNA-binding proteins', 'Translational efficiency', 'Ribonucleoprotein complexes', 'miRNA-mediated gene regulation', 'CryoEM of translation complexes', 'mRNA surveillance', 'RNA-targeted therapeutics']
},
{
  avatarBg: 'bg-gradient-to-br from-red-600 to-pink-900',
  name: 'Dr. Richard N. Freiman',
  university: 'Boston University',
  field: 'Biology',
  researchBullets: [
    'Molecular mechanisms controlling tissue- and cell-specific gene expression',
    'Transcriptional regulators and chromatin remodeling complexes',
    'Applications in reproductive biology and infertility',
    'Research on ovarian cancer pathways'
  ],
  bestForStudents: [
    'Interest in molecular biology, developmental biology, or genetics',
    'Comfortable with transcriptional regulation and chromatin biology research'
  ],
  keywords: ['Transcriptional regulation', 'TFIID complex', 'Chromatin remodeling', 'Tissue-specific gene expression', 'Mouse developmental models', 'Reproductive biology', 'Infertility mechanisms', 'Ovarian cancer pathways']
},
{
  avatarBg: 'bg-gradient-to-br from-teal-600 to-cyan-900',
  name: 'Dr. Amit Basu',
  university: 'Brown University',
  field: 'Chemistry',
  researchBullets: [
    'Molecular recognition mediated by carbohydrates on cell surfaces',
    'Integration of chemistry, biology, and materials science',
    'Development of synthetic polymers and nanomaterials',
    'Designing sensors and diagnostic tools with biomedical applications'
  ],
  bestForStudents: [
    'Interest in glycobiology, chemical biology, or materials science',
    'Comfortable with interdisciplinary lab-based research'
  ],
  keywords: ['Glycobiology', 'Molecular recognition', 'Carbohydrate chemistry', 'Polymers', 'Nanomaterials', 'Synthetic organic chemistry', 'Interfacial recognition', 'Biophysical chemistry']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-purple-900',
  name: 'Dr. Vincent Mor',
  university: 'Brown University',
  field: 'Biology',
  researchBullets: [
    'Organizational and policy impacts on health services',
    'Healthcare outcomes for frail and chronically ill populations',
    'Large-scale data analyses and embedded clinical trials',
    'Improving nursing home care, hospitalization, and long-term care quality'
  ],
  bestForStudents: [
    'Interest in public health, health policy, or healthcare research',
    'Comfortable with clinical data analysis and applied healthcare studies'
  ],
  keywords: ['Health services research', 'Long-term care quality', 'Nursing home outcomes', 'Healthcare policy analysis', 'Hospitalization determinants', 'Medicare and aging policies', 'Program evaluation', 'Embedded clinical trials']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-600 to-purple-900',
  name: 'Dr. Matthew Coley-O\'Rourke',
  university: 'Brown University',
  field: 'Chemistry',
  researchBullets: [
    'Theoretical and computational methods for entangled quantum systems',
    'Prediction of behavior in materials and molecular assemblies',
    'Applications in quantum computing and quantum materials design',
    'Optimization of coherence and phase transitions in nanoscale systems'
  ],
  bestForStudents: [
    'Interest in quantum chemistry, condensed matter, or computational chemistry',
    'Comfortable with theoretical modeling and simulation techniques'
  ],
  keywords: ['Quantum materials', 'Quantum entanglement', 'Electronic structure theory', 'Ab initio simulation', 'Tensor networks', 'Stochastic methods', 'Quantum computing', 'Condensed matter theory']
},
{
  avatarBg: 'bg-gradient-to-br from-pink-600 to-rose-900',
  name: 'Dr. Amy S. Nunn',
  university: 'Brown University',
  field: 'Biology',
  researchBullets: [
    'Applied public health research and programs for health equity',
    'Focus on HIV/AIDS, LGBTQ+ health, and nutrition policy',
    'Community-based interventions to improve health outcomes',
    'Innovative partnerships and advocacy in public health'
  ],
  bestForStudents: [
    'Interest in public health, epidemiology, or social sciences',
    'Comfortable with community research and health equity studies'
  ],
  keywords: ['Public health', 'Health equity', 'HIV/AIDS prevention', 'Community-based interventions', 'LGBTQ+ health', 'Nutrition policy', 'Health advocacy', 'Global health policy']
},
{
  avatarBg: 'bg-gradient-to-br from-emerald-600 to-green-900',
  name: 'Dr. Pradeep R. Guduru',
  university: 'Brown University',
  field: 'Engineering',
  researchBullets: [
    'Mechanics of soft, heterogeneous, and small-scale materials',
    'Adhesion, friction, and coupled chemistry-mechanics phenomena',
    'Applications in batteries, fuel cells, and energetic materials',
    'Combining experimental techniques with analytical modeling'
  ],
  bestForStudents: [
    'Interest in materials science, mechanical engineering, or energy materials',
    'Comfortable with lab experiments and mechanics modeling'
  ],
  keywords: ['Mechanics of materials', 'Adhesion and friction', 'Coupled chemistry-mechanics', 'Electrochemical energy storage', 'Fuel cell catalysis', 'Heterogeneous materials', 'Experimental instrumentation', 'Meso-scale materials design']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-blue-900',
  name: 'Dr. Lai-Sheng Wang',
  university: 'Brown University',
  field: 'Chemistry',
  researchBullets: [
    'Atomic and molecular nanoclusters research',
    'Size- and shape-dependent structural and electronic properties',
    'Techniques: photoelectron spectroscopy, cryogenic ion trapping, computational methods',
    'Applications in catalysis, nanomaterials design, and novel molecular structures'
  ],
  bestForStudents: [
    'Interest in physical chemistry, nanomaterials, or spectroscopy',
    'Comfortable with experimental and computational chemistry methods'
  ],
  keywords: ['Nanoclusters', 'Experimental physical chemistry', 'Photoelectron spectroscopy', 'Cryogenic ion traps', 'Electrospray ionization', 'Boron and metal clusters', 'Multiply-charged anions', 'Nanomaterials synthesis']
},
{
  avatarBg: 'bg-gradient-to-br from-yellow-600 to-orange-900',
  name: 'Dr. Ming Xian',
  university: 'Brown University',
  field: 'Chemistry',
  researchBullets: [
    'Reactive sulfur-based signaling molecules in biology',
    'Chemical tools, sensors, and synthetic methodologies',
    'Probing physiological and pathological processes',
    'Training students in organic synthesis and bioorganic chemistry techniques'
  ],
  bestForStudents: [
    'Interest in chemical biology, organic synthesis, or molecular biology',
    'Comfortable with lab work and experimental design'
  ],
  keywords: ['Chemical biology', 'Sulfur signaling molecules', 'Hydrogen sulfide', 'Persulfides', 'S-nitrosothiols', 'Bio-orthogonal chemistry', 'Fluorescent sensors', 'Synthetic methodology']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-900',
  name: 'Dr. Emily Sprague-Klein',
  university: 'Brown University',
  field: 'Chemistry',
  researchBullets: [
    'Photochemistry and excited-state dynamics of soft nanomaterials',
    'Light-driven reactions including CO2 reduction and water-splitting',
    'Advanced optical and vibrational spectroscopy techniques',
    'Applications in catalysis, energy conversion, and nanomedicine'
  ],
  bestForStudents: [
    'Interest in photochemistry, nanomaterials, or renewable energy',
    'Comfortable with spectroscopy and lab-based experiments'
  ],
  keywords: ['Photo-electrochemistry', 'Photocatalysis', 'Nanomaterials', 'Optical spectroscopy', 'Vibrational spectroscopy', 'Plasmonic effects', 'Charge transfer dynamics', 'Renewable energy chemistry']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-cyan-900',
  name: 'Dr. Brenda Rubenstein',
  university: 'Brown University',
  field: 'Chemistry',
  researchBullets: [
    'Electronic structure methods for complex quantum systems',
    'Bridging theoretical chemistry and physics for materials design',
    'Applications in molecular and quantum computing',
    'Exploration of neuromorphic approaches and computational biophysics'
  ],
  bestForStudents: [
    'Interest in quantum chemistry, computational physics, or materials modeling',
    'Comfortable with theoretical and computational research'
  ],
  keywords: ['Quantum chemistry', 'Electronic structure theory', 'Stochastic methods', 'Strongly correlated materials', 'Quantum computing', 'Molecular computing', 'Neuromorphic computing', 'Computational biophysics']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-600 to-indigo-900',
  name: 'Dr. Mohamed Abdelfattah',
  university: 'Cornell University',
  field: 'Engineering',
  researchBullets: [
    'Machine-learning-focused computer systems design',
    'Hardware-software integration with FPGA and reconfigurable computing',
    'Optimizing ML performance for datacenters and mobile devices',
    'Automated hardware-aware machine learning pipelines'
  ],
  bestForStudents: [
    'Interest in computer engineering, ML systems, or hardware-software codesign',
    'Comfortable with both programming and hardware concepts'
  ],
  keywords: ['Computer architecture', 'Machine learning systems', 'Hardware-software codesign', 'Reconfigurable computing', 'FPGA architecture', 'Automated machine learning', 'Artificial intelligence', 'Computer engineering']
},
{
  avatarBg: 'bg-gradient-to-br from-green-600 to-teal-900',
  name: 'Dr. Mohammad Alian',
  university: 'Cornell University',
  field: 'Engineering',
  researchBullets: [
    'Designing future data center architectures',
    'Co-optimization of processors, memory, and network components',
    'Reducing data movement and improving efficiency',
    'Integration with software stacks and operating systems'
  ],
  bestForStudents: [
    'Interest in computer architecture or high-performance computing',
    'Comfortable with hardware-software optimization and distributed systems'
  ],
  keywords: ['Data center architecture', 'Computer engineering', 'Processor-memory-network co-design', 'Distributed computing', 'Network-centric design', 'High-performance computing', 'Software-hardware integration', 'Modular servers']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-900',
  name: 'Dr. Alyssa Apsel',
  university: 'Cornell University',
  field: 'Engineering',
  researchBullets: [
    'Power-efficient mixed-signal circuits and scalable CMOS designs',
    'Low-power radios for IoT and multi-standard wireless systems',
    'Techniques to mitigate analog performance challenges',
    'Applications in modern electronics and integrated circuits'
  ],
  bestForStudents: [
    'Interest in electrical engineering, analog/mixed-signal design, or IoT electronics',
    'Comfortable with circuits, CMOS, and hardware experimentation'
  ],
  keywords: ['Mixed-signal circuits', 'Low-power radio', 'CMOS design', 'IoT electronics', 'Reconfigurable wireless systems', 'Integrated circuits', 'Analog design', 'MEMS and optoelectronics']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-600 to-indigo-900',
  name: 'Dr. Christopher Batten',
  university: 'Cornell University',
  field: 'Engineering',
  researchBullets: [
    'Energy-efficient parallel computer architectures',
    'Hardware specialization and interconnection networks',
    'VLSI methodologies and programming for low-power systems',
    'Embedded and high-performance computing applications'
  ],
  bestForStudents: [
    'Interest in parallel computing, hardware design, or embedded systems',
    'Comfortable with computer systems architecture and VLSI techniques'
  ],
  keywords: ['Parallel computer architecture', 'Energy-efficient computing', 'Hardware specialization', 'Interconnection networks', 'VLSI design', 'Computer systems', 'Embedded systems', 'Parallel programming']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-700',
  name: 'Dr. Carl Bernard',
  university: 'Cornell University',
  field: 'Engineering',
  researchBullets: [
    'Multi-platform photonics and silicon-based devices',
    'Integration with optical fibers and modulators',
    'Quantum dot photonics and electromagnetic phenomena studies',
    'Applications in diverse photonics technologies'
  ],
  bestForStudents: [
    'Interest in photonics, optical engineering, or quantum devices',
    'Comfortable with lab experiments and theoretical modeling'
  ],
  keywords: ['Photonics', 'Silicon photonics', 'Integrated optics', 'Quantum dot photonics', 'Electromagnetism', 'Fiber-optic integration', 'Modulators', 'Photonic devices']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-600 to-green-500',
  name: 'Dr. Silvia Ferrari',
  university: 'Cornell University',
  field: 'Engineering',
  researchBullets: [
    'Computational intelligence and sensorimotor learning for robotics',
    'Algorithms for adaptive dynamic programming and reinforcement learning',
    'Optimal control and information-driven planning',
    'Applications in autonomous systems and multiscale dynamical systems'
  ],
  bestForStudents: [
    'Interest in robotics, control systems, or AI for autonomous systems',
    'Comfortable with coding, algorithms, and mathematical modeling'
  ],
  keywords: ['Robotics', 'Autonomy', 'Adaptive Control', 'Reinforcement Learning', 'Machine Learning', 'Dynamic Programming', 'Sensor Networks', 'Cognitive Models', 'Nonlinear Dynamics', 'Complex Systems']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-600 to-green-500',
  name: 'Dr. David A. Hammer',
  university: 'Cornell University',
  field: 'Engineering',
  researchBullets: [
    'High energy density plasmas and X-pinches',
    'Inertial confinement fusion and plasma diagnostics',
    'Optical/electro-optical methods for plasma measurements',
    'Applications in radiography and high-intensity X-ray generation'
  ],
  bestForStudents: [
    'Interest in plasma physics, fusion, or high-energy experiments',
    'Comfortable with lab work, diagnostics, and plasma theory'
  ],
  keywords: ['High Energy Density Plasmas', 'X-pinches', 'Inertial Confinement Fusion', 'Plasma Diagnostics', 'Electromagnetics', 'Astrophysics', 'Fusion', 'Physical Electronics']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-500',
  name: 'Dr. Jack Hare',
  university: 'Cornell University',
  field: 'Physics',
  researchBullets: [
    'Fundamental plasma behavior and energy transport',
    'Magnetized shocks, magnetic reconnection, and turbulence',
    'Laboratory experiments with pulsed currents and wire plasmas',
    'Applications in astrophysical plasmas and fusion research'
  ],
  bestForStudents: [
    'Interest in plasma physics, fusion, or experimental astrophysics',
    'Comfortable with lab experiments and high-energy physics concepts'
  ],
  keywords: ['Plasma Physics', 'Magnetized Shocks', 'Magnetic Reconnection', 'Turbulence', 'Fusion Energy', 'High Energy Density Plasmas', 'Astrophysical Plasmas', 'Laboratory Experiments']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-blue-500',
  name: 'Dr. Brad Duchaine',
  university: 'Dartmouth College',
  field: 'Psychology',
  researchBullets: [
    'Human face perception and social information processing',
    'Neuropsychology, behavioral experiments, and brain imaging',
    'Focus on prosopagnosia and distorted facial appearance',
    'Understanding cognitive, neural, developmental, and genetic foundations of social perception'
  ],
  bestForStudents: [
    'Interest in cognitive neuroscience, psychology, or social perception',
    'Comfortable with behavioral research and neuroimaging'
  ],
  keywords: ['Face Perception', 'Prosopagnosia', 'Social Cognition', 'Visual Processing', 'Neuropsychology', 'Face Recognition', 'Brain Imaging']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-indigo-500',
  name: 'Dr. David J. Kraemer',
  university: 'Dartmouth College',
  field: 'Neurology',
  researchBullets: [
    'Knowledge acquisition, organization, and application',
    'Learning and reasoning differences across individuals',
    'Neuroimaging and behavioral approaches to study conceptual representation',
    'Cognitive strategies supporting effective learning'
  ],
  bestForStudents: [
    'Interest in cognitive neuroscience, learning science, or brain imaging',
    'Comfortable with behavioral experiments and fMRI research'
  ],
  keywords: ['Cognitive Neuroscience', 'Individual Differences', 'Semantic Memory', 'Learning and Reasoning', 'Concept Formation', 'fMRI', 'Behavioral Experiments', 'Psychophysiology']
},
{
  avatarBg: 'bg-gradient-to-br from-rose-600 to-orange-500',
  name: "Dr. Pia-Kelsey T. O'Neill",
  university: 'Dartmouth College',
  field: 'Neurology',
  researchBullets: [
    'Emotional states representation in brain circuits',
    'Amygdala integration of sensory cues and internal/external context',
    'Flexible escape behaviors in response to threat',
    'Combining animal behavior paradigms with computational analysis'
  ],
  bestForStudents: [
    'Interest in affective neuroscience, emotion circuits, or computational neurobiology',
    'Comfortable with animal experiments and neural activity analysis'
  ],
  keywords: ['Affective Neuroscience', 'Amygdala', 'Emotion Circuits', 'Threat Processing', 'Computational Neuroscience', 'Calcium Imaging', 'In Vivo Electrophysiology', 'Noradrenergic Modulation']
},
{
  avatarBg: 'bg-gradient-to-br from-teal-600 to-cyan-500',
  name: 'Dr. Viola S. Stoermer',
  university: 'Dartmouth College',
  field: 'Neurology',
  researchBullets: [
    'Brain mechanisms of selective attention, visual working memory, and multimodal integration',
    'How attentional processes shape perception and memory representations',
    'Uses psychophysics, experimental psychology, and EEG',
    'Links neural activity with perceptual and cognitive function'
  ],
  bestForStudents: [
    'Interest in cognitive neuroscience, attention, or memory research',
    'Comfortable with psychophysics, EEG, and experimental methods'
  ],
  keywords: ['Cognitive Neuroscience', 'Selective Attention', 'Visual Working Memory', 'Perception', 'Multisensory Integration', 'Psychophysics', 'EEG', 'Experimental Psychology']
},
{
  avatarBg: 'bg-gradient-to-br from-red-600 to-yellow-500',
  name: 'Dr. Tor Wager',
  university: 'Dartmouth College',
  field: 'Neurology',
  researchBullets: [
    'Neural mechanisms of pain, emotion, stress, and empathy',
    'Influence of cognitive and social factors on affective processes',
    'Combines experimental neuroscience with advanced functional neuroimaging',
    'Develops analytic tools and shares resources for open science'
  ],
  bestForStudents: [
    'Interest in affective neuroscience, pain, or emotion research',
    'Comfortable with fMRI, neuroimaging methods, and data analysis'
  ],
  keywords: ['Affective Neuroscience', 'Pain', 'Emotion', 'Stress', 'Empathy', 'Cognitive Modulation', 'fMRI', 'Neuroimaging Methods', 'Open Science']
},
{
  avatarBg: 'bg-gradient-to-br from-yellow-600 to-green-500',
  name: 'Dr. Cong Chen',
  university: 'Dartmouth College',
  field: 'Engineering',
  researchBullets: [
    'Engineering solutions for the global energy transition',
    'Integrates energy storage into electricity markets and distributed resources',
    'Enhances grid resilience using hydrogen storage and market optimization',
    'Applies large-scale computational approaches including machine learning'
  ],
  bestForStudents: [
    'Interest in energy systems, power engineering, or AI for energy',
    'Comfortable with optimization, modeling, and computational approaches'
  ],
  keywords: ['Energy Systems', 'Power Engineering', 'Optimization', 'Electricity Markets', 'Energy Storage', 'Distributed Energy Resources', 'AI for Energy', 'Hydrogen Storage', 'Grid Resilience']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-purple-500',
  name: 'Dr. Tucker "Emme" Burgin',
  university: 'Dartmouth College',
  field: 'Engineering',
  researchBullets: [
    'Molecular simulations and machine learning for enzyme and protein design',
    'Optimizes enzymes for carbon capture, oligosaccharide synthesis, and sustainable bioplastics',
    'Applies computational chemistry to accelerate functional biomolecule development',
    'Integrates computational modeling with engineering principles'
  ],
  bestForStudents: [
    'Interest in enzyme engineering, computational chemistry, or protein design',
    'Comfortable with simulations, modeling, and lab-based enzyme work'
  ],
  keywords: ['Enzyme Engineering', 'Computational Chemistry', 'Molecular Simulations', 'Machine Learning', 'Protein Design', 'Carbon Capture', 'Bioplastics', 'Oligosaccharide Synthesis']
},
{
  avatarBg: 'bg-gradient-to-br from-pink-600 to-red-500',
  name: 'Dr. Héctor García',
  university: 'Dartmouth College',
  field: 'Biomedical Engineering',
  researchBullets: [
    'Models and experiments on light propagation through biological tissue',
    'Focuses on tissue heterogeneity and photon migration',
    'Applies fluorescence imaging, including lifetime imaging and guided surgery',
    'Combines computational simulations with optical imaging experiments'
  ],
  bestForStudents: [
    'Interest in biomedical optics, imaging, or fluorescence techniques',
    'Comfortable with computational modeling and experimental imaging'
  ],
  keywords: ['Biomedical Optics', 'Diffuse Optical Tomography', 'Fluorescence Imaging', 'Photon Migration', 'Near Infrared Spectroscopy', 'Fluorescence-Guided Surgery', 'Optical Mammography', 'Experimental Imaging Techniques']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-600 to-teal-500',
  name: 'Dr. Rebecca Gallivan',
  university: 'Dartmouth College',
  field: 'Engineering',
  researchBullets: [
    'Explores micro- and nanoscale behaviors of materials',
    'Develops advanced additive manufacturing techniques at micro- and nanoscale',
    'Creates functional and structural nanomaterials for engineering applications',
    'Expands fundamental understanding of nanostructured materials',
    'Designs MEMS/NEMS devices'
  ],
  bestForStudents: [
    'Interest in nanostructured materials, MEMS/NEMS, or additive manufacturing',
    'Curious about micro- and nanoscale engineering challenges'
  ],
  keywords: ['Nanostructured Materials', 'Additive Manufacturing', 'Nanomechanics', 'Structural Materials', 'Functional Materials', 'MEMS', 'NEMS', 'Materials Engineering', 'Nanotechnology']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-blue-500',
  name: 'Dr. Bijan Mazaheri',
  university: 'Dartmouth College',
  field: 'Machine Learning',
  researchBullets: [
    'Develops methods for integrating multiple datasets and modalities into machine learning models',
    'Focuses on causal inference, statistical rigor, and robustness',
    'Investigates balancing data diversity with causal knowledge',
    'Detects adversarial or AI-generated data',
    'Quantifies human performance in variable environments',
    'Applies techniques to information security, biology, health, and sports analytics'
  ],
  bestForStudents: [
    'Interest in machine learning, data integration, or causal inference',
    'Enjoys working with diverse datasets and statistical modeling'
  ],
  keywords: ['Machine Learning', 'Causal Inference', 'Data Integration', 'Mixture Models', 'Statistical Modeling', 'Adversarial Detection', 'Computational Biology', 'Sports Analytics']
},
{
  avatarBg: 'bg-gradient-to-br from-green-600 to-teal-500',
  name: 'Dr. Wei Ouyang',
  university: 'Dartmouth College',
  field: 'Biomedical Engineering',
  researchBullets: [
    'Designs bio-integrated microsystems for precision healthcare and neural research',
    'Develops wearable and implantable biosensors for continuous molecular monitoring',
    'Creates neural probes for mapping electrophysiological and neurochemical activity',
    'Combines microelectronics, MEMS, and microfluidics for seamless biological interfacing'
  ],
  bestForStudents: [
    'Interest in bioelectronics, biosensors, or neural engineering',
    'Curious about wearable and implantable medical devices'
  ],
  keywords: ['Bioelectronics', 'Biosensors', 'Wearables', 'Implantables', 'MEMS', 'Microfluidics', 'Neuroengineering', 'Neural Probes', 'Precision Healthcare']
},
{
  avatarBg: 'bg-gradient-to-br from-gray-700 to-indigo-600',
  name: 'Dr. Rahul Sarpeshkar',
  university: 'Dartmouth College',
  field: 'Engineering',
  researchBullets: [
    'Uses analog computation to design systems spanning quantum devices, nanoelectronics, and biological circuits',
    'Bridges wet-lab synthetic microbial DNA/RNA protein networks with dry-lab bio-inspired and quantum-inspired computing hardware',
    'Focuses on ultra-energy-efficient, fault-tolerant systems near fundamental physical limits',
    'Applies work to medical implants, neural prosthetics, and synthetic biology'
  ],
  bestForStudents: [
    'Interest in analog computation, bio-inspired computing, or quantum hardware',
    'Excited by highly interdisciplinary engineering and biology challenges'
  ],
  keywords: ['Analog Computation', 'Synthetic Biology', 'Bio-Inspired Computing', 'Quantum Circuits', 'Hybrid Quantum-Classical Systems', 'Ultra-Low-Power Systems', 'Neural Prosthetics', 'Systems Biology', 'Feedback Control']
},
{
  avatarBg: 'bg-gradient-to-br from-slate-600 to-blue-600',
  name: 'Dr. John X.J. Zhang',
  university: 'Dartmouth College',
  field: 'Biomedical Engineering',
  researchBullets: [
    'Develops miniature imaging and biosensing systems using bio-inspired nanomaterials',
    'Creates lab-on-chip platforms and uses advanced nanofabrication',
    'Enables point-of-care diagnostics and biological investigation'
  ],
  bestForStudents: [
    'Interest in biomedical microsystems or lab-on-chip devices',
    'Curious about nanofabrication and biosensing applications'
  ],
  keywords: ['Biomedical Microsystems', 'Lab-on-Chip', 'Nanofabrication', 'Biosensing', 'Microphotonic Imaging', 'Bio-Inspired Nanomaterials', 'Plasmonics', 'MEMS', 'Point-of-Care Diagnostics']
},
{
  avatarBg: 'bg-gradient-to-br from-emerald-600 to-blue-500',
  name: 'Dr. Samuel S. Streeter',
  university: 'Dartmouth College',
  field: 'Biomedical Engineering',
  researchBullets: [
    'Develops quantitative optical and near-infrared imaging techniques for surgical guidance and disease modeling',
    'Focuses on fluorescence-based and multimodal approaches for cancer and clinical applications'
  ],
  bestForStudents: [
    'Interest in biomedical optics, imaging, or fluorescence techniques',
    'Comfortable with quantitative imaging experiments and preclinical models'
  ],
  keywords: ['Biomedical Optics', 'Fluorescence Imaging', 'Image-Guided Surgery', 'Near-Infrared Imaging', 'Quantitative Imaging', 'Multimodal Imaging', 'Cancer Research', 'Preclinical Models']
},
{
  avatarBg: 'bg-gradient-to-br from-orange-600 to-red-500',
  name: 'Dr. Jason T. Stauth',
  university: 'Dartmouth College',
  field: 'Engineering',
  researchBullets: [
    'Designs high-frequency, chip-scale power and integrated electronic systems',
    'Enables efficient energy conversion, sensing, communication, and management',
    'Works on applications from renewables to embedded and autonomous devices'
  ],
  bestForStudents: [
    'Interest in power electronics, integrated circuits, or energy management',
    'Curious about chip-scale electronics and applied engineering challenges'
  ],
  keywords: ['Power Electronics', 'Integrated Circuits', 'Chip-Scale Power', 'Energy Management', 'Photovoltaic Systems', 'Energy Harvesting', 'Analog and Mixed-Signal Design', 'RF Electronics', 'Technology Entrepreneurship']
},
{
  avatarBg: 'bg-gradient-to-br from-teal-600 to-emerald-500',
  name: 'Dr. William Scheideler',
  university: 'Dartmouth College',
  field: 'Engineering',
  researchBullets: [
    'Develops novel materials and scalable nanomanufacturing techniques for printed, flexible, and wearable electronic systems',
    'Focuses on low-power sensing, energy harvesting, and hybrid devices'
  ],
  bestForStudents: [
    'Interest in flexible or printed electronics, wearable devices, or nanomanufacturing',
    'Curious about low-power and hybrid electronic systems'
  ],
  keywords: ['Flexible Electronics', 'Printed Electronics', 'Nanomanufacturing', 'Low-Power Sensors', 'Energy Harvesting', 'Wearable Devices', 'Wireless Systems', 'Hybrid Electronics']
},
{
  avatarBg: 'bg-gradient-to-br from-cyan-600 to-blue-500',
  name: 'Dr. Katie M. Barott',
  university: 'University of Pennsylvania',
  field: 'Biology',
  researchBullets: [
    'Studies interactions between reef-building corals and their algal and microbial partners',
    'Investigates how relationships shift under environmental stressors like warming and ocean acidification',
    'Analyzes coral reef health and resilience'
  ],
  bestForStudents: [
    'Interest in marine ecology, microbial symbiosis, or climate change biology',
    'Curious about coral reef ecosystems and environmental stress effects'
  ],
  keywords: ['Coral Reefs', 'Microbial Symbiosis', 'Climate Change Biology', 'Marine Ecology', 'Microbial Ecology', 'Physiology', 'Cell Biology', 'Biodiversity']
},
{
  avatarBg: 'bg-gradient-to-br from-violet-600 to-purple-500',
  name: 'Dr. Shelley Berger',
  university: 'University of Pennsylvania',
  field: 'Biology',
  researchBullets: [
    'Investigates chromatin structure and epigenetic modifications in gene expression',
    'Studies effects across development, aging, viral infection, behavior, and cancer'
  ],
  bestForStudents: [
    'Interest in epigenetics, chromatin biology, or gene regulation',
    'Curious about developmental, aging, and cancer biology'
  ],
  keywords: ['Epigenetics', 'Chromatin', 'Histone Modifications', 'Gene Regulation', 'p53', 'Aging', 'Cancer Biology', 'Genomics']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-700 to-purple-600',
  name: 'Dr. Nancy M. Bonini',
  university: 'University of Pennsylvania',
  field: 'Neurology',
  researchBullets: [
    'Uses genetic model systems to study neurodegenerative and neurological diseases',
    'Identifies modifiers of neural degeneration, aging, and injury',
    'Provides insights into human brain disorders'
  ],
  bestForStudents: [
    'Interest in neurodegeneration, neurogenetics, or Drosophila models',
    'Curious about molecular mechanisms of neural injury and aging'
  ],
  keywords: ['Neurodegeneration', 'Neurogenetics', 'Drosophila Models', 'Aging', 'Neural Injury', 'Genetic Modifiers', 'Epigenetics', 'Brain Disease']
},
{
  avatarBg: 'bg-gradient-to-br from-green-600 to-teal-500',
  name: 'Dr. Yun Ding',
  university: 'University of Pennsylvania',
  field: 'Neurology',
  researchBullets: [
    'Studies genetic changes driving evolution of animal behaviors',
    'Links genes to neural circuit structure, function, and physiology',
    'Uses Drosophila courtship as a model system'
  ],
  bestForStudents: [
    'Interest in behavioral evolution, neurogenetics, or Drosophila models',
    'Curious about linking genetics to neural circuits and physiology'
  ],
  keywords: ['Behavioral Evolution', 'Neurogenetics', 'Drosophila', 'Neural Circuits', 'Genetics', 'Molecular Biology', 'Neurobiology', 'Physiology']
},
{
  avatarBg: 'bg-gradient-to-br from-green-700 to-lime-500',
  name: 'Dr. Kimberly Gallagher',
  university: 'University of Pennsylvania',
  field: 'Biology',
  researchBullets: [
    'Investigates how proteins and transcription factors move between cells to mediate intercellular signaling',
    'Coordinates development using Arabidopsis roots as a model system'
  ],
  bestForStudents: [
    'Interest in cell-to-cell communication and plant development',
    'Curious about protein trafficking and transcription factor biology'
  ],
  keywords: ['Intercellular Signaling', 'Protein Trafficking', 'Transcription Factors', 'Cell-to-Cell Communication', 'Plant Development', 'Arabidopsis', 'Cell Biology', 'Genomics']
},
{
  avatarBg: 'bg-gradient-to-br from-green-800 to-cyan-600',
  name: 'Dr. Brent Helliker',
  university: 'University of Pennsylvania',
  field: 'Biology',
  researchBullets: [
    'Explores how plants physiologically respond to climate change',
    'Examines impacts of plant responses on ecosystems and biogeochemical cycles',
    'Uses stable isotopes to track processes from cells to landscapes'
  ],
  bestForStudents: [
    'Interest in plant physiological ecology and climate change biology',
    'Curious about ecosystem-level impacts of plant responses'
  ],
  keywords: ['Plant Physiological Ecology', 'Climate Change', 'Stable Isotopes', 'Photosynthesis', 'Respiration', 'C3 and C4 Plants', 'Ecosystem Ecology', 'Biogeochemistry']
},
{
  avatarBg: 'bg-gradient-to-br from-red-700 to-orange-500',
  name: 'Dr. Squire J. Booker',
  university: 'University of Pennsylvania',
  field: 'Chemistry',
  researchBullets: [
    'Studies chemical mechanisms of radical SAM enzymes',
    'Explores how iron-sulfur cluster-containing enzymes catalyze diverse biochemical transformations',
    'Investigates implications for human health and metabolism'
  ],
  bestForStudents: [
    'Interest in enzymology, radical chemistry, and biochemical mechanisms',
    'Curious about molecular-level biochemistry and health applications'
  ],
  keywords: ['Radical SAM Enzymes', 'Iron-Sulfur Clusters', 'Enzyme Catalysis', 'Biochemistry', 'Post-Translational Modifications', 'Cofactor Biosynthesis', 'Radical Chemistry', 'Metabolic Pathways']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-700 to-pink-500',
  name: 'Dr. David M. Chenoweth',
  university: 'University of Pennsylvania',
  field: 'Chemistry',
  researchBullets: [
    'Designs and synthesizes molecules to control nucleic acid and protein structures',
    'Develops new materials with sensing and self-assembly properties for biological and materials applications'
  ],
  bestForStudents: [
    'Interest in organic or bioorganic chemistry, molecular recognition, and materials design',
    'Curious about synthesis and functional materials'
  ],
  keywords: ['Organic Chemistry', 'Bioorganic Chemistry', 'Molecular Recognition', 'Nucleic Acids', 'Proteins', 'Synthesis', 'Materials Chemistry', 'Self-Assembly']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-700 to-purple-600',
  name: 'Dr. Ivan J. Dmochowski',
  university: 'University of Pennsylvania',
  field: 'Bioengineering',
  researchBullets: [
    'Develops chemical and biophysical tools to study biological systems',
    'Focuses on molecular imaging technologies, functional bio-nanomaterials, and light-controlled gene regulation'
  ],
  bestForStudents: [
    'Interest in chemical biology, bio-nanomaterials, or molecular imaging',
    'Curious about designing tools for studying biological systems'
  ],
  keywords: ['Bioinorganic Chemistry', 'Bioorganic Chemistry', 'Biophysical Chemistry', 'Molecular Imaging', 'Nanoparticles', 'Chemical Biology', 'Photoactivation', 'MRI Biosensors']
},
{
  avatarBg: 'bg-gradient-to-br from-red-600 to-yellow-500',
  name: 'Dr. Zahra Fakhraai',
  university: 'University of Pennsylvania',
  field: 'Chemistry',
  researchBullets: [
    'Studies effects of nano-confinement and interfacial interactions on material properties',
    'Designs novel nanostructured materials'
  ],
  bestForStudents: [
    'Interest in materials chemistry and nanoscale science',
    'Curious about interfacial phenomena and polymer nanocomposites'
  ],
  keywords: ['Physical Chemistry', 'Materials Chemistry', 'Nanoscale Science', 'Nanostructured Materials', 'Interfacial Phenomena', 'Polymer Nanocomposites', 'Organic Electronics']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-500',
  name: 'Dr. Kathy Fange Liu',
  university: 'University of Pennsylvania',
  field: 'Biology',
  researchBullets: [
    'Investigates dysregulation of RNA-binding proteins and RNA-modifying enzymes',
    'Studies contributions to cancer and neurodegeneration'
  ],
  bestForStudents: [
    'Interest in RNA biology, gene regulation, and structural biology',
    'Curious about molecular mechanisms of disease'
  ],
  keywords: ['RNA Biology', 'Enzymology', 'RNA-Binding Proteins', 'Cancer', 'Neurodegeneration', 'Structural Biology', 'Spectroscopy', 'Gene Regulation']
},
{
  avatarBg: 'bg-gradient-to-br from-orange-500 to-yellow-400',
  name: 'Dr. Marisa C. Kozlowski',
  university: 'University of Pennsylvania',
  field: 'Chemistry',
  researchBullets: [
    'Designs new methods and catalysts for organic synthesis',
    'Studies reaction mechanisms to advance pharmaceutical and natural product synthesis'
  ],
  bestForStudents: [
    'Interest in organic chemistry, catalysis, and reaction mechanisms',
    'Curious about pharmaceutical and natural product synthesis'
  ],
  keywords: ['Organic Chemistry', 'Catalysis', 'Computational Chemistry', 'Reaction Mechanisms', 'Pharmaceutical Synthesis', 'High-Throughput Screening']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-500 to-pink-400',
  name: 'Dr. Monica E. McCallum',
  university: 'University of Pennsylvania',
  field: 'Chemistry',
  researchBullets: [
    'Uses synthetic chemistry to study natural products',
    'Discovers novel enzymes and investigates microbial communication and community structure'
  ],
  bestForStudents: [
    'Interest in synthetic chemistry, natural products, and enzyme discovery',
    'Curious about microbiology and biochemical pathways'
  ],
  keywords: ['Organic Chemistry', 'Natural Products', 'Synthetic Chemistry', 'Enzyme Discovery', 'Microbiology', 'Biochemistry']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-500 to-teal-400',
  name: 'Dr. Virgil Percec',
  university: 'University of Pennsylvania',
  field: 'Chemistry',
  researchBullets: [
    'Designs and synthesizes complex molecular, macromolecular, and supramolecular systems',
    'Mimics and extends biological functions'
  ],
  bestForStudents: [
    'Interest in supramolecular chemistry, macromolecular systems, or self-assembly',
    'Curious about synthetic approaches to biological functions'
  ],
  keywords: ['Organic Chemistry', 'Supramolecular Chemistry', 'Macromolecular Chemistry', 'Synthetic Methods', 'Nanostructures', 'Self-Assembly']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-500 to-pink-400',
  name: 'Dr. Yifan Quan',
  university: 'University of Pennsylvania',
  field: 'Chemistry',
  researchBullets: [
    'Develops advanced NMR and EPR techniques',
    'Applies techniques to energy storage, quantum information science, and structural biology'
  ],
  bestForStudents: [
    'Interest in magnetic resonance techniques, quantum information, or energy materials',
    'Curious about advanced spectroscopy applications'
  ],
  keywords: ['Magnetic Resonance', 'NMR', 'EPR', 'Quantum Information', 'Energy Materials', 'Structural Biology']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-500 to-green-400',
  name: 'Dr. Elizabeth Rhoades',
  university: 'University of Pennsylvania',
  field: 'Chemistry',
  researchBullets: [
    'Studies conformational dynamics of intrinsically disordered proteins',
    'Investigates relationships between structure-function and disease mechanisms'
  ],
  bestForStudents: [
    'Interest in protein dynamics, aggregation, or neurodegenerative disease',
    'Curious about single-molecule techniques'
  ],
  keywords: ['Intrinsically Disordered Proteins', 'Protein Dynamics', 'Aggregation', 'Neurodegenerative Disease', 'Single-Molecule Techniques']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-500 to-red-400',
  name: 'Dr. Eric J. Schelter',
  university: 'University of Pennsylvania',
  field: 'Chemistry',
  researchBullets: [
    'Investigates synthesis, characterization, and electronic structure of lanthanide, uranium, and main group inorganic and organometallic complexes'
  ],
  bestForStudents: [
    'Interest in inorganic and organometallic chemistry',
    'Curious about electronic structure and spectroscopy of complex metals'
  ],
  keywords: ['Inorganic Chemistry', 'Organometallics', 'Lanthanides', 'Uranium', 'Electronic Structure', 'Spectroscopy']
},
{
  avatarBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  name: 'Dr. Patrick J. Walsh',
  university: 'University of Pennsylvania',
  field: 'Chemistry',
  researchBullets: [
    'Merges catalysis with organic and inorganic synthesis to develop new transformations',
    'Focuses on cation-π interactions, super electron donors, and reactive intermediates for pharmaceutical and materials applications'
  ],
  bestForStudents: [
    'Interest in catalysis, organic/inorganic synthesis, and reactive intermediates',
    'Curious about designing new chemical transformations for pharmaceuticals and materials'
  ],
  keywords: ['Catalysis', 'Organic Synthesis', 'Inorganic Synthesis', 'Cation-π Interactions', 'Super Electron Donors', 'Reactive Intermediates', 'Pharmaceutical Chemistry']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-500 to-indigo-400',
  name: 'Dr. John M. Doyle',
  university: 'Harvard University',
  field: 'Physics',
  researchBullets: [
    'Uses cold molecules for quantum information, particle physics, bio-analysis, and precision measurement',
    'Pioneers techniques for cooling, trapping, and controlling complex molecular systems'
  ],
  bestForStudents: [
    'Interest in ultracold molecules, quantum control, or precision measurement',
    'Curious about cold-molecule experimental techniques'
  ],
  keywords: ['Ultracold Molecules', 'Quantum Control', 'Quantum Simulation', 'Buffer-Gas Cooling', 'Polyatomic Molecules', 'Precision Measurement', 'Quantum Information']
},
{
  avatarBg: 'bg-gradient-to-br from-orange-500 to-red-400',
  name: 'Dr. Paul Horowitz',
  university: 'Harvard University',
  field: 'Physics',
  researchBullets: [
    'Focuses on electronic instrument design, optical SETI, and advanced circuit development',
    'Co-author of the seminal textbook "The Art of Electronics"'
  ],
  bestForStudents: [
    'Interest in electronic instrumentation or optical SETI',
    'Curious about circuit design and applied physics tools'
  ],
  keywords: ['Electronic Instrument Design', 'Optical SETI', 'Silicon Photomultipliers', 'Circuit Design', 'Physics Education', 'The Art of Electronics']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-500 to-indigo-400',
  name: 'Dr. Daniel L. Jafferis',
  university: 'Harvard University',
  field: 'Physics',
  researchBullets: [
    'Investigates string theory, supersymmetric quantum field theory, and quantum gravity',
    'Focuses on gauge/gravity correspondence and entanglement entropy'
  ],
  bestForStudents: [
    'Interest in theoretical physics, quantum gravity, or string theory',
    'Curious about entanglement and advanced mathematical physics'
  ],
  keywords: ['String Theory', 'Quantum Gravity', 'Supersymmetric QFT', 'Gauge/Gravity Correspondence', 'Entanglement Entropy', 'Chern-Simons Theory']
},
{
  avatarBg: 'bg-gradient-to-br from-green-500 to-teal-400',
  name: 'Dr. Efthimios Kaxiras',
  university: 'Harvard University',
  field: 'Physics',
  researchBullets: [
    'Applies quantum theory and computational methods to study material behavior',
    'Aims to explain complex phenomena, predict new structures, and design materials for energy and biomedical applications'
  ],
  bestForStudents: [
    'Interest in computational materials science and quantum theory of solids',
    'Curious about predicting and designing new materials'
  ],
  keywords: ['Quantum Theory of Solids', 'Computational Materials Science', 'Material Properties', 'Energy Conversion', 'Energy Storage', 'Biomolecular Interactions', 'Nanomaterials', 'Graphene', 'Carbon Nanotubes']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-500 to-indigo-400',
  name: 'Dr. Eslam Khalaf',
  university: 'Harvard University',
  field: 'Physics',
  researchBullets: [
    'Focuses on theoretical condensed matter physics',
    'Explores disorder, topological phases, superconductivity in multilayer graphene, and phenomena in quasicrystals and moiré materials'
  ],
  bestForStudents: [
    'Interest in condensed matter theory and topological materials',
    'Curious about novel phenomena in graphene and moiré systems'
  ],
  keywords: ['Condensed Matter Theory', 'Topological Insulators', 'Semimetals', 'Superconductivity', 'Graphene Heterostructures', 'Quasicrystals', 'Moiré Systems', 'Disordered Systems']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-500 to-pink-400',
  name: 'Dr. Stefan Knirck',
  university: 'Harvard University',
  field: 'Physics',
  researchBullets: [
    'Conducts experimental searches for axion dark matter using advanced detectors',
    'Integrates techniques from particle physics, astrophysics, photonics, and quantum sensing to develop resonators and axion-photon conversion setups'
  ],
  bestForStudents: [
    'Interest in experimental particle physics and quantum sensing',
    'Curious about axion dark matter and advanced detection methods'
  ],
  keywords: ['Axion Dark Matter', 'Experimental Physics', 'Quantum Sensing', 'Photon Detection', 'MADMAX', 'ADMX', 'BREAD', 'High-Quality Resonators', 'Cryogenic Systems', 'Magnetic Fields']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-blue-400',
  name: 'Dr. Mathew Madhavacheril',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Studies theoretical and computational cosmology, including the evolution and composition of the universe, dark matter, dark energy, and neutrinos',
    'Develops statistical analysis pipelines for CMB and large-scale structure surveys'
  ],
  bestForStudents: [
    'Interested in cosmology, astrophysics, and computational/data-driven approaches',
    'Curious about dark matter, dark energy, and cosmic evolution'
  ],
  keywords: ['Cosmology', 'Astrophysics', 'Cosmic Microwave Background', 'Large-Scale Structure', 'Dark Matter', 'Dark Energy', 'Neutrinos', 'Computational Cosmology', 'Data Analysis', 'Statistical Methods']
},
{
  avatarBg: 'bg-gradient-to-br from-green-600 to-teal-400',
  name: 'Dr. Arnold Mathijssen',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Explores the physics of life using experimental and theoretical approaches across physics and biology',
    'Focuses on fluid mechanics, active and living materials, pathogen dynamics, biomedical material design, and collective functionality of living systems'
  ],
  bestForStudents: [
    'Interested in biophysics, statistical physics, and living matter',
    'Curious about microbiology, hydrodynamics, and biomedical applications'
  ],
  keywords: ['Biophysics', 'Fluid Mechanics', 'Active Matter', 'Living Materials', 'Statistical Physics', 'Microscopy', 'Omics', 'Pathogen Dynamics', 'Hydrodynamics', 'Biomedical Materials', 'Collective Behavior', 'Out-of-Equilibrium Systems']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-500',
  name: 'Dr. Philip Nelson',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Studies physics of biological and living matter, including biopolymers, artificial biomembranes, molecular motors, and neural tissue',
    'Focuses on nonlinear dynamics, pattern formation, self-assembly, and geometrical methods'
  ],
  bestForStudents: [
    'Interested in biophysics, soft matter, and complex biological systems',
    'Curious about DNA mechanics, neural tissue, and self-assembly phenomena'
  ],
  keywords: ['Biophysics', 'Soft Matter', 'DNA Mechanics', 'Biopolymers', 'Artificial Biomembranes', 'Molecular Motors', 'Neural Tissue', 'Superresolution Imaging', 'Nonlinear Dynamics', 'Pattern Formation', 'Self-Assembly', 'Electrostatics', 'Geometrical Methods']
},
{
  avatarBg: 'bg-gradient-to-br from-green-600 to-blue-500',
  name: 'Dr. Dylan Rankin',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Studies particle physics using proton-proton collision data from the CERN LHC',
    'Integrates machine learning for event reconstruction, jet classification, mass regression, and optimizes trigger systems and hardware usage'
  ],
  bestForStudents: [
    'Interested in high-energy particle physics and machine learning applications',
    'Curious about CERN experiments, trigger systems, and LHC data analysis'
  ],
  keywords: ['Particle Physics', 'CERN LHC', 'Standard Model', 'Machine Learning', 'Jet Classification', 'Mass Regression', 'Event Reconstruction', 'Trigger Systems', 'FPGA', 'High-Energy Physics', 'FastML', 'Low-Latency ML']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-500',
  name: 'Dr. Masao Sako',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Uses Type Ia supernovae for observational cosmology to study dark energy and the Universe’s expansion history',
    'Develops machine learning and deep learning methods for large-scale optical surveys like DES, LSST, and Roman'
  ],
  bestForStudents: [
    'Interested in observational astronomy and cosmology',
    'Curious about machine learning applications in astrophysics'
  ],
  keywords: ['Observational Cosmology', 'Type Ia Supernovae', 'Dark Energy', 'Luminosity Distances', 'DES', 'LSST', 'Roman', 'Machine Learning', 'Deep Learning', 'GPU Analysis', 'Astrophysics', 'Astronomy']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-500',
  name: 'Dr. Robyn Sanderson',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Investigates dark matter distribution in galaxies using stellar observations and cosmological-hydrodynamical simulations',
    'Contributes to projects like SDSS-V, WEAVE, and Roman Space Telescope to improve astrometric and chemical-velocity measurements'
  ],
  bestForStudents: [
    'Interested in galaxy dynamics and dark matter research',
    'Curious about cosmological simulations and observational astronomy'
  ],
  keywords: ['Galaxy Dynamics', 'Dark Matter', 'Stellar Kinematics', 'Gaia Mission', 'Cosmological Simulations', 'SDSS-V', 'WEAVE', 'Roman Space Telescope', 'Astrometry', 'Chemical Abundances', 'Astrophysics', 'Observational Astronomy']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-blue-500',
  name: 'Dr. Ravi K. Sheth',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Develops models to interpret large-scale galaxy and cluster surveys for galaxy formation and cosmology',
    'Focuses on Halo Model, assembly bias, weak lensing, Sunyaev-Zeldovich effects, and primordial black hole abundance'
  ],
  bestForStudents: [
    'Interested in theoretical cosmology and statistical modeling',
    'Curious about galaxy surveys, weak lensing, and large-scale structure'
  ],
  keywords: ['Cosmology', 'Galaxy Formation', 'Halo Model', 'Nonlinear Clustering', 'Assembly Bias', 'Scale-Dependent Bias', 'Tidal Bias', 'Velocity Bias', 'Weak Lensing', 'Sunyaev-Zeldovich Effect', 'Large Scale Structure', 'Primordial Black Holes', 'Galaxy Surveys', 'Statistical Modeling', 'Astrophysics']
},
{
  avatarBg: 'bg-gradient-to-br from-green-600 to-teal-500',
  name: 'Dr. Richard B. Stephens',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Explores low-energy excitations in disordered solids using theory, simulations, and experiments',
    'Studies localized states, amorphous materials, and mechanical loss at low temperatures'
  ],
  bestForStudents: [
    'Interested in solid-state physics and disordered materials',
    'Curious about simulations and experimental studies of amorphous materials'
  ],
  keywords: ['Disordered Solids', 'Low-Energy Excitations', 'Amorphous Materials', 'Glasses', 'Computer Simulations', 'Localized States', 'Mechanical Loss', 'Solid State Physics', 'Thermal Disorder', 'Experimental Physics', 'Theoretical Physics']
},
{
  avatarBg: 'bg-gradient-to-br from-red-600 to-pink-500',
  name: 'Dr. Evelyn Thomson',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Conducts experimental particle physics research at colliders, focusing on W boson, top quark, Higgs, supersymmetry, and long-lived particles',
    'Develops detector systems and analysis tools for ATLAS and high-luminosity LHC upgrades'
  ],
  bestForStudents: [
    'Interested in experimental particle physics and collider experiments',
    'Curious about Higgs searches, top quark measurements, and detector development'
  ],
  keywords: ['Experimental Particle Physics', 'Collider Physics', 'W Boson', 'Top Quark', 'Higgs Boson', 'Supersymmetry', 'ATLAS', 'CDF', 'LEP', 'Detector Commissioning', 'Charged Particle Tracking', 'Readout Electronics', 'Physics Beyond Standard Model', 'LHC', 'Electroweak Physics']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-600 to-cyan-500',
  name: 'Dr. Liang Wu',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Studies light-matter interactions in topological and 2D materials, superconductors, spintronics, and liquid crystals using ultrafast and nonlinear optical techniques',
    'Focuses on emergent collective phenomena in condensed matter systems'
  ],
  bestForStudents: [
    'Interested in experimental condensed matter physics and ultrafast optics',
    'Curious about topological materials, spintronics, and 2D materials'
  ],
  keywords: ['Condensed Matter Physics', 'Ultrafast Optics', 'Terahertz Spectroscopy', 'Topological Materials', '2D Materials', 'Superconductors', 'Quantum Antiferromagnets', 'Spintronics', 'Quantum Spin Liquids', 'Liquid Crystals', 'Nonlinear Optics', 'Time-Resolved Measurements', 'Light-Matter Interaction']
},
{
  avatarBg: 'bg-gradient-to-br from-yellow-600 to-orange-500',
  name: 'Dr. José L. Avalos',
  university: 'Princeton University',
  field: 'Bioengineering',
  researchBullets: [
    'Leads synthetic biology and metabolic engineering research to design microorganisms for biofuels, bioplastics, drugs, and environmental applications',
    'Integrates microbiology, genetics, biochemistry, biophysics, and engineering principles for synthetic biology technologies'
  ],
  bestForStudents: [
    'Interested in synthetic biology, metabolic engineering, and microbial systems',
    'Curious about biofuels, bioplastics, and biomedical applications'
  ],
  keywords: ['Synthetic Biology', 'Metabolic Engineering', 'Microbial Consortia', 'Protein Engineering', 'Organelle Engineering', 'Biofuels', 'Bioplastics', 'Drug Production', 'Bioremediation', 'Systems Biology', 'Genetic Circuits', 'Biosensors', 'Environmental Biotechnology', 'Biomedical Engineering']
},
{
  avatarBg: 'bg-gradient-to-br from-pink-600 to-red-500',
  name: 'Dr. Clifford P. Brangwynne',
  university: 'Princeton University',
  field: 'Bioengineering',
  researchBullets: [
    'Studies phase separation in cells to understand membrane-less organelles and genome organization',
    'Develops engineered intracellular structures for biomedical applications'
  ],
  bestForStudents: [
    'Interested in cell biology, biomolecular condensates, and bioengineering',
    'Curious about phase separation and engineered intracellular structures'
  ],
  keywords: ['Phase Separation', 'Membrane-Less Organelles', 'Biomolecular Condensates', 'Genome Organization', 'Protein Aggregation', 'Biomedical Engineering']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-500',
  name: 'Dr. Emily C. Davidson',
  university: 'Princeton University',
  field: 'Bioengineering',
  researchBullets: [
    'Designs hierarchical polymer-based materials inspired by nature, combining molecular design, self-assembly, and additive manufacturing',
    'Creates functional, stimuli-responsive, sustainable polymers for health and environmental applications'
  ],
  bestForStudents: [
    'Interested in polymer design, materials engineering, and sustainable materials',
    'Curious about additive manufacturing and self-assembly'
  ],
  keywords: ['Polymer Design', 'Self-Assembly', 'Additive Manufacturing', 'Stimuli-Responsive Materials', 'Sustainable Polymers', 'Hierarchical Materials']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-600 to-cyan-500',
  name: 'Dr. David B. Graves',
  university: 'Princeton University',
  field: 'Bioengineering',
  researchBullets: [
    'Studies non-equilibrium plasmas for semiconductor fabrication, quantum devices, biomedical applications, and chemical processing',
    'Uses modeling, diagnostics, and machine learning to control plasma properties'
  ],
  bestForStudents: [
    'Interested in plasma physics, semiconductor fabrication, and applied bioengineering',
    'Curious about machine learning applications in physical and chemical processes'
  ],
  keywords: ['Non-Equilibrium Plasma', 'Semiconductor Fabrication', 'Quantum Devices', 'Biomedical Applications', 'Chemical Processing', 'Machine Learning']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-500 to-cyan-400',
  name: 'Dr. Paul Janmey',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Investigates cell mechanics and mechanotransduction, studying how substrate stiffness, cytoskeletal networks, and membrane structure influence cell behavior and signaling',
    'Uses hydrogels, imaging, scattering, and rheological techniques to probe mechanical properties of cells including neurons, fibroblasts, and endothelial cells'
  ],
  bestForStudents: [
    'Interested in biophysics, cellular mechanics, and mechanotransduction',
    'Curious about how physical properties affect cell behavior and signaling pathways'
  ],
  keywords: ['Cell Mechanics', 'Mechanotransduction', 'Cytoskeleton', 'Hydrogels', 'Substrate Stiffness', 'Endothelial Cells', 'Fibroblasts', 'Neurons', 'Astrocytes', 'Viscoelasticity', 'Inositol Phospholipids', 'Cell Signaling']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-500 to-pink-400',
  name: 'Dr. Randall Kamien',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Focuses on theoretical soft condensed matter, using geometry and topology to understand material properties and deformations',
    'Develops mathematical tools to describe complex defect structures and topological defects in materials'
  ],
  bestForStudents: [
    'Interested in soft matter, condensed matter theory, and mathematical physics',
    'Curious about topological defects, geometry, and material deformations'
  ],
  keywords: ['Soft Matter', 'Condensed Matter Theory', 'Materials Geometry', 'Topological Defects', 'Landau Theory', 'Broken Symmetry', 'Goldstone Modes', 'Homotopy Theory', 'Anharmonic Elasticity', 'Material Deformations']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-500 to-purple-400',
  name: 'Dr. Charles Kane',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Studies quantum electronic phenomena in solids, focusing on low-dimensional systems like quantum wires, quantum dots, carbon nanotubes, and graphene',
    'Investigates electron interactions, disorder, topological phases, and applications to topological quantum computing'
  ],
  bestForStudents: [
    'Interested in condensed matter physics and quantum electronics',
    'Curious about topological phases, quantum computing, and low-dimensional systems'
  ],
  keywords: ['Condensed Matter Theory', 'Quantum Electronics', 'Low-Dimensional Systems', 'Quantum Wires', 'Quantum Dots', 'Graphene', 'Carbon Nanotubes', 'Electron-Electron Interactions', 'Disorder', 'Fractional Quantum Hall Effect', 'Quantum Spin Hall Effect', 'Topological Insulators', 'Topological Quantum Computing']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-500 to-indigo-400',
  name: 'Dr. Justin Khoury',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Explores the interface of particle physics and cosmology, focusing on dark sector physics and novel light scalar fields',
    'Studies screening mechanisms and early universe models, including alternatives to inflation for explaining cosmic structure'
  ],
  bestForStudents: [
    'Interested in high-energy theory and cosmology',
    'Curious about dark matter, scalar fields, and early universe physics'
  ],
  keywords: ['Cosmology', 'High Energy Theory', 'Dark Matter', 'Scalar Fields', 'Screening Mechanisms', 'Chameleon Mechanism', 'Symmetron', 'Early Universe', 'Ekpyrotic Universe', 'Density Perturbations']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-500 to-teal-400',
  name: 'Dr. Adam Lidz',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Studies theoretical astrophysics and cosmology, focusing on large-scale structure formation and the Epoch of Reionization',
    'Interprets observations of hydrogen and helium ionization, quasar clustering, and the early Universe using simulations and analytic models'
  ],
  bestForStudents: [
    'Interested in astrophysics and cosmology',
    'Curious about early universe observations, simulations, and large-scale structure'
  ],
  keywords: ['Theoretical Astrophysics', 'Cosmology', 'Epoch of Reionization', 'Large-Scale Structure', 'Hydrogen Lyman-alpha', 'Helium Ionization', 'Quasar Clustering', 'CMB Polarization', '21 cm Cosmology', 'Galaxy Formation']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-500 to-pink-400',
  name: 'Dr. Andrea Liu',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Uses analytical theory and computational methods to study soft and living matter',
    'Focuses on collective phenomena at subcellular, cellular, and tissue levels, including glassy behavior and jamming transitions'
  ],
  bestForStudents: [
    'Interested in soft matter, living systems, and many-body physics',
    'Curious about jamming, glassy materials, and collective phenomena'
  ],
  keywords: ['Soft Matter', 'Living Matter', 'Jamming Transition', 'Collective Phenomena', 'Glassy Materials', 'Many-Body Physics', 'Nonequilibrium Systems', 'Theoretical Physics', 'Computational Modeling']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-500',
  name: 'Dr. Robyn Sanderson',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Maps dark matter distribution in galaxies',
    'Combines Gaia data with cosmological-hydrodynamical simulations',
    'Contributes to SDSS-V, WEAVE, and Roman Space Telescope projects'
  ],
  bestForStudents: [
    'Interested in galaxy dynamics and dark matter',
    'Curious about observational astronomy and simulations'
  ],
  keywords: ['Galaxy Dynamics', 'Dark Matter', 'Stellar Kinematics', 'Gaia Mission', 'Cosmological Simulations', 'SDSS-V', 'WEAVE', 'Roman Space Telescope', 'Astrometry', 'Chemical Abundances', 'Astrophysics', 'Observational Astronomy']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-blue-500',
  name: 'Dr. Ravi K. Sheth',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Develops models for galaxy and cluster surveys',
    'Studies halo model, assembly bias, and scale-dependent effects',
    'Connects observations like weak lensing and SZ effect to theory'
  ],
  bestForStudents: [
    'Interested in cosmology and galaxy formation',
    'Curious about statistical modeling and large-scale structure'
  ],
  keywords: ['Cosmology', 'Galaxy Formation', 'Halo Model', 'Nonlinear Clustering', 'Assembly Bias', 'Scale-Dependent Bias', 'Tidal Bias', 'Velocity Bias', 'Weak Lensing', 'Sunyaev-Zeldovich Effect', 'Large Scale Structure', 'Primordial Black Holes', 'Galaxy Surveys', 'Statistical Modeling', 'Astrophysics']
},
{
  avatarBg: 'bg-gradient-to-br from-green-600 to-teal-500',
  name: 'Dr. Richard B. Stephens',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Studies low-energy excitations in disordered solids',
    'Uses simulations and experiments to probe amorphous materials',
    'Measures mechanical loss and maps disorder-dependent excitations'
  ],
  bestForStudents: [
    'Interested in solid-state physics and amorphous materials',
    'Curious about computational and experimental methods'
  ],
  keywords: ['Disordered Solids', 'Low-Energy Excitations', 'Amorphous Materials', 'Glasses', 'Computer Simulations', 'Localized States', 'Mechanical Loss', 'Solid State Physics', 'Thermal Disorder', 'Experimental Physics', 'Theoretical Physics']
},
{
  avatarBg: 'bg-gradient-to-br from-red-600 to-pink-500',
  name: 'Dr. Evelyn Thomson',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Performs experimental particle physics at colliders',
    'Focuses on W boson, top quark, and Higgs properties',
    'Leads searches for supersymmetry and long-lived particles',
    'Develops detector systems and analysis tools for LHC'
  ],
  bestForStudents: [
    'Interested in experimental particle physics',
    'Curious about collider experiments and detector technology'
  ],
  keywords: ['Experimental Particle Physics', 'Collider Physics', 'W Boson', 'Top Quark', 'Higgs Boson', 'Supersymmetry', 'ATLAS', 'CDF', 'LEP', 'Detector Commissioning', 'Charged Particle Tracking', 'Readout Electronics', 'Physics Beyond Standard Model', 'LHC', 'Electroweak Physics']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-600 to-cyan-500',
  name: 'Dr. Liang Wu',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Studies light-matter interactions in condensed matter',
    'Focuses on topological and 2D materials, superconductors, and spintronics',
    'Uses time-resolved and nonlinear optical techniques'
  ],
  bestForStudents: [
    'Interested in condensed matter and optical physics',
    'Curious about topological materials and ultrafast phenomena'
  ],
  keywords: ['Condensed Matter Physics', 'Ultrafast Optics', 'Terahertz Spectroscopy', 'Topological Materials', '2D Materials', 'Superconductors', 'Quantum Antiferromagnets', 'Spintronics', 'Quantum Spin Liquids', 'Liquid Crystals', 'Nonlinear Optics', 'Time-Resolved Measurements', 'Light-Matter Interaction']
},
{
  avatarBg: 'bg-gradient-to-br from-yellow-600 to-orange-500',
  name: 'Dr. José L. Avalos',
  university: 'Princeton University',
  field: 'Bioengineering',
  researchBullets: [
    'Designs engineered microorganisms for sustainable production',
    'Focuses on biofuels, bioplastics, drugs, and bioremediation',
    'Integrates synthetic biology, genetics, and metabolic engineering'
  ],
  bestForStudents: [
    'Interested in synthetic biology and metabolic engineering',
    'Curious about microbial consortia and bioengineering applications'
  ],
  keywords: ['Synthetic Biology', 'Metabolic Engineering', 'Microbial Consortia', 'Protein Engineering', 'Organelle Engineering', 'Biofuels', 'Bioplastics', 'Drug Production', 'Bioremediation', 'Systems Biology', 'Genetic Circuits', 'Biosensors', 'Environmental Biotechnology', 'Biomedical Engineering']
},
{
  avatarBg: 'bg-gradient-to-br from-pink-600 to-red-500',
  name: 'Dr. Clifford P. Brangwynne',
  university: 'Princeton University',
  field: 'Bioengineering',
  researchBullets: [
    'Studies phase separation in membrane-less organelles',
    'Investigates genome organization and disease relevance',
    'Develops engineered intracellular structures for biomedical use'
  ],
  bestForStudents: [
    'Interested in cellular biophysics and biomolecular condensates',
    'Curious about phase separation and intracellular engineering'
  ],
  keywords: ['Phase Separation', 'Membrane-Less Organelles', 'Biomolecular Condensates', 'Genome Organization', 'Protein Aggregation', 'Biomedical Engineering']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-500',
  name: 'Dr. Emily C. Davidson',
  university: 'Princeton University',
  field: 'Bioengineering',
  researchBullets: [
    'Designs hierarchical polymer-based materials',
    'Combines self-assembly, molecular design, and additive manufacturing',
    'Creates stimuli-responsive and sustainable polymers'
  ],
  bestForStudents: [
    'Interested in polymer design and materials engineering',
    'Curious about functional and sustainable material systems'
  ],
  keywords: ['Polymer Design', 'Self-Assembly', 'Additive Manufacturing', 'Stimuli-Responsive Materials', 'Sustainable Polymers', 'Hierarchical Materials']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-600 to-cyan-500',
  name: 'Dr. David B. Graves',
  university: 'Princeton University',
  field: 'Bioengineering',
  researchBullets: [
    'Studies non-equilibrium plasmas for semiconductor and biomedical applications',
    'Uses modeling, diagnostics, and machine learning to control plasma properties'
  ],
  bestForStudents: [
    'Interested in plasma physics and applied bioengineering',
    'Curious about modeling and machine learning applications'
  ],
  keywords: ['Non-Equilibrium Plasma', 'Semiconductor Fabrication', 'Quantum Devices', 'Biomedical Applications', 'Chemical Processing', 'Machine Learning']
},
{
  avatarBg: 'bg-gradient-to-br from-green-600 to-lime-500',
  name: 'Dr. A. James Link',
  university: 'Princeton University',
  field: 'Bioengineering',
  researchBullets: [
    'Designs conformationally constrained peptides and proteins',
    'Studies lasso peptides for antibiotics and enzymology',
    'Explores molecular machines'
  ],
  bestForStudents: [
    'Interested in protein engineering and bioconjugates',
    'Curious about novel peptide structures and applications'
  ],
  keywords: ['Protein Engineering', 'Peptides', 'Bioconjugate Chemistry', 'Lasso Peptides', 'Antibiotics', 'Molecular Machines']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-500',
  name: 'Dr. Marcella Lusardi',
  university: 'Princeton University',
  field: 'Bioengineering',
  researchBullets: [
    'Designs molecular-scale materials for sustainable chemistry',
    'Focuses on catalysis and adsorption',
    'Controls assembly of nanomaterials for energy and environment'
  ],
  bestForStudents: [
    'Interested in materials chemistry and sustainability',
    'Curious about catalysis and nanoscale engineering'
  ],
  keywords: ['Materials Design', 'Catalysis', 'Adsorption', 'Nanomaterials', 'Sustainability', 'Molecular Assembly']
},
{
  avatarBg: 'bg-gradient-to-br from-green-600 to-teal-500',
  name: 'Dr. Yueh-Lin (Lynn) Loo',
  university: 'Princeton University',
  field: 'Bioengineering',
  researchBullets: [
    'Develops solution-processable organic semiconductors',
    'Focuses on thin-film devices and organic electronics',
    'Uses self-assembled monolayers and interfacial engineering'
  ],
  bestForStudents: [
    'Interested in organic electronics and device engineering',
    'Curious about thin films and semiconductor applications'
  ],
  keywords: ['Organic Electronics', 'Thin-Film Devices', 'Semiconductors', 'Soft Lithography', 'Self-Assembled Monolayers', 'Interfacial Engineering']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-indigo-500',
  name: 'Dr. Andrew S. Rosen',
  university: 'Princeton University',
  field: 'Engineering',
  researchBullets: [
    'Designs new materials using quantum chemistry and AI',
    'Targets energy, catalysis, and sustainability applications',
    'Uses high-throughput computational methods'
  ],
  bestForStudents: [
    'Interested in AI-driven materials discovery',
    'Curious about quantum chemistry and sustainable applications'
  ],
  keywords: ['Quantum Chemistry', 'AI', 'Materials Discovery', 'Energy', 'Catalysis', 'Sustainability']
},
{
  avatarBg: 'bg-gradient-to-br from-green-600 to-teal-500',
  name: 'Dr. Michael A. Webb',
  university: 'Princeton University',
  field: 'Engineering',
  researchBullets: [
    'Designs soft polymeric materials using theory and simulation',
    'Applies machine learning for material optimization',
    'Focuses on health, energy, and sustainability'
  ],
  bestForStudents: [
    'Interested in polymers and soft materials',
    'Curious about ML-driven materials design'
  ],
  keywords: ['Polymers', 'Soft Materials', 'Simulation', 'Machine Learning', 'Energy', 'Sustainability']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-500',
  name: 'Dr. Joshua Atkinson',
  university: 'Princeton University',
  field: 'Engineering',
  researchBullets: [
    'Combines synthetic biology and electrochemistry',
    'Controls microbial electron transport',
    'Develops sustainable biotechnologies'
  ],
  bestForStudents: [
    'Interested in synthetic biology and protein engineering',
    'Curious about microbial systems and bioelectronics'
  ],
  keywords: ['Synthetic Biology', 'Protein Engineering', 'Electrochemistry', 'Microbial Communities', 'Sustainability', 'Biotechnology']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-blue-500',
  name: 'Dr. Bo Zhen',
  university: 'University of Pennsylvania',
  field: 'Physics',
  researchBullets: [
    'Experimental nano-photonics in condensed matter',
    'Studies quantum electrodynamics applications',
    'Develops topological and photonic devices'
  ],
  bestForStudents: [
    'Interested in nano-photonics and condensed matter physics',
    'Curious about quantum light-matter interactions'
  ],
  keywords: ['Nano-Photonics', 'Condensed Matter', 'Quantum Electrodynamics', 'Topological Photonics', 'Polaritonics', 'Photonic Circuits']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-blue-500',
  name: 'Dr. Stephen Y. Chou',
  university: 'Princeton University',
  field: 'Engineering',
  researchBullets: [
    'Develops advanced nanofabrication techniques',
    'Works on nanophotonics, meta-optics, and nano-bioengineering',
    'Creates biosensors and diagnostic devices'
  ],
  bestForStudents: [
    'Interested in nanofabrication and optical engineering',
    'Curious about nanoscale bioengineering applications'
  ],
  keywords: ['Nanofabrication', 'Nanophotonics', 'Meta-Optics', 'Nano-Bioengineering', 'Biosensors', 'Diagnostics']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-600 to-blue-500',
  name: 'Dr. Sun-Yuan Kung',
  university: 'Princeton University',
  field: 'Engineering',
  researchBullets: [
    'Develops deep learning and explainable AI methods',
    'Optimizes neural network structures and ranking',
    'Compresses networks for efficient computation'
  ],
  bestForStudents: [
    'Interested in AI and neural network optimization',
    'Curious about explainable and efficient deep learning'
  ],
  keywords: ['Deep Learning', 'Explainable AI', 'Neural Networks', 'Optimization', 'Node/Layer Ranking', 'Deep Compression']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-500',
  name: 'Dr. Naveen Verma',
  university: 'Princeton University',
  field: 'Engineering',
  researchBullets: [
    'Designs ultra-low-power analog and digital circuits',
    'Optimizes systems for biomedical and remote sensing devices',
    'Integrates circuits, algorithms, and memory components'
  ],
  bestForStudents: [
    'Interested in low-power electronics and IC design',
    'Curious about biomedical devices and remote sensing'
  ],
  keywords: ['Analog ICs', 'Digital ICs', 'Ultra-Low-Power Systems', 'Biomedical Devices', 'Remote Sensing', 'Low-Power Algorithms', 'Memory Circuits', 'Nanometer CMOS', 'Thin-Film Electronics']
},
{
  avatarBg: 'bg-gradient-to-br from-green-600 to-teal-500',
  name: 'Dr. Mengdi Wang',
  university: 'Princeton University',
  field: 'Engineering',
  researchBullets: [
    'Explores machine learning theory and applications',
    'Focuses on reinforcement learning and generative AI',
    'Applies AI to scientific discovery and intelligent systems'
  ],
  bestForStudents: [
    'Interested in machine learning and AI research',
    'Curious about reinforcement learning and generative AI'
  ],
  keywords: ['Machine Learning', 'Reinforcement Learning', 'Generative AI', 'AI for Science', 'Intelligent Systems', 'ML Theory']
},
{
  avatarBg: 'bg-gradient-to-br from-red-600 to-orange-500',
  name: 'Dr. Roberto Car',
  university: 'Princeton University',
  field: 'Chemistry',
  researchBullets: [
    'Studies atomic and electronic structure of materials',
    'Uses ab-initio molecular dynamics and quantum/statistical mechanics',
    'Guides design of new materials'
  ],
  bestForStudents: [
    'Interested in computational chemistry and materials modeling',
    'Curious about quantum and statistical approaches in chemistry'
  ],
  keywords: ['Theoretical Chemistry', 'Materials Science', 'Ab-Initio Molecular Dynamics', 'Density Functional Theory', 'Computational Chemistry', 'Quantum Mechanics', 'Statistical Mechanics', 'Electronic Structure', 'Material Design']
},
{
  avatarBg: 'bg-gradient-to-br from-yellow-600 to-amber-500',
  name: 'Dr. Jannette Carey',
  university: 'Princeton University',
  field: 'Chemistry',
  researchBullets: [
    'Studies interactions of proteins and macromolecules',
    'Uses experimental and computational biophysics',
    'Focuses on binding, cooperativity, and allostery'
  ],
  bestForStudents: [
    'Interested in chemical biology and protein interactions',
    'Curious about drug design and molecular binding studies'
  ],
  keywords: ['Chemical Biology', 'Protein Interactions', 'Ligand Binding', 'Allostery', 'Cooperativity', 'Molecular Dynamics', 'NMR', 'X-ray Crystallography', 'Calorimetry', 'Surface Plasmon Resonance']
},
{
  avatarBg: 'bg-gradient-to-br from-blue-700 to-indigo-500',
  name: 'Dr. Paul Chirik',
  university: 'Princeton University',
  field: 'Chemistry',
  researchBullets: [
    'Develops sustainable catalytic methods with earth-abundant metals',
    'Designs ligands to control electron flow',
    'Focuses on base-metal catalysis for organic transformations'
  ],
  bestForStudents: [
    'Interested in sustainable chemistry and catalysis',
    'Curious about base-metal ligands and synthetic pathways'
  ],
  keywords: ['Catalysis', 'Sustainable Chemistry', 'Inorganic Chemistry', 'Organic Chemistry', 'Base Metal Catalysts', 'Redox-Active Ligands', 'C-H Activation', 'Asymmetric Hydrogenation', 'Hydrosilylation', 'Hydroboration']
},
{
  avatarBg: 'bg-gradient-to-br from-teal-700 to-cyan-500',
  name: 'Dr. Mircea Dincă',
  university: 'Princeton University',
  field: 'Chemistry',
  researchBullets: [
    'Designs novel organic-inorganic hybrid materials',
    'Studies electrochemical and photophysical properties',
    'Develops materials for energy storage and sensing'
  ],
  bestForStudents: [
    'Interested in materials science and energy applications',
    'Curious about hybrid materials and electrochemistry'
  ],
  keywords: ['Catalysis', 'Inorganic Chemistry', 'Materials Science', 'Energy Storage', 'MOFs', 'COFs', 'Electrochemistry', 'Photophysics', 'Organic-Inorganic Hybrids', 'Solid-State Synthesis', 'Characterization Techniques']
},
{
  avatarBg: 'bg-gradient-to-br from-purple-700 to-pink-500',
  name: 'Dr. Todd K. Hyster',
  university: 'Princeton University',
  field: 'Chemistry',
  researchBullets: [
    'Develops enzyme-based catalysts for sustainable synthesis',
    'Uses directed evolution and photoexcitation',
    'Enables novel free radical reactions with high selectivity'
  ],
  bestForStudents: [
    'Interested in chemical biology and biocatalysis',
    'Curious about enzyme engineering and light-driven reactions'
  ],
  keywords: ['Catalysis', 'Chemical Biology', 'Enzymes', 'Directed Evolution', 'Sustainable Chemistry', 'Photoredox Biocatalysis', 'Free Radical Reactions', 'Reaction Selectivity', 'Visible Light Activation']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-700 to-blue-500',
  name: 'Dr. William M. Jacobs',
  university: 'Princeton University',
  field: 'Chemistry',
  researchBullets: [
    'Studies self-assembly in multicomponent molecular systems',
    'Uses statistical mechanics and computer simulations',
    'Designs bio-mimetic nanostructures under varied conditions'
  ],
  bestForStudents: [
    'Interested in nanostructures and self-assembly',
    'Curious about modeling complex molecular systems'
  ],
  keywords: ['Physical Chemistry', 'Theoretical Chemistry', 'Self-Assembly', 'Multicomponent Systems', 'Nanostructures', 'Bio-Mimetic Materials', 'Statistical Mechanics', 'Computer Simulations', 'Coarse-Grained Models', 'Non-Equilibrium Systems']
},
{
  avatarBg: 'bg-gradient-to-br from-red-700 to-pink-500',
  name: 'Dr. Tom Muir',
  university: 'Princeton University',
  field: 'Chemistry',
  researchBullets: [
    'Manipulates protein covalent structures with chemical biology',
    'Uses synthetic and physical chemistry plus molecular genetics',
    'Studies post-translational modifications and chromatin biology'
  ],
  bestForStudents: [
    'Interested in protein engineering and chemical biology',
    'Curious about chromatin and biomedical applications'
  ],
  keywords: ['Chemical Biology', 'Protein Function', 'Synthetic Chemistry', 'Physical Chemistry', 'Molecular Genetics', 'Unnatural Amino Acids', 'Post-Translational Modifications', 'Chromatin', 'Designer Nucleosomes', 'Biomedical Applications']
},
{
  avatarBg: 'bg-gradient-to-br from-orange-700 to-yellow-500',
  name: 'Dr. Jose Roque',
  university: 'Princeton University',
  field: 'Chemistry',
  researchBullets: [
    'Explores organic and organometallic chemistry interfaces',
    'Develops new catalytic reactivity modes',
    'Solves complex synthetic challenges with transition metals'
  ],
  bestForStudents: [
    'Interested in organometallic chemistry and synthesis',
    'Curious about catalytic innovations'
  ],
  keywords: ['Catalysis', 'Inorganic Chemistry', 'Organic Chemistry', 'Organometallic Chemistry', 'Transition Metal Complexes', 'Synthetic Methods', 'Reactivity Development', 'Chemical Synthesis']
},
{
  avatarBg: 'bg-gradient-to-br from-indigo-700 to-purple-500',
  name: 'Dr. Gregory Scholes',
  university: 'Princeton University',
  field: 'Chemistry',
  researchBullets: [
    'Studies molecular systems interacting with light',
    'Uses ultrafast spectroscopy and quantum calculations',
    'Focuses on solar energy conversion and photo-catalysis'
  ],
  bestForStudents: [
    'Interested in photochemistry and spectroscopy',
    'Curious about quantum effects in molecular systems'
  ],
  keywords: ['Chemical Biology', 'Physical Chemistry', 'Theoretical Chemistry', 'Ultrafast Spectroscopy', 'Quantum Coherence', 'Photo-Activated Processes', 'Solar Energy Conversion', 'Excitonic Materials', 'Quantum Information Science', 'Wavepackets']
},
{
  avatarBg: 'bg-gradient-to-br from-red-700 to-orange-500',
  name: 'Dr. Erik J. Sorensen',
  university: 'Princeton University',
  field: 'Chemistry',
  researchBullets: [
    'Advances organic synthesis strategies for complex natural products',
    'Develops innovative reactions and C–H functionalizations',
    'Designs site-selective synthetic methods'
  ],
  bestForStudents: [
    'Interested in organic synthesis and natural product chemistry',
    'Curious about C–H functionalization and innovative reactions'
  ],
  keywords: ['Catalysis', 'Organic Chemistry', 'Synthesis', 'Natural Products', 'C–H Functionalization', 'Innovative Reactions', 'Chemical Architecture', 'Organic Synthesis Strategy', 'Site-Selective Functionalization']
},
{
  avatarBg: 'bg-gradient-to-br from-cyan-700 to-blue-500',
  name: 'Dr. Marissa L. Weichman',
  university: 'Princeton University',
  field: 'Chemistry',
  researchBullets: [
    'Uses chemical physics and spectroscopy on complex molecules',
    'Controls reactions with light and performs quantum-resolved studies',
    'Probes atmospheric aerosols with cavity-enhanced methods'
  ],
  bestForStudents: [
    'Interested in spectroscopy and chemical physics',
    'Curious about light-matter interactions and quantum measurements'
  ],
  keywords: ['Physical Chemistry', 'Spectroscopy', 'Chemical Physics', 'Cavity-Enhanced Spectroscopy', 'Light-Matter Interactions', 'Polariton Chemistry', 'Ultrafast Spectroscopy', 'Quantum-State-Resolved Spectroscopy', 'Astrochemistry', 'Atmospheric Aerosols']
},
{
  avatarBg: 'bg-gradient-to-br from-teal-700 to-cyan-500',
  name: 'Dr. Haw Yang',
  university: 'Princeton University',
  field: 'Chemistry',
  researchBullets: [
    'Studies chemical dynamics in complex environments',
    'Develops experimental and computational tools',
    'Explores molecular processes across spatial and temporal scales'
  ],
  bestForStudents: [
    'Interested in chemical dynamics and complex systems',
    'Curious about instrumentation and computational chemistry'
  ],
  keywords: ['Physical Chemistry', 'Spectroscopy', 'Chemical Dynamics', 'Complex Systems', 'Experimental Chemistry', 'Theoretical Tools', 'Computational Chemistry', 'Molecular Dynamics', 'Heterogeneous Environments', 'Instrumentation Development']
}
];
