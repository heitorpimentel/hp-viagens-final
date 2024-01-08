import React, { useEffect, useState } from 'react'
import axios from "axios";
import Link from 'next/link';
import style from '@/styles/Cliente.module.css'
import SideNav from '@/components/SideNav';
import Head from 'next/head';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function reserva() {
    const [reservas, setReserva] = useState([]);
 
    useEffect(() => {
      // Faça uma chamada GET para a API Spring Boot
      axios
        .get("https://localhost:7240/api/Reservas")
        .then((response) => {
          setReserva(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar a lista de reservas:", error);
        });
    }, []);

    const handleDeleteReserva = (reservaId) => {
        if (window.confirm('Tem certeza que deseja excluir esta reserva nº ' + reservaId + '?')) {
            axios
                .delete(`https://localhost:7240/api/Reservas/${reservaId}`)
                .then(() => {
                    // Atualiza a lista de reserva após a exclusão bem-sucedida
                    axios.get("https://localhost:7240/api/Reservas")
                        .then((response) => {
                            setReserva(response.data);
                            router.push("/adm"); // Redireciona após a exclusão bem-sucedida
                        })
                        .catch((error) => {
                            console.error("Erro ao buscar a lista de reservas:", error);
                        });
                })
                .catch((error) => {
                    alert("Erro ao excluir reserva: " + error);
                });
        }
    };
    return (
        <div className={style.body}>
            <Head>
                <title>ADM - Reservas</title>
            </Head>
            <SideNav />
            <h1 className={style.h1}>Lista de Reservas</h1>
                <div className={`${style.conteudo} container table-hover table-responsive`}>
                <table className={`mx-3 m-auto table table-striped text-nowrap`}>
                    <thead>
                        <tr className={`${style.tabela} text-center`}>
                            <th>Id</th>
                            <th>Data da Reserva</th>
                            <th>ID do Cliente</th>
                            <th>ID da Viagem</th>
                            <th>ID do Pagamento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {reservas.map((element) => (
                        <tbody key={element.id} className='text-nowrap text-center' >
                            <tr  >
                                <td>{element.id}</td>
                                <td>{format(element.dataReserva, 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}</td>
                                <td>{element.clienteId}</td>
                                <td>{element.viagemId}</td>
                                <td>{element.pagamentoId}</td>
                                <td>
                                    <Link href={`/adm/update-reserva/${element.id}`} className="btn btn-warning"> <i class="bi bi-pencil-square"></i></Link>
                                    <Link href={`/adm/reserva`} className="btn btn btn-danger"
                                    onClick={() => handleDeleteReserva(element.id)}
                                    ><i class="bi bi-trash"></i></Link>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}
