import React from 'react'
import GuestsCounter from './GuestsCounter'

const GuestsList = () => {
  return (
    <div id='guest-list' className='p-2'>
        <GuestsCounter guestTitle={"Adults"} guestSubtitle={"Ages 13 or above"} />
        <GuestsCounter guestTitle={"Children"} guestSubtitle={"Ages 2-12"}/>
    </div>
  )
}

export default GuestsList