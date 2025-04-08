import React, { useEffect } from "react";
import "./portfolio.css";
import { FaCalendarAlt, FaTags, FaUserFriends, FaGithub, FaAlignLeft } from "react-icons/fa";

const PortfolioModal = ({ project, onClose }) => {
  const { title, date, tags, description, members, github, motive, image } = project;

  // 모달이 열릴 때 body overflow를 막고, 닫힐 때 원복
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          &times;
        </button>

        <div className="modal__header">
          <img src={image} alt={title} className="modal__image" />
          <h2>{title}</h2>
        </div>

        <div className="modal__content">
          <p><FaCalendarAlt /> <strong>생성일:</strong> {date}</p>
          <p><FaTags /> <strong>태그:</strong> {tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}</p>
          <p><FaAlignLeft /> <strong>한 줄 설명:</strong> {description}</p>
          <p><FaUserFriends /> <strong>개발 인원:</strong> {members}</p>
          <p><FaGithub /> <strong>GitHub:</strong> <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>

          <div className="modal__section">
            <h3>📖 프로젝트 주제 선정 계기</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{motive}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
