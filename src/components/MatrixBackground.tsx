'use client'

import { useEffect, useRef } from 'react'

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    // Matrix characters
    const chars = '01'
    const charSize = 14
    const columns = Math.floor(canvas.width / charSize)
    const drops: number[] = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const draw = () => {
      // Semi-transparent background for fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Matrix text
      ctx.fillStyle = '#dc2626'
      ctx.font = `${charSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * charSize
        const y = drops[i] * charSize

        ctx.fillText(text, x, y)

        // Move drop down
        drops[i]++

        // Reset drop when it goes off screen
        if (drops[i] * charSize > canvas.height + Math.random() * 10000) {
          drops[i] = 0
        }
      }
    }

    const interval = setInterval(draw, 50)

    const handleResize = () => {
      setCanvasSize()
      // Recalculate columns
      const newColumns = Math.floor(canvas.width / charSize)
      if (newColumns > columns) {
        for (let i = columns; i < newColumns; i++) {
          drops[i] = Math.random() * -100
        }
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-10 dark:opacity-20"
      style={{ background: 'transparent' }}
    />
  )
}

export default MatrixBackground