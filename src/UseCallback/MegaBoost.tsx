import React from 'react'

function MegaBoost({ handleClick }: any) {
  console.info(
    'Render Boxes ' +
      new Date().toLocaleTimeString(
        'en-US'
      )
  )

  return (
      <button
      className="mega-boost-button"
      onClick={handleClick}
    >
          MEGA BOOST!
      </button>
  )
}

export default React.memo(MegaBoost)