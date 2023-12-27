import React, {useRef, useEffect} from 'react'
import Head from 'next/head'
import styles from '@/styles/Cadastro.module.css'

export default function cadastro() {
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
    
        /* Máscara de cpf */
    const formataCPF = event => {
        let input = event.target;
        input.value = cpf(input.value);
        };

        const cpf = value => {
        if (!value) return "";
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
        return value;
        };
        /* Máscara de telefone */
        const formataTEL = event => {
        let input = event.target;
        input.value = telefone(input.value);
        };
    
        const telefone = value => {
        if (!value) return "";
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");
        return value;
        };
    return (
        <>
            <Head>
                <title>HP Viagens - Cadastro</title>
            </Head>
            <div className={`${styles.centralizar} ${styles.body}`}>
                <section className={`${styles.login}`}>
                    <section id="formulario">
                        <h1>Cadastro</h1>
                        <p>Seja bem-vindo(a). Faça seu cadastro e aproveite a viagem!</p>
                        <form
                            action="cadastro.php"
                            method="post"
                            autoComplete="on"
                            className="container"
                        >
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputNome">Nome completo</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputNome"
                                        name="nome"
                                        placeholder="Nome completo"
                                        autoFocus ref={autoF}
                                        required="true"
                                    />
                                </div>
                                <div className="col-sm-10 d-flex pb-3">
                                    <div className="form-check pr-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="sexo"
                                            id="gridRadios1"
                                            defaultValue="masculino"
                                            defaultChecked="checked"
                                        />
                                        <label className="form-check-label" htmlFor="gridRadios1">
                                            Masculino
                                        </label>
                                    </div>
                                    <div className="form-check pr-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="sexo"
                                            id="gridRadios2"
                                            defaultValue="feminino"
                                        />
                                        <label className="form-check-label" htmlFor="gridRadios2">
                                            Feminino
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="sexo"
                                            id="gridRadios3"
                                            defaultValue="outro"
                                        />
                                        <label className="form-check-label" htmlFor="gridRadios3">
                                            Outro
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword">Data de nascimento</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="inputPassword"
                                        name="data_nasc"
                                        placeholder="Data de nascimento"
                                        required="true"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCpf">CPF</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCpf"
                                        name="cpf"
                                        placeholder="000.000.000-00"
                                        onChange={formataCPF}
                                        minLength={14}
                                        maxLength={14}
                                        required="true"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputEmail">E-mail</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        id="inputEmail"
                                        placeholder="example@email.com"
                                        required="true"
                                    />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputSenha">Senha</label>
                                    <input
                                        type="password"
                                        name="senha"
                                        className="form-control"
                                        id="inputSenha"
                                        placeholder="Mínimo 8 caracteres"
                                        pattern=".{8,}"
                                        title="Oito ou mais caracteres"
                                        required="true"
                                    />
                                    <div className="col-md-6">
                                        <input
                                            className="col-1 form-check-input"
                                            type="checkbox"
                                            id="verSenha"
                                            onClick={mostrarSenha}
                                        />
                                        <label className="col form-check-label" htmlFor="verSenha">
                                            Mostrar senha
                                        </label>
                                    </div>
                                </div>
                                <div className="row col-md-12 form-group">
                                    <div className="form-group col-4">
                                        <label htmlFor="inputPais">País</label>
                                        <input
                                            type="text"
                                            name="pais"
                                            id="inputPais"
                                            disabled=""
                                            className="form-control"
                                            defaultValue="🇧🇷 +55"
                                        />
                                    </div>
                                    <div className="form-group col-8">
                                        <label htmlFor="inputTel">Telefone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputTel"
                                            placeholder="(xx) xxxxx-xxxx"
                                            onChange={formataTEL}
                                            minLength={14}
                                            maxLength={15}
                                            required="true"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="gridCheck"
                                        required="true"
                                    />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Ao clicar, você aceita os termos e condições de uso.
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="container btn btn-primary">
                                Cadastrar
                            </button>
                        </form>
                    </section>
                </section>
            </div>

        </>
    )
}
