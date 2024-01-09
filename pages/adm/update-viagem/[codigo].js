import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import styles from '@/styles/Cliente.module.css';
import Head from 'next/head';

export default function UpdateViagem() {
    const [viagem, setViagem] = useState({ id: "", origem: "", destino: "", dataIda: "", dataVolta: "" });
    const router = useRouter();
    const { codigo } = router.query;

    useEffect(() => {
        axios
            .get(`https://localhost:7240/api/Viagem/${viagem.id}`)
            .then((response) => {
                setViagem({
                    ...response.data,
                    dataIda: response.data.dataIda.split('T')[0],
                    dataVolta: response.data.dataVolta.split('T')[0]
                });
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes da viagem:", error);
            });
    }, [codigo]);

    const handleInputChange = (e) => {
        setViagem({ ...viagem, [e.target.name]: e.target.value });
    };

    const handleUpdateViagem = () => {
        axios
            .put("https://localhost:7240/api/Viagem/" + viagem.id, viagem)
            .then((response) => {
                router.push('/adm/viagem');

            })
            .catch((error) => {
                console.error("Erro ao atualizar viagem:", error);
            });
    };

    return (
        <>
            <Head>
                <title>ADM - Atualização de viagens</title>
            </Head>
            <main className={styles.body}>
                <h1 className={`${styles.h1}`}>Atualizar Viagem para: {viagem.destino}</h1>
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
                                                    <label htmlFor="orige">Origem</label>
                                                    <input
                                                        type="hidden"
                                                        name="id"
                                                        value={viagem.id = codigo}
                                                        onChange={handleInputChange}
                                                    />

                                                    <input
                                                        id='orige'
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Origem"
                                                        name="origem"
                                                        value={viagem.origem}
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
                                                        value={viagem.destino}
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
                                                        value={viagem.dataIda}
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
                                                        value={viagem.dataVolta}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="mx-3 py-2">
                                    <button onClick={handleUpdateViagem} type="submit" className="btn btn-primary">
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
