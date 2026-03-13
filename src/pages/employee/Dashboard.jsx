import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";

export default function EmployeeDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 p-6">

      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Employee Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Welcome back 👋 Here’s your personal overview.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-indigo-500">
          <Card title="My Attendance" value="22 / 26 Days" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-green-500">
          <Card title="Leave Balance" value="8 Days" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-yellow-500">
          <Card title="This Month Salary" value="₹35,000" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-pink-500">
          <Card title="Performance Rating" value="4.5 / 5 ⭐" />
        </div>

      </div>

      {/* Quick Actions Section */}
      <div className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">

          <button
            onClick={() => navigate("/employee/applyleave")}
            className="px-6 py-3 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition"
          >
            Apply for Leave
          </button>

          <button
            onClick={() => navigate("/employee/attendance")}
            className="px-6 py-3 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition"
          >
            View Attendance
          </button>

          <button
            onClick={() => navigate("/employee/salary")}
            className="px-6 py-3 bg-yellow-100 text-yellow-600 rounded-lg hover:bg-yellow-200 transition"
          >
            Download Payslip
          </button>

          <button
            onClick={() => navigate("/employee/profile")}
            className="px-6 py-3 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition"
          >
            Update Profile
          </button>

        </div>
      </div>

    </div>
  );
}