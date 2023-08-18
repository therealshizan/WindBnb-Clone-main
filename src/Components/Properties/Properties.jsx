import React, { Fragment, useEffect, useState } from 'react'
import getProperties from '../../Services/getProperties'
import Property from './Property'
import { Grid, Box } from '@mui/material'
import '../../Assets/css/properties.css'
import PropertiesHeader from './PropertiesHeader'

const Properties = () => {
    const [properties, setProperties] = useState([])
    useEffect(() => {
        getProperties()
            .then(data => setProperties(data))
            .catch(err => console.log(err))

        console.log(properties)
    }, [])
    return (
        <Box className="property-box" sx={{ width: '100%' }}>

            <PropertiesHeader/>


            <Grid className='properties p-6 pt-3 grid' container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {properties.map((property, index) => (
                    <Fragment key={index}>
                        <Grid className='p-0 porperty-inner' item xs={2} md={4}>
                            <Property propertyImg={property.propertyImg} city={property.propertyCity} country={property.propertyCountry} isSuperHost={property.isSuperHost} propertyName={property.propertyName} propertyRating={property.propertyRating} propertyType={property.propertyType} />
                        </Grid>
                    </Fragment>
                ))}
            </Grid>



        </Box>
    )
}

export default Properties