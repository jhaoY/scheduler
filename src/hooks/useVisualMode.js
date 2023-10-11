import { useState } from "react";

const useVisualMode = (initial) => {
  const [history, setHistory] = useState([initial])

  const transition = (newMode, replace = false) => {
    if (replace) {
      setHistory(prev => [...prev.slice(0, prev.length - 1), newMode])
    } else {
      setHistory(prev => [...prev, newMode])
    }
  };

  const back = () => {
    if (history.length > 1) {
      return setHistory(prev => [...prev.slice(0, prev.length - 1)])
    } else {
      return
    }
  }

  return { mode: history[history.length - 1], transition, back };
}

export default useVisualMode;