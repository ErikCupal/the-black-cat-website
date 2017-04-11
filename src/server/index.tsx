import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
import send from 'koa-send'
import mount from 'koa-mount'
import webpackMiddleware from 'koa-2-webpack'
const router = new Router()

import universal from './middlewares/universal'
import requestLogger from './middlewares/requestLogger'
import webpackConfig, { publicPath } from './webpack.client'

const { log } = console
const debug = process.env.NODE_ENV !== 'production'
const root = process.cwd()

debug
  ? log('🏎️ Development\n\n')
  : log('🤵 Production\n\n')

log('🏁 Starting app')

const app = new Koa()
const port: number = (process.env.PORT || '3000')

if (debug) {
  log('💼🔥 Initalizing webpack middleware')

  app
    .use(webpackMiddleware({
      config: webpackConfig,
      dev: { noInfo: true, publicPath },
    }))
    .use(requestLogger)
}

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(mount('/js/app.js', async ctx => await send(ctx, '/build/production/app.js')))
  .use(mount('/', serve(root + '/public')))
  .use(universal)
  .listen(port, () => console.log(`🚀 Server is listening on http://localhost:${port} 🎉\n\n`))