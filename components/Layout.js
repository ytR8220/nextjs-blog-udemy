import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

import Link from 'next/link';

const name = 'ytR Code';
export const siteTitle = 'Next.js Blog';

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src='/images/profile.jpg'
              alt='プロフィール画像'
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src='/images/profile.jpg'
              alt='プロフィール画像'
              className={`${utilStyles.borderCircle} ${styles.headerImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href='/'>←ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
