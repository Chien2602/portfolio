import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import html from "../assets/image/html.png";
import css from "../assets/image/css.png";
import js from "../assets/image/javascript.png";
import nodejs from "../assets/image/nodejs.png";
import python from "../assets/image/python.png";
import tailwind from "../assets/image/Tailwind CSS.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Skill() {
  const skills = [
    { image: html, name: "HTML" },
    { image: css, name: "CSS" },
    { image: js, name: "JavaScript" },
    { image: nodejs, name: "Node.js" },
    { image: python, name: "Python" },
    { image: tailwind, name: "Tailwind CSS" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  const getVisibleSkills = () => {
    return [
      skills[currentIndex % skills.length],
      skills[(currentIndex + 1) % skills.length],
      skills[(currentIndex + 2) % skills.length],
    ];
  };

  return (
    <div className="p-10 text-white">
      <div className="relative w-full lg:w-[60%] mx-auto bg-black rounded-3xl py-14 px-8">
        <h1 className="text-center text-5xl font-bold mb-6">SKILL</h1>

        {/* Slide container */}
        <div className="flex justify-center gap-4 overflow-hidden">
          <AnimatePresence mode="wait">
            {getVisibleSkills().map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="w-1/3 text-center"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain transition-transform duration-500 mx-auto"
                />
                <p className="text-lg font-semibold font-[Poppins]">{skill.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-3 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition"
        >
          <KeyboardArrowLeftIcon />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-3 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}

export default Skill;
