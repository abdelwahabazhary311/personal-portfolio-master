"use client"

import React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface StaggerContainerProps {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}

export function StaggerContainer({ children, staggerDelay = 100, className = "" }: StaggerContainerProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          style={{
            transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 30px, 0)",
            opacity: isVisible ? 1 : 0,
            transition: `all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
