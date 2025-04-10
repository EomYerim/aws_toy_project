import { posts } from "../../data/posts";
import { Link } from "react-router-dom";

const ContentList = () => {
  return (
    <div className="content-container">
      {posts.map((post) => (
        <Link to={`/content/${post.id}`} key={post.id}>
          <PostCard title={post.title} updated={post.updated} />
        </Link>
      ))}
    </div>
  );
};
