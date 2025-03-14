import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import avt from "../assets/image/avtChien.svg";

export default function Home() {
  const text = "Hi there! 👋 I'm Bao Chien, Web Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const textRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const typeWriter = () => {
      if (textRef.current <= text.length) {
        setDisplayedText(text.slice(0, textRef.current)); // Lấy toàn bộ chuỗi từ đầu đến vị trí hiện tại
        textRef.current += 1;
        timeoutRef.current = setTimeout(typeWriter, 100);
      }
    };

    timeoutRef.current = setTimeout(typeWriter, 100);
    
    return () => clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 text-white">
      {/* Nội dung chữ */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h1 className="text-2xl font-bold text-white mb-4">
          Welcome to my portfolio
        </h1>
        <motion.div
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayedText}
          <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>
            |
          </span>
        </motion.div>
        <p className="text-base sm:text-lg mt-5 font-semibold leading-relaxed">
          "A passionate and creative individual who loves turning ideas into reality.
          Always eager to explore new technologies, solve challenges, and continuously learn to grow.
          Let’s connect and create something amazing together!"
        </p>
      </div>

      {/* Hình ảnh avatar */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={avt}
          alt="Avatar"
          className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
}
