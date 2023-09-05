import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }: { children: JSX.Element | null }): JSX.Element {
  return (
    <div className="relative h-full w-full flex flex-col items-center ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
