import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { CONFIG } from "../config";
import MusicPlayer from "../components/MusicPlayer";
import FloatingHearts from "../components/FloatingHearts";

export default function YesView() {
  return (
    <div className="container">
      <FloatingHearts />
      <MusicPlayer />
      <Confetti />

      <motion.div
        className="card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="heading">{CONFIG.yesMessage}</h1>

        <p className="subtext">{CONFIG.yesSubText}</p>

        <div className="heart">❤️</div>
        <p style={{ marginTop: "1.5rem", fontSize: "0.7rem", color: "#999" }}>
        Made with love ❤️
      </p>
      </motion.div>
      <a
  href="https://wa.me/2348131978538"
  target="_blank"
  rel="noreferrer"
>
  <button className="yes">Message me ❤️</button>
</a>
    </div>
  );
}