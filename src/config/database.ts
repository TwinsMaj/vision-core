import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
	type: 'mysql',
	host: process.env.MYSQL_HOST || 'localhost',
	port: Number(process.env.MYSQL_PORT) || 3306,
	username: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_ROOT_PASSWORD || 'romantic',
	database: process.env.MYSQL_DATABASE || 'vision',
	entities: ['src/data/entities/**/*.entity.ts'],
	migrations: ['src/data/migrations/**/*.ts'],
	synchronize: true,
};

export default config;
