import { useState } from "react";

export default function Leaves() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const leaveData = [
    {
      id: 1,
      name: "Rahul Sharma",
      department: "IT",
      from: "2026-03-10",
      to: "2026-03-12",
      reason: "Medical Leave",
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya Verma",
      department: "HR",
      from: "2026-03-15",
      to: "2026-03-16",
      reason: "Family Function",
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Singh",
      department: "Finance",
      from: "2026-03-18",
      to: "2026-03-20",
      reason: "Personal Work",
      status: "Rejected",
    },
  ];

  const filteredLeaves = leaveData.filter((leave) => {
    const matchesSearch = leave.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      leave.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    if (status === "Approved")
      return "bg-green-100 text-green-700";
    if (status === "Rejected")
      return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Leave Requests Management
      </h1>

      {/* Search + Filter */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Leaves Table */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Employee</th>
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">From</th>
              <th className="px-6 py-3">To</th>
              <th className="px-6 py-3">Reason</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredLeaves.length > 0 ? (
              filteredLeaves.map((leave) => (
                <tr key={leave.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{leave.id}</td>
                  <td className="px-6 py-4">{leave.name}</td>
                  <td className="px-6 py-4">{leave.department}</td>
                  <td className="px-6 py-4">{leave.from}</td>
                  <td className="px-6 py-4">{leave.to}</td>
                  <td className="px-6 py-4">{leave.reason}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        leave.status
                      )}`}
                    >
                      {leave.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 space-x-2">

                    {leave.status === "Pending" && (
                      <>
                        <button className="text-green-600 hover:underline">
                          Approve
                        </button>
                        <button className="text-red-600 hover:underline">
                          Reject
                        </button>
                      </>
                    )}

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500"
                >
                  No leave requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}