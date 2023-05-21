import express from 'express';
import cors from 'cors';

const app = express()

// Application Routes
import userRoutes from './app/modules/user/user.route'

// cors
app.use(cors())

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use('/api/v1/user', userRoutes);

export default app;