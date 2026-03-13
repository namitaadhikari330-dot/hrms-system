import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

export default function AdminLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* Full Width Topbar */}
      <div className="sticky top-0 z-50">
        <Topbar />
      </div>

      {/* Sidebar + Content */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <Sidebar role="admin" />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>

      </div>

      {/* Full Width Footer */}
      <Footer />

    </div>
  );
}