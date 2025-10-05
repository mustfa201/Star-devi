"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { Constellation } from "@/lib/constellation-data"
import { X } from "lucide-react"

interface ConstellationCardProps {
  constellation: Constellation | null
  onClose: () => void
}

export function ConstellationCard({ constellation, onClose }: ConstellationCardProps) {
  if (!constellation) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="max-w-2xl mx-auto bg-card/90 backdrop-blur-sm border border-primary/20 rounded-lg p-6 shadow-2xl pointer-events-auto"
        >
          <div className="flex items-start justify-between mb-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-serif text-primary"
            >
              {constellation.name}
            </motion.h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full hover:bg-muted/50"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/90 leading-relaxed text-lg"
          >
            {constellation.story}
          </motion.p>
          {constellation.isEasterEgg && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 p-4 bg-secondary/20 border border-secondary/30 rounded-md"
            >
              <p className="text-sm text-secondary font-medium">You found a hidden constellation!</p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
