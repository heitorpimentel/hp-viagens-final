import React, { useEffect, useState } from 'react'
import axios from "axios";
import Link from 'next/link';
import style from '@/styles/Cliente.module.css'
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Head from 'next/head'

export default function index() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        // Faça uma chamada GET para a API
        axios
            .get("https://localhost:7240/api/Clientes")
            .then((response) => {
                setClients(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de clientes:", error);
            });
    }, []);

    const handleDeleteClient = (clientId) => {
        if (window.confirm('Tem certeza que deseja excluir este cliente ' + clientId + '?')) {
            axios
                .delete(`https://localhost:7240/api/Clientes/${clientId}`)
                .then(() => {
                    // Atualiza a lista de clientes após a exclusão bem-sucedida
                    axios.get("https://localhost:7240/api/Clientes")
                        .then((response) => {
                            setClients(response.data);
                            router.push("/adm"); // Redireciona após a exclusão bem-sucedida
                        })
                        .catch((error) => {
                            console.error("Erro ao buscar a lista de clientes:", error);
                        });
                })
                .catch((error) => {
                    alert("Erro ao excluir cliente: " + error);
                });
        }
    };
    return (
        <div className={style.body}>
            <Head>
                <title>ADM - Home</title>
            </Head>
            
            <h1 className={style.h1}>Lista de Clientes</h1>
            <div className={`${style.conteudo} container table-responsive`}>
                <table className={`m-auto table table-hover table-striped text-nowrap`}>
                    <thead>
                        <tr className={`${style.tabela} text-center`}>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Data de nascimento</th>
                            <th>Telefone</th>
                            <th>Sexo</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {clients.map((element) => (
                        <tbody key={element.id}>
                            <tr className='text-nowrap text-center ' >
                                <td>{element.id}</td>
                                <td>{element.nome}</td>
                                <td>{element.cpf}</td>
                                <td>{format(element.dataNascimento, 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}</td>
                                <td>{element.telefone}</td>
                                <td>{element.sexo}</td>
                                <td>{element.email}</td>
                                <td>
                                    <Link href={`/adm/update-cliente/${element.id}`} className="btn btn-warning"> <i class="bi bi-pencil-square"></i></Link>
                                    <Link href={`/adm`} className="btn btn btn-danger"
                                        onClick={() => handleDeleteClient(element.id)}
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
