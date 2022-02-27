import './App.css';
import MeetupsFeed from './pages/MeetupsFeed';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<MeetupsFeed />} />
        <Route path='/new' element={<NewMeetup />} />
        <Route path='/favs' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
