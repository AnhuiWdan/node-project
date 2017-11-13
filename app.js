const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')

const app = new Koa()
const router = require('./router')

// 制定public目录为静态资源目录， 用来存放js css 等
app.use(staticFiles(path.resolve(__dirname, "./public")))

app.use(nunjucks({
  ext: 'html',
  path: path.join(__dirname, 'views'), // 指定视图目录
  nunjucksConfig: {
    trimBlocks: true // 开启转移 防Xss
  }
}))

app.use(bodyParser())
router(app)
app.listen(8080, () => {
  console.log('server is running at http://localhost:8080')
});