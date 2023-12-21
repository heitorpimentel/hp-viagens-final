import React from 'react'
import style from '@/styles/Cards.module.css'

export default function CardFluid(props) {
    return (
        <>
            <div className={`container container-fluid card ${style.card}`}>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.tituloCard}</h5>
                    <p className="card-text">
                        {props.textoCard}
                    </p>
                    <p className="col">
                        <small className="row preco-antigo">
                            <del>{props.precoAntigo}</del>
                        </small>
                        <strong className="row preco-novo">{props.precoNovo}</strong>
                    </p>
                    <a href="busca-cards.html" className="btn container botao-busca">
                        <button className="btn container" type="button">
                        {props.nomeBotao}
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}
