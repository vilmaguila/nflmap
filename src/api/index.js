import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'api/',
    timeout: 5000,
})

const third_party = {
    get_nfl_stadiums: () => apiClient.get('https://gist.githubusercontent.com/brianhatchl/59d99872a9cfc0e126211192673991b8/raw/bf706c06ef41f05a35b1bd730639eed54cc7af27/stadiums.json'),
    get_world_countries: () => apiClient.get('https://pkgstore.datahub.io/core/geo-countries/countries/archive/23f420f929e0e09c39d916b8aaa166fb/countries.geojson')

}

export default {
    third_party
}