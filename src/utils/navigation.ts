export const scrollToSection = (target: HTMLElement, offset = 0) => {
  const targetPosition = target.getBoundingClientRect().top + window.scrollY
  const offsetPosition = targetPosition - offset

  window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
}
