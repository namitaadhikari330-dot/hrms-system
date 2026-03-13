import { useState } from "react";

export default function AdminAttendance() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const attendanceData = [
    {
      id: 1,
      name: "Rahul Sharma",
      department: "IT",
      date: "2026-03-01",
      status: "Present",
    },
    {
      id: 2,
      name: "Priya Verma",
      department: "HR",
      date: "2026-03-01",
      status: "Absent",
    },
    {
      id: 3,
      name: "Amit Singh",
      department: "Finance",
      date: "2026-03-01",
      status: "Leave",
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      department: "IT",
      date: "2026-03-01",
      status: "Present",
    },
  ];

  const filteredData = attendanceData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || item.status === filter;

    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    if (status === "Present")
      return "bg-green-100 text-green-700";
    if (status === "Absent")
      return "bg-red-100 text-red-700";
    if (status === "Leave")
      return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Admin Attendance Management
      </h1>

      {/* Search & Filter Section */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="All">All</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="Leave">Leave</option>
        </select>
      </div>

      {/* Attendance Table */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Employee Name</th>
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.department}</td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500"
                >
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}