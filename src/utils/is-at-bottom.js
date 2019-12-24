const isAtBottom = (container = document.documentElement) => {
  return window.innerHeight + container.scrollTop >= container.offsetHeight - 100;
}

export default isAtBottom;
