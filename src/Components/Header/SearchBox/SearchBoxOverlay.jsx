import React from 'react'
import If from '../../If'

const SearchBoxOverlay = ({onClick, searchBoxOpened}) => {
    return (
        <If condition={searchBoxOpened === false}>
            <div onClick={onClick} className="searchBoxOverlay"></div>
        </If>
    )
}

export default SearchBoxOverlay