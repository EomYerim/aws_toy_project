import { Component } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Expreience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Guestbook from "./components/testimonials/Guestbook";
import Contact from "./components/contact/Contact";
import Sidebar from "./components/layout/Sidebar"; // ← 추가

import Footer from "./components/footer/Footer";
class App extends Component {
  render() {
    return (
      <>
        <Sidebar /> {/* ← 왼쪽에 고정 */}
        <Header />
        <Nav />
        <About />
        <Experience />
        {/* <Services /> */}
        <Portfolio />
        <Contact />
        {/* <Guestbook /> */}
        <Footer />
      </>
    );
  }
}
export default App;
