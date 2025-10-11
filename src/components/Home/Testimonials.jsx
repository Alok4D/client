import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const testimonials = [
  {
    id: 1,
    name: "Tony Chester",
    title: "Front-end Developer",
    image: "https://i.pravatar.cc/100?img=1",
    text: "Incredible experience at the new Stanly Ranch. Auberge Resorts never disappoint but Stanly Ranch takes the level of hospitality to another level.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "UX Designer",
    image: "https://i.pravatar.cc/100?img=5",
    text: "A beautiful stay from start to finish. The design, service, and overall vibe made this trip unforgettable.",
  },
  {
    id: 3,
    name: "Michael Lee",
    title: "Software Engineer",
    image: "https://i.pravatar.cc/100?img=8",
    text: "Loved everything about the experience — peaceful, elegant, and modern. Perfect for both work and relaxation.",
  },
  {
    id: 4,
    name: "Alice Brown",
    title: "Product Manager",
    image: "https://i.pravatar.cc/100?img=12",
    text: "Amazing place to relax and work at the same time. Highly recommended!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setIndex((prev) => (prev + 2) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);

  const getVisibleTestimonials = () => [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <section className="py-20 px-6 md:px-20  ">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Every Stay Has A Story
          </h2>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <MdArrowBackIosNew className="text-gray-600 text-lg" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <MdArrowForwardIos className="text-gray-600 text-lg" />
            </button>
          </div>
        </div>

        {/* Testimonials Row */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              {getVisibleTestimonials().map((t) => (
                <motion.div
                  key={t.id}
                  className="w-full sm:w-1/2 flex flex-col p-6  rounded-3xl border-2 transition-all border-l-4 border-yellow-400"
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Stars + Description */}
                  <div className="flex-1 mb-4">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-500 text-lg mx-0.5"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{t.text}</p>
                  </div>

                  {/* Avatar + Name/Title on one row */}
                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full border-2 border-yellow-400"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-gray-500 text-sm">{t.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
