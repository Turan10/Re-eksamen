import { useState } from 'react'
import './App.css'
import HigherOrderFunction from './Question1/higherOrderFunction/higherOrderFunctions'
import MyNavbar from './Question1/navbar'
import './index.css'
import ProfileForm from './Question2/callback/callback'
import {Flex, Grid} from './Question2/callback/flexbox and grid/flexGrid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PhotoFetcher from './Question4/promise/promise'
import ErrorBoundary from './Question4/errorBoundary'
import SyncAsync from './Question5/syncAsync/syncAsync'
import Conditionalrendering from './Question5/conditionalRendering/conditional'
import StorageExample from './Question6/storage/storage'
import RandomUserComponent from './Question6/useEffect/useEffect'
import EventBubbling from './Question8/eventbubbling/eventbubbling'

function App() {

  const [userProfile, setUserProfile] = useState({
    name: "",
    age: 0,
    email: "",
    bio:"",
    married: false
  })



  const updateProfile = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setUserProfile({
      ...userProfile,
      [e.target.name]: value
    });
  };
 

  return (
    <Router>
      <div>
        <header>
          <MyNavbar />
        </header>

        <h1>Re-eksamen</h1>
        <ErrorBoundary>

        <Routes>
          <Route index path="/" />
          <Route path="/higherorderfunction" element={<HigherOrderFunction />} />
          <Route path="/profile" element={<ProfileForm userProfile={userProfile} updateProfile={updateProfile} />} />
          <Route path="/flex" element={<Flex />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/promise" element={<PhotoFetcher />} />
          <Route path="/syncasync" element={<SyncAsync />} />
          <Route path="/conditionalrendering" element={<Conditionalrendering />} />
          <Route path="/storage" element={<StorageExample />} />
          <Route path="/useeffect" element={<RandomUserComponent />} />
          <Route path="/eventbubbling" element={<EventBubbling />} />

        
        </Routes>

        </ErrorBoundary>

      </div>
    </Router>
  );
}

export default App;
