"use client"

import { useState, useEffect, useRef } from "react"

export function useAnimatedVisibility(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          if (!options.repeat) {
            setHasAnimated(true)
          }
        } else if (!entry.isIntersecting && options.repeat) {
          setIsVisible(false)
        }
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
        threshold: options.threshold || 0.1,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options.root, options.rootMargin, options.threshold, options.repeat, hasAnimated])

  return [ref, isVisible]
}
