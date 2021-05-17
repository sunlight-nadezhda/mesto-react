import React from "react";

function PopupWithForm(props) {
    function onCloseByEsc(event) {
        if (event.key === "Escape") {
            props.onClose();
        }
    }

    function onCloseByOverlay(event) {
        if (event.target === event.currentTarget) {
            props.onClose();
        }
    };

    React.useEffect(() => {
        document.addEventListener("keydown", onCloseByEsc);
        return () => {
            document.removeEventListener("keydown", onCloseByEsc);
        };
    });

    return (
        <div
            className={`overlay popup popup_type_${props.name}${
                props.isOpen ? " popup_opened" : ""
            }`}
            onClick={onCloseByOverlay}
        >
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <button
                    type="button"
                    aria-label="Закрыть"
                    className="button popup__close-button"
                    onClick={props.onClose}
                ></button>
                <form className="popup__form" name={props.name} noValidate onSubmit={props.onSubmit}>
                    {props.children}
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
