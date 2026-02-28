import { BiDownload, BiPlus } from "react-icons/bi";
import ReminderBlock from "../components/dashboard/Reminder";
import TeamCollaboration from "../components/dashboard/Collaboration";
import ThemeButton from "../components/ui/ThemeButton";
import TimeTracker from "../components/dashboard/TimeTracker";
import ProductProgress from "../components/dashboard/ProductProgress";
import ProductList from "../components/dashboard/ProductList";
import ProductAnalytics from "../components/dashboard/ProductAnalytics";
import { useDashboard } from "../stores/dashboard";
import Overview from "../components/dashboard/Overview";
import { useEffect } from "react";
import { BarsSkeleton, CardsGroupSkeleton, ListSkeleton, SemiCircleProgressSkeleton } from "../components/ui/Skeletons";

export default function DashboardPage() {
    const {products, overview, analytics, users, fetchDashboard, loading} = useDashboard();

    useEffect(()=>{
        fetchDashboard()
    },[])

    return (
        <div className="w-full flex flex-col gap-2 md:gap-4">
            <div className="flex items-center gap-1 md:gap-3">
                <div>
                    <h3 className="text-3xl md:text-5xl font-medium">Dashboard</h3>
                    <p className="my-1 text-theme-subtle">Plan, prioritize and acomplish your tasks with ease.</p>
                </div>
                <div className="ms-auto"></div>
                <ThemeButton filled={true}>
                    <BiPlus size={20} /> <span className="sm-hidden">Add Product</span>
                </ThemeButton>
                <ThemeButton>
                    <BiDownload className="md-hidden" size={20} /> <span className="sm-hidden">Import Product</span>
                </ThemeButton>
            </div>
            {(overview === null) ? <CardsGroupSkeleton/> : <Overview overview={overview} />}
            <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4">
                <div className="w-full md:w-3/4 flex flex-col gap-2 md:gap-4">
                    <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4">
                        <div className="w-full md:w-2/3">
                            {(analytics.length === 0 && loading) ? <BarsSkeleton/> : <ProductAnalytics analytics={analytics}/>}
                        </div>
                        <div className="w-full md:w-1/3">
                            <ReminderBlock />
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4">
                        <div className="w-full md:w-3/5">
                            {(users.length === 0 && loading) ? <ListSkeleton/> : <TeamCollaboration users={users}/>}
                        </div>
                        <div className="w-full md:w-2/5">
                            {(analytics.length === 0 && loading) ? <SemiCircleProgressSkeleton/> : <ProductProgress analytics={analytics}/>}
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/4 flex flex-col gap-2 md:gap-4">
                    {(products.length === 0 && loading) ? <ListSkeleton/> : <ProductList products={products}/>}
                    <TimeTracker/>
                </div>
            </div>
        </div>
    )
}