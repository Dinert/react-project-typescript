import React from "react"
import {  useEffect, useState } from "react"

function isPrime(num: number) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}


const Footer = () => {
        const [selectedNum, setSelectedNum] = useState<number>(100)
        console.log('Footer rendering...')
        const allPrimes = []
        for (let i = 2; i <= selectedNum; i++) {
            if (!isPrime(i)) {
            allPrimes.push(i)
            }
        }

        const dirtyWork = () => {
            console.log('Doing dirty work...')
            return selectedNum
        }

        // const result = useMemo(() => {
        //     return dirtyWork()
        // }, [selectedNum])

    return (
        <div>
            <p>
                {dirtyWork()}
            </p>
            <label htmlFor="num">Your number:</label>
            <input
              id="num"
              type="number"
              value={selectedNum}
              onChange={(e) =>{
                const num = Math.min(100_1000, Number(e.target.value))
                setSelectedNum(num)
              }}
          />
            <p>
                {allPrimes.length} prime numbers between 2 and {selectedNum}:
                {allPrimes.join(', ')}
            </p>
        </div>
    )
}
export default React.memo(Footer)