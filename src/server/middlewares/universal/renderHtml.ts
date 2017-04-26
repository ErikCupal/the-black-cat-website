import { State } from '../../../common/types/index'
import htmlTemplate from './html5'
import serialize from 'serialize-javascript'

const fonts = `
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500&amp;subset=latin-ext" rel="stylesheet">
`

const injectApp = (path: string) => `<script src="${path}"></script>`

const injectState = (preloadedState: State) => `
  <script>
    window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })}
  </script>
`

const injectTranslatedMessagesIfTheyExist = (messages: { [key: string]: string } | undefined) => `
  <script>
    window.translatedMessages = ${messages ? serialize(messages, { isJSON: true }) : undefined}
  </script>
`

const injectLocale = (locale: string) => `<script>window.appLocale = '${locale}' </script>`

const injectCssIds = (ids: object) => `<script>window._glam = ${JSON.stringify(ids)}</script>`


const renderHtml = (
  html: string,
  css: string,
  ids: object,
  preloadedState: State,
  meta: string,
  locale: string,
  translatedMessages: { [key: string]: string } | undefined,
) => htmlTemplate(
  meta ? meta : '<title>App</title>',
  'app',
  html,
  css,
  fonts,
  injectLocale(locale)
  + injectTranslatedMessagesIfTheyExist(translatedMessages)
  + injectCssIds(ids)
  + injectState(preloadedState)
  + injectApp('/js/app.js'),
  )

export default renderHtml