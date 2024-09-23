import { useRouter } from 'next/router';
import { useEffect } from 'react';
import afterRenderCallback from '../../util/afterRenderCallback';
import throttle from '../../util/throttle';
import { BackgroundPatternHome } from '../icons';
export default function useBackgroundPattern() {
  const router = useRouter();
  const patternOverFooterPaths = ['/', '/what-we-do'];
  useEffect(() => {
    afterRenderCallback(handlePositioning);
    const throttledHandlePositioning = throttle(handlePositioning, 100);
    window.addEventListener('resize', throttledHandlePositioning);
    return () => {
      window.removeEventListener('resize', throttledHandlePositioning);
    };
  }, []);

  function handlePositioning() {
    cleanOldPatterns();
    const body = document.querySelector('.primary-page');
    if (window.innerWidth < 1024) return;
    if (!body) return;
    if (body.scrollHeight < 3150) return;
    const currentPath = router.pathname;
    const svgWidth = 350;
    const svgHeight = 350;
    const footer = document.querySelector('[data-footer]');
    const div = document.createElement('div');
    div.classList.add('bg-pattern-svg');
    div.innerHTML = `${BackgroundPatternHome}`;
    div.style.setProperty('width', `${svgWidth}px`);
    div.style.setProperty('height', `${svgHeight}px`);
    if (patternOverFooterPaths.includes(currentPath)) {
      const positionY =
        body!.scrollHeight - footer!.clientHeight - svgHeight / 2;
      div.style.setProperty('top', `${positionY}px`);
      body.appendChild(div);
      div.style.setProperty('right', `0`);
    } else if (body.scrollHeight > 3150) {
      const sections = Array.from(
        document.querySelectorAll('.primary-page section'),
      ) as HTMLElement[];
      const filteredSections = sections.filter(
        (section) => !section.classList.contains('TitleTextRecord'),
      );
      const position = Math.min(
        Math.floor(Math.random() * filteredSections.length) + 1,
        filteredSections.length - 1,
      );
      const element = filteredSections[position] as HTMLElement;
      const positionY =
        element.offsetTop + element.offsetHeight - svgHeight / 2;
      div.style.setProperty('top', `${positionY}px`);
      Math.random() >= 0.5
        ? div.style.setProperty('right', `0`)
        : div.style.setProperty('left', `0`);
      body.appendChild(div);
    }
  }

  function cleanOldPatterns() {
    const patterns = document.querySelectorAll('.bg-pattern-svg');
    patterns.forEach((pattern) => pattern.remove());
  }
}
