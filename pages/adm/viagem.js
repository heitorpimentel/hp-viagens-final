import React, { useEffect, useState } from 'react'
import axios from "axios";
import Link from 'next/link';
import style from '@/styles/Cliente.module.css'
import SideNav from '@/components/SideNav';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Head from 'next/head'

export default function viagem() {
    const [viagem, setViagem] = useState([]);
 
    useEffect(() => {
      // Faça uma chamada GET para a API Spring Boot
      axios
        .get("http://localhost:8080/viagem")
        .then((response) => {
          setViagem(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar a lista de viagens:", error);
        });
    }, []);

    const handleDeleteViagem = (viagemId) => {
        if (window.confirm('Tem certeza que deseja excluir esta viagem nº ' + viagemId + '?')) {
            axios
                .delete(`http://localhost:8080/viagem/${viagemId}`)
                .then(() => {
                    // Atualiza a lista de clientes após a exclusão bem-sucedida (opcional)
                    axios.get("http://localhost:8080/viagem")
                        .then((response) => {
                            setViagem(response.data);
                            router.push("/adm/viagem"); // Redireciona após a exclusão bem-sucedida
                        })
                        .catch((error) => {
                            console.error("Erro ao buscar a lista de viagens:", error);
                        });
                })
                .catch((error) => {
                    alert("Erro ao excluir viagem: " + error);
                });
        }
    };
    return (
        <div className={style.body}>
            <Head>
                <title>ADM - Viagens</title>
            </Head>
            <SideNav />
            <h1 className={style.h1}>Lista de Viagens</h1>
                <div className={`${style.conteudo} container table-responsive`}>
                <table className={`mx-3 m-auto table table-hover table-striped text-nowrap`}>
                    <thead>
                        <tr className={`${style.tabela} text-center`}>
                            <th>Id</th>
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>Data de Ida</th>
                            <th>Data de Volta</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {viagem.map((element) => (
                        <tbody key={element.id}>
                            <tr className='text-nowrap text-center' >
                                <td>{element.id}</td>
                                <td>{element.origem}</td>
                                <td>{element.destino}</td>
                                <td>{format(new Date(element.dataIda + 'T03:00:00Z'), 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}</td>
                                <td>{format(new Date(element.dataVolta  === null ? '-' : element.dataVolta + 'T03:00:00Z'), 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}</td>
                                <td>
                                    <Link href={`/adm/update-viagem/${element.id}`} className="btn btn-warning"> <i class="bi bi-pencil-square"></i></Link>
                                    <Link href={`/adm/viagem`} className="btn btn btn-danger"
                                    onClick={() => handleDeleteViagem(element.id)}
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
