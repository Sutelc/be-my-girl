import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { CONFIG } from "../config";
import FloatingHearts from "../components/FloatingHearts";
import { useEffect, useRef } from "react";

export default function YesView() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0;

      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Fade in volume
            let vol = 0;
            const fade = setInterval(() => {
              if (vol < 1) {
                vol += 0.05;
                audio.volume = vol;
              } else {
                clearInterval(fade);
              }
            }, 100);
          })
          .catch((err) => {
            console.log("Autoplay blocked:", err);
          });
      }
    }
  }, []);

  return (
    <div className="container">
      {/* AUDIO MUST BE INSIDE RETURN */}
      <audio ref={audioRef} loop>
        <source src="/music/romantic.mp3" type="audio/mpeg" />
      </audio>

      <FloatingHearts />
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