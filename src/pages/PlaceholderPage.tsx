import { NavLink, useLocation } from "react-router";

export default function PlaceholderPage() {
  const location = useLocation();
  return (
    <div className="w-full px-4 md:px-10 py-6 md:py-10">
      <h3 className="text-3xl md:text-5xl font-bold mb-4 break-words">
        This is a placeholder page.
      </h3>
      <h3 className="text-xl md:text-3xl mb-2 break-words">
        You are currently viewing <b>{location.pathname}</b>.
      </h3>
      <h3 className="text-xl md:text-3xl break-words">
        Please navigate to <NavLink to="/dashboard" className="text-theme-primary transition-all hover:text-theme-secondary font-semibold">
          /dashboard
        </NavLink>.
      </h3>
    </div>
  );
}