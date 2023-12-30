import React, { useState } from 'react'
import styles from '../styles/SideNav.module.css'

export default function SideNav() {
    const [larguraNavigation, setLarguraNavigation] = useState('60px');

    const toggleMenu = () => {
        const novaLargura = larguraNavigation === '280px' ? '60px' : '280px';
        setLarguraNavigation(novaLargura);
    };

    function giro1() {
        document.getElementById("seta1").classList.toggle('giro');
    }
    function giro2() {
        document.getElementById("seta2").classList.toggle('giro');
    }
    function giro3() {
        document.getElementById("seta3").classList.toggle('giro');
    }
    function giro4() {
        document.getElementById("seta4").classList.toggle('giro');
    }
    return (
        <>
            <div>
                <div className={`${styles.toggle} ${styles.iconNav} ${styles.navigation}  fixed-top`} onClick={toggleMenu} style={{ width: larguraNavigation }}>
                    <i className="bi bi-list text-center text-white " />
                </div>
                <div className={`${styles.navigation} fixed-bottom`} style={{ width: larguraNavigation }}>
                    <ul className={`${styles.ul}`}>
                        <li className={`${styles.li}`}>
                            <a className={`${styles.a}`} href="/adm">
                                <span className={`${styles.icon}`}>
                                    <i className="bi bi-house-door" />
                                </span>
                                <span className={`${styles.title}`} id="link1">
                                    Home
                                </span>
                            </a>
                        </li>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <li className={`${styles.li}`}>
                                <a className={`${styles.a}`} href="#">
                                    <span className={`${styles.icon}`}>
                                        <i className="bi bi-people-fill" />
                                    </span>
                                    <span className={`${styles.title}`}>Alunos</span>
                                    <span
                                        id="seta1"
                                        className={`${styles.icon} ${styles.seta} ${styles.title} d-inline-flex`}
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="false"
                                        aria-controls="collapseOne"
                                        onClick={giro1}
                                    >
                                        <i

                                            className={`${styles.biChevronRight} bi bi-chevron-right text-white`}
                                        />
                                    </span>
                                </a>
                                <p
                                    id="collapseOne"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <a className={`${styles.a}`} href="#"></a>
                                    <a className={`${styles.a}`} href="/">
                                        <span className={`${styles.icon} ${styles.item}`}>
                                            <i className="bi bi-list-ul" /></span>
                                        <span className={`${styles.title}`}>Listar</span>
                                    </a>
                                    <a className={`${styles.a}`} href="/">
                                        <span className={`${styles.icon} ${styles.item}`}>
                                            <i className="bi bi-pencil-square" />
                                        </span>
                                        <span className={`${styles.title}`}>Cadastrar</span>
                                    </a>
                                </p>
                            </li>
                            <li className={`${styles.li}`}>
                                <a className={`${styles.a}`} href="#">
                                    <span className={`${styles.icon}`}>
                                        <i className="bi bi-people-fill" />
                                    </span>
                                    <span className={`${styles.title}`}>Alunos</span>
                                    <span
                                        id="seta2"
                                        className={`${styles.icon} ${styles.seta} ${styles.title} d-inline-flex`}
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                        onClick={giro2}
                                    >
                                        <i

                                            className={`${styles.biChevronRight} bi bi-chevron-right text-white`}
                                        />
                                    </span>
                                </a>
                                <p
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <a className={`${styles.a}`} href="#"></a>
                                    <a className={`${styles.a}`} href="/">
                                        <span className={`${styles.icon} ${styles.item}`}>
                                            <i className="bi bi-list-ul" />
                                        </span>
                                        <span className={`${styles.title}`}>Listar</span>
                                    </a>
                                    <a className={`${styles.a}`} href="/">
                                        <span className={`${styles.icon} ${styles.item}`}>
                                            <i className="bi bi-pencil-square" />
                                        </span>
                                        <span className={`${styles.title}`}>Cadastrar</span>
                                    </a>
                                </p>
                            </li>
                            <li className={`${styles.li}`}>
                                <a className={`${styles.a}`} href="#">
                                    <span className={`${styles.icon}`}>
                                        <i className="bi bi-people-fill" />
                                    </span>
                                    <span className={`${styles.title}`}>Alunos</span>
                                    <span
                                        id="seta3"
                                        className={`${styles.icon} ${styles.seta} ${styles.title} d-inline-flex`}
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                        onClick={giro3}
                                    >
                                        <i

                                            className={`${styles.biChevronRight} bi bi-chevron-right text-white`}
                                        />
                                    </span>
                                </a>
                                <p
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <a className={`${styles.a}`} href="#"></a>
                                    <a className={`${styles.a}`} href="/">
                                        <span className={`${styles.icon} ${styles.item}`}>
                                            <i className="bi bi-list-ul" />
                                        </span>
                                        <span className={`${styles.title}`}>Listar</span>
                                    </a>
                                    <a className={`${styles.a}`} href="/">
                                        <span className={`${styles.icon} ${styles.item}`}>
                                            <i className="bi bi-pencil-square" />
                                        </span>
                                        <span className={`${styles.title}`}>Cadastrar</span>
                                    </a>
                                </p>
                            </li>
                            <li className={`${styles.li}`}>
                                <a className={`${styles.a}`} href="#">
                                    <span className={`${styles.icon}`}>
                                        <i className="bi bi-people-fill" />
                                    </span>
                                    <span className={`${styles.title}`}>Alunos</span>
                                    <span
                                        id="seta4"
                                        className={`${styles.icon} ${styles.seta} ${styles.title} d-inline-flex`}
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                        onClick={giro4}
                                    >
                                        <i

                                            className={`${styles.biChevronRight} bi bi-chevron-right text-white`}
                                        />
                                    </span>
                                </a>
                                <p
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <a className={`${styles.a}`} href="#"></a>
                                    <a className={`${styles.a}`} href="/">
                                        <span className={`${styles.icon} ${styles.item}`}>
                                            <i className="bi bi-list-ul" />
                                        </span>
                                        <span className={`${styles.title}`}>Listar</span>
                                    </a>
                                    <a className={`${styles.a}`} href="/">
                                        <span className={`${styles.icon} ${styles.item}`}>
                                            <i className="bi bi-pencil-square" />
                                        </span>
                                        <span className={`${styles.title}`}>Cadastrar</span>
                                    </a>
                                </p>
                            </li>
                        </div>
                        <li className={`${styles.li}`}>
                            <a className={`${styles.a}`} href="/">
                                <span className={`${styles.icon}`}>
                                    <i className="bi bi-box-arrow-left" />
                                </span>
                                <span className={`${styles.title}`}>Sair</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
