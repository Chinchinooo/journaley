import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import { diaries as initialDiaries } from "./diaries.js";

function App() {
  const [diaries, setDiaries] = useState(initialDiaries);
  const [selectedDiary, setSelectedDiary] = useState(
    initialDiaries[initialDiaries.length - 1]
    );
  const [isEditable, setIsEditable] = useState(false);
  const [isCreateCardVisible, setCreateCardVisible] = useState(false);

  const handletoggleCreateCardVisibility = () => {
    console.log("visibility clicked");
    setCreateCardVisible((prev) => !prev);
  }

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

  const handleCreateNewDiary = (newDiary) => {
    setDiaries((prevDiaries) => {
        return [...prevDiaries, newDiary]
    });
  };


  return (
    <div className="App">
      <Navigation
      isCreateCardVisible={isCreateCardVisible}
      handletoggleCreateCardVisibility={handletoggleCreateCardVisibility}
      handleCreateNewDiary={handleCreateNewDiary}/>
      <Dashboard
        diaries={diaries}
        selectedDiary={selectedDiary}
        handleToggleEdit={handleToggleEdit}
        onViewButton={onViewButton}
        handleDelete={handleDelete}
        isEditable={isEditable}/>
      
    </div>
  );
}

export default App;

/* 
Nav
  Create button
    - add new card
    - add image/emotion/text
    - save button
  Home button
    - redirect to dashboard
  Calendar button
    - track on calendar whether entry been made with emoji (can see the emoji)
    - select on the date can show the entry (next step)

Card
  Done (View Diary
    - active - card === entry)
  Done (Delete Button
    -delete the card)
  Edit Diary
    -active - edit card through entry
  Time and location
    -show time and location after save

Do 
  Create button
    - pop add new entry with emotion/title/date/location/image
    - add new card
    - add image/emotion/text
    - save button

-add a "x" on the createcard so it turns isCreateCardVisible to false and maybe use stop propagation()
for the click to be activated on anywhere of the screen.
-add in the save function createnewdiary
*/
