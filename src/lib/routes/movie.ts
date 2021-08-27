import { Router } from 'express';
import { getMovie, getPopularMovies } from '../models/movie';

const router = Router();

router.get('/popular', async (_req, res) => {
  const popularMovies = await getPopularMovies();
  res.json(popularMovies);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const movie = await getMovie(id);
  res.json(movie);
});

export default router;
