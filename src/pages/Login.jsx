import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

export default function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      <Topbar />

      <div className="flex flex-1 items-center justify-center py-10">

        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Login to Your Account
          </h2>

          <form className="space-y-4">

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

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-sm text-gray-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Login
            </button>

          </form>

          <p className="text-gray-600 mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 hover:underline"
            >
              Register
            </Link>
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
}