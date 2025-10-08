import { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot"; // এটি ইম্পোর্ট করতে ভুলে যাবেন না
import { FiMessageCircle } from "react-icons/fi";
import { ThemeProvider } from "styled-components"; // এটিও দরকার

// --- 2.1 Custom Component for AI Response ---
const AICustomResponse = ({ steps, triggerNextStep }) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState('');

  useEffect(() => {
    // Get the user's last message from the steps object
    const userInput = steps.user_input.value; 
    
    // --- Mock AI API Call (এখানে আপনার আসল API বা লজিক বসবে) ---
    const callAiApi = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay
      
      if (userInput.toLowerCase().includes("price") || userInput.toLowerCase().includes("pricing") || userInput.toLowerCase().includes("দাম")) {
        return "Our current pricing for the premium plan is $100/year. Would you like to connect with a sales agent?";
      } else if (userInput.toLowerCase().includes("how") || userInput.toLowerCase().includes("kivabe")) {
        return "To get started, please visit our 'Getting Started' guide on the homepage.";
      } else {
        return "I'm sorry, I couldn't find an exact answer for that. Please choose from the options below or ask again.";
      }
    };

    callAiApi().then((response) => {
      setResult(response);
      setLoading(false);
      
      // After showing the AI response, trigger the next step ('4') which gives options.
      triggerNextStep({ trigger: '4' }); 
    });
  }, [steps, triggerNextStep]);

  return (
    <div style={{ padding: '8px' }}>
      {loading ? (
        <div style={{ display: 'flex', alignItems: 'center', color: '#666' }}>
          <span style={{ marginRight: '8px' }}>🤖</span> Thinking...
        </div>
      ) : (
        <p>{result}</p>
      )}
    </div>
  );
};

// --- 2.2 Custom Component for Live Agent Handoff ---
const LiveSupportWidget = ({ triggerNextStep }) => {
    useEffect(() => {
        // --- LIVE CHAT INTEGRATION POINT ---
        // এখানে আপনি আপনার লাইভ চ্যাট প্রদানকারীর (যেমনঃ Chatwoot, Tawk.to) ইন্টিগ্রেশন কোড যোগ করতে পারেন।
        console.log("Connecting to live agent...");
        
        // After a delay, move to the end state
        setTimeout(() => {
            triggerNextStep({ trigger: 'end_chat' });
        }, 3000); 
    }, [triggerNextStep]);

    return (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
            🔔 Live Agent is connecting now. Please stay on this window...
        </p>
    );
}

// --- 2.3 Chatbot Theme (Optional) ---
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#e61e4d', // Pink/Red Header
    headerFontColor: '#fff',
    headerFontSize: '16px',
    botBubbleColor: '#f1f1f1',
    botFontColor: '#000',
    userBubbleColor: '#000',
    userFontColor: '#fff',
};

// --- 2.4 Main Component ---
const Message = () => {
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen(!open);

  const steps = [
    { id: "1", message: "Hi! 👋 How can I help you with your web-related query today?", trigger: "user_input" },
    { id: "user_input", user: true, trigger: "2" },
    { 
        id: "2", 
        // AI রেসপন্স কম্পোনেন্ট
        component: <AICustomResponse />, 
        waitAction: true, 
        trigger: '4' 
    },
    { 
        id: "4", 
        message: "Can I assist you further, or would you like to speak to a person?", 
        trigger: 'support_options' 
    },
    {
        id: "support_options",
        options: [
            { value: 'faq', label: 'Ask another AI question', trigger: '1' },
            { value: 'live_support', label: 'Connect to Live Agent 🙋', trigger: 'live_chat' },
        ],
    },
    {
        id: "live_chat",
        // লাইভ সাপোর্ট কম্পোনেন্ট
        component: <LiveSupportWidget />,
        waitAction: true,
        trigger: 'end_chat',
    },
    { id: "end_chat", message: "Thank you! A human agent will contact you shortly.", end: true },
  ];

  const chatbot = (
    <ThemeProvider theme={theme}>
        <ChatBot 
            steps={steps} 
            headerTitle="Support Chat"
            // অন্যান্য props
            floating={false}
            hideSubmitButton={false}
            style={{ 
                border: 'none', 
                boxShadow: 'none', 
                borderRadius: '0',
            }}
        />
    </ThemeProvider>
  );


  return (
    <div>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 bg-pink-600 text-white p-4 rounded-full shadow-xl hover:bg-pink-700 transition transform hover:scale-105 z-50"
      >
        <FiMessageCircle size={28} />
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-20 right-8 w-80 md:w-96 bg-white shadow-2xl rounded-xl overflow-hidden z-50 h-[500px]">
            {chatbot}
        </div>
      )}
    </div>
  );
};

export default Message;