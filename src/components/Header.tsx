import { useState } from "react";
import { Link } from "react-router-dom";
import pokePointer from "../assets/pikachu - link.ani"; // Your Pikachu cursor file
import pokeHeader from "../assets/pokeHeader.png"; // Your header logo

const Header = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header className="bg-gradient-to-r from-red-500 to-yellow-400 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={pokeHeader} alt="Pokémon Logo" className="h-16 mx-auto" />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-white text-lg font-bold">
            {[
              { name: "Home", path: "/" },
              { name: "Search", path: "/search" },
              { name: "Contact Us", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onMouseEnter={() => setHovered(link.name)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative hover:text-yellow-300 transition-all duration-300 p-2"
                  style={{ cursor: `url(${pokePointer}), auto` }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;