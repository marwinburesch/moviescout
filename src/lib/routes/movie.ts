import { Router } from 'express';
import { getLatestMovies, getMovie, getPopularMovies } from '../models/movie';

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
