import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Experimento científico com duas folhas de alface</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Criando um experimento científico com duas folhas de alface
        </h1>

        <div className={styles.grid}>
          <p className={styles.card}>
            <h3>Materiais necessários</h3>

            <Image
              src="/images/alface.jpg"
              alt="2 folhas de alface"
              width={1000}
              height={600}
            />

            <Image
              src="/images/sal.jpg"
              alt="Uma colher cheia de sal, equivalente a trinta gramas)"
              width={1000}
              height={600}
            />

            <Image
              src="/images/vasilhas.jpg"
              alt="Duas vasilhas, cada uma com um litro de água"
              width={1000}
              height={680}
            />
          </p>
        </div>

        <div className={styles.grid}>
          <p className={styles.card}>
            <h3>Observações efetuadas</h3>

            <Image
              src="/images/Foto1.jpg"
              alt="Início do experimento quatorze horas"
              width={1000}
              height={600}
            />

            <Image
              src="/images/Foto2.jpg"
              alt="Duas horas após o início do experimento"
              width={1000}
              height={600}
            />

            <Image
              src="/images/Foto3.jpg"
              alt="Doze horas após o início do experimento"
              width={1000}
              height={600}
            />

            <Image
              src="/images/Foto4.jpg"
              alt="Vinte e quatro horas após o início do experimento"
              width={1000}
              height={600}
            />

            <Image
              src="/images/Foto5.jpg"
              alt="Vinte e quatro horas após o início do experimento"
              width={1000}
              height={600}
            />

            <Image
              src="/images/Foto6.jpg"
              alt="Vinte e quatro horas após o início do experimento"
              width={1000}
              height={600}
            />

            <Image
              src="/images/Foto7.jpg"
              alt="Vinte e quatro horas após o início do experimento"
              width={1000}
              height={600}
            />
          </p>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
