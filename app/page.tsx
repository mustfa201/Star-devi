"use client"

import { useState, useRef } from "react"
import { StarMap, type StarMapRef } from "@/components/star-map"
import { ConstellationSidebar } from "@/components/constellation-sidebar"
import { ConstellationStoryPanel } from "@/components/constellation-story-panel"
import type { Constellation } from "@/lib/constellation-data"

export default function Home() {
  const [selectedConstellation, setSelectedConstellation] = useState<Constellation | null>(null)
  const starMapRef = useRef<StarMapRef>(null)

  const handleSelectConstellation = (constellation: Constellation) => {
    setSelectedConstellation(constellation)
    starMapRef.current?.focusOnConstellation(constellation.id)
  }

  const handleCloseStory = () => {
    setSelectedConstellation(null)
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="relative w-full h-screen flex">
        {/* Sidebar */}
        <ConstellationSidebar
          onSelectConstellation={handleSelectConstellation}
          selectedConstellationId={selectedConstellation?.id}
        />

        {/* Star Map */}
        <div className="flex-1 relative">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-background/80 to-transparent pointer-events-none z-10">
            <h1 className="text-5xl font-serif text-center text-primary text-balance">Star Devi</h1>
            <p className="text-center text-muted-foreground mt-2">
              Select a constellation from the list to explore its story
            </p>
          </div>

          <StarMap ref={starMapRef} highlightedConstellationId={selectedConstellation?.id} />

          {/* Story Panel */}
          {selectedConstellation && (
            <ConstellationStoryPanel constellation={selectedConstellation} onClose={handleCloseStory} />
          )}
        </div>
      </div>
    </div>
  )
}
