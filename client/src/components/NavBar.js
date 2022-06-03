import React, {useContext} from 'react';
import {Context} from "../index"
import "../css/NavBar.scss"
import "../css/main.scss"
import { PICTURES_ROUTE, PAINTERS_ROUTE, SERVICES_ROUTE, ABOUTUS_ROUTE, CONTACTS_ROUTE, QUESTIONS_ROUTE } from '../utils/consts';
import {useNavigate} from "react-router-dom";


const NavBar = () => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    return (
        <div className="header">
            <div className="container-sm">
                <div className="header__container">
                    <div className="header__content">
                        <ul className="header__list">
                            <li className="header__item">
                                <a
                                    onClick={() => navigate(PICTURES_ROUTE)}
                                    className={"header__link"}>
                                        Картины
                                </a>
                            </li>
                            <li className="header__item">
                                <a
                                    onClick={() => navigate(PAINTERS_ROUTE)}
                                    className={"header__link"}>
                                        Художники
                                </a>
                            </li>
                            <li className="header__item">
                                <a
                                    onClick={() => navigate(SERVICES_ROUTE)}
                                    className={"header__link"}>
                                        Услуги
                                </a>
                            </li>
                            <li className="header__item">
                                <a
                                    onClick={() => navigate(ABOUTUS_ROUTE)}
                                    className={"header__link"}>
                                        О нас
                                </a>
                            </li>
                            <li className="header__item">
                                <a
                                    onClick={() => navigate(CONTACTS_ROUTE)}
                                    className={"header__link"}>
                                        Контакты
                                </a>
                            </li>
                            <li className="header__item">
                                <a
                                    onClick={() => navigate(QUESTIONS_ROUTE)}
                                    className={"header__link"}>
                                        Помощь
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header__user">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;