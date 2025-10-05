"use client"

import { useState } from "react"
import { constellations, type Constellation } from "@/lib/constellation-data"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Star } from "lucide-react"

interface ConstellationSidebarProps {
  onSelectConstellation: (constellation: Constellation) => void
  selectedConstellationId?: string | null
}

export function ConstellationSidebar({ onSelectConstellation, selectedConstellationId }: ConstellationSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredConstellations = constellations.filter((constellation) =>
    constellation.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="w-80 h-screen bg-background/95 backdrop-blur-sm border-r border-border flex flex-col">
      <div className="p-4 border-b border-border flex-shrink-0">
        <h2 className="text-2xl font-serif text-primary mb-4">Constellations</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search constellations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <ScrollArea className="flex-1 h-[calc(100vh-180px)]">
        <div className="p-2">
          {filteredConstellations.map((constellation) => {
            const isSelected = selectedConstellationId === constellation.id
            return (
              <button
                key={constellation.id}
                onClick={() => onSelectConstellation(constellation)}
                className={`w-full text-left p-3 rounded-lg transition-colors mb-1 ${
                  isSelected ? "bg-primary/20 text-primary border border-primary/30" : "hover:bg-accent text-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Star className={`w-4 h-4 ${isSelected ? "fill-primary" : ""}`} />
                  <span className="font-medium">{constellation.name}</span>
                </div>
                {constellation.stars.length > 0 && (
                  <div className="text-xs text-muted-foreground mt-1 ml-6">{constellation.stars.length} stars</div>
                )}
              </button>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}
