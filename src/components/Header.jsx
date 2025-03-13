import { useState } from "react";

const menu = ["Home", "Skill", "Project", "Contact"];

function Header() {
  const [clickItem, setClickItem] = useState(0);

  const handItem = (numberItem) => {
    setClickItem(numberItem);
  };
  return (
    <div className="flex justify-between p-10 items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <ul className="flex font-[Poppins] select-none">
        {menu.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              handItem(index);
            }}
            className={`mr-6 text-white px-[10px] py-[5px] cursor-pointer ${
              clickItem === index
                ? "rounded-3xl bg-[#D76C82] text-white text-center cursor-pointer transition"
                : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
