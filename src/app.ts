import express, { Request, Response } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
import { notFoundAPI } from './middlewares/notFoundAPI';
import router from './routes';
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'server is running successfully' });
});

app.use(globalErrorHandler);
app.use(notFoundAPI);

export default app;
