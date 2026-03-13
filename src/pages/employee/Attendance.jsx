import { useState } from "react";

export default function Attendance() {
  const [month, setMonth] = useState("March");

  const summary = {
    totalWorkingDays: 26,
    presentDays: 22,
    absentDays: 2,
    leaveDays: 2,
  };

  const attendanceData = [
    { date: "01 March 2026", status: "Present" },
    { date: "02 March 2026", status: "Present" },
    { date: "03 March 2026", status: "Absent" },
    { date: "04 March 2026", status: "Present" },
    { date: "05 March 2026", status: "Leave" },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Present":
        return "bg-green-100 text-green-700";
      case "Absent":
        return "bg-red-100 text-red-700";
      case "Leave":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "";
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-semibold mb-6">
        My Attendance
      </h1>

      {/* Month Filter */}
      <div className="mb-6">
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
        </select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-xl p-5">
          <h2 className="text-gray-500 text-sm">Total Working Days</h2>
          <p className="text-2xl font-bold mt-2">
            {summary.totalWorkingDays}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5">
          <h2 className="text-gray-500 text-sm">Present Days</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">
            {summary.presentDays}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5">
          <h2 className="text-gray-500 text-sm">Absent Days</h2>
          <p className="text-2xl font-bold text-red-600 mt-2">
            {summary.absentDays}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5">
          <h2 className="text-gray-500 text-sm">Leave Days</h2>
          <p className="text-2xl font-bold text-yellow-600 mt-2">
            {summary.leaveDays}
          </p>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">
          Attendance History ({month})
        </h2>

        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {attendanceData.map((record, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">{record.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                      record.status
                    )}`}
                  >
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}