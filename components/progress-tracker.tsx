"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

interface ProgressTrackerProps {
  discovered: number
  total: number
  onShowFinalMessage?: () => void
}

export function ProgressTracker({ discovered, total, onShowFinalMessage }: ProgressTrackerProps) {
  const percentage = (discovered / total) * 100
  const isComplete = discovered === total

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 min-w-[140px]"
    >
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-primary" />
        <p className="text-sm text-muted-foreground">Discovered</p>
      </div>
      <div className="flex items-baseline gap-1 mb-3">
        <motion.p
          key={discovered}
          initial={{ scale: 1.5, color: "rgb(var(--primary))" }}
          animate={{ scale: 1, color: "rgb(var(--foreground))" }}
          className="text-3xl font-bold text-primary"
        >
          {discovered}
        </motion.p>
        <p className="text-lg text-muted-foreground">/ {total}</p>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>

      {isComplete && onShowFinalMessage && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onShowFinalMessage}
          className="mt-4 w-full px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          View Message
        </motion.button>
      )}
    </motion.div>
  )
}
