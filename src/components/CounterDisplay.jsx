import { useContext } from 'react'
import { ShotCounterContext } from '../context/ShotCounterContext'

export function CounterDisplay() {
  const { shotCounter } = useContext(ShotCounterContext);
  return (
    <div>
      {shotCounter}
    </div>
  )
}