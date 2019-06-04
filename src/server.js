import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
import config from 'config';

const app = express(feathers());
const { host, port } = config.get('App');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
app.use(express.errorHandler());

app.listen(port, () => console.log(`Hello World app is running on http://${host}:${port}`));
