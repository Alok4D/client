import { useParams, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Host a Family Party in Style",
      category: "EVENT",
      author: "John Doe",
      date: "October 10, 2025",
      image:
        "https://sailing.thimpress.com/demo-classic-hotel/wp-content/uploads/sites/10/2014/01/blog-room-434x419.jpg",
      content: `Creating unforgettable memories with your loved ones starts with a perfectly planned family party. Whether it’s an intimate gathering or a grand celebration, attention to detail makes all the difference.

From carefully curated decorations to exquisite cuisine and soothing music, every aspect should contribute to a joyful experience. Don’t forget to capture the moments with photography and video to treasure forever.

Host your family party with comfort and elegance, ensuring every guest feels valued and enjoys the event to the fullest.`,
    },
    {
      id: 2,
      title: "Luxurious Rooms for Your Stay",
      category: "GALLERY",
      author: "Jane Smith",
      date: "September 25, 2025",
      image:
        "https://sailing.thimpress.com/demo-classic-hotel/wp-content/uploads/sites/10/2015/09/luxury-sitting-2-434x419.jpg",
      content: `Our rooms are designed to provide the perfect blend of luxury and comfort. Each room features premium bedding, modern amenities, and an inviting ambiance to make your stay memorable.

Whether you’re here for business or leisure, enjoy a tranquil environment with ambient lighting, cozy seating, and spectacular views from your window.

Experience exceptional hospitality and attention to detail, making your stay a relaxing and rejuvenating retreat.`,
    },
    {
      id: 3,
      title: "Explore Other Services & Facilities",
      category: "GALLERY",
      author: "Michael Lee",
      date: "October 5, 2025",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSax-mVS7WqCQrXPdF49TcqhMKJA3wdIuB7Jg&s",
      content: `Beyond our luxurious rooms, we offer a range of facilities to enhance your stay. Enjoy a fully equipped gym, spa treatments, swimming pool, and fine dining experiences.

Every detail is crafted to ensure comfort, relaxation, and a memorable experience. Our staff is dedicated to providing personalized services to meet all your needs.

Discover the perfect combination of elegance and convenience, making your stay truly exceptional.`,
    },
  ];

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700">Blog Not Found</h2>
        <button
          onClick={() => navigate("/blogs")}
          className="mt-6 bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mt-28 max-w-4xl">
      <button
        onClick={() => navigate("/")}
        className="mb-6 text-yellow-600 font-medium hover:underline"
      >
        ← Back to Blogs
      </button>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-8">
          <span className="text-xs uppercase text-yellow-600 font-semibold mb-2">
            {blog.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
          <div className="flex items-center gap-4 mb-6 text-gray-500 text-sm">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
