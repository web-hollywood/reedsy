import { json as BodyParserJson, urlencoded as BodyParserUrlEncoded } from 'body-parser';
import express from 'express';
import AppRouter from './app/approuter';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = Number.parseInt(process.env.PORT || '3000');


app.use(BodyParserJson());
app.use(BodyParserUrlEncoded({
  extended: true
}));

// Mount Application Router
app.use(new AppRouter().getRouter());

// Serve the application at the given port
app.listen(port, () => {
  // Success callback
  console.log(`Listening at http://localhost:${port}/`);
});