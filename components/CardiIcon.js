import React from 'react'
import styles from '@/styles/Cards.module.css'

export default function CardiIcon(props) {
    return (
        <>
            <div
                className={`container container-fluid card ${styles.card}`}
                style={{ width: "18rem" }}
            >
                <div className="card-body">
                    <h5 className="card-title text-center">{props.tituloCard}</h5>
                    <p className="card-text"></p>
                    <div>
                        <span className="material-symbols-rounded">{props.icon1}</span> {props.texto1}
                    </div>
                    <div>
                        <span className="material-symbols-rounded">{props.icon2}</span> {props.texto2}
                    </div>
                    <div>
                        <span className="material-symbols-rounded">{props.icon3}</span> {props.texto3}
                    </div>
                    <div>
                        <span className="material-symbols-rounded">{props.icon4}</span> {props.texto4}
                    </div>
                    <div>
                        <span className="material-symbols-rounded">{props.icon5}</span> {props.texto5}
                    </div>
                    <p />
                    <p className="col"></p>
                    <hr />
                    <h6 className="row">A partir de:</h6>
                    <strong className="row preco-novo">{props.preco}</strong>
                    <p />
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
