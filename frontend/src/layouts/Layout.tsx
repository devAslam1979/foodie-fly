import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <div className="flex-1 container mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
