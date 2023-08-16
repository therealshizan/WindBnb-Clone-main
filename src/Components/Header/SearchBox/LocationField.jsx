import React, {useState, useLayoutEffect} from 'react'
import If from '../../If'

const LocationField = ({ label, onClick }) => {

    return (
        <>
            <div onClick={onClick} className="search-box-col location-field search-field grid p-2 align-center">
                <If condition={label === "visible"}>
                    <span id='custom-label'>Location</span>
                </If>
                {"currentLocation"}
            </div>
        </>
    )
}

export default LocationField