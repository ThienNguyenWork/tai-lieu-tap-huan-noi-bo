
import React, { useState, useRef, useEffect } from 'react';
import { getPracticeResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const PracticeSection: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        const newUserMessage: ChatMessage = { role: 'user', text: userInput };
        setMessages(prev => [...prev, newUserMessage]);
        setUserInput('');
        setIsLoading(true);

        try {
            const responseText = await getPracticeResponse(userInput);
            const modelMessage: ChatMessage = { role: 'model', text: responseText };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            console.error("Error fetching response from Gemini:", error);
            const errorMessage: ChatMessage = { role: 'error', text: "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col h-[75vh] transition-all duration-300 ease-in-out animate-fade-in">
            <div className="p-6 border-b-2 border-blue-200 dark:border-blue-800">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">Thực hành để nhớ</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Đặt câu hỏi để kiểm tra kiến thức của bạn về sản phẩm và quy trình.</p>
            </div>
            
            <div ref={chatContainerRef} className="flex-1 p-6 space-y-6 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                        {msg.role !== 'user' && (
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                                AI
                            </div>
                        )}
                        <div className={`max-w-lg p-4 rounded-2xl ${
                            msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 
                            msg.role === 'model' ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none' : 
                            'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-bl-none'
                        }`}>
                            <p className="whitespace-pre-wrap">{msg.text}</p>
                        </div>
                         {msg.role === 'user' && (
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center font-bold">
                                BẠN
                            </div>
                        )}
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-4">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                            AI
                        </div>
                        <div className="max-w-lg p-4 rounded-2xl bg-gray-200 dark:bg-gray-700">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSubmit} className="flex items-center space-x-4">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Nhập câu hỏi của bạn ở đây..."
                        className="flex-1 p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !userInput.trim()}
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                       {isLoading ? 'Đang gửi...' : 'Gửi'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PracticeSection;
