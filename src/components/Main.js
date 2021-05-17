import React from "react";
import api from "./../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const cardLikes = card.likes;
        const isLiked = cardLikes.some(item => item._id === currentUser._id);
        if (!isLiked) {
            cardLikes.push(currentUser);
        }

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked, cardLikes).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        console.log(card);
        // api.deleteCard();
    }

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
        <main>
            <section className="profile">
                <div
                    className="profile__avatar-edit"
                    onClick={props.onEditAvatar}
                    style={{ backgroundImage: `url(${currentUser ? currentUser.avatar : ''})` }}
                ></div>
                <div className="profile__about">
                    <h1 className="profile__name">{currentUser ? currentUser.name : ''}</h1>
                    <p className="profile__metier">{currentUser ? currentUser.about : ''}</p>
                    <button
                        type="button"
                        aria-label="Редактировать"
                        className="button profile__edit-button"
                        onClick={props.onEditProfile}
                    ></button>
                </div>
                <button
                    type="button"
                    aria-label="Добавить"
                    className="button profile__add-button"
                    onClick={props.onAddPlace}
                ></button>
            </section>

            <section aria-label="Карточки с местами">
                <ul className="cards">
                    {cards.map((cardInfo) => (
                        <Card
                            card={cardInfo}
                            key={cardInfo._id}
                            onCardClick={props.onShowImage}
                            onCardLike={handleCardLike}
                            onCardDelete={handleCardDelete}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;
