/*
 * @Description: entry main javascript file
 * @Author: lingshi
 * @Date: 2022-06-12 20:41:28
 * @LastEditTime: 2022-06-12 20:41:50
 * @LastEditors: lingshi
 */
const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", async function (ctx) {
    ctx.body = {message: "Hello World!"}
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
