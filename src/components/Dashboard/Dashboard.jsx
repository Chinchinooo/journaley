import React, { useState } from "react";
import Entry from "../Entry/Entry";
import CardEntry from "../CardEntry/CardEntry";

function Dashboard({
    diaries,
    selectedDiary,
    isEditable,
    handleToggleEdit,
    onViewButton,
    handleDelete,
}) {

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
