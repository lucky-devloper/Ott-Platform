import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

const fetchData = (endpoint, params) => {
    const [Response, setResponse] = useState(null)
    const [error, seterror] = useState(null)
    useEffect(() => {
        const fetchingDataFromApi = async () => {
            try {
                const response = await axios.get(BASE_URL + endpoint + '?api_key=423801dedaa5350fb56e70d482474185', { headers, params })
                setResponse(response)

            } catch (error) {
                seterror(error)
            }
        }
        if (endpoint) {
            fetchingDataFromApi()
        }
    }, [endpoint, params])

    return { Response, error }
}

export default fetchData