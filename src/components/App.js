import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "./../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setCurrentUser] = useState(null);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    }

    function handleCardClick(cardData) {
        setSelectedCard(cardData);
    }

    function handleUpdateUser(data) {
        api.setUserInfo(data).then((userData) => {
            setCurrentUser(userData);
            this.onClose();
        });
    }

    function handleUpdateAvatar(obj) {
        api.setUserAvatar(obj.avatar).then((userData) => {
            setCurrentUser(userData);
            this.onClose();
        });
    }

    React.useEffect(() => {
        api.getUserInfo().then((userInfo) => {
            setCurrentUser(userInfo);
        });
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
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

                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                />

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

                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                />

                <PopupWithForm title="Вы уверены?" name="confirm">
                    <button type="submit" className="popup__save-button">
                        Да
                    </button>
                </PopupWithForm>

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
