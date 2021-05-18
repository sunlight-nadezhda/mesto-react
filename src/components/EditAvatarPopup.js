import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const inputEditAvatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
          avatar: inputEditAvatarRef.current.value,
        });
      }

    return (
        <PopupWithForm
            title="Обновить аватар"
            name="edit-avatar"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__form-field">
                <input
                    type="url"
                    name="input-link-edit-avatar"
                    placeholder="Ссылка на аватарку"
                    className="popup__input popup__input_type_link-avatar"
                    id="input-link-edit-avatar"
                    required
                    ref={inputEditAvatarRef}
                />
                <span className="popup__input-error input-link-edit-avatar-error"></span>
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

export default EditAvatarPopup;
