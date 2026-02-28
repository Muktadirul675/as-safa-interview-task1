import { NavLink, useLocation } from "react-router";

export default function NotFoundPage() {
    const { pathname } = useLocation()
    return (
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 px-4 text-center h-screen">
            <div className="mb-5 w-full max-w-md">
                <img src="/404.png" alt="404 Illustration" className="w-full h-auto rounded-3xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-theme-primary mb-2">
                {pathname}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                Page Not Found
            </h2>
            <p className="text-sm md:text-base text-gray-500 mb-4 max-w-md">
                The page you are looking for doesn't exist or has been moved. Please
                check the URL or return to the dashboard.
            </p>
            <NavLink to="/dashboard" className="inline-flex items-center gap-2 bg-theme-primary hover:bg-theme-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Go to Dashboard
            </NavLink>
        </div>
    );
}

