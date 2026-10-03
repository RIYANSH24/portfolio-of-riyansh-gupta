/*
 * Portfolio content lives here so text, dates, links and asset paths can be
 * updated without changing the page components. Add only verified details.
 */
export const profile = {
  name: "Riyansh Gupta",
  location: "Delhi, India",
  email: "riyanshgupta844@gmail.com",
  phone: "+91 84477 6852",
  phoneLink: "+918447776852",
  linkedin: "https://www.linkedin.com/in/riyansh-gupta-2a49b8315",
  instagram: "https://www.instagram.com/re_diaries_8606/",
  instagramLabel: "@re_diaries_8606",
  education: "BBA — Digital Marketing",
  institution: "Jagan Nath University",
  educationDates: "2024–2027",
  cgpa: "8.2"
};

export const experiences = [
  {
    id: "studentsaathi",
    organization: "Studentsaathi",
    location: "Jaipur",
    role: "Digital Marketing Intern",
    dates: "June 2025 – September 2025",
    summary: "Supported social media and digital marketing work across Instagram, Facebook, Twitter/X and Threads.",
    work: ["Social media management", "Social content and platform-specific posts", "Content scheduling", "Brand communication", "SEO and on-page optimization", "Blogs and landing pages", "Website updates", "Analytics monitoring", "User engagement", "Lead-generation support"],
    brandLinks: [
      { label: "Facebook", icon: "facebook", url: "https://www.facebook.com/profile.php?id=61576199981554" },
      { label: "Instagram", icon: "instagram", url: "https://www.instagram.com/student.saathi/" },
      { label: "X", icon: "x", url: "https://x.com/StudentSaathi_" },
      { label: "Website", icon: "website", url: "https://studentsaathi.com/" }
    ],
    certificateImage: "public/assets/projects/studentsaathi/internship-completion.jpeg",
    mediaFolder: "public/assets/projects/studentsaathi/"
  },
  {
    id: "matiz-brite",
    organization: "H.P. Products · Matiz Brite",
    location: "",
    role: "Marketing Intern",
    dates: "1 June 2026 – 31 July 2026",
    summary: "Supported Matiz Brite’s digital presence through Google Business Profile management, content strategy and branding updates.",
    work: ["Google Business Profile management", "Content strategy", "Branding updates", "Customer relationship management", "Deal negotiation", "Product promotion", "Digital brand communication"],
    brandLinks: [
      { label: "Google Business Profile", icon: "google-business", url: "https://share.google/HJeYmKtODhlngER2q" },
      { label: "Website", icon: "website", url: "https://matizbrite.in/" }
    ],
    certificateImage: "public/assets/projects/matiz-brite/internship-completion.png",
    mediaFolder: "public/assets/projects/matiz-brite/"
  }
];

export const projects = [
  {
    id: "studentsaathi-social",
    number: "01",
    title: "Multi-platform social media",
    brand: "Studentsaathi",
    category: "Social media",
    type: "Experience",
    role: "Digital Marketing Intern",
    date: "June–September 2025",
    description: "Social content and digital marketing support across Instagram, Facebook, Twitter/X and Threads.",
    objective: "Support consistent, platform-aware brand communication.",
    approach: "Create and schedule social content, contribute to SEO and website updates, and support engagement and lead generation.",
    tools: ["Social media", "SEO", "Content", "Website updates", "Analytics"],
    metrics: [],
    mediaFolder: "public/assets/projects/studentsaathi/",
    tags: ["Social media", "Instagram", "Content", "SEO", "Websites"]
  },
  {
    id: "matiz-brite-digital",
    number: "02",
    title: "Digital marketing & brand promotion",
    brand: "Matiz Brite · H.P. Products",
    category: "Brand & digital marketing",
    type: "Experience",
    role: "Marketing Intern",
    date: "June–July 2026",
    description: "Marketing support spanning product promotion, online listings, social content and brand communication.",
    objective: "Support Matiz Brite's digital brand promotion and online visibility.",
    approach: "Contribute to SEO-oriented content, local listing work, product listings and marketing creatives.",
    tools: ["SEO", "Product marketing", "Social content", "Brand communication"],
    metrics: [],
    mediaFolder: "public/assets/projects/matiz-brite/",
    tags: ["Social media", "SEO", "Branding", "Content"]
  },
  {
    id: "rediaries",
    number: "03",
    title: "Short-form motorcycle content",
    brand: "REDiaries",
    category: "Personal content project",
    type: "Personal project",
    role: "Content creator",
    date: "23 January – 24 March 2026 snapshot",
    description: "Created and managed short-form motorcycle content for the REDiaries Instagram account.",
    objective: "Make and publish short-form Royal Enfield and motorcycle content.",
    approach: "Create Reels and review performance across the stated reporting period.",
    tools: ["Instagram Reels", "Short-form content", "Performance review"],
    metrics: [
      { value: "38", label: "Reels created" },
      { value: "88K", label: "Reel views" },
      { value: "54K", label: "Viewers" },
      { value: "4.9K", label: "Likes" },
      { value: "2.8K", label: "Shares" },
      { value: "483", label: "Saves" },
      { value: "397", label: "Comments" },
      { value: "286", label: "Reposts" }
    ],
    metricsLabel: "Instagram performance snapshot · 23 Jan – 24 Mar 2026",
    mediaFolder: "public/assets/projects/rediaries/",
    tags: ["Social media", "Instagram", "Reels", "Content"],
    link: "https://www.instagram.com/re_diaries_8606/"
  },
  {
    id: "late-night-delivery",
    number: "04",
    title: "2 AM Wala Mood",
    brand: "Late Night Delivery · Presentation project",
    category: "Campaign concept",
    type: "Presentation",
    role: "Presentation project",
    date: "",
    description: "A late-night delivery campaign concept built around the digital habits of students, gamers and late-night professionals.",
    objective: "Explore how a nighttime audience might respond to a timely delivery message.",
    approach: "The presentation framed WhatsApp push communication around a relatable late-night mood.",
    tools: ["Audience thinking", "Campaign concept", "WhatsApp communication"],
    metrics: [],
    mediaFolder: "public/assets/projects/presentations/late-night-delivery/",
    tags: ["Campaigns", "Presentation"]
  },
  {
    id: "rajasthan-tourism",
    number: "05",
    title: "Rajasthan Tourism",
    brand: "Digital campaign · Presentation project",
    category: "Campaign concept",
    type: "Presentation",
    role: "Presentation project",
    date: "30-day campaign plan",
    description: "A 30-day digital campaign presentation focused on an audience, content, paid media and campaign strategy.",
    objective: "Shape a digital campaign approach for Rajasthan heritage tourism.",
    approach: "Organize the plan around audience, content, paid media and campaign strategy.",
    tools: ["Audience research", "Content planning", "Paid media planning"],
    metrics: [],
    mediaFolder: "public/assets/projects/presentations/rajasthan-tourism/",
    tags: ["Campaigns", "Presentation"]
  }
];

