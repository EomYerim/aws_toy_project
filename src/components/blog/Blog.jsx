const Blog = () => {
    return (
      <section id="blog" className="p-8 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-6">📝 블로그</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Spring Boot 서버 성능 개선기</h3>
            <p className="text-sm text-gray-600">2025.04.10</p>
            <p>Spring에서 DB 커넥션 병목이 발생한 경험과 해결 방법을 공유합니다...</p>
          </div>
          {/* 다른 글들 */}
        </div>
      </section>
    );
  };
  export default Blog;
  