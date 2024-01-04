import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import styles from '@/styles/Cliente.module.css'
import SideNav from '@/components/SideNav';
import Head from 'next/head'

export default function addRes() {
  const [newReserva, setNewReserva] = useState({ dataReserva: "", clienteId: "", pagamentoId: "", viagemId: "" });
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewReserva({ ...newReserva, [e.target.name]: e.target.value });
  };

  const handleAddReserva = () => {
    axios
      .post("http://localhost:8080/reserva/salvarReserva", newReserva)
      .then((response) => {
        router.push("/adm/reserva");
      })
      .catch((error) => {
        alert("Erro ao inserir reserva:" + error);
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
        <title>ADM - Cadastro de reservas</title>
      </Head>
      <main className={styles.body}>
        <SideNav />
        <h1 className={`${styles.h1}`}>Cadastro de Reserva</h1>
        <div className={`${styles.conteudo} row py-5 container`}>
          <div className="col-sm-12">
            <div className="card">
              <form
                method='post'
                action="/adm/reserva"
              >

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
                            value={newReserva.dataReserva}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="cliente">Selecione o cliente para consulta de ID</label>
                          <select
                            id='cliente'

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
                            value={newReserva.clienteId}
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
                            value={newReserva.viagemId}
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
                            value={newReserva.pagamentoId}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="mx-3 py-2">
                  <button onClick={handleAddReserva} type="submit" className="btn btn-primary">
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
