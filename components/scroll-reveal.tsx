"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  duration?: number
  distance?: number
  className?: string
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  distance = 50,
  className = "",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0)"

    switch (direction) {
      case "left":
        return `translate3d(-${distance}px, 0, 0)`
      case "right":
        return `translate3d(${distance}px, 0, 0)`
      case "up":
        return `translate3d(0, ${distance}px, 0)`
      case "down":
        return `translate3d(0, -${distance}px, 0)`
      default:
        return `translate3d(0, ${distance}px, 0)`
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
