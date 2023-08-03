import type { RemoveElement } from './interfaces/core'

/**
 * (Internal) Removes an element from the DOM.
 */
export const removeElement: RemoveElement = (element: HTMLElement) => {
  element && element.parentNode && element.parentNode.removeChild(element)
}
