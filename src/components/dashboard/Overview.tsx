import { useMemo } from "react";
import { MdOutlineArrowDropUp, MdOutlineArrowOutward } from "react-icons/md";
import IncrementalNumber from "../ui/IncrementalNumber";
import ThemeButton from "../ui/ThemeButton";

function OverviewCard({ title, count, increase = null }: { title: string, count: number, increase: string | null }) {
    const fill = useMemo<boolean>(() => title === 'Total Users' ? true : false, [])
    const colors = useMemo<String>(() => fill ? 'bg-theme-gradient text-white' : 'bg-white text-black', [title]);

    return <div className={`w-full md:w-1/4 p-4 rounded-lg md:rounded-2xl hover:shadow hover:scale-[1.01] cursor-pointer transition-all ${colors}`}>
        <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <ThemeButton>
                <span className="text-black">
                    <MdOutlineArrowOutward size={23} />
                </span>
            </ThemeButton>
        </div>
        <div className="text-6xl">
            <IncrementalNumber num={count} />
        </div>
        {increase !== null && <div className={`my-1 flex items-center gap-2 text-sm ${fill ? 'text-green-500' : 'text-theme-secondary'}`}>
            <span className={`rounded px-2 border border-theme-secondary flex items-center w-fit p-[1px]`}>
                {increase} <MdOutlineArrowDropUp />
            </span>
            Increased from last month
        </div>}
    </div>
}

const titleMap: Record<string, string> = {
    'totalUsers': 'Total Users',
    'activeUsers': 'Active Users',
    'revenue': 'Revenue',
    'growth': 'Growth',
}

export default function Overview({ overview }: { overview: Overview }) {
    return <div className="w-full flex flex-col md:flex-row gap-2 md:gap-3">
        {(Object.keys(overview) as (keyof Overview)[]).map((key, index) => (
            <OverviewCard key={index} title={titleMap[key]} count={overview[key]} increase={key === 'growth' ? '20% ' : key === 'revenue' ? '10 ' : null }/>
        ))}
    </div>
}