/* eslint-disable require-jsdoc */

import faker from 'faker';
import { Word } from '../../src/data/entities/word.entity';

interface iWord {
	id: number;
	word: string;
}
export const generateWordData = (overide = {}): iWord => {
	return {
		id: faker.random.number(),
		word: faker.lorem.word(),
		...overide,
	};
};

export const generateWordsData = (n = 1): Array<iWord> => {
	return Array.from(
		{
			length: n,
		},
		(_, i) => {
			return generateWordData();
		},
	);
};
