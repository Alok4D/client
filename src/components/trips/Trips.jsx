import { Link } from "react-router-dom";

const TRIP_ILLUSTRATION_URL = "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-trips-tab/original/ab20b5d7-c4a7-47ea-864b-acb9bb3fb2c5.png";

const Trips = () => {
  return (
    <div className=" flex flex-col items-center pt-12 pb-12">
      
      <div className="container mx-auto px-6 md:px-10 mt-12 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
        
        {/* Left Side: Illustration */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-start items-center">
          <img 
            src={TRIP_ILLUSTRATION_URL} 
            alt="Illustration showing vacation planning steps" 
            className="w-full h-[450px] md:h-[500px] object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Side: Call to Action */}
        <div className="w-full md:w-7/12 flex flex-col justify-center items-center md:items-start text-center md:text-left pt-6 md:pt-0">
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-snug">
            Build the perfect <span className="text-pink-600">trip</span>
          </h2>
          
          <p className="text-md text-gray-600 mb-8 max-w-2xl">
            Discover unique homes, experiences, and essential services for your next adventure. Once booked, all your reservations will appear here for easy access and management.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/">
              <button
                className="w-48 py-3.5 px-8 text-white text-lg font-bold rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg shadow-pink-300"
                style={{
                  background: "linear-gradient(to right, #ff385c, #d31d47)",
                }}
              >
                Get Started
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Trips;
