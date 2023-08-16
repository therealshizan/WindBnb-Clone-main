import React from 'react'
import Logo from './Logo'
import '../../Assets/css/header/header.css'
import SearchBox from './SearchBox/SearchBox'


const Header = () => {
  return (
    <div className='flex p-6 pt-3 pb-3' id='header'>
        <Logo/>
        <SearchBox/>
    </div>
  )
}

export default Header