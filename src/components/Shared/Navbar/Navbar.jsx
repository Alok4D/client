import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiFillHeart } from "react-icons/ai";
import { FaUserCircle, FaTachometerAlt } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import HostModal from "../../Modal/HostRequestModal";
import avatarImg from "../../../assets/images/placeholder.jpg";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const localtion = useLocation();
  console.log(localtion);

  const closeModal = () => setIsModalOpen(false);

  const modalHandler = async () => {
    try {
      const currentUser = {
        email: user?.email,
        role: "guest",
        status: "Requested",
      };
      const { data } = await axiosSecure.put("/user", currentUser);

      if (data.modifiedCount > 0) {
        toast.success("Success! Please wait for admin confirmation.");
      } else {
        toast.success("Success! Please wait for admin approval.");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      closeModal();
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Rooms", path: "/all-rooms" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Contact Us", path: "/contact" },
  ];

  // scroll detect for navbar color change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-2 lg:px-0 ${
        isScrolled
          ? "bg-white shadow-md text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="py-4 container mx-auto flex items-center justify-between gap-3 md:gap-0 px-4">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://i.ibb.co/4ZXzmq5/logo.png"
            alt="logo"
            className="w-24 md:w-28"
          />
        </Link>

        {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-6">
  {navLinks.map((link) => (
    <NavLink
      key={link.path}
      to={link.path}
      className={({ isActive }) =>
        `font-semibold transition-all duration-300 ${
          isActive
            ? "text-yellow-600 border-b-2 border-yellow-600"
            : isScrolled
            ? "text-gray-800 hover:text-yellow-600"
            : "text-black hover:text-yellow-400"
        }`
      }
    >
      {link.name}
    </NavLink>
  ))}
</div>


        {/* Right Section */}
        <div className="flex items-center gap-4 relative">
          {/* 🟡 If user not logged in → show Login & Sign Up (visible on all devices) */}
          {!user && (
            <div className="flex gap-2 md:gap-4">
              <Link
                to="/login"
                className={`lg:px-4 px-3 py-1.5  font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "bg-yellow-600 text-white hover:bg-yellow-700"
                    : "bg-yellow-500 text-white hover:bg-yellow-600"
                }`}
              >
                Login
              </Link>

              <Link
                to="/signup"
                className={`lg:px-4 px-2 py-1.5  border-2 font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
                    : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white"
                }`}
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Host Your Home Button (only for logged-in users, md+ screen) */}
          {user && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:inline-block bg-yellow-600 text-white px-5 py-2 rounded-full hover:bg-yellow-700 transition font-semibold shadow-md"
            >
              Host Your Home
            </button>
          )}
          <HostModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            modalHandler={modalHandler}
          />

          {/* Avatar */}
          {user && (
            <div
              className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <Link to="/dashboard/profile">
                <img
                  src={user.photoURL || avatarImg}
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-yellow-500 cursor-pointer hover:scale-105 transform transition"
                  referrerPolicy="no-referrer"
                />
              </Link>
              {showTooltip && (
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md shadow-lg whitespace-nowrap z-50">
                  {user.displayName || "User"}
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu (for logged-in users only) */}
          {user && (
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 md:p-2 border ${
                isScrolled ? "border-gray-300" : "border-white/70"
              } rounded-full cursor-pointer hover:shadow-lg transition transform hover:scale-105`}
            >
              <AiOutlineMenu size={20} />
            </div>
          )}

       
          {/* Dropdown Menu */}
          {user && isOpen && (
            <div
              className={`absolute right-0 top-14 md:top-12 rounded-xl w-56 overflow-hidden z-50 border transition-all duration-300 ${
                isScrolled
                  ? "bg-white border-gray-200 shadow-xl"
                  : "bg-gray-900/95 border-gray-700 shadow-lg"
              }`}
            >
              <div className="flex flex-col text-sm">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-4 py-3 font-medium md:hidden transition ${
                      isScrolled
                        ? "text-gray-800 hover:bg-gray-100"
                        : "text-gray-100 hover:bg-gray-800"
                    }`}
                  >
                    {link.name}
                  </NavLink>
                ))}

                <Link
                  to="/dashboard"
                  className={`flex items-center gap-2 px-4 py-3 font-medium transition ${
                    isScrolled
                      ? "text-gray-800 hover:bg-gray-100"
                      : "text-gray-100 hover:bg-gray-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <FaTachometerAlt className="text-blue-500" /> Dashboard
                </Link>

                <Link
                  to="/wishlist"
                  className={`flex items-center gap-2 px-4 py-3 font-medium transition ${
                    isScrolled
                      ? "hover:bg-pink-50 text-gray-800"
                      : "hover:bg-gray-800 text-gray-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <AiFillHeart className="text-pink-500" /> Wishlist
                </Link>

                <Link
                  to="/trips"
                  className={`flex items-center gap-2 px-4 py-3 font-medium transition ${
                    isScrolled
                      ? "hover:bg-orange-50 text-gray-800"
                      : "hover:bg-gray-800 text-gray-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <MdOutlineTravelExplore className="text-orange-500" /> Trips
                </Link>

                <Link
                  to="/dashboard/profile"
                  className={`flex items-center gap-2 px-4 py-3 font-medium transition ${
                    isScrolled
                      ? "hover:bg-purple-50 text-gray-800"
                      : "hover:bg-gray-800 text-gray-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <FaUserCircle className="text-purple-500" /> Profile
                </Link>

                <div
                  className={`my-1 border-t ${
                    isScrolled ? "border-gray-300" : "border-gray-700"
                  }`}
                ></div>

                <button
                  onClick={() => {
                    logOut();
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-3 font-medium transition ${
                    isScrolled
                      ? "text-red-500 hover:bg-red-50"
                      : "text-red-400 hover:bg-red-900/40"
                  }`}
                >
                  <FiLogOut /> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
