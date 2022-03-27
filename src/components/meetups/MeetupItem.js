import { useContext } from 'react'
import FavoritesContext from '../../store/favoritesContext'
import Card from '../layout/Card'
import styles from './MeetupItem.module.css'

const MeetupItem = (props) => {
    const favoriteCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavorites() {
        if (itemIsFavorite) favoriteCtx.removeFavorites(props.id);
        else favoriteCtx.addFavorites({
            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            address: props.address,
        })
    }

    return (
        <Card>
            <li>
                <div className={styles.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={toggleFavorites}>{ itemIsFavorite ? 'Unfavourite' : 'Favorite'}</button>
                </div>
            </li>
        </Card>
    )
}

export default MeetupItem