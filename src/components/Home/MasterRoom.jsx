import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";

export default function MasterRoom() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerSlide = 4; // 4 cards per slide

  const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [favoriteMap, setFavoriteMap] = useState({});
  const [loadingId, setLoadingId] = useState(null);

  const [params] = useSearchParams();
  const category = params.get("category");

  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["rooms", category],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/rooms?category=${category}`);
      return data;
    },
  });

  // ✅ Check wishlist status for all rooms
  useEffect(() => {
    const fetchWishlistStatus = async () => {
      if (!user || rooms.length === 0) return;

      try {
        const { data } = await axiosSecure.get(
          `/wishlist/all?userEmail=${user.email}`
        );
        const map = {};
        data.forEach((item) => (map[item.roomId] = true));
        setFavoriteMap(map);
      } catch (error) {
        console.error("Wishlist status fetch failed", error);
      }
    };
    fetchWishlistStatus();
  }, [rooms, user, axiosSecure]);

  // ❤️ Handle Wishlist Toggle
  const handleWishlistToggle = async (room) => {
    if (!user) {
      toast.error("Please login first to use wishlist!");
      return;
    }

    const isFavorite = favoriteMap[room._id];
    setLoadingId(room._id);

    try {
      if (isFavorite) {
        // ❌ Remove
        const { data } = await axiosSecure.delete(
          `/wishlist?roomId=${room._id}&userEmail=${user.email}`
        );

        if (data.deletedCount > 0 || data.success) {
          setFavoriteMap((prev) => ({ ...prev, [room._id]: false }));
          toast.success("Removed from Wishlist!");
        } else {
          toast.error("Failed to remove!");
        }
      } else {
        // ✅ Add
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
          setFavoriteMap((prev) => ({ ...prev, [room._id]: true }));
          toast.success("Added to Wishlist!");
        } else {
          toast.error("Failed to add!");
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoadingId(null);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  // Slider Animations
  const sliderVariants = {
    enter: (dir) => ({ x: dir > 0 ? 150 : -150, opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setIndex((i) => (i + itemsPerSlide) % rooms.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setIndex((i) => (i - itemsPerSlide + rooms.length) % rooms.length);
  };

  const getVisibleRooms = () =>
    Array.from({ length: itemsPerSlide }).map(
      (_, i) => rooms[(index + i) % rooms.length]
    );

  const truncateDesc = (text) =>
    text.length > 110 ? text.slice(0, 110) + "..." : text;

  return (
    <section className="lg:py-12 md:py-6 py-0 container mx-auto relative">
      {/* Header + Controls */}
      <div className="flex flex-col items-center mb-12 px-4 lg:px-20">
        <div className="text-center mb-6">
          <h2 className="md:text-4xl text-2xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Hotel Master Rooms
          </h2>
          <p className="text-gray-500 text-sm">
            To start the day in the best way, enjoying the extraordinary buffet
            breakfast in the quiet of our courtyard caressed by the
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={prevSlide}
            className="p-3 bg-white shadow rounded-full hover:bg-yellow-600 hover:text-white transition"
          >
            <MdArrowBackIosNew />
          </button>

          <Link to="/all-rooms">
            <button className="bg-yellow-600 text-white lg:px-6 md:px-4 px-2 py-2 rounded-full shadow hover:bg-yellow-700 transition font-medium">
              View All Rooms
            </button>
          </Link>

          <button
            onClick={nextSlide}
            className="p-3 bg-white shadow rounded-full hover:bg-yellow-600 hover:text-white transition"
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-x-hidden w-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex gap-6 justify-start"
          >
            {getVisibleRooms().map((room) => (
              <motion.div
                key={room._id || room.title}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="border border-gray-300 dark:border-slate-700 rounded-xl bg-white p-2 flex-shrink-0
                w-[300px] sm:w-[300px] md:w-[330px] lg:w-[365px] ml-3 lg:ml-0 "
              >
                {/* Room Image */}
                <div className="relative">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-[200px] object-cover rounded-xl"
                  />

                  {/* ❤️ Wishlist Icon */}
                  <div
                    onClick={() => handleWishlistToggle(room)}
                    className={`p-2 rounded-full absolute top-2 right-2 cursor-pointer transition ${
                      favoriteMap[room._id]
                        ? "bg-pink-500 text-white"
                        : "bg-gray-600 text-white hover:bg-pink-500"
                    } ${loadingId === room._id ? "opacity-60" : ""}`}
                  >
                    {favoriteMap[room._id] ? (
                      <IoIosHeart className="text-[1.2rem]" />
                    ) : (
                      <IoMdHeartEmpty className="text-[1.2rem]" />
                    )}
                  </div>
                </div>

                {/* Room Details */}
                <div className="mt-2 p-2 flex flex-col justify-between h-[calc(100%-200px)]">
                  <div>
                    <h3 className="text-[1.1rem] font-medium line-clamp-1">
                      {room.title}
                    </h3>
                    <p className="text-gray-400 text-[0.9rem] mb-1">
                      {room.bedrooms} BR / {room.bathrooms} BA
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(5)].map((_, idx) => (
                        <FaStar
                          key={idx}
                          className={`cursor-pointer ${
                            idx + 1 <= (room.rating || 5)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          size={15}
                        />
                      ))}
                      <span className="text-[0.8rem] text-gray-500">
                        ({room.rating || 4.8})
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-2 leading-snug">
                      {truncateDesc(room.description)}
                    </p>
                  </div>

                  {/* Price + Preview */}
                  <div className="flex items-end justify-between mt-2">
                    <div className="flex justify-center items-center gap-2">
                      <span className="text-gray-400 text-[0.9rem]">
                        {room.guests} Price
                      </span>
                      <p className="text-[1.15rem] font-semibold text-[#0FABCA]">
                        ${room.price}
                      </p>
                    </div>

                    <Link to={`/room/${room?._id}`}>
                      <button className="py-2 px-4 border border-yellow-600 text-black hover:text-white rounded-md flex items-center gap-1 hover:bg-yellow-700 transition-all duration-200">
                        Preview
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 gap-3">
        {Array.from({ length: Math.ceil(rooms.length / itemsPerSlide) }).map(
          (_, i) => {
            const isCurrentPage = i * itemsPerSlide === index;
            return (
              <div
                key={i}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  isCurrentPage
                    ? "bg-yellow-600 scale-110"
                    : "bg-gray-300 hover:bg-yellow-500"
                }`}
                onClick={() => {
                  setDirection(i * itemsPerSlide > index ? 1 : -1);
                  setIndex(i * itemsPerSlide);
                }}
              />
            );
          }
        )}
      </div>
    </section>
  );
}
