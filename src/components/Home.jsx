import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import avt from "../assets/image/avtChien.svg";

export default function Home() {
  const text = "Hi there! 👋 I'm Bao Chien Web Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;

    const typeWriter = () => {
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i)); // Lấy từ đầu đến vị trí i
        i++;
        setTimeout(typeWriter, 100); // Điều chỉnh tốc độ gõ
      }
    };

    typeWriter(); // Gọi hàm gõ chữ

    return () => {}; // Cleanup function (không cần clear interval vì dùng setTimeout)
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex px-10 justify-between text-white">
      <div className="w-[50%]">
        <h1 className="text-2xl font-bold font-[Poppins] text-white mb-4">
          Welcome to my portfolio
        </h1>
        <motion.div
          className="text-5xl font-[Poppins] mt-5 font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayedText}
          <span className={`ml-1 font-[Poppins] text-white ${showCursor ? "opacity-100" : "opacity-0"}`}>
            |
          </span>
        </motion.div>
        <p className="text-lg mt-5 font-[Poppins] font-semibold">
        "A passionate and creative individual who loves turning ideas into reality. Always eager to explore new technologies, solve challenges, and continuously learn to grow. The journey is fueled by curiosity and the excitement of building meaningful experiences. Whether it's developing innovative solutions, collaborating on projects, or sharing knowledge, always striving to make an impact. Let’s connect and create something amazing together!" 
        </p>
      </div>

      <div className="flex justify-center w-[400px] h-[400px] rounded-full relative">
        <img src={avt} alt="avt" className="w-[400px] h-[400px] rounded-full object-cover" />
      </div>
    </div>
  );
}
