/* eslint-disable require-jsdoc */
import { getRepository, Repository } from 'typeorm';
import { IRepository } from './repository.interface';
import { Word } from '../data';

export class WordRepository implements IRepository<Word> {
	public async findAll(): Promise<Word[]> {
		const repository: Repository<Word> = getRepository(Word);

		return repository.find();
	}
}
