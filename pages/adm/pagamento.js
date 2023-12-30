import React, { useEffect, useState } from 'react'
import axios from "axios";
import Link from 'next/link';
import style from '@/styles/Cliente.module.css'
import SideNav from '@/components/SideNav';

export default function pagamento() {
    const [pagamentos, setPagamentos] = useState([]);
 
    useEffect(() => {
      // Faça uma chamada GET para a API Spring Boot
      axios
        .get("http://localhost:8080/pagamento")
        .then((response) => {
          setPagamentos(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar a lista de pagamentos:", error);
        });
    }, []);
    return (
        <div className={style.body}>
            <SideNav />
            <h1 className={style.h1}>Lista de Pagamentos</h1>
                <div className={`${style.conteudo} container table-responsive`}>
                <table className={`mx-3 m-auto table table-hover table-striped text-nowrap`}>
                    <thead>
                        <tr className={`${style.tabela} text-center`}>
                            <th>Id</th>
                            <th>Valor</th>
                            <th>Data do Pagamento</th>
                            <th>Forma de Pagamento</th>
                            <th>Qt de Parcelas</th>
                            <th>Ações</th> {/* Adicione uma coluna para as ações de edição e exclusão */}
                        </tr>
                    </thead>
                    {pagamentos.map((element) => (
                        <tbody key={element.id}>
                            <tr className='text-nowrap text-center' >
                                <td>{element.id}</td>
                                <td>{element.valorPag}</td>
                                <td>{element.dataPagamento}</td>
                                <td>{element.formaPag}</td>
                                <td>{element.parcela}</td>
                                <td>
                                    <Link href={`/update-client/${element.id}`} className="btn btn-warning"> <i class="bi bi-pencil-square"></i></Link>
                                    <Link href={`/delete-client/${element.id}`} className="btn btn btn-danger"> <i class="bi bi-trash"></i></Link>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}
