import Head from 'next/head';
function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movie App</title>
    </Head>
  );
}

export default Seo;
