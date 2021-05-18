import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [title, setTitle] = React.useState("");
    const [link, setLink] = React.useState("");

    function handleChangeTitle(e) {
        setTitle(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onAddPlace({
            name: title,
            link,
        });
    }

    React.useEffect(() => {
        setTitle("");
        setLink("");
    }, []);

    return (
        <PopupWithForm
            title="Новое место"
            name="add-card"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__form-field">
                <input
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                    name="input-name-add-card"
                    placeholder="Название"
                    className="popup__input popup__input_type_name-card"
                    id="input-name-add-card"
                    required
                    minLength="2"
                    maxLength="30"
                />
                <span className="popup__input-error input-name-add-card-error"></span>
            </label>
            <label className="popup__form-field">
                <input
                    type="url"
                    value={link}
                    onChange={handleChangeLink}
                    name="input-link-add-card"
                    placeholder="Ссылка на картинку"
                    className="popup__input popup__input_type_link-card"
                    id="input-link-add-card"
                    required
                />
                <span className="popup__input-error input-link-add-card-error"></span>
            </label>
            <button
                type="submit"
                className="popup__save-button popup__save-button_inactive"
            >
                Создать
            </button>
        </PopupWithForm>
    );
}

export default AddPlacePopup;
