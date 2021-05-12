/* eslint-disable new-cap */
import { IRepository, WordRepository } from '../repositories';
import { getRepository, ObjectLiteral } from 'typeorm';
import { mocked } from 'ts-jest/utils';
import { mock } from 'jest-mock-extended';
import { Word } from '../data/entities/word.entity';
import { generateWords } from '../../test/utils/generate';

const repoMock = mock<ObjectLiteral>();

jest.mock('typeorm', () => {
	return {
		getRepository: () => repoMock,
		PrimaryGeneratedColumn: () => {},
		Column: () => {},
		Entity: () => {},
	};
});

const mockedGetRepo = mocked(getRepository(<jest.Mock>{}));
const wordRepository: IRepository<Word> = new WordRepository();

beforeEach(() => {
	mockedGetRepo.find.mockClear();
	mockedGetRepo.findOne.mockClear();
	mockedGetRepo.save.mockClear();
});

describe('WordRepository', () => {
	it('should return empty array', async () => {
		mockedGetRepo.find.mockResolvedValue([]);
		const words = await wordRepository.findAll();

		expect(words).toEqual([]);
		expect(mockedGetRepo.find).toHaveBeenCalledWith();
		expect(mockedGetRepo.find).toHaveBeenCalledTimes(1);
	});

	it('should return word list', async () => {
		const actual = generateWords(4);

		mockedGetRepo.find.mockResolvedValue(actual);
		const expected = await wordRepository.findAll();

		expect(actual).toEqual(expected);
		expect(mockedGetRepo.find).toHaveBeenCalledWith();
		expect(mockedGetRepo.find).toHaveBeenCalledTimes(1);
	});
});
