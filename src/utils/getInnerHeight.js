export default function getInnerHeight(el) {
  const { clientHeight } = el
  const { paddingTop, paddingBottom } = window.getComputedStyle(el)
  return clientHeight - parseFloat(paddingTop) - parseFloat(paddingBottom)
}
