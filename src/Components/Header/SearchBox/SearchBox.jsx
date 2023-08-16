import React, { useLayoutEffect, useState } from 'react'
import '../../../Assets/css/header/searchbox.css'
import LocationField from './LocationField'
import GuestsField from './GuestsField'
import SearchBtn from './SearchBtn'
import SearchBoxOverlay from './SearchBoxOverlay'
import FieldLists from './FieldLists/FieldLists'

const SearchBox = () => {
  const [noOfGuests, setNoOfGuests] = useState("Add Guests")
  const [searchBoxOpened, setSearchBoxOpened] = useState(false)


  const openSearchBox = ()=> setSearchBoxOpened(searchBoxOpened ? false : true)
  
  const handleSearch = ()=> searchBoxOpened && setSearchBoxOpened(!searchBoxOpened)


  return (
    <>
    <SearchBoxOverlay onClick={openSearchBox} searchBoxOpened={searchBoxOpened} />
    <div id='search-box' className={searchBoxOpened ? 'opened-search-box' : ""}>
      <div className="search-box-row flex align-stretch">
        {/* Location Field */}
        <LocationField onClick={!searchBoxOpened ? openSearchBox : null} label={!searchBoxOpened ? "visible" : null} />

        {/* Guest Field */}
        <GuestsField onClick={!searchBoxOpened ? openSearchBox : null} label={!searchBoxOpened ? "visible" : null} noOfGuests={noOfGuests}/>

        {/* Search Button */}
        <SearchBtn onClick={handleSearch} searchBoxOpened={searchBoxOpened}/>
      </div>


      <div className="search-box-row align-stretch justify-between field-list-row">
        <FieldLists/>
      </div>
    </div>
    </>
  )
}

export default SearchBox