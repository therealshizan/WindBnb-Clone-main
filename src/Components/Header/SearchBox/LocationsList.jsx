import React, { useEffect, useState } from 'react'
import getLocations from '../../../Services/getLocations'

const LocationsList = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        getLocations()
            .then(data => setLocations(data))
            .catch(err => console.log(err))

    }, [])
    return (
        <div className='location-list grid row-gap-3'>
            {[...locations].map((location) => <p key={location} className='flex align-center column-gap-1'><span className="material-symbols-outlined">
                location_on
            </span>{location.join(', ')}</p>)}
        </div>
    )
}

export default LocationsList