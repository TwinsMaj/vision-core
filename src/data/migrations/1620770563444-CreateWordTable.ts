/* eslint-disable require-jsdoc */
import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Word } from '../entities/word.entity';

export class CreateWordTable1620770563444 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE IF NOT EXISTS word (
    			id INT AUTO_INCREMENT PRIMARY KEY,
    			word VARCHAR(255) NOT NULL,
				created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
			)  ENGINE=INNODB;`,
		);
		await this.seed();
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "word"`, undefined);
	}

	private async seed(): Promise<void> {
		await getRepository(Word).save([
			{ id: 1, word: 'hello' },
			{ id: 2, word: 'jungle' },
			{ id: 3, word: 'repository' },
			{ id: 4, word: 'rope' },
			{ id: 5, word: 'stroller' },
			{ id: 6, word: 'maternity' },
			{ id: 7, word: 'car' },
			{ id: 8, word: 'rocket' },
			{ id: 9, word: 'technology' },
			{ id: 10, word: 'hero' },
		] as Word[]);
	}
}
