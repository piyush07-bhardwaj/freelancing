import React, { useEffect, useState } from "react";
import NavbarDropdown from "./NavbarDropDown.jsx";

const menuItems = [
  {
    title: "SHOW ALL",
    dropdownItems: [
      {
        heading: "Living Room",
        items: ["Living Room Sets", "Sofas", "Loveseats"],
      },
      {
        heading: "Dining Room",
        items: ["Dining Room Sets", "Dining Chairs", "Dining Tables"],
      },
      {
        heading: "Bedroom",
        items: ["Bedroom Sets", "Beds", "Storage Beds (Baza)"],
      },
      {
        heading: "Mattresses",
        items: [
          "Soft & Plush Mattresses",
          "Medium Mattresses",
          "Firm Mattresses",
        ],
      },
      {
        heading: "Rugs",
        items: ["Hallway Runners", "5' x 8' Medium Rugs", "7' x 9' Large Rugs"],
      },
    ],
  },
  {
    title: "LIVING ROOM",
    dropdownItems: [
      "Living Room Sets",
      "Sofas",
      "Loveseats",
      // "Accent Chairs",
      // "Sectionals",
      // "Recliners",
      // "Pull Out Couches",
      // "Sleeper Sofas",
      // "Ottomans",
      // "Coffee Tables",
      // "Console Tables",
      // "End & Side Tables",
      // "Nesting Tables",
      // "TV Stands",
      // "Accent Cabinets",
      // "Fireplaces",
    ],
  },
  {
    title: "DINING ROOM",
    dropdownItems: [
      "Dining Room Sets",
      "Dining Chairs",
      "Dining Tables",
      // "Bar Stools",
      // "Benches",
      // "Buffets & Sideboards",
      // "Curio & China",
      // "Kitchen Corner (Nook)",
    ],
  },
  {
    title: "BEDROOM",
    dropdownItems: [
      "Bedroom Sets",
      "Beds",
      "Storage Beds (Baza)",
      // "Dressers & Mirrors",
      // "Chests",
      // "Nightstands",
      // "Wardrobes",
      // "Makeup Vanities",
    ],
  },
  {
    title: "MATTRESSES",
    dropdownItems: [
      "Soft & Plush Mattresses",
      "Medium Mattresses",
      "Firm Mattresses",
      // "Folding Beds",
      // "High Risers",
    ],
  },
  {
    title: "RUGS",
    dropdownItems: [
      "Hallway Runners",
      "5' x 8' Medium Rugs",
      "7' x 9' Large Rugs",
      // "Extra Large Rugs",
    ],
  },
];

const NavbarMenuItems = ({ open }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full flex">
      <ul className="list-none flex md:flex-col justify-around items-center text-white border-t-[0.05px] border-neutral-700 p-1 w-[100vw]">
        {menuItems.map((menuItem, index) =>
          isMobile ? (
            open && (
              <NavbarDropdown
                key={index}
                title={menuItem.title}
                dropdownItems={menuItem.dropdownItems}
              />
            )
          ) : (
            <NavbarDropdown
              key={index}
              title={menuItem.title}
              dropdownItems={menuItem.dropdownItems}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default NavbarMenuItems;
