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
                tituloCard="Pacote para Recife"
                icon1="travel" texto1="Passagem de ida e volta"
                icon2="local_taxi" texto2="Passeio pela cidade"
                icon3="apartment" texto3="Hospedagem"
                icon4="coffee" texto4="Café da manhã grátis"
                icon5="verified_user" texto5="Seguro viagem (Gratuito)"
                preco="R$ 725,00"
                nomeBotao="Aproveite já!"
              />

              <CardiIcon
                tituloCard="Pacote para Martins"
                icon1="travel" texto1="Passagem de ida e volta"
                icon2="local_taxi" texto2="Passeio pela cidade"
                icon3="apartment" texto3="Hospedagem"
                icon4="coffee" texto4="Café da manhã grátis"
                icon5="verified_user" texto5="Seguro viagem (Gratuito)"
                preco="R$ 725,00"
                nomeBotao="Aproveite já!"
              />

              <CardiIcon
                tituloCard="Pacote para Pipa"
                icon1="travel" texto1="Passagem de ida e volta"
                icon2="local_taxi" texto2="Passeio pela cidade"
                icon3="apartment" texto3="Hospedagem"
                icon4="coffee" texto4="Café da manhã grátis"
                icon5="verified_user" texto5="Seguro viagem (Gratuito)"
                preco="R$ 725,00"
                nomeBotao="Aproveite já!"
              />

              <CardiIcon
                tituloCard="Pacote para Natal"
                icon1="travel" texto1="Passagem de ida e volta"
                icon2="local_taxi" texto2="Passeio pela cidade"
                icon3="apartment" texto3="Hospedagem"
                icon4="coffee" texto4="Café da manhã grátis"
                icon5="verified_user" texto5="Seguro viagem (Gratuito)"
                preco="R$ 725,00"
                nomeBotao="Aproveite já!"
              />

              <CardiIcon
                tituloCard="Pacote para Fortaleza"
                icon1="travel" texto1="Passagem de ida e volta"
                icon2="local_taxi" texto2="Passeio pela cidade"
                icon3="apartment" texto3="Hospedagem"
                icon4="verified_user" texto4="Seguro viagem (Gratuito)"
                preco="R$ 725,00"
                nomeBotao="Aproveite já!"
              />

              <CardiIcon
                tituloCard="Pacote para Maceió"
                icon1="travel" texto1="Passagem de ida e volta"
                icon2="local_taxi" texto2="Passeio pela cidade"
                icon3="apartment" texto3="Hospedagem"
                icon4="verified_user" texto4="Seguro viagem (Gratuito)"
                preco="R$ 725,00"
                nomeBotao="Aproveite já!"
              />

              <CardiIcon
                tituloCard="Pacote para Garanhuns"
                icon1="directions_bus" texto1="Passagem de ida e volta"
                icon2="apartment" texto2="Hospedagem"
                icon3="free_cancellation" texto3="Cancelamento grátis"
                preco="R$ 725,00"
                nomeBotao="Aproveite já!"
              />

              <CardiIcon
                tituloCard="Pacote para Porto de Galinhas"
                icon1="directions_bus" texto1="Passagem de ida e volta"
                icon2="apartment" texto2="Hospedagem"
                icon3="free_cancellation" texto3="Cancelamento grátis"
                preco="R$ 725,00"
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
