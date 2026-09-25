export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions & Fees", href: "/admissions" },
  { label: "News & Events", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const topContact = {
  address: "Plot 60–66 Ssebugwawo Road, Entebbe, Uganda",
  phone: "+256 772 619 865",
  whatsapp: "+256 779 223 927",
  email: "vmontessori@yahoo.co.uk",
  poBox: "P.O. Box 528, Entebbe",
};

export type SocialPlatform =
  | "facebook"
  | "instagram"
  | "youtube"
  | "twitter"
  | "tiktok"
  | "linkedin";

export const socialLinks: ReadonlyArray<{
  platform: SocialPlatform;
  label: string;
  url: string | null;
}> = [
  { platform: "facebook", label: "Facebook", url: null },
  { platform: "instagram", label: "Instagram", url: null },
  { platform: "youtube", label: "YouTube", url: null },
  { platform: "twitter", label: "X / Twitter", url: null },
  { platform: "tiktok", label: "TikTok", url: null },
  { platform: "linkedin", label: "LinkedIn", url: null },
];

export const schoolIdentity = {
  name: "Victoria Montessori School",
  founded: "2001",
  motto: "Knowledge is Wealth",
  programmeDescriptor:
    "Providing Montessori-inspired education from early childhood through Primary Seven.",
};

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePositionClassName?: string;
  overlayClassName?: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
};

export const heroSlides: HeroSlide[] = [
  {
    id: "welcome",
    eyebrow: "Welcome to Victoria Montessori School",
    title: "Nurturing Curious Minds.",
    highlightedTitle: "Building Confident Individuals.",
    description:
      "Montessori-inspired education in Entebbe from early childhood through Primary Seven, nurturing independent, confident and responsible learners.",
    image: "/hero-image.jpeg",
    imageAlt: "Victoria Montessori School grounds",
    primaryAction: { label: "Explore Our School", href: "#about" },
    secondaryAction: { label: "Admissions", href: "/admissions" },
  },
  {
    id: "anniversary",
    eyebrow: "Celebrating 25 Years",
    title: "25 Years of Learning, Growth & Purpose",
    description:
      "Since 2001, Victoria Montessori has supported generations of children, families and educators in Entebbe. On 25 April 2026, the school marked 25 years since its founding.",
    image: "/vms-25th-anniversary.webp",
    imageAlt: "Victoria Montessori School 25th Anniversary, April 25, 2026",
    imagePositionClassName: "object-center sm:object-[60%_center] lg:object-[65%_center]",
    overlayClassName:
      "bg-gradient-to-r from-primary-900/90 via-primary-900/48 to-primary-900/10 sm:from-primary-900/85 sm:via-primary-900/35 sm:to-transparent",
    primaryAction: { label: "Discover Our Story", href: "/about" },
    secondaryAction: { label: "View Celebration", href: "/gallery/25th-anniversary" },
  },
  {
    id: "montessori-learning",
    eyebrow: "Montessori Learning",
    title: "Learning Through Discovery, Independence & Purpose",
    description:
      "A child-centred approach that combines hands-on learning, prepared environments and growing responsibility.",
    image: "/about-image.jpeg",
    imageAlt: "A Victoria Montessori School building",
    primaryAction: { label: "Explore Academics", href: "/academics" },
  },
  {
    id: "admissions",
    eyebrow: "Admissions & Visits",
    title: "Begin Your Child's Journey at Victoria Montessori",
    description:
      "Learn about our programmes, arrange a school visit and speak with our admissions team.",
    image: "/admissions-cta-2.jpeg",
    imageAlt: "A Victoria Montessori School community scene",
    primaryAction: { label: "View Admissions", href: "/admissions" },
    secondaryAction: { label: "Contact Us", href: "/contact" },
  },
];

export const officeHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const heroHighlights = [
  {
    title: "Montessori Method",
    description: "Child-centred, hands-on learning that builds independence and concentration.",
    icon: "GraduationCap",
  },
  {
    title: "Whole-child Development",
    description: "Supporting intellectual, social, and spiritual growth for every child.",
    icon: "Users",
  },
  {
    title: "Montessori Heritage",
    description: "Rooted in a longstanding history of Montessori teacher training and international collaboration.",
    icon: "Globe2",
  },
  {
    title: "Day & Boarding",
    description: "A caring, secure environment offering both day and boarding options.",
    icon: "ShieldCheck",
  },
];

export const aboutPoints = [
  "Founded in 2001 Montessori-inspired education from early childhood through Primary Seven",
  "Mixed day and boarding school fostering independence and confidence",
  "A longstanding connection to the wider international Montessori community",
];

