import React, { useEffect, useState } from 'react'
import axios from "axios";
import Link from 'next/link';
import style from '@/styles/Cliente.module.css'
import SideNav from '@/components/SideNav';

export default function index() {
    const [clients, setClients] = useState([]);
 
    useEffect(() => {
      // Faça uma chamada GET para a API Spring Boot
      axios
        .get("http://localhost:8080/cliente")
        .then((response) => {
          setClients(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar a lista de clientes:", error);
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
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Data de nascimento</th>
                            <th>Telefone</th>
                            <th>Sexo</th>
                            <th>Email</th>
                            <th>Ações</th> {/* Adicione uma coluna para as ações de edição e exclusão */}
                        </tr>
                    </thead>
                    {clients.map((element) => (
                        <tbody key={element.id}>
                            <tr className='text-nowrap' >
                                <td>{element.id}</td>
                                <td>{element.nome}</td>
                                <td>{element.cpf}</td>
                                <td>{element.dataNascimento}</td>
                                <td>{element.telefone}</td>
                                <td>{element.sexo}</td>
                                <td>{element.email}</td>
                                <td className='text-center'>
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
