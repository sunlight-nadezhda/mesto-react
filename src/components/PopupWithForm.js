import React from "react";

function PopupWithForm(props) {
    React.useEffect(() => {
        document.addEventListener('keydown', props.onClose);
        return () => {document.removeEventListener('keydown', props.onClose);}
    });

    return (
        <div
            className={`overlay popup popup_type_${props.name}${
                props.isOpen ? " popup_opened" : ""
            }`}
            onMouseDown={props.onClose}
        >
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <button
                    type="button"
                    aria-label="Закрыть"
                    className="button popup__close-button"
                    onMouseDown={props.onClose}
                ></button>
                <form className="popup__form" name={props.name} noValidate>
                    {props.children}
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
