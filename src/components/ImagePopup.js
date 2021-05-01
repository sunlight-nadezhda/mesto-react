import React from "react";

function ImagePopup(props) {
    return (
        <div
            className={`overlay popup popup_type_show-image${
                Object.keys(props.card).length === 0 ? "" : " popup_opened"
            }`}
            onMouseDown={props.onClose}
        >
            <div className="popup__container popup__container_type_show-image">
                <button
                    type="button"
                    aria-label="Закрыть"
                    className="button popup__close-button"
                    onMouseDown={props.onClose}
                ></button>
                <figure className="figure">
                    <img
                        src={props.card.link}
                        alt={props.card.name}
                        className="figure__image"
                    />
                    <figcaption className="figure__caption">
                        {props.card.name}
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup;
