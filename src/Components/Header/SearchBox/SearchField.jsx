import React from 'react'

const SearchField = ({className, type, placeholder, value, id, onClick}) => {
  return <input className={className} onChange={()=> console.log()} value={value} type={type} placeholder={placeholder} id={id} onClick={onClick ? onClick : null}/>
}

export default SearchField