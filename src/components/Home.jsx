import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import avt from "../assets/image/avtChien.svg";

export default function Home() {
  const text = "Hi there! 👋 I'm Bao Chien, Web Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const textRef = useRef(0);

  useEffect(() => {
    const typeWriter = () => {
      if (textRef.current < text.length) {
        setDisplayedText((prev) => prev + text[textRef.current]);
        textRef.current += 1;
        setTimeout(typeWriter, 100); // Điều chỉnh tốc độ gõ
      }
    };

    typeWriter();
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex flex-wrap px-10 justify-between text-white items-center">
      {/* Text Content */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl font-bold font-[Poppins] text-white mb-4">
          Welcome to my portfolio
        </h1>
        <motion.div
          className="text-4xl sm:text-5xl font-[Poppins] mt-5 font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayedText}
          <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>
            |
          </span>
        </motion.div>
        <p className="text-lg mt-5 font-[Poppins] font-semibold leading-relaxed">
          "A passionate and creative individual who loves turning ideas into reality.
          Always eager to explore new technologies, solve challenges, and continuously learn to grow.
          Let’s connect and create something amazing together!"
        </p>
      </div>

      {/* Avatar */}
      <div className="flex justify-center w-full lg:w-1/2 mt-10 lg:mt-0">
        <img 
          src={avt} 
          alt="Avatar" 
          className="w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
}
