// tslint:disable:no-any
import { css } from 'styled-components'

const createMinWidthMedia = (px: number) => {
  return ((...args: any[]) => css`
    @media (min-width: ${px}px) {
      ${(css as any)(...args)}
    }
  `) as typeof css
}

export const sm = createMinWidthMedia(500)
export const md = createMinWidthMedia(900)
export const lg = createMinWidthMedia(1200)