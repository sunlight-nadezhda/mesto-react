import React from "react";

function ImagePopup() {
    return (
        <div className="overlay popup popup_type_show-image">
            <div className="popup__container popup__container_type_show-image">
                <button
                    type="button"
                    aria-label="Закрыть"
                    className="button popup__close-button"
                ></button>
                <figure className="figure">
                    <img
                        src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
                        alt="Архыз"
                        className="figure__image"
                    />
                    <figcaption className="figure__caption">Архыз</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup;
