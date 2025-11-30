import { analyzeNews } from '@/lib/gemini'

export default async function handler(req, res) {
  try {
    const { text } = req.body

    if (!text || text.trim().length === 0) {
      return res.status(400).json({ error: 'Text is required' })
    }

    const result = await analyzeNews(text)

    return res.status(200).json(result)
  } catch (error) {
    console.error('API error:', error)
    return res.status(500).json({
      error: error.message || 'Failed to analyze text'
    })
  }
}