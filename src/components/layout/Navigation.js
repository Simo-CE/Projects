import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Meetups</div>
      <nav>
        <ul>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/new'>New</Link> </li>
          <li> <Link to='/favs'>Favs</Link> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation