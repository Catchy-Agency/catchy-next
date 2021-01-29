import { FC } from 'react'

const PREVIEW = 'preview'
const EXIT = 'exit'

let previewURL = (_: Location) => ''
let exitURL = (_: Location) => ''

let index = 0
let isPreview = false

if (typeof window !== 'undefined') {
  document.addEventListener('keydown', (e) => {
    if (e.target !== document.body) return
    const keyword = isPreview ? EXIT : PREVIEW
    if (index === keyword.length - 1) {
      // Win condition
      const destination = isPreview
        ? exitURL(window.location)
        : previewURL(window.location)
      index = 0
      isPreview = !isPreview
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
  isPreview: boolean
  previewURL: (loc: Location) => string
  exitURL: (loc: Location) => string
}> = (props) => {
  previewURL = props.previewURL
  exitURL = props.exitURL
  if (props.isPreview !== isPreview) {
    // Reset if preview status changes
    isPreview = props.isPreview
    index = 0
  }
  return <>{isPreview && props.children}</>
}
