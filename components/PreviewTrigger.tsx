import { FC } from 'react'

let index = 0
let isPreviewMode = false

let previewURL = (_: Location) => ''
let exitURL = (_: Location) => ''

let previewKey = 'preview'
let exitKey = 'exit'

if (typeof window !== 'undefined') {
  document.addEventListener('keydown', (e) => {
    if (e.target !== document.body) return
    const keyword = isPreviewMode ? exitKey : previewKey
    if (index === keyword.length - 1) {
      // Win condition
      const destination = isPreviewMode
        ? exitURL(window.location)
        : previewURL(window.location)
      index = 0
      isPreviewMode = !isPreviewMode
      window.location.replace(destination)
    } else if (keyword[index] === e.key) {
      // Step forward
      index++
    } else {
      // Lose
      index = 0
    }
  })
}

export const PreviewTrigger: FC<{
  isPreviewMode: boolean
  previewURL: (loc: Location) => string
  exitURL: (loc: Location) => string
  previewKey?: string
  exitKey?: string
}> = (props) => {
  previewURL = props.previewURL
  exitURL = props.exitURL
  previewKey = props.previewKey || previewKey
  exitKey = props.exitKey || exitKey
  if (props.isPreviewMode !== isPreviewMode) {
    // Reset if preview mode changes
    isPreviewMode = props.isPreviewMode
    index = 0
  }
  return <>{isPreviewMode && props.children}</>
}
