import React from "react";

function Main(props) {
    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-edit" onClick={props.onEditAvatar}></div>
                <div className="profile__about">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <p className="profile__metier">Исследователь океана</p>
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
                <ul className="elements"></ul>
            </section>
        </main>
    );
}

export default Main;
