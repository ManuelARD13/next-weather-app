import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }: { children: JSX.Element | null }): JSX.Element {
  return (
    <main className="relative w-full flex flex-col items-center ">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
