import { useEffect, useRef, useState } from "react"

type Props = {
  timeout?: number
  value: string
  onEnd?: (value: string) => void
}

export const useWritting = (props: Props) => {
  const { value, onEnd, timeout = 1200 } = props
  const [isWritting, setIsWritting] = useState(false)
  const [writting, setWritting] = useState("")
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    clearInterval(intervalRef.current!)
    intervalRef.current = null
    setWritting(value)
    return () => {
      setIsWritting(false)
    }
  }, [value])

  const handleChange = (text: string) => {
    setWritting(text)
    setIsWritting(true)
    clearInterval(intervalRef.current!)
    intervalRef.current = null

    const interval = setInterval(() => {
      setIsWritting(false)
      onEnd?.(text)
      clearInterval(intervalRef.current!)
      intervalRef.current = null
    }, timeout)

    intervalRef.current = interval
  }

  const handleClear = () => {
    setWritting("")
    setIsWritting(false)
    onEnd?.("")
    clearInterval(intervalRef.current!)
    intervalRef.current = null
  }

  return {
    isWritting,
    writting,
    setWritting: handleChange,
    clear: handleClear,
  }
}
