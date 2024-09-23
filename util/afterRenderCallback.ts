type TAfterRenderCallback = () => void;
export default function afterRenderCallback(callback: TAfterRenderCallback) {
  let lastHeight = document.body.scrollHeight;
  const checkInterval = 50;
  let stableCount = 0;

  const intervalId = setInterval(() => {
    const currentHeight = document.body.scrollHeight;

    if (currentHeight === lastHeight) {
      stableCount++;
      if (stableCount >= 5) {
        clearInterval(intervalId);
        callback();
      }
    } else {
      stableCount = 0;
      lastHeight = currentHeight;
    }
  }, checkInterval);
}
