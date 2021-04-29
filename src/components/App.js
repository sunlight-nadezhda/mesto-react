import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
    return (
        <div className="page">
          <div className="page__content">
            <Header />
            <Main />
            <Footer />

            <div className="overlay popup popup_type_profile">
                <div className="popup__container">
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <button
                        type="button"
                        aria-label="Закрыть"
                        className="button popup__close-button"
                    ></button>
                    <form
                        className="popup__form"
                        name="profile-about"
                        noValidate
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
                    </form>
                </div>
            </div>

            <div className="overlay popup popup_type_add-card">
                <div className="popup__container">
                    <h2 className="popup__title">Новое место</h2>
                    <button
                        type="button"
                        aria-label="Закрыть"
                        className="button popup__close-button"
                    ></button>
                    <form className="popup__form" name="create-card" noValidate>
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
                    </form>
                </div>
            </div>

            <div className="overlay popup popup_type_show-image">
                <div className="popup__container popup__container_type_show-image">
                    <button
                        type="button"
                        aria-label="Закрыть"
                        className="button popup__close-button"
                    ></button>
                    <figure className="figure">
                        <img
                            src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
                            alt="Архыз"
                            className="figure__image"
                        />
                        <figcaption className="figure__caption">
                            Архыз
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div className="overlay popup popup_type_confirm">
                <div className="popup__container popup__container_type_confirm">
                    <button
                        type="button"
                        aria-label="Закрыть"
                        className="button popup__close-button"
                    ></button>
                    <h2 className="popup__title">Вы уверены?</h2>
                    <form
                        className="popup__form popup__form_type_confirm"
                        name="confirm"
                        noValidate
                    >
                        <button type="submit" className="popup__save-button">
                            Да
                        </button>
                    </form>
                </div>
            </div>

            <div className="overlay popup popup_type_edit-avatar">
                <div className="popup__container popup__container_type_edit-avatar">
                    <button
                        type="button"
                        aria-label="Закрыть"
                        className="button popup__close-button"
                    ></button>
                    <h2 className="popup__title">Обновить аватар</h2>
                    <form className="popup__form" name="edit-avatar" noValidate>
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
                    </form>
                </div>
            </div>
          </div>
        </div>
    );
}

export default App;
