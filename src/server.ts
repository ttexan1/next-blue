import express from 'express';
import next from 'next';
import { parse } from 'url';

const isProduction = process.env.NODE_ENV === 'production';
const app = next({ dev: !isProduction });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();
  console.log("Deployed")
  server.use((req, res, next) => {
    // const schema = req.headers['x-forwarded-proto'];
    // if (isProduction && schema !== 'https') {
    //   return res.redirect(`https://${req.headers.host}${req.url}`);
    // }
    next();
  });
  // handle nextjs routing
  server.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  await server.listen(8080);
  console.log(`Ready on http://localhost:${8080}`);
})();
