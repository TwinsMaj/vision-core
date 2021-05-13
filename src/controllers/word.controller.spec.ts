import { WordController } from './word.controller';
import { IRepository, WordRepository } from '../repositories';
import { Word } from '../data/entities/word.entity';
import { generateWords } from '../../test/utils/generate';

afterEach(() => {
	jest.resetAllMocks();
});

describe('WordController', () => {
	it('should return empty array', async () => {
		const spy = jest.spyOn(new WordRepository(), 'findAll').mockResolvedValueOnce([]);
		const wordRepository: IRepository<Word> = new WordRepository();
		const controller = new WordController(wordRepository);
		const words = await controller.getWords();

		expect(words).toEqual([]);
		expect(spy).toHaveBeenCalledWith();
		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('should return word list', async () => {
		const expected = generateWords(2);
		const spy = jest.spyOn(new WordRepository(), 'findAll').mockResolvedValueOnce(expected);
		const wordRepository: IRepository<Word> = new WordRepository();
		const controller = new WordController(wordRepository);
		const actual = await controller.getWords();

		expect(expected).toEqual(actual);
		expect(spy).toHaveBeenCalledWith();
		expect(spy).toHaveBeenCalledTimes(1);
	});
});
