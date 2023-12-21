import React from 'react'
import Slides from '@/components/Slides'

export default function hoteis() {
  return (
    <>
      <main>
        <section className="topo-hotel">
          <div className="buscas">
            <h3 className="titulo-formulario py-3">Hotéis</h3>
            <form action="busca-topo.html" method="post">
              <div className="container">
                <div>
                  <div id="datas-select" className="row">
                    <div className="form-group col-md-4 col-sm-12">
                      <div id="label-origem">
                        <label htmlFor="cidade-hotel">
                          <span className="material-symbols-rounded fundo-icon">
                            apartment
                          </span>
                          Cidade
                        </label>
                      </div>
                      <div>
                        <input
                          className="form-control"
                          type="text"
                          id="cidade-hotel"
                          list="lista-lugares"
                          placeholder="Busque por cidade"
                          required=""
                        />
                      </div>
                    </div>
                    {/* Datas inicio */}
                    <div className="form-group col-md-3 col-sm-6">
                      <div>
                        <label htmlFor="data-de-ida">
                          <span className="material-symbols-rounded fundo-icon">
                            calendar_month
                          </span>
                          Check-In
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
                    <div className="form-group col-md-3 col-sm-6">
                      <div>
                        <label htmlFor="data-de-volta">
                          <span className="material-symbols-rounded fundo-icon">
                            calendar_month
                          </span>
                          Check-Out
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
                    {/* Selecione quantidade inicio*/}
                    <div className="form-group col-md-2 col-sm-6">
                      <div>
                        <label
                          className="labelNoWrap"
                          htmlFor="inlineFormCustomSelectPref"
                        >
                          <span className="material-symbols-rounded fundo-icon">
                            king_bed
                          </span>
                          Quartos
                        </label>
                      </div>
                      <div>
                        <select
                          className="custom-select"
                          id="inlineFormCustomSelectPref"
                          required=""
                        >
                          <option selected="">Escolha</option>
                          <option value={1}>Um</option>
                          <option value={2}>Dois</option>
                          <option value={3}>Três</option>
                          <option value={4}>Quatro</option>
                          <option value={5}>Cinco</option>
                          <option value={6}>Seis</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group col-md-4 col-sm-6">
                      <div>
                        <label htmlFor="inlineFormCustomSelectPref">
                          <span className="material-symbols-rounded fundo-icon">
                            diversity_3
                          </span>
                          Hóspedes
                        </label>
                      </div>
                      <div>
                        <select
                          className="custom-select"
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
            </form>
          </div>
          <datalist id="lista-lugares">
            <option>Natal, Rio Grande do Norte</option>
            <option>Gravatá, Pernambuco</option>
            <option>Garanhuns, Pernambuco</option>
            <option>Recife, Pernambuco</option>
            <option>Martins, Rio Grande do Norte</option>
            <option>Pipa, Rio Grande do Norte</option>
            <option>Maceió, Alagoas</option>
            <option>Fortaleza, Ceará</option>
          </datalist>
        </section>
        <Slides 
        img01="imagens/imagens-hotel/img-slide-01-hotel.jpg"
        desc01="Imagem de um Hotel"
        tituloS1="Os melhores Hotéis"
        textoS1="Aqui você não encontra conversa fiada, o papo é sério. Pegue esta
        promoção antes que esgote."
        precoAntS1="R$ 1.250,00"
        precoNovS1="R$ 975,00"
        btnS1="Aproveite agora mesmo"

        img02="imagens/imagens-hotel/img-slide-02-hotel.jpg"
        desc02="Imagem de um Hotel"
        tituloS2="Não perca!"
        textoS2="Aqui você não encontra conversa fiada, o papo é sério. Pegue esta
        promoção antes que esgote."
        precoAntS2="R$ 1.250,00"
        precoNovS2="R$ 975,00"
        btnS2="Aproveite agora mesmo"

        img03="imagens/imagens-hotel/img-slide-03-hotel.jpg"
        desc03="Imagem de um mirante de Martins RN"
        tituloS3="Martins - RN"
        textoS3="Este é um simplesmente um ótimo lugar para tomar seu café da manhã
        e se sentir revigorado!"
        precoAntS3="R$ 1.250,00"
        precoNovS3="R$ 975,00"
        btnS3="Aproveite agora mesmo"
        />
        {/* Fim dos slides */}
        <section className="position-cards">
          <section className="fundo-pos-slide-hotel">
            <div className="d-md-none promo-slide container-fluid card">
              <div className="card-body">
                <h3 className="text-center">Não fique de fora dessa!</h3>
                <p className="card-text text-center">
                  Consulte as melhores promoções!
                </p>
                <p className="col">
                  <span className="row">A partir de: </span>
                  <strong className="row">R$ 800,00</strong>
                </p>
                <a href="./promocoes.html" className="btn container botao-busca">
                  <button className="btn btn-sm container" type="button">
                    Principais promoções
                  </button>
                </a>
              </div>
            </div>
            <div className="titulo-mensagem-card">
              <h3>Torne cada momento inesquecível</h3>
            </div>
            {/* Início dos cards */}
            <section className="cartoes col-md-12 py-5">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-img-top">
                  <img
                    src="imagens/imagens-hotel/img-card-01-hotel.jpg"
                    alt="Imagem de capa do card"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Porto de Galinhas/PE</h5>
                  <p className="card-text pb-4">
                    Venha aproveitar para passar 2 dias imperdíveis em Porto de
                    Galinhas
                  </p>
                  <p className="col">
                    <small className="row preco-antigo">
                      <del>R$ 1.000,00</del>
                    </small>
                    <strong className="row preco-novo">R$ 800,00</strong>
                  </p>
                  <a href="busca-cards.html" className="btn botao-busca">
                    <button className="btn" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-img-top">
                  <img
                    src="imagens/imagens-hotel/img-card-02-hotel.jpg"
                    alt="Imagem de capa do card"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Ponta Negra/RN</h5>
                  <p className="card-text pb-5">
                    Preço incrível para este ótimo hotel em Ponta Negra
                  </p>
                  <p className="col">
                    <small className="row preco-antigo">
                      <del>R$ 1.000,00</del>
                    </small>
                    <strong className="row preco-novo">R$ 800,00</strong>
                  </p>
                  <a href="busca-cards.html" className="btn botao-busca">
                    <button className="btn" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-img-top">
                  <img
                    src="imagens/imagens-hotel/img-card-03-hotel.jpg"
                    alt="Imagem de capa do card"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Garanhuns/PE</h5>
                  <p className="card-text pb-5">
                    Venha sentir o clima gostoso desta serra pernambucana
                  </p>
                  <p className="col">
                    <small className="row preco-antigo">
                      <del>R$ 1.000,00</del>
                    </small>
                    <strong className="row preco-novo">R$ 800,00</strong>
                  </p>
                  <a href="busca-cards.html" className="btn botao-busca">
                    <button className="btn" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-img-top">
                  <img
                    src="imagens/imagens-hotel/img-card-04-hotel.jpg"
                    alt="Imagem de capa do card"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Martins/RN</h5>
                  <p className="card-text">
                    Um ótimo lugar para aproveitar um fim de semana e tomar aquele
                    chocolate quente com uma vista maravilhosa
                  </p>
                  <p className="col">
                    <small className="row preco-antigo">
                      <del>R$ 1.000,00</del>
                    </small>
                    <strong className="row preco-novo">R$ 800,00</strong>
                  </p>
                  <a href="busca-cards.html" className="btn botao-busca">
                    <button className="btn" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-img-top">
                  <img
                    src="imagens/imagens-hotel/img-card-05-hotel.jpg"
                    alt="Imagem de capa do card"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Pipa/RN</h5>
                  <p className="card-text pb-5">
                    Venha conhecer as falésias de Pipa e sua beleza natural
                  </p>
                  <p className="col">
                    <small className="row preco-antigo">
                      <del>R$ 1.000,00</del>
                    </small>
                    <strong className="row preco-novo">R$ 800,00</strong>
                  </p>
                  <a href="busca-cards.html" className="btn botao-busca">
                    <button className="btn" type="button">
                      Aproveite já
                    </button>
                  </a>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-img-top">
                  <img
                    src="imagens/imagens-hotel/img-card-06-hotel.jpg"
                    alt="Imagem de capa do card"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Maceió/AL</h5>
                  <p className="card-text">
                    Que tal passar um tempinho nesse litoral alagoano e dar aquela
                    escapada dos problemas?
                  </p>
                  <p className="col">
                    <small className="row preco-antigo">
                      <del>R$ 1.000,00</del>
                    </small>
                    <strong className="row preco-novo">R$ 800,00</strong>
                  </p>
                  <a href="busca-cards.html" className="btn botao-busca">
                    <button className="btn" type="button">
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
