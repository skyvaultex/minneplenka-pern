import { useContext } from 'react';
import { FavoritesCounterContext } from '../context/FavoritesCounterContext'

export function FavoritesCounter() {
  const {counter} = useContext(FavoritesCounterContext);
  return (
    <div>
      Liked {counter.length} projects
    </div>
  )
}