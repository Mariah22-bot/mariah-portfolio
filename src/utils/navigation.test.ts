import { describe, expect, it, vi } from 'vitest'
import { scrollToSection } from './navigation'

describe('scrollToSection', () => {
  it('should scroll to target with offset applied', () => {
    const target = {
      getBoundingClientRect: () => ({ top: 200 }),
    } as HTMLElement

    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined)

    scrollToSection(target, 80)

    expect(scrollTo).toHaveBeenCalledWith({
      top: 200 + window.scrollY - 80,
      behavior: 'smooth',
    })
  })
})
