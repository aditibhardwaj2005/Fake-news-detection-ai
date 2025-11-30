import { analyzeNews } from '@/lib/gemini'

export async function POST(request) {
  try {
    const { text } = await request.json()

    if (!text || text.trim().length === 0) {
      return Response.json(
        { error: 'Text is required' },
        { status: 400 }
      )
    }

    const result = await analyzeNews(text)

    return Response.json(result, { status: 200 })
  } catch (error) {
    console.error('API error:', error)
    return Response.json(
      { error: error.message || 'Failed to analyze text' },
      { status: 500 }
    )
  }
}
