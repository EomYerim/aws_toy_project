import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { posts } from "../data/posts";

const EditPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 수정 저장 로직
    navigate(`/content/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "40px" }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">수정 완료</button>
    </form>
  );
};

export default EditPost;
