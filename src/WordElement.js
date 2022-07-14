import { useState } from "react"
import lightOrDark from "./utils/lightOrDark"

export default function WordElement({ hex, word, meanings, handleColorChange, handleDialog }) {
  function removeAlphaFrom(hex) {
    // Color length 3 or 6? This color has no alpha, return it as is
    if (hex.length === 3 || hex.length === 6) return hex

    let alphaChannelIndex = hex.length

    // Color length 4 ? remove last 1 char, it is alpha channel
    if (hex.length === 4) alphaChannelIndex = -1

    // Color length 8 ? remove last 2 chars, it is alpha channel
    if (hex.length === 8) alphaChannelIndex = -2

    hex = hex.slice(0, alphaChannelIndex)

    return hex
  }

  const hexColorWithoutAlpha = removeAlphaFrom(hex)
  const whiteOrBlack = lightOrDark(hexColorWithoutAlpha)

  return (
    <div
      onClick={handleColorChange}
      className="color-container"
      data-color={hexColorWithoutAlpha}
      style={{
        backgroundColor: `#${hexColorWithoutAlpha}`,
        color: `#${whiteOrBlack}`,
      }}
    >
      <div className="color-info">
        <button onClick={handleDialog} data-hex={hex} className="color-info-btn" title="info">
          🛈
        </button>
      </div>

      <div className="color-hexword">
        <div className="color-hex">#{hex}</div>
        <div className="color-word">{word}</div>
      </div>
      <div className="clipboard-btn">
        <img
          className="clipboard-img"
          src={`clipboard-${whiteOrBlack}.png`}
          alt="copy"
          title="copy"
        />
      </div>
    </div>
  )
}
