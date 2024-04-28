import React, { useState } from "react";
import Entry from "../Entry/Entry";
import CardEntry from "../CardEntry/CardEntry";
import { diaries as initialDiaries } from "../../diaries";

function Dashboard() {

  const [diaries, setDiaries] = useState(initialDiaries);
  const [selectedDiary, setSelectedDiary] = useState(
    initialDiaries[initialDiaries.length - 1]
  );
  const [isEditable, setIsEditable] = useState(false);

  const handleToggleEdit = () => {
    setIsEditable((prev) => !prev);
  };

  const onViewButton = (diary) => {
    setSelectedDiary(diary);
  };

  const handleDelete = (diaryToDelete) => {
    setDiaries((prevDiaries) => {
      const updatedDiaries = prevDiaries.filter(
        (diary) => diary.id !== diaryToDelete.id
      );
      if (diaryToDelete.id === selectedDiary.id) {
        const newSelectedDiary = updatedDiaries.length > 0
          ? updatedDiaries[updatedDiaries.length - 1]
          : null;
        setSelectedDiary(newSelectedDiary);
      }
      return updatedDiaries;
    });
  };

  const renderCardEntries = () => {
    return diaries.map((diary) => (
      <CardEntry
        key={diary.id}
        diary={diary}
        onViewButton={() => onViewButton(diary)}
        handleDelete={() => handleDelete(diary)}
      />
    ));
  };

  return (
    <div>
      <div className="flex">
         {/* SideBar */}
        <div className="ml-2 md:basis-1 lg:basis-1/3 overflow-y-auto pr-2 h-screen">
          {renderCardEntries()}
        </div>
        {/* Content */}
        <div className="lg:basis-2/3">
          <div className="hidden lg:block">
            <Entry
              selectedDiary={selectedDiary}
              handleToggleEdit={handleToggleEdit}
              isEditable={isEditable}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
