/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Word extends BaseEntity {
	@Column()
	public word: string;
}
