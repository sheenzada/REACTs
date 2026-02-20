import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500">Hotelier</h1>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">About</a>
          <a href="#" className="hover:text-yellow-400">Rooms</a>
          <a href="#" className="hover:text-yellow-400">Services</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-2">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">About</a>
          <a href="#" className="block">Rooms</a>
          <a href="#" className="block">Services</a>
          <a href="#" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
}