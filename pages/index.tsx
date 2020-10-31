import Head from 'next/head';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextrapi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className="text-primary">Nextrapi!</span>
        </h1>

        <div className={styles.grid}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Nextjs + Strapi CMS + GraphQl stack
              </h5>
              <p className="card-text">
                <div className="card-title">Techstack:</div>
                <span className="badge badge-secondary mr-2">Typescript</span>
                <span className="badge badge-secondary mr-2">GraphQl</span>
                <span className="badge badge-secondary mr-2">Apollo</span>
                <span className="badge badge-secondary mr-2">scss</span>
                <span className="badge badge-secondary mr-2">
                  React Bootstrap
                </span>
                <span className="badge badge-secondary">Bootstrap 4</span>
              </p>
            </div>
            <div className="card-body">
              <a
                className="card-link"
                href="https://github.com/msmid/nextrapi-client"
                target="_blank"
              >
                Visit Github for more
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>
          Created by{' '}
          <a href="https://github.com/msmid" target="_blank">
            msmid
          </a>
        </span>
      </footer>
    </div>
  );
}
