import React, { useState } from 'react'
import SearchField from './SearchField'
import '../../../Assets/css/header/searchbox.css'
import { Box } from '@mui/material'

const SearchBox = () => {
    const [expand, setExpand] = useState(false)

    const handleExpand = ()=> setExpand(!expand)

    return (
        <Box className={expand && `expanded-search-box`}>
            <form id="search-box" className={`flex ${expand && 'p-6'}`}>
                <SearchField onClick={handleExpand} className={"form-col"} type={"text"} placeholder={"Select Location"} id={"loaction-field"} />
                <SearchField onClick={handleExpand} className={"form-col"} type={"text"} placeholder={"Add guests"} id={"guest-field"} />

                <div className="searchBtn flex align-center form-col justify-center">
                    <span className='search-btn-main-span flex align-center'>
                    <span class="material-symbols-outlined">search</span>
                    {expand &&
                        <SearchField type={"submit"} value={"Search"} id={"search-btn"} />
                    }
                    </span>
                </div>
            </form>
        </Box>
    )
}

export default SearchBox