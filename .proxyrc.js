const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app)  {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://localhost:8085/"
        })
    );
    app.use((req, res, next) =>{
        res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
        next();
    })
}
