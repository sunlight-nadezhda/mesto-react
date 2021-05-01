import React from "react";
import api from "./../utils/api";

function Main(props) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {
                setUserName(userInfo.name);
                setUserAvatar(userInfo.avatar);
                setUserDescription(userInfo.about);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
            .then((dataCard) => {
                setCards(dataCard);
                console.log(dataCard);
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
                    style={{ backgroundImage: `url(${userAvatar})` }}
                ></div>
                <div className="profile__about">
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__metier">{userDescription}</p>
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
                <ul className="elements">
                {
                    cards.map((card) => (
                        <li className="element" key={card._id}>
                            <img
                                className="element__image"
                                src={card.link}
                                alt={card.name}
                            />
                            <button
                                type="button"
                                aria-label="Удалить"
                                className="button element__trash"
                            ></button>
                            <div className="element__info">
                                <h2 className="element__title">{card.name}</h2>
                                <div className="element__likes">
                                    <button
                                        type="button"
                                        aria-label="Лайкнуть"
                                        className="button element__like-button"
                                    ></button>
                                    <span
                                        className="element__like-counter"
                                        aria-label="Количество лайков"
                                    >{card.likes.length}</span>
                                </div>
                            </div>
                        </li>
                    ))
                }
                </ul>
            </section>
        </main>
    );
}

export default Main;
