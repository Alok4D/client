import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiFillHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import HostModal from "../../Modal/HostRequestModal";
import avatarImg from "../../../assets/images/placeholder.jpg";
import toast from "react-hot-toast";
import Container from "../Container";
import { FaHome, FaTachometerAlt } from "react-icons/fa";
import { FiLogOut, FiLogIn, FiUserPlus } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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

  return (
    <div className="fixed w-full bg-white z-50 shadow-md">
      <div className="py-4 border-b border-gray-200">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <img
                src="https://i.ibb.co/4ZXzmq5/logo.png"
                alt="logo"
                className="w-24 md:w-28"
              />
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-4 relative">
              {/* Become a Host Button */}
              {user && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="hidden md:inline-block bg-[#e51d53] from-pink-500 to-orange-400 text-white px-5 py-2 rounded-full hover:scale-105 transform transition font-semibold shadow-md"
                >
                  Host Your Home
                </button>
              )}
              <HostModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                modalHandler={modalHandler}
              />

              {/* User Avatar with Tooltip */}
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
                      className="w-10 h-10 rounded-full border-2 border-pink-500 cursor-pointer hover:scale-105 transform transition"
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

              {/* Hamburger Menu */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 md:p-2 border border-gray-300 rounded-full cursor-pointer hover:shadow-lg transition transform hover:scale-105"
              >
                <AiOutlineMenu size={20} />
              </div>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 top-14 md:top-12 bg-white shadow-xl rounded-xl w-56 overflow-hidden z-50 animate-fade-in border border-gray-200">
                  <div className="flex flex-col text-sm">
                    {/* Home link for mobile */}
                    <Link
                      to="/"
                      className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition font-medium md:hidden"
                      onClick={() => setIsOpen(false)} // ✅ close dropdown on click
                    >
                      <FaHome className="text-gray-500" /> Home
                    </Link>

                    {user ? (
                      <>
                        {/* Dashboard */}
                        <Link
                          to="/dashboard"
                          className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition font-medium"
                          onClick={() => setIsOpen(false)} // ✅ close dropdown
                        >
                          <FaTachometerAlt className="text-blue-500" />{" "}
                          Dashboard
                        </Link>

                        {/* Wishlist */}
                        <Link
                          to="/wishlist"
                          className="flex items-center gap-2 px-4 py-3 hover:bg-pink-50 transition font-medium"
                          onClick={() => setIsOpen(false)} // ✅ close dropdown
                        >
                          <AiFillHeart className="text-pink-500" /> Wishlist
                        </Link>

                        {/* Trips */}
                        <Link
                          to="/trips"
                          className="flex items-center gap-2 px-4 py-3 hover:bg-orange-50 transition font-medium"
                          onClick={() => setIsOpen(false)} // ✅ close dropdown
                        >
                          <MdOutlineTravelExplore className="text-orange-500" />{" "}
                          Trips
                        </Link>

                        {/* Messages */}
                        <Link
                          to="/message"
                          className="flex items-center gap-2 px-4 py-3 hover:bg-green-50 transition font-medium"
                          onClick={() => setIsOpen(false)} // ✅ close dropdown
                        >
                          <IoMdMail className="text-green-500" /> Messages
                        </Link>

                        {/* Profile */}
                        <Link
                          to="/dashboard/profile"
                          className="flex items-center gap-2 px-4 py-3 hover:bg-purple-50 transition font-medium"
                          onClick={() => setIsOpen(false)} // ✅ close dropdown
                        >
                          <FaUserCircle className="text-purple-500" /> Profile
                        </Link>

                        {/* Divider before Logout */}
                        <div className="border-t border-gray-300 my-1"></div>

                        {/* Logout */}
                        <button
                          onClick={() => {
                            logOut();
                            setIsOpen(false);
                          }} // ✅ close dropdown on logout
                          className="flex items-center gap-2 px-4 py-3 hover:bg-red-50 transition font-medium text-red-500"
                        >
                          <FiLogOut /> Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          <FiLogIn className="text-blue-500" /> Login
                        </Link>
                        <Link
                          to="/signup"
                          className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          <FiUserPlus className="text-green-500" /> Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
