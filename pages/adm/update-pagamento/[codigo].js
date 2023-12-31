import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import styles from '@/styles/Cliente.module.css'
import Head from 'next/head'

export default function UpdatePagamento() {
    const [pagamento, setPagamento] = useState({ id: "", valorPag: "", dataPagamento: "", formaPag: "", parcela: "" });
    const router = useRouter();
    const { codigo } = router.query;

    useEffect(() => {
        axios
            .get(`https://localhost:7240/api/Pagamentos/${pagamento.id}`)
            .then((response) => {
                setPagamento({
                    ...response.data,
                    dataPagamento: response.data.dataPagamento.split('T')[0]
                });
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes da pagamento:", error);
            });
    }, [codigo]);

    const handleInputChange = (e) => {
        setPagamento({ ...pagamento, [e.target.name]: e.target.value });
    };

    const handleUpdatePagamento = () => {
        axios
            .put("https://localhost:7240/api/Pagamentos/" + pagamento.id, pagamento)
            .then((response) => {
                router.push('/adm/pagamento');

            })
            .catch((error) => {
                console.error("Erro ao atualizar pagamento:", error);
            });
    };

    return (
        <>
            <Head>
                <title>ADM - Atualização de pagamentos</title>
            </Head>
            <main className={styles.body}>
                <h1 className={`${styles.h1}`}>Atualizar pagamento nº: {pagamento.id}</h1>
                <div className={`${styles.conteudo} row py-5 container`}>
                    <div className="col-sm-12">
                        <div className="card">
                            <form
                                method='post'
                                action="/adm/pagamento"
                            >
                                <div className="card-body">
                                    <fieldset>
                                        <legend>Dados da pagamento</legend>
                                        <div className="row my-2">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <input
                                                        type="hidden"
                                                        name="id"
                                                        value={pagamento.id = codigo}
                                                        onChange={handleInputChange}
                                                    />

                                                    <label htmlFor="valorPag">Valor do pagamento</label>
                                                    <input
                                                        id='valorPag'
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Digite o valor"
                                                        name="valorPag"
                                                        required={true}
                                                        value={pagamento.valorPag}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="dataPag">Data do pagamento</label>
                                                    <input
                                                        id='dataPag'
                                                        type="date"
                                                        className="form-control"
                                                        required={true}
                                                        name="dataPagamento"
                                                        value={pagamento.dataPagamento}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row my-2">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="formaPag">Forma de Pagamento</label>
                                                    <select id='formaPag' name='formaPag' required={true} value={pagamento.formaPag} onChange={handleInputChange} className="form-select form-control w-100">
                                                        <option value='À vista'>À vista</option>
                                                        <option value='Cartão'>Cartão</option>
                                                        <option value='Pix'>Pix</option>
                                                        <option value='Boleto'>Boleto</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group ">
                                                    <label htmlFor="parcela">Quantidade de parcelas</label>
                                                    <select id='parcela' name='parcela' required={true} value={pagamento.parcela} onChange={handleInputChange} className="form-select form-control w-100">
                                                        <option value='1'>1x</option>
                                                        <option value='2'>2x</option>
                                                        <option value='3'>3x</option>
                                                        <option value='4'>4x</option>
                                                        <option value='5'>5x</option>
                                                        <option value='6'>6x</option>
                                                        <option value='7'>7x</option>
                                                        <option value='8'>8x</option>
                                                        <option value='9'>9x</option>
                                                        <option value='10'>10x</option>
                                                        <option value='11'>11x</option>
                                                        <option value='12'>12x</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="mx-3 py-2">
                                    <button onClick={handleUpdatePagamento} type="submit" className="btn btn-primary">
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
