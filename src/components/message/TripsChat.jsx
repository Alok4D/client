
import { motion } from "framer-motion";

// --- SAMPLE CHAT DATA ---
const messagesData = [
  { id: 1, sender: "Rainer", content: "When do you want to start your Airbnb business? Best regards Rainer", time: "12:10 PM", type: "received" },
  { id: 2, sender: "Rainer", content: "https://www.airbnb.de/users/45832328/listings", time: "12:10 PM", type: "received" },
  { id: 3, sender: "You", content: "hello", time: "12:10 PM", type: "sent", read: true },
  { id: 4, sender: "Rainer", content: "Hello 👋", time: "1:13 PM", type: "received", role: "Superhost Ambassador" },
  { id: 5, sender: "Rainer", content: "In which city is your Airbnb accommodation ?", time: "May 8", type: "received", role: "Superhost Ambassador" },
  { id: 6, sender: "Rainer", content: "If you do not want or need support, please write me here a short reply message.", time: "12:10 PM", type: "received" },
  { id: 7, sender: "You", content: "hello sir 👨‍💼", time: "8:44 PM", type: "sent" },
];

// --- MESSAGE BUBBLE ---
const MessageBubble = ({ message }) => {
  const isSent = message.type === "sent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`relative max-w-[70%] px-4 py-2 rounded-2xl shadow-md ${
          isSent
            ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-tl-none"
        }`}
      >
        <p className="text-[15px] leading-relaxed">{message.content}</p>
        <p
          className={`text-[11px] mt-1 ${
            isSent ? "text-gray-400 text-right" : "text-gray-500 text-left"
          }`}
        >
          {message.time}
        </p>

        {isSent && message.read && (
          <span className="absolute right-2 bottom-0 text-[10px] text-gray-400">
            ✓✓ Read
          </span>
        )}
      </div>
    </motion.div>
  );
};

// --- SIDEBAR ---
const ChatSidebar = () => (
  <div className="w-full md:w-80 border-r h-full flex flex-col bg-white/90 backdrop-blur-sm">
    {/* Header */}
    <div className="p-4 border-b bg-gray-50 sticky top-0 z-10">
      <input
        type="text"
        placeholder="🔍 Search messages"
        className="w-full p-2 pl-4 border rounded-full focus:ring-1 focus:ring-gray-400 focus:outline-none text-sm"
      />
      <div className="flex space-x-2 mt-3">
        <button className="px-3 py-1 bg-black text-white text-sm rounded-full shadow">
          All
        </button>
        <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-full hover:bg-gray-200">
          Unread
        </button>
      </div>
    </div>

    {/* Chat list */}
    <div className="p-3 overflow-y-auto flex-1">
      <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl transition cursor-pointer border border-gray-200">
        <img
          src="https://i.pravatar.cc/60?img=12"
          alt="Rainer"
          className="w-12 h-12 rounded-full shadow-sm"
        />
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Rainer</h3>
            <span className="text-xs text-gray-500">8:44 PM</span>
          </div>
          <p className="text-sm text-gray-700 truncate">You: hello sir 👨‍💼</p>
          <p className="text-xs text-gray-500">Superhost Ambassador</p>
        </div>
      </div>
    </div>
  </div>
);

// --- HEADER ---
const ChatHeader = ({ partnerName }) => (
  <div className="border-b bg-white/80 backdrop-blur-sm p-4 flex items-center justify-between sticky top-0 z-20 shadow-sm">
    <div className="flex items-center space-x-3">
      <img
        src="https://i.pravatar.cc/60?img=12"
        alt="avatar"
        className="w-10 h-10 rounded-full border"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{partnerName}</h2>
        <p className="text-xs text-green-500">Online</p>
      </div>
    </div>
  </div>
);

// --- INPUT AREA ---
const ChatInput = () => (
  <div className="p-4 border-t bg-white/80 backdrop-blur-sm flex items-center">
    <button className="p-2 text-gray-600 hover:text-black transition">
      📎
    </button>
    <input
      type="text"
      placeholder="Write a message..."
      className="flex-grow p-3 border rounded-full focus:ring-1 focus:ring-gray-400 focus:outline-none text-sm mx-2"
    />
    <button className="bg-black text-white rounded-full p-3 hover:scale-105 transition">
      ➤
    </button>
  </div>
);

// --- CHAT WINDOW ---
const ChatWindow = ({ messages, partnerName }) => (
  <div className="flex-grow h-full flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
    <ChatHeader partnerName={partnerName} />

    <div className="flex-grow p-6 overflow-y-auto space-y-4">
      {messages.map((msg) => (
        <div key={msg.id}>
          {msg.type === "received" && msg.id % 2 !== 0 && (
            <p className="text-center text-xs text-gray-400 py-2">
              — {msg.time} —
            </p>
          )}
          <MessageBubble message={msg} />
        </div>
      ))}
    </div>

    <ChatInput />
  </div>
);

// --- MAIN CHAT LAYOUT ---
const TripsChat = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:block w-1/3 lg:w-1/4 border-r">
        <ChatSidebar />
      </div>

      {/* Main Chat */}
      <div className="flex-grow">
        <ChatWindow messages={messagesData} partnerName="Rainer" />
      </div>
    </div>
  );
};

export default TripsChat;
