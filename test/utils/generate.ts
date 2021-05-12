/* eslint-disable require-jsdoc */

import faker from 'faker';

interface iWord {
	id: number;
	word: string;
}
export const generateWordData = (overide = {}): iWord => {
	return {
		id: faker.datatype.number(),
		word: faker.lorem.word(),
		...overide,
	};
};

export const generateWords = (n = 1): Array<iWord> => {
	return Array.from(
		{
			length: n,
		},
		() => {
			return generateWordData();
		},
	);
};
