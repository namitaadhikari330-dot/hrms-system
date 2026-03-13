import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <Topbar />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Have questions about HRMS? We'd love to hear from you.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE - CONTACT INFO */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Get In Touch
          </h2>

          <div className="space-y-6">

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold text-indigo-600 mb-2">📍 Address</h4>
              <p className="text-gray-600">
                Shiamgir, Uttarakhand, India
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold text-indigo-600 mb-2">📧 Email</h4>
              <p className="text-gray-600">
                support@hrms.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold text-indigo-600 mb-2">📞 Phone</h4>
              <p className="text-gray-600">
                +91 9876543210
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Send a Message
          </h3>

          <form className="space-y-6">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </section>

      <Footer />

    </div>
  );
}