import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Menu", href: "#" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = async () => {
    loginWithRedirect();
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Foodie<span className="text-red-500">Fly</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((link) => (
            <Link
              to={link.href}
              key={link.name}
              className="text-gray-700 hover:text-red-500 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call to Action Button */}
        {isAuthenticated ? (
          <div className="flex items-center gap-5">
            <span>{user?.name}</span>
            <button
              onClick={() => logout()}
              className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden md:block">
            <button
              onClick={handleLogin}
              className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-600 transition"
            >
              Login
            </button>
          </div>
        )}

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Open Navigation Menu">
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        {navigation.map((link) => (
          <Link
            to={link.href}
            key={link.name}
            className="text-gray-700 hover:text-red-500 transition"
          >
            {link.name}
          </Link>
        ))}
        <button
          onClick={handleLogin}
          className="block py-2 px-4 text-red-500 hover:bg-gray-100"
        >
          Login
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
