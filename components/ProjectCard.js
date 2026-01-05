import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ id, year, title }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link href={`/projects/${id}`}>
        <div style={{ padding: 20, borderRadius: 20 }}>
          <h3>{title}</h3>
          <p>{year}</p>
        </div>
      </Link>
    </motion.div>
  );
}
