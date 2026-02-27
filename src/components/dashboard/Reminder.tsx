import { BiLogoZoom } from "react-icons/bi";

export default function ReminderBlock() {
    return <div className="w-full p-5 bg-white rounded-lg md:rounded-2xl" >
        <h3 className="text-2xl font-semibold font-medium">Reminders</h3>
        <div className="text-4xl text-theme-primary my-5 font-medium">
            Meeting with As Safa
            <div className="text-theme-subtle text-base">Time: 02:00 pm - 04.00 pm</div>
        </div>
        <button className="rounded-full w-full p-3 text-2xl text-white bg-theme-gradient transition-all hover:bg-theme-hover flex items-center justify-center gap-3">
            <BiLogoZoom size={40} /> Start Meeting
        </button>
    </div >
}