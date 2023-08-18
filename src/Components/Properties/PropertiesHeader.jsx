import React, { useContext, useEffect, useState } from 'react'
import LocationContext from '../../Context/LocationContext'

const PropertiesHeader = () => {
    const locationContext = useContext(LocationContext)
    
    return (
        <div className="properties-header flex justify-between p-6 pb-0 align-center">
            <div className="stays-in-location">Stays in {locationContext.location}</div>
            <div className="no-of-stays">12+ stays</div>
        </div>
    )
}

export default PropertiesHeader