import React, { Component } from "react";
import Entry from "../Entry/Entry";
import CardEntry from "../CardEntry/CardEntry";
import {diaries} from "../../diaries";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            diaries: diaries,
            entryState: ''
        }
    }

    renderCardEntries() {
        const {diaries} = this.state;
        return diaries.map((user, i) => (
        <CardEntry key={user} id={diaries[i].id} emotion={diaries[i].emotion} title={diaries[i].title} time={diaries[i].time} location={diaries[i].location}/> 
        ))
    }
   
    render() {
        return(
        <div>
            {/* SideBar */}
            <div class="flex">
                <div class="ml-2 md:basis-1 lg:basis-1/3 overflow-y-auto h-screen">
                   {this.renderCardEntries()}
                </div>
                <div class="lg:basis-2/3">
                    <div class="hidden lg:block">
                        <Entry
                        id={this.state.diaries[0].id}
                        emotion={this.state.diaries[0].emotion}
                        title={this.state.diaries[0].title}
                        time={this.state.diaries[0].time}
                        location={this.state.diaries[0].location}
                        content={this.state.diaries[0].content}/>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Dashboard;