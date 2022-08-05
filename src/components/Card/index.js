import React from 'react';
import styles from './Card.module.scss';

function Card({onFavorite, imageUrl, title, price, onPLus}){
    const [isAdded, setIsAdded] = React.useState(false);
    
    const onClickPlus = () => {
        onPLus({title, imageUrl, price});
        setIsAdded(!isAdded);
    };

    return(
        <div className={styles.card}>
    <div className={styles.favorite} onClick={onFavorite}>
        <img src="\img\heart.svg" alt="Unliked" />
    </div>
    <img width={133} height={112} src={imageUrl} alt="Sneakers" />
    <p>{title}</p>
    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
            </div>
            <img 
            className={styles.plus} 
            onClick={onClickPlus} 
            // Смена конпок при нажатии на нее
            src={isAdded ? '/img/Checked.svg' : '/img/Plus.svg' } 
            alt="Plus" />
    </div>
</div>
    );
}

export default Card;