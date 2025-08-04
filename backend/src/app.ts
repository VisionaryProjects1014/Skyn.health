import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';

import healthRouter from './routes/health';
import contactRouter from './routes/contact';
import newsletterRouter from './routes/newsletter';
import { errorHandler } from './middleware/errorHandler';

// Initialize database connection
import './database/database';

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
}));
app.use(morgan('dev'));

app.use('/api/health', healthRouter);
app.use('/api/contact', contactRouter);
app.use('/api/newsletter', newsletterRouter);

app.use(errorHandler);

export default app; 