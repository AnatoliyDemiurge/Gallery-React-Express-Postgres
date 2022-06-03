import React, {useContext} from 'react';
import {Context} from "../index"
import "../css/NavBar.scss"
import "../css/main.scss"
import { PICTURES_ROUTE, PAINTERS_ROUTE, SERVICES_ROUTE, ABOUTUS_ROUTE, CONTACTS_ROUTE, QUESTIONS_ROUTE } from '../utils/consts';
import {useNavigate} from "react-router-dom";
import profilePic from "../images/profile-pic.jpg"
import carPic from "../images/car-pic.jpg"
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    return (
        <div className="header">
            <div className="container-sm">
                <div className="header__container">
                    <div className="header__content">
                        <ul className="header__list">
                            <li className="header__item">
                                <span
                                    onClick={() => navigate(PICTURES_ROUTE)}
                                    className={"header__link"}>
                                        Картины
                                </span>
                            </li>
                            <li className="header__item">
                                <span
                                    onClick={() => navigate(PAINTERS_ROUTE)}
                                    className={"header__link"}>
                                        Художники
                                </span>
                            </li>
                            <li className="header__item">
                                <span
                                    onClick={() => navigate(SERVICES_ROUTE)}
                                    className={"header__link"}>
                                        Услуги
                                </span>
                            </li>
                            <li className="header__item">
                                <span
                                    onClick={() => navigate(ABOUTUS_ROUTE)}
                                    className={"header__link"}>
                                        О нас
                                </span>
                            </li>
                            <li className="header__item">
                                <span
                                    onClick={() => navigate(CONTACTS_ROUTE)}
                                    className={"header__link"}>
                                        Контакты
                                </span>
                            </li>
                            <li className="header__item">
                                <span
                                    onClick={() => navigate(QUESTIONS_ROUTE)}
                                    className={"header__link"}>
                                        Помощь
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="header__user user">
                        {
                        user.isAuth ?
                            <img alt="car" className="header__pic" src={carPic}/>
                            
                        :
                            <img onClick={()=> user.setIsAuth(true)} alt="profile" className="header__pic" src={profilePic}/>
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default NavBar;