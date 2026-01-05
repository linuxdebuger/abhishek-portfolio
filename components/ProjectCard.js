export default function ProjectCard({ title, year, description, tech }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p><strong>{year}</strong></p>
      <p>{description}</p>
      <p style={{ fontSize: "14px", opacity: 0.7 }}>
        <strong>Tech Stack:</strong> {tech}
      </p>
    </div>
  );
}
