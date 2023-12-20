import React from 'react'
import style from '@/styles/Cards.module.css'

export default function Cards(props) {
    return (
        <>
            <div className={`${style.card} card`} style={{ width: "18rem" }}>
                <div className={`${style.cardImgTop}`}>
                    <img
                        src={props.url}
                        alt={props.descricaoImg}
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.tituloCard}</h5>
                    <p className="card-text">
                        {props.textoCard}
                    </p>
                    <p className="col">
                        <small className="row preco-antigo">
                            <del>{props.precoAntigo}</del>
                        </small>
                        <strong className="row preco-novo">{props.precoNovo}</strong>
                    </p>
                    <a href="/promocoes" className="btn botao-busca">
                        <button className="btn" type="button">
                            {props.nomeBotao}
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}
