import { Component } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

class Experience extends Component {
  getColorByLevel(level) {
    switch (level.toLowerCase()) {
      case "beginner":
        return "#ef5350"; // 빨강
      case "intermediate":
        return "#ffd54f"; // 노랑
      case "advanced":
        return "#64b5f6"; // 파랑
      case "experienced":
        return "#4dd0e1"; // 민트
      case "senior":
        return "#00c6a2"; // 진한 민트
      case "love it":
        return "#ba68c8"; // 보라
      case "learning":
        return "#90a4ae"; // 회색빛
      default:
        return "#cccccc"; // 기본 회색
    }
  }

  render() {
    const categories = [
      {
        title: "Frontend Development",
        skills: [
          { name: "HTML", level: "Experienced", width: "80%" },
          { name: "CSS", level: "Advanced", width: "85%" },
          { name: "JavaScript", level: "Love it", width: "95%" },
          { name: "Tailwind", level: "Intermediate", width: "60%" },
          { name: "Bootstrap", level: "Beginner", width: "40%" },
          { name: "React", level: "Senior", width: "90%" },
        ],
      },
      {
        title: "Backend Development",
        skills: [
          { name: "Node.js", level: "Experienced", width: "80%" },
          { name: "Express", level: "Advanced", width: "85%" },
          { name: "MongoDB", level: "Love it", width: "90%" },
          { name: "Next.js", level: "Intermediate", width: "60%" },
          { name: "MySQL", level: "Beginner", width: "45%" },
          { name: "PHP", level: "Senior", width: "88%" },
        ],
      },
      {
        title: "Cloud & DevOps",
        skills: [
          { name: "AWS", level: "Experienced", width: "80%" },
          { name: "Terraform", level: "Intermediate", width: "65%" },
          { name: "Docker", level: "Intermediate", width: "60%" },
          { name: "Kubernetes (EKS)", level: "Learning", width: "45%" },
          { name: "Linux", level: "Experienced", width: "80%" },
        ],
      },
    ];

    return (
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experiences</h2>

        <div className="container experience__container">
          {categories.map((category, idx) => (
            <div className="experience__category" key={idx}>
              <h3>{category.title}</h3>
              <div className="experience__content">
                {category.skills.map((skill, sIdx) => (
                  <article className="experience__details" key={sIdx}>
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{skill.name}</h4>
                      <div className="progress__container">
                        <div
                          className="progress__bar"
                          style={{
                            width: skill.width,
                            backgroundColor: this.getColorByLevel(skill.level),
                          }}
                        ></div>
                      </div>
                      <small className="text-light">{skill.level}</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Experience;
