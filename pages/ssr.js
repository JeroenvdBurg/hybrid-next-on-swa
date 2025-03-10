import Head from "next/head";
import styles from "../styles/Home.module.css";
import { DateTime } from "luxon";

export async function getServerSideProps() {
  const data = JSON.stringify({ time: new Date() });
  return { props: { data } };
}

export default function Home({ data }) {
  const serverData = JSON.parse(data);
  const dt = DateTime.fromISO(serverData.time);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js on Azure with SSR!</a>
        </h1>

        <p className={styles.description}>
          The time on the server is{" "}
          <code className={styles.code}>
            {dt.toLocaleString(DateTime.DATETIME_FULL)}
          </code>
        </p>

        <p className={styles.description}>
          The API url on this environment is{" "}
          <code className={styles.code}>{process.env.NEXT_PUBLIC_API_URL}</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://docs.microsoft.com/azure/static-web-apps/deploy-nextjs-hybrid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with Next.js, hosted on Azure.
        </a>
      </footer>
    </div>
  );
}
