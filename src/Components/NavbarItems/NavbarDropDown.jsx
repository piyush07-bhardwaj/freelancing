import { useState } from "react";

const NavbarDropdown = ({ title, dropdownItems }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(true);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <li
      className="cursor-pointer w-full text-center  p-2 hover:bg-neutral-700 hover:rounded-xl relative"
      onMouseEnter={toggleDropdown}
      onMouseLeave={closeDropdown}
    >
      {title}
      {showDropdown && (
        <div
          className={`absolute bg-white shadow-xl mt-3 rounded-xl z-20 p-4 ${
            title === "SHOW ALL"
              ? "w-[600px] h-[400px] grid grid-cols-3 gap-4"
              : "w-full"
          }`}
        >
          {title === "SHOW ALL" ? (
            dropdownItems.map((section, index) => (
              <div key={index} className="flex flex-col">
                <h1 className="text-gray-800 font-bold">{section.heading}</h1>
                {section.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={`/final-deploy/collections/${item}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-xl"
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))
          ) : (
            <>
              {dropdownItems.map((item, index) => (
                <a
                  key={index}
                  href={`/final-deploy/collections/${item}`}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-xl"
                >
                  {item}
                </a>
              ))}
            </>
          )}
        </div>
      )}
    </li>
  );
};

export default NavbarDropdown;
