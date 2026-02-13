"use client"

import { useState, useEffect } from "react"

export default function ValentinePage() {
  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState("")
  const [displayText, setDisplayText] = useState("")
  const [showReasons, setShowReasons] = useState(false)

  const correctPassword = "veni" // CHANGE THIS

  const message =
    "From the moment you came into my life, everything became brighter. You are my favorite notification, my best decision, and my forever person ❤️"

  useEffect(() => {
    if (unlocked) {
      let i = 0
      const interval = setInterval(() => {
        setDisplayText(message.slice(0, i + 1))
        i++
        if (i === message.length) clearInterval(interval)
      }, 40)
      return () => clearInterval(interval)
    }
  }, [unlocked])

  const handleUnlock = () => {
    if (password === correctPassword) {
      setUnlocked(true)
    } else {
      alert("Wrong password 😝 Try again!")
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-rose-200 to-red-200 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none animate-pulse text-pink-500 opacity-20 text-6xl flex flex-wrap justify-around items-center">
        ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️
      </div>

      {!unlocked ? (
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center space-y-6">
          <h1 className="text-3xl font-bold text-rose-500">Secret Message 💌</h1>
          <p className="text-gray-600">Enter my special person's name: </p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          <button
            onClick={handleUnlock}
            className="bg-rose-500 text-white px-6 py-2 rounded-xl hover:bg-rose-600 transition"
          >
            Unlock ❤️
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center space-y-6">
          <h1 className="text-4xl font-bold text-rose-500">
            Happy Valentine’s Day ❤️
          </h1>

          <p className="text-gray-700 text-lg min-h-30">
            {displayText}
          </p>

          <button
            onClick={() => setShowReasons(!showReasons)}
            className="bg-pink-500 text-white px-6 py-2 rounded-xl hover:bg-pink-600 transition"
          >
            {showReasons ? "Hide Reasons" : "Why I Love You"}
          </button>

          {showReasons && (
            <ul className="text-left mt-4 space-y-2 text-gray-700">
              <li>💖 You support me even when I doubt myself</li>
              <li>💖 Your smile fixes my worst days</li>
              <li>💖 You believe in my crazy ideas</li>
              <li>💖 You make ordinary moments magical</li>
              <li>💖 You are my safe place</li>
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
