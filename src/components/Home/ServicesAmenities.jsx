"use client";
import { FaWifi, FaSwimmingPool, FaUtensils, FaParking } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { icon: <FaWifi size={28} />, title: "Free Wi-Fi", desc: "High-speed internet available throughout the property." },
  { icon: <FaSwimmingPool size={28} />, title: "Swimming Pool", desc: "Relax and enjoy our crystal-clear pools with a view." },
  { icon: <FaUtensils size={28} />, title: "Restaurant", desc: "Delicious meals crafted by top chefs just for you." },
  { icon: <FaParking size={28} />, title: "Parking", desc: "Safe and spacious parking available 24/7." },
  
];

const ServicesAmenities = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#fdf6f9] to-[#ffe6f1] overflow-hidden">
      {/* Decorative Floating Shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#ff385c]/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#ff85a0]/20 blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[#222]"
        >
          Our <span className="text-[#ff385c]">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600  mx-auto mb-16"
        >
          Experience next-level comfort and luxury with our thoughtfully curated services for every traveler.
        </motion.p>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15, scale: 1.08 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="relative w-64 md:w-72 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden"
            >
              {/* Icon Circle */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#ff385c] to-[#ff85a0] text-white text-2xl mb-4 mx-auto shadow-md">
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              {/* Description */}
              <p className="text-gray-700 text-sm">{service.desc}</p>

              {/* Floating Glow */}
              <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-[#ff385c]/20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#ff85a0]/20 blur-3xl animate-pulse"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAmenities;

// import { FaSwimmingPool, FaWifi, FaTaxi, FaEgg } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaSwimmingPool className="text-5xl text-[#bfa37c] mx-auto mb-4" />,
//     title: "Swimming Pool",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
//   },
//   {
//     icon: <FaWifi className="text-5xl text-[#bfa37c] mx-auto mb-4" />,
//     title: "Free Wifi",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
//   },
//   {
//     icon: <FaTaxi className="text-5xl text-[#bfa37c] mx-auto mb-4" />,
//     title: "Airport Taxi",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
//   },
//   {
//     icon: <FaEgg className="text-5xl text-[#bfa37c] mx-auto mb-4" />,
//     title: "Breakfast",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
//   },
// ];

// export default function OurServices() {
//   return (
//     <section className="py-16 bg-white text-center">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//           Our Services
//         </h2>
//         <p className="text-gray-600 mb-6">
//           Sailing Hotel provides all services you need.
//         </p>
//         <div className="w-16 h-[2px] bg-[#bfa37c] mx-auto mb-12"></div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="text-center transition-transform duration-300 hover:-translate-y-2"
//             >
//               {service.icon}
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {service.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

