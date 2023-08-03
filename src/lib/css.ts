import type { Css } from './interfaces/core'

export const css: Css = (
  el: HTMLElement | Element,
  styleMap: Record<string, string | number>
) => {
  const existStyles = el.getAttribute('style') || ''

  const styleRecords = existStyles.split(';').filter((v) => !!v.trim())

  const existStyleMap = styleRecords.reduce((res, v) => {
    const item = v.split(':').map((str) => str.trim())

    const key = item[0]
    const value = item[1]

    res[key] = value

    return res
  }, {} as Record<string, string>)

  const finalStyleMap = Object.assign(existStyleMap, styleMap)

  const styles = Object.keys(finalStyleMap)
    .filter((v) => !!v.trim())
    .reduce((res, key) => {
      res += `${key}: ${finalStyleMap[key]};`

      return res
    }, '')

  el.setAttribute('style', styles)
}
