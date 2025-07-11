import { generateTechConsultation } from '@/lib/ai';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return new Response('Message is required', { status: 400 });
    }

    const response = await generateTechConsultation(message);
    return response;
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response('Internal server error', { status: 500 });
  }
}

export const runtime = 'edge'; 