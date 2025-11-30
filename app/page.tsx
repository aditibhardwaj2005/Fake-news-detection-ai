'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ShieldCheckIcon, BrainIcon, ZapIcon, BarChart3Icon } from 'lucide-react'

export default function HomePage() {
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
            <Link href="/about" className="text-foreground hover:text-primary transition">About</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
            Detect Misinformation with <span className="text-primary">AI Precision</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            TruthVerify uses advanced AI analysis to identify fake news and misinformation in real-time. Trust verified information.
          </p>
        </div>

        <Link href="/detect">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Start Analyzing Now
          </Button>
        </Link>
      </section>

      {/* Features Grid */}
      <section className="bg-card/50 py-16 border-t border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TruthVerify</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-card border-border p-6 text-center hover:border-primary/50 transition">
              <BrainIcon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">Advanced machine learning for accurate detection</p>
            </Card>

            <Card className="bg-card border-border p-6 text-center hover:border-primary/50 transition">
              <ZapIcon className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Instant Results</h3>
              <p className="text-sm text-muted-foreground">Get real-time analysis in seconds</p>
            </Card>

            <Card className="bg-card border-border p-6 text-center hover:border-primary/50 transition">
              <ShieldCheckIcon className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure & Private</h3>
              <p className="text-sm text-muted-foreground">Your data is protected and never stored</p>
            </Card>

            <Card className="bg-card border-border p-6 text-center hover:border-primary/50 transition">
              <BarChart3Icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Detailed Reports</h3>
              <p className="text-sm text-muted-foreground">Comprehensive analysis and credibility scores</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <Card className="bg-primary/10 border-primary/30 p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Fight Misinformation?</h2>
          <p className="text-muted-foreground mb-6">Join thousands using TruthVerify to verify information</p>
          <Link href="/detect">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Analyzing
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8">
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
