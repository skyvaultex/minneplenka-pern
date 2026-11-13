import { useReducer, useEffect } from 'react'
import { FavoritesCounterContext } from './FavoritesCounterContext'
import { manageFavorites } from '../reducers/manageFavorites.js'
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage.js'

export function FavoritesProvider({ children }) {
  const [counter, dispatch] = useReducer(manageFavorites, [], () => loadFromLocalStorage('favorites'));
  useEffect(() => {
    saveToLocalStorage('favorites', counter);
  }, [counter]);

  return (
    <FavoritesCounterContext.Provider value={{counter, dispatch}}>
      {children}
    </FavoritesCounterContext.Provider>
  )
}