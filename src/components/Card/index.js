import React from 'react';
import ContentLoader from 'react-content-loader';

import AppContext from '../../pages/context';

import styles from './Card.module.scss';

function Card({id, onFavorite, imageUrl, title, price, onPLus, favorited = false, loading = false}){
    const {isItemAdded} = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = {id, parentId: id, title, imageUrl, price};
    
    const onClickPlus = () => {
        onPLus(obj);
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return(
        <div className={styles.card}>
            {   
                loading ? (
                <ContentLoader
                speed={2}
                width={183}
                height={250}
                viewBox="0 0 155 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
              </ContentLoader>
            ) : (
            <>
            {onFavorite && (
                <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? 'img/heart1.svg' : 'img/heart.svg' }  alt="Unliked" />
            </div>
            )}
            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <p>{title}</p>
            <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
            </div>
            {onPLus &&  
            (<img 
            className={styles.plus} 
            onClick={onClickPlus} 
            // Смена конпок при нажатии на нее
            src={isItemAdded(id) ? 'img/Checked.svg' : 'img/Plus.svg' } 
            alt="Plus" />)}
            </div>
            </>
            )}
        </div>
    );        
}
export default Card;