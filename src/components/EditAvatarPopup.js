import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const inputEditAvatarRef = React.useRef();
    const [isDisabled, setIsDisabled] = React.useState(true);

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: inputEditAvatarRef.current.value,
        });

        inputEditAvatarRef.current.value = "";
        setIsDisabled(true);
    }

    // useEffect(() => {
    //     if (inputEditAvatarRef.current.value === "") {
    //         setIsDisabled(true);
    //     } else {
    //         setIsDisabled(false);
    //     }
    // }, [inputEditAvatarRef.current.value])

    return (
        <PopupWithForm
            title="Обновить аватар"
            name="edit-avatar"
            buttonText={props.buttonText}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            isDisabled={isDisabled}
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
        </PopupWithForm>
    );
}

export default EditAvatarPopup;
