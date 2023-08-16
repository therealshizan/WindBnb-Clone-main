import React from 'react'
import LocationsList from './LocationsList'
import GuestsList from './GuestsList'

import '../../../../Assets/css/header/field-list.css'

const FieldLists = () => {
  return (
    <>
        <LocationsList/>
        <GuestsList/>
        {/* <GuestsList/> */}
    </>
  )
}

export default FieldLists