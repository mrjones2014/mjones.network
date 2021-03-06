import Head from "next/head";
import Image from "next/image";
import React from "react";
import { PageHead } from "./PageHead";
import styles from "./styles.module.css";

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  const title = "Error";

  return (
    <>
      <PageHead />

      <Head>
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />

        <title>{title}</title>
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Error Loading Page</h1>

          {statusCode && <p>Error code: {statusCode}</p>}

          <Image
            src="/error.png"
            alt="Error"
            className={styles.errorImage}
            width="640px"
            height="480px"
          />
        </main>
      </div>
    </>
  );
};
