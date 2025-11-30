'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { ShieldCheckIcon, AlertCircleIcon, CheckCircleIcon, XCircleIcon, LoaderIcon } from 'lucide-react'

interface AnalysisResult {
  credibilityScore: number
  verdict: string
  reasoning: string
  risks: string[]
  recommendations: string[]
}

export default function DetectPage() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState('')

  const handleAnalyze = async () => {
    if (!text.trim()) {
      setError('Please enter text to analyze')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const response = await fetch('/api/gemini/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })

      if (!response.ok) {
        throw new Error('Analysis failed')
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError('Failed to analyze text. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">TruthVerify</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition">Home</Link>
            <Link href="/detect" className="text-foreground hover:text-primary transition font-semibold text-primary">Detect</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">About</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Analyze News</h1>
          <p className="text-muted-foreground">Paste any Url, text or news content to check for misinformation</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="bg-card border-border p-6">
              <label className="block text-sm font-medium mb-3">Enter URL, Text to Analyze</label>
              <Textarea
                placeholder="Paste news content, articles, or any text you want to verify..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-64 bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
              
              <Button
                onClick={handleAnalyze}
                disabled={loading}
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <LoaderIcon className="w-4 h-4 animate-spin" />
                    Analyzing...
                  </div>
                ) : (
                  'Analyze Text'
                )}
              </Button>

              {error && (
                <div className="mt-4 p-3 bg-destructive/20 border border-destructive/50 rounded-lg text-sm text-destructive">
                  {error}
                </div>
              )}
            </Card>
          </div>

          {/* Results Section */}
          <div>
            {result && (
              <Card className="bg-card border-border p-6 space-y-4 sticky top-20">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Credibility Score</p>
                  <div className="flex items-end gap-3">
                    <div className="text-4xl font-bold text-primary">{result.credibilityScore}%</div>
                    {result.credibilityScore >= 70 ? (
                      <CheckCircleIcon className="w-6 h-6 text-accent mb-1" />
                    ) : result.credibilityScore >= 40 ? (
                      <AlertCircleIcon className="w-6 h-6 text-yellow-500 mb-1" />
                    ) : (
                      <XCircleIcon className="w-6 h-6 text-destructive mb-1" />
                    )}
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div>
                  <p className="text-sm font-semibold mb-1">Verdict</p>
                  <p className="text-sm text-muted-foreground">{result.verdict}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2">Analysis</p>
                  <p className="text-sm text-muted-foreground">{result.reasoning}</p>
                </div>

                {result.risks.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold mb-2">Risk Factors</p>
                    <ul className="space-y-1">
                      {result.risks.map((risk, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex gap-2">
                          <span>•</span>
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.recommendations.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold mb-2">Recommendations</p>
                    <ul className="space-y-1">
                      {result.recommendations.map((rec, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex gap-2">
                          <span>•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-primary" />
              <span className="font-semibold">TruthVerify</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 TruthVerify. Detecting misinformation together.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
