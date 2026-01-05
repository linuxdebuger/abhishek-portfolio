import { useRouter } from "next/router";

export default function ProjectDetails() {
  const { id } = useRouter().query;

  return (
    <div style={{ padding: 40 }}>
      <h2>Project #{id}</h2>
      <p>Industrial-grade project description</p>

      <h3>Client Reviews</h3>
      <ul>
        <li>⭐ Indian Enterprise Client</li>
        <li>⭐ Indian Startup</li>
        <li>⭐ International Client</li>
      </ul>
    </div>
  );
}
