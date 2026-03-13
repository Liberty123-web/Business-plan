import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/30 text-white ">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">

        {/* Logo */}
        <h1 className="font-bold text-2xl md:text-3xl">
          Business Plan
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li className="border-b border-transparent hover:border-white">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b border-transparent hover:border-white">
            <Link to="/about">About</Link>
          </li>
          <li className="border-b border-transparent hover:border-white">
            <Link to="/services">Services</Link>
          </li>
          <li className="border-b border-transparent hover:border-white">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="border-b border-transparent hover:border-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <i className={`bi ${open ? "bi-x" : "bi-list"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 w-full bg-gray-900/30 absolute top-full left-0 shadow-lg">
          <li className="border-b border-transparent hover:border-white">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li className="border-b border-transparent hover:border-white">
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li className="border-b border-transparent hover:border-white">
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          </li>
          <li className="border-b border-transparent hover:border-white">
            <Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          </li>
          <li className="border-b border-transparent hover:border-white">
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
