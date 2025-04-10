import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 DB 저장 로직
    console.log({ title, content });
    navigate("/content");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "40px" }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" />
      <button type="submit">저장</button>
    </form>
  );
};

export default CreatePost;
