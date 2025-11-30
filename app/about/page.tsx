'use client'

import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ShieldCheckIcon, BrainIcon, LockIcon, ZapIcon } from 'lucide-react'

export default function AboutPage() {
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
            <Link href="/detect" className="text-foreground hover:text-primary transition">Detect</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition font-semibold text-primary">About</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About TruthVerify</h1>
          <p className="text-lg text-muted-foreground">
            Fighting misinformation with advanced AI technology
          </p>
        </div>

        <div className="space-y-8">
          {/* Mission */}
          <Card className="bg-card border-border p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              TruthVerify is dedicated to combating the spread of misinformation and fake news. In an era where false information spreads rapidly, we leverage cutting-edge AI technology to help users verify information credibility and make informed decisions. Our mission is to build a more informed and trustworthy information ecosystem.
            </p>
          </Card>

          {/* Technology */}
          <Card className="bg-card border-border p-8">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <BrainIcon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">AI Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced machine learning models analyze text for linguistic patterns, emotional manipulation, and factual inconsistencies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <LockIcon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Privacy First</h3>
                  <p className="text-sm text-muted-foreground">
                    Your data is processed securely and never stored or shared with third parties.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ZapIcon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Real-Time Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant credibility scores and detailed analysis in seconds.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheckIcon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Accuracy</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuously trained on verified datasets to improve detection accuracy.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Features */}
          <Card className="bg-card border-border p-8">
            <h2 className="text-2xl font-bold mb-4">Why TruthVerify?</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground">Powered by advanced Google Gemini AI technology</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground">Comprehensive credibility scoring system</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground">Detailed risk assessments and recommendations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground">User-friendly interface for quick analysis</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-muted-foreground">Completely free and accessible to everyone</span>
              </li>
            </ul>
          </Card>
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
