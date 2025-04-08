import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/ai3.png"; 
import IMG2 from "../../assets/sunny.png"; 
import IMG3 from "../../assets/baemo3.png"; 
import IMG4 from "../../assets/cgv4.png";
import IMG5 from "../../assets/art2.png"; 
import IMG6 from "../../assets/pp.png"; 
import PortfolioModal from "./PortfolioModal";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Project 1",
      date: "2024년 6월 18일",
      tags: ["k8s", "SpringBoot", "ReactNative", "Kafka", "TypeScript", "Java", "AWS", "PostgreSQL"],
      description: "배드민턴 올인원 플랫폼",
      members: "6명 (백엔드 3, 프론트 3)",
      github: "https://github.com/HeadOff-TIL",
      motive: `국내 배드민턴 동호인을 위한 통합 플랫폼 부재로 인한 불편함을 해소하고자 기획하였습니다.\n여러 플랫폼에 분산된 정보를 한 곳에 모아 사용자 편의성과 접근성을 높이고자 하였습니다.`,
    },
    {
      id: 2,
      image: IMG2,
      title: "Project 2",
      date: "2023년 12월 10일",
      tags: ["Django", "React", "MySQL", "Docker", "AWS"],
      description: "온라인 스터디 관리 플랫폼",
      members: "4명 (백엔드 2, 프론트 2)",
      github: "https://github.com/example-study",
      motive: `비대면 시대에 온라인 스터디 그룹을 효율적으로 관리하고자 스케줄링, 출결, 과제 관리 기능을 제공하는 플랫폼을 개발하였습니다.`,
    },
    {
      id: 3,
      image: IMG3,
      title: "Project 3",
      date: "2023년 8월 5일",
      tags: ["Node.js", "Express", "MongoDB", "Vue", "AWS"],
      description: "개발자 커뮤니티 플랫폼",
      members: "5명 (백엔드 2, 프론트 3)",
      github: "https://github.com/dev-community",
      motive: `개발자들이 프로젝트 팀원을 쉽게 찾고 협업할 수 있도록 하는 커뮤니티 공간이 필요하다고 느껴 기획하게 되었습니다.`,
    },
    {
      id: 4,
      image: IMG4,
      title: "Project 4",
      date: "2022년 11월 20일",
      tags: ["SpringBoot", "JPA", "Thymeleaf", "MySQL"],
      description: "블로그 및 포트폴리오 게시 플랫폼",
      members: "1명 (개인 프로젝트)",
      github: "https://github.com/portfolio-blog",
      motive: `개인 기술 블로그 및 포트폴리오를 동시에 관리할 수 있는 플랫폼을 직접 개발하고자 하였습니다.`,
    },
    {
      id: 5,
      image: IMG5,
      title: "Project 5",
      date: "2023년 3월 2일",
      tags: ["Flask", "Python", "OpenCV", "AI", "YOLO"],
      description: "실시간 객체 감지 기반 안전관리 시스템",
      members: "3명 (백엔드 2, AI 모델 1)",
      github: "https://github.com/safety-ai",
      motive: `산업 현장에서 발생할 수 있는 위험 상황을 실시간으로 인식하고 알림을 주는 안전관리 시스템이 필요하다고 판단하여 개발하였습니다.`,
    },
    {
      id: 6,
      image: IMG6,
      title: "Project 6",
      date: "2024년 2월 15일",
      tags: ["Next.js", "Firebase", "TailwindCSS"],
      description: "간편한 링크 기반 메모 서비스",
      members: "2명 (프론트 1, 백엔드 1)",
      github: "https://github.com/linkmemo",
      motive: `링크를 저장하고 간편하게 메모를 추가할 수 있는 개인용 북마크 서비스가 있으면 좋겠다고 생각하여 개발하게 되었습니다.`,
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item) => (
          <article key={item.id} className="portfolio__item" onClick={() => setSelectedProject(item)}>
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>

      {selectedProject && (
        <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Portfolio;
