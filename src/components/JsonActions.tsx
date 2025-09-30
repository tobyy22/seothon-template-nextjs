'use client'

import { Download, Clipboard } from 'lucide-react'
import { useCallback } from 'react'

export default function JsonActions({ jsonString }: { jsonString: string }) {
  const handleDownload = useCallback(() => {
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'ai-data.json'
    a.click()
    URL.revokeObjectURL(url)
  }, [jsonString])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(jsonString)
      // můžeš přidat vlastní toast/snackbar
    } catch (e) {
      console.error('Clipboard copy failed', e)
    }
  }, [jsonString])

  return (
    <div className="flex gap-3">
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700"
      >
        <Download className="h-5 w-5" />
        Download JSON
      </button>

      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
      >
        <Clipboard className="h-5 w-5" />
        Copy JSON
      </button>
    </div>
  )
}
