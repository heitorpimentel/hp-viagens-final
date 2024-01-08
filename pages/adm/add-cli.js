import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import styles from '@/styles/Cliente.module.css'
import SideNav from '@/components/SideNav';
import Head from 'next/head'

export default function addCli() {
    const [newClient, setNewClient] = useState({ nome: "", cpf: "", dataNascimento: "", sexo: "", telefone: "", email: "", senha: "" });
    const router = useRouter();

    const handleInputChange = (e) => {
        setNewClient({ ...newClient, [e.target.name]: e.target.value });
    };

    const handleAddClient = () => {
        axios
            .post("https://localhost:7240/api/Clientes", newClient)
            .then((response) => {
                router.push("/adm");
            })
            .catch((error) => {
                alert("Erro ao inserir cliente:" + error);
            });

    };

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
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona o traço nos últimos dígitos
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

    function mostrarSenha() {
        var senha = document.querySelector('#inputSenha')
        senha.type === "password" ? senha.type = 'text' : senha.type = 'password'
    }
    return (
        <>
            <Head>
                <title>ADM - Cadastro de clientes</title>
            </Head>
            <main className={styles.body}>
                <SideNav />
                <h1 className={`${styles.h1}`}>Cadastro de Cliente</h1>
                <div className={`${styles.conteudo} row py-5 container`}>
                    <div className="col-sm-12">
                        <div className="card">
                            <form
                                method='post'
                                action="/adm"
                            >
                                <div className="card-body">
                                    <fieldset>
                                        <legend>Dados Pessoais</legend>
                                        <div className="row my-2">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="nome">Nome</label>
                                                    <input
                                                        id='nome'
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Nome do cliente"
                                                        required="true"
                                                        name="nome"
                                                        value={newClient.nome}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="inputCpf">CPF</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="999.999.999-99"
                                                        id="inputCpf"
                                                        name="cpf"
                                                        minLength={14}
                                                        maxLength={14}
                                                        required={true}
                                                        value={newClient.cpf}
                                                        onKeyUp={formataCPF}
                                                        onChange={(event) => {
                                                            handleInputChange(event);
                                                            formataCPF(event);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <p>Sexo: </p>
                                        <div className="col-sm-12 d-flex ">
                                            <div className="form-check px-3">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="sexo"
                                                    id="gridRadios1"
                                                    value="Masculino"
                                                    required="true"
                                                    checked={newClient.sexo === "Masculino"}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                    Masculino
                                                </label>
                                            </div>
                                            <div className="form-check px-3">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="sexo"
                                                    id="gridRadios2"
                                                    value="Feminino"
                                                    required="true"
                                                    checked={newClient.sexo === "Feminino"}
                                                    onChange={handleInputChange}
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
                                                    value="Outro"
                                                    required="true"
                                                    checked={newClient.sexo === "Outro"}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label" htmlFor="gridRadios3">
                                                    Outro
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row my-2">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="telefone">Telefone</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="(11) 99999-9999"
                                                        id="inputTel"
                                                        onKeyUp={formataTEL}
                                                        minLength={14}
                                                        maxLength={15}
                                                        required={true}
                                                        name="telefone"
                                                        value={newClient.telefone}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="email">E-mail</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="email@exemplo.com"
                                                        required="true"
                                                        name="email"
                                                        value={newClient.email}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row my-2">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        required="true"
                                                        name="dataNascimento"
                                                        value={newClient.dataNascimento}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group ">
                                                    <label htmlFor="senha">Senha</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="inputSenha"
                                                        required="true"
                                                        name="senha"
                                                        value={newClient.senha}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        className="col-1 form-check-input"
                                                        type="checkbox"
                                                        id="verSenha"
                                                        placeholder='Digite a senha'
                                                        onClick={mostrarSenha}
                                                    />
                                                    <label className="col form-check-label" htmlFor="verSenha">
                                                        Mostrar senha
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="row">
                                        <div className="col-sm-12"></div>
                                    </div>
                                </div>
                                <div className="mx-3 py-2">
                                    <button onClick={handleAddClient} type="submit" className="btn btn-primary">
                                        Salvar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}
