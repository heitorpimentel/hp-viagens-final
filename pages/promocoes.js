import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Promo.module.css'
import CardiIcon from '@/components/CardiIcon'

export default function promocoes() {
  return (
    <>
      <Head>
        <title>HP Viagens - Promoções</title>
      </Head>
      <main>
        <section className="position-cards">
          <section className={`${styles.fundoPromo}`}>
            <div className="titulo-mensagem-card">
              <h3>Aproveite as melhores promoções!</h3>
            </div>
            {/* Início dos cards */}
            <section className="cartoes py-4">
              <CardiIcon 
              tituloCard=""
              icon1=""  texto1=""
              icon2=""  texto2=""
              icon3=""  texto3=""
              icon4=""  texto4=""
              icon5=""  texto5=""
              />
              <div
                className="container container-fluid card"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">Pacote para Recife</h5>
                  <p className="card-text"></p>
                  <div>
                    <span className="material-symbols-rounded">travel</span> Passagem
                    de ida e volta
                  </div>
                  <div>
                    <span className="material-symbols-rounded">local_taxi</span>{" "}
                    Passeio pela cidade
                  </div>
                  <div>
                    <span className="material-symbols-rounded">apartment</span>{" "}
                    Hospedagem
                  </div>
                  <div>
                    <span className="material-symbols-rounded">coffee</span> Café da
                    manhã grátis
                  </div>
                  <div>
                    <span className="material-symbols-rounded">verified_user</span>{" "}
                    Seguro viagem (Gratuito)
                  </div>
                  <p />
                  <p className="col"></p>
                  <hr />
                  <h6 className="row">A partir de:</h6>
                  <strong className="row preco-novo">R$ 800,00</strong>
                  <p />
                  <a href="busca-cards.html" className="btn container botao-busca">
                    <button className="btn container" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="container container-fluid card"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">Pacote para Martins</h5>
                  <p className="card-text"></p>
                  <div>
                    <span className="material-symbols-rounded">travel</span> Passagem
                    de ida e volta
                  </div>
                  <div>
                    <span className="material-symbols-rounded">directions_bus</span>{" "}
                    Translado até a cidade
                  </div>
                  <div>
                    <span className="material-symbols-rounded">apartment</span>{" "}
                    Hospedagem
                  </div>
                  <div>
                    <span className="material-symbols-rounded">coffee</span> Café da
                    manhã grátis
                  </div>
                  <div>
                    <span className="material-symbols-rounded">verified_user</span>{" "}
                    Seguro viagem (Gratuito)
                  </div>
                  <p />
                  <p className="col"></p>
                  <hr />
                  <h6 className="row">A partir de:</h6>
                  <strong className="row preco-novo">R$ 800,00</strong>
                  <p />
                  <a href="busca-cards.html" className="btn container botao-busca">
                    <button className="btn container" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="container container-fluid card"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">Pacote para Pipa</h5>
                  <p className="card-text"></p>
                  <div>
                    <span className="material-symbols-rounded">travel</span> Passagem
                    de ida e volta
                  </div>
                  <div>
                    <span className="material-symbols-rounded">directions_bus</span>{" "}
                    Translado até a cidade
                  </div>
                  <div>
                    <span className="material-symbols-rounded">apartment</span>{" "}
                    Hospedagem
                  </div>
                  <div>
                    <span className="material-symbols-rounded">coffee</span> Café da
                    manhã grátis
                  </div>
                  <div>
                    <span className="material-symbols-rounded">verified_user</span>{" "}
                    Seguro viagem (Gratuito)
                  </div>
                  <p />
                  <p className="col"></p>
                  <hr />
                  <h6 className="row">A partir de:</h6>
                  <strong className="row preco-novo">R$ 800,00</strong>
                  <p />
                  <a href="busca-cards.html" className="btn container botao-busca">
                    <button className="btn container" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="container container-fluid card"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">Pacote para Natal</h5>
                  <p className="card-text"></p>
                  <div>
                    <span className="material-symbols-rounded">travel</span> Passagem
                    de ida e volta
                  </div>
                  <div>
                    <span className="material-symbols-rounded">local_taxi</span>{" "}
                    Passeio pela cidade
                  </div>
                  <div>
                    <span className="material-symbols-rounded">apartment</span>{" "}
                    Hospedagem
                  </div>
                  <div>
                    <span className="material-symbols-rounded">coffee</span> Café da
                    manhã grátis
                  </div>
                  <div>
                    <span className="material-symbols-rounded">verified_user</span>{" "}
                    Seguro viagem (Gratuito)
                  </div>
                  <p />
                  <p className="col"></p>
                  <hr />
                  <h6 className="row">A partir de:</h6>
                  <strong className="row preco-novo">R$ 800,00</strong>
                  <p />
                  <a href="busca-cards.html" className="btn container botao-busca">
                    <button className="btn container" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="container container-fluid card"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">Pacote para Fortaleza</h5>
                  <p className="card-text"></p>
                  <div>
                    <span className="material-symbols-rounded">travel</span> Passagem
                    de ida e volta
                  </div>
                  <div>
                    <span className="material-symbols-rounded">local_taxi</span>{" "}
                    Passeio pela cidade
                  </div>
                  <div>
                    <span className="material-symbols-rounded">apartment</span>{" "}
                    Hospedagem
                  </div>
                  <div>
                    <span className="material-symbols-rounded">verified_user</span>{" "}
                    Seguro viagem (Gratuito)
                  </div>
                  <p />
                  <p className="col"></p>
                  <hr />
                  <h6 className="row">A partir de:</h6>
                  <strong className="row preco-novo">R$ 800,00</strong>
                  <p />
                  <a href="busca-cards.html" className="btn container botao-busca">
                    <button className="btn container" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="container container-fluid card"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">Pacote para Maceió</h5>
                  <p className="card-text"></p>
                  <div>
                    <span className="material-symbols-rounded">travel</span> Passagem
                    de ida e volta
                  </div>
                  <div>
                    <span className="material-symbols-rounded">local_taxi</span>{" "}
                    Passeio pela cidade
                  </div>
                  <div>
                    <span className="material-symbols-rounded">apartment</span>{" "}
                    Hospedagem
                  </div>
                  <div>
                    <span className="material-symbols-rounded">verified_user</span>{" "}
                    Seguro viagem (Gratuito)
                  </div>
                  <p />
                  <p className="col"></p>
                  <hr />
                  <h6 className="row">A partir de:</h6>
                  <strong className="row preco-novo">R$ 800,00</strong>
                  <p />
                  <a href="busca-cards.html" className="btn container botao-busca">
                    <button className="btn container" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="container container-fluid card"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">Pacote para Garanhuns</h5>
                  <p className="card-text"></p>
                  <div>
                    <span className="material-symbols-rounded">directions_bus</span>{" "}
                    Passagem de ida e volta
                  </div>
                  <div>
                    <span className="material-symbols-rounded">apartment</span>{" "}
                    Hospedagem
                  </div>
                  <div>
                    <span className="material-symbols-rounded">
                      free_cancellation
                    </span>{" "}
                    Cancelamento grátis
                  </div>
                  <p />
                  <p className="col py-3"></p>
                  <hr />
                  <h6 className="row">A partir de:</h6>
                  <strong className="row preco-novo">R$ 800,00</strong>
                  <p />
                  <a href="busca-cards.html" className="btn container botao-busca">
                    <button className="btn container" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="container container-fluid card"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Pacote para Porto de Galinhas
                  </h5>
                  <p className="card-text"></p>
                  <div>
                    <span className="material-symbols-rounded">directions_bus</span>{" "}
                    Passagem de ida e volta
                  </div>
                  <div>
                    <span className="material-symbols-rounded">apartment</span>{" "}
                    Hospedagem
                  </div>
                  <div>
                    <span className="material-symbols-rounded">
                      free_cancellation
                    </span>{" "}
                    Cancelamento grátis
                  </div>
                  <p />
                  <p className="col py-3"></p>
                  <hr />
                  <h6 className="row">A partir de:</h6>
                  <strong className="row preco-novo">R$ 800,00</strong>
                  <p />
                  <a href="busca-cards.html" className="btn container botao-busca">
                    <button className="btn container" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
            </section>{" "}
            {/* Fim dos cards */}
          </section>
        </section>
      </main>

    </>
  )
}
