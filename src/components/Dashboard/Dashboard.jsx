import React from "react";
import '../../index.css'
import Card from "../Card/Card";

const Dashboard = () => {
    return(
        <div>
            {/* SideBar */}
            <div class="flex">
                <div class="ml-2 md:basis-1 lg:basis-1/3">
                    <Card/>
                    <Card/>
                </div>
                <div class="">
                    {/* <Entry/> */}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;