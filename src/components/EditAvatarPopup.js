import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const inputEditAvatarRef = React.useRef();
    const [isDisabled, setIsDisabled] = React.useState(true);
    const [avatarLinkValue, setAvatarLinkValue] = React.useState("");

    const submitButtonClassName = `popup__save-button ${
        isDisabled ? "popup__save-button_inactive" : ""
    }`;

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: inputEditAvatarRef.current.value,
        });

        inputEditAvatarRef.current.value = "";
        setIsDisabled(true);
    }

    function setDisabled(field) {
        if (field === "") {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }

    function handleChangeInput() {
        setAvatarLinkValue(inputEditAvatarRef.current.value);
        setDisabled(avatarLinkValue);
    }

    function handlePasteInput(e) {
        setAvatarLinkValue(e.clipboardData.getData('text/plain'));
        setDisabled(avatarLinkValue);
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
                    onChange={handleChangeInput}
                    onPaste={handlePasteInput}
                    defaultValue={avatarLinkValue}
                />
                <span className="popup__input-error input-link-edit-avatar-error"></span>
            </label>
            <button
                type="submit"
                className={submitButtonClassName}
                disabled={isDisabled}
            >
                Создать
            </button>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;
