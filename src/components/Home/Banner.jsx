import { FaUser } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const Banner = () => {
  return (
    <section className="relative h-[99vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-[99vh] object-cover"
        poster="https://sailing.thimpress.com/demo-beach-resort-spa/wp-content/uploads/sites/25/2023/12/home-head.jpg"
      >
        <source
          src="https://sailing.thimpress.com/demo-6/wp-content/uploads/sites/6/revslider/slider-6/Sunrise-781.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 h-[99vh]" />

      {/* Content (Centered) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg">
          StayVista Resort
        </h1>
        <p className="text-lg md:text-xl font-light mb-10">
          Where every stay is unique.
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 px-6 py-4 md:py-6 w-full max-w-5xl mx-auto">
          {/* Date Section */}
          <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-300 pb-3 md:pb-0 md:pr-6 w-full md:w-auto">
            <CiCalendar className="text-2xl text-gray-600" />
            <div className="text-left">
              <p className="text-sm text-gray-500 font-medium">
                Checkin - Checkout
              </p>
              <p className="text-gray-800 font-semibold text-sm md:text-base">
                2025/10/11 - 2025/10/12
              </p>
            </div>
          </div>

          {/* Adults */}
          <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-300 pb-3 md:pb-0 md:px-6 w-full md:w-auto">
            <FaUser className="text-xl text-gray-600" />
            <div className="text-left">
              <p className="text-sm text-gray-500 font-medium">Adults</p>
              <p className="text-gray-800 font-semibold text-sm md:text-base">
                1 Adults
              </p>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center gap-3 pb-3 md:pb-0 md:px-6 w-full md:w-auto">
            <FaUser className="text-xl text-gray-600" />
            <div className="text-left">
              <p className="text-sm text-gray-500 font-medium">Children</p>
              <p className="text-gray-800 font-semibold text-sm md:text-base">
                0 Children
              </p>
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-yellow-600 hover:bg-yellow-700 transition text-white rounded-full p-3 md:p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
