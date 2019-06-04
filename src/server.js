import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
import config from 'config';

import entryService from './services/entry';

const app = express(feathers());
const { host, port } = config.get('App');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
app.use(express.errorHandler());

// Routes
app.use('/test', entryService);

app.listen(port, () => console.log(`Server is running on http://${host}:${port}`));
