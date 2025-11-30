const GEMINI_API_KEY = process.env.GEMINI_API_KEY

export async function analyzeNews(text) {
  if (!text || text.trim().length === 0) {
    throw new Error('Text is required for analysis')
  }

  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is not set')
  }

  const prompt = `
You are an expert misinformation analyst. Analyze the following text and return ONLY a JSON with this exact structure:

{
  "credibilityScore": <number 0-100 where 100 means definitely legitimate>,
  "verdict": "<Likely Fake | Possibly Fake | Likely Legit>",
  "reasoning": "<short explanation>",
  "risks": ["<risk 1>", "<risk 2>", "<risk 3>"],
  "recommendations": ["<advice 1>", "<advice 2>"]
}

Text:
${text}

Respond ONLY with valid JSON. No markdown, no comments.
`

  try {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + GEMINI_API_KEY,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    )

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`)
    }

    const data = await response.json()

    const resultText = data?.candidates?.[0]?.content?.parts?.[0]?.text
    if (!resultText) throw new Error("Unexpected Gemini response format")

    const jsonMatch = resultText.match(/\{[\s\S]*\}/)
    if (!jsonMatch) throw new Error("Could not parse JSON")

    const result = JSON.parse(jsonMatch[0])

    return {
      credibilityScore: result.credibilityScore ?? 0,
      verdict: result.verdict ?? "Unknown",
      reasoning: result.reasoning ?? "",
      risks: Array.isArray(result.risks) ? result.risks : [],
      recommendations: Array.isArray(result.recommendations) ? result.recommendations : []
    }

  } catch (err) {
    console.error("Gemini API error:", err)
    throw new Error("Failed to analyze text: " + err.message)
  }
}
