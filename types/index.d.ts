import type {
  AddClass,
  RemoveClass,
  HasClass,
  Css,
  RemoveElement,
} from '../src/lib/interfaces/core'

declare const addClass: AddClass
declare const removeClass: RemoveClass
declare const hasClass: HasClass
declare const css: Css
declare const removeElement: RemoveElement

export { addClass, removeClass, hasClass, css, removeElement }
