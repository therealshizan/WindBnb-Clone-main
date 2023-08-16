import React, { useState, useLayoutEffect } from 'react'
import { getLocations } from '../../../../Services/getLocations'

const LocationsList = () => {
    const [locations, setLocations] = useState([])
    const [currentLocation, setCurrentLocation] = useState("New Delhi, India")

    useLayoutEffect(() => {
        (async () => {
            const data = await getLocations()
            setLocations(data)
        })()
    }, [])
    return (
        <div id='location-list' className='field-list grid p-2'>

            {[...locations].map(([city, country]) => (
                <div className="location-item flex align-center">
                    <span class="material-symbols-outlined">
                        location_on
                    </span>
                    {city} - {country}
                </div>
            ))}

        </div>
    )
}

export default LocationsList