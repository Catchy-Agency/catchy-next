import { useCallback, useEffect, useState } from 'react'

export const useMediaQuery = () => {
  // declare 3 state variables the hook needs
  const [resize, setResize] = useState<boolean>(false)
  const [width, setWidth] = useState<number>()
  const [device, setDevice] = useState('')

  // handelResize is the function that will run a "resize" javascript event in order to let the getComputedStyle function to know when to run.
  // useCallback here because the function goes in the dependency array of the useEffect where the resize event listened runs.
  const handleResize = useCallback(() => {
    setResize(() => !resize)
  }, [resize])

  useEffect(() => {
    // add a JavaScript "resize" event listener.
    window?.addEventListener('resize', handleResize)
    /* clean the event listener */
    return () => window?.removeEventListener('resize', handleResize)
  }, [handleResize])

  useEffect(() => {
    /* select the body element */
    const body = document.querySelector('body')

    //check if there is a body element and run getComputedStyle on it. getComputedStyle JavaScript native function will give back to us all the css style on the body element.
    //Split the width by characters to get an array from it, exemple: [‘7’, ‘6’, ‘8’. ‘p’, ‘x’]
    const style = body && window.getComputedStyle(body).width.split('')
    /* get rid of "px" frpm the character array and make it a numebr */
    const widthCustom = Number(style?.slice(0, style?.length - 2).join(''))

    // set the width state with the resulted number (width)
    setWidth(widthCustom)
    /* pass the resize state here to let the useEffect run on each resize javascript event. */
  }, [resize])

  // run this useEffect on the width state and set the device name string to whatever the (number) currently is:
  useEffect(() => {
    if (width) {
      /**
       * match bulma responsive variables
       * @see https://bulma.io/documentation/overview/responsiveness/
       */
      if (width <= 768) {
        setDevice('mobile')
      } else if (width <= 1024 && width > 768) {
        setDevice('tablet')
      } else if (width <= 1200 && width > 1024) {
        setDevice('desktop')
      } else {
        setDevice('fullhd')
      }
    }
  }, [width])

  // return the device state
  return device
}
