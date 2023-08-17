import React from 'react'
import Home from './Pages/Home'
import './App.css'
import LocationContext from './Context/LocationContext'


const App = () => {
  return (
    <LocationContext.Provider value={{ location: 'Helsinki, Finland', noOfGuests: 0 }}>
      <Home />
    </LocationContext.Provider>
  )
}

export default App