const isAtBottom = (container = document.documentElement) => {
  return window.innerHeight + container.scrollTop === container.offsetHeight;
}

export default isAtBottom;
