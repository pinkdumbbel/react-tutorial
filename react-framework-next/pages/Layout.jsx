import NavBar from '../components/NavBar';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}

export default Layout;
