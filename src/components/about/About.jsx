import { Component } from "react";
import ME from "../../assets/about-me.jpeg";
import { FiBookOpen } from "react-icons/fi"; // 학력
import { MdOutlineCastForEducation } from "react-icons/md"; // 교육 수료
import { FaCertificate } from "react-icons/fa"; // 자격증
import "./about.css";
class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FiBookOpen className="about__icon" />
                <h5>School</h5>
                <p>광운대학교 <br></br>정보융합학부 졸업 <br>
              </br><small>(2020.03 ~ 2025.02)</small></p>
              </article>
              <article className="about__card">
                <MdOutlineCastForEducation className="about__icon" />
                <h5>Education</h5>
                <p>CJ올리브네트웍스<br></br> CLOUD WAVE 수료<br></br>
                <small>(2020.03 ~ 2025.02)</small></p>

              </article>
              <article className="about__card">
                <FaCertificate className="about__icon" />
                <h5>Certification</h5>
                <p>🎖️ SQLD 개발자<br></br><small>(2024.06.21)</small><br>
                </br> 🎖️ 리눅스마스터 2급 <br></br><small>(2025.03.28)</small> </p>
               
              </article>
            </div>
            <p>
  사용자의 니즈를 정확히 반영한 서비스를 개발하기 위해 끊임없이 고민하고 노력합니다.<br />
  단순한 기능 구현을 넘어, 사용자 경험에 가치를 더하는 것이 개발자의 핵심 역량이라 생각합니다.<br />
  최신 기술을 빠르게 익히고, 이를 서비스에 적절히 적용하는 데 강점을 가지고 있습니다.<br />
  빠르게 변화하는 시대에서 도전 정신은 제가 가장 중요하게 여기는 가치입니다.<br />
  이는 저의 지속적인 성장과 발전의 원동력이 됩니다.
</p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
