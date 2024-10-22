import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import afterRenderCallback from '../../util/afterRenderCallback';
import {
  BackgroundPatternAboutCatchy,
  BackgroundPatternHome,
  BackgroundPatternOurTeam,
  BackgroundPatternOurWork,
  BackgroundPatternWhatWeDo,
} from '../icons/backgroundPatterns';
export default function useBackgroundPattern() {
  const router = useRouter();

  function getElementAlignment() {
    if (router.asPath === '/work') {
      return 'left';
    }
    return 'right';
  }

  function getBgPattern() {
    switch (router.asPath) {
      case '/':
        return `${BackgroundPatternHome}`;
      case '/what-we-do':
        return `${BackgroundPatternWhatWeDo}`;
      case '/work':
        return `${BackgroundPatternOurWork}`;
      case '/about':
        return `${BackgroundPatternAboutCatchy}`;
      case '/our-team':
        return `${BackgroundPatternOurTeam}`;
      case '/insights': //this is not a mistake, it's repeated in figma
        return `${BackgroundPatternWhatWeDo}`;
      default:
        return `${BackgroundPatternHome}`;
    }
  }

  const handlePositioning = useCallback(() => {
    const patternOverFooterPaths = ['/', '/what-we-do'];
    cleanOldPatterns();
    const body = document.querySelector('.primary-page');
    if (!body) return;
    const currentPath = router.pathname;
    const footer = document.querySelector('[data-footer]');
    if (!footer) return;
    const div = document.createElement('div');
    div.classList.add('bg-pattern-svg');
    div.innerHTML = getBgPattern();
    if (
      patternOverFooterPaths.includes(currentPath) &&
      footer &&
      footer.parentNode
    ) {
      footer.parentNode.insertBefore(div, footer);
      return;
    }
    const sections = Array.from(
      document.querySelectorAll('.primary-page section'),
    );
    const filteredSections = sections.filter(
      (section) => !section.classList.contains('ignoreBg'),
    );
    const position = Math.min(
      Math.floor(Math.random() * filteredSections.length) + 1,
      filteredSections.length - 1,
    );
    const element = filteredSections[position] as HTMLElement;
    div.classList.add(getElementAlignment());
    if (element && element.parentNode) {
      element.parentNode.insertBefore(div, element.nextSibling);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  useEffect(() => {
    afterRenderCallback(handlePositioning);
  }, [handlePositioning]);

  function cleanOldPatterns() {
    const patterns = document.querySelectorAll('.bg-pattern-svg');
    patterns.forEach((pattern) => pattern.remove());
  }
}
