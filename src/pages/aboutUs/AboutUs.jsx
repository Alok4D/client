import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const AboutUs = () => {
    
  const stats = [
    { number: 40, suffix: "+", text: "Cities In 10 countries" },
    { number: 9000, suffix: "", text: "Units live worldwide" },
    { number: 1000000, suffix: "+", text: "Regular guests" },
  ];

  const partners = [
    "https://sailing.thimpress.com/demo-beach-resort-spa/wp-content/uploads/sites/25/2024/03/partner-01.png",
    "https://sailing.thimpress.com/demo-beach-resort-spa/wp-content/uploads/sites/25/2024/03/partner-02.png",
    "https://sailing.thimpress.com/demo-beach-resort-spa/wp-content/uploads/sites/25/2024/03/partner-03.png",
    "https://sailing.thimpress.com/demo-beach-resort-spa/wp-content/uploads/sites/25/2024/03/partner-04.png",
    "https://sailing.thimpress.com/demo-beach-resort-spa/wp-content/uploads/sites/25/2024/03/partner-05.png",
    "https://sailing.thimpress.com/demo-beach-resort-spa/wp-content/uploads/sites/25/2024/03/partner-06.png",
  ];



  // Motion variants
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const slideLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const slideRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const scaleHover = {
    whileHover: {
      scale: 1.02,
      y: -8,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },
    transition: { duration: 0.3 },
  };

  return (
    <section className="px-4 lg:px-0  bg-white text-gray-800  mt-20">
      {/* Breadcrumb */}
      {/* Header */}
      <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">
        About Us
      </h2>
      {/* Header */}
      <motion.div {...fadeUp} className="text-center px-4 sm:px-6 md:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Building The Future Of Hospitality
        </h2>
        <p className="text-gray-500 max-w-3xl sm:max-w-4xl md:max-w-6xl mx-auto mb-6 leading-relaxed">
          Hotels aren’t always hip. Hosts aren’t always reliable. So we’re
          changing the game—with spaces that inspire and delight, delivering
          seamless, personalized experiences. Check in, request towels, and get
          dinner recommendations—all from your phone.
        </p>
        <p className="text-gray-500 max-w-3xl sm:max-w-4xl md:max-w-6xl mx-auto mb-12 leading-relaxed">
          By eliminating inefficiencies as we grow, we can deliver hospitality
          that’s both remarkable and accessible. Because everyone should be able
          to afford an extraordinary place to stay.
        </p>
      </motion.div>

      {/* How We Got Started */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 container mx-auto">
        <motion.div {...slideLeft} whileHover={{ scale: 1.02 }} className="rounded-xl overflow-hidden shadow-md">
          <img
            src="https://sailing.thimpress.com/demo-beach-resort-spa/wp-content/uploads/sites/25/2023/06/blog-hotel-03.jpg"
            alt="How We Got Started"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </motion.div>
        <motion.div {...slideRight}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            How We Got Started
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Then a university student in Montreal, our co-founder began managing
            a handful of apartments. He greeted guests with wine, parked their
            cars, and envisioned a new set of ideals around hospitality.
          </p>
          <button className="px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all shadow-md">
            Read More
          </button>
        </motion.div>
      </div>

      {/* Where We’re Going */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-24 container mx-auto">
        <motion.div {...slideLeft} className="order-2 md:order-1">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            Where We’re Going
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            What began as a journey to provide a better stay has grown into a
            celebration of modern design and exceptional comfort. We’re working
            with world-class architects and designers to create spaces that
            transcend hospitality and enrich lives.
          </p>
          <button className="px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all shadow-md">
            Read More
          </button>
        </motion.div>
        <motion.div {...slideRight} className="order-1 md:order-2 rounded-xl overflow-hidden">
          <img
            src="https://sailing.thimpress.com/demo-beach-resort-spa/wp-content/uploads/sites/25/2024/03/blog-hotel-02.jpg"
            alt="Where We’re Going"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #f2f4f4 50%, white 100%)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sailing Today
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              From the heart of bustling cities to serene beachside getaways, our
              presence spans the globe — redefining hospitality through comfort,
              design, and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-20">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                {...scaleHover}
                className="bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 hover:bg-white transition-all"
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-1">
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2.5}
                    separator=","
                    suffix={item.suffix}
                    enableScrollSpy={true} // ✅ Animate on scroll
                    scrollSpyOnce={true}   // ✅ Animate only once
                  />
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://sailing.thimpress.com/demo-beach-resort-spa/wp-content/uploads/sites/25/2024/03/blog-hotel-10.jpg"
              alt="Luxury Resort"
              className="w-full h-64 sm:h-96 md:h-[680px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="pb-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-12 max-w-3xl mx-auto">
            Trusted by 12,000+ world-class brands and organizations of all sizes
          </motion.h2>

          <div className="overflow-x-auto">
            <motion.div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 py-4">
              {partners.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  {...fadeUp}
                  className="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-36 p-2 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-auto object-contain mx-auto"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work With Us */}
      <section className="flex items-center justify-center mt-12 mb-12 px-4 container mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Image Card */}
          <motion.div {...slideLeft} whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-full">
            <img
              src="https://sailing.thimpress.com/demo-beach-resort-spa/wp-content/uploads/sites/25/2024/03/blog-hotel-11.jpg"
              alt="Reception Desk"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Form Card */}
          <motion.div {...slideRight} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-center">
            <div className="p-6 sm:p-10 bg-gradient-to-br from-white to-gray-50 h-full flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Work With Us</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                We hope to become the most admired hospitality brand in the world.
                Help us get there.
              </p>

              <form className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="Your name*"
                    className="w-full p-3 rounded-lg bg-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    placeholder="Your email*"
                    className="w-full p-3 rounded-lg bg-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm sm:text-base"
                  />
                </div>

                <textarea
                  placeholder="Tell us a little bit about your destination dream"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-gray-100 placeholder-gray-500 resize-none focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm sm:text-base"
                ></textarea>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
                >
                  Send Now
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
