import { BiPlus } from "react-icons/bi";
import ThemeButton from "../ui/ThemeButton";

interface Project {
    image: string,
    title: string,
    dateline: string
}

const projects: Project[] = [
    { title: 'Develope API Endpoints', image: '/api.png', dateline: '24 Nov, 2025' },
    { title: 'Onboarding Flow', image: '/flow.png', dateline: '24 Nov, 2025' },
    { title: 'Build Dashboard', image: '/dashboard.png', dateline: '24 Nov, 2025' },
    { title: 'Optimize Page Load', image: '/optimize.png', dateline: '24 Nov, 2025' },
    { title: 'Cross Browser Tastig', image: '/cross_browser.png', dateline: '24 Nov, 2025' },
]

function ProjectVCard({ project }: { project: Project }) {
    return <div className="w-full flex items-center gap-2">
        <img className="w-10 h-10" src={project.image} alt="" />
        <div>
            <div className="font-medium text-xl">
                {project.title}
            </div>
            <div className="text-theme-subtle">Due Date {project.dateline}</div>
        </div>
    </div>

}

export default function ProjectList() {
    return <div className="p-5 bg-white rounded-lg md:rounded-2xl">
        <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold font-medium">Project</span>
            <ThemeButton>
                <BiPlus size={20} /> <span className="sm-hidden">New</span>
            </ThemeButton>
        </div>
        <div className="p-2 flex flex-col gap-5 mt-3">
            {projects.map((project, index) => <ProjectVCard project={project} key={index} />)}
        </div>
    </div>
}