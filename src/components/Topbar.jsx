import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Topbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [empOpen, setEmpOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-6">

        {/* Logo */}
        <img src={logo} alt="Hurexa Logo" className="h-8" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">

          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>

          {/* Admin */}
          <div className="relative group">
            <button className="hover:text-green-600">Admin ▾</button>

            <div className="absolute top-full left-0 w-52 bg-white border rounded-lg shadow-lg py-2 
              invisible opacity-0 group-hover:visible group-hover:opacity-100 transition">

              <Link to="/admin/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
              <Link to="/admin/attendance" className="block px-4 py-2 hover:bg-gray-100">Attendance</Link>
              <Link to="/admin/employees" className="block px-4 py-2 hover:bg-gray-100">Employees</Link>
              <Link to="/admin/leaves" className="block px-4 py-2 hover:bg-gray-100">Leaves</Link>
              <Link to="/admin/payroll" className="block px-4 py-2 hover:bg-gray-100">Payroll</Link>
              <Link to="/admin/reports" className="block px-4 py-2 hover:bg-gray-100">Reports</Link>

            </div>
          </div>

          {/* Employee */}
          <div className="relative group">
            <button className="hover:text-green-600">Employee ▾</button>

            <div className="absolute top-full left-0 w-52 bg-white border rounded-lg shadow-lg py-2 
              invisible opacity-0 group-hover:visible group-hover:opacity-100 transition">

              <Link to="/employee/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
              <Link to="/employee/attendance" className="block px-4 py-2 hover:bg-gray-100">Attendance</Link>
              <Link to="/employee/applyleave" className="block px-4 py-2 hover:bg-gray-100">Apply Leave</Link>
              <Link to="/employee/salary" className="block px-4 py-2 hover:bg-gray-100">Salary</Link>
              <Link to="/employee/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>

            </div>
          </div>

          <Link to="/features" className="hover:text-green-600">Features</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>

        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">

          <Link
            to="/login"
            className="px-4 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-50"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Register
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">

          <Link to="/" className="block">Home</Link>
          <Link to="/about" className="block">About</Link>

          {/* Admin Mobile */}
          <button
            onClick={() => setAdminOpen(!adminOpen)}
            className="block w-full text-left"
          >
            Admin ▾
          </button>

          {adminOpen && (
            <div className="pl-4 space-y-2 text-sm">
              <Link to="/admin/dashboard" className="block">Dashboard</Link>
              <Link to="/admin/attendance" className="block">Attendance</Link>
              <Link to="/admin/employees" className="block">Employees</Link>
              <Link to="/admin/leaves" className="block">Leaves</Link>
              <Link to="/admin/payroll" className="block">Payroll</Link>
              <Link to="/admin/reports" className="block">Reports</Link>
            </div>
          )}

          {/* Employee Mobile */}
          <button
            onClick={() => setEmpOpen(!empOpen)}
            className="block w-full text-left"
          >
            Employee ▾
          </button>

          {empOpen && (
            <div className="pl-4 space-y-2 text-sm">
              <Link to="/employee/dashboard" className="block">Dashboard</Link>
              <Link to="/employee/attendance" className="block">Attendance</Link>
              <Link to="/employee/applyleave" className="block">Apply Leave</Link>
              <Link to="/employee/salary" className="block">Salary</Link>
              <Link to="/employee/profile" className="block">Profile</Link>
            </div>
          )}

          <Link to="/features" className="block">Features</Link>
          <Link to="/contact" className="block">Contact</Link>

          <hr />

          <Link to="/login" className="block text-green-600">Login</Link>
          <Link to="/register" className="block text-green-600">Register</Link>

        </div>

      )}

    </nav>
  );
}