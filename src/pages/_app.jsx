import Head from 'next/head';
import '../../styles/main.scss';

const MyApp = ({ Component, pageProps }) =>

 (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin ></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet"> </link>
      </Head>
      <Component { ...pageProps } />
    </>
  );

export default MyApp;
