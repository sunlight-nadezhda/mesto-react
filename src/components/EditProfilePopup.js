import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    // Подписка на контекст
    const currentUser = React.useContext(CurrentUserContext);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
      // Запрещаем браузеру переходить по адресу формы
      e.preventDefault();

      // Передаём значения управляемых компонентов во внешний обработчик
      props.onUpdateUser({
        name,
        about: description,
      });
    }

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
        setName(currentUser ? currentUser.name : "");
        setDescription(currentUser ? currentUser.about : "");
    }, [currentUser]);

    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="profile"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__form-field">
                <input
                    type="text"
                    value={name}
                    onChange={handleChangeName}
                    name="input-name-profile"
                    placeholder="Название"
                    className="popup__input popup__input_type_name-profile"
                    id="input-name-profile"
                    required
                    minLength="2"
                    maxLength="40"
                />
                <span className="popup__input-error input-name-profile-error"></span>
            </label>
            <label className="popup__form-field">
                <input
                    type="text"
                    value={description}
                    onChange={handleChangeDescription}
                    name="input-metier-profile"
                    placeholder="Ссылка на картинку"
                    className="popup__input popup__input_type_metier-profile"
                    id="input-metier-profile"
                    required
                    minLength="2"
                    maxLength="200"
                />
                <span className="popup__input-error input-metier-profile-error"></span>
            </label>
            <button type="submit" className="popup__save-button">
                Сохранить
            </button>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
