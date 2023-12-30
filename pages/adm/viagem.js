import React, { useEffect, useState } from 'react'
import axios from "axios";
import Link from 'next/link';
import style from '@/styles/Cliente.module.css'
import SideNav from '@/components/SideNav';

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
    return (
        <div className={style.body}>
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
                            <th>Ações</th> {/* Adicione uma coluna para as ações de edição e exclusão */}
                        </tr>
                    </thead>
                    {viagem.map((element) => (
                        <tbody key={element.id}>
                            <tr className='text-nowrap text-center' >
                                <td>{element.id}</td>
                                <td>{element.origem}</td>
                                <td>{element.destino}</td>
                                <td>{element.dataIda}</td>
                                <td>{element.dataVolta}</td>
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
