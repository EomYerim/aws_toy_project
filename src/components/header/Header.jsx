import { Component } from "react";
import CTA from "./CTA";
import ME from "../../assets/me.jpeg";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header className="hero">
        <div className="container header__container">
        <h5>Hello I'm</h5>
       <h1>
          <span class="typewriter highlight">Yerim</span>
</h1>
          <h5 className="text-light">Cloud Engineer & Backend Developer</h5>
          <CTA />
          <div className="me">
            <img src={ME} alt="ME" className="me__img" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
          <HeaderSocials />
        </div>
      </header>
    );
  }
}

export default Header;
