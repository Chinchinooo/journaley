import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import { diaries as initialDiaries } from "./diaries.js";

function App() {
  const [diaries, setDiaries] = useState(initialDiaries);
  const [selectedDiary, setSelectedDiary] = useState(
    initialDiaries[initialDiaries.length - 1]);
  const [isEditable, setIsEditable] = useState(false);
  const [isCreateCardVisible, setCreateCardVisible] = useState(false);
  const [searchBox, setSearchBox] = useState('');
  const [filteredDiary, setFilteredDiary] = useState([]);


  useEffect(() => {
    if (searchBox.trim() === '') {
      setFilteredDiary(diaries);
    } else {
      const filteredCard = diaries.filter(diary => {
        return diary.title.toLocaleLowerCase().includes(searchBox.toLowerCase());
      });

      setFilteredDiary(filteredCard)
      console.log(filteredCard);

      if (filteredCard.length === 0) {
        console.log("No results found")
      }
    }
  }, [searchBox, diaries]);


  const onSearchChange = (event) => {
    const searchInput = event.target.value;
    setSearchBox(searchInput);
  }

  const handleCreateCardVisible = (click) => {
    click.stopPropagation();
    setCreateCardVisible((prev) => true);
  }

  const handleCreateCardNotVisible = (click) => {
    click.stopPropagation();
    setCreateCardVisible((prev) => false);
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

  const generateNextId = () => {
    if (diaries.length === 0) return 1; 
    const existingIds = diaries.map(diary => diary.id);
    return Math.max(...existingIds) + 1;
  };

  const handleSaveDiary = (newDiary) => {
    const newDiaryWithId = { ...newDiary, id: generateNextId() };
    setDiaries((prevDiaries) => {
        const newestDiary = [...prevDiaries, newDiaryWithId]
        console.log(newestDiary);
        setSelectedDiary(newestDiary[newestDiary.length - 1]);
        return newestDiary
    });
  };


  return (
    <div className="App">
      <Navigation
        isCreateCardVisible={isCreateCardVisible}
        handleCreateCardVisible={handleCreateCardVisible}
        handleCreateCardNotVisible={handleCreateCardNotVisible}
        handleSaveDiary={handleSaveDiary}
        onSearchChange={onSearchChange}
        filteredDiary={filteredDiary}
      />

      <Dashboard
        diaries={diaries}
        selectedDiary={selectedDiary}
        handleToggleEdit={handleToggleEdit}
        onViewButton={onViewButton}
        handleDelete={handleDelete}
        isEditable={isEditable}
        onSearchChange={onSearchChange}
        filteredDiary={filteredDiary}/>
      
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
  Done
    Edit Diary
    -active - edit card through entry
  Done
    Time and location
    -show time and location after save

Done 
  Create button 
    - pop add new entry with emotion/title/date/location/image
    - add new card
    - add image/emotion/text
    - save button

done -add a "x" on the createcard so it turns isCreateCardVisible to false and maybe use stop propagation()
for the click to be activated on anywhere of the screen.
done -add in the save function createnewdiary

done -need to see how to dix where entry show latest if save diaries is updated

-need to add where click save diary, the create new card will turn false
-need to be the entry to be on edited mode automatically
-fix id
-edit doesnt update the content
done -search bar
-the date is not shown in the entry


issue:
-title, emotion, all edited did not updated the data

Priority
done -id
postpone(temporarily removed the x button)
  - x button in searchbox
done -date is not shown in entry after save and view diary
-title (max width)
-add format for date
-save diary, the createnewcard close automatically
-fix the data / backend
-log in/logout

*/

