import { Link } from "react-router-dom";
import heroImage from "../assets/hero-pokemon.webp"; // ✅ Use an appealing Pokémon-themed hero image
import pikachuCursor from "../assets/3.svg"; // Custom Pikachu cursor PNG

const Hero = () => {
  return (
    <section
      className="bg-gradient-to-r from-yellow-100 via-red-100 to-yellow-100 py-20"
      style={{ cursor: `url(${pikachuCursor}) 16 16, auto` }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* 🔹 Hero Text Content */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Discover Your Favorite Pokémon!
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Explore, learn, and find detailed information about every Pokémon. Your Pokémon journey begins here—powered by React and Tailwind.
          </p>
          <Link to="/gallery">
            <button
              className="bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ cursor: `url(${pikachuCursor}) 16 16, auto` }}
            >
              Explore Gallery
            </button>
          </Link>
        </div>

        {/* 🔹 Hero Image */}
        <div className="flex-shrink-0">
          <img
            src={heroImage}
            alt="Pokémon Hero"
            className="w-full max-w-md rounded-xl border-4 border-gray-300 shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