export const programs = [
  {
    title: "Early Years",
    grade: "Early Childhood",
    description: "A carefully prepared Montessori environment that fosters exploration and independence.",
    icon: "BookOpen",
  },
  {
    title: "Lower Primary",
    grade: "Primary 1–3",
    description: "Hands-on learning that builds strong foundations in literacy, numeracy and practical life skills.",
    icon: "PenLine",
  },
  {
    title: "Upper Primary",
    grade: "Primary 4–7",
    description: "Focused academic growth with opportunities for creative and critical thinking.",
    icon: "FlaskConical",
  },
  {
    title: "Co-Curricular",
    grade: "Clubs & Activities",
    description: "Music, art, sports and community activities that complement classroom learning.",
    icon: "Trophy",
  },
];

export const stats = [
  { value: "2001", label: "Founded", icon: "GraduationCap" },
  { value: "Early Years–P7", label: "Learning Journey", icon: "Users" },
  { value: "Montessori", label: "Approach", icon: "UserCheck" },
  { value: "Day & Boarding", label: "Program Type", icon: "Trophy" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "News & Events", href: "/news" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export const founderProfile = {
  name: "Mrs. Christine Olanya",
  title: "Founder & Director",
  paragraphs: [
    "Victoria Montessori School was founded in 2001 by Christine Olanya and her husband, Joseph Olanya, with a vision of bringing child-centred Montessori education to families in Entebbe.",
    "Christine's Montessori journey began through international educational collaboration in the late 1990s. In 1999, with support from members of the Montessori community in the United States, she travelled there for Montessori teacher training and completed an internship with North Shore Montessori Schools. She returned to Uganda in 2000 to begin planning a model Montessori school in Entebbe.",
    "In 2001, that vision became Victoria Montessori School, initially opening its doors to approximately 30 preschool children. Under Christine's leadership, the school continued to grow, expanding its learning facilities and extending Montessori education into the primary years.",
    "Christine's work has also extended beyond the classroom. In 2006, she received the Ursula Thrush Peace Seed Grant from the American Montessori Society, supporting peace education initiatives among children and schools in Uganda. In 2007, Christine and Joseph participated in the American Montessori Society's Global Forum at the United Nations, and the Victoria Montessori Teacher Training Center officially opened in Entebbe.",
    "Her educational philosophy continues to centre on independence, peace, responsibility, confidence and respect for every child's individual potential.",
  ],
};

export const schoolJourney = [
  {
    year: "1999",
    title: "Montessori Training",
    description:
      "Christine travels to the United States for Montessori teacher training and internship.",
  },
  {
    year: "2000",
    title: "Planning the Vision",
    description:
      "Christine returns to Uganda and begins planning a Montessori school in Entebbe.",
  },
  {
    year: "2001",
    title: "Victoria Montessori Opens",
    description:
      "The school opens with approximately 30 preschool children.",
  },
  {
    year: "2004",
    title: "Primary Expansion",
    description: "A new five-room facility opens for elementary pupils.",
  },
  {
    year: "2006",
    title: "Education for Peace",
    description:
      "Christine receives the Ursula Thrush Peace Seed Grant from the American Montessori Society and develops peace-focused educational initiatives.",
  },
  {
    year: "2007",
    title: "Teacher Training",
    description:
      "The Victoria Montessori Teacher Training Center officially opens in Entebbe.",
  },
];

// ------------------------------------------------------------------
// About page
// ------------------------------------------------------------------
export const montessoriApproach = [
  { title: "Curiosity & Exploration", description: "Encouraging children to question, discover and understand the world around them.", icon: "Compass" },
  { title: "Independence & Confidence", description: "Building self-reliance and the belief that every child is capable.", icon: "Sparkles" },
  { title: "Concentration & Discipline", description: "Developing focus and order through purposeful, hands-on activity.", icon: "Target" },
  { title: "Creativity & Imagination", description: "Space to explore ideas and express original thinking.", icon: "Palette" },
  { title: "Critical & Independent Thinking", description: "Guiding children to reason, question and solve problems for themselves.", icon: "BrainCircuit" },
  { title: "Practical Life Skills", description: "Everyday skills that build responsibility and self-sufficiency.", icon: "HandHeart" },
  { title: "Respect for Others & Environment", description: "Cultivating courtesy, empathy and care for shared spaces.", icon: "HeartHandshake" },
  { title: "A Lifelong Love of Learning", description: "Nurturing genuine curiosity that lasts well beyond the classroom.", icon: "BookOpenCheck" },
];

export const wholeChildPillars = [
  { title: "Spiritual Objective", description: "Developing character, inner peace, compassion, respect and strong moral values in a peaceful, orderly environment.", icon: "HeartHandshake" },
  { title: "Intellectual Objective", description: "Nurturing curiosity, creativity, critical thinking, academic ability and a lifelong desire to learn.", icon: "BrainCircuit" },
  { title: "Social Objective", description: "Developing cooperation, courtesy, empathy, communication, independence and respect for others.", icon: "Users" },
];

export const lifeSkills = [
  { title: "Independence", description: "Learning to make decisions, take responsibility, and become increasingly self-reliant.", icon: "Compass" },
  { title: "Confidence", description: "Understanding their own worth and developing the confidence to participate, communicate and learn.", icon: "Sparkles" },
  { title: "Creativity", description: "Exploring ideas, asking questions, solving problems and approaching experiences with curiosity.", icon: "Palette" },
  { title: "Cooperation", description: "Learning to work with others through sharing, communication, courtesy and mutual respect.", icon: "Users" },
  { title: "Responsibility", description: "Understanding that our choices affect ourselves, other people and the environment.", icon: "HandHeart" },
  { title: "Lifelong Learning", description: "Developing an attitude toward learning that extends beyond the classroom.", icon: "BookOpenCheck" },
];

// ------------------------------------------------------------------
// Academics page
// ------------------------------------------------------------------
export const academicLevels = [
  { stage: "Early Years", ageRange: "2–3 years", title: "Toddler Programme", description: "A gentle introduction to a structured Montessori environment, building early independence and social confidence.", icon: "Baby" },
  { stage: "Early Years", ageRange: "3–6 years", title: "Nursery Level", description: "Hands-on Montessori materials that develop practical life skills, language, sensorial awareness and early numeracy.", icon: "GraduationCap" },
  { stage: "Primary", ageRange: "P.1 – P.3", title: "Lower Primary", description: "Building strong foundations in literacy, numeracy and practical life skills within the Montessori approach.", icon: "PenTool" },
  { stage: "Primary", ageRange: "P.4 – P.7", title: "Upper Primary", description: "Focused academic growth with opportunities for creative, critical and independent thinking.", icon: "FlaskConical" },
];

export const academicApproachPoints = [
  "Grounded in Montessori principles and a carefully prepared environment",
  "Informed by Victoria Montessori's longstanding international Montessori connections",
  "Hands-on, child-led learning within a carefully prepared environment",
  "A healthy balance between work, exploration and play",
];

export const academicSkillAreas = [
  { title: "Explore ideas through hands-on learning", icon: "HandHeart" },
  { title: "Develop critical and creative thinking", icon: "BrainCircuit" },
  { title: "Build strong academic foundations", icon: "BookOpenCheck" },
  { title: "Work independently", icon: "Compass" },
  { title: "Develop problem-solving abilities", icon: "Target" },
  { title: "Make decisions and think for themselves", icon: "Sparkles" },
];

// ------------------------------------------------------------------
// Admissions & Fees page
// ------------------------------------------------------------------
export const admissionSteps = [
  { step: "1", title: "Enquire", description: "Reach out by phone, WhatsApp or email to learn about the programme that fits your child's age." },
  { step: "2", title: "Visit the School", description: "Book a visit to see our Montessori classrooms and learning environment in person." },
  { step: "3", title: "Submit Application", description: "Complete the application with your child's details, previous school history and health information." },
  { step: "4", title: "Share Family & Care Details", description: "Provide family contacts, emergency contacts and transportation requirements." },
  { step: "5", title: "Confirm Enrolment", description: "Once reviewed, we confirm placement and welcome your child into the Victoria Montessori community." },
];

export const applicationRequirements = [
  "Child's previous school experience (if any) and preferred name",
  "Age and class sought",
  "Day or boarding status",
  "Transportation requirements",
  "Family contacts and emergency contacts",
  "Health information",
  "Previous academic records",
];

export const admissionsInfo = [
  { title: "Day & Boarding", description: "Choose day scholar or boarding status based on what best suits your family.", icon: "Building2" },
  { title: "School Transport", description: "Van services are available on designated routes around Entebbe and surrounding areas.", icon: "Bus" },
  { title: "Early Childhood to Primary Seven", description: "Programmes span early childhood classes through to Primary Seven learners.", icon: "GraduationCap" },
];

export const feesNote = {
  title: "Fee Structure",
  description:
    "School fees include breakfast and lunch for all children, and snacks for nursery children. Fees below are per term, in Uganda Shillings (UGX).",
};

export const admissionFee = {
  amount: "100,000/=",
  note: "Payable once per child, on admission. Non-refundable.",
};

export const tuitionFees = [
  {
    className: "6 months – 2½ years",
    note: "New Programme",
    entryTerm: "900,000/=",
    termTwo: "820,000/=",
    termThree: "820,000/=",
  },
  {
    className: "3 – 6 years",
    note: "Nursery Level",
    entryTerm: "980,000/=",
    termTwo: "840,000/=",
    termThree: "840,000/=",
  },
  {
    className: "P.1 – P.3",
    note: "Lower Primary",
    entryTerm: "990,000/=",
    termTwo: "940,000/=",
    termThree: "940,000/=",
  },
  {
    className: "P.4 – P.7",
    note: "Upper Primary",
    entryTerm: "1,040,000/=",
    termTwo: "990,000/=",
    termThree: "990,000/=",
  },
];

export const boardingFee = {
  amount: "560,000/=",
  note: "Added to school fees each term, for boarding pupils.",
};

export const optionalActivities = [
  { name: "Swimming every Thursday of the week", fee: "150,000/= per term" },
  { name: "Music lessons (optional)", fee: "200,000/= per term" },
  { name: "Tour", fee: "Open" },
];

export const transportRates = [
  {
    zone: "Entebbe town, Katabi, Busambaga, Cannon Site, Kitubulu, Kabale, Bunono",
    oneWay: "200,000/=",
    twoWay: "400,000/=",
  },
  {
    zone: "Kitoro, Nakiwogo, Lunyo, Baita, Nkumba, Nkumba Bwaisi, Mpala, Kitala, Bubuli, Fisheries",
    oneWay: "250,000/=",
    twoWay: "500,000/=",
  },
  {
    zone: "Kisubi, Kawuku Mosque, Namulanda Stage, Garuga, Nalugala, Sky Beach",
    oneWay: "300,000/=",
    twoWay: "600,000/=",
  },
];

export const uniformFees = [
  { section: "Nursery Section", girl: "263,000/=", boy: "230,000/=" },
  { section: "Primary 1 – 3", girl: "300,000/=", boy: "247,000/=" },
  { section: "Primary 4 – 7", girl: "323,000/=", boy: "278,000/=" },
  { section: "Boarding Uniform", girl: "129,000/=", boy: "129,000/=" },
];

export const paymentBanks = [
  { bank: "Dfcu Bank", account: "01983501006955", charge: "Bank charge of 2,900/= applies" },
  { bank: "Bank of Africa", account: "08323200009", charge: "Bank charge of 2,500/= applies" },
  { bank: "Stanbic Bank", account: "9030000384932", charge: "Bank charge of 3,000/= applies" },
];

export const feesPledge =
  "We pledge to continue to provide the best all-round education using the Montessori approach of learning to our learners.";

// ------------------------------------------------------------------
// Gallery
// Collections are intentionally neutral until additional school photography
// and confirmed event details are available.
// ------------------------------------------------------------------
export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type GalleryCollection = {
  slug: string;
  title: string;
  description?: string;
  coverImage?: string;
  images: GalleryImage[];
};

export const galleryCollections: GalleryCollection[] = [
  {
    slug: "school-campus",
    title: "School Campus",
    description: "A view of the Victoria Montessori School environment.",
    images: [
      {
        src: "/about-image.jpeg",
        alt: "A Victoria Montessori School building",
      },
    ],
  },
  {
    slug: "learning-environment",
    title: "Learning Environment",
    description: "A collection of scenes from the school learning environment.",
    images: [
      {
        src: "/admissions-cta.jpeg",
        alt: "A Victoria Montessori School learning scene",
      },
    ],
  },
  {
    slug: "school-community",
    title: "School Community",
    description: "Everyday moments from the Victoria Montessori School community.",
    images: [
      {
        src: "/admissions-cta-2.jpeg",
        alt: "A Victoria Montessori School community scene",
      },
    ],
  },
  {
    slug: "25th-anniversary",
    title: "25th Anniversary",
    description: "Victoria Montessori School's 25th anniversary in 2026.",
    images: [
      {
        src: "/vms-25th-anniversary.webp",
        alt: "Victoria Montessori School 25th Anniversary, April 25, 2026",
      },
    ],
  },
];

export function getGalleryCollection(slug: string) {
  return galleryCollections.find((collection) => collection.slug === slug);
}
