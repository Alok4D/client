import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaLocationArrow,
  
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";

const ContactUs = () => {
  return (
    <section className="px-4 lg:px-0 mb-8 bg-white text-gray-800 container mx-auto  mt-20">
    
     
      {/* Header */}
      <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">
        Contact Us
      </h2>

      {/* Map + Form */}
      <div className="grid md:grid-cols-2 gap-10 ">
        {/* Google Map */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24165.33726082108!2d-74.0154857!3d40.7114607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c0bb7b1%3A0xf11c16a2d79b7c2f!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1697040053058!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-xl shadow-md p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Get In Touch
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name*"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="email"
                placeholder="Your email*"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <textarea
              placeholder="Tell us a little bit about your destination dream"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:from-amber-700 hover:to-amber-600 transition-all"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
        {/* Email */}
        <div className="flex flex-col items-center p-8 bg-white border rounded-2xl shadow hover:shadow-lg transition-all hover:-translate-y-2">
          <div className="bg-amber-100 p-4 rounded-full mb-4">
            <FaEnvelope className="text-3xl text-amber-600" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Email</h4>
          <p className="text-gray-500 mb-3 text-sm md:text-base">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </p>
          <a
            href="mailto:hello@sailing.com"
            className="text-amber-600 font-medium hover:underline"
          >
            hello@sailing.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center p-8 bg-white border rounded-2xl shadow hover:shadow-lg transition-all hover:-translate-y-2">
          <div className="bg-amber-100 p-4 rounded-full mb-4">
            <MdAddCall className="text-3xl text-amber-600" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Phone</h4>
          <p className="text-gray-500 mb-3 text-sm md:text-base">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </p>
          <p className="text-amber-600 font-medium">(308) 555-0121</p>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center p-8 bg-white border rounded-2xl shadow hover:shadow-lg transition-all hover:-translate-y-2">
          <div className="bg-amber-100 p-4 rounded-full mb-4">
            <FaLocationArrow className="text-3xl text-amber-600" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Social</h4>
          <p className="text-gray-500 mb-4 text-sm md:text-base">
            Follow us on
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#"
              className="p-3 rounded-full bg-amber-100 hover:bg-amber-600 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-amber-100 hover:bg-amber-600 hover:text-white transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-amber-100 hover:bg-amber-600 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
