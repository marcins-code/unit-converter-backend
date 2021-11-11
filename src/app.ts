import express, { Application, Request, Response, NextFunction } from 'express';

// Boot express
const app: Application = express();
const port = 3000;

// Application routing
app.use('/', (req: Request, res: Response, _next: NextFunction) => {
  res.status(200).send({ data: 'Hello from Oranio AS' });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
