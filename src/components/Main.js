import React from "react";

function Main() {
    React.useEffect(() => {
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
        document
            .querySelector(".profile__avatar-edit")
            .addEventListener("click", handleEditAvatarClick);
        document
            .querySelector(".profile__edit-button")
            .addEventListener("click", handleEditProfileClick);
        document
            .querySelector(".profile__add-button")
            .addEventListener("click", handleAddPlaceClick);
        return () => {};
    });
    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-edit"></div>
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
