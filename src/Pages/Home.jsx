import React, { useEffect, useState } from 'react'
import Features from '../components/Features'
import CountriesContainer from '../components/CountriesContainer'
import Shimmer from '../components/Shimmer'
import { API_URL } from '../utils/constants'

export default function Home() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  async function fetchCountries() {
    try {
      const response = await fetch(API_URL)
      const result = await response.json()
      setData(result)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  const filteredData = data.filter((country) =>
    country.name.common.toLowerCase().includes(query)
  )

  return (
    <>
      <Features setQuery={setQuery} />

      {
        data.length === 0
          ? <Shimmer />
          : <CountriesContainer data={filteredData} />
      }
    </>
  )
}