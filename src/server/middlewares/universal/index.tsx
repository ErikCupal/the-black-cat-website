/* tslint:disable: no-any no-var-requires */
import { Context } from 'koa'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import cs from 'react-intl/locale-data/cs'
import { Helmet } from 'react-helmet'

import renderHtml from './renderHtml'
import configureStore from '../../../common/store/configureStore'
import Routes from '../../../common/routes'
import csTranslations from '../../../common/translations/cs'
const styleSheet = require('styled-components/lib/models/StyleSheet')
import detectLocale from '../../functions/detectLocale'

addLocaleData(cs)
const languages = ['en', 'cs']

const universal = async (ctx: Context, next: () => Promise<any>) => {

  const locale = detectLocale(ctx, languages)

  const context: any = {}
  const { store } = configureStore()

  const messages = locale === 'cs'
    ? csTranslations
    : undefined

  const html = renderToString(
    <IntlProvider locale={locale} messages={messages}>
      <Provider store={store}>
        <StaticRouter location={ctx.req.url} context={context}>
          <Routes />
        </StaticRouter>
      </Provider>
    </IntlProvider>
  )

  const getCSS = () => styleSheet.rules().map((rule: any) => rule.cssText).join('\n')
  const getMeta = () => {
    const helmet = Helmet.renderStatic()
    const meta = `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    `.trim()
    return meta
  }

  !!context.url
    ? ctx.redirect(context.url)
    : ctx.body = renderHtml(html, getCSS(), store.getState(), getMeta(), locale, messages)

  await next()
}

export default universal