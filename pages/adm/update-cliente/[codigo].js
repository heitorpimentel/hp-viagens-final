import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import styles from '@/styles/Cliente.module.css';
import Head from 'next/head';

export default function UpdateCliente() {
    const [client, setClient] = useState({ id: "", nome: "", cpf: "", dataNascimento: "", sexo: "", telefone: "", email: "", senha: "" });
    const router = useRouter();
    const { codigo } = router.query;

    useEffect(() => {
        axios
            .get(`https://localhost:7240/api/Clientes/${client.id}`)
            .then((response) => {
                setClient({
                    ...response.data,
                    dataNascimento: response.data.dataNascimento.split('T')[0]
                });
                
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do cliente:", error);
            });
    }, [codigo]);

    const handleInputChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    const handleUpdateClient = () => {
        axios
            .put(`https://localhost:7240/api/Clientes/${client.id}`, client)
            .then((response) => {
                router.push('/adm');

            })
            .catch((error) => {
                console.error("Erro ao atualizar cliente:", error);
            });
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
                <title>ADM - Atualização de clientes</title>
            </Head>
            <main className={styles.body}>
                <h1 className={`${styles.h1}`}>Atualizar Cliente: {client.nome}</h1>
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
                                                        type="hidden"
                                                        name="id"
                                                        value={client.id = codigo}
                                                        onChange={handleInputChange}
                                                    />
                                                    <input
                                                        id='nome'
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Nome do cliente"
                                                        required="true"
                                                        name="nome"
                                                        value={client.nome}
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
                                                        readOnly={true}
                                                        minLength={14}
                                                        maxLength={14}
                                                        required={true}
                                                        value={client.cpf}
                                                        onChange={handleInputChange}
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
                                                    checked={client.sexo === "Masculino"}
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
                                                    checked={client.sexo === "Feminino"}
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
                                                    checked={client.sexo === "Outro"}
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
                                                        value={client.telefone}
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
                                                        value={client.email}
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
                                                        value={client.dataNascimento}
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
                                                        value={client.senha}
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
                                    <button onClick={handleUpdateClient} type="submit" className="btn btn-primary">
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
