import { useNavigate } from "react-router-dom";

const BlogEvents = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Host a Family Party",
      category: "EVENT",
      image:
        "https://sailing.thimpress.com/demo-classic-hotel/wp-content/uploads/sites/10/2014/01/blog-room-434x419.jpg",
      shortDesc:
        "Create unforgettable memories with your loved ones by hosting a family party filled with laughter, joy, and togetherness.",
    },
    {
      id: 2,
      title: "Rooms",
      category: "GALLERY",
      image:
        "https://sailing.thimpress.com/demo-classic-hotel/wp-content/uploads/sites/10/2015/09/luxury-sitting-2-434x419.jpg",
      shortDesc:
        "Our guests consistently praise our rooms for their comfort, cleanliness, and inviting ambiance.",
    },
    {
      id: 3,
      title: "Other",
      category: "GALLERY",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSax-mVS7WqCQrXPdF49TcqhMKJA3wdIuB7Jg&s",
      shortDesc:
        "From soft bedding and spacious interiors to breathtaking views and premium amenities.",
    },
  ];

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
          To start the day in the best way, enjoying the extraordinary buffet breakfast
          in the quiet of our courtyard terraces.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid container mx-auto gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center px-2 lg:px-0 md:px-2">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl"
          >
            <div className="relative w-full h-64 md:h-72 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs uppercase text-yellow-600 font-semibold mb-3">
                {blog.category}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 hover:text-yellow-600 mb-2 transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm flex-1 mb-4">
                {blog.shortDesc}
              </p>
              <button
                onClick={() => navigate(`/blog-details/${blog.id}`)}
                className="mt-auto h-12 w-40 text-sm font-medium text-yellow-600 border border-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-white transition duration-300"
              >
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogEvents;
