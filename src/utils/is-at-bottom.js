const isAtBottom = (container = document.documentElement) => {
  // [NOTE] Use magic number to trigger load more "just before" the page end for better UX
  const MANUAL_OFFSET = 30;
  const windowBaseline = window.innerHeight + window.scrollY;
  const containerBaseline = container.offsetHeight - MANUAL_OFFSET;

  return windowBaseline >= containerBaseline;
}

export default isAtBottom;
