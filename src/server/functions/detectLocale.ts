import { Context } from 'koa'

export default (ctx: Context, languages: string[]): string => {
  const locale = (() => {
    const languageFromRequestHeader = ctx.acceptsLanguages(languages)
    
    if (typeof languageFromRequestHeader !== 'boolean') {
      return languageFromRequestHeader
    }

    return 'en'
  })()

  return locale
}