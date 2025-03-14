import { useState, useEffect } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menu = ["Home", "Skill", "Project", "Contact", "Education"];

function Header({ sectionRefs }) {
  const [clickItem, setClickItem] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (index) => {
    setClickItem(index);
    setIsMenuOpen(false); // Đóng menu sau khi chọn
    const sectionName = menu[index];

    sectionRefs[sectionName]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className={`top-0 w-full z-50 py-6 px-4 md:px-10 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? "fixed bg-gray-800 bg-opacity-70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <h1 className="text-2xl font-bold text-white">Portfolio</h1>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* Menu for larger screens */}
      <ul className="hidden md:flex font-[Poppins] select-none">
        {menu.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            className={`mr-6 text-white px-3 py-2 cursor-pointer ${
              clickItem === index ? "rounded-3xl bg-[#D76C82] text-white text-center transition" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gray-800 bg-opacity-90 flex flex-col items-center py-4">
          {menu.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(index)}
              className="text-white py-2 cursor-pointer w-full text-center border-b border-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Social Icons */}
      <div className="hidden md:flex">
        <SocialIcon href="https://www.facebook.com/profile.php?id=100074824270647">
          <FacebookOutlinedIcon />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/baochien.2602/">
          <InstagramIcon />
        </SocialIcon>
        <SocialIcon href="https://github.com/Chien2602">
          <GitHubIcon />
        </SocialIcon>
      </div>
    </div>
  );
}

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mr-3 flex cursor-pointer text-white justify-center items-center w-[30px] h-[30px] rounded-full border border-white hover:bg-white hover:text-black transition"
  >
    {children}
  </a>
);

export default Header;
