import React, {useContext} from 'react';
import {Context} from "../index"
import "../css/NavBar.scss"
import "../css/main.scss"
import { PICTURES_ROUTE, PAINTERS_ROUTE, SERVICES_ROUTE, ABOUTUS_ROUTE, CONTACTS_ROUTE, QUESTIONS_ROUTE, LOGIN_ROUTE, BASKET_ROUTE } from '../utils/consts';
import {useNavigate} from "react-router-dom";
import profilePic from "../images/profile-pic.jpg"
import carPic from "../images/car-pic.jpg"
import {observer} from "mobx-react-lite";
import "../css/burger.css"

const NavBar = observer(() => {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__content');
    const menuItemClose = document.querySelector('.header__close');
    const navigate = useNavigate()
    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.token = '';
    }

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
                        <div 
                            className="header__close"
                            onClick={() => 
                                {
                                    const menu = document.querySelector('.header__content');
                                    menu.classList.remove('header__active');
                                }
                            }
                        >
                            <span class="header__line">
                               
                            </span
                            ><span class="header__line">
                                
                            </span>
                        </div>
                    </div>
                    <div className="header__user user">
                        {
                        user.isAuth ?
                            <div className="user__status">
                                <li className="header__item">
                                    <span
                                        onClick={()=>logOut()}
                                        className={"header__link"}
                                    >
                                        Выйти
                                    </span>
                                </li>
                                <div className="user__container-pic"><img alt="car" onClick={() => navigate(BASKET_ROUTE)} className="header__pic" src={carPic}/></div>
                            </div>
                        :
                            <div className="user__container-pic">
                                <img 
                                    alt="profile" className="header__pic" 
                                    src={profilePic}
                                    onClick={() => navigate(LOGIN_ROUTE)}
                                />
                            </div>
                        }
                    </div>
                    <div 
                        onClick={() => 
                            {
                                const menu = document.querySelector('.header__content');
                                menu.classList.add('header__active');
                            }
                        }
                        className="burger"
                    >
                        <div className="burger__wrapper">
                            <span className="burger__line burger__line-1"></span>
                            <span className="burger__line burger__line-2"></span>
                            <span className="burger__line burger__line-3"></span>
                            <span className="burger__line burger__line-4"></span>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
})

export default NavBar;