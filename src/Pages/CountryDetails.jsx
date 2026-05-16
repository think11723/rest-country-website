import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CountryDetails() {

  const { name } = useParams()

  const [countryData, setCountryData] = useState(null)

  async function fetchCountry() {

    try {

      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      )

      const data = await response.json()

      setCountryData(data[0])

    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchCountry()
  }, [])

  if (!countryData) {
    return <h1 style={{
        display:'flex',
        justifyContent:'center',
        textAlign:'center'
    }}>Loading...</h1>
  }

  return (

    <div className='country-details-container'>

      <img
        src={countryData.flags.svg}
        alt={countryData.name.common}
      />

      <div className='details-text'>

        <h1>{countryData.name.common}</h1>

        <p>
          <b>Population:</b> {countryData.population}
        </p>

        <p>
          <b>Region:</b> {countryData.region}
        </p>

        <p>
          <b>Capital:</b> {countryData.capital?.[0]}
        </p>

        <p>
          <b>Sub Region:</b> {countryData.subregion}
        </p>

      </div>

    </div>
  )
}