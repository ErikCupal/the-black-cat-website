/* tslint:disable: no-any */
import { Context } from 'koa'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import { getStyles } from 'typestyle'

import renderHtml from './renderHtml'
import configureStore from '../../../common/store/configureStore'
import Routes from '../../../common/routes'

const universal = async (ctx: Context, next: () => Promise<any>) => {

  const context: any = {}
  const { store } = configureStore()

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.req.url} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  )

  !!context.url
    ? ctx.redirect(context.url)
    : ctx.body = renderHtml(html, getStyles(), store.getState())

  await next()
}

export default universal