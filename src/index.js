import express from 'express';
import morgan from 'morgan';
import router from './routes/index.js';
import value from './config/env.js';
import handlerException from './middlewares/handlerException.js';
import purifyInyection from './middlewares/purifyInyection.js';
import authRouter from './routes/auth.routes.js';
import jwtMiddleware from './middlewares/jwtMiddleware.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(purifyInyection);
app.use('/api', authRouter);
app.use(jwtMiddleware);
app.use('/api', ...router);

app.use(handlerException);

const { PORT } = value;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
/**
 * Archivo principal de la aplicación, en donde se configura el servidor
 */
