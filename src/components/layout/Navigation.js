import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favoritesContext';
import styles from './Navigation.module.css'

const Navigation = () => {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Meetups</div>
      <nav>
        <ul>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/new'>New</Link> </li>
          <li> <Link to='/favs'>
            Favs
            <span className={styles.badge}>{favoriteCtx.totalFavorites}</span>
          </Link> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation