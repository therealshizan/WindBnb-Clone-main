import React from 'react'

const SearchField = ({className, type, placeholder, value, id, onClick}) => {
  return <input className={className} value={value} type={type} placeholder={placeholder} id={id} onClick={onClick}/>
}

export default SearchField