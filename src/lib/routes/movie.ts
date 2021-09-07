import { Router } from 'express';
import {
  getLatestMovies,
  getMovie,
  getMovies,
  getMoviesByGenre,
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

router.get('/discover', async (req, res) => {
  const { genre } = req.query;
  if (!genre) {
    res.status(400).json({ message: 'Genre is required' });
    return;
  } else if (typeof genre !== 'string') {
    res.status(400).json({ message: 'Genre must be a string' });
    return;
  }
  const discoverMovies = await getMoviesByGenre(genre);
  res.json(discoverMovies);
});

router.get('/search', async (req, res) => {
  const { query, genre } = req.query;
  if (!query) {
    res.status(400).json({ message: 'Query is required' });
    return;
  } else if (typeof query !== 'string') {
    res.status(400).json({ message: 'Query must be a string' });
    return;
  }
  if (genre) {
    if (typeof genre !== 'string') {
      res.status(400).json({ message: 'Genre must be a string' });
      return;
    }
    const movies = await searchMovie(query, genre);
    res.json(movies);
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

router.get('/list', async (req, res) => {
  const { ids } = req.query;
  if (!ids) {
    res.status(400).json({ message: 'Ids are required' });
    return;
  } else if (typeof ids !== 'string') {
    res.status(400).json({ message: 'Ids must be a string' });
    return;
  }
  const idList = ids.split(',');
  try {
    const movies = await getMovies(idList);
    res.json(movies);
  } catch (err) {
    res.status(404).json({ error: 'Movie/s not found' });
  }
});

export default router;
