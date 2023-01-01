

import axios from "axios";
import { useEffect, useState } from "react"



export const useFetch = ( url ) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchData = () => {
        axios
            .get(url)
            .then( (response) => {
                setData( response.data );
            } )
            .catch( (err) => {
                setError( err );
            } )
            .finally( () => {
                setLoading( false );
            } )
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [url])
    
  
    return {
        data,
        loading,
        error
  }
}