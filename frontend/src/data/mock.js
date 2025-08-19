// Mock data for Neevia's portfolio
export const portfolioData = {
  personal: {
    name: "Neevia Theresa Vinod",
    title: "Computer Science Student & AI Researcher",
    location: "McKinney, Texas",
    email: "vinodneevia@gmail.com",
    phone: "(979)-800-0333",
    linkedin: "https://www.linkedin.com/in/neevia-vinod-19994a295/",
    github: "https://github.com/jjkmenot",
    bio: "Passionate Computer Science student specializing in AI research and full-stack development. Currently conducting research on IoT security using post-quantum cryptography while building innovative web applications.",
    gpa: "3.90/4.00",
    expectedGraduation: "May 2027"
  },

  experience: [
    {
      id: 1,
      title: "Undergraduate AI Research Assistant",
      company: "University of North Texas",
      location: "Denton, Texas",
      period: "April 2025 – Present",
      type: "research",
      description: "Conducting applied research to improve the security of Physical Unclonable Functions (PUFs) in IoT-enabled smart village infrastructure using lattice-based post-quantum cryptography (PQC).",
      highlights: [
        "Designed and simulated secure embedded systems integrating cryptographic key generation, authentication, and hardware-level entropy analysis",
        "Collaborated with professors to evaluate PQC schemes (NTRU, Falcon, CRYSTALS)",
        "Supported integration into low-power embedded platforms"
      ],
      skills: ["Post-Quantum Cryptography", "IoT Security", "Embedded Systems", "Research"]
    },
    {
      id: 2,
      title: "Technical Communication Lab Assistant",
      company: "University of North Texas", 
      location: "Denton, Texas",
      period: "Aug 2024 - Present",
      type: "technical",
      description: "Assist 60+ STEM students per semester in improving code documentation, project reports, and API guides — bridging communication gaps in technical teams.",
      highlights: [
        "Reviewed and edited technical writing assignments with focus on clarity and industry standards",
        "Designed and delivered software and hardware training to students and faculty",
        "Utilized Adobe Creative Suite to develop lab documents and posters"
      ],
      skills: ["Technical Writing", "Training", "Adobe Creative Suite", "Mentoring"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Evenly",
      subtitle: "Roommate Management Web App",
      period: "Jan 2025 – June 2025",
      type: "Individual Project",
      location: "Denton, Texas",
      category: "Full-Stack Development",
      description: "A comprehensive web application that helps roommates efficiently split bills, assign and track household chores, and share apartment-wide announcements.",
      features: [
        "Developed and secured RESTful APIs using Node.js and Express",
        "Handled user authentication, group data sharing, and transaction logic",
        "Designed and normalized SQL database schemas for multi-user access",
        "Implemented real-time data updates across devices"
      ],
      technologies: ["Node.js", "Express.js", "SQL", "JavaScript", "RESTful APIs"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Healthopolis",
      subtitle: "Healthcare Assistant App",
      period: "Nov 2022 – Feb 2023", 
      type: "Team Lead",
      location: "Karnataka, India",
      category: "Healthcare Technology",
      description: "A healthcare assistant application using Python to identify potential medical conditions and recommend physician appointments based on user input.",
      features: [
        "Engineered SQL database operations (add/update/delete) for secure health records",
        "Implemented input validation and comprehensive error handling",
        "Automated appointment scheduling with email reminder functionality",
        "Reduced missed consultations and improved user experience"
      ],
      technologies: ["Python", "SQL", "Email Integration", "Database Design"],
      githubUrl: "#",
      imageUrl: "/api/placeholder/400/250"
    }
  ],

  skills: {
    programming: ["C", "Python", "SQL", "JavaScript", "C++"],
    web: ["HTML", "CSS", "React", "Node.js", "Express.js"],
    ai_ml: ["PyTorch", "Large Language Models", "Natural Language Processing", "ChatGPT", "Gemini", "Claude"],
    tools: ["Git", "Visual Studio Code", "Linux", "PuTTY", "UML", "BigQuery", "Tableau"],
    adobe: ["Adobe InDesign", "Adobe Illustrator", "Camtasia"],
    os: ["Windows", "Linux", "MacOS", "Android"],
    soft_skills: ["Problem-solving", "Critical Thinking", "Communication", "Leadership", "Team Collaboration", "Research & Data Analysis", "Time Management"]
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "University of North Texas",
    location: "Denton, Texas",
    period: "August 2023 - May 2027",
    gpa: "3.90/4.00",
    honors: ["Dean's List", "President's List"]
  },

  certifications: [
    {
      id: 1,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "July 2025",
      type: "cloud"
    },
    {
      id: 2,
      title: "Data Analytics Certificate",
      issuer: "Google",
      date: "April 2025", 
      type: "analytics"
    },
    {
      id: 3,
      title: "Introduction to Artificial Intelligence",
      issuer: "IBM",
      date: "October 2024",
      type: "ai"
    }
  ]
};