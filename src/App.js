import React, { useEffect } from 'react'

const API_URL = "http://www.omdbapi.com?apikey=7d0bc5e0"
const App = () => {

  const fetchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search)
  }
  useEffect(() => {
    fetchMovies("Batman")
  }, [])
  return (
    <>
      
    </>
  )
}

export default App
