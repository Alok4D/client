import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <section className="relative h-[50vh] md:h-[90vh] lg:h-[99vh] flex items-center justify-center overflow-hidden">
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

     <Link to="/all-rooms">
      <button className="w-[162px] h-[44px] border-2 border-white text-white hover:bg-white hover:text-black">EXPLORER</button>
     </Link>
      </div>
    </section>
  );
};

export default Banner;
