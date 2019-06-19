const koa = require('koa');
const app = new koa();

app .use(async(ctx) => {
    // 当get请求的时候，显示表单让用户填写
    if(ctx.url==='/' && ctx.method==='GET'){
        let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST" action="/">
                <p>user Name</p>
                <input name="userName"/><br/>
                <p>age</p>
                <input name="age"/><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    // 当请求时POST的时候
    } else if(ctx.url==='/' && ctx.method === 'POST') {
        ctx.body='接收到POST请求';
    } else {
        // 其他请求 显示404
        ctx.body='<h1>404!</h1>'
    }
})

app.listen(3000, () => {
    console.log('[demo02] server is starting at port 3000')
})