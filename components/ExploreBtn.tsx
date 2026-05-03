import React from 'react'
import Image from 'next/image'
import arrowImage from '../public/icons/arrow-down.svg'

const ExploreBtn = () => {
  return (
    <button
      className="mt-7 mx-auto flex items-center justify-center"
      type="button"
      id="explore-btn"
      title="Explore"
    >
      <a href="#events" className="flex items-center gap-2 text-white">
        Explore Events

        <Image
          src={arrowImage}
          alt="arrow-down"
          width={20}
          height={20}
        />
      </a>
    </button>
  )
}

export default ExploreBtn