import { motion } from "framer-motion";
import "./BootScreen.css";

export default function BootScreen({ onEnter }) {
  const handleEnter = () => {
    localStorage.setItem("enteredLab", "true");
    if (onEnter) onEnter();
  };

  return (
    <div className="boot">
      <motion.div
        className="boot_content"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="boot_logo">LYRIC LAB</div>

        <h1 className="boot_headline">
          RAP NENÍ HLUK.<br />
          JE TO VÝPOVĚĎ.
        </h1>

        <p className="boot_sub">
          Don’t just vibe. Understand the story.
        </p>

        <motion.button
          className="boot_cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleEnter}
        >
          VSTOUPIT DO LABU
        </motion.button>
      </motion.div>
    </div>
  );
}
