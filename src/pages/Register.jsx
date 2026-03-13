import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      <Topbar />

      {/* Register Section */}
      <div className="flex flex-1 items-center justify-center px-4 py-12">

        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create a New Account
          </h2>

          <form className="space-y-4">

            <div>
              <label className="block mb-1 text-gray-600">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Register
            </button>

          </form>

          <p className="text-gray-600 mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
}