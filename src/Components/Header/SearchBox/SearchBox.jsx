// SearchBox.js
import React, { useContext, useEffect, useState } from 'react';
import SearchField from './SearchField';
import '../../../Assets/css/header/searchbox.css';
import { Box, Grid } from '@mui/material';
import LocationsList from './LocationsList';
import GuestCounter from './GuestCounter';
import LocationContext from '../../../Context/LocationContext';

const SearchBox = () => {
    const locationContext = useContext(LocationContext)

    const [expand, setExpand] = useState(false);

    const handleExpand = () => setExpand(!expand);

    const closeExpand = () => setExpand(false);

    return (
        <Box className={expand ? 'expanded-search-box' : ''}>
            <form id="search-box" className={`flex ${expand ? 'm-6' : ''}`}>
                <SearchField
                    onClick={!expand && handleExpand}
                    className={'form-col'}
                    value={locationContext.location}
                    type={'text'}
                    placeholder={'Select Location'}
                    id={'loaction-field'}
                />
                <SearchField
                    onClick={!expand && handleExpand}
                    className={'form-col'}
                    type={'text'}
                    placeholder={'Add guests'}
                    id={'guest-field'}
                />

                <div className="searchBtn flex align-center form-col justify-center">
                    <span onClick={closeExpand} className="search-btn-main-span flex align-center">
                        <span className="material-symbols-outlined">search</span>
                        {expand && <SearchField type={'submit'} value={'Search'} id={'search-btn'} />}
                    </span>
                </div>
            </form>

            <Grid className="p-6 pt-0 " container spacing={2}>
                <Grid item xs={4}>
                    <LocationsList />
                </Grid>
                <Grid className="grid row-gap-5" item xs={4}>
                    <GuestCounter title={'Adults'} desc={'Ages 13 or above'} />
                    <GuestCounter title={'Children'} desc={'Ages 2-12'} />
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </Box>
        
    );
};

export default SearchBox;
