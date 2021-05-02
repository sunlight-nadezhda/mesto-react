import React from "react";
import api from "./../utils/api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then((values) => {
                const [userData, initialCards] = values;

                setUserName(userData.name);
                setUserAvatar(userData.avatar);
                setUserDescription(userData.about);

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
                    {cards.map((cardInfo) => (
                        <Card
                            card={cardInfo}
                            key={cardInfo._id}
                            onCardClick={props.onShowImage}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;
