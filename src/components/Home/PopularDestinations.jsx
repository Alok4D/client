import { motion } from "framer-motion";

const destinations = [
  {
    name: "Cox's Bazar",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    stays: 120,
  },
  {
    name: "Bandarban",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/77/22/14/amiakhum.jpg?w=1200&h=700&s=1",
    stays: 95,
  },
  {
    name: "Sylhet",
    image: "https://images.unsplash.com/photo-1643001607577-0a0332e79aab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lsaGV0JTJDJTIwYmFuZ2xhZGVzaHxlbnwwfHwwfHx8MA%3D%3D",
    stays: 80,
  },
  {
    name: "Sundarbans",
    image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/26/ab212195cbb3cec620d3d24edbb607e9_1000x1000.jpg",
    stays: 60,
  },
];

const PopularDestinations = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#fffafc] via-[#ffeef2] to-[#ffd9e5] overflow-hidden">
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
          Popular <span className="text-[#ff385c]">Destinations</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-16"
        >
          Explore the most visited places with our curated hotel listings. Book your perfect stay in top destinations.
        </motion.p>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(255,56,92,0.2)] transition-all duration-300 cursor-pointer"
            >
              {/* Destination Image */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4">
                <h3 className="text-white text-lg font-semibold">{dest.name}</h3>
                <p className="text-white/80 text-sm">{dest.stays}+ stays</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
