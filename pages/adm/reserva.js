import React, { useEffect, useState } from 'react'
import axios from "axios";
import Link from 'next/link';
import style from '@/styles/Cliente.module.css'
import SideNav from '@/components/SideNav';

export default function reserva() {
    const [reservas, setReserva] = useState([]);
 
    useEffect(() => {
      // Faça uma chamada GET para a API Spring Boot
      axios
        .get("http://localhost:8080/reserva")
        .then((response) => {
          setReserva(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar a lista de reservas:", error);
        });
    }, []);
    return (
        <div className={style.body}>
            <SideNav />
            <h1 className={style.h1}>Lista de Clientes</h1>
                <div className={`${style.conteudo} container table-responsive`}>
                <table className={`mx-3 m-auto table table-hover table-striped text-nowrap`}>
                    <thead>
                        <tr className={`${style.tabela} text-center`}>
                            <th>Id</th>
                            <th>Data da reserva</th>
                            <th>Nome do Cliente</th>
                            <th>CPF</th>
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>Valor</th>
                            <th>Ações</th> {/* Adicione uma coluna para as ações de edição e exclusão */}
                        </tr>
                    </thead>
                    {reservas.map((element) => (
                        <tbody key={element.id}>
                            <tr className='text-nowrap text-center' >
                                <td>{element.id}</td>
                                <td>{element.dataReserva}</td>
                                <td>{element.cliente.nome}</td>
                                <td>{element.cliente.cpf}</td>
                                <td>{element.viagem.origem}</td>
                                <td>{element.viagem.destino}</td>
                                <td>{element.pagamento.valorPag}</td>
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
