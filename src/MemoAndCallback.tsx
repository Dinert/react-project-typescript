
// import Clock from "./Clock"
import { useEffect, useState } from "react"
import Footer from "./Footer"


function useTime() {
    const [time, setTime] = useState<Date>(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return time
}


function MemoAndCallback() {
    const time = useTime()

    console.log('MemoAndCallback rendering...')
  return (
      <div>
          <p>{time.getSeconds()}</p>
          {/* <Clock></Clock> */}
          <Footer></Footer>
      </div>
  )
}
export default MemoAndCallback