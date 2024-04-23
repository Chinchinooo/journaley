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

    handleDelete = (diaryToDelete) => {
        this.setState(
            (prevState) => ({
                diaries: prevState.diaries.filter((diary) => diary.id !== diaryToDelete.id),
            }),
            () => {
                const {diaries, selectedDiary} = this.state;

                if (diaryToDelete.id === selectedDiary.id) {
                    const newSelectedDiary = diaries.length > 0
                        ? diaries[diaries.length-1]
                        : null;

                this.setState({ selectedDiary: newSelectedDiary});
                }
            }
        );
    };
    

    renderCardEntries = () => {
        const {diaries} = this.state;
        return diaries.map((diary) => (
        <CardEntry 
        key={diary.id} 
        diary={diary}
        onViewButton={() => this.onViewButton(diary)}
        handleDelete={() => this.handleDelete(diary)}/> 
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