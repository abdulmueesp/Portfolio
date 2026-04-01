"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Download, Bot } from "lucide-react";

type Message = {
  id: number;
  type: "bot" | "user";
  text: string;
  isCustomComponent?: boolean;
};

export default function HelpBoat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      text: "Hi there! 👋 I'm Abdul Muees's virtual assistant. How can I help you today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleDownloadCV = () => {
    // Dummy Google Drive Link trigger
    window.open("https://drive.google.com/file/d/dummy-cv-link/view", "_blank");
    
    // Add confirmation message automatically
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "bot",
        text: "✅ Resume downloaded successfully! Let me know if you need anything else.",
      },
    ]);
  };

  const getBotResponse = (query: string): { text: string; isCustomComponent?: boolean } => {
    const lowerQuery = query.toLowerCase();

    if (["hi", "hello", "hey", "greetings"].some((kw) => lowerQuery.includes(kw))) {
      return { text: "Hello! Nice to meet you. Feel free to ask about my skills, projects, experience, or download my CV!" };
    }
    if (["skill", "tech", "stack", "react", "node", "technology"].some((kw) => lowerQuery.includes(kw))) {
      return { text: "My tech stack includes: React.js, Next.js, Redux, Tailwind CSS, Node.js, Express.js, NestJS, PostgreSQL, and MongoDB. 🔥" };
    }
    if (["project", "work", "portfolio", "built"].some((kw) => lowerQuery.includes(kw))) {
      return { text: "Here are some of my key projects:\n\n1. Question Paper Generator (SaaS)\n2. Suprabhaatham News Portal\n3. Homesloc Booking Platform\n4. NextMe E-commerce Platform" };
    }
    if (["experience", "years", "background", "history"].some((kw) => lowerQuery.includes(kw))) {
      return { text: "I am a Full Stack Developer with over 1.6+ years of professional experience building scalable and high-performance web applications." };
    }
    if (["contact", "hire", "email", "reach", "message", "connect"].some((kw) => lowerQuery.includes(kw))) {
      return { text: "You can reach out to Abdul via the contact form on this page, or connect with him directly on LinkedIn!" };
    }
    if (["cv", "resume", "download", "document"].some((kw) => lowerQuery.includes(kw))) {
      return { text: "Sure! Click the button below to download the CV.", isCustomComponent: true };
    }

    return { text: "I'm sorry, I didn't quite catch that. You can ask me about my 'skills', 'projects', 'experience', or type 'resume' to download my CV." };
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add User Message
    const userMessage: Message = { id: Date.now(), type: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate Typing Delay for Bot
    setTimeout(() => {
      const response = getBotResponse(text);
      const botMessage: Message = { 
        id: Date.now() + 1, 
        type: "bot", 
        text: response.text, 
        isCustomComponent: response.isCustomComponent 
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500); // 1.5 seconds delay
  };

  const handleQuickReply = (text: string) => {
    handleSendMessage(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* --- Chat Window --- */}
      <div 
        className={`bg-white w-[90vw] md:w-[380px] h-[550px] max-h-[80vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden transition-all duration-500 transform origin-bottom-right mb-4 border border-gray-100 ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Header (Gradient UI) */}
        <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between text-white shadow-md z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm">
              <Bot size={22} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight font-orbitron tracking-wide">HelpBot</h3>
              <p className="text-xs text-blue-100 font-nunito flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse ring-2 ring-green-400/30"></span> Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4 font-nunito relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex w-full animate-in fade-in slide-in-from-bottom-2 duration-300 ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
              {msg.type === "bot" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mr-2 mt-1 shadow-sm">
                  <Bot size={16} className="text-white" />
                </div>
              )}
              
              <div 
                className={`max-w-[75%] p-3.5 text-sm flex flex-col gap-2 ${
                  msg.type === "user" 
                    ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl rounded-tr-sm shadow-md" 
                    : "bg-white text-gray-700 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100"
                }`}
              >
                <span className="whitespace-pre-line leading-relaxed font-medium">{msg.text}</span>
                
                {/* Special Download UI */}
                {msg.isCustomComponent && (
                  <button 
                    onClick={handleDownloadCV}
                    className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700 hover:from-blue-100 hover:to-purple-100 py-2.5 px-4 rounded-xl font-bold transition-colors border border-purple-200 shadow-sm"
                  >
                    <Download size={16} /> Download CV
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex w-full justify-start animate-in fade-in duration-300">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mr-2 mt-1 shadow-sm">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-white px-4 py-3.5 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 flex items-center gap-1.5 w-fit h-fit mt-1">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} className="pb-2" />
        </div>

        {/* Quick Replies */}
        {!isTyping && messages.length > 0 && messages[messages.length - 1].type === "bot" && (
           <div className="w-full bg-white px-4 py-2.5 flex gap-2 overflow-x-auto border-t border-gray-100 shadow-[0_-4px_10px_-4px_rgba(0,0,0,0.05)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shrink-0">
            {["Skills 🚀", "Projects 💻", "Resume 📄"].map((reply, idx) => (
              <button 
                key={idx}
                onClick={() => handleQuickReply(reply.split(" ")[0])}
                className="whitespace-nowrap px-4 py-1.5 bg-white border border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 text-xs font-bold font-nunito rounded-full transition-colors flex-shrink-0 shadow-sm"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputMessage); }}
          className="p-3 bg-white border-t border-gray-100 flex items-center gap-2 shrink-0 rounded-b-3xl"
        >
          <input 
            type="text" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-50 px-4 py-3 rounded-xl text-sm font-nunito focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-gray-700 border border-gray-100"
            disabled={isTyping}
          />
          <button 
            type="submit"
            disabled={!inputMessage.trim() || isTyping}
            className="w-11 h-11 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 shadow-md flex-shrink-0"
          >
            <Send size={18} className="translate-x-0.5" />
          </button>
        </form>
      </div>

      {/* --- Floating Toggle Button --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_10px_25px_-5px_rgba(147,51,234,0.5)] flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-50 group"
      >
        {isOpen ? (
          <X size={28} className="group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <MessageCircle size={28} className="group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </button>

    </div>
  );
}
