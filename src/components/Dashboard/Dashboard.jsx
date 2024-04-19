import React from "react";
import Entry from "../Entry/Entry";
import CardEntry from "../CardEntry/CardEntry";

const Dashboard = () => {
    return(
        <div>
            {/* SideBar */}
            <div class="flex">
                <div class="ml-2 md:basis-1 lg:basis-1/3 overflow-y-auto h-screen">
                    <CardEntry/>
                    <CardEntry/>
                    <CardEntry/>
                    <CardEntry/>
                </div>
                <div class="lg:basis-2/3">
                    <div class="hidden lg:block">
                        <Entry/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;