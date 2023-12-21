import React from 'react'
import CardFluid from '@/components/CardFluid'

export default function onibus() {
  return (
    <>
      <main>
        <section className="topo-onibus">
          <div className="sombra-onibus">
            <div className="buscas">
              <h3 className="titulo-formulario py-2">Ônibus</h3>
              <form action="busca-topo.html" method="post">
                <div className="container">
                  <div className="row container">
                    <div className="form-group custom-radio col-md-2 col-sm-6">
                      <input
                        type="radio"
                        id="idaVolta"
                        name="inputData"
                        className="custom-control-input"
                        onclick="esconderData()"
                        defaultChecked=""
                      />
                      <label className="custom-control-label" htmlFor="idaVolta">
                        Ida e Volta
                      </label>
                    </div>
                    <div className="form-group  custom-radio col-md-2 col-sm-6">
                      <input
                        type="radio"
                        id="soIda"
                        name="inputData"
                        className="custom-control-input"
                        onclick="esconderData()"
                      />
                      <label className="custom-control-label" htmlFor="soIda">
                        Somente Ida
                      </label>
                    </div>
                  </div>
                  <div>
                    <div id="datas-select" className="row">
                      <div className="form-group col-md-4 col-sm-6">
                        <div className="" id="label-origem">
                          <label htmlFor="trecho-de-ida">
                            <span className="material-symbols-rounded fundo-icon">
                              directions_bus
                            </span>
                            Origem
                          </label>
                        </div>
                        <div>
                          <input
                            className="form-control"
                            type="text"
                            id="trecho-de-ida"
                            list="lista-lugares"
                            placeholder="Busque por cidade"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-4 col-sm-6">
                        <div id="label-destino">
                          <label htmlFor="trecho-de-volta">
                            <span className="material-symbols-rounded fundo-icon">
                              directions_bus
                            </span>
                            Destino
                          </label>
                        </div>
                        <div>
                          <input
                            className="form-control"
                            type="text"
                            id="trecho-de-volta"
                            list="lista-lugares"
                            placeholder="Busque por cidade"
                            required=""
                          />
                        </div>
                      </div>
                      {/* Datas inicio */}
                      <div className="form-group col-md-2 col-sm-6" id="dataDeIda">
                        <div>
                          <label htmlFor="trecho-de-ida">
                            <span className="material-symbols-rounded fundo-icon">
                              calendar_month
                            </span>
                            Ida
                          </label>
                        </div>
                        <div>
                          <input
                            className="form-control"
                            type="date"
                            aria-label="Ida"
                            id="data-ida"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-2 col-sm-6" id="dataDeVolta">
                        <div>
                          <label className="labelNoWrap" htmlFor="trecho-de-ida">
                            <span className="material-symbols-rounded fundo-icon">
                              calendar_month
                            </span>
                            Volta
                          </label>
                        </div>
                        <div>
                          <input
                            className="form-control"
                            type="date"
                            aria-label="Volta"
                            id="data-volta"
                            required=""
                          />
                        </div>
                      </div>
                      {/* Datas fim */}
                    </div>
                    {/* Selecione quantidade inicio*/}
                    <div className="row">
                      <div className="form-group col-md-4 col-sm-12">
                        <label htmlFor="inlineFormCustomSelectPref">
                          <span className="material-symbols-rounded fundo-icon">
                            diversity_3
                          </span>
                          Passageiros
                        </label>
                        <select
                          className="form-control"
                          id="inlineFormCustomSelectPref"
                          required=""
                        >
                          <option selected="">Escolha</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                        </select>
                      </div>
                    </div>
                    {/* Selecione quantidade fim */}
                    {/* Botão busca */}
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                      <div className="botao-busca">
                        <button type="submit" className="btn btn-lg my-1">
                          Buscar
                        </button>
                      </div>
                    </div>
                    {/* Fim botao busca */}
                  </div>
                </div>
                <datalist id="lista-lugares">
                  <option>Natal, Rio Grande do Norte</option>
                  <option>Gravatá, Pernambuco</option>
                  <option>Garanhuns, Pernambuco</option>
                  <option>Recife, Pernambuco</option>
                  <option>Martins, Rio Grande do Norte</option>
                  <option>Pipa, Rio Grande do Norte</option>
                  <option>Maceió, Alagoas</option>
                </datalist>
              </form>
            </div>
          </div>
        </section>
        <section className="position-cards">
          <section className="fundo-pos-slide-onibus">
            <div className="titulo-mensagem-card">
              <h3>Conheça várias cidades pelo Brasil</h3>
            </div>
            {/* Início dos cards */}
            <section className="cartoes py-5">
              <CardFluid 
              tituloCard="Recife x Natal"
              textoCard="Consulte disponibilidade de horários e curta a viagem!"
              precoAntigo="R$ 156,00"
              precoNovo="R$ 80,00"
              nomeBotao="Aproveite já"
              />

              <div className="container container-fluid card">
                <div className="card-body">
                  <h5 className="card-title text-center">Maceió x Fortaleza</h5>
                  <p className="card-text">
                    Consulte disponibilidade de horários e curta a viagem!
                  </p>
                  <p className="col">
                    <small className="row preco-antigo">
                      <del>R$ 1.000,00</del>
                    </small>
                    <strong className="row preco-novo">R$ 800,00</strong>
                  </p>
                  <a href="busca-cards.html" className="btn container botao-busca">
                    <button className="btn container" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div className="container container-fluid card">
                <div className="card-body">
                  <h5 className="card-title text-center">Natal x Martins</h5>
                  <p className="card-text">
                    Consulte disponibilidade de horários e curta a viagem!
                  </p>
                  <p className="col">
                    <small className="row preco-antigo">
                      <del>R$ 1.000,00</del>
                    </small>
                    <strong className="row preco-novo">R$ 800,00</strong>
                  </p>
                  <a href="busca-cards.html" className="btn container botao-busca">
                    <button className="btn container" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div className="container container-fluid card">
                <div className="card-body">
                  <h5 className="card-title text-center">Recife x Garanhuns</h5>
                  <p className="card-text">
                    Consulte disponibilidade de horários e curta a viagem!
                  </p>
                  <p className="col">
                    <small className="row preco-antigo">
                      <del>R$ 1.000,00</del>
                    </small>
                    <strong className="row preco-novo">R$ 800,00</strong>
                  </p>
                  <a href="busca-cards.html" className="btn container botao-busca">
                    <button className="btn container" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div className="container container-fluid card">
                <div className="card-body">
                  <h5 className="card-title text-center">Gravatá x Recife</h5>
                  <p className="card-text">
                    Consulte disponibilidade de horários e curta a viagem!
                  </p>
                  <p className="col">
                    <small className="row preco-antigo">
                      <del>R$ 1.000,00</del>
                    </small>
                    <strong className="row preco-novo">R$ 800,00</strong>
                  </p>
                  <a href="busca-cards.html" className="btn container botao-busca">
                    <button className="btn container" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div className="container container-fluid card">
                <div className="card-body">
                  <h5 className="card-title text-center">Natal x Pipa</h5>
                  <p className="card-text">
                    Consulte disponibilidade de horários e curta a viagem!
                  </p>
                  <p className="col">
                    <small className="row preco-antigo">
                      <del>R$ 1.000,00</del>
                    </small>
                    <strong className="row preco-novo">R$ 800,00</strong>
                  </p>
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
