// import express from 'express';
// import next from 'next';
// import { parse } from 'url';

// const isProduction = process.env.NODE_ENV === 'production';
// const app = next({ dev: isProduction });
// const handle = app.getRequestHandler();

// (async (): Promise<void> => {
//   await app.prepare();
//   const server = express();
//   server.use((req, res, next) => {
//     // const schema = req.headers['x-forwarded-proto'];
//     // if (isProduction && schema !== 'https') {
//     //   return res.redirect(`https://${req.headers.host}${req.url}`);
//     // }
//     next();
//   });
//   // handle nextjs routing
//   server.all('*', (req, res) => {
//     const parsedUrl = parse(req.url, true);
//     handle(req, res, parsedUrl);
//   });

//   await server.listen(8080);
//   console.log(`Ready on http://localhost:${8080}`);
// })();


// server.js
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url ?? '', true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(8080, () => {
    console.log('> Ready on http://localhost:8080')
  })
})