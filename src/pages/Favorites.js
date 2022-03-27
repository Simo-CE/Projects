import { useContext } from 'react'
import FavoritesContext from '../store/favoritesContext'
import MeetupList from '../components/meetups/MeetupList'

const Favorites = () => {
  const favoriteCtx = useContext(FavoritesContext);

  let content

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You haven't added any favorites yet</p>
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />
  }

  return (
    <div>
      <h1>Favorites</h1>
      {content}
    </div>
  )
}

export default Favorites