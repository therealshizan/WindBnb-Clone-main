import React, { useState } from 'react'
import Home from './Pages/Home'
import './App.css'
import LocationContext from './Context/LocationContext'


const App = () => {
  const [location, setLocation] = useState("New Delhi, Mumbai")
  const changeLocation = (location)=> setLocation(location)
  const [noOfGuests, setNoOfGuests] = useState(0)
  const countTotalGuests = (num)=> setNoOfGuests(num)

  return (
    <LocationContext.Provider value={{ location: location, changeLocation: changeLocation, noOfGuests: noOfGuests, countTotalGuests: countTotalGuests }}>
      <Home />
    </LocationContext.Provider>
  )
}

export default App