import React from "react";
import Entry from "../Entry/Entry";
import CardEntry from "../CardEntry/CardEntry";

const Dashboard = ({api}) => {
    const CardEntryLoop = api.map((user, i) => {
        return <CardEntry key={user} id={api[i].id} emotion={api[i].emotion} title={api[i].title} time={api[i].time} location={api[i].location}/>
    })
    return(
        <div>
            {/* SideBar */}
            <div class="flex">
                <div class="ml-2 md:basis-1 lg:basis-1/3 overflow-y-auto h-screen">
                   {CardEntryLoop}
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