import { BiPlus } from "react-icons/bi";
import StatusBadge from "../ui/Badge";
import ThemeButton from "../ui/ThemeButton";

type Status = "Working" | "In Progress" | "Hold" | "Completed" | "Failed";

interface Member extends User {
    image: string;
    work: string;
    status: Status;
}

const workList = [
    "Github Product Repo",
    "Integrate Auth System",
    "Develop Search and Filter Functionality",
    "Responsive Homepage Layout",
    "UI/UX Redesign",
    "Optimize API Endpoints",
];

const imageList = ["/face1.png", "/face2.png", "/face3.png", "/face4.png", "/man.png"];

const statusList: Status[] = ["Completed", "Failed", "In Progress", "Working", "Hold"];

function MemberCard({ member }: { member: Member }) {
    return (
        <div className="w-full flex items-center gap-2">
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
    );
}

export default function TeamCollaboration({ users }: { users: User[] }) {
    // Convert users to members dynamically
    const members: Member[] = users.map((user, index) => ({
        ...user,
        work: workList[index % workList.length],
        image: imageList[index % imageList.length],
        status: statusList[index % statusList.length],
    }));

    return (
        <div className="p-5 rounded-lg md:rounded-xl bg-white">
            <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold font-medium">Team Collaboration</span>
                <ThemeButton>
                    <BiPlus size={20} /> <span className="sm-hidden">Add Member</span>
                </ThemeButton>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                {members.map((member, index) => (
                    <MemberCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
}