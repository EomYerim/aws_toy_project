import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  const navigate = useNavigate();
  const isAdmin = true; // 임시로 관리자인 척

  if (!post) return <div>글을 찾을 수 없습니다.</div>;

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      // 실제 삭제 로직 (임시: navigate)
      navigate("/content");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>업데이트: {post.updated}</p>

      {isAdmin && (
        <div>
          <button onClick={() => navigate(`/content/edit/${post.id}`)}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      )}
    </div>
  );
};
