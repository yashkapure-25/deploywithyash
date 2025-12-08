import { 
  Cloud, 
  Server, 
  Code, 
  Terminal, 
  ShieldCheck, 
  Database, 
  Box, 
  Globe, 
  Cpu,
  GraduationCap,
  Backpack,
  User,
  Briefcase,
  HelpCircle,
  Award,
  FileCode,
  Palette,
  Zap,
  CloudLightning,
  Network,
  Layers,
  Activity,
  GitBranch,
  GithubIcon,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';
import { Project, Experience, Certification, Course, EducationStage, SocialLink } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'EduVerse', href: '#eduverse' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Courses', href: '#courses' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const HERO_ROLES = [
  "UI/UX Designer",
  "DevOps Engineer",
  "AWS Engineer"
];

export const TECH_STACK = [
  { name: 'AWS', icon: Cloud, color: 'text-orange-500' },
  { name: 'Terraform', icon: Terminal, color: 'text-purple-500' },
  { name: 'Kubernetes', icon: Globe, color: 'text-blue-400' },
  { name: 'Cloud Compute', icon: CloudLightning, color: 'text-yellow-400' },
  { name: 'Docker', icon: Box, color: 'text-blue-500' },
  { name: 'Networking', icon: Network, color: 'text-cyan-400' },
  { name: 'Infrastructure', icon: Layers, color: 'text-green-400' },
  { name: 'Monitoring', icon: Activity, color: 'text-pink-400' },
  { name: 'Jenkins', icon: Server, color: 'text-red-500' },
  { name: 'CI/CD', icon: GitBranch, color: 'text-indigo-400' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AWS Auto-Scaling Web App",
    description: "Designed a highly available web architecture handling varying traffic loads automatically.",
    tags: ["AWS", "Terraform", "AutoScaling"],
    techStack: ["EC2", "ALB", "CloudWatch", "Terraform", "GitHub Actions"],
    image: "https://picsum.photos/600/400?random=1",
    link: "#",
    livePreview: "#"
  },
  {
    id: 2,
    title: "CI/CD Pipeline with Jenkins",
    description: "End-to-end automation pipeline for microservices deployment reducing manual intervention by 90%.",
    tags: ["DevOps", "CI/CD", "Docker"],
    techStack: ["Jenkins", "Docker", "AWS EC2", "Shell Scripting", "SonarQube"],
    image: "https://picsum.photos/600/400?random=2",
    link: "#",
    livePreview: "#"
  },
  {
    id: 3,
    title: "Kubernetes Deployment on EKS",
    description: "Orchestrated a multi-container application with monitoring and auto-healing capabilities.",
    tags: ["Kubernetes", "Monitoring", "Cloud"],
    techStack: ["EKS", "Prometheus", "Grafana", "Helm", "Ingress Controller"],
    image: "https://picsum.photos/600/400?random=3",
    link: "#",
    livePreview: "#"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "GenieUs Tech",
    role: "AWS & DevOps Intern",
    period: "Aug 2024 – Jun 2025",
    icon: Cloud,
    responsibilities: [
      "Built CI/CD pipelines using Jenkins & GitHub Actions.",
      "Automated AWS deployments via Terraform & CloudFormation.",
      "Managed EC2, S3, IAM, Lambda, and CloudWatch resources.",
      "Dockerized legacy workloads and assisted with K8s migration.",
      "Developed monitoring dashboards and cost-optimization scripts."
    ]
  }
];

