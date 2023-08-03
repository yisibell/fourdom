import type { AddClass, RemoveClass, HasClass } from './interfaces/core'

/**
 * (Internal) Determines if an element or space separated list of class names
 * contains a class name.
 */
export const hasClass: HasClass = (element: HTMLElement, name: string) => {
  return element.classList.contains(name)
}

/**
 * (Internal) Adds a class to an element.
 */
export const addClass: AddClass = (
  element: HTMLElement,
  name: string | string[]
) => {
  const tokens = typeof name === 'string' ? [name] : name

  element.classList.add(...tokens)
}

/**
 * (Internal) Removes a class from an element.
 */
export const removeClass: RemoveClass = (
  element: HTMLElement,
  name: string | string[]
) => {
  const tokens = typeof name === 'string' ? [name] : name
  element.classList.remove(...tokens)
}
