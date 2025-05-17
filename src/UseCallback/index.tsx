import React, { useMemo } from 'react'

import MegaBoost from './MegaBoost'

function App() {
  const [count, setCount] =
    React.useState(0)

//   function handleMegaBoost() {
//     setCount((currentValue) => currentValue + 1234)
//   }

  // 优化1
//   const handleMegaBoost = useMemo(() => {
//     return () => {
//       setCount((currentValue) => currentValue + 1234)
//     }
//   }, [])

// 优化2
  const handleMegaBoost = React.useCallback(() => {
    setCount((currentValue) => currentValue + 1234)
  }, [])

  console.log('App rendering...')

  return (
      <>
          <div>
              Count: {count}
          </div>
          <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
              Click me!
          </button>
          <MegaBoost
        handleClick={handleMegaBoost}
      />
      </>
  )
}

export default App