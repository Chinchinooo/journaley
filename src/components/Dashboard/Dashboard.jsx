import React from "react";
import Card from "../Card/Card";
import Entry from "../Entry/Entry";

const Dashboard = () => {
    return(
        <div>
            {/* SideBar */}
            <div class="flex">
                <div class="ml-2 md:basis-1 lg:basis-1/3">
                    <Card/>
                    <Card/>
                    <Card/>
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