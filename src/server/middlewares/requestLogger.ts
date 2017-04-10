import { Context } from 'koa'
const { log } = console

const logRequest = () => {
  const date = new Date()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const day = date.getDate()
  const month = date.getMonth()

  log(`✈️ Request - ${day}.${month}. - ${hour}:${minute}:${second}`)
}

const requestLogger = async (ctx: Context, next: () => Promise<object>) => {
  logRequest()
  await next()
}

export default requestLogger