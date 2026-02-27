import { MdOutlineArrowDropUp, MdOutlineArrowOutward } from "react-icons/md";
import ThemeButton from "../ui/ThemeButton";
import { useMemo } from "react";
import IncrementalNumber from "../ui/IncrementalNumber";

interface CardConfig {
    title: string,
    count: number,
    increase: number,
    fill: boolean,
    onDiscuss: boolean
}

const configs: CardConfig[] = [
    { title: 'Total Projects', count: 24, increase: 5, fill: true, onDiscuss: false },
    { title: 'Ended Projects', count: 12, increase: 6, fill: false, onDiscuss: false },
    { title: 'Running Projects', count: 10, increase: 2, fill: false, onDiscuss: false },
    { title: 'Pending Projects', count: 2, increase: 0, fill: false, onDiscuss: true },
]

function ProjectCard({ config }: { config: CardConfig }) {
    const colors = useMemo(() => config.fill ? 'bg-theme-gradient text-white' : 'bg-white text-black', [config])
    
    return <div className={`w-full md:w-1/4 p-4 rounded-lg md:rounded-2xl hover:shadow hover:scale-[1.01] cursor-pointer transition-all ${colors}`}>
        <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">{config.title}</h3>
            <ThemeButton>
                <span className="text-black">
                    <MdOutlineArrowOutward size={23} />
                </span>
            </ThemeButton>
        </div>
        <div className="text-6xl">
            <IncrementalNumber num={config.count}/>
        </div>
        <div className={`my-1 flex items-center gap-2 text-sm ${config.fill ? 'text-green-500' : 'text-theme-secondary'}`}>
            {config.onDiscuss ?<>On Discuss</>:<><span className={`rounded px-2 border border-theme-secondary flex items-center w-fit p-[1px]`}>
                {config.increase} <MdOutlineArrowDropUp />
            </span>
            Increased from last month</>}
        </div>
    </div>
}

export default function ProjectCardGroup() {
    return <div className="w-full flex flex-col md:flex-row gap-2 md:gap-3">
        {configs.map((config, index) => <ProjectCard config={config} key={index} />)}
    </div>
}