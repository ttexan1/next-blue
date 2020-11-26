import express from 'express';
import next from 'next';
import { parse } from 'url';

const DEFAULT_API_BASE_URL = 'https://console-api-staging.dooh-geniee.jp';

// 空文字渡した時は自己責任ってことで
const apiBaseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL;
const isProduction = process.env.NODE_ENV === 'production';
const app = next({ dev: isProduction });
const handle = app.getRequestHandler();

(async (): Promise<void> => {
  await app.prepare();
  const server = express();
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', apiBaseUrl);
    const schema = req.headers['x-forwarded-proto'];
    console.log(schema);
    if (isProduction && schema !== 'https') {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });
  // handle nextjs routing
  server.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  await server.listen(8080);
  console.log(`Ready on http://localhost:${8080}`); // eslint-disable-line no-console
})();
