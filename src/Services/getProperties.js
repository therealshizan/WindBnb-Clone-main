import properties from '../../Data/properties.json'

const getProperties = async ()=>{
    const fetchedProperties = await properties
    return fetchedProperties
}

export default getProperties