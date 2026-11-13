import { useReducer, useState } from 'react'
import { ShotCounterContext } from '../context/ShotCounterContext'
import { CounterDisplay } from './CounterDisplay'

function countReducer(state, action) {
  const { type, amount = 0 } = action;
  const toNumberAmount = Number(amount);
  const safeAmount = Math.max(0, toNumberAmount);
  if (Number.isFinite(toNumberAmount))
    switch (type) {
      case 'ADD':
        return state + safeAmount;

      case 'REMOVE':
        return Math.max(0, (state - safeAmount));

      case 'RESET':
        return 0;

      case 'SET':
        return safeAmount;

      default:
        return state;
    } else {
    return state;
  }
}

export function ShotCounter() {
  const [shotCounter, dispatch] = useReducer(countReducer, 0);
  const [input, setInput] = useState('');

  return (
    <div className="btn-row">
        <ShotCounterContext.Provider value={{shotCounter, dispatch}}>
        <div>
          <span>{shotCounter} {shotCounter !== 1 ? "shots" : "shot"}</span>
        </div>
        <div>
          <button
            onClick={() => dispatch({ type: 'ADD', amount: input })}
          >
            ADD
          </button>
          <button
            onClick={() => dispatch({ type: 'REMOVE', amount: input })}
          >
            REMOVE
          </button>
          <button
            onClick={() => dispatch({ type: 'SET', amount: input })}
          >
            SET
          </button>
          <button
            onClick={() => dispatch({ type: 'RESET' })}
          >
            RESET
          </button>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Enter the value"
          />
        </div>
        <CounterDisplay />
        </ShotCounterContext.Provider>
      </div>
  )
}