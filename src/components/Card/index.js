import styles from './Card.module.scss';

function Card(props){
    const onClickButton = () => {
        alert(props.title);
    };

    return(
        <div className={styles.card}>
    <div className={styles.favorite}>
        <img src="\img\heart.svg" alt="Unliked" />
    </div>
    <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
    <p>{props.title}</p>
    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{props.price} руб.</b>
            </div>
            <button className="button" onClick={onClickButton}>
                <img width={11} height={11} src="\img\button_1.svg" alt="" />
            </button>
    </div>
</div>
    );
}

export default Card;