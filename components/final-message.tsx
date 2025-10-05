"use client"

import { motion } from "framer-motion"
import { Heart, X, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FinalMessageProps {
  onClose: () => void
  onRestart: () => void
}

export function FinalMessage({ onClose, onRestart }: FinalMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl w-full bg-card border-2 border-primary/30 rounded-xl p-8 shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", damping: 15 }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-primary fill-primary" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-serif text-center text-primary mb-6"
        >
          You Found Them All
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="space-y-4 text-center"
        >
          <p className="text-lg text-foreground/90 leading-relaxed">
            Like the constellations above, our love story is written in the stars. Each moment we share becomes a point
            of light in the vast darkness, connecting to form something beautiful and eternal.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            You have discovered all the stories the heavens have to tell. But our story - the one we write together - is
            still unfolding, still growing brighter with each passing day.
          </p>
          <p className="text-xl font-serif text-primary mt-6">
            Thank you for being my constellation, my guiding star, my universe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground italic">With all my love, always and forever</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-6 flex justify-center"
        >
          <Button onClick={onRestart} variant="outline" className="gap-2 bg-transparent">
            <RotateCcw className="w-4 h-4" />
            Restart Journey
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
