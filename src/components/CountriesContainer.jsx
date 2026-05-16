import React from 'react'
import CountryCard from './CountryCard'

export default function CountriesContainer({ data }) {
  return (
    <div className="countries-container">

      {
        data.map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        ))
      }

    </div>
  )
}