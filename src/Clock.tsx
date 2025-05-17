import { useEffect, useState } from "react"

function useTime() {
    const [time, setTime] = useState<Date>(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 6000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return time
}


const Clock = () => {
    const time = useTime()
    console.log('Clock render')
    return (
        <div>
            <p className="time">
                Time: {time.toLocaleTimeString()}
            </p>
            <h1>Hello World</h1>
        </div>
    )
}

export default Clock