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
import AddPlacePopup from "./AddPlacePopup";
import { renderLoading } from "../utils/utils";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setCurrentUser] = useState(null);
    const [cards, setCards] = React.useState([]);

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
        renderLoading(".popup_type_profile", true);
        renderLoading(".popup_type_edit-avatar", true);
        renderLoading(".popup_type_add-card", true);
    }

    function handleCardClick(cardData) {
        setSelectedCard(cardData);
    }

    function handleUpdateUser(data) {
        renderLoading(".popup_type_profile", false);
        api.setUserInfo(data)
            .then((userData) => {
                renderLoading(".popup_type_profile", true);
                setCurrentUser(userData);
                this.onClose();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleUpdateAvatar(obj) {
        renderLoading(".popup_type_edit-avatar", false);
        api.setUserAvatar(obj.avatar)
            .then((userData) => {
                renderLoading(".popup_type_edit-avatar", true);
                setCurrentUser(userData);
                this.onClose();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const cardLikes = card.likes;
        const isLiked = cardLikes.some((item) => item._id === currentUser._id);
        if (!isLiked) {
            cardLikes.push(currentUser);
        }

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked, cardLikes)
            .then((newCard) => {
                setCards((state) =>
                    state.map((c) => (c._id === card._id ? newCard : c))
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then((cardData) => {
                setCards((state) => state.filter((c) => c._id !== card._id));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleAddPlaceSubmit(place) {
        renderLoading(".popup_type_add-card", false);
        api.addCard(place)
            .then((newCard) => {
                renderLoading(".popup_type_add-card", true);
                setCards([newCard, ...cards]);
                this.onClose();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {
                setCurrentUser(userInfo);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
            .then((initialCards) => {
                setCards(initialCards);
            })
            .catch((err) => {
                console.log(err);
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
                        cards={cards}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                    <Footer />
                </div>

                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                />

                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlaceSubmit}
                />

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
