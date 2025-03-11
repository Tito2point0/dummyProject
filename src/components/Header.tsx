import { Link } from "react-router-dom";
import pokeheader from "../assets/pokeheader.webp"; // Pokémon Header Image
import pikachuCursor from "../assets/3.svg"; // Custom Pikachu cursor PNG

const Header = () => {
  return (
    <header 
      className="bg-white border-b-4 border-gray-300 shadow-md py-4"
    >
      <div className="container mx-auto flex items-center justify-between px-10">
        
        {/* 🔹 Circular Pokémon Image */}
        <div className="flex items-center">
          <div className="w-20 h-20 rounded-full border-4 border-gray-400 bg-white shadow-lg overflow-hidden flex items-center justify-center">
            <img 
              src={pokeheader} 
              alt="Pikachu" 
              style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                marginBottom: '10px',
                border: '3px solid #ddd',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                objectFit: 'cover'
              }} 
            />
          </div>
        </div>

        {/* 🔹 Navigation Links */}
        <nav className="flex space-x-8 items-center ml-auto">
          {[ 
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <button
              key={link.name}
              className="px-6 py-2 text-lg font-semibold italic tracking-wide rounded-full border-2 border-gray-400
                         text-gray-700 transition-all duration-300 shadow-md
                         hover:text-black hover:border-black hover:bg-gray-100"
              style={{ cursor: `url(${pikachuCursor}), auto` }} // Apply Pikachu cursor to the button
            >
              <Link 
                to={link.path} 
                className="block w-full h-full"
                style={{ cursor: `url(${pikachuCursor}), auto` }} // Apply Pikachu cursor to the link
              >
                {link.name}
              </Link>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
