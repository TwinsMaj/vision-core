/* eslint-disable new-cap */
import express, { Router } from 'express';
import WordRouter from './word.router';
const router: Router = express.Router();

router.use('/words', WordRouter);

export default router;
