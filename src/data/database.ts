import { Connection, createConnection } from 'typeorm';
import config from '../config/database';

export const connectDB = async (): Promise<Connection> => {
	return createConnection(config);
};
