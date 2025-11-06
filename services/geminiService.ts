
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available in the environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey });

const model = 'gemini-2.5-flash';

const systemInstruction = `You are a helpful training assistant for a software company that provides educational products to schools in Vietnam. 
Your role is to act as a knowledgeable senior employee quizzing a new hire.
Answer questions clearly, concisely, and in Vietnamese.
Your goal is to help new employees practice and remember key information about the company's solutions, pricing, and implementation process based on the provided training materials. 
Be friendly and encouraging.`;

export const getPracticeResponse = async (prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
            },
        });
        
        return response.text;
    } catch (error) {
        console.error("Gemini API call failed:", error);
        throw new Error("Failed to get response from Gemini.");
    }
};