export const certificates = [
  {
    id: "reliance-digital-marketing",
    title: "Certificate Course in Digital Marketing",
    issuer: "Reliance Foundation Skilling Academy · Skill India Digital Hub",
    date: "30 January 2026",
    detail: "140 hours",
    credentialId: "RFSA000372739",
    image: "public/assets/certificates/reliance-digital-marketing.jpeg",
    linkedInPost: ""
  },
  {
    id: "saylor-digital-marketing",
    title: "BUS632: Digital Marketing and Advertising",
    issuer: "Saylor Academy",
    date: "29 January 2026",
    detail: "32 hours · Grade: 80%",
    credentialId: "7589152830RG",
    image: "public/assets/certificates/saylor-digital-marketing.jpeg",
    linkedInPost: ""
  },
  {
    id: "swayam-soft-skills",
    title: "Soft Skills for Business",
    issuer: "SWAYAM · Christ (Deemed to be University), Bangalore",
    date: "9 July 2025",
    detail: "Four-credit course · Consolidated score: 93.3%",
    credentialId: "",
    image: "public/assets/certificates/soft-skills-for-business.jpeg",
    linkedInPost: ""
  },
  {
    id: "digital-school-ai-marketing",
    title: "AI in Digital Marketing",
    issuer: "The Digital School · Masterclass",
    date: "17 December 2025",
    detail: "",
    credentialId: "",
    image: "public/assets/certificates/ai-in-digital-marketing.jpeg",
    linkedInPost: ""
  },
  {
    id: "digital-school-chatgpt",
    title: "ChatGPT Masterclass",
    issuer: "The Digital School · Masterclass",
    date: "23 December 2025",
    detail: "",
    credentialId: "",
    image: "public/assets/certificates/chatgpt-masterclass.jpeg",
    linkedInPost: ""
  },
  {
    id: "tally-prime",
    title: "Tally & Tally Prime",
    issuer: "N.C.C.T. · Centre for Computer Training, Ashok Vihar",
    date: "April–June 2026",
    detail: "Three-month Tally course",
    credentialId: "",
    image: "public/assets/certificates/tally-prime.jpg",
    sourceDocument: "public/assets/certificates/tally-prime.pdf",
    linkedInPost: ""
  },
  {
    id: "marketing-automation-foundations",
    title: "Marketing Automation Foundations",
    issuer: "Simplilearn SkillUp",
    date: "8 August 2026",
    detail: "Certificate of completion",
    credentialId: "10572707",
    image: "public/assets/certificates/marketing-automation-foundations.png",
    sourceDocument: "public/assets/certificates/marketing-automation-foundations.pdf",
    linkedInPost: ""
  },
  {
    id: "generative-ai-for-marketers",
    title: "Generative AI for Marketers",
    issuer: "Simplilearn SkillUp",
    date: "5 August 2026",
    detail: "Online course",
    credentialId: "10559743",
    image: "public/assets/certificates/generative-ai-for-marketers.jpeg",
    linkedInPost: ""
  }
];

export const internshipCertificates = [
  {
    id: "studentsaathi-internship",
    title: "Certificate of Internship",
    issuer: "Studentsaathi",
    date: "Three-month internship · 2025",
    detail: "Digital Marketing and Content Creation",
    credentialId: "",
    image: "public/assets/projects/studentsaathi/internship-completion.jpeg",
    linkedInPost: ""
  },
  {
    id: "matiz-brite-internship",
    title: "Certificate of Completion",
    issuer: "H.P. Products · Matiz Brite",
    date: "31 July 2026",
    detail: "Two-month Marketing Intern program",
    credentialId: "",
    image: "public/assets/projects/matiz-brite/internship-completion.png",
    linkedInPost: ""
  }
];

export const recognition = [
  {
    title: "Certificate of Excellence",
    issuer: "AACOL",
    date: "10 April 2025",
    description: "Recognition for contribution, motivational speech and exemplary collaboration during Summer Camp 2025.",
    image: "public/assets/certificates/aacol-excellence.jpeg",
    linkedInPost: ""
  }
];
