import { useState, useEffect } from 'react';
import Head from 'next/head'
import Slides from '@/components/Slides'
import styles from '@/styles/Home.module.css'
import Cards from '@/components/Cards'

export default function Home() {
  const [esconderData, setEsconderData] = useState(false);

  useEffect(() => {
    const divDataVolta = document.getElementById('dataDeVolta');
    const divDataIda = document.getElementById('dataDeIda');

    if (esconderData) {
      divDataVolta.style.display = 'none';
      divDataIda.classList.remove('col-md-2', 'col-sm-6');
      divDataIda.classList.add('col-md-4', 'col-sm-12');
    } else {
      divDataVolta.style.display = 'block';
      divDataIda.classList.remove('col-md-4', 'col-sm-12');
      divDataIda.classList.add('col-md-2', 'col-sm-6');
    }
  }, [esconderData]);

  const datas = (event) => {
    if (event.target.id === 'soIda') {
      setEsconderData(true);
    } else {
      setEsconderData(false);
    }
  };

  return (
    <>
      <Head>
        <title>HP Viagens - Home</title>
      </Head>
      <main>
        <section className={`${styles.topoVoo}`}>
          <div className="voo">
            <div className="buscas">
              <h3 className="titulo-formulario">Vôos</h3>
              <form action="/busca-topo" method="post">
                <div className="container">
                  <div className="row container">
                    <div className="form-group custom-radio col-md-2 col-sm-6">
                      <input
                        type="radio"
                        id="idaVolta"
                        name="inputData"
                        className="custom-control-input"
                        onClick={(event) => datas(event)}
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
                        onClick={(event) => datas(event)}
                      />
                      <label className="custom-control-label" htmlFor="soIda">
                        Somente Ida
                      </label>
                    </div>
                  </div>
                  <div >
                    <div id="datas-select" className="row">
                      <div className="form-group col-md-4 col-sm-6">
                        <div id="label-origem">
                          <label htmlFor="trecho-de-ida">
                            <span className="material-symbols-rounded fundo-icon">
                              flight_takeoff
                            </span>{" "}
                            Origem
                          </label>
                        </div>
                        <div>
                          <input
                            className="form-control"
                            type="text"
                            id="trecho-de-ida"
                            list="lista-lugares"
                            placeholder="Busque por aeroporto"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-4 col-sm-6">
                        <div className="" id="label-destino">
                          <label htmlFor="trecho-de-volta">
                            <span className="material-symbols-rounded fundo-icon">
                              flight_land
                            </span>{" "}
                            Destino
                          </label>
                        </div>
                        <div>
                          <input
                            className="form-control"
                            type="text"
                            id="trecho-de-volta"
                            list="lista-lugares"
                            placeholder="Busque por aeroporto"
                            required={true}
                          />
                        </div>
                      </div>
                      {/* Datas inicio */}
                      <div className="form-group col-md-2 col-sm-6" id="dataDeIda">
                        <div>
                          <label htmlFor="trecho-de-ida">
                            <span className="material-symbols-rounded fundo-icon">
                              calendar_month
                            </span>{" "}
                            Ida
                          </label>
                        </div>
                        <div>
                          <input
                            className="form-control"
                            type="date"
                            aria-label="Ida"
                            id="data-ida"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-2 col-sm-6" id="dataDeVolta">
                        <div>
                          <label className="labelNoWrap" htmlFor="trecho-de-ida">
                            <span className="material-symbols-rounded fundo-icon">
                              calendar_month
                            </span>{" "}
                            Volta
                          </label>
                        </div>
                        <div>
                          <input
                            className="form-control"
                            type="date"
                            aria-label="Volta"
                            id="data-volta"
                          />
                        </div>
                      </div>
                      {/* Datas fim */}
                    </div>
                    {/* Selecione quantidade inicio*/}
                    <div className="row">
                      <div className="form-group col-md-4 col-sm-12">
                        <label htmlFor="inlineFormCustomSelectPref">
                          <span className="material-symbols-rounded fundo-icon">diversity_3</span>
                          Passageiros
                        </label>
                        <select
                          className="form-control"
                          id="inlineFormCustomSelectPref"
                          required={true}
                        >
                          <option defaultValue={"1"}>Escolha</option>
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
                    <div className="custom-control custom-checkbox">
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
                  <option value="RECIFE - PE">Recife (REC)</option>
                  <option value="NATAL - RN">Natal (NAT)</option>
                  <option value="SÃO PAULO - SP">São Paulo - Todos os Aeroportos (SAO)</option>
                  <option value="RIO DE JANEIRO - RJ">
                    Rio de Janeiro - Todos os Aeroportos (RIO)
                  </option>
                </datalist>
              </form>
            </div>
          </div>
        </section>
        <Slides
          img01="imagens/imagens-aviao/imagem-slide01-voo.jpg"
          desc01="Imagem de uma praia em Natal RN"
          tituloS1="Conheça o Nordeste"
          textoS1="Aproveite para conhecer Natal com um super desconto!"
          precoAntS1="R$ 1.250,00"
          precoNovS1="R$ 975,00"
          btnS1="Aproveite agora mesmo"

          img02="imagens/imagens-aviao/imagem-slide02-voo.jpg"
          desc02="Imagem de uma praia em João Pessoa PB"
          tituloS2="Conheça o Nordeste"
          textoS2="Aproveite para conhecer João Pessoa com um super desconto!"
          precoAntS2="R$ 1.250,00"
          precoNovS2="R$ 975,00"
          btnS2="Aproveite agora mesmo"

          img03="imagens/imagens-aviao/imagem-slide03-voo.jpg"
          desc03="Imagem de uma pessoa pousando de para-quedas em uma praia"
          tituloS3="Conheça o Nordeste"
          textoS3="Conheça as melhores praias do Nordeste e curta as férias"
          precoAntS3="R$ 1.250,00"
          precoNovS3="R$ 975,00"
          btnS3="Aproveite agora mesmo"
        />
        <section className={`${styles.positionCard}`}>
          <section className={`${styles.fundoPosSlideVoo}`}>
            <div className="d-md-none promoSlide container-fluid card">
              <div className="card-body">
                <h3 className="text-center">Não fique de fora dessa!</h3>
                <p className="card-text text-center">
                  Consulte as melhores promoções!
                </p>
                <p className="col">
                  <span className="row">A partir de: </span>
                  <strong className="row">R$ 800,00</strong>
                </p>
                <a
                  href="/promocoes.html"
                  className="btn container botao-busca"
                >
                  <button className="btn btn-sm container" type="button">
                    Principais promoções
                  </button>
                </a>
              </div>
            </div>
            <div className="titulo-mensagem-card">
              <h3>As melhores ofertas de Vôos</h3>
            </div>
            {/* Início dos cards */}
            <section className="cartoes col-md-12 py-5">
              <Cards
                url="/imagens/imagens-aviao/img-card-01-voo.jpg"
                descricaoImg="Imagem de Ponta Negra em Natal/RN"
                tituloCard="Vôos para Nata/RN"
                textoCard="As praias potiguares são maravilhosas e você não poderia perder
              essa chance de relaxar e aproveitar nesse sol potiguar!"
                precoAntigo="R$ 1.000,00"
                precoNovo="R$ 800,00"
                nomeBotao="Aproveite já!"
              />

              <Cards
                url="/imagens/imagens-aviao/img-card-02-voo.jpg"
                descricaoImg="Imagem de João Passoa/PB"
                tituloCard="Vôos para João Pessoa/PB"
                textoCard="A Paraíba espera você! Venha conhecer onde o sol nasce primeiro no
                Nordeste."
                precoAntigo="R$ 1.000,00"
                precoNovo="R$ 800,00"
                nomeBotao="Aproveite já!"
              />

              <Cards
                url="/imagens/imagens-aviao/img-card-03-voo.jpg"
                descricaoImg="Imagem de Recife/PE"
                tituloCard="Vôos para Recife/PE"
                textoCard="Recife te espera de braços abertos. O que está esperando para
                aproveitar essa mega oferta?"
                precoAntigo="R$ 1.000,00"
                precoNovo="R$ 800,00"
                nomeBotao="Aproveite já!"
              />

              <Cards
                url="/imagens/imagens-aviao/img-card-04-voo.jpg"
                descricaoImg="Imagem de Fernando de Noronha/PE"
                tituloCard="Vôos para Fernando de Noronha/PE"
                textoCard="Aproveite esse super desconto e venha conhecer esse caribe
                brasileiro."
                precoAntigo="R$ 1.000,00"
                precoNovo="R$ 800,00"
                nomeBotao="Aproveite já!"
              />

              <Cards
                url="/imagens/imagens-aviao/img-card-05-voo.jpg"
                descricaoImg="Imagem de Fortaleza/CE"
                tituloCard="Vôos para Fortaleza/CE"
                textoCard="Encontre as melhores ofertas para Fortaleza com descontos que você
                só encontra aqui!"
                precoAntigo="R$ 1.000,00"
                precoNovo="R$ 800,00"
                nomeBotao="Aproveite já!"
              />

              <Cards
                url="/imagens/imagens-aviao/img-card-06-voo.jpg"
                descricaoImg="Imagem de Maceió/AL"
                tituloCard="Vôos para Maceió/AL"
                textoCard="Encontre as melhores ofertas para Maceió/AL com descontos
                que você só encontra aqui!"
                precoAntigo="R$ 1.000,00"
                precoNovo="R$ 800,00"
                nomeBotao="Aproveite já!"
              />

            </section>{" "}
            {/* Fim dos cards */}
          </section>
        </section>
      </main>

    </>
  )
}
