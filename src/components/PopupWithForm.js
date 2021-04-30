import React from "react";

function PopupWithForm(props) {
    return (
        <div className={`overlay popup popup_type_${props.name}`}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <button
                    type="button"
                    aria-label="Закрыть"
                    className="button popup__close-button"
                ></button>
                <form
                    className="popup__form"
                    name={props.name}
                    noValidate
                >{props.children}</form>
            </div>
        </div>
    );
}

export default PopupWithForm;
