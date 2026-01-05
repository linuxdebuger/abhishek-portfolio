import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "TalentMatch – AI-Driven Recruitment SaaS",
    year: "2021",
    description: "NLP-powered resume ranking system that analyzes and scores PDF resumes against job descriptions, reducing recruiter screening time dramatically.",
    tech: "React, Node.js, OpenAI API, AWS S3"
  },
  {
    title: "OmniVendor – Multi-Tenant E-Commerce Core",
    year: "2022",
    description: "A shared marketplace platform enabling multiple sellers with independent dashboards and Stripe Connect-based global payments.",
    tech: "Next.js, PostgreSQL, Stripe API, Redis"
  },
  {
    title: "MedSync – Secure Patient Management System",
    year: "2022",
    description: "HIPAA-aware healthcare portal with encrypted patient records and real-time doctor-patient consultations.",
    tech: "Node.js, MySQL (AES-256), Socket.io"
  },
  {
    title: "FlowState – Real-Time Agile Management Tool",
    year: "2023",
    description: "A Trello/Jira-style agile management tool delivering instant task updates across distributed teams.",
    tech: "React, Redux, Node.js, MongoDB, Socket.io"
  },
  {
    title: "FinTrack – Corporate Expense & Audit Dashboard",
    year: "2023",
    description: "Enterprise finance tool for tracking departmental expenses, visualizing trends, and generating automated audit reports.",
    tech: "Python (FastAPI), React, PostgreSQL, Chart.js"
  },
  {
    title: "SkillStream – Enterprise Learning Management System",
    year: "2024",
    description: "Internal LMS platform with video hosting, progress tracking, and automated certification for employee upskilling.",
    tech: "React, Node.js, AWS CloudFront, MongoDB"
  },
  {
    title: "Customer Churn Intelligence Model",
    year: "2025",
    description: "Machine learning model that predicts at-risk customers with 92% accuracy, enabling proactive retention strategies.",
    tech: "Python, Scikit-learn, Pandas, Tableau"
  },
  {
    title: "Predictive Inventory Optimization Engine",
    year: "2025",
    description: "Time-series forecasting system that predicts product demand to minimize overstock and capital lock-in.",
    tech: "Python, Facebook Prophet, Matplotlib"
  },
  {
    title: "Sentinel SIEM – Log Analysis & Threat Detection",
    year: "2025",
    description: "Real-time security monitoring system detecting SQL injection and brute-force attacks from live server logs.",
    tech: "Python, ELK Stack (Elasticsearch, Logstash, Kibana)"
  },
  {
    title: "VulnGuard – Automated Infrastructure Auditor",
    year: "2025",
    description: "Security auditing tool that scans networks for vulnerabilities and maps risks against the CVE database.",
    tech: "Python, Nmap API, Bash"
  },
  {
    title: "DecentraID – Blockchain Identity Verification (In Development)",
    year: "2026",
    description: "Decentralized identity system allowing users to verify credentials once and share them securely without central databases.",
    tech: "Solidity, Ethereum/Polygon, Web3.js"
  },
  {
    title: "Unified Enterprise Ecosystem",
    year: "2026",
    description: "API Gateway integrating TalentMatch and SkillStream to create a seamless corporate Hire-to-Train pipeline.",
    tech: "Node.js, Microservices, API Gateway"
  }
];

export default function Timeline() {
  return (
    <section>
      <h2>Projects Timeline</h2>
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </section>
  );
}
