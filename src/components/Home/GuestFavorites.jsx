import { motion } from "framer-motion";

const favorites = [
  {
    name: "Ocean View Resort",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/183020872.jpg?k=5bb20b30f10ea2d48b249ef1871e44da9c7c104597bbdc470c907ebd58fcc13e&o=&hp=1",
    price: "$250/night",
    rating: 4.8,
  },
  {
    name: "Mountain Retreat",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/58/54/60/chamong-chiabari-mountain.jpg?w=900&h=500&s=1",
    price: "$180/night",
    rating: 4.6,
  },
  {
    name: "City Lights Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    price: "$200/night",
    rating: 4.7,
  },
];

const GuestFavorites = () => {
  return (
    <section className="py-24 lg:mt-32 mt-16 bg-gradient-to-tr from-[#ffeef2] to-[#fffafc] relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#222]">
          Guest <span className="text-[#ff385c]">Favorites</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          These rooms are loved by our guests for comfort, style, and location.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((room, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">{room.name}</h3>
                <p className="text-white/80">{room.price}</p>
                <p className="text-yellow-400 mt-1">⭐ {room.rating}</p>
              </div>
              {/* Floating Badge */}
              <div className="absolute top-3 right-3 bg-[#ff385c]/50 border text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                ❤️ Favorite
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestFavorites;
