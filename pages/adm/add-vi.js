import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import styles from '@/styles/Cliente.module.css'
import Head from 'next/head'

export default function addVi() {
    const [newViagem, setNewViagem] = useState({ origem: "", destino: "", dataIda: "", dataVolta: "" });
    const router = useRouter();

    const handleInputChange = (e) => {
        setNewViagem({ ...newViagem, [e.target.name]: e.target.value });
    };

    const handleAddViagem = () => {
        axios
            .post("https://localhost:7240/api/Viagem", newViagem)
            .then((response) => {
                router.push("/adm/viagem");
            })
            .catch((error) => {
                alert("Erro ao inserir viagem:" + error);
            });

    };
    return (
        <>
            <Head>
                <title>ADM - Cadastro de viagens</title>
            </Head>
            <main className={styles.body}>
                <h1 className={`${styles.h1}`}>Cadastro de Viagem</h1>
                <div className={`${styles.conteudo} row py-5 container`}>
                    <div className="col-sm-12">
                        <div className="card">
                            <form
                                method='post'
                                action="/adm/viagem"
                            >
                                <div className="card-body">
                                    <fieldset>
                                        <legend>Dados da viagem</legend>
                                        <div className="row my-2">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="origem">Origem</label>
                                                    <input
                                                        id='origem'
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Origem"
                                                        name="origem"
                                                        value={newViagem.origem}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="destino">Destino</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Destino"
                                                        id="destino"
                                                        name="destino"
                                                        required={true}
                                                        value={newViagem.destino}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row my-2">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="dataIda">Data de Ida</label>
                                                    <input
                                                        id='dataIda'
                                                        type="date"
                                                        className="form-control"
                                                        required={true}
                                                        name="dataIda"
                                                        value={newViagem.dataIda}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group ">
                                                    <label htmlFor="dataVolta">Data de Volta</label>
                                                    <input
                                                        id='dataVolta'
                                                        type="date"
                                                        className="form-control"
                                                        name="dataVolta"
                                                        value={newViagem.dataVolta}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="mx-3 py-2">
                                    <button onClick={handleAddViagem} type="submit" className="btn btn-primary">
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
