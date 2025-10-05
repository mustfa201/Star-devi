"use client"

import type { Constellation } from "@/lib/constellation-data"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ConstellationStoryPanelProps {
  constellation: Constellation
  onClose: () => void
}

export function ConstellationStoryPanel({ constellation, onClose }: ConstellationStoryPanelProps) {
  return (
    <div className="absolute bottom-0 left-80 right-0 h-64 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h3 className="text-xl font-serif text-primary">{constellation.name}</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      <ScrollArea className="h-[calc(100%-4rem)]">
        <div className="p-4">
          <p className="text-foreground leading-relaxed">{constellation.story}</p>

          {constellation.stars.some((star) => star.name) && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-primary mb-2">Notable Stars</h4>
              <div className="space-y-2">
                {constellation.stars
                  .filter((star) => star.name)
                  .map((star, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-medium text-foreground">{star.name}</span>
                      {star.spectralType && (
                        <span className="text-muted-foreground ml-2">Type: {star.spectralType}</span>
                      )}
                      {star.distance && <span className="text-muted-foreground ml-2">{star.distance} ly</span>}
                      {star.description && <p className="text-muted-foreground mt-1">{star.description}</p>}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
