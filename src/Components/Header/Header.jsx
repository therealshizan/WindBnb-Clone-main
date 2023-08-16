import React from 'react'
import Logo from './Logo'
import SearchBox from './SearchBox/SearchBox'
import '../../Assets/css/header/header.css'


const Header = () => {
  return (
    <div className='flex p-6 pt-3 pb-3' id='header'>
        <Logo/>
        <SearchBox/>
    </div>
  )
}

export default Header