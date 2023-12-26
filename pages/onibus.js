import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Onibus.module.css'
import CardFluid from '@/components/CardFluid'

export default function onibus() {
  return (
    <>
      <Head>
        <title>HP Viagens - Passagens de Ônibus</title>
      </Head>
      <main>
        <section className={`${styles.fundoOnibus}`}>
          <div className={`${styles.topoOnibus} voo`}>
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
                        defaultChecked="checked"
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
                            required="true"
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
                            required="true"
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
                            required="true"
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
                            required="true"
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
          <section className={`${styles.fundoOnibus}`}>
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

              <CardFluid
                tituloCard="Maceió x Fortaleza"
                textoCard="Consulte disponibilidade de horários e curta a viagem!"
                precoAntigo="R$ 156,00"
                precoNovo="R$ 80,00"
                nomeBotao="Aproveite já"
              />

              <CardFluid
                tituloCard="Natal x Martins"
                textoCard="Consulte disponibilidade de horários e curta a viagem!"
                precoAntigo="R$ 156,00"
                precoNovo="R$ 80,00"
                nomeBotao="Aproveite já"
              />

              <CardFluid
                tituloCard="Recife x Garanhuns"
                textoCard="Consulte disponibilidade de horários e curta a viagem!"
                precoAntigo="R$ 156,00"
                precoNovo="R$ 80,00"
                nomeBotao="Aproveite já"
              />

              <CardFluid
                tituloCard="Gravatá x Recife"
                textoCard="Consulte disponibilidade de horários e curta a viagem!"
                precoAntigo="R$ 156,00"
                precoNovo="R$ 80,00"
                nomeBotao="Aproveite já"
              />

              <CardFluid
                tituloCard="Natal x Pipa"
                textoCard="Consulte disponibilidade de horários e curta a viagem!"
                precoAntigo="R$ 156,00"
                precoNovo="R$ 80,00"
                nomeBotao="Aproveite já"
              />
            </section>{" "}
            {/* Fim dos cards */}
          </section>
        </section>
      </main>

    </>
  )
}
