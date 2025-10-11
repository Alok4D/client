
import { motion } from "framer-motion";
import { FaLock, FaBolt, FaHeadset, FaHome } from "react-icons/fa";

const ModernWhyChooseUs = () => {
  const features = [
    {
      icon: <FaLock size={30} />,
      title: "Safe & Secure Stays",
      desc: "All hotels are verified for safety and reliability. Enjoy peace of mind every time you book.",
    },
    {
      icon: <FaBolt size={30} />,
      title: "Instant Confirmation",
      desc: "Book your stay in seconds with instant confirmation — no waiting or manual approval needed.",
    },
    {
      icon: <FaHeadset size={30} />,
      title: "24/7 Live Support",
      desc: "Our multilingual support team is here round-the-clock to help with your bookings or questions.",
    },
    {
      icon: <FaHome size={30} />,
      title: "Luxury You Can Trust",
      desc: "Experience handpicked stays with premium comfort, verified hosts, and the best amenities.",
    },
  ];

  return (
    <section className="relative py-24 mt-32 bg-gradient-to-br from-[#fff] via-[#fef2f4] to-[#ffe5eb] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-[#ff385c]/20 blur-3xl rounded-full top-10 left-10 animate-pulse" />
        <div className="absolute w-96 h-96 bg-[#ff6b81]/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-[#222] mb-6"
        >
          Why Travelers <span className="text-[#ff385c]">Love StayVista</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-16"
        >
          We’re redefining the way you stay — secure, luxurious, and effortless.
          Discover why thousands of travelers trust StayVista.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-3xl bg-white/20 border border-white/30 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(255,56,92,0.2)] transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="flex justify-center mb-5 text-[#ff385c] group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernWhyChooseUs;
