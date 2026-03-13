import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

export default function Features() {
  return (
    <div>

      {/* Top Navigation */}
      <Topbar />

      {/* Features Section */}
      <section className="bg-gray-100 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Page Title */}
          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              HRMS Features
            </h1>
            <p className="text-gray-600 text-lg">
              Powerful tools designed to simplify employee and HR management
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                Employee Management
              </h2>
              <p className="text-gray-600">
                Easily manage employee profiles, departments, job roles,
                and important information from a centralized system.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                Attendance Tracking
              </h2>
              <p className="text-gray-600">
                Monitor employee attendance, working hours, and daily
                check-in/check-out records automatically.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                Leave Management
              </h2>
              <p className="text-gray-600">
                Employees can apply for leave online and administrators
                can approve or reject requests instantly.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                Payroll System
              </h2>
              <p className="text-gray-600">
                Generate payslips, calculate salaries, bonuses,
                and manage payroll data efficiently.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                Reports & Analytics
              </h2>
              <p className="text-gray-600">
                Get detailed reports on employee performance,
                attendance records and payroll summaries.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                Employee Self Service
              </h2>
              <p className="text-gray-600">
                Employees can check attendance, download salary slips,
                update their profiles and apply for leaves.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}