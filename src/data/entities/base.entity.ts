/* eslint-disable require-jsdoc */
import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
	// eslint-disable-next-line new-cap
	@PrimaryGeneratedColumn()
	public id: number;
}
