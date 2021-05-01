import React from "react";

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
        <li className="element">
            <img
                className="element__image"
                src={props.card.link}
                alt={props.card.name}
                onClick={handleClick}
            />
            <button
                type="button"
                aria-label="Удалить"
                className="button element__trash"
            ></button>
            <div className="element__info">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__likes">
                    <button
                        type="button"
                        aria-label="Лайкнуть"
                        className="button element__like-button"
                    ></button>
                    <span
                        className="element__like-counter"
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
