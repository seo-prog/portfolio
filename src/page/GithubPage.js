import React, { useState } from "react";
import emailjs from "@emailjs/browser"; 
import "../assest/GitHubPage.css"; 

const GithubPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email, 
      message: message, 
    };

    emailjs
      .send(
        "seoyeon_service", 
        "your_template_id", 
        templateParams,
        "your_public_key" 
      )
      .then(
        (response) => {
          console.log("이메일 전공 성공 !", response.status, response.text);
          alert("이메일을 성공적으로 보냈습니다 !");
          setEmail(""); 
          setMessage(""); 
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2> 연락을 바라시면 메일을 전송해주세요 !</h2>
      <form onSubmit={sendEmail} className="contact-form">
        <input
          type="email"
          placeholder="귀하의 이메일을 입력해주세요. "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="보낼 내용을 입력해주세요. "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">메일 전송하기</button>
      </form>
    </div>
  );
};

export default GithubPage;
