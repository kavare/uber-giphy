const isAtBottom = (container = document.documentElement) => {
  // [NOTE] Use magic number to trigger load more "just before" the page end for better UX
  const MANUAL_OFFSET = 50;
  const windowBaseline = window.innerHeight + container.scrollTop;
  const containerBaseline = container.offsetHeight - MANUAL_OFFSET;

  return windowBaseline >= containerBaseline;
}

export default isAtBottom;
