import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { GoHeart, GoHeartFill } from "react-icons/go";
import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Card = ({ room }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);
  // console.log("room data", room);

  // ✅ Check if already in wishlist when component mounts
  useEffect(() => {
    const checkWishlist = async () => {
      if (!user) return;
      try {
        const { data } = await axiosSecure.get(
          `/wishlist/check?roomId=${room._id}&userEmail=${user.email}`
        );
        setIsFavorite(data.exists);
      } catch (error) {
        console.error("Wishlist check failed", error);
      }
    };
    checkWishlist();
  }, [room._id, user, axiosSecure]);

  // ❤️ Handle Add / Remove from Wishlist
const handleWishlistToggle = async (e) => {
    e.preventDefault(); // prevent Link navigation
    if (!user) {
      toast.error("Please login first to use wishlist!");
      return;
    }

    setLoading(true);

    try {
      if (isFavorite) {
        // ❌ Remove from wishlist
        const { data } = await axiosSecure.delete(
          `/wishlist?roomId=${room._id}&userEmail=${user.email}`
        );

        if (data.deletedCount > 0 || data.success) {
          setIsFavorite(false);
          toast.success("Removed from Wishlist!");
        } else {
          toast.error("Failed to remove!");
        }
      } else {
        // ✅ Add to wishlist
        const wishlistItem = {
          roomId: room._id,
          roomImage: room.image,
          roomLocation: room.location,
          price: room.price,
          nights: 5,
          userEmail: user.email,
          userName: user.displayName,
          userPhoto: user.photoURL,
        };

        const { data } = await axiosSecure.post("/wishlist", wishlistItem);

        if (data.insertedId || data.success) {
          setIsFavorite(true);
          toast.success("Added to Wishlist!");
        } else {
          toast.error("Failed to add to Wishlist!");
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-span-1 relative group">
      <Link to={`/room/${room?._id}`} className="block">
        <div className="relative">
          {/* Image Section */}
          <img
            className="object-cover h-[250px] rounded-t-lg w-full group-hover:scale-105 transition"
            src={room?.image}
            alt="Room"
          />

          {/* Left Top: Guest Favorite */}
          <div className="absolute top-3 left-3 border bg-white/50 backdrop-blur-md px-2 py-1 rounded-md text-xs font-semibold shadow-md text-gray-800">
            Guest favorite
          </div>

          {/* Right Top: Heart Icon */}
          <div
            onClick={handleWishlistToggle}
            className={`absolute top-3 right-3 text-2xl cursor-pointer transition ${
              isFavorite ? "text-pink-500" : "text-gray-100 hover:text-pink-500"
            }`}
          >
            {isFavorite ? <GoHeartFill /> : <GoHeart />}
          </div>

          {/* Room Info */}
          <h2 className="font-semibold lg:text-xl md:text-lg text-md mt-4">{room?.location}</h2>
          <p className="font-semibold text-[#e51d53]">
            ${room?.price} <span className="font-light text-gray-800">for per nights.</span>
          </p>
        </div>
      </Link>

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white/60 flex items-center justify-center rounded-xl">
          <span className="text-sm text-gray-700 animate-pulse">
            Processing...
          </span>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  room: PropTypes.object.isRequired,
};

export default Card;
