import { Component } from "react";
import "./guestbook.css";

class Guestbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        { name: "예림", message: "포트폴리오 멋져요!" },
        { name: "지원자", message: "잘 보고 갑니다 😊" }
      ],
      nameInput: "",
      messageInput: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { nameInput, messageInput, comments } = this.state;

    if (!nameInput.trim() || !messageInput.trim()) return;

    const newComment = {
      name: nameInput.trim(),
      message: messageInput.trim()
    };

    this.setState({
      comments: [newComment, ...comments],
      nameInput: "",
      messageInput: ""
    });
  };

  render() {
    const { comments, nameInput, messageInput } = this.state;

    return (
      <section id="guestbook" className="guestbook">
        <h2>📝 guestbook</h2>
        <form onSubmit={this.handleSubmit} className="guestbook__form">
          <input
            type="text"
            name="nameInput"
            placeholder="이름"
            value={nameInput}
            onChange={this.handleInputChange}
            required
          />
          <textarea
            name="messageInput"
            placeholder="메시지를 입력하세요"
            value={messageInput}
            onChange={this.handleInputChange}
            required
          />
          <button type="submit">남기기</button>
        </form>

        <div className="guestbook__comments">
          {comments.map((comment, index) => (
            <div key={index} className="comment__card">
              <p className="comment__name">{comment.name}</p>
              <p className="comment__message">{comment.message}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Guestbook;
