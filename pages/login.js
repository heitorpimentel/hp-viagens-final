import React, {useRef, useEffect} from 'react'
import Head from 'next/head'
import styles from '@/styles/Login.module.css'

export default function login() {
    function mostrarSenha(){
        var senha = document.querySelector('#inputSenha')
        if(senha.type === "password"){
            senha.type = "text"
        } else if (senha.type === "text"){
            senha.type = "password";
        }
    }
    /* Autofocus */
    const autoF = useRef(null);
    useEffect(() =>{
    autoF.current.focus();
    }, []);
    return (
        <>
            <Head>
                <title>HP Viagens - Login</title>
            </Head>
            <div className={`${styles.body}`}>
                <section className={`${styles.login}`}>
                    <section className={`${styles.imagem}`}>
                        <picture>
                            <source
                                media="(min-width: 992px)"
                                srcSet="imagens/HV.png"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </picture>
                    </section>
                    <section className={`${styles.formulario}`}>
                        <h1 className={`${styles.h1}`}>Login</h1>
                        <p className={`${styles.p}`}>
                            Seja bem-vindo(a). Faça o login para acessar sua conta e fazer sua viagem.{" "}
                            <br /> Ainda não é nosso cliente? <a href="/cadastro">Cadastre-se</a>
                            &gt;
                        </p>
                        <form method="post" autoComplete="on" action='/adm'>
                            <p className={`${styles.p} ${styles.emailSenha} m-0`}>
                                <label htmlFor="iemail">
                                    <span className={` ${styles.span} material-symbols-rounded fundo-ico`}>login</span>
                                </label>
                                <input
                                    className={`${styles.input}`}
                                    type="email"
                                    name="email"
                                    id="iemail"
                                    required="true"
                                    autoComplete="username"
                                    size={12}
                                    placeholder="Seu e-mail"
                                    autoFocus ref={autoF}
                                />
                            </p>
                            <p className={`${styles.p} ${styles.emailSenha} my-1`}>
                                <label htmlFor="inputSenha">
                                    <span className={` ${styles.span} material-symbols-rounded fundo-ico`}>key</span>
                                </label>
                                <input
                                    className={`${styles.input}`}
                                    type="password"
                                    name="senha"
                                    id="inputSenha"
                                    required="true"
                                    minLength={6}
                                    autoComplete="current-password"
                                    size={12}
                                    placeholder="Sua senha"
                                />
                            </p>
                            <div className="col-md-6">
                                <input
                                    className='col-1 form-check-input'
                                    type="checkbox"
                                    id="verSenha"
                                    onClick={mostrarSenha}
                                />
                                <label className="col form-check-label" htmlFor="verSenha">
                                    Mostrar senha
                                </label>
                            </div>
                            <p className={`${styles.p}`}>
                                <input type="submit" defaultValue="Entrar" className={`${styles.entrar}`} />
                                <br />
                                <a href="esqueci.html">
                                    <input
                                        type="button"
                                        defaultValue="Esqueci a senha"
                                        className={`${styles.esqueciSenha}`}
                                    />
                                </a>
                            </p>
                        </form>
                    </section>
                </section>
            </div>

        </>
    )
}
