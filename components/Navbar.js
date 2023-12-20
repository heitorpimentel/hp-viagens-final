import React from 'react';
import style from '@/styles/Navbar.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Navbar() {
    const router = useRouter();
    return (
        <>
            <nav className={` ${style.naveg} navbar navbar-expand-md navbar-dark p-0 sticky-top `}>
                <div className="container">
                    <a className={` ${style.navbarBrand} navbar-brand pl-2`} href="#">
                        <div className="imagem-nav">
                            <img
                                src="imagens/imagem-logo.jpg"
                                alt="Imagem da Logo da página na barra de navegação"
                                style={{ width: 130, height: 60 }}
                            />
                        </div>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Alterna navegação"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse flex-wrap justify-content-center"
                        id="navbarNavAltMarkup"
                    >
                        <div className={`${style.navbarNav} navbar-nav text-center`}>
                            <Link className={`${style.a} ${style.navLink} ${style.navItem} ${router.pathname === '/' ? 'active' : ''} nav-item nav-link`} href="/" title="Vôos">
                                <span className={`${style.fundoIcon} material-symbols-rounded`}>
                                    flight_takeoff
                                </span>
                                <br />
                                Vôos
                            </Link>
                            <Link
                                className={`${style.navLink} ${style.navItem} ${router.pathname === '/hoteis' ? 'active' : ''} nav-item nav-link`}
                                href="/hoteis"
                                title="Hoteis"
                            >
                                <span className={`${style.fundoIcon} material-symbols-rounded`}>luggage</span>
                                <br />
                                Hotéis
                            </Link>
                            <Link
                                className={`${style.navLink} ${style.navItem} ${router.pathname === '/onibus' ? 'active' : ''} nav-item nav-link`}
                                href="/onibus"
                                title="Passagens de Onibus"
                            >
                                <span className={`${style.fundoIcon} material-symbols-rounded`}>
                                    directions_bus
                                </span>
                                <br />
                                Ônibus
                            </Link>
                            <Link
                                className={`${style.navLink} ${style.navItem} ${router.pathname === '/promocoes' ? 'active' : ''} nav-item nav-link`}
                                href="/promocoes"
                                title="Promoções"
                            >
                                <span className={`${style.fundoIcon} material-symbols-rounded`}>sell</span>
                                <br />
                                Promoções
                            </Link>
                            <Link
                                className={`${style.navLink} ${style.navItem} ${router.pathname === '/contato' ? 'active' : ''} nav-item nav-link`}
                                href="/contato"
                                title="Fale conosco"
                            >
                                <span className={`${style.fundoIcon} material-symbols-rounded`}>
                                    contact_support
                                </span>
                                <br />
                                Contato
                            </Link>
                            <ul className=" nav justify-content-center">
                                <li className="nav-item dropdown text-center">
                                    <Link
                                        className={`${style.navLink} ${style.navItem} nav-item nav-link dropdown-toggle`}
                                        data-toggle="dropdown"
                                        href="#"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        title="Entre ou Cadastre-se"
                                    >
                                        <span className={`${style.fundoIcon} material-symbols-rounded`}>
                                            account_circle
                                        </span>
                                        <br /> Login
                                    </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="/login">
                                            Entrar
                                        </Link>
                                        <Link className="dropdown-item" href="/cadastro">
                                            Cadastre-se
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
