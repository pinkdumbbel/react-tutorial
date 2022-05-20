import NavBar from '../components/NavBar';
import '../styles/globals.css';
function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx>{`
        a {
          color: white;
        }
      `}</style>
    </>
  );
}

export default App;
