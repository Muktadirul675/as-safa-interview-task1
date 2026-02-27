import { BiPlus } from "react-icons/bi";
import StatusBadge from "../ui/Badge";
import ThemeButton from "../ui/ThemeButton";

type Status = "Working" | "In Progress" | "Hold" | "Completed" | "Failed"

interface Member {
    name: string
    image: string
    work: string
    status: Status
}

const members: Member[] = [
    { name: 'Alexandra Deff', work: 'Github Project Repo', status: 'Completed', image: '/face1.png' },
    { name: 'Adanik Edwin', work: 'Integrate Auth System', status: 'Failed', image: '/face2.png' },
    { name: 'Issas Oluwatte', work: 'Develope Search and Filter Functionality', status: 'In Progress', image: '/face3.png' },
    { name: 'David Oshodi', work: 'Responsive Homepage Layout', status: 'Working', image: '/face4.png' },
]

function MemberCard({ member }: { member: Member }) {
    return <div className="w-full flex items-center gap-2">
        <div className="bg-pink-300 p-2 rounded-full">
            <img src={member.image} alt="" className="w-7 md:w-10 aspect-square" />
        </div>
        <div className="flex-grow">
            {member.name} <br />
            <div className="flex flex-col md:flex-row text-sm md:text-base md:items-center justify-between">
                <div className="text-theme-subtle">
                    Working on <span className="font-semibold text-black">{member.work}</span>
                </div>
                <div className="sm-hidden">
                    <StatusBadge status={member.status} />
                </div>
                <div className="md-hidden">
                    <StatusBadge size="sm" status={member.status} />
                </div>
            </div>
        </div>
    </div>
}

export default function TeamCollaboration() {
    return <div className="p-5 rounded-lg md:rounded-xl bg-white">
        <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold font-medium">Team Collaboration</span>
            <ThemeButton>
                <BiPlus size={20} /> <span className="sm-hidden">Add Member</span>
            </ThemeButton>
        </div>
        <div className="flex flex-col gap-4">
            {members.map((member, index) => <MemberCard key={index} member={member} />)}
        </div>
    </div>
}