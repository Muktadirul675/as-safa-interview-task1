import { BiDownload, BiPlus } from "react-icons/bi";
import ProjectCardGroup from "../components/dashboard/ProjectCardGroup";
import ProjectList from "../components/dashboard/ProjectList";
import ProjectAnalytics from "../components/dashboard/ProjectAnalytics";
import ReminderBlock from "../components/dashboard/Reminder";
import TeamCollaboration from "../components/dashboard/Collaboration";
import ProjectProgress from "../components/dashboard/ProjectProgress";
import ThemeButton from "../components/ui/ThemeButton";
import TimeTracker from "../components/dashboard/TimeTracker";

export default function DashboardPage() {
    return (
        <div className="w-full flex flex-col gap-2 md:gap-4">
            <div className="flex items-center gap-1 md:gap-3">
                <div>
                    <h3 className="text-3xl md:text-5xl font-medium">Dashboard</h3>
                    <p className="my-1 text-theme-subtle">Plan, prioritize and acomplish your tasks with ease.</p>
                </div>
                <div className="ms-auto"></div>
                <ThemeButton filled={true}>
                    <BiPlus size={20} /> <span className="sm-hidden">Add Project</span>
                </ThemeButton>
                <ThemeButton>
                    <BiDownload className="md-hidden" size={20} /> <span className="sm-hidden">Import Project</span>
                </ThemeButton>
            </div>
            <ProjectCardGroup />
            <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4">
                <div className="w-full md:w-3/4 flex flex-col gap-2 md:gap-4">
                    <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4">
                        <div className="w-full md:w-2/3">
                            <ProjectAnalytics />
                        </div>
                        <div className="w-full md:w-1/3">
                            <ReminderBlock />
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4">
                        <div className="w-full md:w-3/5">
                            <TeamCollaboration/>
                        </div>
                        <div className="w-full md:w-2/5">
                            <ProjectProgress/>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/4 flex flex-col gap-2 md:gap-4">
                    <ProjectList />
                    <TimeTracker/>
                </div>
            </div>
        </div>
    )
}