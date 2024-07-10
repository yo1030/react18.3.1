import { useEffect, useState } from "react"

export const useCounter = () => {
  const [count, setCount] = useState<number>(0)
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return count
}