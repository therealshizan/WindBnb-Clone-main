import { Box, Container } from '@mui/material'
import React, { useState } from 'react'

const GuestCounter = ({ title, desc }) => {
    const [count, setCount] = useState(0)

    const decrement = ()=> setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0)
    const increment = ()=> setCount(prevCount => prevCount + 1)

    return (
        <Container className='counter-container grid p-0'>
            <Box>{title}</Box>
            <Box>{desc}</Box>
            <Box className="mt-1 flex column-gap-1 align-center ">
                <span onClick={decrement} className='guest-counter-btn bordered '>-</span>
                {count}
                <span onClick={increment} className='guest-counter-btn bordered'>+</span>
            </Box>
        </Container>
    )
}

export default GuestCounter