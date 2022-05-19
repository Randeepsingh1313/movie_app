// export const baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=1cf50e6248dc270629e802686245c2c8&sort_by=popularity.desc'

import React, { useState, useEffect } from "react";
const API_ENDPOINT = 'https://www.omdbapi.com/?apikey=6fbc9265'

const useFetch = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState({ show: false, msg: '' })
    const [data, setData] = useState(null)
    const fetchMovies = async (url) => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        const data = await response.json()
  
        if (data.Response === 'True') {
          setData(data.Search || data)
  
          setError({ show: false, msg: '' })
        } else {
          setError({ show: true, msg: data.Error })
        }
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      fetchMovies(`${API_ENDPOINT}${urlParams}`)
    }, [urlParams])
    return { isLoading, error, data }
  }
  
  export default useFetch
  