import React from 'react'
import If from '../../If'

const SearchBtn = ({searchBoxOpened, onClick}) => {
  return (
    <div className="search-box-col search-btn grid p-2 pt-0 pb-0 align-center">
          <span onClick={onClick} className='search-span'>
          <span className="material-symbols-outlined">search</span>
          <If condition={!searchBoxOpened}>
          <span>Search</span>
          </If>
          </span>
        </div>
  )
}

export default SearchBtn