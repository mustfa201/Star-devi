"use client"

import { useState } from "react"
import { constellations, type Constellation } from "@/lib/constellation-data"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface ConstellationListProps {
  onConstellationSelect: (constellation: Constellation) => void
  selectedConstellation: Constellation | null
  discoveredIds: Set<string>
}

export function ConstellationList({
  onConstellationSelect,
  selectedConstellation,
  discoveredIds,
}: ConstellationListProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const visibleConstellations = constellations.filter((c) => !c.isEasterEgg || discoveredIds.has(c.id))

  return (
    <div
      className={cn(
        "relative h-full bg-slate-950/90 backdrop-blur-sm border-r border-slate-800 transition-all duration-300",
        isCollapsed ? "w-12" : "w-80",
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-4 z-10 h-6 w-6 rounded-full bg-slate-800 hover:bg-slate-700"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </Button>

      {!isCollapsed && (
        <div className="flex flex-col h-full p-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-amber-400 mb-1">Constellations</h2>
            <p className="text-xs text-slate-400">
              {discoveredIds.size} of {visibleConstellations.length} discovered
            </p>
          </div>

          <ScrollArea className="flex-1">
            <div className="space-y-1">
              {visibleConstellations.map((constellation) => {
                const isDiscovered = discoveredIds.has(constellation.id)
                const isSelected = selectedConstellation?.id === constellation.id

                return (
                  <button
                    key={constellation.id}
                    onClick={() => onConstellationSelect(constellation)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-md transition-colors text-sm",
                      isSelected
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        : isDiscovered
                          ? "hover:bg-slate-800 text-slate-200"
                          : "hover:bg-slate-800 text-slate-500",
                      !isDiscovered && "opacity-50",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Star
                        className={cn("h-3 w-3", isDiscovered ? "fill-amber-400 text-amber-400" : "text-slate-600")}
                      />
                      <span className="font-medium">{constellation.name}</span>
                    </div>
                    {isDiscovered && (
                      <div className="text-xs text-slate-400 mt-1 ml-5">{constellation.stars.length} stars</div>
                    )}
                  </button>
                )
              })}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  )
}
