import { Outlet } from "react-router";
import DashboardSidebar from "../components/dashboard/Sidebar";
import DashboardTopbar from "../components/dashboard/Topbar";

export default function RootLayout() {
    return <div className="w-full flex gap-1 md:gap-4 p-2 md:p-4 bg-white">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col gap-1 md:gap-4">
            <DashboardTopbar />
            <div className="bg-theme-alpha-gray w-full px-1.5 py-2 md:px-4 py-6 rounded-lg md:rounded-2xl">
                <Outlet />
            </div>
        </div>
    </div>
}