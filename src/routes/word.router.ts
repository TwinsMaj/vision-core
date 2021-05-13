/* eslint-disable new-cap */
import { Word } from '../data';
import { WordController } from '../controllers';
import express, { Request, Response, Router } from 'express';
import { IRepository, WordRepository } from '../repositories';

const router: Router = express.Router();
const wordRepository: IRepository<Word> = new WordRepository();
const controller: WordController = new WordController(wordRepository);

router.get('/', async (_req: Request, res: Response) => {
	const response = await controller.getWords();

	return res.send(response);
});

export default router;
