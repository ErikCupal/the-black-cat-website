import { css as _css, StyleAttribute } from 'glamor'

export const css: (...rules: React.CSSProperties[]) => StyleAttribute = _css
export const s = css
export const ss = css
export const S = css
export const SS = css
export const $ = css
export const $$ = css

const minWidthMedia = (px: number) => `@media(min-width: ${px}px)`

export const sm = minWidthMedia(500)
export const md = minWidthMedia(900)
export const lg = minWidthMedia(1200)

export const style = (styles: React.CSSProperties) => styles