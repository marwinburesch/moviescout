import { Router } from 'express';
import {
  getLatestMovies,
  getMovie,
  getPopularMovies,
  searchMovie,
} from '../models/movie';

const router = Router();

router.get('/popular', async (_req, res) => {
  try {
    const popularMovies = await getPopularMovies();
    res.json(popularMovies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/latest', async (_req, res) => {
  const latestMovies = await getLatestMovies();
  res.json(latestMovies);
});

router.get('/search', async (req, res) => {
  const query = req.query.q;
  if (typeof query !== 'string') {
    res.status(400).json({ message: 'Query must be a string' });
    return;
  }
  const movies = await searchMovie(query);
  res.json(movies);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await getMovie(id);
    res.json(movie);
  } catch (err) {
    res.status(404).json({ error: 'Movie not found' });
  }
});

export default router;
