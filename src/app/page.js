import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";


export default function Home() {
  return (
      <>
          <Navbar/>
          <About/>
          <Skills/>
          <Portfolio/>
          <Blog/>
          <Contact/>
          <Footer/>
      </>
  );
}
