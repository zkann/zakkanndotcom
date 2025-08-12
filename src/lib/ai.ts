import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function generateResponse(prompt: string) {
  const result = await streamText({
    model: openai('gpt-4o-mini'),
    prompt: prompt,
    temperature: 0.7,
    maxTokens: 1000,
  });

  return result.toDataStreamResponse();
}

export async function generateBlogContent(topic: string) {
  const prompt = `As an AI automation consultant, write a professional blog post about ${topic}. 
  The post should be informative, actionable, and relevant to startups and growing companies. 
  Include practical advice and real-world examples. Keep it between 500-800 words.`;

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    prompt: prompt,
    temperature: 0.7,
    maxTokens: 1500,
  });

  return result.toDataStreamResponse();
}

export async function generateTechConsultation(query: string) {
  const prompt = `You are an experienced AI automation consultant providing technical consultation. 
  Answer the following question with practical, actionable advice: ${query}
  
  Focus on:
  - Strategic considerations
  - Technical best practices
  - Implementation recommendations
  - Risk mitigation
  - Cost-benefit analysis when relevant
  
  Keep your response professional and concise.`;

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    prompt: prompt,
    temperature: 0.6,
    maxTokens: 800,
  });

  return result.toDataStreamResponse();
} 