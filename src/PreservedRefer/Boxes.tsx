import React from 'react'

function Boxes({ boxes }: any) {
  console.info(
    'Render Boxes ' +
      new Date().toLocaleTimeString(
        'en-US'
      )
  )

  return (
      <div className="boxes-wrapper">
          {boxes.map((boxStyles: any, index: number) => (
              <div
          key={index}
          className="box"
          style={boxStyles}
        />
      ))}
      </div>
  )
}

export default React.memo(Boxes)