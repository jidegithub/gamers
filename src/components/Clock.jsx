import React, {useState, useEffect} from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleString())

  useEffect(() => {
    let timer = setInterval(() => 
      setTime(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
    , 1000);

    return () => {
      clearInterval(timer)
    }
  }, [time])
  return (
    <>
      {time}
    </>
  )
}
