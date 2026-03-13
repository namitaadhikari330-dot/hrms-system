// src/components/Table.jsx
import React from "react";

function Table({ columns, data, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-md">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="text-left px-4 py-2 border-b border-gray-200">
                {col}
              </th>
            ))}
            {(onEdit || onDelete) && <th className="px-4 py-2 border-b border-gray-200">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-2 border-b border-gray-200">
                    {row[col] || "-"}
                  </td>
                ))}
                {(onEdit || onDelete) && (
                  <td className="px-4 py-2 border-b border-gray-200">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(row)}
                        className="text-sm text-blue-600 hover:underline mr-2"
                      >
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => onDelete(row)}
                        className="text-sm text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 1} className="text-center py-4 text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;