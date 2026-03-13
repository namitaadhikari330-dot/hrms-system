import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ================= PUBLIC PAGES ================= */
import Landing from "../pages/Landing";
import Features from "../pages/Features";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

/* ================= LAYOUTS ================= */
import AdminLayout from "../layouts/AdminLayout";
import EmployeeLayout from "../layouts/EmployeeLayout";

/* ================= ADMIN PAGES ================= */
import AdminDashboard from "../pages/admin/Dashboard";
import AdminAttendance from "../pages/admin/Attendance";
import Employees from "../pages/admin/Employees";
import Leaves from "../pages/admin/Leaves";
import Payroll from "../pages/admin/Payroll";
import Reports from "../pages/admin/Reports";

/* ================= EMPLOYEE PAGES ================= */
import EmployeeDashboard from "../pages/employee/Dashboard";
import EmployeeAttendance from "../pages/employee/Attendance";
import ApplyLeave from "../pages/employee/ApplyLeave";
import Salary from "../pages/employee/Salary";
import Profile from "../pages/employee/Profile";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ================= PUBLIC ================= */}

        <Route path="/" element={<Landing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* ================= ADMIN ================= */}

        <Route path="/admin" element={<AdminLayout />}>

          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="attendance" element={<AdminAttendance />} />
          <Route path="employees" element={<Employees />} />
          <Route path="leaves" element={<Leaves />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="reports" element={<Reports />} />

        </Route>


        {/* ================= EMPLOYEE ================= */}

        <Route path="/employee" element={<EmployeeLayout />}>

          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="attendance" element={<EmployeeAttendance />} />
          <Route path="applyleave" element={<ApplyLeave />} />
          <Route path="salary" element={<Salary />} />
          <Route path="profile" element={<Profile />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}