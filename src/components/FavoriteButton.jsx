import './FavoriteButton.css'
import { FavoritesCounterContext } from '../context/FavoritesCounterContext'
import { useContext } from 'react'

export function FavoriteButton({ id }) {
  const { counter, dispatch } = useContext(FavoritesCounterContext);
  const isFavorited = counter.includes(id);
  return (
    <button
      className={`${isFavorited ? "favorited" : "not-favorited"}`}
      onClick={() => dispatch({
        type: isFavorited ? "REMOVE" : "ADD",
        projectID: id
      })}
    >
      {isFavorited ? "Unfavorite" : "Favorite"}
    </button>
  )
}