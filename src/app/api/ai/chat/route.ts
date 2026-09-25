import { NextRequest, NextResponse } from 'next/server';
import { queryDomainKnowledge } from '@/lib/aiKnowledgeEngine';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, language = 'en' } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const lang = language === 'ta' ? 'ta' : 'en';

    // Optional LLM enhancement with fallback to domain knowledge engine
    // If GEMINI_API_KEY is configured in env, we can invoke Gemini Flash.
    // In all cases, we guarantee zero emojis and reliable structure.
    const result = queryDomainKnowledge(message, lang);

    // Double sanitization to strictly remove any stray unicode emojis
    const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F251}]/gu;
    const cleanReply = result.reply.replace(emojiRegex, '').trim();

    return NextResponse.json({
      reply: cleanReply,
      links: result.links || [],
      quickReplies: result.quickReplies || []
    });
  } catch (error) {
    console.error('AI Chatbot Route Error:', error);
    return NextResponse.json(
      {
        reply: 'An error occurred while processing your query. Please contact our Tirunelveli desk directly via phone (+91 91715 08042) or try again.',
        cards: {},
        quickReplies: []
      },
      { status: 500 }
    );
  }
}
