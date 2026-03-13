import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar({ role }) {
  const [adminOpen, setAdminOpen] = useState(false);
  const [employeeOpen, setEmployeeOpen] = useState(false);

  return (
    <aside className="w-64 bg-blue-700 text-white p-4 h-full">

      {/* Admin Menu */}
      {role === "admin" && (
        <div className="mb-4">

          <button
            onClick={() => setAdminOpen(!adminOpen)}
            className="w-full text-left font-semibold hover:bg-blue-600 p-2 rounded transition"
          >
            Admin Panel
          </button>

          {adminOpen && (
            <div className="ml-3 mt-2 space-y-2 text-sm">

              <Link className="block hover:bg-blue-600 p-2 rounded" to="/admin/dashboard">
                Dashboard
              </Link>

              <Link className="block hover:bg-blue-600 p-2 rounded" to="/admin/employees">
                Employees
              </Link>

              <Link className="block hover:bg-blue-600 p-2 rounded" to="/admin/attendance">
                Attendance
              </Link>

              <Link className="block hover:bg-blue-600 p-2 rounded" to="/admin/leaves">
                Leave Requests
              </Link>

              <Link className="block hover:bg-blue-600 p-2 rounded" to="/admin/payroll">
                Payroll
              </Link>

              <Link className="block hover:bg-blue-600 p-2 rounded" to="/admin/reports">
                Reports
              </Link>

            </div>
          )}
        </div>
      )}

      {/* Employee Menu */}
      {role === "employee" && (
        <div>

          <button
            onClick={() => setEmployeeOpen(!employeeOpen)}
            className="w-full text-left font-semibold hover:bg-blue-600 p-2 rounded transition"
          >
            Employee Panel
          </button>

          {employeeOpen && (
            <div className="ml-3 mt-2 space-y-2 text-sm">

              <Link className="block hover:bg-blue-600 p-2 rounded" to="/employee/dashboard">
                Dashboard
              </Link>

              <Link className="block hover:bg-blue-600 p-2 rounded" to="/employee/profile">
                My Profile
              </Link>

              <Link className="block hover:bg-blue-600 p-2 rounded" to="/employee/attendance">
                Attendance
              </Link>

              <Link className="block hover:bg-blue-600 p-2 rounded" to="/employee/applyleave">
                Apply Leave
              </Link>

              <Link className="block hover:bg-blue-600 p-2 rounded" to="/employee/salary">
                Salary
              </Link>

            </div>
          )}
        </div>
      )}

    </aside>
  );
}