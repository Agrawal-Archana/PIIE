const { createProxyMiddleWare } = require('http-proxy-middleware');

const HTTP_PROXY_STATUS_CODE = 234;

module.exports = (app) => {
  app.get('/user', (request, response) => {
    response.status(HTTP_PROXY_STATUS_CODE);
    response.send({
      authenticated: true,
    });
  });

  app.use(
    [
      '/user',
    ],
    createProxyMiddleWare({
      target: 'https://piie.in',
      changeOrigin: true,
    }),
  );
};
