import React, { useContext, useEffect, useState } from 'react'
import getLocations from '../../../Services/getLocations'
import LocationContext from '../../../Context/LocationContext'

const LocationsList = () => {
    const locationContext = useContext(LocationContext)

    const [locations, setLocations] = useState([])

    useEffect(() => {
        getLocations()
            .then(data => setLocations(data))
            .catch(err => console.log(err))

    }, [])


    return (
        <div className='location-list grid row-gap-3'>
            {[...locations].map((location) => (
                <p key={location} className='location-item flex align-center column-gap-1'><span className="material-symbols-outlined">
                    location_on
                </span>
                    <span onClick={(e) => locationContext.changeLocation(e.target.textContent)} >{location.join(', ')}</span>
                </p>
            ))}
        </div>
    )
}

export default LocationsList