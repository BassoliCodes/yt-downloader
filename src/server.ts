import express from 'express';
import morgan from 'morgan';
import router from './routes';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/uploads', express.static('uploads'));

server.use(morgan('dev'));

server.use('/v1', router);

export default server;
