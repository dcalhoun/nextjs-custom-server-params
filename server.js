const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const pathMatch = require('path-match');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    const route = pathMatch();
    const match = route('/dynamic-page/:token');
    const params = match(pathname);

    if (params) {
      app.render(req, res, '/dynamic-page', Object.assign(params, query));
    } else if (pathname === '/static-page') {
      app.render(req, res, '/static-page', query);
    } else if (pathname === '/static-page/nested') {
      app.render(req, res, '/static-page-nested', query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
