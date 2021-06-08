import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Post() {
  return (
    <>
      <Head>
        <title>Post | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>02 de junho de 2021</time>
            <strong>Creating a Monorepo</strong>
            <p>dsadsadasdasdasasdasuyd saudgau sydgasuyd iajsyd gojsa ydgduyasdguoasdgouy asdouay gduyasdoua sgduoyagsduyassdyuayudas</p>
          </a>
          <a href="#">
            <time>02 de junho de 2021</time>
            <strong>Creating a Monorepo</strong>
            <p>dsadsadasdasdasasdasuyd saudgau sydgasuyd iajsyd gojsa ydgduyasdguoasdgouy asdouay gduyasdoua sgduoyagsduyassdyuayudas</p>
          </a>
          <a href="#">
            <time>02 de junho de 2021</time>
            <strong>Creating a Monorepo</strong>
            <p>dsadsadasdasdasasdasuyd saudgau sydgasuyd iajsyd gojsa ydgduyasdguoasdgouy asdouay gduyasdoua sgduoyagsduyassdyuayudas</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => { 
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  });

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {

    }
  }
}