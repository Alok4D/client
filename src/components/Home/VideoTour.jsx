// import { useState, useEffect } from "react";
// import { FaPlay } from "react-icons/fa";

// const videos = [
//   {
//     title: "Travel Bali",
//     desc: "Explore the beauty of Bali with our exclusive tour experience.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
//     videoUrl: "https://www.youtube.com/embed/i9E_Blai8vk?si=UZszK2ejdsiOv56Q",
//   },
//   {
//     title: "Dubai Special",
//     desc: "Discover the luxury and magic of Dubai — a destination like no other.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1920&q=80",
//     videoUrl: "https://www.youtube.com/embed/0_RPAZuzPs8?si=a-WXey3GrXBcpFS_",
//   },
//   {
//     title: "Paris Dreams",
//     desc: "Walk through the city of love — Eiffel Tower, cafés, and lights await you.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80",
//     videoUrl: "https://www.youtube.com/embed/ENWVRcMGDoU?si=sQO3bHTM1Zwkt-wH",
//   },

// ];

// export default function TravelVideoSlider() {
//   const [current, setCurrent] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeVideo, setActiveVideo] = useState("");

//   const openVideo = (url) => {
//     setActiveVideo(url);
//     setIsOpen(true);
//   };

//   // ✅ Auto slide every 6 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % videos.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative py-10 ">
   

//       {/* Video Slider */}
//       <div className="relative  overflow-hidden shadow-lg h-[583px]">
//         {videos.map((video, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//             style={{
//               backgroundImage: `url(${video.thumbnail})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//             {/* Content */}
//             <div className="relative z-20 max-w-6xl mx-auto px-6 h-full flex items-center gap-8 text-white">
//               {/* Play Button */}
//               <div
//                 onClick={() => openVideo(video.videoUrl)}
//                 className="border-4 border-[#bfa37c] rounded-full p-8 cursor-pointer transition-transform duration-300 hover:scale-105"
//               >
//                 <FaPlay className="text-[#bfa37c] text-4xl" />
//               </div>

//               {/* Text */}
//               <div className="max-w-lg">
//                 <h2 className="text-4xl md:text-5xl font-bold mb-3">
//                   {video.title}
//                 </h2>
//                 <p className="italic text-lg mb-6 text-gray-200 leading-relaxed">
//                   {video.desc}
//                 </p>
//                 <button
//                   onClick={() => openVideo(video.videoUrl)}
//                   className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#bfa37c] hover:text-white transition-all"
//                 >
//                   Play Now <FaPlay className="text-xs" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Dots */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
//           {videos.map((_, i) => (
//             <span
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
//                 i === current ? "bg-[#bfa37c]" : "bg-gray-400"
//               }`}
//             ></span>
//           ))}
//         </div>
//       </div>

//       {/* Video Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <div className="relative w-full max-w-3xl aspect-video px-4">
//             <iframe
//               className="w-full h-full rounded-lg"
//               src={`${activeVideo}&autoplay=1`}
//               title="YouTube video player"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>

//             {/* Close Button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute -top-8 right-0 text-white text-2xl font-bold hover:text-[#bfa37c]"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import { FaPlay,  } from "react-icons/fa";


const slides = [
  {
    title: "Video Tour",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    thumbnail:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
    videoUrl: "https://www.youtube.com/embed/yMPJRe2qTlI?si=yy46QRwXqAa9gpJY",
  },
  {
    title: "Travel Bali",
    desc: "Explore the tropical paradise — breathtaking beaches and lush forests await.",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    videoUrl: "https://www.youtube.com/embed/i9E_Blai8vk?si=UZszK2ejdsiOv56Q",
  },
  {
    title: "Dubai Special",
    desc: "Luxury, adventure, and innovation — discover the magic of Dubai.",
    thumbnail:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1920&q=80",
    videoUrl: "https://www.youtube.com/embed/0_RPAZuzPs8?si=a-WXey3GrXBcpFS_",
  },
];

export default function VideoHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  // Auto slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const openVideo = (url) => {
    setActiveVideo(url);
    setIsOpen(true);
  };

  return (
    <section className="relative w-full lg:h-[583px] h-[530px] overflow-hidden mt-8">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-20 flex items-center justify-center md:justify-start h-full max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-8 text-white">
              {/* Play Button */}
              <div
                onClick={() => openVideo(slide.videoUrl)}
                className="cursor-pointer border-[4px] border-[#bfa37c] rounded-full p-10 hover:scale-105 transition-transform duration-300"
              >
                <FaPlay className="text-[#bfa37c] text-5xl" />
              </div>

              {/* Text */}
              <div className="max-w-md text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-semibold mb-3">
                  {slide.title}
                </h2>
                <p className="italic text-gray-300 leading-relaxed mb-6">
                  {slide.desc}
                </p>
                <button
                  onClick={() => openVideo(slide.videoUrl)}
                  className="text-[#bfa37c] font-semibold uppercase tracking-wide text-sm flex items-center gap-2 hover:text-white transition-all"
                >
                  Play Now <FaPlay className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === current ? "bg-[#bfa37c]" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

    {/* Right Arrow */}
{/* <button
  onClick={handleNext}
  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex justify-center items-center bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 shadow-lg hover:shadow-xl p-3 md:p-4 rounded-full transition-all duration-300 z-30"
>
  <MdOutlineNavigateNext className="text-3xl md:text-4xl" />
</button> */}


      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl aspect-video px-4">
            <iframe
              className="w-full h-full rounded-lg"
              src={`${activeVideo}&autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-8 right-0 text-white text-2xl hover:text-[#bfa37c]"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

