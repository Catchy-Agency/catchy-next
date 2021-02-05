import { FC } from 'react'

let index = 0
let isPreviewMode = false

let previewURL = (_: Location) => ''
let exitURL = (_: Location) => ''

let previewKey = 'preview'
let exitKey = 'exit'

const togglePreview = () => {
  const destination = isPreviewMode
    ? exitURL(window.location)
    : previewURL(window.location)
  index = 0
  isPreviewMode = !isPreviewMode
  window.location.replace(destination)
}

if (typeof window !== 'undefined') {
  document.addEventListener('keydown', (e) => {
    if (e.target !== document.body) return
    const keyword = isPreviewMode ? exitKey : previewKey
    if (index === keyword.length - 1) {
      // Win condition
      togglePreview()
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
  isPreview: boolean
  previewUrl: (loc: Location) => string
  exitUrl: (loc: Location) => string
  previewKey?: string
  exitKey?: string
  component?: (
    isPreviewMode: boolean,
    togglePreview: () => void,
  ) => ReturnType<FC>
}> = (props) => {
  previewURL = props.previewUrl
  exitURL = props.exitUrl
  previewKey = props.previewKey || previewKey
  exitKey = props.exitKey || exitKey
  if (props.isPreview !== isPreviewMode) {
    // Reset if preview mode changes
    isPreviewMode = props.isPreview
    index = 0
  }
  return props.component ? props.component(isPreviewMode, togglePreview) : null
}
