import properties from '../../Data/properties.json'

const getLocations = async ()=>{
    const cityCountryMap = new Map()
    const fetchedProperties = properties
    fetchedProperties.forEach(property => cityCountryMap.set(property.city, property.country))
    return cityCountryMap
}

export {getLocations}