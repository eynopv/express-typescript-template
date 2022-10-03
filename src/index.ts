import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  return res.send({});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting express server on port ${port}`);
});
