import { useState, useEffect } from "react";
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

    // Tự động chuyển ảnh mỗi 5 giây
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Chuyển sang ảnh tiếp theo
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    };

    // Chuyển về ảnh trước
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
    };

    // Lấy 3 kỹ năng tiếp theo tính từ `currentIndex`
    const getVisibleSkills = () => {
        return [
            skills[currentIndex % skills.length],
            skills[(currentIndex + 1) % skills.length],
            skills[(currentIndex + 2) % skills.length],
        ];
    };

    return (
        <div className="p-10 text-white">
            <h1 className="text-center text-5xl font-bold mb-6">SKILL</h1>
            <div className="relative w-[60%] mx-auto">
                {/* Slide chứa 3 ảnh */}
                <div className="flex justify-center gap-4 overflow-hidden">
                    {getVisibleSkills().map((skill, index) => (
                        <div key={index} className="w-1/3 text-center">
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-24 h-24 md:w-32 md:h-32 object-contain transition-transform duration-500 mx-auto"
                            />
                            <p className="text-lg font-semibold font-[Poppins]">{skill.name}</p>
                        </div>
                    ))}
                </div>

                {/* Nút điều hướng */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 p-3 bg-gray-100 rounded-full hover:bg-gray-100 transition"
                >
                    <KeyboardArrowLeftIcon />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 p-3 bg-gray-100 rounded-full hover:bg-gray-100 transition"
                >
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
}

export default Skill;
