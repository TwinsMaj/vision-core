/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import { Word } from '../data';
import { IRepository } from '../repositories';
import { Get, Route, Tags } from 'tsoa';

@Route('words')
@Tags('Word')
export class WordController {
	private readonly _repository: IRepository<Word>;

	constructor(repository: IRepository<Word>) {
		this._repository = repository;
	}

	@Get('/')
	public async getWords(): Promise<Array<Word>> {
		return this._repository.findAll();
	}
}
