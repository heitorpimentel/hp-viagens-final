import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import styles from '@/styles/Cliente.module.css'
import SideNav from '@/components/SideNav';
import Head from 'next/head'

export default function UpdateReserva() {
    const [reserva, setReserva] = useState({ id: "", dataReserva: "", clienteId: "", pagamentoId: "", viagemId: "" });
    const router = useRouter();
    const { codigo } = router.query;

    useEffect(() => {
        axios
            .get(`http://localhost:8080/reserva/${reserva.id}`)
            .then((response) => {
                setReserva(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes da reserva:", error);
            });
    }, [codigo]);

    const handleInputChange = (e) => {
        setReserva({ ...reserva, [e.target.name]: e.target.value });
    };

    const handleUpdateReserva = () => {
        axios
            .put("http://localhost:8080/reserva/" + reserva.id, reserva)
            .then((response) => {
                router.push('/adm/reserva');

            })
            .catch((error) => {
                console.error("Erro ao atualizar reserva:", error);
            });
    };

    /* Dados para consulta de ID */
    const [cliente, setCliente] = useState([]);
    const [viagem, setViagem] = useState([]);
    const [pagamento, setPagamento] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/cliente")
            .then((response) => {
                setCliente(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de clientes:", error);
            });
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:8080/viagem")
            .then((response) => {
                setViagem(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de viagens:", error);
            });
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:8080/pagamento")
            .then((response) => {
                setPagamento(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de pagamentos:", error);
            });
    }, []);
    return (
        <>
            <Head>
                <title>ADM - Atualização de Reservas</title>
            </Head>
            <main className={styles.body}>
                <SideNav />
                <h1 className={`${styles.h1}`}>Atualizar Reserva nº {reserva.id}</h1>
                <div className={`${styles.conteudo} row py-5 container`}>
                    <div className="col-sm-12">
                        <div className="card">
                            <form
                                method='post'
                                action="/adm/reserva"
                            >
                                <input
                                    type="hidden"
                                    name="id"
                                    value={reserva.id = codigo}
                                    onChange={handleInputChange}
                                />

                                <div className="card-body">
                                    <fieldset>
                                        <legend>Dados para Reserva</legend>
                                        <div className="row my-2">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="dataRes">Data da Reserva</label>
                                                    <input
                                                        id='dataRes'
                                                        type="date"
                                                        className="form-control"
                                                        required={true}
                                                        name="dataReserva"
                                                        value={reserva.dataReserva}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="cliente">Selecione o cliente para consulta de ID</label>
                                                    <select
                                                        id='cliente'
                                                        value={cliente.id}
                                                        className="form-select form-control w-100"
                                                    >
                                                        <option value={''}>--- Consultar Dados ---</option>
                                                        {cliente.map((element) => (
                                                            <option key={element.id} value={element.id}>
                                                                {element.id} - {element.nome}, cpf: {element.cpf}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <label htmlFor="cli">Digite o ID do cliente</label>
                                                    <input
                                                        id='cli'
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Digite o ID"
                                                        name='clienteId'
                                                        required={true}
                                                        value={reserva.clienteId}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row my-2">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="viagem">Selecione a viagem para consulta de ID</label>
                                                    <select
                                                        id='viagem'
                                                        className="form-select form-control w-100"
                                                    >
                                                        <option value={''}>--- Consultar Dados ---</option>
                                                        {viagem.map((element) => (
                                                            <option key={element.id} value={element.id}>
                                                                {element.id} - {element.origem} x {element.destino}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <label htmlFor="viag">Digite o ID da viagem</label>
                                                    <input
                                                        id='viag'
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Digite o ID"
                                                        name='viagemId'
                                                        required={true}
                                                        value={reserva.viagemId}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group ">
                                                    <label htmlFor="pag">Selecione o pagamento para consulta de ID</label>
                                                    <select
                                                        id='pag'
                                                        className="form-select form-control w-100"
                                                    >
                                                        <option value={''}>--- Consultar Dados ---</option>
                                                        {pagamento.map((element) => (
                                                            <option key={element.id} value={element.id}>
                                                                {element.id} - {element.valorPag}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <label htmlFor="pagID">Digite o ID do pagamento</label>
                                                    <input
                                                        id='pagID'
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Digite o ID"
                                                        name='pagamentoId'
                                                        required={true}
                                                        value={reserva.pagamentoId}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className="mx-3 py-2">
                                    <button onClick={handleUpdateReserva} type="submit" className="btn btn-primary">
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
