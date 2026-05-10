"use client"

import * as React from "react"

export function ShareProgram({ title }: { title: string }) {
  const [copied, setCopied] = React.useState(false)

  async function handleShare() {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        })
      } catch (err) {
        // user cancelled or failed
      }
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    } else {
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement("textarea")
      textArea.value = url
      textArea.style.position = "fixed" // Prevent scrolling to bottom
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand("copy")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error("Failed to copy", err)
      }
      document.body.removeChild(textArea)
    }
  }

  return (
    <div className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm dark:border-stone-800/80 dark:bg-stone-900">
      <p className="text-sm font-medium text-stone-700 dark:text-stone-300">
        Spread the word
      </p>
      <p className="mt-1 text-xs text-stone-400 dark:text-stone-500">
        Share this program with friends and family to help us reach our goal faster.
      </p>
      <div className="mt-3">
        <button
          type="button"
          onClick={handleShare}
          className="flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-stone-200 text-xs font-medium text-stone-600 transition-colors hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 dark:border-stone-700 dark:text-stone-400 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400"
        >
          <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>
          {copied ? "Link Copied!" : "Share this program"}
        </button>
      </div>
    </div>
  )
}
