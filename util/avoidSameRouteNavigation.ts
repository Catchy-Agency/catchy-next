/**
 *
 * @param e <a> tag on click event
 * @param href Target url
 * @param currentPath Current url
 */
export default function avoidSameRouteNavigation(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  currentPath: string,
) {
  if (href === currentPath) {
    e.preventDefault();
  }
}
