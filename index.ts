import dotenv from 'dotenv';
import express, { Request, Response, Application } from 'express';

/* eslint-disable import/no-unassigned-import */
import './validators/envValidator';
import './database';
/* eslint-enable import/no-unassigned-import */

import { logger } from './utils/loggers/logger';

// For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  logger.info(`Server is Fire at http://localhost:${port}`);
});
