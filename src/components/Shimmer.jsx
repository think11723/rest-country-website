import React from 'react'

export default function Shimmer() {
  return (
    <div>

      <div className="features">
        <div className="shimmer-search shimmer-effect"></div>
        <div className="shimmer-select shimmer-effect"></div>
      </div>

      <div className="shimmer-container">

        {
          Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="shimmer-card">

              <div className="shimmer-image shimmer-effect"></div>

              <div className="shimmer-content">
                <div className="shimmer-title shimmer-effect"></div>

                <div className="shimmer-text shimmer-effect"></div>

                <div className="shimmer-text small shimmer-effect"></div>

                <div className="shimmer-text extra-small shimmer-effect"></div>
              </div>

            </div>
          ))
        }

      </div>

    </div>
  )
}