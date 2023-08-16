import React, { useState } from 'react'

const GuestsCounter = ({guestTitle, guestSubtitle}) => {
    const [guestCount, setGuestCount] = useState(0)

    const addGuests = ()=>{
        setGuestCount(prev => prev + 1)
    }

    const minusGuests = ()=>{
        setGuestCount(prev => prev - 1)
    }
  return (
    <div id='guest-counter'>
        <p><strong>{guestTitle}</strong></p>
        <p>{guestSubtitle}</p>
        <div className="counter">
            <span onClick={minusGuests} className="minus-btn">-</span>
            {guestCount}
            <span onClick={addGuests} className="plus-btn">+</span>
        </div>
    </div>
  )
}

export default GuestsCounter