import React from "react";
export const Footer =  React.memo(() => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__inner">
                        <ul className="footer__list">
                            <li className="footer__item-title">Site Navigation</li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="#about">About</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="#coins">Crypto</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="#top">Top</a>
                            </li>
                        </ul>
                        <div className="footer__dev">
                            <div className="footer__item-title">Developers contacts</div>
                            <div className="footer__developers-contact" id="contacts">
                                <div className="footer__developer">
                                    <div className="footer__name">
                                        Andrey
                                    </div>
                                    <div className="footer__developer-links">
                                        <a
                                            className="footer__developer-link"
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://github.com/RusinAndrey1607"
                                        >
                                            <svg width="40" height="40" className="footer__developer-habr" viewBox="0 0 40 40" fill="" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="20" r="20" fill="" />
                                                <path d="M3.81372 30.235C6.24836 34.3138 10.0942 37.4526 14.6775 38.9784C15.6781 39.1614 16.0428 38.5438 16.0428 38.0134C16.0428 37.7938 16.0391 37.4058 16.0341 36.8866C16.0284 36.2852 16.021 35.5079 16.0158 34.6124C10.4527 35.8206 9.2789 31.931 9.2789 31.931C8.36911 29.6215 7.05783 29.0064 7.05783 29.0064C5.24194 27.7651 7.19535 27.7896 7.19535 27.7896C9.20277 27.9321 10.2587 29.8511 10.2587 29.8511C12.0426 32.9071 14.9402 32.0243 16.0796 31.5135C16.2613 30.2207 16.777 29.3391 17.3491 28.8394C12.9082 28.3348 8.23896 26.6183 8.23896 18.9545C8.23896 16.7715 9.01861 14.9863 10.298 13.5879C10.0917 13.082 9.40536 11.0488 10.4932 8.29488C10.4932 8.29488 12.1728 7.75711 15.9937 10.3453C17.5885 9.90205 19.3001 9.67982 21.0006 9.67246C22.6986 9.67982 24.4101 9.90205 26.0075 10.3453C29.8259 7.75711 31.5018 8.29488 31.5018 8.29488C32.5933 11.0488 31.907 13.082 31.7007 13.5879C32.9825 14.9863 33.7572 16.7715 33.7572 18.9545C33.7572 26.638 29.0806 28.3286 24.625 28.8234C25.3432 29.441 25.9829 30.6614 25.9829 32.5277C25.9829 34.3152 25.9719 35.8722 25.9646 36.9035C25.961 37.4143 25.9583 37.7962 25.9583 38.0134C25.9583 38.5487 26.3181 39.1712 27.3335 38.976C30.9846 37.7572 34.1673 35.5154 36.5405 32.5903C32.8736 37.1108 27.2742 40 20.9999 40C13.6946 40 7.30402 36.0832 3.81372 30.235Z" fill="#fff" />
                                            </svg>
                                        </a>
                                        <a
                                            className="footer__developer-icon"
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://t.me/AndreyWebDev"
                                        >
                                            <svg
                                                className="footer__developer-telegram"
                                                width="40"
                                                height="40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="20" cy="20" r="20" fill="" />
                                                <path
                                                    className="footer__developer-telegram--1"
                                                    d="M9.3507 20.3741L13.9488 22.0886L15.7413 27.8557C15.8192 28.2454 16.2868 28.3233 16.5985 28.0895L19.1703 25.9853C19.4041 25.7515 19.7938 25.7515 20.1055 25.9853L24.7036 29.3364C25.0154 29.5702 25.483 29.4144 25.5609 29.0247L28.99 12.6587C29.0679 12.269 28.6782 11.8793 28.2886 12.0352L9.3507 19.3609C8.8831 19.5168 8.8831 20.2182 9.3507 20.3741ZM15.5075 21.2313L24.5477 15.6981C24.7036 15.6201 24.8595 15.8539 24.7036 15.9319L17.2999 22.868C17.0661 23.1018 16.8323 23.4135 16.8323 23.8032L16.5985 25.6736C16.5985 25.9074 16.2089 25.9853 16.1309 25.6736L15.1957 22.2445C14.9619 21.8548 15.1178 21.3872 15.5075 21.2313Z"
                                                    fill=""
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="footer__developer">
                                    <div className="footer__name">Eldar</div>
                                    <div className="footer__developer-links">
                                        <a
                                            className="footer__developer-link"
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://github.com/RaymONT-Up"
                                        >
                                            <svg width="40" height="40" className="footer__developer-habr" viewBox="0 0 40 40" fill="" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="20" r="20" fill="" />
                                                <path d="M3.81372 30.235C6.24836 34.3138 10.0942 37.4526 14.6775 38.9784C15.6781 39.1614 16.0428 38.5438 16.0428 38.0134C16.0428 37.7938 16.0391 37.4058 16.0341 36.8866C16.0284 36.2852 16.021 35.5079 16.0158 34.6124C10.4527 35.8206 9.2789 31.931 9.2789 31.931C8.36911 29.6215 7.05783 29.0064 7.05783 29.0064C5.24194 27.7651 7.19535 27.7896 7.19535 27.7896C9.20277 27.9321 10.2587 29.8511 10.2587 29.8511C12.0426 32.9071 14.9402 32.0243 16.0796 31.5135C16.2613 30.2207 16.777 29.3391 17.3491 28.8394C12.9082 28.3348 8.23896 26.6183 8.23896 18.9545C8.23896 16.7715 9.01861 14.9863 10.298 13.5879C10.0917 13.082 9.40536 11.0488 10.4932 8.29488C10.4932 8.29488 12.1728 7.75711 15.9937 10.3453C17.5885 9.90205 19.3001 9.67982 21.0006 9.67246C22.6986 9.67982 24.4101 9.90205 26.0075 10.3453C29.8259 7.75711 31.5018 8.29488 31.5018 8.29488C32.5933 11.0488 31.907 13.082 31.7007 13.5879C32.9825 14.9863 33.7572 16.7715 33.7572 18.9545C33.7572 26.638 29.0806 28.3286 24.625 28.8234C25.3432 29.441 25.9829 30.6614 25.9829 32.5277C25.9829 34.3152 25.9719 35.8722 25.9646 36.9035C25.961 37.4143 25.9583 37.7962 25.9583 38.0134C25.9583 38.5487 26.3181 39.1712 27.3335 38.976C30.9846 37.7572 34.1673 35.5154 36.5405 32.5903C32.8736 37.1108 27.2742 40 20.9999 40C13.6946 40 7.30402 36.0832 3.81372 30.235Z" fill="#fff" />
                                            </svg>
                                        </a>
                                        <a
                                            className="footer__developer-icon"
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://t.me/Raym0NT"
                                        >
                                            <svg
                                                className="footer__developer-telegram"
                                                width="40"
                                                height="40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="20" cy="20" r="20" fill="" />
                                                <path
                                                    className="footer__developer-telegram--1"
                                                    d="M9.3507 20.3741L13.9488 22.0886L15.7413 27.8557C15.8192 28.2454 16.2868 28.3233 16.5985 28.0895L19.1703 25.9853C19.4041 25.7515 19.7938 25.7515 20.1055 25.9853L24.7036 29.3364C25.0154 29.5702 25.483 29.4144 25.5609 29.0247L28.99 12.6587C29.0679 12.269 28.6782 11.8793 28.2886 12.0352L9.3507 19.3609C8.8831 19.5168 8.8831 20.2182 9.3507 20.3741ZM15.5075 21.2313L24.5477 15.6981C24.7036 15.6201 24.8595 15.8539 24.7036 15.9319L17.2999 22.868C17.0661 23.1018 16.8323 23.4135 16.8323 23.8032L16.5985 25.6736C16.5985 25.9074 16.2089 25.9853 16.1309 25.6736L15.1957 22.2445C14.9619 21.8548 15.1178 21.3872 15.5075 21.2313Z"
                                                    fill=""
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <p className="footer__text">
                        This project was developed in order to replenish the portfolio and
                        develop their own skills.
                    </p>
                </div>
            </div>
        </footer>
    )
})