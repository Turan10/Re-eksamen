import { useState } from 'react'
import './App.css'
import HigherOrderFunction from './Question1/higherOrderFunctions'
import Navbar from './Question1/navbar'
import './index.css'
import ProfileForm from './Question2/callback/callback'
import {Flex, Grid} from './Question2/callback/flexbox and grid/flexGrid'

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

    
    <div>
    <header>
      <Navbar />
    </header>

     <h1>Re-eksamen</h1>

      

      <HigherOrderFunction />
      <ProfileForm userProfile={userProfile} updateProfile={updateProfile} />

      <Flex />
      <Grid />


    </div>
  )
}

export default App
