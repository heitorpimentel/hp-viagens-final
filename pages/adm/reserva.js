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
        .get("http://localhost:8080/reserva")
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
                .delete(`http://localhost:8080/reserva/${reservaId}`)
                .then(() => {
                    // Atualiza a lista de reserva após a exclusão bem-sucedida
                    axios.get("http://localhost:8080/cliente")
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
    const formatarValorParaReal = (valor) => {
        return parseFloat(valor).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
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
                            <th>Nome do Cliente</th>
                            <th>CPF</th>
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {reservas.map((element) => (
                        <tbody key={element.id} className='text-nowrap text-center' >
                            <tr  >
                                <td>{element.id}</td>
                                <td>{format(new Date(element.dataReserva + 'T03:00:00Z'), 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}</td>
                                <td>{element.cliente.nome}</td>
                                <td>{element.cliente.cpf}</td>
                                <td>{element.viagem.origem}</td>
                                <td>{element.viagem.destino}</td>
                                <td className='text-left'>{formatarValorParaReal(element.pagamento.valorPag)}</td>
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
