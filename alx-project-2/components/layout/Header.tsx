import Link from "next/link";
import { useState } from "react";

const Header = () => {
  // Optional: state for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 text-white p-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <div className="text-xl font-bold">ALX Project</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg font-semibold">
          <Link href="/home" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/posts" className="hover:text-gray-300 transition">
            Posts
          </Link>
          <Link href="/users" className="hover:text-gray-300 transition">
            Users
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden px-3 py-2 border rounded text-white border-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2 text-center">
          <Link href="/home" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/posts" className="hover:text-gray-300 transition">
            Posts
          </Link>
          <Link href="/users" className="hover:text-gray-300 transition">
            Users
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
