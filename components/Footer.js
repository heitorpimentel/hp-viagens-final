import React from 'react'
import style from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={`${style.footer} py-3`}>
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Fale conosco</h5>
              <hr className="border-top" />
              <ul className="nav flex-column">
                <li className={`${style.navItemFooter} nav-item mb-2`}>
                  <a href="paginas/contato.html" className={`${style.navItemFooter} p-0`}>
                    Nossos números
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="paginas/contato.html" className={`${style.navItemFooter} p-0`}>
                    Nosso email
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="paginas/contato.html" className={`${style.navItemFooter} p-0`}>
                    Nosso Endereço
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5>Promoções</h5>
              <hr className="border-top" />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="paginas/promocoes.html" className={`${style.navItemFooter} p-0`}>
                    Promoções Vôos
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="paginas/promocoes.html" className={`${style.navItemFooter} p-0`}>
                    Promoções Hotéis
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="paginas/promocoes.html" className={`${style.navItemFooter} p-0`}>
                    Promoções Ônibus
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="paginas/promocoes.html" className={`${style.navItemFooter} p-0`}>
                    Pacotes
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5>Sobre</h5>
              <hr className="border-top" />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="paginas/contato.html" className={`${style.navItemFooter} p-0`}>
                    Quem somos
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="paginas/contato.html" className={`${style.navItemFooter} p-0`}>
                    Perguntas frequentes
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form className="form">
                <h5>Receba as novidades</h5>
                <hr className="py-3 border-top" />
                <p>As melhores promoções no seu email</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control"
                    placeholder="Digite seu email"
                  />
                  <button
                    className="btn btn-secondary btn-sm"
                    type="button"
                    data-toggle="modal"
                    data-target="#modalExemplo"
                  >
                    Se inscrever
                  </button>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="modalExemplo"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4
                            className={`${style.textModal} modal-title`}
                            id="exampleModalLabel"
                          >
                            Parabéns!!
                          </h4>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Fechar"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p className={style.textModal}>
                            Agora você irá receber as melhores promoções e aproveitar
                            a viagem com os melhores descontos!
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Fechar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Fim Modal */}
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-1 my-4 border-top">
            <p className={style.fraseRodape}>
              © 2023 Desenvolvido por <strong>Heitor Pimentel</strong>
            </p>
          </div>
        </div>
      </footer>

    </>
  )
}
