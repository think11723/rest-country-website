import React from 'react'

export default function Features({ setQuery }) {
  return (
    <div className="features">

      <input
        type="text"
        className="search"
        placeholder="Search for a country..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <select>
        <option value="asia">Asia</option>
        <option value="us">US</option>
        <option value="europe">Europe</option>
        <option value="russia">Russia</option>
        <option value="africa">Africa</option>
      </select>

    </div>
  )
}