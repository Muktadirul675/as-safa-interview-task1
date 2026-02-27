import { useState, type ReactNode } from "react";
import { BiCalendar, BiLogOut } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { GiHelp } from "react-icons/gi";
import { GrAnalytics } from "react-icons/gr";
import { MdSettings } from "react-icons/md";
import { RiDashboardFill, RiTeamFill } from "react-icons/ri";
import { NavLink } from "react-router";
import { useAuth } from "../../stores/auth";
import Spinner from "../ui/Spinner";
import { SlBadge } from "react-icons/sl";
import ThemeButton from "../ui/ThemeButton";

interface SidebarRoute {
    label: string,
    link: string,
    icon: ReactNode
}

interface SidebarRoutes {
    [key: string]: SidebarRoute[]
}

const routes: SidebarRoutes = {
    menu: [
        { label: "Dashboard", link: "/dashboard", icon: <RiDashboardFill size={25} /> },
        { label: "Task", link: "/task", icon: <FaTasks size={25} /> },
        { label: "Calendar", link: "/calendar", icon: <BiCalendar size={25} /> },
        { label: "Analytics", link: "/analytics", icon: <GrAnalytics size={25} /> },
        { label: "Team", link: "/team", icon: <RiTeamFill size={25} /> },
    ],
    general: [
        { label: "Settings", link: '/settings', icon: <MdSettings size={25} /> },
        { label: "Help", link: '/help', icon: <GiHelp size={25} /> },
    ]
}

function DashboardSidebarItem({ route }: { route: SidebarRoute }) {
    return <NavLink to={route.link} className="sidebar-route-item px-4 text-theme-subtle text-lg flex items-center gap-3 py-2 transition-all hover:text-theme-hover">
        {route.icon}
        <div className="sm-hidden text-black">{route.label}</div>
    </NavLink>
}

export default function DashboardSidebar() {
    const auth = useAuth();
    const [loggingOut, setLoggingOut] = useState<boolean>(false);
    async function triggerLogout() {
        setLoggingOut(true);
        try {
            await auth.logout()
        } catch (e) { alert(e) }
        finally {
            setLoggingOut(false)
        }
    }

    return <div className="w-fit md:min-w-[250px] rounded-lg md:rounded-2xl bg-slate-100 h-[calc(100vh-1rem)] md:h-[calc(100vh-2rem)] sticky top-0 z-10 flex flex-col">
        <div className="mt-6 px-4 flex items-center gap-2">
            <NavLink to={'/dashboard'}>
                <img src="/logo.jpeg" alt="" className="w-8 h-8 rounded-full" />
            </NavLink>
            <h3 className="text-3xl sm-hidden">Donezo</h3>
        </div>
        {Object.keys(routes).map((group, index) =>
            <div className="mt-6" key={index}>
                <div className="sm-hidden my-2 px-4 text-theme-subtle uppercase text-sm">{group}</div>
                {routes[group].map((route, index) => <DashboardSidebarItem route={route} key={index} />)}
            </div>
        )}
        <button disabled={loggingOut} onClick={triggerLogout} className="sidebar-route-item px-4 text-theme-subtle text-lg flex items-center gap-3 py-2 transition-all hover:text-theme-hover disabled:bg-theme-subtle">
            {loggingOut ? <Spinner /> : <><BiLogOut size={25} />
                <div className="sm-hidden text-black">Logout</div></>}
        </button>
        <div className="mt-auto px-4 text-white sm-hidden">
            <div className="rounded-lg md:rounded-2xl p-5 bg-[url('/gc1.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="bg-white h-8 w-8 p-2 rounded-full text-black">
                    <SlBadge />
                </div>
                <div className="text-xl">
                    <b>Download</b> our mobile app.
                </div>
                <div className="mt-2">Get easy in another way</div>
                <div className="mt-5 flex">
                    <ThemeButton filled={true} flexGrow={true}>
                        Download
                    </ThemeButton>
                </div>
            </div>
        </div>
    </div>
}