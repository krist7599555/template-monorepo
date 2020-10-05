import Koa from 'koa'
import Router from 'koa-router'
import cors from '@koa/cors'
import body_parser from 'koa-bodyparser'
import { uniqueId } from 'lodash'

const db = {
  users: [
    { id: uniqueId(), name: 'krist' },
    { id: uniqueId(), name: 'namkang' },
    { id: uniqueId(), name: 'velody' },
    { id: uniqueId(), name: 'piew' },
    { id: uniqueId(), name: 'pinn' },
    { id: uniqueId(), name: 'pooms' },
  ],
}

const router = new Router()
  .prefix("/api")
  .get("/", ctx => {
    ctx.body = {
      meta: {
        app: "KOA API"
      }
    }
  })
  .get("/users", ctx => {
    ctx.body = {
      data: db.users
    }
  })
  .post("/users", ctx => {
    const { name } = ctx.request.body
    ctx.assert(name, 400, 'name is required')
    const user = {
      id: uniqueId(),
      name
    }
    db.users.push(user)
    ctx.body = {
      data: user
    }
  })

const app = new Koa()
  .use(cors())
  .use(body_parser())
  .use(router.routes())
  .use(router.allowedMethods())

const PORT = process.env.PORT ?? '3000'
app.listen(+PORT, () => {
  console.log(`server is listen on http://0.0.0.0:${PORT}/api`)
})