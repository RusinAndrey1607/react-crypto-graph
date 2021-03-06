import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../..";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut, User, } from "firebase/auth";
import { HashLink } from 'react-router-hash-link';



export const Header = React.memo(() => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    const [currentUser, setCurrentUser] = useState({} as User || null )
    const [active, setActive] = useState(false)

    useEffect(() =>{
        // @ts-ignore
        setCurrentUser(auth.currentUser)
    },[user, auth])
    const logout = useCallback(() => {
        signOut(auth)
    }, [auth])
    
    return (
        <header className="header header--fixed">
            <div className="container">
                <div className="header__inner">
                    <Link to="/" className="header__logo">
                        <svg
                            className="header__logo-icon"
                            width="102"
                            height="59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="header__logo-icon--white"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M101.428 5.4917V2.93213L99.1946 4.18304L97.8268 4.94924L97.8048 4.93748L97.7864 4.97187L88.6622 10.083L87.3535 10.8161L88.8197 13.4334L90.1283 12.7004L95.1743 9.87374L75.5488 46.7025L70.9292 21.2289L70.3988 18.3043L68.3612 20.4682L52.1919 37.6399L51.1636 38.7319L53.3477 40.7885L54.376 39.6965L68.5077 24.6888L73.3671 51.4843L74.1371 55.7308L76.1668 51.9221L98.4277 10.1476V17.2917V18.7917H101.428V17.2917V5.4917Z"
                                fill=""
                            />
                            <rect
                                className="header__logo-icon--dark"
                                y="2.94995"
                                width="60.1855"
                                height="56.05"
                                rx="19"
                                fill=""
                            />
                            <path
                                className="header__logo-icon--blue"
                                d="M56.7775 31.0623C56.7775 46.3929 44.098 58.8226 28.4526 58.8248C12.8186 58.8248 0.139093 46.3929 0.141359 31.0601C0.136827 15.7273 12.8163 3.29761 28.4572 3.29761C44.098 3.29761 56.7775 15.7295 56.7775 31.0623V31.0623Z"
                                fill=""
                            />
                            <path
                                className="header__logo-icon--white"
                                d="M39.6008 24.261C39.236 20.5428 35.962 19.2967 31.8246 18.9413V13.7815H28.623V18.8036C27.7824 18.8036 26.9214 18.8191 26.0672 18.8369V13.7815H22.8656L22.8633 18.9369C22.17 18.9502 21.488 18.9635 20.8241 18.9635V18.948L16.408 18.9457V22.2997C16.408 22.2997 18.7735 22.2553 18.7327 22.2975C20.0311 22.2975 20.4525 23.0349 20.5748 23.6724V29.5497C20.6655 29.5497 20.781 29.5541 20.9125 29.5719H20.5748L20.5726 37.8058C20.5159 38.2056 20.2758 38.8431 19.3694 38.8453C19.4102 38.8809 17.0425 38.8453 17.0425 38.8453L16.4058 42.5947H20.5748C21.3498 42.5947 22.1133 42.608 22.861 42.6125L22.8633 47.83H26.0626V42.668C26.9395 42.6858 27.7892 42.6924 28.6207 42.6924L28.6185 47.83H31.8201V42.6236C37.2036 42.3215 40.9762 40.991 41.4429 36.0333C41.8213 32.0418 39.9067 30.2582 36.8501 29.5386C38.7104 28.6146 39.8727 26.982 39.6008 24.261V24.261ZM35.1191 35.4158C35.1191 39.314 28.3103 38.872 26.1374 38.872V31.9574C28.3103 31.9619 35.1191 31.3511 35.1191 35.4158V35.4158ZM33.6282 25.6626C33.6282 29.2098 27.9455 28.7945 26.1374 28.7967V22.5285C27.9478 22.5285 33.6304 21.9643 33.6282 25.6626Z"
                                fill=""
                            />
                            <path
                                className="header__logo-icon-dark"
                                d="M20.5825 29.4111H21.0583V29.7554H20.5825V29.4111Z"
                                fill=""
                            />
                        </svg>
                    </Link>

                    <div className={`header__content ${active ? "active" : ''}`}>
                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__item">
                                    <HashLink smooth className="header__link" to='/#about' >About</HashLink>
                                </li>
                                <li className="header__item">
                                    <HashLink to="/crypto" className="header__link">Crypto</HashLink>
                                </li>
                                <li className="header__item">
                                    <Link  to="/dashboard?coin=Bitcoin&id=bitcoin" className="header__link">Message</Link>
                                </li>
                            </ul>
                        </nav>

                        {
                            currentUser?.emailVerified
                                ?
                                <div className="header__user">
                                    <span className="user_name">{currentUser.displayName}</span>
                                    {/* @ts-ignore */}
                                    <img src={currentUser.photoURL} alt="ava" className="user_icon" />
                                    <button onClick={logout} className="btn">LogOut</button>
                                </div>
                                :
                                <div className="header__user">
                                    <Link className="header__user-login" to="/login">Login</Link>
                                    <Link className="header__user-register btn" to="/registration">Register</Link>
                                </div>
                        }
                    </div>
                    <div className={`header__burger burger ${active ? "active" : ''}`} onClick={() => setActive(!active)}>
                        <div className="burger__line burger__line--1"></div>
                        <div className="burger__line burger__line--2"></div>
                        <div className="burger__line burger__line--3"></div>
                        <div className="burger__line burger__line--4"></div>
                    </div>
                </div>
            </div>
        </header>
    )
})

