"use client"

import type React from "react"
import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react"
import { constellations } from "@/lib/constellation-data"
import { toStereographic, scaleToCanvas, magnitudeToSize, magnitudeToOpacity } from "@/lib/stereographic"

interface StarMapProps {
  highlightedConstellationId?: string | null
}

interface Transform {
  scale: number
  offsetX: number
  offsetY: number
}

interface ProjectedStar {
  x: number
  y: number
}

export interface StarMapRef {
  focusOnConstellation: (constellationId: string) => void
}

export const StarMap = forwardRef<StarMapRef, StarMapProps>(({ highlightedConstellationId }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 })
  const [transform, setTransform] = useState<Transform>({ scale: 1, offsetX: 0, offsetY: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const projectedStarsRef = useRef<Map<string, ProjectedStar[]>>(new Map())

  useImperativeHandle(ref, () => ({
    focusOnConstellation: (constellationId: string) => {
      const projectedStars = projectedStarsRef.current.get(constellationId)
      if (!projectedStars || projectedStars.length === 0) return

      // Calculate center of constellation
      const centerX = projectedStars.reduce((sum, s) => sum + s.x, 0) / projectedStars.length
      const centerY = projectedStars.reduce((sum, s) => sum + s.y, 0) / projectedStars.length

      // Animate to center the constellation
      const targetScale = 2
      const targetOffsetX = canvasSize.width / 2 - centerX * targetScale
      const targetOffsetY = canvasSize.height / 2 - centerY * targetScale

      // Smooth animation
      const startTransform = { ...transform }
      const duration = 800
      const startTime = Date.now()

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeProgress = 1 - Math.pow(1 - progress, 3) // Ease out cubic

        setTransform({
          scale: startTransform.scale + (targetScale - startTransform.scale) * easeProgress,
          offsetX: startTransform.offsetX + (targetOffsetX - startTransform.offsetX) * easeProgress,
          offsetY: startTransform.offsetY + (targetOffsetY - startTransform.offsetY) * easeProgress,
        })

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      animate()
    },
  }))

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect()
      setCanvasSize({ width: rect.width, height: rect.height })
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  useEffect(() => {
    const newProjectedStars = new Map<string, ProjectedStar[]>()

    constellations.forEach((constellation) => {
      const projectedStars = constellation.stars.map((star) => {
        const projected = toStereographic(star.ra, star.dec)
        return scaleToCanvas(projected, canvasSize.width, canvasSize.height)
      })
      newProjectedStars.set(constellation.id, projectedStars)
    })

    projectedStarsRef.current = newProjectedStars
  }, [canvasSize])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      const delta = -e.deltaY * 0.001
      const newScale = Math.max(0.5, Math.min(5, transform.scale * (1 + delta)))

      // Zoom towards mouse position
      const scaleChange = newScale / transform.scale
      const newOffsetX = mouseX - (mouseX - transform.offsetX) * scaleChange
      const newOffsetY = mouseY - (mouseY - transform.offsetY) * scaleChange

      setTransform({
        scale: newScale,
        offsetX: newOffsetX,
        offsetY: newOffsetY,
      })
    }

    canvas.addEventListener("wheel", handleWheel, { passive: false })
    return () => canvas.removeEventListener("wheel", handleWheel)
  }, [transform])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height)

    ctx.save()
    ctx.translate(transform.offsetX, transform.offsetY)
    ctx.scale(transform.scale, transform.scale)

    // Draw background stars
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvasSize.width
      const y = Math.random() * canvasSize.height
      const size = Math.random() * 1.5
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }

    // Draw constellations
    constellations.forEach((constellation) => {
      const isHighlighted = highlightedConstellationId === constellation.id

      const projectedStars = projectedStarsRef.current.get(constellation.id)
      if (!projectedStars) return

      // Draw constellation lines
      ctx.strokeStyle = isHighlighted ? "rgba(255, 200, 100, 0.8)" : "rgba(150, 150, 200, 0.3)"
      ctx.lineWidth = isHighlighted ? 2 : 1
      ctx.beginPath()

      constellation.connections.forEach(([start, end]) => {
        const startPoint = projectedStars[start]
        const endPoint = projectedStars[end]
        ctx.moveTo(startPoint.x, startPoint.y)
        ctx.lineTo(endPoint.x, endPoint.y)
      })

      ctx.stroke()

      // Draw stars
      constellation.stars.forEach((star, index) => {
        const point = projectedStars[index]
        const size = magnitudeToSize(star.magnitude)
        const opacity = magnitudeToOpacity(star.magnitude)

        ctx.fillStyle = isHighlighted ? `rgba(255, 200, 100, ${opacity})` : `rgba(200, 200, 255, ${opacity})`

        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fill()

        // Add glow effect for highlighted constellation
        if (isHighlighted) {
          ctx.fillStyle = `rgba(255, 200, 100, ${opacity * 0.3})`
          ctx.beginPath()
          ctx.arc(point.x, point.y, size * 2, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Draw constellation name if highlighted
      if (isHighlighted) {
        const centerX = projectedStars.reduce((sum, s) => sum + s.x, 0) / projectedStars.length
        const centerY = projectedStars.reduce((sum, s) => sum + s.y, 0) / projectedStars.length

        ctx.fillStyle = "rgba(255, 200, 100, 0.9)"
        ctx.font = "14px var(--font-sans)"
        ctx.textAlign = "center"
        ctx.fillText(constellation.name, centerX, centerY - 60)
      }
    })

    ctx.restore()
  }, [canvasSize, highlightedConstellationId, transform])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      const dx = e.clientX - dragStart.x
      const dy = e.clientY - dragStart.y
      setTransform((prev) => ({
        ...prev,
        offsetX: prev.offsetX + dx,
        offsetY: prev.offsetY + dy,
      }))
      setDragStart({ x: e.clientX, y: e.clientY })
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize.width}
      height={canvasSize.height}
      className="w-full h-full"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      aria-label="Interactive star map. Scroll to zoom, drag to pan."
    />
  )
})

StarMap.displayName = "StarMap"
