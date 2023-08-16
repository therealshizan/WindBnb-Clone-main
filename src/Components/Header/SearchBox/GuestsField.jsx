import React from 'react'
import If from '../../If'

const GuestsField = ({onClick, label, noOfGuests}) => {
    return (
        <div onClick={onClick} className="search-box-col guests-field search-field grid p-2 align-center">
            <If condition={label === "visible"}>
                <span id='custom-label'>Guests</span>
            </If>
            {noOfGuests}
        </div>
    )
}

export default GuestsField