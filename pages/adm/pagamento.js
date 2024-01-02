import React, { useEffect, useState } from 'react'
import axios from "axios";
import Link from 'next/link';
import style from '@/styles/Cliente.module.css'
import SideNav from '@/components/SideNav';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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

    const handleDeletePagamento = (pagamentoId) => {
        if (window.confirm('Tem certeza que deseja excluir esta pagamento nº ' + pagamentoId + '?')) {
            axios
                .delete(`http://localhost:8080/pagamento/${pagamentoId}`)
                .then(() => {
                    // Atualiza a lista de clientes após a exclusão bem-sucedida (opcional)
                    axios.get("http://localhost:8080/pagamento")
                        .then((response) => {
                            setPagamentos(response.data);
                            router.push("/adm/pagamento"); // Redireciona após a exclusão bem-sucedida
                        })
                        .catch((error) => {
                            console.error("Erro ao buscar a lista de pagamentos:", error);
                        });
                })
                .catch((error) => {
                    alert("Erro ao excluir pagamento: " + error);
                });
        }
    };
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
                                <td>{format(new Date(element.dataPagamento + 'T03:00:00Z'), 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}</td>
                                <td>{element.formaPag}</td>
                                <td>{element.parcela}</td>
                                <td>
                                    <Link href={`/adm/update-pagamento/${element.id}`} className="btn btn-warning"> <i class="bi bi-pencil-square"></i></Link>
                                    <Link href={`/adm/pagamento`} className="btn btn btn-danger"
                                    onClick={() => handleDeletePagamento(element.id)}
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