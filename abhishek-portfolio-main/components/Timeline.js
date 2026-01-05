import ProjectCard from "./ProjectCard";

const projects = [
  { id: "1", year: "2020", title: "Enterprise Business Website" },
  { id: "2", year: "2021", title: "E-Commerce Platform" },
  { id: "3", year: "2022", title: "SaaS Analytics Dashboard" },
  { id: "4", year: "2023", title: "Enterprise CRM System" },
  { id: "5", year: "2024", title: "Cloud Portfolio Platform" },
  { id: "6", year: "2025", title: "ML Sales Forecasting" },
  { id: "7", year: "2025", title: "DL Image Classification" },
  { id: "8", year: "2025", title: "NLP Resume Screening" },
  { id: "9", year: "2025", title: "Penetration Testing Framework" },
  { id: "10", year: "2026", title: "Infrastructure Hardening & SIEM" }
];

export default function Timeline() {
  return (
    <div>
      {projects.map(p => (
        <ProjectCard key={p.id} {...p} />
      ))}
    </div>
  );
}
