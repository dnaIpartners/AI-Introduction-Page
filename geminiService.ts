
import { GoogleGenAI } from "@google/genai";

export const getAIResponse = async (userPrompt: string, history: string = '') => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    // Construct the full prompt context including history
    const fullContent = history 
      ? `${history}\nUser: ${userPrompt}` 
      : userPrompt;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: fullContent,
      config: {
        systemInstruction: `You are IPARTNERS' AX (AI Experience) Strategy Consultant. 
        Your goal is to explain how IPARTNERS can help clients transform their business with AI.
        
        IPARTNERS specializes in:
        1. AX STRATEGY (AI Transformation Roadmap, Tech Feasibility)
        2. GENERATIVE BRAND EXPERIENCE (AI Art, Virtual Humans)
        3. INTELLIGENT PLATFORM (LLM Integration, RAG Systems, Chatbots)
        4. DATA & INSIGHTS (CDP, Predictive Analytics)
        5. AUTOMATED MARKETING (AI Copywriting, DCO)
        
        **CRITICAL INSTRUCTION FOR VAGUE INPUTS:**
        If the user's input is too vague or short (e.g., "AI", "marketing", "consulting"), **do not** provide a full strategy yet. Instead, ask **one** specific clarifying question to understand their industry or goal (e.g., "Are you looking to automate your internal processes or enhance customer experience with AI?").
        
        **INSTRUCTION FOR SPECIFIC INPUTS:**
        If the input provides context, provide professional, innovative strategic advice focusing on "AI Transformation" and "Data-Driven Efficiency". Explain how our specific services apply.
        
        Speak in Korean primarily, but use professional English terms (AX, LLM, RAG, Generative AI) where appropriate.
        Keep the tone premium, futuristic, and expert.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "상담 중 오류가 발생했습니다. 다시 시도해 주세요.";
  }
};
