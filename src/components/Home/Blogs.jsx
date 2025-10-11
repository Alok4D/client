const BlogEventsStatic = () => {
  return (
    <div className="bg-gray-50 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-md uppercase tracking-wide text-gray-400 mb-3">
          Hotel News
        </p>
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Blog & Events
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          To start the day in the best way, enjoying the extraordinary buffet breakfast in the quiet of our courtyard terraces.
        </p>
      </div>

      {/* Grid */}
      <div className="grid container mx-auto gap-8  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center">
        {/* Card 1 */}
        <div className="flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
          <div className="relative w-full h-64 md:h-72 overflow-hidden">
            <img
              src="https://sailing.thimpress.com/demo-classic-hotel/wp-content/uploads/sites/10/2014/01/blog-room-434x419.jpg"
              alt="Host a Family Party"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <span className="text-xs uppercase text-yellow-600 font-semibold mb-3">
              EVENT
            </span>
            <h3 className="text-2xl font-bold text-gray-900 hover:text-yellow-600 mb-2 transition-colors duration-300">
              Host a Family Party
            </h3>
            <p className="text-gray-600 text-sm flex-1 mb-4">
              Vulputate amet magna bibendum et nibh at. Pretium tincidunt non turpis...
            </p>
            <button className="mt-auto h-12 w-40 text-sm font-medium text-yellow-600 border border-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-white transition duration-300">
              READ MORE
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl  ">
          <div className="relative w-full h-64 md:h-72 overflow-hidden">
            <img
              src="https://sailing.thimpress.com/demo-classic-hotel/wp-content/uploads/sites/10/2015/09/luxury-sitting-2-434x419.jpg"
              alt="Rooms"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <span className="text-xs uppercase text-yellow-600 font-semibold mb-3">
              GALLERY
            </span>
            <h3 className="text-2xl font-bold text-gray-900 hover:text-yellow-600 mb-2 transition-colors duration-300">
              Rooms
            </h3>
            <p className="text-gray-600 text-sm flex-1 mb-4">
              Technology plays an integral role in improving hotel operations. A solid tech stack...
            </p>
            <button className="mt-auto h-12 w-40 text-sm font-medium text-yellow-600 border border-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-white transition duration-300">
              READ MORE
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl ">
          <div className="relative w-full h-64 md:h-72 overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSax-mVS7WqCQrXPdF49TcqhMKJA3wdIuB7Jg&s"
              alt="Other"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <span className="text-xs uppercase text-yellow-600 font-semibold mb-3">
              GALLERY
            </span>
            <h3 className="text-2xl font-bold text-gray-900 hover:text-yellow-600 mb-2 transition-colors duration-300">
              Other
            </h3>
            <p className="text-gray-600 text-sm flex-1 mb-4">
              Talking about improving hotel operations can’t go without addressing SOPs...
            </p>
            <button className="mt-auto h-12 w-40 text-sm font-medium text-yellow-600 border border-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-white transition duration-300">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEventsStatic;
