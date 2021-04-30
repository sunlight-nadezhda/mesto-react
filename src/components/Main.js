import React from "react";

function Main() {
    function handleEditAvatarClick(event) {
        document
            .querySelector(".popup_type_edit-avatar")
            .classList.add("popup_opened");
    }
    function handleEditProfileClick(event) {
        document
            .querySelector(".popup_type_profile")
            .classList.add("popup_opened");
    }
    function handleAddPlaceClick(event) {
        document
            .querySelector(".popup_type_add-card")
            .classList.add("popup_opened");
    }
    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-edit" onClick={handleEditAvatarClick}></div>
                <div className="profile__about">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <p className="profile__metier">Исследователь океана</p>
                    <button
                        type="button"
                        aria-label="Редактировать"
                        className="button profile__edit-button"
                        onClick={handleEditProfileClick}
                    ></button>
                </div>
                <button
                    type="button"
                    aria-label="Добавить"
                    className="button profile__add-button"
                    onClick={handleAddPlaceClick}
                ></button>
            </section>

            <section aria-label="Карточки с местами">
                <ul className="elements"></ul>
            </section>
        </main>
    );
}

export default Main;
