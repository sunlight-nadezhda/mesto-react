import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
        false
    );
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
        false
    );
    const [selectedCard, setSelectedCard] = React.useState({});

    function handleEditAvatarClick(event) {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }

    function handleEditProfileClick(event) {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlaceClick(event) {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }

    function closeAllPopups(event) {
        if (event.target === event.currentTarget || event.key === "Escape") {
            setIsEditAvatarPopupOpen(false);
            setIsEditProfilePopupOpen(false);
            setIsAddPlacePopupOpen(false);
            setSelectedCard({});
        }
    }

    function handleCardClick(cardData) {
        setSelectedCard(cardData);
    }

    return (
        <div className="page">
            <div className="page__content">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onShowImage={handleCardClick}
                />
                <Footer />
            </div>

            <PopupWithForm
                title="Редактировать профиль"
                name="profile"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <label className="popup__form-field">
                    <input
                        type="text"
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

            <PopupWithForm
                title="Новое место"
                name="add-card"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            >
                <label className="popup__form-field">
                    <input
                        type="text"
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
                    disabled
                >
                    Создать
                </button>
            </PopupWithForm>

            <PopupWithForm
                title="Обновить аватар"
                name="edit-avatar"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <label className="popup__form-field">
                    <input
                        type="url"
                        name="input-link-edit-avatar"
                        placeholder="Ссылка на аватарку"
                        className="popup__input popup__input_type_link-avatar"
                        id="input-link-edit-avatar"
                        required
                    />
                    <span className="popup__input-error input-link-edit-avatar-error"></span>
                </label>
                <button
                    type="submit"
                    className="popup__save-button popup__save-button_inactive"
                    disabled
                >
                    Создать
                </button>
            </PopupWithForm>

            <PopupWithForm title="Вы уверены?" name="confirm">
                <button type="submit" className="popup__save-button">
                    Да
                </button>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
    );
}

export default App;
