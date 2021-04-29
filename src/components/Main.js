import React from "react";
import avatar from './../images/avatar.png';

function Main() {
    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-edit">
                    <img
                        src={avatar}
                        alt="Аватарка"
                        className="profile__avatar"
                    />
                </div>
                <div className="profile__about">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <p className="profile__metier">Исследователь океана</p>
                    <button
                        type="button"
                        aria-label="Редактировать"
                        className="button profile__edit-button"
                    ></button>
                </div>
                <button
                    type="button"
                    aria-label="Добавить"
                    className="button profile__add-button"
                ></button>
            </section>

            <section aria-label="Карточки с местами">
                <ul className="elements"></ul>
            </section>
        </main>
    );
}

export default Main;
