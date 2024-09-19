import { useRouter } from 'next/router';
import { useEffect } from 'react';
import throttle from '../../util/throttle';
import { BackgroundPatternHome } from '../icons';
export default function useBackgroundPattern() {
  const router = useRouter();
  const patternOverFooterPaths = ['/', '/what-we-do'];
  const browserRenderingTimeout = 50;
  useEffect(() => {
    handlePositioning();
    const throttledHandlePositioning = throttle(handlePositioning, 100);
    window.addEventListener('resize', throttledHandlePositioning);
    return () =>
      window.removeEventListener('resize', throttledHandlePositioning);
  }, []);

  function handlePositioning() {
    cleanOldPatterns();
    if (window.innerWidth < 1024) return;
    const body = document.querySelector('.primary-page');
    if (!body) return;
    if (body.scrollHeight < 3150) return;
    const currentPath = router.pathname;
    const svgWidth = 500;
    const svgHeight = 500;
    const footer = document.querySelector('[data-footer]');
    const div = document.createElement('div');
    div.classList.add('bg-pattern-svg');
    div.innerHTML = `${BackgroundPatternHome}`;
    div.style.setProperty('width', `${svgWidth}px`);
    div.style.setProperty('height', `${svgHeight}px`);
    if (patternOverFooterPaths.includes(currentPath)) {
      setTimeout(() => {
        const positionY = body!.scrollHeight - footer!.clientHeight - svgHeight;
        div.style.setProperty('top', `${positionY}px`);
        body.appendChild(div);
      }, browserRenderingTimeout);
    } else if (body.scrollHeight > 3150) {
      setTimeout(() => {
        const randomPosition =
          body.scrollHeight * (Math.random() * (0.7 - 0.3) + 0.3);
        const positionY = randomPosition;
        div.style.setProperty('top', `${positionY}px`);
        body.appendChild(div);
      }, browserRenderingTimeout);
    }
  }

  function cleanOldPatterns() {
    const patterns = document.querySelectorAll('.bg-pattern-svg');
    patterns.forEach((pattern) => pattern.remove());
  }
}
