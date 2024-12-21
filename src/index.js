import express from 'express';
import morgan from 'morgan';
import router from './routes/index.js';
import value from './config/env.js';
import handlerException from './middlewares/handlerException.js';
import purifyInyection from './middlewares/purifyInyection.js';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(purifyInyection);
app.use('/api', ...router);



app.use(handlerException);

const { PORT } = value;
app.listen( PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);