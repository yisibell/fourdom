type HasClass = (element: HTMLElement, name: string) => boolean

type AddClass = (element: HTMLElement, name: string | string[]) => void

type RemoveClass = (
  element: HTMLElement,
  name: string | string[]
) => void

type Css = (
  el: HTMLElement | Element,
  styleMap: Record<string, string | number>
) => void

type RemoveElement = (element: HTMLElement) => void

declare const addClass: AddClass
declare const removeClass: RemoveClass
declare const hasClass: HasClass
declare const css: Css
declare const removeElement: RemoveElement

export { addClass, css, hasClass, removeClass, removeElement };
