import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import movie from './lib/routes/movie';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/movie', movie);

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello API!' });
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
