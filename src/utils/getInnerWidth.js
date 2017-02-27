export default function getInnerWidth(el) {
  const { clientWidth } = el
  const { paddingLeft, paddingRight } = window.getComputedStyle(el)
  return clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight)
}
