import { useState } from "react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "9876543210",
    department: "IT",
    designation: "Software Developer",
    joiningDate: "12 March 2023",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-6 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          My Profile
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your personal information
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8">

        <div className="flex flex-col md:flex-row gap-8">

          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-indigo-500"
            />

            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* Profile Form */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={profile.department}
                disabled
                className="w-full border rounded-lg px-4 py-2 bg-gray-100"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={profile.designation}
                disabled
                className="w-full border rounded-lg px-4 py-2 bg-gray-100"
              />
            </div>

            {/* Joining Date */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Joining Date
              </label>
              <input
                type="text"
                name="joiningDate"
                value={profile.joiningDate}
                disabled
                className="w-full border rounded-lg px-4 py-2 bg-gray-100"
              />
            </div>

          </div>
        </div>

        {/* Save / Cancel Buttons */}
        {isEditing && (
          <div className="mt-8 flex gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Save Changes
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        )}

      </div>
    </div>
  );
}