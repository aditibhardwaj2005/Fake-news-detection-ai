export default function AnalysisResult({ result }) {
  const getScoreColor = (score) => {
    if (score >= 70) return 'text-red-600 dark:text-red-400'
    if (score >= 40) return 'text-yellow-600 dark:text-yellow-400'
    return 'text-green-600 dark:text-green-400'
  }

  const getVerdictBg = (verdict) => {
    if (verdict.includes('Likely Fake')) return 'bg-red-100 dark:bg-red-900'
    if (verdict.includes('Possibly Fake')) return 'bg-yellow-100 dark:bg-yellow-900'
    return 'bg-green-100 dark:bg-green-900'
  }

  const getVerdictText = (verdict) => {
    if (verdict.includes('Likely Fake')) return 'text-red-700 dark:text-red-200'
    if (verdict.includes('Possibly Fake')) return 'text-yellow-700 dark:text-yellow-200'
    return 'text-green-700 dark:text-green-200'
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-6">Analysis Results</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Confidence Score</p>
            <div className={`text-5xl font-bold ${getScoreColor(result.score)}`}>
              {result.score}%
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Verdict</p>
            <div className={`${getVerdictBg(result.verdict)} ${getVerdictText(result.verdict)} px-4 py-3 rounded-lg font-semibold`}>
              {result.verdict}
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Explanation</p>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
            {result.explanation}
          </p>
        </div>
      </div>
    </div>
  )
}
