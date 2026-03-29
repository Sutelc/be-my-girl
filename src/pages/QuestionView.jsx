import { motion } from "framer-motion";
import { CONFIG } from "../config";
import Petals from "../components/Petals";
import { useState } from "react";
import MusicPlayer from "../components/MusicPlayer";
import FloatingHearts from "../components/FloatingHearts";
import herImage from "../assets/series.jpeg";

export default function QuestionView({ setAnswer }) {
  const [showNoMessage, setShowNoMessage] = useState(false);
  const handleNoClick = () => {
    setShowNoMessage(true);

    setTimeout(() => {
      setShowNoMessage(false);
    }, 2500); // disappears after 2.5s
  };
  return (
    <div className="container">
      <MusicPlayer />
      <FloatingHearts />
      <Petals />
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={herImage} alt="Series" className="her-image" />
        <motion.img
        src={herImage}
        alt="Series"
        className="her-image"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
        <h1 className="heading">
        Dear <span className="name">{CONFIG.name}</span>,
        </h1>

        <p className="question">{CONFIG.mainQuestion}</p>

        <p className="subtext">{CONFIG.subText}</p>

        <div className="buttons">
          <button className="yes" onClick={() => setAnswer("yes")}>
            Yes
          </button>

          <button
        className="no"
        onClick={handleNoClick}
        onMouseEnter={(e) => {
          const x = Math.random() * 40 - 20;
          const y = Math.random() * 20 - 10;
          e.target.style.transform = `translate(${x}px, ${y}px)`;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translate(0,0)";
        }}
      >
        No
      </button>
          {showNoMessage && (
      <motion.div
        className="no-message"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
      >
        The “No” option is not available at the moment 😂
      </motion.div>
    )}
      </div>
      <p style={{ marginTop: "1.5rem", fontSize: "0.7rem", color: "#999" }}>
      Made with love ❤️
    </p>
      </motion.div>
    </div>
  );
}