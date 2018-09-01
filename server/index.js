import Koa from 'koa';
import views from 'koa-views';
import path from 'path';
const app = new Koa();
app.use(views(path.resolve(__dirname, '../views'), {
    extension: 'ejs'
}))
app.use(async (ctx, next) => {
    if (ctx.path === '/') {
        await ctx.render('index', {
            title: '你好，周杨'
        })
    }
});
app.listen(2300)