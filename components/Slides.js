import React from 'react'
import style from '@/styles/Slide.module.css'

export default function Slides(props) {
  return (
    <div>
      <section className="slides">
          {" "}
          {/* início dos slides */}
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={props.img01}
                  alt={props.desc01}
                />
                <div className="carousel-caption d-none d-md-block text-left">
                  <h2 className={`${style.itemSlide} my-5`}>{props.tituloS1}</h2>
                  <p className={`${style.itemSlide}`}>{props.textoS1}</p>
                  <p className={`${style.itemSlide} col`}>
                    <small className={`${style.precoAntigoSlide} row`}>
                      <del>{props.precoAntS1}</del>
                    </small>
                    <strong className={`${style.precoNovoSlide} row`}>{props.precoNovS1}</strong>
                  </p>
                  <a
                    className="btn btn-lg row m-auto w-100 itemSlide"
                    href="/busca-slide"
                    role="button"
                  >
                    <button className="btn" type="button">
                    {props.btnS1}
                    </button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={props.img02}
                  alt={props.desc03}
                />
                <div className="carousel-caption d-none d-md-block text-left">
                <h2 className={`${style.itemSlide} my-5`}>{props.tituloS2}</h2>
                  <p className={`${style.itemSlide}`}>{props.textoS2}</p>
                  <p className={`${style.itemSlide} col`}>
                    <small className={`${style.precoAntigoSlide} row`}>
                    <del>{props.precoAntS2}</del>
                    </small>
                    <strong className={`${style.precoNovoSlide} row`}>{props.precoNovS2}</strong>
                  </p>
                  <a
                    className="btn btn-lg row m-auto w-100 itemSlide"
                    href="/busca-slide"
                    role="button"
                  >
                    <button className="btn" type="button">
                    {props.btnS2}
                    </button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={props.img03}
                  alt={props.desc03}
                />
                <div className="carousel-caption d-none d-md-block text-left">
                <h2 className={`${style.itemSlide} my-5`}>{props.tituloS3}</h2>
                  <p className={`${style.itemSlide}`}>{props.textoS3}</p>
                  <p className={`${style.itemSlide} col`}>
                    <small className={`${style.precoAntigoSlide} row`}>
                    <del>{props.precoAntS3}</del>
                    </small>
                    <strong className={`${style.precoNovoSlide} row`}>{props.precoNovS3}</strong>
                  </p>
                  <a
                    className="btn btn-lg row m-auto w-100 itemSlide"
                    href="/busca-slide"
                    role="button"
                  >
                    <button className="btn" type="button">
                    {props.btnS3}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Anterior</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Próximo</span>
            </a>
          </div>
        </section>{" "}
        {/* Fim dos slides */}
    </div>
  )
}
