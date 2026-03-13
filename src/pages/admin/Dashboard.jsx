import Card from "../../components/Card";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Welcome back, Admin 👋 Here’s what’s happening today.
          </p>
        </div>

        <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
          + Add Employee
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-indigo-500">
          <Card title="Total Employees" value="120" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-green-500">
          <Card title="Present Today" value="98" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-yellow-500">
          <Card title="Pending Leaves" value="12" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border-l-4 border-red-500">
          <Card title="Monthly Payroll" value="₹4,50,000" />
        </div>

      </div>

      {/* Quick Actions Section */}
      <div className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition">
            Manage Employees
          </button>

          <button className="px-6 py-3 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition">
            Approve Leaves
          </button>

          <button className="px-6 py-3 bg-yellow-100 text-yellow-600 rounded-lg hover:bg-yellow-200 transition">
            Generate Payroll
          </button>

          <button className="px-6 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition">
            View Reports
          </button>
        </div>
      </div>

    </div>
  );
}