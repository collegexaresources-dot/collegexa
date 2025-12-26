export interface Scholarship {
  title: string;
  effort: string;
  field: string;
  amount: number;
  eligibility: string[];
  materials: string[];
  applicationTip: string;
  deadline: string;
  minGPA: number;
}

export const allScholarships: Scholarship[] = [
  {
    title: 'National Merit Scholarship',
    effort: 'Medium Effort',
    field: 'Any',
    amount: 2500,
    eligibility: [
      'Take the PSAT/NMSQT in the specified year', 
      'Be enrolled as a high school student, progressing normally toward graduation', 
      'Be a U.S. Citizen or lawful permanent resident',
      'Plan to accept admission to a U.S. college or university'
    ],
    materials: ['PSAT/NMSQT scores', 'Academic record', 'Essay', 'Recommendation'],
    applicationTip: 'Your selection index from the PSAT is the first major hurdle. Prepare well for the test.',
    deadline: 'Oct 31, 2025',
    minGPA: 3.5,
  },
 {
    title: 'McDonald\'s HACER National Scholarship',
    effort: 'Quick Apply',
    field: 'Any',
    amount: 100000,
    eligibility: [
      'Be a high school senior', 
      'Must be a legal U.S. Resident, U.S. Citizen or a DREAMER/DACA recipient', 
      'Eligible to attend a two- or four-year college, university or vocational/technical school with a full-time course of study',
      'Must disclose other scholarship programs that you have applied for'
    ],
    materials: ['Transcript', 'Personal Statement', 'Community Service Projects', 'Recommendation'],
    applicationTip: 'Focus on a compelling personal statement that shares your unique story, highlights overcoming challenges, and demonstrates community involvement.',
    deadline: 'Feb 17, 2026',
    minGPA: 2.8,
  },
   {
    title: 'Gates Scholarship',
    effort: 'In-Depth Portfolio',
    field: 'Any',
    amount: 200000,
    eligibility: [
      'Be a high school senior', 
      'Must be Pell-eligible', 
      'Must be A US citizen or permanent resident',
      'Must be in good academic standing '
    ],
    materials: ['Transcript', 'Personal Statement', 'Community Service Projects', 'Recommendation'],
    applicationTip: 'Be sure to demonstrate your leadership ability and personal success skills in your application.',
    deadline: 'Sept 15, 2026',
    minGPA: 3.3,
  },
  {
  title: 'Coca Cola Scholars Program',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 20000,
  eligibility: [
    'Be a high school senior planning to graduate next year',
    'Be a U.S. citizen, national, or permanent resident',
    'Plan to enroll full time at an accredited U.S. college or university'
  ],
  materials: ['Online application', 'Academic record', 'Essay(s)', 'Activities list'],
  applicationTip: 'Applications open early and have multiple short sections — start early and save as you go.',
  deadline: 'Sept 30, 2026', // annual window
  minGPA: 3.0, // typical competitive baseline
},
{
  title: 'Dell Scholars Program',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 20000,
  eligibility: [
    'High school senior participating in an approved college‑readiness program',
    'Plan to enroll full‑time in a 4‑year degree program',
    'Must be Pell Grant eligible',
    'Minimum GPA: 2.4'
  ],
  materials: ['Online application', 'Transcript', 'FAFSA/SAR', 'Recommendation'],
  applicationTip: 'Showcase your grit and potential — this scholarship emphasizes determination over perfect stats.', 
  deadline: 'Feb 15, 2026', // verified current cycle deadline :contentReference[oaicite:0]{index=0}
  minGPA: 2.4,
},
{
  title: 'APIA Scholars General Scholarship',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 2500, // typical one‑year award; can be up to 20K multi‑year :contentReference[oaicite:1]{index=1}
  eligibility: [
    'Be of Asian American or Pacific Islander heritage',
    'U.S. citizen, national, or permanent resident',
    'Plan to enroll in a U.S. accredited college or university in fall 2026'
  ],
  materials: ['Online application', 'Personal and academic info'],
  applicationTip: 'This program focuses on leadership, community involvement, and financial need — craft your story around impact.',
  deadline: 'Jan 15, 2026', // official open/close dates :contentReference[oaicite:2]{index=2}
  minGPA: 3.0,
},
{
  title: 'BigFuture Scholarships (College Board)',
  effort: 'Quick Apply',
  field: 'Any',
  amount: 40000,
  eligibility: [
    'Be enrolled in high school and plan to attend college',
    'Create a BigFuture profile and complete required steps by set deadlines'
  ],
  materials: ['College Board account', 'Completed steps/tasks on BigFuture'],
  applicationTip: 'Complete all listed steps early — each task earns you entries for the bigger awards.', 
  deadline: 'Varies by class year', // multi‑deadline entry program :contentReference[oaicite:3]{index=3}
  minGPA: 0, 
},
{
  title: 'ScholarshipOwl Monthly Scholarship',
  effort: 'Quick Apply',
  field: 'Any',
  amount: 1000,
  eligibility: [
    'Be a U.S. high school junior or senior, or college student (16+)',
    'U.S. resident'
  ],
  materials: ['Online application on ScholarshipOwl', 'Basic info'],
  applicationTip: 'This one is super low‑effort — apply monthly to stack chances.', 
  deadline: 'Monthly', // recurring deadlines :contentReference[oaicite:4]{index=4}
  minGPA: 0.0,
},
{
  title: 'Elks Most Valuable Student Scholarship',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 30000,
  eligibility: [
    'Be a high school senior', 
    'Be a U.S. citizen',
    'Plan to enroll full‑time in a four‑year undergraduate program',
    'Demonstrate scholarship, leadership, and financial need'
  ],
  materials: ['Online application', 'Transcript', 'Essay(s)', 'Financial information', 'Recommendations'],
  applicationTip: 'Show both leadership and financial need — this scholarship balances merit with real impact.', 
  deadline: 'Nov 12, 2026', // application closes November 12, 2025 :contentReference[oaicite:0]{index=0}
  minGPA: 3.0,
},
{
  title: 'Ron Brown Scholar Program',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 40000,
  eligibility: [
    'Be a Black/African American high school senior', 
    'Be a U.S. citizen or permanent resident',
    'Demonstrate financial need', 
    'Show academic excellence, leadership, and community service'
  ],
  materials: ['Online application', 'Transcript', 'Essay(s)', 'Recommendations', 'FAFSA/financial info'],
  applicationTip: 'Craft essays that show who you *are* — leadership, community impact, and future goals matter big time.', 
  deadline: 'Dec 1, 2025', // 2026 cycle deadline :contentReference[oaicite:1]{index=1}
  minGPA: 3.3,
},
{
  title: 'Davidson Fellows Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'STEM',
  amount: 100000,
  eligibility: [
    'Be 18 or younger by the deadline', 
    'Be a U.S. citizen or permanent resident', 
    'Have completed a significant piece of advanced work in STEM/literature/music/philosophy/“Outside the Box” field'
  ],
  materials: ['Project submission', 'Nominator forms (2)', 'Explanation of project', 'Supporting documents'],
  applicationTip: 'This is not a GPA award — it is about *done work* that’s objectively advanced or creative.', 
  deadline: 'Feb 11, 2026', // formal deadline for Class of 2026 cycle :contentReference[oaicite:2]{index=2}
  minGPA: 0.0,
},
{
  title: 'Equitable Excellence Scholarship',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 20000,
  eligibility: [
    'Be a high school senior', 
    'Be a U.S. citizen, permanent resident, or qualified resident',
    'Have a minimum GPA of 2.5', 
    'Demonstrate drive and community involvement'
  ],
  materials: ['Online application', 'Transcript', 'Essay(s)', 'Recommendations'],
  applicationTip: 'Start early and emphasize your drive to improve your community — narrative matters here.', 
  deadline: 'Dec 15, 2025', // based on previous cycles :contentReference[oaicite:3]{index=3}
  minGPA: 2.5,
},
{
  title: 'Hispanic Scholarship Fund (HSF) Scholar Program',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 5000,
  eligibility: [
    'Be of Hispanic/Latinx heritage', 
    'Be a U.S. citizen, permanent resident, or DACA eligible',
    'Plan to enroll in a U.S. accredited college or university',
    'Demonstrate financial need'
  ],
  materials: ['Online application', 'Personal essay', 'Financial information'],
  applicationTip: 'This is one of the biggest scholarships for Hispanic students — make every essay response count.', 
  deadline: 'Feb 15, 2026', // typical close date :contentReference[oaicite:4]{index=4}
  minGPA: 3.0,
},
{
  title: 'RACA Annual College Scholarship Competition',
  effort: 'Quick Apply',
  field: 'Any',
  amount: 1000,
  eligibility: [
    'Be a high school senior', 
    'Have a minimum GPA of 3.0', 
    'Plan to attend college'
  ],
  materials: ['Online application', 'Transcript'],
  applicationTip: 'This one is simple — good GPA + on‑time application beats most competition.', 
  deadline: 'Jan 30, 2026', // verified for 2026 cycle :contentReference[oaicite:5]{index=5}
  minGPA: 3.0,
},
{
  title: 'Flavorful Futures Scholarship',
  effort: 'Quick Apply',
  field: 'Any',
  amount: 5000,
  eligibility: [
    'Be a high school senior', 
    'Minimum GPA of 2.5', 
    'Pursue higher education'
  ],
  materials: ['Online application', 'Short essay'], 
  applicationTip: 'No super heavy essay requirements — write authentically about your passions.', 
  deadline: 'Jan 31, 2026', // official cycle deadline :contentReference[oaicite:6]{index=6}
  minGPA: 2.5,
},
{
  title: 'Jack Kent Cooke Foundation College Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 55000,
  eligibility: [
    'Be a high school senior graduating spring',
    'Plan to enroll full‑time in a four‑year accredited U.S. college in fall 2026',
    'Have a minimum unweighted GPA of ~3.75',
    'Demonstrate significant unmet financial need (family AGI typically ≤ $95,000)'
  ],
  materials: ['Common App with Cooke questions', 'Transcript', 'Test scores (SAT/ACT/AP/IB)', 'Recommendations', 'Financial information'],
  applicationTip: 'This is *one of the biggest private scholarships in the U.S.* — showcase leadership, academic excellence, and financial need with detailed evidence. Start essays early and use Common App for submission.', 
  deadline: 'Nov 12, 2026', // official 2025 cycle deadline :contentReference[oaicite:0]{index=0}
  minGPA: 3.75,
},
{
  title: 'VFW Voice of Democracy Scholarship',
  effort: 'Medium Effort',
  field: 'Humanities',
  amount: 35000,
  eligibility: [
    'Be in grades 9‑12 at the time of application',
    'Be enrolled in a public, private, parochial, or home study high school in the U.S. or its territories',
    'Be a U.S. citizen or permanent resident (Voice of Democracy has residency requirements)',
  ],
  materials: ['3–5 minute recorded audio essay on the annual theme', 'Typed essay transcript', 'Completed VFW entry form'],
  applicationTip: 'This is *not a traditional written scholarship* — you must record your voice essay. Nail the theme and presentation to stand out.', 
  deadline: 'Oct 31, 2026', // student entry to local VFW post deadline :contentReference[oaicite:1]{index=1}
  minGPA: 0.0,
},
{
  title: 'NSHSS Diversity Scholarship',
  effort: 'Quick Apply',
  field: 'Any',
  amount: 2000,
  eligibility: [
    'Be a member of the National Society of High School Scholars (NSHSS)',
    'Be a high school sophomore, junior, or senior',
    'Demonstrate academic achievement or leadership'
  ],
  materials: ['NSHSS membership', 'Online application', 'Transcript', 'Short essay; recommendations may be requested'],
  applicationTip: 'You must first be an NSHSS member — evaluate whether the membership and opportunities are worth it before applying.', 
  deadline: 'Varies by scholarship cycle', // awarded year‑round :contentReference[oaicite:2]{index=2}
  minGPA: 0.0,
},
{
  title: 'NSHSS First Generation Scholarship',
  effort: 'Quick Apply',
  field: 'Any',
  amount: 1000,
  eligibility: [
    'Be a first‑generation college student (neither parent earned a 4‑year degree)',
    'Be a high school junior or senior',
    'Be an NSHSS member'
  ],
  materials: ['NSHSS online application', 'Transcript', 'Documentation of first‑gen status', 'Short essay'],
  applicationTip: 'Tailor your essay around your first‑generation journey — authenticity matters.', 
  deadline: 'Varies (check NSHSS member dashboard)', // year‑round cycles noted :contentReference[oaicite:3]{index=3}
  minGPA: 0.0,
},
{
  title: 'Ronald McDonald House Charities (RMHC) Scholarship',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 10000,
  eligibility: [
    'Be a high school senior',
    'Demonstrate academic achievement, leadership, and community involvement',
    'Demonstrate financial need'
  ],
  materials: ['Online application', 'Transcript', 'Essay(s)', 'Recommendation(s)', 'Financial info (FAFSA or similar)'],
  applicationTip: 'RMHC offers *various award levels* — make sure your essays clearly highlight impact and need.', 
  deadline: 'Varies', // national and local components exist :contentReference[oaicite:4]{index=4}
  minGPA: 3.0,
},
{
  title: 'National Washington Crossing Foundation Scholarship',
  effort: 'Quick Apply',
  field: 'Humanities',
  amount: 5000,
  eligibility: [
    'Be a U.S. citizen',
    'Be a high school senior planning government/public service studies or work',
    'Submit required essay'
  ],
  materials: ['One‑page essay (≈300 words)'],
  applicationTip: 'Short essay about motivation for government/public service — simple but thoughtful writing can win.', 
  deadline: 'Jan 15, 2026', // typical deadline Jan 15 (varies by cycle) :contentReference[oaicite:5]{index=5}
  minGPA: 0.0,
},
{
  title: 'We the Students Essay Contest',
  effort: 'Quick Apply',
  field: 'Humanities',
  amount: 7500,
  eligibility: [
    'Be a U.S. citizen or permanent resident',
    'Be a current high school student (grades 9‑12)',
    'Respond to the contest prompt with original writing'
  ],
  materials: ['Original essay on the given theme (contest prompt)'],
  applicationTip: 'This contest is *essay‑only* — strong thesis and clear writing are keys.', 
  deadline: 'Apr, 2026 (varies; typically Apr)', // annual cycle based on contest schedule :contentReference[oaicite:6]{index=6}
  minGPA: 0.0,
},
{
  title: 'Horatio Alger National Scholarship',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 25000,
  eligibility: [
    'Be a U.S. high school senior enrolled full‑time, planning to pursue a bachelor’s degree',
    'Demonstrate critical financial need (household income limits apply)',
    'Display perseverance in overcoming adversity',
    'Be involved in community service or extracurricular activities',
    'U.S. citizen'
  ],
  materials: ['Online application', 'Essay(s)', 'Transcript', 'Financial info', 'Recommendations'],
  applicationTip: 'This one rewards resilience as much as academics — don’t just list hardships, show how you conquered them.', 
  deadline: 'Feb 15, 2026', // senior deadline typical for 2026 cycle :contentReference[oaicite:0]{index=0}
  minGPA: 2.0,
},
{
  title: 'Burger King Scholars Program',
  effort: 'Quick Apply',
  field: 'Any',
  amount: 60000,
  eligibility: [
    'Be a high school senior (U.S., Puerto Rico, Guam, or Canada)',
    'Plan to enroll full‑time in a college, university, or vocational/technical school',
    'Minimum GPA typically 2.0',
    'Involvement in work experience/community service'
  ],
  materials: ['Online application', 'Transcript', 'Activity list', 'Financial information'], 
  applicationTip: 'It’s a *volume‑based* program — apply early (opens Oct 15, 2025) and make your extracurriculars pop.', 
  deadline: 'Dec 15, 2025', // verified open/close window :contentReference[oaicite:1]{index=1}
  minGPA: 2.0,
},
{
  title: 'GE‑Reagan Foundation Scholarship Program',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 40000,
  eligibility: [
    'Be a U.S. high school senior graduating winter 2025 or spring 2026',
    'Plan to enroll full‑time in a 4‑year U.S. college/university (fall 2026)',
    'Be a U.S. citizen',
    'Show leadership, integrity, drive, and citizenship',
    'Minimum GPA ~3.0'
  ],
  materials: ['Online application', 'Essay(s)', 'Activities/leadership list', 'Transcript', 'Recommendation(s)'],
  applicationTip: 'This award is *leadership heavy*. Focus essays & activities on service and impact, not just grades.', 
  deadline: 'Jan 5, 2026', // official deadline from Reagan Foundation open cycle info :contentReference[oaicite:0]{index=0}
  minGPA: 3.0,
},
{
  title: 'Hagan Scholarship Foundation Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 60000,
  eligibility: [
    'Be a high school senior (or graduating class of 2026)',
    'Have a minimum unweighted GPA of 3.50',
    'Plan to enroll full‑time at a four‑year U.S. college/university',
    'Demonstrate significant financial need (household AGI ≤ ~$100,000)',
    'Complete required employment hours (work requirement included)',
    'Attend a U.S. high school'
  ],
  materials: ['Online application', 'Transcript', 'FAFSA info (for SAI)', 'Proof of work hours', 'Essay(s)'],
  applicationTip: 'This one *pays to graduate debt‑free* and includes extra supports — show your drive + financial need clearly.', 
  deadline: 'Dec 1, 2025 (Fall cycle) / Mar 15, 2026 (Spring cycle)', // timeline from official Hagan info :contentReference[oaicite:1]{index=1}
  minGPA: 3.5,
},
{
  title: 'Amazon Future Engineer Scholarship',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 40000,
  eligibility: [
    'Be a U.S. high school senior',
    'Plan to pursue a bachelor’s in computer science or related field',
    'Be authorized to work in the U.S. (citizen/perm resident/EAD)',
    'Have a minimum GPA ~2.3',
    'Demonstrate financial need'
  ],
  materials: ['Online application', 'Transcript', 'Essay(s)', 'Proof of CS coursework or assessment'],
  applicationTip: 'This one ties a *paid internship* with the scholarship — highlight tech projects and CS enthusiasm.', 
  deadline: 'Jan 15, 2026', // official deadline from Amazon program page :contentReference[oaicite:2]{index=2}
  minGPA: 2.3,
},
{
  title: 'AXA Achievement Scholarship',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 25000,
  eligibility: [
    'Be a U.S. high school senior',
    'Be a U.S. citizen, national, or legal permanent resident',
    'Demonstrate ambition, drive, and achievement in school, work, or community',
    'Be enrolled full‑time in college for fall after graduation'
  ],
  materials: ['Online application', 'Essay(s)', 'Activities list', 'Recommendation(s)'],
  applicationTip: 'This award *rewards personal initiative*. Show real impact from what *you* put into your community, work, or school.', 
  deadline: 'Dec 15, 2025', // typical deadline from scholarship databases :contentReference[oaicite:3]{index=3}
  minGPA: 0.0,
},
{
  title: 'Women at Microsoft Scholarship',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 5000,
  eligibility: [
    'Identify as a woman',
    'Be a U.S. high school senior planning to pursue a tech/engineering/STEM major',
    'Plan to enroll full‑time at a U.S. college or university',
    'Have minimum GPA ~3.0',
    'Demonstrate financial need'
  ],
  materials: ['Online application', 'Transcript', 'Essay(s)', 'Recommendation(s)'],
  applicationTip: 'This scholarship blends tech focus + financial need — emphasize both in your application.', 
  deadline: 'Varies annually', // verified existence as national opportunity :contentReference[oaicite:4]{index=4}
  minGPA: 3.0,
},
{
  title: 'Microsoft HOLA Scholarship',
  effort: 'Medium Effort',
  field: 'Business',
  amount: 20000,
  eligibility: [
    'Be Hispanic/Latinx high school senior',
    'Plan to enroll full‑time in a U.S. college or university',
    'Plan to study tech, business, or related fields',
    'Minimum GPA ~3.0',
    'Demonstrate financial need'
  ],
  materials: ['Online application', 'Transcript', 'Essay(s)', 'Recommendation(s)'],
  applicationTip: 'This award supports Hispanic/Latinx students pursuing tech or business — highlight leadership and goals clearly.', 
  deadline: 'Varies annually', // program details from scholarship list :contentReference[oaicite:5]{index=5}
  minGPA: 3.0,
},
{
  title: 'Microsoft Disability Scholarship',
  effort: 'Quick/Medium Apply',
  field: 'STEM',
  amount: 5000,
  eligibility: [
    'Be a high school senior living with a documented disability',
    'Plan to enroll at a U.S. college (2‑ or 4‑year) in tech, business, or related fields',
    'Minimum GPA ~2.5'
  ],
  materials: ['Online application', 'Proof of disability', 'Transcript', 'Essay(s)'],
  applicationTip: 'This one’s for students with disabilities — emphasize how your goals intersect with tech and leadership.', 
  deadline: 'Varies annually', // program confirmed in national list :contentReference[oaicite:6]{index=6}
  minGPA: 2.5,
},
{
  title: 'Society of Women Engineers (SWE) Scholarships',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 15000, // varies by specific SWE scholarship (typically $1,000–$15,000)
  eligibility: [
    'Identify as a woman',
    'Be a high school senior or current undergraduate',
    'Plan to pursue an ABET-accredited engineering, computer science, or technology program',
    'Be admitted to or planning to attend a U.S. accredited institution'
  ],
  materials: ['Online application', 'Transcript', 'Essay(s)', 'Recommendation(s)'],
  applicationTip: 'Apply to multiple SWE scholarships at once through the unified portal and emphasize commitment to engineering.',
  deadline: 'Feb 2026 (varies)',
  minGPA: 3.0,
},
{
  title: 'NCWIT Award for Aspirations in Computing (High School)',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 500, // national award; regional/state awards may vary
  eligibility: [
    'Identify as a woman, non-binary, or gender-underrepresented student',
    'Be a U.S. high school student (grades 9–12)',
    'Demonstrate interest and achievement in computing',
    'Be enrolled in a U.S. school or U.S. citizen/permanent resident'
  ],
  materials: ['Online application', 'Short essays', 'Activities list'],
  applicationTip: 'Highlight computing impact — projects, leadership, and initiative matter more than formal coursework.',
  deadline: 'Nov, 2025',
  minGPA: 0.0,
},
{
  title: 'Lockheed Martin STEM Scholarship',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 10000,
  eligibility: [
    'Be a high school senior or college freshman',
    'Be a U.S. citizen',
    'Plan to enroll full-time in a STEM major at an accredited U.S. institution',
    'Demonstrate financial need'
  ],
  materials: ['Online application', 'Transcript', 'FAFSA or financial information', 'Essay(s)'],
  applicationTip: 'This scholarship prioritizes financial need + STEM commitment — clearly connect your goals to real-world impact.',
  deadline: 'April, 2026',
  minGPA: 2.5,
},
{
  title: 'Northrop Grumman Scholarship Fund',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 10000,
  eligibility: [
    'Be a high school senior or undergraduate student',
    'Be a U.S. citizen',
    'Plan to pursue a STEM degree relevant to defense, aerospace, or technology',
    'Demonstrate academic achievement and interest in STEM careers'
  ],
  materials: ['Online application', 'Transcript', 'Essay(s)', 'Recommendation(s)'],
  applicationTip: 'Tailor essays toward national impact, innovation, and long-term STEM career goals.',
  deadline: 'Varies annually (typically spring)',
  minGPA: 3.0,
},
{
  title: 'Amazon Future Engineer Scholarship',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 40000,
  eligibility: [
    'Be a U.S. high school senior',
    'Plan to pursue a degree in computer science or a closely related field',
    'Be authorized to work in the U.S.',
    'Demonstrate financial need'
  ],
  materials: ['Online application', 'Transcript', 'Essay(s)', 'CS coursework or experience evidence'],
  applicationTip: 'Strongly emphasize coding projects, problem-solving mindset, and long-term tech goals.',
  deadline: 'Jan, 2026',
  minGPA: 2.3,
},
{
  title: 'Microsoft Tuition Scholarship',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 5000, // amount varies by specific Microsoft scholarship program
  eligibility: [
    'Be a high school senior',
    'Plan to pursue a degree in computer science, engineering, or related STEM field',
    'Demonstrate academic achievement and interest in technology',
    'Be eligible to attend a U.S. accredited college or university'
  ],
  materials: ['Online application', 'Transcript', 'Essay(s)', 'Recommendation(s)'],
  applicationTip: 'Focus on how technology enables impact — Microsoft values purpose-driven innovation.',
  deadline: 'Varies annually by program',
  minGPA: 3.0,
},
{
  title: 'SunTrust Off to College Scholarship Sweepstakes',
  effort: 'Quick Apply',
  field: 'Any',
  amount: 1000,
  eligibility: [
    'Be a U.S. resident',
    'Be a high school senior, undergraduate student, or parent/legal guardian of a student',
    'Be at least 16 years old',
    'No purchase or SunTrust/Truist account required'
  ],
  materials: ['Online entry form'],
  applicationTip: 'There are no essays or GPA requirements — treat this as a monthly lottery and re-enter whenever eligible.',
  deadline: 'Monthly drawings (ongoing throughout the year)',
  minGPA: 0.0,
},
{
  title: 'Sallie Mae $1,000 Scholarship Sweepstakes',
  effort: 'Quick Apply',
  field: 'Any',
  amount: 1000,
  eligibility: [
    'Be a U.S. resident',
    'Be at least 17 years old',
    'Be a high school junior or senior, undergraduate student, or parent/legal guardian of a student',
    'No purchase or loan required'
  ],
  materials: ['Online entry form'],
  applicationTip: 'This is purely chance-based — set a reminder to enter whenever new sweepstakes open.',
  deadline: 'Monthly drawings (ongoing year-round)',
  minGPA: 0.0,
},
{
  title: 'The Actuarial Foundation Diversity Scholarship',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 4000,
  eligibility: [
    'Be a member of an underrepresented racial or ethnic group',
    'Be a U.S. citizen, permanent resident, DACA recipient, or eligible non-citizen',
    'Be a high school senior or college student planning to pursue actuarial science',
    'Demonstrate interest in actuarial career (through coursework, exams, or activities)'
  ],
  materials: ['Online application', 'Essay', 'Transcript', 'Recommendation'],
  applicationTip: 'Clearly explain *why* actuarial science — admissions reviewers want to see genuine career commitment.',
  deadline: 'May 1, 2026',
  minGPA: 3.0,
},
{
  title: 'Google Lime Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'STEM',
  amount: 10000,
  eligibility: [
    'Be a student with a visible or invisible disability',
    'Be enrolled as a full-time undergraduate or graduate student',
    'Be pursuing a degree in computer science, computer engineering, or a closely related technical field',
    'Demonstrate leadership and academic achievement'
  ],
  materials: ['Resume', 'Transcript', 'Essay responses', 'Recommendation'],
  applicationTip: 'Leadership matters almost as much as academics — highlight advocacy, mentoring, or impact.',
  deadline: 'Dec 4, 2025',
  minGPA: 3.0,
},
{
  title: 'Microsoft Disability Scholarship',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 5000,
  eligibility: [
    'Be a high school senior with a disability',
    'Plan to enroll in a U.S. college or university',
    'Pursue a degree in engineering, computer science, data science, or a related STEM field',
    'Demonstrate financial need and academic achievement'
  ],
  materials: ['Transcript', 'Essay', 'Recommendation'],
  applicationTip: 'Connect your lived experience with disability to your long-term goals in STEM.',
  deadline: 'Mar 15, 2026',
  minGPA: 3.0,
},
{
  title: 'Anne Ford Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 10000,
  eligibility: [
    'Be a graduating high school senior with a documented learning disability or ADHD',
    'Plan to enroll in a full-time bachelor’s degree program',
    'Demonstrate perseverance, self-advocacy, and academic promise'
  ],
  materials: ['Essay(s)', 'Transcript', 'Documentation of disability', 'Recommendation'],
  applicationTip: 'This scholarship values self-advocacy — be honest about challenges *and* growth.',
  deadline: 'Dec 31, 2025',
  minGPA: 0.0,
},
{
  title: 'National Federation of the Blind Scholarships',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 8000,
  eligibility: [
    'Be legally blind in both eyes',
    'Reside in the United States',
    'Be pursuing or planning to pursue a postsecondary degree',
    'Participate in the NFB national convention (attendance required for finalists)'
  ],
  materials: ['Application form', 'Essay', 'Transcript', 'Recommendation'],
  applicationTip: 'Engagement with the blind community and leadership experience strengthens applications.',
  deadline: 'Mar 31, 2026',
  minGPA: 0.0,
},
{
  title: 'LabRoots STEM Scholarship',
  effort: 'Quick Apply',
  field: 'STEM',
  amount: 1000,
  eligibility: [
    'Be enrolled or planning to enroll in an undergraduate or graduate STEM degree program',
    'Attend an accredited college or university',
    'Be at least 18 years old'
  ],
  materials: ['Online application', 'Short essay'],
  applicationTip: 'This is low effort but competitive — be concise and clearly connect your interests to STEM impact.',
  deadline: 'Varies',
  minGPA: 0.0,
},
{
  title: 'Palantir Women in Technology Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'STEM',
  amount: 7000,
  eligibility: [
    'Identify as a woman',
    'Be enrolled in an undergraduate program',
    'Pursue computer science, engineering, or a closely related technical field',
    'Demonstrate academic excellence and leadership'
  ],
  materials: ['Resume', 'Transcript', 'Essay responses'],
  applicationTip: 'Show how you build or lead — Palantir strongly values initiative and problem-solving.',
  deadline: 'Mar, 2026',
  minGPA: 3.0,
},
{
  title: 'Adobe Research Women-in-Technology Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'STEM',
  amount: 10000,
  eligibility: [
    'Identify as a woman',
    'Be enrolled as an undergraduate or master’s student',
    'Pursue computer science, engineering, or a closely related technical field',
    'Demonstrate leadership and academic achievement'
  ],
  materials: ['Resume', 'Transcript', 'Essays'],
  applicationTip: 'Adobe loves interdisciplinary thinkers — highlight creativity *and* technical depth.',
  deadline: 'Dec 1, 2025',
  minGPA: 3.0,
},
{
  title: 'Generation Google Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'STEM',
  amount: 10000,
  eligibility: [
    'Be an undergraduate or graduate student',
    'Pursue computer science or a closely related technical field',
    'Demonstrate leadership, academic excellence, and commitment to diversity'
  ],
  materials: ['Resume', 'Transcript', 'Essay responses', 'Recommendation'],
  applicationTip: 'Impact > prestige — Google wants evidence you lift others as you rise.',
  deadline: 'Jan 2026',
  minGPA: 3.0,
},
{
  title: 'SMART Scholarship-for-Service Program',
  effort: 'In-Depth Portfolio',
  field: 'STEM',
  amount: 200000, // Covers full tuition + stipend rather than a fixed amount
  eligibility: [
    'Be a U.S. citizen',
    'Be enrolled in or accepted to a STEM degree program',
    'Be willing to work for the U.S. Department of Defense after graduation',
    'Maintain academic progress in an approved STEM field'
  ],
  materials: ['Online application', 'Transcript', 'Essays', 'Recommendation'],
  applicationTip: 'Only apply if you’re serious — the service commitment is real and enforced.',
  deadline: 'Dec 1, 2025',
  minGPA: 3.0,
},
{
  title: 'Families of Freedom Scholarship Fund',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 5000, // Award amounts vary based on financial need and program level
  eligibility: [
    'Be a dependent child or spouse of a victim of the September 11, 2001 terrorist attacks',
    'Victim must have been killed or permanently disabled as a direct result of 9/11',
    'Be enrolled or planning to enroll in an accredited college or university',
    'Demonstrate financial need'
  ],
  materials: ['Online application', 'Financial information', 'Transcript'],
  applicationTip: 'Ensure documentation clearly establishes the family relationship and 9/11 impact.',
  deadline: 'Varies by academic year (typically spring)',
  minGPA: 0.0,
},
{
  title: 'Talbots Women’s Scholarship Fund',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 10000,
  eligibility: [
    'Identify as a woman',
    'Be a high school senior or returning adult student',
    'Plan to enroll in a full-time undergraduate program',
    'Demonstrate ambition, leadership, and community involvement'
  ],
  materials: ['Application form', 'Essay', 'Transcript'],
  applicationTip: 'Strong personal narratives about perseverance and future goals do very well here.',
  deadline: 'May 2026',
  minGPA: 0.0,
},
{
  title: 'Project Yellow Light Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 8000,
  eligibility: [
    'Be a high school student or undergraduate student',
    'Be enrolled in an accredited U.S. school',
    'Create an original video, billboard design, or PSA addressing safe driving'
  ],
  materials: ['Creative submission', 'Application form'],
  applicationTip: 'Judges reward originality and emotional impact — not production budget.',
  deadline: 'Apr 1, 2026',
  minGPA: 0.0,
},
{
  title: 'Gloria Barron Prize for Young Heroes',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 10000,
  eligibility: [
    'Be between ages 8 and 18',
    'Be a U.S. or Canadian citizen or permanent resident',
    'Have led or initiated a significant service project that benefits people or the planet'
  ],
  materials: ['Application form', 'Essay', 'Letters of recommendation'],
  applicationTip: 'Impact matters more than scale — clearly show leadership and sustained commitment.',
  deadline: 'Apr 15, 2026',
  minGPA: 0.0,
},
{
  title: 'Tall Clubs International Scholarship',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 1000,
  eligibility: [
    'Be entering first year of college',
    'Meet height requirement: 6’2” or taller for men, 5’10” or taller for women',
    'Be sponsored by a local Tall Clubs International chapter'
  ],
  materials: ['Application form', 'Transcript', 'Essay', 'Local club sponsorship'],
  applicationTip: 'Contact your local Tall Clubs chapter early — sponsorship is mandatory.',
  deadline: 'Mar 2026',
  minGPA: 0.0,
},
{
  title: 'Klingon Language Institute Scholarship',
  effort: 'Medium Effort',
  field: 'Humanities',
  amount: 500, // Amount varies by year and available funds
  eligibility: [
    'Be studying or planning to study a language, including constructed languages (e.g., Klingon)',
    'Be enrolled or planning to enroll in an accredited academic program',
    'Demonstrate serious academic or scholarly interest in language study'
  ],
  materials: ['Application form', 'Essay or proposal'],
  applicationTip: 'They care about intellectual seriousness — explain how language study fits into real academic goals.',
  deadline: 'Varies annually',
  minGPA: 0.0,
},
{
  title: 'National Potato Council Scholarship',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 10000,
  eligibility: [
    'Be a student from a family actively involved in potato production',
    'Be enrolled or planning to enroll in a U.S. college or university',
    'Demonstrate academic achievement and leadership'
  ],
  materials: ['Application form', 'Essay', 'Transcript', 'Recommendation'],
  applicationTip: 'Clearly document your family’s role in potato farming — this is a strict requirement.',
  deadline: 'May 2026',
  minGPA: 0.0,
},
{
  title: 'American Fire Sprinkler Association Scholarship Contest',
  effort: 'Quick Apply',
  field: 'Any',
  amount: 2000,
  eligibility: [
    'Be a high school senior or current college student',
    'Be a legal resident of the United States',
    'Complete the required essay or quiz contest'
  ],
  materials: ['Online application', 'Essay or quiz response'],
  applicationTip: 'Follow instructions exactly — this is a rule-based contest with zero tolerance for errors.',
  deadline: 'Apr 1, 2026',
  minGPA: 0.0,
},
{
  title: 'NRA Foundation Shooting Sports Scholarship',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 100, // Award amounts vary by state association and sponsor
  eligibility: [
    'Participate in competitive shooting sports',
    'Be a high school senior or college student',
    'Be sponsored or endorsed by a shooting sports organization or coach',
    'Meet individual state or program-specific requirements'
  ],
  materials: ['Application form', 'Essay', 'Transcript', 'Shooting sports resume'],
  applicationTip: 'Competition history matters — include verified match results and leadership roles.',
  deadline: 'Varies by state and program',
  minGPA: 0.0,
},
{
  title: 'EOD Warrior Foundation Scholarship',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 100, // Amount varies based on program and degree level
  eligibility: [
    'Be the child or spouse of an Explosive Ordnance Disposal (EOD) technician',
    'EOD technician must have been killed or wounded in the line of duty or served honorably',
    'Be enrolled or planning to enroll in an accredited postsecondary institution'
  ],
  materials: ['Application form', 'Proof of EOD relationship', 'Transcript'],
  applicationTip: 'Have service documentation ready early — verification is required before review.',
  deadline: 'Varies by academic year',
  minGPA: 0.0,
},
{
  title: 'Thespian Scholarships',
  effort: 'Medium Effort',
  field: 'Arts',
  amount: 100, // Amounts vary by year and award type
  eligibility: [
    'Be a high school student',
    'Be a member of the Educational Theatre Association',
    'Demonstrate outstanding achievement in theatre performance or technical theatre',
    'Provide documentation of theatre involvement and leadership'
  ],
  materials: ['Application form', 'Transcript', 'Essay', 'Letters of recommendation', 'Portfolio or performance video (if applicable)'],
  applicationTip: 'Highlight your impact in school or community theatre programs; leadership roles help distinguish your application.',
  deadline: 'Varies by year (typically spring)',
  minGPA: 0.0,
},
{
  title: 'NFMC Scholarships',
  effort: 'Medium Effort',
  field: 'Arts',
  amount: 1000, // Base amount; some awards may be higher
  eligibility: [
    'Be a high school or undergraduate student',
    'Be a member of the National Federation of Music Clubs (or affiliated local club)',
    'Demonstrate excellence in performance, music composition, or music education',
    'Meet any local/state-level competition requirements'
  ],
  materials: ['Application form', 'Transcript', 'Performance recordings or compositions', 'Recommendation letters'],
  applicationTip: 'Strong technical skill combined with community involvement in music is highly valued.',
  deadline: 'Varies by state federation (typically early spring)',
  minGPA: 0.0,
},
{
  title: 'Fashion Scholarship Fund Awards',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 10000, // Varies by specific award
  eligibility: [
    'Be a high school senior or college student pursuing a career in fashion, retail, or design',
    'Demonstrate leadership, creativity, and community involvement',
    'Be enrolled or planning to enroll in an accredited fashion or design program'
  ],
  materials: ['Application form', 'Portfolio', 'Transcript', 'Essay(s)', 'Recommendation letters'],
  applicationTip: 'Quality and creativity in your portfolio is critical — also emphasize leadership and career focus.',
  deadline: 'Varies (typically spring)',
  minGPA: 0.0,
},
{
  title: 'James Beard Foundation National Scholarships',
  effort: 'In-Depth Portfolio',
  field: 'Arts',
  amount: 10000, // Varies by program and award
  eligibility: [
    'Be a high school senior or college student pursuing culinary arts, food studies, or hospitality',
    'Demonstrate academic and culinary excellence',
    'Be enrolled or planning to enroll in an accredited culinary or hospitality program'
  ],
  materials: ['Application form', 'Transcript', 'Essay', 'Letters of recommendation', 'Portfolio (if applicable)'],
  applicationTip: 'Showcase your culinary skills and passion; highlight community or leadership impact in food/hospitality.',
  deadline: 'Varies (typically spring)',
  minGPA: 0.0,
},
{
  title: 'DECA Scholarships',
  effort: 'Medium Effort',
  field: 'Business',
  amount: 1000, // Individual awards vary; multiple scholarships available
  eligibility: [
    'Be a high school senior and a DECA member in good standing',
    'Demonstrate academic achievement and leadership',
    'Plan to pursue a postsecondary degree in business, marketing, finance, hospitality, or related fields'
  ],
  materials: ['Application form', 'Transcript', 'Essay', 'Recommendation letters', 'DECA activity record'],
  applicationTip: 'Focus on leadership roles within DECA and academic excellence; clearly connect your career goals.',
  deadline: 'Feb to Mar 2026 (varies by chapter)',
  minGPA: 0.0,
},
{
  title: 'FBLA National Scholarships',
  effort: 'Medium Effort',
  field: 'Business',
  amount: 1000, // Varies by award
  eligibility: [
    'Be a high school senior and an FBLA member in good standing',
    'Demonstrate leadership, academic achievement, and community involvement',
    'Plan to pursue a degree in business, finance, technology, or related fields'
  ],
  materials: ['Application form', 'Transcript', 'Essay', 'Recommendation letters', 'FBLA activity record'],
  applicationTip: 'Emphasize leadership and service through FBLA; align essay with your future business or career goals.',
  deadline: 'Varies (typically spring)',
  minGPA: 0.0,
},
{
  title: 'National FFA Scholarships',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 1000, // Individual awards vary; multiple scholarships available
  eligibility: [
    'Be an active FFA member',
    'Be a high school senior or college student',
    'Demonstrate leadership, academic achievement, and community involvement',
    'Plan to enroll in an accredited postsecondary institution'
  ],
  materials: ['Application form', 'Transcript', 'Essay', 'Recommendation letters', 'FFA activity record'],
  applicationTip: 'Highlight leadership in FFA and community impact; clearly articulate your career goals in agriculture or STEM.',
  deadline: 'Varies by state and national chapter (typically spring)',
  minGPA: 0.0,
},
{
  title: 'AICPA Scholarship for Accounting Majors',
  effort: 'Medium Effort',
  field: 'Business',
  amount: 5000, // Some awards may vary
  eligibility: [
    'Be a high school senior or college student planning to major in accounting',
    'Be a U.S. citizen or permanent resident',
    'Demonstrate academic excellence and leadership',
    'Enroll or plan to enroll in an accredited U.S. college or university'
  ],
  materials: ['Application form', 'Transcript', 'Essay', 'Recommendation letters'],
  applicationTip: 'Show interest in accounting and long-term career plans; highlight leadership or volunteer experience.',
  deadline: 'Feb 2026',
  minGPA: 3.0,
},
{
  title: 'American Institute of Architects (AIA) Scholarships',
  effort: 'In-Depth Portfolio',
  field: 'Arts',
  amount: 5000, // Varies by award
  eligibility: [
    'Be a high school senior or undergraduate student planning to pursue a degree in architecture or design',
    'Demonstrate excellence in design or architectural studies',
    'Submit a portfolio showcasing creative and technical work'
  ],
  materials: ['Portfolio', 'Transcript', 'Essay', 'Recommendation letters', 'Application form'],
  applicationTip: 'Your portfolio is the centerpiece — quality and originality outweigh quantity.',
  deadline: 'Varies (typically spring)',
  minGPA: 0.0,
},
{
  title: 'American Chemical Society (ACS) Scholars Program',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 5000, // Renewable for up to 4 years
  eligibility: [
    'Be a high school senior planning to pursue a degree in chemistry or related STEM field',
    'Be a U.S. citizen or permanent resident',
    'Demonstrate academic excellence and financial need',
    'Be from an underrepresented minority group in the chemical sciences'
  ],
  materials: ['Application form', 'Transcript', 'Essay', 'Recommendation letters'],
  applicationTip: 'Focus on both academic performance and financial need; highlight chemistry-related achievements.',
  deadline: 'Feb 1, 2026',
  minGPA: 3.0,
},
{
  title: 'The Norman Mailer High School Writing Competition',
  effort: 'Medium Effort',
  field: 'Humanities',
  amount: 1000, // Top prize; other prizes may be smaller
  eligibility: [
    'Be a high school student',
    'Submit an original essay or writing piece according to contest guidelines',
    'Demonstrate creativity, literary skill, and adherence to theme'
  ],
  materials: ['Written submission', 'Application form'],
  applicationTip: 'Focus on originality and voice; follow all contest rules carefully.',
  deadline: 'Apr 2026',
  minGPA: 0.0,
},
{
  title: 'Imagine America High School Scholarship',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 1000, // Varies; some awards higher
  eligibility: [
    'Be a high school senior or graduate planning to enroll in a career college or technical program',
    'Be a U.S. citizen or permanent resident',
    'Demonstrate financial need and academic achievement'
  ],
  materials: ['Application form', 'Essay', 'Transcript'],
  applicationTip: 'Show your career focus and how technical education aligns with your goals.',
  deadline: 'Varies by academic year (typically spring)',
  minGPA: 0.0,
},
{
  title: 'First Generation Student Scholarships',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 5000, // Varies by college; renewable in some cases
  eligibility: [
    'Be a high school senior and first-generation college student',
    'Plan to enroll full-time at the awarding college or university',
    'Demonstrate academic achievement and leadership'
  ],
  materials: ['Application form', 'Essay', 'Transcript', 'Recommendation letters'],
  applicationTip: 'Colleges want your story — explain how being first-gen shaped your ambitions and resilience.',
  deadline: 'Varies by institution (typically early spring)',
  minGPA: 0.0,
},
{
  title: 'Families of Freedom Scholarship Fund',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 100, // Varies based on financial need and award level
  eligibility: [
    'Be a dependent child or spouse of a victim of the September 11, 2001 terrorist attacks',
    'Victim must have been killed or permanently disabled as a direct result of 9/11',
    'Be enrolled or planning to enroll in an accredited college or university',
    'Demonstrate financial need'
  ],
  materials: ['Online application', 'Financial documentation', 'Transcript'],
  applicationTip: 'Provide clear documentation of your family relationship and the 9/11 impact.',
  deadline: 'Varies annually (typically spring)',
  minGPA: 0.0,
},
{
  title: 'Talbots Women\'s Scholarship Fund',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 10000,
  eligibility: [
    'Identify as a woman',
    'Be a high school senior or returning adult student',
    'Plan to enroll in a full-time undergraduate program',
    'Demonstrate leadership, ambition, and community involvement'
  ],
  materials: ['Application form', 'Essay', 'Transcript'],
  applicationTip: 'Strong personal narratives about perseverance and future goals stand out.',
  deadline: 'May 2026',
  minGPA: 0.0,
},
{
  title: 'Project Yellow Light Scholarship',
  effort: 'Creative Submission',
  field: 'Any',
  amount: 8000, // Top prize; multiple awards available
  eligibility: [
    'Be a high school student or undergraduate student',
    'Be enrolled in an accredited U.S. school',
    'Create an original video, billboard design, or PSA promoting safe driving'
  ],
  materials: ['Creative submission', 'Application form'],
  applicationTip: 'Originality and emotional impact are key — storytelling matters more than production budget.',
  deadline: 'Apr 1, 2026',
  minGPA: 0.0,
},
{
  title: 'Gloria Barron Prize for Young Heroes',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 10000, // Top prize; smaller awards may also be given
  eligibility: [
    'Be between ages 8 and 18',
    'Be a U.S. or Canadian citizen or permanent resident',
    'Have led or initiated a significant service project benefiting people or the planet'
  ],
  materials: ['Application form', 'Essay', 'Letters of recommendation'],
  applicationTip: 'Clearly document impact and leadership; judges prioritize sustained commitment over scale.',
  deadline: 'Apr 15, 2026',
  minGPA: 0.0,
},
{
  title: 'Cameron Impact Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 100000, // Covers full tuition, fees, room, and board
  eligibility: [
    'Be a high school senior',
    'Demonstrate exceptional leadership and commitment to public service',
    'Be academically outstanding',
    'U.S. citizen or permanent resident'
  ],
  materials: ['Application form', 'Essay(s)', 'Recommendation letters', 'Interview (if selected)'],
  applicationTip: 'Focus on leadership impact, initiative, and future societal contribution — this is what sets candidates apart.',
  deadline: 'Jan 2026',
  minGPA: 0.0,
},
{
  title: 'Park Scholarships',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 100000, // Full ride: tuition, fees, room, and board at NC State
  eligibility: [
    'Be a high school senior applying to NC State University',
    'Demonstrate exceptional leadership, scholarship, service, and character',
    'U.S. citizen or permanent resident'
  ],
  materials: ['Application form', 'Transcript', 'Essay(s)', 'Recommendation letters', 'Interview'],
  applicationTip: 'Leadership and community service are heavily weighted — show sustained impact over time.',
  deadline: 'Nov 2025',
  minGPA: 0.0,
},
{
  title: 'Robertson Scholars Leadership Program',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 100000, // Full ride at Duke University & UNC Chapel Hill
  eligibility: [
    'Be a high school senior',
    'Demonstrate exceptional leadership, scholarship, and citizenship',
    'U.S. citizen, permanent resident, or international applicant (depending on program year)'
  ],
  materials: ['Application form', 'Transcript', 'Essay(s)', 'Recommendation letters', 'Interview', 'Video submission (optional)'],
  applicationTip: 'Depth of leadership and initiative in both school and community activities is crucial.',
  deadline: 'Jan 2026',
  minGPA: 0.0,
},
{
  title: 'Morehead-Cain Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 100000, // Full ride at UNC Chapel Hill
  eligibility: [
    'Be a high school senior',
    'Demonstrate outstanding leadership, moral force of character, scholarship, and physical vigor',
    'U.S. citizen, permanent resident, or international student'
  ],
  materials: ['Application form', 'Transcript', 'Essay(s)', 'Recommendation letters', 'Interview'],
  applicationTip: 'This scholarship evaluates holistic excellence — academics, character, leadership, and personal vitality.',
  deadline: 'Jan 2026',
  minGPA: 0.0,
},
{
  title: 'Jefferson Scholarships',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 100000, // Full ride at University of Virginia
  eligibility: [
    'Be a high school senior applying to UVA',
    'Demonstrate exceptional leadership, scholarship, and citizenship',
    'U.S. citizen or permanent resident'
  ],
  materials: ['Application form', 'Transcript', 'Essay(s)', 'Recommendation letters', 'Interview'],
  applicationTip: 'Highlight leadership achievements and intellectual curiosity — interviews are heavily weighted.',
  deadline: 'Jan 2026',
  minGPA: 0.0,
},
{
  title: 'Mork Family Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 100000, // Full ride plus additional benefits at USC
  eligibility: [
    'Be a high school senior applying to USC',
    'Demonstrate exceptional leadership, scholarship, and service',
    'U.S. citizen or permanent resident'
  ],
  materials: ['Application form', 'Transcript', 'Essay(s)', 'Recommendation letters', 'Interview'],
  applicationTip: 'Focus on a vision for leadership and service — emphasize initiative and long-term impact.',
  deadline: 'Jan 2026',
  minGPA: 0.0,
},
{
  title: 'Stamps Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 100000, // Full ride + enrichment funds at partner universities
  eligibility: [
    'Be a high school senior applying to a participating Stamps partner university',
    'Demonstrate academic excellence, leadership, service, and character',
    'U.S. or international applicants depending on school'
  ],
  materials: ['Application form', 'Transcript', 'Essay(s)', 'Recommendation letters', 'Interview'],
  applicationTip: 'Each partner university may have additional requirements; leadership, scholarship, and service are essential.',
  deadline: 'Varies by partner university (typically Nov–Dec 2025)',
  minGPA: 0.0,
},
{
  title: 'Posse Foundation Scholarship',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 100000, // Full tuition + support at partner colleges/universities
  eligibility: [
    'Be a high school senior',
    'Demonstrate exceptional leadership, academic achievement, and personal character',
    'Be a U.S. citizen, permanent resident, or have appropriate immigration status',
    'Participate in Posse Foundation selection process and interviews'
  ],
  materials: ['Application form', 'Transcript', 'Essay(s)', 'Recommendation letters', 'Interview', 'Group evaluation exercises'],
  applicationTip: 'Emphasize leadership, teamwork, and community impact — selection is highly holistic.',
  deadline: 'Varies by city (typically Oct–Nov 2025)',
  minGPA: 0.0,
},
{
  title: 'QuestBridge National College Match',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 100000, // Full ride to partner colleges/universities
  eligibility: [
    'Be a high school senior from a low-income background',
    'Be academically outstanding (typically top 5–10% of class)',
    'U.S. citizen, permanent resident, or DACA recipient',
    'Apply through the QuestBridge online process'
  ],
  materials: ['Application form', 'Transcript', 'Essay(s)', 'Recommendation letters', 'Standardized test scores (if required by partner school)'],
  applicationTip: 'Demonstrate both academic excellence and resilience; the essay is critical for contextualizing your achievements.',
  deadline: 'Sept 27, 2025 (National College Match)',
  minGPA: 0.0,
},
{
  title: 'Buick Achievers Scholarship Program',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 2500, // Renewable up to $25,000 over four years
  eligibility: [
    'Be a high school senior or current undergraduate',
    'Plan to enroll full-time at an accredited U.S. college or university',
    'Demonstrate academic achievement and leadership',
    'Preferably be first in family to attend college'
  ],
  materials: ['Application form', 'Transcript', 'Essay(s)', 'Recommendation letters'],
  applicationTip: 'Highlight academic accomplishments, leadership, and first-generation experience if applicable.',
  deadline: 'Feb 1, 2026',
  minGPA: 3.0,
},
{
  title: 'Ayn Rand Institute Essay Contests',
  effort: 'Medium Effort',
  field: 'Humanities',
  amount: 10000, // Top prizes; multiple awards per contest
  eligibility: [
    'Be a high school student',
    'Submit an essay in response to prompts based on "The Fountainhead" or "Atlas Shrugged"',
    'Follow contest guidelines for word count and formatting'
  ],
  materials: ['Essay submission', 'Application form'],
  applicationTip: 'Focus on clear argumentation, understanding of Rand’s philosophy, and originality of thought.',
  deadline: 'Apr 28, 2026 (The Fountainhead), Jan 28, 2026 (Atlas Shrugged)',
  minGPA: 0.0,
},
{
  title: 'JFK Profile in Courage Essay Contest',
  effort: 'Medium Effort',
  field: 'Humanities',
  amount: 10000, // National top prize; other prizes available
  eligibility: [
    'Be a high school student in grades 9–12',
    'Submit an essay on an act of political courage by a U.S. elected official',
    'Follow contest guidelines for length and format'
  ],
  materials: ['Essay submission', 'Application form'],
  applicationTip: 'Demonstrate strong research, originality, and understanding of political courage.',
  deadline: 'Apr 15, 2026',
  minGPA: 0.0,
},
{
  title: 'SPIE Optics and Photonics Education Scholarship',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 5000, // Varies by award
  eligibility: [
    'Be a high school senior or undergraduate student',
    'Plan to pursue a degree in optics, photonics, physics, or engineering',
    'Demonstrate academic achievement and interest in optics/photonics',
    'U.S. citizen or international students may be eligible depending on award'
  ],
  materials: ['Application form', 'Transcript', 'Essay', 'Recommendation letters'],
  applicationTip: 'Highlight your optics/photonics projects or research; clear articulation of interest matters.',
  deadline: 'Feb 15, 2026',
  minGPA: 3.0,
},
{
  title: 'National WWII Museum Essay Contest',
  effort: 'Medium Effort',
  field: 'Humanities',
  amount: 5000, // Top prize; other prizes available
  eligibility: [
    'Be a high school student',
    'Submit an essay responding to the annual WWII-themed prompt',
    'Follow contest guidelines for length and formatting'
  ],
  materials: ['Essay submission', 'Application form'],
  applicationTip: 'Demonstrate historical accuracy, critical thinking, and engaging storytelling.',
  deadline: 'Mar 15, 2026',
  minGPA: 0.0,
},
{
  title: 'The American Legion National High School Oratorical Contest',
  effort: 'Medium Effort',
  field: 'Humanities',
  amount: 18000, // Top national prize; multiple levels of awards
  eligibility: [
    'Be a high school student under 20 years old',
    'Compete at local, district, and state levels before advancing nationally',
    'Demonstrate knowledge of the U.S. Constitution and public speaking skills'
  ],
  materials: ['Speech submission', 'Application form', 'Local/state competition participation'],
  applicationTip: 'Practice delivery, clarity, and timing; knowledge of the Constitution is critical.',
  deadline: 'Varies by post and state (national finals typically Apr 2026)',
  minGPA: 0.0,
},
{
  title: 'Baptist Health Teen of Impact Scholarship',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 5000, // Award varies by year and region
  eligibility: [
    'Be a high school student in the region served by Baptist Health',
    'Demonstrate leadership and positive impact in health or community initiatives',
    'Be academically eligible and maintain good character'
  ],
  materials: ['Application form', 'Essay', 'Transcript', 'Recommendation letters'],
  applicationTip: 'Clearly showcase your leadership and measurable impact in your community or school health initiatives.',
  deadline: 'Mar 2026',
  minGPA: 0.0,
},
{
  title: 'National Honor Society Scholarship',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 2500, // Varies by school chapter
  eligibility: [
    'Be an active member of the National Honor Society (NHS)',
    'Be a high school senior in good standing',
    'Demonstrate scholarship, leadership, service, and character'
  ],
  materials: ['Application form (through NHS chapter)', 'Transcript', 'Essay', 'Recommendation letters'],
  applicationTip: 'Emphasize leadership and service accomplishments in school and community; your chapter advisor can guide specifics.',
  deadline: 'Varies by school chapter (typically spring 2026)',
  minGPA: 3.5,
},
{
  title: 'U.S. Senate Youth Program',
  effort: 'In-Depth Portfolio',
  field: 'Humanities',
  amount: 10000, // Scholarship + Washington Week experience
  eligibility: [
    'Be a high school junior or senior',
    'Demonstrate leadership in student government or civic activities',
    'Be nominated by your state’s Department of Education or equivalent',
    'U.S. citizen'
  ],
  materials: ['Application form', 'Essay', 'Transcript', 'Recommendation letters', 'Interview or selection process'],
  applicationTip: 'Focus on leadership in student government and civic engagement; your commitment to public service is key.',
  deadline: 'Varies by state (typically Jan–Feb 2026)',
  minGPA: 0.0,
},
{
  title: 'Toyota Teen Driver Video Challenge',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 5000, // Top national prize; other prizes also available
  eligibility: [
    'Be a high school student',
    'Create an original video promoting safe driving habits',
    'Follow contest rules regarding length, content, and submission format'
  ],
  materials: ['Video submission', 'Application form'],
  applicationTip: 'Creativity, clarity of message, and emotional impact matter more than production quality.',
  deadline: 'Apr 30, 2026',
  minGPA: 0.0,
},
{
  title: 'Ronald Reagan Presidential Foundation Scholarship Program',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 10000, // Top prize; other awards may vary
  eligibility: [
    'Be a high school senior',
    'Demonstrate leadership, communication skills, and citizenship',
    'U.S. citizen',
    'Plan to enroll full-time in an accredited U.S. college or university'
  ],
  materials: ['Application form', 'Essay', 'Transcript', 'Recommendation letters'],
  applicationTip: 'Emphasize civic involvement and leadership; show how you embody Reagan’s principles.',
  deadline: 'Jan 7, 2026',
  minGPA: 3.0,
},
{
  title: 'Naval ROTC Scholarship Program',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 1000, // Full tuition, fees, books, plus monthly stipend
  eligibility: [
    'Be a U.S. citizen',
    'Be a high school senior applying to a participating college/university',
    'Meet physical, medical, and academic requirements',
    'Demonstrate leadership potential and commitment to serve in the Navy or Marine Corps'
  ],
  materials: ['Application form', 'Transcript', 'SAT/ACT scores', 'Physical exam', 'Interview'],
  applicationTip: 'Strong academics, leadership, and physical fitness are equally important; demonstrate commitment to naval service.',
  deadline: 'Varies by year and NROTC unit (typically Jan 2026)',
  minGPA: 3.0,
},
{
  title: 'AFCEA STEM Major Scholarships',
  effort: 'Medium Effort',
  field: 'STEM',
  amount: 5000, // Some awards higher
  eligibility: [
    'Be a high school senior',
    'Plan to pursue a degree in a STEM field at an accredited college or university',
    'Demonstrate academic excellence and leadership',
    'U.S. citizen'
  ],
  materials: ['Application form', 'Transcript', 'Essay', 'Recommendation letters'],
  applicationTip: 'Highlight STEM achievements and leadership; extracurricular STEM projects strengthen your application.',
  deadline: 'Jan 31, 2026',
  minGPA: 3.0,
},
{
  title: 'Mike Rowe WORKS Foundation Scholarship',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 2500, // Some awards higher; renewable for multiple years
  eligibility: [
    'Be a high school senior or current postsecondary student',
    'Plan to pursue a career in a skilled trade at a vocational or technical school',
    'Demonstrate commitment, passion, and financial need'
  ],
  materials: ['Application form', 'Essay', 'Transcript', 'Recommendation letters'],
  applicationTip: 'Show genuine interest in a skilled trade; the foundation values dedication and hands-on experience.',
  deadline: 'Feb 1, 2026',
  minGPA: 0.0,
},
{
  title: 'Roothbert Fund Scholarships',
  effort: 'Medium Effort',
  field: 'Any',
  amount: 10000, // Top award; amounts vary
  eligibility: [
    'Be a high school senior',
    'Demonstrate motivation and integrity guided by spiritual values (any faith or none)',
    'Plan to enroll in an accredited college or university',
    'Exhibit leadership and service'
  ],
  materials: ['Application form', 'Essay', 'Transcript', 'Recommendation letters'],
  applicationTip: 'Be authentic about your values and how they guide your actions; leadership and service are emphasized.',
  deadline: 'Jan 15, 2026',
  minGPA: 3.0,
},
{
  title: 'FFA American Star Awards',
  effort: 'In-Depth Portfolio',
  field: 'Any',
  amount: 10000, // National top prizes; other awards available
  eligibility: [
    'Be an active FFA member',
    'Be a high school senior or recently graduated',
    'Demonstrate excellence in FFA career development events, leadership, and community involvement',
    'Plan to pursue a career in agriculture or related field'
  ],
  materials: ['Application form', 'Essay', 'FFA activity record', 'Transcript', 'Recommendation letters'],
  applicationTip: 'Document measurable achievements in FFA and leadership; quality of experience matters more than quantity.',
  deadline: 'Varies by FFA state and national competition (typically Mar–Apr 2026)',
  minGPA: 0.0,
}
];