import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = `button card__delete-button ${
        isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
    }`;

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `button card__like-button${isLiked ? " card__like-button_active" : ""}`;

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    return (
        <li className="card">
            <img
                className="card__image"
                src={props.card.link}
                alt={props.card.name}
                onClick={handleClick}
            />
            <button
                type="button"
                aria-label="Удалить"
                className={cardDeleteButtonClassName}
                onClick={handleDeleteClick}
            ></button>
            <div className="card__info">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__likes">
                    <button
                        type="button"
                        aria-label="Лайкнуть"
                        className={cardLikeButtonClassName}
                        onClick={handleLikeClick}
                    ></button>
                    <span
                        className="card__like-counter"
                        aria-label="Количество лайков"
                    >
                        {props.card.likes.length}
                    </span>
                </div>
            </div>
        </li>
    );
}

export default Card;