export const EDUCATION_TIMELINE: EducationStage[] = [
  {
    id: 1,
    stage: "Schooling",
    description: "Mother Queen's English School, Sawantwadi",
    year: "2018 - 2019",
    icon: Backpack,
    grades: "71.60%"
  },
  {
    id: 2,
    stage: "Primary College",
    description: "Institute of Petrochemical Engineering Lonere, Raigad. - Diploma in Computer Engineering",
    year: "2019 - 2022",
    icon: GraduationCap,
    grades: "8.03 CGPA"
  },
  {
    id: 3,
    stage: "Secondary College",
    description: "New Horizon Institute of Technology & Management, Thane - Bachelors of Engineering in Computer Science.",
    year: "2022 - 2026",
    icon: Briefcase,
    grades: "Ongoing"
  },
  {
    id: 4,
    stage: "Next Education",
    description: "Master's Degree? Specialization? The journey continues...",
    year: "Future",
    icon: HelpCircle
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "AWS Educate - Getting Started with Compute",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQGjzNNVutA63w/feedshare-shrink_480/feedshare-shrink_480/0/1732024388075?e=1766620800&v=beta&t=KM5F1QzRAhFC_18uHFxfkx_Wn9vuadbHdaVTW1fp3lo",
    category: "Badge",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQGjzNNVutA63w/feedshare-shrink_480/feedshare-shrink_480/0/1732024388075?e=1766620800&v=beta&t=KM5F1QzRAhFC_18uHFxfkx_Wn9vuadbHdaVTW1fp3lo"
  },
  {
    id: 2,
    title: "AWS Educate - Getting Started with Storage",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFAeRQDwB2DKA/feedshare-shrink_480/feedshare-shrink_480/0/1732082899160?e=1766620800&v=beta&t=p2ZO2RLop3mv7eiWXp2y28igfLWWjP6SffP5gV0f8KY",
    category: "Badge",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQFAeRQDwB2DKA/feedshare-shrink_480/feedshare-shrink_480/0/1732082899160?e=1766620800&v=beta&t=p2ZO2RLop3mv7eiWXp2y28igfLWWjP6SffP5gV0f8KY"
  },
  {
    id: 3,
    title: "Aws Educate - Introduction to Generative AI",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQGq56JkJNIWew/feedshare-shrink_480/feedshare-shrink_480/0/1732349272870?e=1766620800&v=beta&t=rJsA4L0eIiLH5hwPPxFXqSOUEjpRpma1n8DStWj1tUQ",
    category: "Badge",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQGq56JkJNIWew/feedshare-shrink_480/feedshare-shrink_480/0/1732349272870?e=1766620800&v=beta&t=rJsA4L0eIiLH5hwPPxFXqSOUEjpRpma1n8DStWj1tUQ"
  },
  {
    id: 4,
    title: "Aws Educate - Getting Started with Networking",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEUWT-VEAlYKQ/feedshare-shrink_480/feedshare-shrink_480/0/1732350371987?e=1766620800&v=beta&t=QcVdUggmbb-pRuRH5gvE-CViKOQHj26sdFNEIMH5S5o",
    category: "Badge",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQEUWT-VEAlYKQ/feedshare-shrink_480/feedshare-shrink_480/0/1732350371987?e=1766620800&v=beta&t=QcVdUggmbb-pRuRH5gvE-CViKOQHj26sdFNEIMH5S5o"
  },
  {
    id: 5,
    title: "Aws Educate - Getting Started with Databases",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQG9pl9JyB_LQQ/feedshare-shrink_480/feedshare-shrink_480/0/1732902194790?e=1766620800&v=beta&t=1rxJfMaqt5kc45Gm7r2lV3MdCGfhJOkjzDkJQ3QAu74",
    category: "Badge",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQG9pl9JyB_LQQ/feedshare-shrink_480/feedshare-shrink_480/0/1732902194790?e=1766620800&v=beta&t=1rxJfMaqt5kc45Gm7r2lV3MdCGfhJOkjzDkJQ3QAu74"
  },
  {
    id: 6,
    title: "Aws Educate - Machine Learning Foundations",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://media.licdn.com/dms/image/v2/D5622AQG-3D_CWRUMMw/feedshare-shrink_480/feedshare-shrink_480/0/1732690309010?e=1766620800&v=beta&t=XuzPf4IKHeEdde7MCUFhetlzbNghscAX94J54a4racs",
    category: "Badge",
    link: "https://media.licdn.com/dms/image/v2/D5622AQG-3D_CWRUMMw/feedshare-shrink_480/feedshare-shrink_480/0/1732690309010?e=1766620800&v=beta&t=XuzPf4IKHeEdde7MCUFhetlzbNghscAX94J54a4racs"
  },
  {
    id: 7,
    title: "Aws Well-Architected - Proficient",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFLvtE0MSFZ3Q/feedshare-shrink_480/feedshare-shrink_480/0/1733389453226?e=1766620800&v=beta&t=L_i3kE7CyB4UPRgpS_PPDNjmsRwgTNs96fgm7vIPDR8",
    category: "AWS",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQFLvtE0MSFZ3Q/feedshare-shrink_480/feedshare-shrink_480/0/1733389453226?e=1766620800&v=beta&t=L_i3kE7CyB4UPRgpS_PPDNjmsRwgTNs96fgm7vIPDR8"
  },
  {
    id: 8,
    title: "Aws Technology - Cloud Essentials",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://media.licdn.com/dms/image/v2/D5622AQFd5Dwccfl9-w/feedshare-shrink_480/B56ZOvr8FcGcAc-/0/1733819352097?e=1766620800&v=beta&t=1ZRnXJP-fKza-MjaN0PeVz_ZN6jx5_wulwG3qj_hClM",
    category: "AWS",
    link: "https://media.licdn.com/dms/image/v2/D5622AQFd5Dwccfl9-w/feedshare-shrink_480/B56ZOvr8FcGcAc-/0/1733819352097?e=1766620800&v=beta&t=1ZRnXJP-fKza-MjaN0PeVz_ZN6jx5_wulwG3qj_hClM"
  },
  {
    id: 9,
    title: "Aws Educate - Getting Started with Serverless",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQGZOCfERafr8Q/feedshare-shrink_480/B4DZSHIXiuHIAY-/0/1737433907242?e=1766620800&v=beta&t=s8Q4d51KMhKI__ETL0OK_3WcuSI9clONQf4jhlVjYLM",
    category: "Badge",
    link: "https://www.credly.com/earner/earned/badge/bb11992a-9434-40ab-b615-75a6e665785c"
  },
  {
    id: 9,
    title: "Aws Educate - Machine Learning DeepRacer",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEoMxer8Onh-Q/feedshare-shrink_480/B4DZZtVp03H4AY-/0/1745591115541?e=1766620800&v=beta&t=c_8maqbsAVVRaGJ395VCqvmY43BYmdVZ8g5NefCoje0",
    category: "Badge",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQEoMxer8Onh-Q/feedshare-shrink_480/B4DZZtVp03H4AY-/0/1745591115541?e=1766620800&v=beta&t=c_8maqbsAVVRaGJ395VCqvmY43BYmdVZ8g5NefCoje0"
  },
  {
    id: 10,
    title: "Aws Educate - Cloud Computing 101",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQG6xFXt__l8UQ/feedshare-shrink_480/B4DZZ1690mG4AY-/0/1745735114606?e=1766620800&v=beta&t=bt1iCwECzHaxqKsEhUj8m_E2mZdePeTWhfpZLXyREkU",
    category: "Badge",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQG6xFXt__l8UQ/feedshare-shrink_480/B4DZZ1690mG4AY-/0/1745735114606?e=1766620800&v=beta&t=bt1iCwECzHaxqKsEhUj8m_E2mZdePeTWhfpZLXyREkU"
  },
  {
    id: 11,
    title: "Aws Educate - Getting Started with Cloud Operations",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEzcLY_00uKVg/feedshare-shrink_480/B4DZZtd54SG0Ac-/0/1745593278601?e=1766620800&v=beta&t=RzgRVkhrSLkaexQTge65_i5h2cShAh9EzqHrGTmYdfA",
    category: "Badge",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQEzcLY_00uKVg/feedshare-shrink_480/B4DZZtd54SG0Ac-/0/1745593278601?e=1766620800&v=beta&t=RzgRVkhrSLkaexQTge65_i5h2cShAh9EzqHrGTmYdfA"
  },
  {
    id: 12,
    title: "Aws Educate - Getting Started with Security",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQHLf0Kf_Y-OOQ/feedshare-shrink_480/B4EZaHe8_gGQAY-/0/1746029761107?e=1766620800&v=beta&t=9G5wwior7o2Q-qVq3zNU6Fk_g-sgveJjS0O7lkQYe7w",
    category: "Badge",
    link: "https://media.licdn.com/dms/image/v2/D4E22AQHLf0Kf_Y-OOQ/feedshare-shrink_480/B4EZaHe8_gGQAY-/0/1746029761107?e=1766620800&v=beta&t=9G5wwior7o2Q-qVq3zNU6Fk_g-sgveJjS0O7lkQYe7w"
  },
  {
    id: 13,
    title: "Aws Educate - Emerging Talent Community",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQH73NFQJ5TyvQ/feedshare-shrink_480/B4DZaq.B2RHwAc-/0/1746625110079?e=1766620800&v=beta&t=-Zs4oH2owAj_ql-Fbnfj2HeWcyi86znkFoC3sMFw91g",
    category: "AWS",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQH73NFQJ5TyvQ/feedshare-shrink_480/B4DZaq.B2RHwAc-/0/1746625110079?e=1766620800&v=beta&t=-Zs4oH2owAj_ql-Fbnfj2HeWcyi86znkFoC3sMFw91g"
  },
  {
    id: 14,
    title: "Aws Educate - Web Application Development Builder",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQH-vHX51im2dA/feedshare-shrink_480/B4DZbIQLHIGYAc-/0/1747116405683?e=1766620800&v=beta&t=6J3zdp_foRBeeYXBKpsWhTC2radhJPUI4929Wj_5hOc",
    category: "Badge",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQH-vHX51im2dA/feedshare-shrink_480/B4DZbIQLHIGYAc-/0/1747116405683?e=1766620800&v=beta&t=6J3zdp_foRBeeYXBKpsWhTC2radhJPUI4929Wj_5hOc"
  },
  {
    id: 15,
    title: "Aws Cloud Quest - Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQH35TMtckUekw/feedshare-shrink_480/B4DZi92q25GQAg-/0/1755531882528?e=1766620800&v=beta&t=us9EUeiXoV8LXLT8_Gao0SEQjqXBpWYJ5v-736PkbAM",
    category: "AWS",
    link: "https://www.credly.com/badges/f2eb8dfb-3ede-4ecf-968b-8d5e8a5afdc0/public_url"
  },
  {
    id: 16,
    title: "Google Cloud - Network Observability on Google Cloud",
    issuer: "Google Cloud",
    date: "2025",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFBas3rQYrLAA/feedshare-shrink_480/B4DZqxYDl5JAAc-/0/1763912465794?e=1766620800&v=beta&t=HUqqYr7mMa1cBVfPqluPkkYTu503JGm3N9Tw6EianXU",
    category: "Badge",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQFBas3rQYrLAA/feedshare-shrink_480/B4DZqxYDl5JAAc-/0/1763912465794?e=1766620800&v=beta&t=HUqqYr7mMa1cBVfPqluPkkYTu503JGm3N9Tw6EianXU"
  },
  {
    id: 16,
    title: "Certifications Of Completion - Master in Full Stack Web Development With AWS",
    issuer: "I.T.Vedant",
    date: "2025",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFLOxh4w_UQ4w/feedshare-shrink_480/B4DZaaaBAfH0AY-/0/1746347237231?e=1766620800&v=beta&t=BqeMei48Gquv-9FS6XS10dirn6WXPyrS2KrbUF8F1Yo",
    category: "Course",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQFBas3rQYrLAA/feedshare-shrink_480/B4DZqxYDl5JAAc-/0/1763912465794?e=1766620800&v=beta&t=HUqqYr7mMa1cBVfPqluPkkYTu503JGm3N9Tw6EianXU"
  },
  {
    id: 17,
    title: "Certifications Of Completion - AWS Cloud Practititoner [AWS C2I]",
    issuer: "I.T.Vedant",
    date: "2025",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFU8wIg1TvYxw/feedshare-shrink_480/B4DZSneuTkHYAY-/0/1737976637593?e=1766620800&v=beta&t=PxEXnb_CJE5-OoLlHSiAU5vPV00z2yKFdcrL_W4dWAI",
    category: "Course",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQFU8wIg1TvYxw/feedshare-shrink_480/B4DZSneuTkHYAY-/0/1737976637593?e=1766620800&v=beta&t=PxEXnb_CJE5-OoLlHSiAU5vPV00z2yKFdcrL_W4dWAI"
  },
  {
    id: 18,
    title: "Aws Training and Certification - Aws Cloud Practitioner Essentials",
    issuer: "Amazon Web Service",
    date: "2024",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFgdArgIvtRzg/feedshare-shrink_480/feedshare-shrink_480/0/1733411983241?e=1766620800&v=beta&t=510x4-j_PoB64obVtWGQbZGyJQn35r8cu7XOfzjCtrM",
    category: "Course",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQFgdArgIvtRzg/feedshare-shrink_480/feedshare-shrink_480/0/1733411983241?e=1766620800&v=beta&t=510x4-j_PoB64obVtWGQbZGyJQn35r8cu7XOfzjCtrM"
  },
  {
    id: 19,
    title: "Aws Training and Certification - Aws Well-Architected Foundations",
    issuer: "Amazon Web Service",
    date: "2024",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEmyqjg7iRRLQ/feedshare-shrink_480/feedshare-shrink_480/0/1733339034935?e=1766620800&v=beta&t=Ren4kRoMuqeXqOO1_k00Nwv4wh0Qd6lGwcFh1wJePyo",
    category: "Course",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQEmyqjg7iRRLQ/feedshare-shrink_480/feedshare-shrink_480/0/1733339034935?e=1766620800&v=beta&t=Ren4kRoMuqeXqOO1_k00Nwv4wh0Qd6lGwcFh1wJePyo"
  },
];

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Master's In Full Stack Development with Aws",
    provider: "Itvedant Education Pvt.Ltd.",
    description: "Skilled full-stack developer with expertise in  AWS cloud infrastructure and DevOps.",
    skills: ["Python", "Django", "Bootstrap", "JavaScript", "HTML", "CSS","AWS"],
    link: "https://www.itvedant.com/python-full-stack-developer-course?utm_location=&utm_device=m&utm_adgroupid=175847327245&utm_network=g&gad_source=1&gad_campaignid=22618550777&gbraid=0AAAAADFJMPSXV12UPpzgRYzCOHaDaPP23&gclid=EAIaIQobChMIw8bl9LSrkQMV8qNmAh1DiTbJEAAYASAAEgLPofD_BwE"
  },
  {
    id: 2,
    title: "Decoding DevOps - From Basics to Advanced Projects with AI",
    provider: "Udemy",
    description: "Basics to Advanced DevOps concepts Master Linux, networking, scripting, AWS, CI/CD, Terraform, Ansible, Docker, and Kubernetes. Build real-world pipelines with GitOps, monitoring tools, and automation using AI-powered assistants..",
    skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS", "CI/CD"],
    link: "https://www.udemy.com/share/104Tz6/"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yashkapure-25',
    icon: GithubIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yash-kapure-full-stack-developer/',
    icon: Linkedin
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/YashKapure25',
    icon: Twitter
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/yash.kapoure/',
    icon: Facebook
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yashkapure_1925/?hl=en',
    icon: Instagram
  }
];