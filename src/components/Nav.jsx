import React, { useState } from "react";

const Nav = () => {
  const Links = [
    { name: "ABOUT", link: "/", subLinks: ["History", "Vision Mission"] },
    { name: "OUR WORK", link: "/" },
    { name: "OUR TEAM", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (index) => {
    const submenu = document.getElementById(`submenu-${index}`);
    if (submenu) {
      submenu.style.display = "block";
    }
  };

  const handleMouseLeave = (index) => {
    const submenu = document.getElementById(`submenu-${index}`);
    if (submenu) {
      submenu.style.display = "none";
    }
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0" style={{ zIndex: 10 }}>
      <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-centers md:ml-40">
          Company
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-gray-500">
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center lg:mr-40 md:mr-0 space-x-4">
          {Links.map((link, index) => (
            <li
              key={link.name}
              className="relative md:ml-8 text-sm"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <a
                href={link.link}
                className="text-gray-500 font-sans font-semibold md:mx-0 rounded-xl px-2 py-3 hover:bg-gray-200"
              >
                {link.name}
              </a>
              {link.subLinks && link.subLinks.length > 0 && (
                <ul
                  id={`submenu-${index}`}
                  className="hidden absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md"
                >
                  {link.subLinks.map((subLink, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 hover:bg-black/80 hover:text-white text-gray-500"
                    >
                      <a href="/" className=" hover:text-white">
                        {subLink}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="bg-white w-full">
            {Links.map((link, index) => (
              <li
                key={link.name}
                className="border-t border-gray-200 text-center py-2"
              >
                {link.name !== "ABOUT" && (
                  <a
                    href={link.link}
                    className="block text-gray-500 font-semibold font-sans py-1 hover:bg-gray-200"
                  >
                    {link.name}
                  </a>
                )}
                {link.subLinks && link.subLinks.length > 0 && (
                  <ul className="bg-white">
                    {link.subLinks.map((subLink, subIndex) => (
                      <li
                        key={subIndex}
                        className="border-t border-gray-200 text-center py-2 uppercase"
                      >
                        <a
                          href="/"
                          className="block text-gray-500 font-sans font-semibold py-2 hover:bg-gray-200"
                        >
                          {subLink}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
