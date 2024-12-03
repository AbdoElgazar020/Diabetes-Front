import { FaUserMd, FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
import "../Styles/ChatbotPage.css"; // ملف CSS مخصص
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CHAT_URL } from "../urls/chat";

const ChatbotPage = () => {
  const navigate = useNavigate();
  const [chatInput, setChatInput] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const handleChatInput = async () => {
    const result = await axios.post(
      CHAT_URL,
      { name: chatInput },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`, // Replace with your actual token
        },
      }
    );
    console.log(result.data);
    // Handle the input from the user and send the message to the chatbot
  };
  return (
    <div className="chatbot-page">
      {/* Sidebar */}
      <div className="sidebar">
        <FaUserMd size={40} color="white" />
        <h3 className="sidebar-title">DBCB</h3>
      </div>

      {/* Main Chat Area */}
      <div className="chat-area">
        {/* Header */}
        <div className="chat-header">
          <h4>Welcome in our service</h4>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          <div className="message received">
            <p>Hello! How can I assist you today?</p>
          </div>
          <div className="message sent">
            <p>I need some advice about my health.</p>
          </div>
        </div>

        {/* Input Bar */}
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message here..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
          <button onClick={handleChatInput}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
