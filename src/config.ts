export const siteConfig = {
  name: "Ankit Ramkumar Vishwakarma",
  title: "Java Backend Developer | Spring Boot | PostgreSQL | REST APIs",
  description: "Portfolio website of Ankit Vishwakarma - showcasing projects, skills, and experience in backend development.",
  accentColor: "#1d4ed8",
  location: "Pune, India",
  social: {
    email: "ankitvis210@gmail.com",
    linkedin: "https://linkedin.com/in/ankit-vis",
    twitter: "https://x.com/gravelly_",
    github: "https://github.com/AnkitV15",
  },
  aboutMe:
    "I am a Computer Science student graduating in 2025 with strong skills in Java, Spring Boot, PostgreSQL, and RESTful APIs. I enjoy building backend systems, solving problems, and working on projects that connect software with real-world impact. I have internship experience building backend services and multiple academic projects in transaction systems and network security. I am eager to join a company as a Java or Backend Developer and contribute from day one.",
  skills: [
    "Java",
    "Spring Boot",
    "PostgreSQL/MYSQL",
    "Mongodb",
    "REST APIs",
    "Python",
    "Machine Learning",
    "AWS",
    "Git",
  ],
  projects: [
    {
      name: "Tracktrove Micro-Transaction Explorer",
      description:
        "Java Spring Boot backend for a micro-transaction platform. Implemented REST APIs, Redis for caching, WebSockets for real-time updates, and automated job scheduling with Quartz.",
      link: "https://github.com/AnkitV15/Tracktrove-backend", // replace with actual repo link if available
      skills: ["Java", "Spring Boot", "PostgreSQL", "Redis", "WebSockets"],
    },
    {
      name: "Real-Time Intrusion Detection System (IDS)",
      description:
        "Built an IDS in Python to analyze network traffic and detect suspicious activity. Integrated a machine learning model for classification and developed a Flask dashboard for real-time alerts.",
      link: "https://github.com/AnkitV15/IDS", // replace with actual repo link
      skills: ["Python", "Flask", "Scapy", "Machine Learning"],
    },
  ],
  hackathons: [
    {
      name: "AlphaByte 1.0 Hackathon — Anantya 2024",
      description: "Participated in a 24-hour hackathon focused on AI solutions. Our team built a real-time sentiment analysis tool for customer feedback.",
      link: "https://devpost.com/your-project-link", // Optional: Link to Devpost, GitHub, or a demo
      skills: ["Python", "Flask", "Natural Language Processing", "Chart.js"],
    },
    // You can add more hackathons here in the future
  ],
  experience: [
      {
        company: "Maharashtra Metro Rail Corp Ltd",
        title: "Software Engineer Intern",
        dateRange: "Mar 2025 - Jul 2025",
        bullets: [
          "Built and optimized REST APIs using Java and Spring Boot for metro-related data services.",
          "Integrated external APIs (e.g., Google Maps) to improve location-based features.",
          "Improved database queries in PostgreSQL, reducing response times by 20%.",
          "Debugged and fixed critical backend issues to ensure smooth system operations.",
        ],
      },
    ],
  education: [
    {
      school: "Dr. Babasaheb Ambedkar Technological University",
      degree: "Bachelor of Technology in Computer Science",
      dateRange: "2021 - 2025",
      achievements: [
        "Relevant Coursework: Data Structures, Database Management, Machine Learning, Software Engineering, Systems Programming",
        "Led a student team to design 3D AR prototypes using Unity",
      ],
    },
    {
      school: "Gayatri Junior College",
      degree: "XII (Science)",
      dateRange: "2019 - 2021",
      achievements: [
        "Survived the pandemic years while keeping grades intact.",
        "Balanced online classes, chaos, and still made it to engineering.",
        "Learned the art of functioning on 12+ hrs of sleep — ultimate system optimization."
      ],
    },
  ],
};
