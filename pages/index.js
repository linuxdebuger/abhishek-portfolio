import { motion } from "framer-motion";
import Timeline from "../components/Timeline";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ padding: "40px" }}
    >
      <ThemeToggle />
      <h1>Abhishek Sharma</h1>
      <p>Web Developer • Data Scientist • Cyber Security Specialist</p>
      <a href="/contact">Hire Me</a>
      <Timeline />
    </motion.main>
  );
}
