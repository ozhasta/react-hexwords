export default function browserTheme(mainColor, contrastColor) {
  const root = document.querySelector(":root")

  // Changes scrollbar color based on selected color.
  // Only works for supported (Chrome, Firefox) desktop browsers.
  root.style.setProperty("scrollbar-color", `#${contrastColor} #${mainColor}`)
  root.style.setProperty("--contrastColor", `#${contrastColor}`)
  root.style.setProperty("--mainColor", `#${mainColor}`)

  // Changes browser theme color (around address bar, tab buttons) based on selected color.
  // Only works for supported (Chrome, Safari, Samsung, Mi) mobile browsers.
  document.querySelector('meta[name="theme-color"]').setAttribute("content", `#${mainColor}`)
}
