import React, { useState, useRef, useEffect } from "react";

function CareerChat() {
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([
        { role: "system", content: "Welcome! Ask me anything about your career." }
    ]);
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!question.trim()) return;
        setMessages([...messages, { role: "user", content: question }]);
        setLoading(true);

        const res = await fetch("http://localhost:5000/api/career-chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question }),
        });
        const data = await res.json();
        setMessages((msgs) => [
            ...msgs,
            { role: "assistant", content: data.answer }
        ]);
        setQuestion(""); // Clear textarea after sending
        setLoading(false);
    };

    return (
        <div className="h-full w-full flex flex-col bg-base-200 shadow-xl rounded-lg border-2 border-gray-500">
            <div className="text-base-content text-lg font-bold px-6 py-4 border-b border-base-300">
                Career Advisor AI Chat
            </div>
            {/* Fixed height, scrollable chat area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`chat ${msg.role === "user" ? "chat-end" : "chat-start"}`}
                    >
                        <div
                            className={`chat-bubble break-words ${msg.role === "user"
                                ? "chat-bubble-primary"
                                : "chat-bubble-neutral"
                                }`}
                        >
                            {msg.content}
                        </div>
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-0 p-4 border-t border-base-300 justify-center"
            >
                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Type your question..."
                    className="textarea textarea-bordered w-full resize-none rounded-md focus:outline-none"
                    rows={2}
                    style={{
                        minHeight: "2.5rem",
                        maxHeight: "6rem",
                        overflowY: "auto",
                        wordBreak: "break-word",
                    }}
                    disabled={loading}
                />
                <button
                    type="submit"
                    className={`btn btn-primary rounded-md ml-2 ${loading ? "btn-disabled" : ""}`}
                    disabled={loading}
                >
                    {loading ? "..." : "Send"}
                </button>
            </form>
        </div>

    );
}

export default CareerChat;
