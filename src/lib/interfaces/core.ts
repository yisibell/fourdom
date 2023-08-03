export type HasClass = (element: HTMLElement, name: string) => boolean

export type AddClass = (element: HTMLElement, name: string | string[]) => void

export type RemoveClass = (
  element: HTMLElement,
  name: string | string[]
) => void

export type Css = (
  el: HTMLElement | Element,
  styleMap: Record<string, string | number>
) => void

export type RemoveElement = (element: HTMLElement) => void
