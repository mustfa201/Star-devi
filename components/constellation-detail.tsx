"use client"

import type { Constellation } from "@/lib/constellation-data"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { X, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ConstellationDetailProps {
  constellation: Constellation | null
  onClose: () => void
}

export function ConstellationDetail({ constellation, onClose }: ConstellationDetailProps) {
  if (!constellation) return null

  return (
    <div className="absolute top-4 right-4 w-96 max-h-[calc(100vh-2rem)] bg-slate-950/95 backdrop-blur-sm border border-slate-800 rounded-lg shadow-2xl">
      <div className="flex items-start justify-between p-4 border-b border-slate-800">
        <div>
          <h3 className="text-xl font-semibold text-amber-400 flex items-center gap-2">
            {constellation.isEasterEgg && <Sparkles className="h-5 w-5" />}
            {constellation.name}
          </h3>
          <p className="text-xs text-slate-400 mt-1">{constellation.stars.length} stars</p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="max-h-[calc(100vh-8rem)]">
        <div className="p-4 space-y-4">
          {/* Story */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-2">Story</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{constellation.story}</p>
          </div>

          {/* Stars */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-2">Notable Stars</h4>
            <div className="space-y-2">
              {constellation.stars.map((star, index) => (
                <div key={index} className="bg-slate-900/50 rounded-md p-3 border border-slate-800">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-3 w-3 text-amber-400" />
                      <span className="text-sm font-medium text-slate-200">{star.name || `Star ${index + 1}`}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Mag {star.magnitude.toFixed(2)}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-500">RA:</span>
                      <span className="text-slate-300 ml-1">{star.ra.toFixed(2)}h</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Dec:</span>
                      <span className="text-slate-300 ml-1">{star.dec.toFixed(2)}°</span>
                    </div>
                    {star.spectralType && (
                      <div>
                        <span className="text-slate-500">Type:</span>
                        <span className="text-slate-300 ml-1">{star.spectralType}</span>
                      </div>
                    )}
                    {star.distance && (
                      <div>
                        <span className="text-slate-500">Distance:</span>
                        <span className="text-slate-300 ml-1">{star.distance} ly</span>
                      </div>
                    )}
                  </div>

                  {star.description && <p className="text-xs text-slate-400 mt-2 italic">{star.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
