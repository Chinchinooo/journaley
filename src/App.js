import './App.css';
import Navigation from './components/Navigation/Navigation.jsx';
import Card from './components/Card/Card.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Dashboard/>
      
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
  View Diary
    - active - card === entry
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
*/