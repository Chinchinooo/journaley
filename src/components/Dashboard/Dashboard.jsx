import React, { Component } from "react";
import Entry from "../Entry/Entry";
import CardEntry from "../CardEntry/CardEntry";
import {diaries} from "../../diaries";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            diaries: diaries,
            selectedDiary: diaries[diaries.length-1]
        }
    }

    onViewButton = (diary) => {
        this.setState({selectedDiary: diary})
    }

    renderCardEntries = () => {
        const {diaries} = this.state;
        return diaries.map((diary) => (
        <CardEntry 
        onViewButton={() => this.onViewButton(diary)}
        key={diary.id} 
        diary={diary}/> 
        ));
    }
   
    render() {
        const {selectedDiary} = this.state;
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
                        id={selectedDiary.id}
                        emotion={selectedDiary.emotion}
                        title={selectedDiary.title}
                        time={selectedDiary.time}
                        location={selectedDiary.location}
                        content={selectedDiary.content}
                        /> 
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Dashboard;